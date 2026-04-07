import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Skribbl.css';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    get,
    onValue,
    update,
    remove,
    onDisconnect,
    type Database,
} from 'firebase/database';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Avatar {
    color: string;   // hex
    eyes: number;    // 0-3
    mouth: number;   // 0-3
}

interface Player {
    id: string;
    name: string;
    avatar: Avatar;
    score: number;
    isHost: boolean;
    joinedAt: number;
    hasGuessed: boolean;
}

interface Stroke {
    tool: 'pen' | 'eraser' | 'fill';
    color: string;
    size: number;
    points: { x: number; y: number }[];
}

interface GuessMsg {
    id: string;
    pid: string;
    name: string;
    text: string;
    correct: boolean;
    close: boolean;
    sentAt: number;
}

interface RoomState {
    status: 'lobby' | 'choosing' | 'drawing' | 'round-end' | 'results';
    hostId: string;
    createdAt: number;
    settings: {
        rounds: number;
        drawTime: number;
        chooseTime: number;
        hintLetters: number;
        customWords: string;
    };
    game: {
        currentDrawerId: string;
        currentWord: string;
        wordChoices: string[];
        roundIdx: number;
        turnEndsAt: number;
        chooseEndsAt: number;
        prevScores: Record<string, number>;
    };
    canvas: string; // JSON-serialised Stroke[]
}

// ─── Constants ─────────────────────────────────────────────────────────────────
const PID_KEY = 'skribbl_pid';
const NAME_KEY = 'skribbl_name';
const AVATAR_KEY = 'skribbl_avatar';

const AVATAR_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#38bdf8', '#a78bfa', '#f97316', '#14b8a6'];

const PALETTE = [
    '#000000', '#737373', '#ffffff', '#ef4444',
    '#f97316', '#eab308', '#22c55e', '#3b82f6',
    '#8b5cf6', '#ec4899', '#a16207', '#164e63',
];

const DEFAULT_WORDS_EN = [
    'apple', 'guitar', 'mountain', 'hospital', 'bicycle', 'umbrella', 'elephant', 'butterfly',
    'pizza', 'castle', 'rocket', 'dolphin', 'camera', 'rainbow', 'volcano', 'astronaut',
    'lighthouse', 'chocolate', 'telephone', 'jellyfish',
    'penguin', 'tornado', 'bridge', 'robot', 'airplane', 'cactus', 'island', 'snowflake',
    'train', 'pyramid', 'dragon', 'whale', 'fireworks', 'compass', 'suitcase', 'helmet',
    'anchor', 'balloon', 'submarine', 'forest', 'desert', 'waterfall', 'satellite', 'telescope',
    'key', 'lock', 'clock', 'ladder', 'backpack', 'skateboard', 'microphone', 'headphones',
    'lantern', 'map', 'treasure', 'shield', 'sword', 'crown', 'gem', 'scroll',
    'owl', 'fox', 'panda', 'kangaroo', 'peacock', 'flamingo', 'parrot', 'snail',
];
const DEFAULT_WORDS_BISAYA = [
    'dagat', 'bukid', 'balay', 'tiyan', 'adlaw', 'buwan', 'bato', 'kahoy',
    'isda', 'manok', 'iro', 'iring', 'saging', 'mangga', 'tubig', 'langit',
    'hangin', 'ulan', 'asin', 'gatas', 'bukog', 'dugo', 'mata', 'ilong', 'baba', 'kamot', 'tiil', 'ulo',
    'dalan', 'sakyanan', 'balay-kubo', 'eskwelahan', 'merkado', 'simbahan',
    'lamesa', 'lingkuranan', 'higdaanan', 'bintana', 'pultahan',
    'sapatos', 'sinina', 'kalo', 'tsinelas',
    'itlog', 'kan-on', 'sabaw', 'utan', 'isda-prito', 'karne',
    'kape', 'tsaa', 'asukal', 'mantika',
    'baybayon', 'suba', 'sapa', 'bungtod', 'lasang',
    'bituon', 'balangaw', 'kilat', 'dalugdog',
    'lamok', 'langgam', 'kanding', 'baka', 'kabayo',
    'bulak', 'dahon', 'ugat', 'sanga', 'prutas',
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
function uid() { return Math.random().toString(36).slice(2, 11); }
function genCode() {
    const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () => c[Math.floor(Math.random() * c.length)]).join('');
}
function getOrCreatePid() {
    let p = sessionStorage.getItem(PID_KEY);
    if (!p) { p = uid(); sessionStorage.setItem(PID_KEY, p); }
    return p;
}
function isClose(guess: string, word: string) {
    const g = guess.trim().toLowerCase();
    const w = word.toLowerCase();
    if (g === w) return false;
    // Simple Levenshtein distance ≤ 2
    if (Math.abs(g.length - w.length) > 2) return false;
    let dist = 0;
    const longer = g.length > w.length ? g : w;
    const shorter = g.length > w.length ? w : g;
    for (let i = 0; i < shorter.length; i++) {
        if (longer[i] !== shorter[i]) dist++;
    }
    dist += Math.abs(g.length - w.length);
    return dist <= 2;
}
function pickWords(pool: string[], n: number): string[] {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}
function scoreForTime(timeLeft: number, drawTime: number): number {
    return Math.round(200 + 600 * (timeLeft / drawTime));
}
function seededShuffle<T>(arr: T[], seed: string): T[] {
    let st = seed.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 17);
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        st = (st * 1664525 + 1013904223) & 0x7fffffff;
        const j = st % (i + 1);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function getHintDisplay(word: string, turnEndsAt: number, drawTime: number, hintLetters: number): string {
    if (!word) return '';
    const timeLeft = Math.max(0, Math.floor((turnEndsAt - Date.now()) / 1000));
    const elapsed = drawTime - timeLeft;
    const segmentSize = drawTime / (hintLetters + 1);
    const numRevealed = Math.min(hintLetters, Math.max(0, Math.floor(elapsed / segmentSize)));
    const positions = word.split('').map((c, i) => ({ c, i })).filter(({ c }) => c !== ' ').map(({ i }) => i);
    const shuffled = seededShuffle(positions, word);
    const toReveal = new Set(shuffled.slice(0, numRevealed));
    return word.split('').map((c, i) => {
        if (c === ' ') return ' ';
        return toReveal.has(i) ? c : '_';
    }).join(' ');
}

// ─── Firebase ──────────────────────────────────────────────────────────────────
let _dbInstance: Database | null = null;
function initFirebase(): Database {
    const cfg = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
    const app = getApps().length ? getApp() : initializeApp(cfg);
    _dbInstance = getDatabase(app);
    return _dbInstance;
}

// ─── Avatar SVG ────────────────────────────────────────────────────────────────
function AvatarSVG({ avatar, size = 56 }: { avatar: Avatar; size?: number }) {
    const eyeShapes = [
        // dots
        <><circle cx="19" cy="22" r="3" fill="#111" /><circle cx="37" cy="22" r="3" fill="#111" /></>,
        // stars
        <><text x="14" y="27" fontSize="10" fill="#111">★</text><text x="32" y="27" fontSize="10" fill="#111">★</text></>,
        // hearts
        <><text x="13" y="27" fontSize="10" fill="#e11d48">♥</text><text x="31" y="27" fontSize="10" fill="#e11d48">♥</text></>,
        // sleepy
        <><path d="M16 22 Q19 19 22 22" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M34 22 Q37 19 40 22" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" /></>,
    ];
    const mouthShapes = [
        // smile
        <path d="M18 34 Q28 42 38 34" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
        // grin (teeth)
        <><path d="M17 33 Q28 43 39 33" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M21 36 Q28 42 35 36" fill="white" stroke="none" /><path d="M21 36 Q28 42 35 36" stroke="#111" strokeWidth="1.2" fill="none" /></>,
        // cat
        <><path d="M24 35 Q28 32 32 35" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" /><line x1="22" y1="32" x2="16" y2="30" stroke="#111" strokeWidth="1.5" /><line x1="34" y1="32" x2="40" y2="30" stroke="#111" strokeWidth="1.5" /></>,
        // meh
        <line x1="19" y1="36" x2="37" y2="36" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />,
    ];
    return (
        <svg width={size} height={size} viewBox="0 0 56 56" className="sk-avatar">
            <circle cx="28" cy="28" r="26" fill={avatar.color} />
            {eyeShapes[avatar.eyes % eyeShapes.length]}
            {mouthShapes[avatar.mouth % mouthShapes.length]}
        </svg>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Skribbl() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const pid = useRef(getOrCreatePid());

    // ── Local state ──
    const [view, setView] = useState<'home' | 'creating' | 'joining'>('home');
    const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || '');
    const [avatar, setAvatar] = useState<Avatar>(() => {
        try { return JSON.parse(localStorage.getItem(AVATAR_KEY) || '{}') as Avatar; } catch { return { color: AVATAR_COLORS[0], eyes: 0, mouth: 0 }; }
    });
    const [joinCode, setJoinCode] = useState('');
    const [inputError, setInputError] = useState('');

    // ── Room state ──
    const [db, setDb] = useState<Database | null>(null);
    const [roomCode, setRoomCode] = useState('');
    const [inRoom, setInRoom] = useState(false);
    const [roomState, setRoomState] = useState<RoomState | null>(null);
    const [players, setPlayers] = useState<Record<string, Player>>({});
    const [guesses, setGuesses] = useState<GuessMsg[]>([]);
    const [strokes, setStrokes] = useState<Stroke[]>([]);
    const [guessInput, setGuessInput] = useState('');
    const [hasGuessedThisTurn, setHasGuessedThisTurn] = useState(false);
    const [, setTick] = useState(0);
    const [copied, setCopied] = useState(false);
    const [language, setLanguage] = useState<'english' | 'bisaya'>('english');

    // ── Canvas drawing ──
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const currentStroke = useRef<Stroke | null>(null);
    const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(6);
    const lastPos = useRef<{ x: number; y: number } | null>(null);

    const unsubsRef = useRef<(() => void)[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // ── Persist name & avatar ──
    useEffect(() => { localStorage.setItem(NAME_KEY, name); }, [name]);
    useEffect(() => { localStorage.setItem(AVATAR_KEY, JSON.stringify(avatar)); }, [avatar]);

    // ── Init Firebase ──
    useEffect(() => {
        if (_dbInstance) { setDb(_dbInstance); return; }
        try { setDb(initFirebase()); } catch (e) { console.error(e); }
    }, []);

    // ── Handle join-via-URL ──
    useEffect(() => {
        const code = searchParams.get('room');
        if (code) setJoinCode(code.toUpperCase());
    }, [searchParams]);

    // ── Cleanup on unmount ──
    useEffect(() => () => { unsubsRef.current.forEach(f => f()); }, []);

    // ── Tick for timers ──
    useEffect(() => {
        const t = setInterval(() => setTick(n => n + 1), 1000);
        return () => clearInterval(t);
    }, []);

    // ── Auto-scroll chat ──
    useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [guesses]);

    // ── Redraw canvas whenever strokes change ──
    useEffect(() => {
        redrawCanvas(strokes);
    }, [strokes]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  FIREBASE SUBSCRIPTIONS (when in room)
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!db || !roomCode) return;
        const base = `skribbl-rooms/${roomCode}`;

        const u1 = onValue(ref(db, `${base}/state`), snap => {
            const val = snap.val() as RoomState | null;
            setRoomState(val);
            if (val?.status === 'drawing') setHasGuessedThisTurn(false);
        });
        const u2 = onValue(ref(db, `${base}/players`), snap => {
            setPlayers((snap.val() as Record<string, Player>) || {});
        });
        const u3 = onValue(ref(db, `${base}/guesses`), snap => {
            const raw = (snap.val() || {}) as Record<string, GuessMsg>;
            const list = Object.values(raw).sort((a, b) => a.sentAt - b.sentAt);
            setGuesses(list);
        });
        const u4 = onValue(ref(db, `${base}/canvas`), snap => {
            const raw = snap.val() as string | null;
            try {
                const parsed: Stroke[] = raw ? JSON.parse(raw) : [];
                setStrokes(parsed);
            } catch { setStrokes([]); }
        });

        unsubsRef.current.push(u1, u2, u3, u4);
        return () => { u1(); u2(); u3(); u4(); };
    }, [db, roomCode]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  HOST: advance turn when timer expires
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db) return;
        const isHost = roomState.hostId === pid.current;
        if (!isHost) return;
        if (roomState.status !== 'drawing') return;
        const { turnEndsAt } = roomState.game;
        if (!turnEndsAt) return;
        const msLeft = turnEndsAt - Date.now();
        if (msLeft > 0) {
            const t = setTimeout(() => endTurn(), msLeft);
            return () => clearTimeout(t);
        } else {
            endTurn();
        }
    }, [roomState?.game?.turnEndsAt, roomState?.status]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  HOST: auto-advance from round-end after 5s
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db) return;
        const isHost = roomState.hostId === pid.current;
        if (!isHost || roomState.status !== 'round-end') return;
        const t = setTimeout(() => advanceAfterRoundEnd(), 5000);
        return () => clearTimeout(t);
    }, [roomState?.status, roomState?.game?.roundIdx]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  HOST: auto-pick word when choosing timer expires
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db) return;
        const isHostNow = roomState.hostId === pid.current;
        if (!isHostNow || roomState.status !== 'choosing') return;
        const chooseEndsAt = roomState.game.chooseEndsAt ?? 0;
        if (!chooseEndsAt) return;
        const autopick = () => {
            const choices = roomState.game.wordChoices ?? [];
            if (choices.length > 0) chooseWord(choices[Math.floor(Math.random() * choices.length)]);
        };
        const msLeft = chooseEndsAt - Date.now();
        if (msLeft > 0) {
            const t = setTimeout(autopick, msLeft);
            return () => clearTimeout(t);
        } else {
            autopick();
        }
    }, [roomState?.game?.chooseEndsAt, roomState?.status]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  CANVAS DRAWING
    // ─────────────────────────────────────────────────────────────
    function getCanvasPos(e: React.PointerEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        };
    }

    function redrawCanvas(strokeList: Stroke[]) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (const stroke of strokeList) {
            if (stroke.tool === 'fill') {
                ctx.fillStyle = stroke.color;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                continue;
            }
            if (stroke.points.length < 2) continue;
            ctx.beginPath();
            ctx.strokeStyle = stroke.tool === 'eraser' ? '#ffffff' : stroke.color;
            ctx.lineWidth = stroke.size;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
            for (let i = 1; i < stroke.points.length; i++) {
                ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
            }
            ctx.stroke();
        }
    }

    function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
        if (!isDrawerNow()) return;
        isDrawing.current = true;
        const pos = getCanvasPos(e);
        lastPos.current = pos;
        currentStroke.current = { tool, color: tool === 'eraser' ? '#ffffff' : color, size: brushSize, points: [pos] };
        (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    }

    function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
        if (!isDrawing.current || !currentStroke.current || !isDrawerNow()) return;
        const pos = getCanvasPos(e);
        currentStroke.current.points.push(pos);

        // Draw incrementally on local canvas
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        if (lastPos.current) {
            ctx.beginPath();
            ctx.strokeStyle = currentStroke.current.tool === 'eraser' ? '#ffffff' : currentStroke.current.color;
            ctx.lineWidth = currentStroke.current.size;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.moveTo(lastPos.current.x, lastPos.current.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
        lastPos.current = pos;
    }

    function onPointerUp() {
        if (!isDrawing.current || !currentStroke.current) return;
        isDrawing.current = false;
        const stroke = currentStroke.current;
        currentStroke.current = null;
        lastPos.current = null;
        if (stroke.points.length === 0) return;
        pushStroke(stroke);
    }

    function handleFill() {
        if (!isDrawerNow()) return;
        const fillStroke: Stroke = { tool: 'fill', color, size: 0, points: [] };
        pushStroke(fillStroke);
    }

    function pushStroke(stroke: Stroke) {
        if (!db || !roomCode) return;
        setStrokes(prev => {
            const next = [...prev, stroke];
            set(ref(db, `skribbl-rooms/${roomCode}/canvas`), JSON.stringify(next)).catch(() => { });
            return next;
        });
    }

    function clearCanvas() {
        if (!db || !roomCode || !isDrawerNow()) return;
        set(ref(db, `skribbl-rooms/${roomCode}/canvas`), '[]').catch(() => { });
    }

    // ─────────────────────────────────────────────────────────────
    //  HELPERS
    // ─────────────────────────────────────────────────────────────
    const playerList = Object.values(players).sort((a, b) => b.score - a.score);
    const isHost = roomState?.hostId === pid.current;
    function isDrawerNow() {
        return roomState?.status === 'drawing' && roomState?.game?.currentDrawerId === pid.current;
    }

    function getWordPool() {
        const custom = roomState?.settings?.customWords?.trim();
        if (custom) {
            const words = custom.split(/[\n,]+/).map(w => w.trim()).filter(Boolean);
            if (words.length >= 3) return words;
        }
        return language === 'bisaya' ? DEFAULT_WORDS_BISAYA : DEFAULT_WORDS_EN;
    }

    // ─────────────────────────────────────────────────────────────
    //  ROOM ACTIONS
    // ─────────────────────────────────────────────────────────────
    async function createRoom() {
        if (!db) return;
        if (!name.trim()) { setInputError('Enter your name first.'); return; }
        const code = genCode();
        setRoomCode(code);
        const base = `skribbl-rooms/${code}`;
        const playerData: Player = { id: pid.current, name: name.trim(), avatar, score: 0, isHost: true, joinedAt: Date.now(), hasGuessed: false };
        const roomData: RoomState = {
            status: 'lobby',
            hostId: pid.current,
            createdAt: Date.now(),
            settings: { rounds: 3, drawTime: 80, chooseTime: 15, hintLetters: 1, customWords: '' },
            game: { currentDrawerId: '', currentWord: '', wordChoices: [], roundIdx: 0, turnEndsAt: 0, chooseEndsAt: 0, prevScores: {} },
            canvas: '[]',
        };
        await set(ref(db, base + '/state'), roomData);
        await set(ref(db, base + '/players/' + pid.current), playerData);
        onDisconnect(ref(db, base + '/players/' + pid.current)).remove();
        setInRoom(true);
    }

    async function joinRoom() {
        if (!db) return;
        if (!name.trim()) { setInputError('Enter your name first.'); return; }
        if (!joinCode.trim()) { setInputError('Enter a room code.'); return; }
        const code = joinCode.trim().toUpperCase();
        const snap = await get(ref(db, `skribbl-rooms/${code}/state`));
        if (!snap.exists()) { setInputError('Room not found.'); return; }
        const state = snap.val() as RoomState;
        if (state.status !== 'lobby') { setInputError('Game already started.'); return; }
        const playerData: Player = { id: pid.current, name: name.trim(), avatar, score: 0, isHost: false, joinedAt: Date.now(), hasGuessed: false };
        await set(ref(db, `skribbl-rooms/${code}/players/${pid.current}`), playerData);
        onDisconnect(ref(db, `skribbl-rooms/${code}/players/${pid.current}`)).remove();
        setRoomCode(code);
        setInRoom(true);
    }

    async function leaveRoom() {
        if (!db || !roomCode) return;
        const base = `skribbl-rooms/${roomCode}`;
        await remove(ref(db, `${base}/players/${pid.current}`));
        if (isHost) await remove(ref(db, base));
        setInRoom(false);
        setRoomCode('');
        setRoomState(null);
        setPlayers({});
        setGuesses([]);
        setStrokes([]);
        unsubsRef.current.forEach(f => f());
        unsubsRef.current = [];
    }

    async function startGame() {
        if (!db || !roomCode || !isHost) return;
        const pList = Object.values(players).sort((a, b) => a.joinedAt - b.joinedAt);
        if (pList.length < 2) return;
        const firstDrawer = pList[0];
        const pool = getWordPool();
        const choices = pickWords(pool, 3);
        const base = `skribbl-rooms/${roomCode}`;
        const chooseTime = roomState?.settings?.chooseTime ?? 15;
        await update(ref(db, `${base}/state`), {
            status: 'choosing',
            'game/currentDrawerId': firstDrawer.id,
            'game/wordChoices': choices,
            'game/roundIdx': 0,
            'game/currentWord': '',
            'game/turnEndsAt': 0,
            'game/chooseEndsAt': Date.now() + chooseTime * 1000,
            'game/prevScores': {},
        });
        // Reset hasGuessed
        const resets: Record<string, boolean> = {};
        pList.forEach(p => { resets[p.id] = false; });
        for (const p of pList) {
            await update(ref(db, `${base}/players/${p.id}`), { hasGuessed: false, score: 0 });
        }
        await set(ref(db, `${base}/guesses`), null);
        await set(ref(db, `${base}/canvas`), '[]');
    }

    async function chooseWord(word: string) {
        if (!db || !roomCode) return;
        const drawTime = roomState?.settings?.drawTime ?? 80;
        await update(ref(db, `skribbl-rooms/${roomCode}/state`), {
            status: 'drawing',
            'game/currentWord': word,
            'game/wordChoices': [],
            'game/turnEndsAt': Date.now() + drawTime * 1000,
        });
        await set(ref(db, `skribbl-rooms/${roomCode}/canvas`), '[]');
    }

    async function endTurn() {
        if (!db || !roomCode || !roomState) return;
        const base = `skribbl-rooms/${roomCode}`;
        // capture current scores as prevScores for round-end display
        const prev: Record<string, number> = {};
        Object.values(players).forEach(p => { prev[p.id] = p.score; });
        await update(ref(db, `${base}/state`), {
            status: 'round-end',
            'game/prevScores': prev,
        });
    }

    async function advanceAfterRoundEnd() {
        if (!db || !roomCode || !roomState) return;
        const base = `skribbl-rooms/${roomCode}`;
        const pList = Object.values(players).sort((a, b) => a.joinedAt - b.joinedAt);
        const totalTurns = pList.length * roomState.settings.rounds;
        const nextIdx = (roomState.game.roundIdx ?? 0) + 1;

        if (nextIdx >= totalTurns) {
            await update(ref(db, `${base}/state`), { status: 'results' });
            return;
        }

        const nextDrawer = pList[nextIdx % pList.length];
        const pool = getWordPool();
        const choices = pickWords(pool, 3);

        for (const p of pList) {
            await update(ref(db, `${base}/players/${p.id}`), { hasGuessed: false });
        }
        await set(ref(db, `${base}/guesses`), null);
        await set(ref(db, `${base}/canvas`), '[]');
        const chooseTime = roomState.settings.chooseTime ?? 15;
        await update(ref(db, `${base}/state`), {
            status: 'choosing',
            'game/currentDrawerId': nextDrawer.id,
            'game/wordChoices': choices,
            'game/roundIdx': nextIdx,
            'game/currentWord': '',
            'game/turnEndsAt': 0,
            'game/chooseEndsAt': Date.now() + chooseTime * 1000,
        });
    }

    async function sendGuess() {
        if (!db || !roomCode || !guessInput.trim()) return;
        if (isDrawer || roomState?.status !== 'drawing') return;

        // Post-guess chat — player already guessed, just send a plain message
        if (hasGuessedThisTurn) {
            const msg: GuessMsg = {
                id: uid(), pid: pid.current,
                name: players[pid.current]?.name ?? 'Me',
                text: guessInput.trim(), correct: false, close: false, sentAt: Date.now(),
            };
            setGuessInput('');
            await set(ref(db, `skribbl-rooms/${roomCode}/guesses/${msg.id}`), msg);
            return;
        }

        if (!roomState?.game?.currentWord) return;
        const word = roomState.game.currentWord.toLowerCase();
        const g = guessInput.trim().toLowerCase();
        const correct = g === word;
        const close = !correct && isClose(g, word);

        const msg: GuessMsg = {
            id: uid(),
            pid: pid.current,
            name: players[pid.current]?.name ?? 'Me',
            text: correct ? '✅ guessed the word!' : guessInput.trim(),
            correct,
            close,
            sentAt: Date.now(),
        };
        setGuessInput('');

        await set(ref(db, `skribbl-rooms/${roomCode}/guesses/${msg.id}`), msg);

        if (correct) {
            setHasGuessedThisTurn(true);
            const drawTime = roomState.settings.drawTime;
            const timeLeft = Math.max(0, Math.floor((roomState.game.turnEndsAt - Date.now()) / 1000));
            const points = scoreForTime(timeLeft, drawTime);
            await update(ref(db, `skribbl-rooms/${roomCode}/players/${pid.current}`), {
                score: (players[pid.current]?.score ?? 0) + points,
                hasGuessed: true,
            });
            // Also give drawer points
            const drawer = players[roomState.game.currentDrawerId];
            if (drawer) {
                await update(ref(db, `skribbl-rooms/${roomCode}/players/${drawer.id}`), {
                    score: (drawer.score ?? 0) + 50,
                });
            }
            // Check if everyone has guessed
            const nonDrawers = Object.values(players).filter(p => p.id !== roomState.game.currentDrawerId);
            const allGuessed = nonDrawers.every(p => p.hasGuessed || p.id === pid.current);
            if (allGuessed && isHost) endTurn();
        }
    }

    async function updateSettings(field: string, val: number | string) {
        if (!db || !roomCode || !isHost) return;
        await update(ref(db, `skribbl-rooms/${roomCode}/state/settings`), { [field]: val });
    }

    function copyCode() {
        navigator.clipboard.writeText(roomCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
    }
    const shareUrl = `${window.location.origin}/eGov-Game/skribbl?room=${roomCode}`;
    function copyUrl() { navigator.clipboard.writeText(shareUrl); }

    // ─────────────────────────────────────────────────────────────
    //  RENDER
    // ─────────────────────────────────────────────────────────────

    // ── HOME ──────────────────────────────────────────────────────
    if (!inRoom) return (
        <div className="sk-container">
            <div className="sk-card">
                <h1 className="sk-title">🎨 eGov Skribbl</h1>
                <p className="sk-subtitle">Draw. Guess. Laugh.</p>

                {/* Name */}
                <span className="sk-label">Your Name</span>
                <input className="sk-input" style={{ marginBottom: '1rem' }} placeholder="Enter your name…" maxLength={20} value={name} onChange={e => { setName(e.target.value); setInputError(''); }} />

                {/* Avatar Builder */}
                <span className="sk-label">Avatar</span>
                <div className="sk-avatar-preview"><AvatarSVG avatar={avatar} size={72} /></div>

                <div className="sk-avatar-section">
                    <span className="sk-label">Color</span>
                    <div className="sk-avatar-options">
                        {AVATAR_COLORS.map(c => (
                            <button key={c} className={`sk-avatar-opt${avatar.color === c ? ' sk-avatar-opt--selected' : ''}`} onClick={() => setAvatar(a => ({ ...a, color: c }))}>
                                <div className="sk-color-swatch" style={{ background: c }} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="sk-avatar-section">
                    <span className="sk-label">Eyes</span>
                    <div className="sk-avatar-options">
                        {['👁️', '⭐', '❤️', '😴'].map((e, i) => (
                            <button key={i} className={`sk-avatar-opt${avatar.eyes === i ? ' sk-avatar-opt--selected' : ''}`} onClick={() => setAvatar(a => ({ ...a, eyes: i }))}>{e}</button>
                        ))}
                    </div>
                </div>

                <div className="sk-avatar-section">
                    <span className="sk-label">Mouth</span>
                    <div className="sk-avatar-options">
                        {['😊', '😁', '😸', '😐'].map((m, i) => (
                            <button key={i} className={`sk-avatar-opt${avatar.mouth === i ? ' sk-avatar-opt--selected' : ''}`} onClick={() => setAvatar(a => ({ ...a, mouth: i }))}>{m}</button>
                        ))}
                    </div>
                </div>

                <hr className="sk-divider" />

                {inputError && <p className="sk-error" style={{ marginBottom: '0.75rem' }}>{inputError}</p>}

                {view === 'home' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="sk-btn sk-btn--primary sk-btn--full sk-btn--lg" onClick={() => setView('creating')}>🏠 Create Room</button>
                        <button className="sk-btn sk-btn--secondary sk-btn--full sk-btn--lg" onClick={() => setView('joining')}>🔗 Join Room</button>
                        <button className="sk-btn sk-btn--ghost sk-btn--full" onClick={() => navigate(-1)}>← Back</button>
                    </div>
                )}

                {view === 'creating' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span className="sk-label">Word Language</span>
                        <select className="sk-input" style={{ marginBottom: '0.5rem' }} value={language} onChange={e => setLanguage(e.target.value as 'english' | 'bisaya')}>
                            <option value="english">English</option>
                            <option value="bisaya">Bisaya</option>
                        </select>
                        <button className="sk-btn sk-btn--primary sk-btn--full sk-btn--lg" onClick={createRoom}>Create Room →</button>
                        <button className="sk-btn sk-btn--ghost sk-btn--full" onClick={() => setView('home')}>← Back</button>
                    </div>
                )}

                {view === 'joining' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <input className="sk-input" placeholder="Room code (e.g. XKQZ48)" maxLength={6} value={joinCode} onChange={e => { setJoinCode(e.target.value.toUpperCase()); setInputError(''); }} onKeyDown={e => e.key === 'Enter' && joinRoom()} style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, fontSize: '1.1rem' }} />
                        <button className="sk-btn sk-btn--primary sk-btn--full sk-btn--lg" onClick={joinRoom}>Join Room →</button>
                        <button className="sk-btn sk-btn--ghost sk-btn--full" onClick={() => setView('home')}>← Back</button>
                    </div>
                )}
            </div>
        </div>
    );

    if (!roomState) return <div className="sk-container"><div className="sk-card sk-waiting-banner">Connecting…</div></div>;

    // ── LOBBY ─────────────────────────────────────────────────────
    if (roomState.status === 'lobby') return (
        <div className="sk-container">
            <div className="sk-card">
                <div className="sk-lobby-header">
                    <div>
                        <div className="sk-room-label">Room Code</div>
                        <div className="sk-room-code" onClick={copyCode} title="Click to copy">{copied ? '✅ Copied!' : roomCode}</div>
                    </div>
                    <button className="sk-btn sk-btn--ghost sk-btn--sm" onClick={leaveRoom}>{isHost ? 'Close' : 'Leave'}</button>
                </div>

                <div className="sk-share-row">
                    <span className="sk-share-url">{shareUrl}</span>
                    <button className="sk-btn sk-btn--ghost sk-btn--sm" onClick={copyUrl}>Copy Link</button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="sk-label" style={{ margin: 0 }}>Players</span>
                    <span className="sk-badge">{playerList.length}</span>
                    {playerList.length < 2 && <span className="sk-hint" style={{ marginLeft: '0.25rem' }}>Need at least 2</span>}
                </div>

                <div className="sk-player-list" style={{ marginBottom: '1rem' }}>
                    {playerList.map(p => (
                        <div key={p.id} className={`sk-player-chip${p.id === pid.current ? ' sk-player-chip--me' : ''}`}>
                            <AvatarSVG avatar={p.avatar} size={28} />
                            {p.isHost && <span className="sk-host-badge">HOST</span>}
                            {p.name}
                        </div>
                    ))}
                </div>

                {isHost ? (
                    <>
                        <hr className="sk-divider" />
                        <span className="sk-label">Game Settings</span>
                        <div className="sk-config-section">
                            <div className="sk-config-row">
                                <span className="sk-config-label">🔄 Rounds</span>
                                <div className="sk-config-controls">
                                    <button className="sk-icon-btn" onClick={() => updateSettings('rounds', Math.max(1, (roomState.settings.rounds ?? 3) - 1))}>−</button>
                                    <span className="sk-config-value">{roomState.settings.rounds}</span>
                                    <button className="sk-icon-btn" onClick={() => updateSettings('rounds', Math.min(10, (roomState.settings.rounds ?? 3) + 1))}>+</button>
                                </div>
                            </div>
                            <div className="sk-config-row">
                                <span className="sk-config-label">⏱ Draw Time</span>
                                <div className="sk-config-controls">
                                    <button className="sk-icon-btn" onClick={() => updateSettings('drawTime', Math.max(30, (roomState.settings.drawTime ?? 80) - 10))}>−</button>
                                    <span className="sk-config-value">{roomState.settings.drawTime}s</span>
                                    <button className="sk-icon-btn" onClick={() => updateSettings('drawTime', Math.min(180, (roomState.settings.drawTime ?? 80) + 10))}>+</button>
                                </div>
                            </div>
                            <div className="sk-config-row">
                                <span className="sk-config-label">⏳ Choose Time</span>
                                <div className="sk-config-controls">
                                    <button className="sk-icon-btn" onClick={() => updateSettings('chooseTime', Math.max(5, (roomState.settings.chooseTime ?? 15) - 5))}>−</button>
                                    <span className="sk-config-value">{roomState.settings.chooseTime ?? 15}s</span>
                                    <button className="sk-icon-btn" onClick={() => updateSettings('chooseTime', Math.min(30, (roomState.settings.chooseTime ?? 15) + 5))}>+</button>
                                </div>
                            </div>
                            <div className="sk-config-row">
                                <span className="sk-config-label">💡 Hint Letters</span>
                                <div className="sk-config-controls">
                                    <button className="sk-icon-btn" onClick={() => updateSettings('hintLetters', Math.max(0, (roomState.settings.hintLetters ?? 1) - 1))}>−</button>
                                    <span className="sk-config-value">{roomState.settings.hintLetters ?? 1}</span>
                                    <button className="sk-icon-btn" onClick={() => updateSettings('hintLetters', Math.min(5, (roomState.settings.hintLetters ?? 1) + 1))}>+</button>
                                </div>
                            </div>
                        </div>

                        <span className="sk-label">Custom Word List (optional)</span>
                        <textarea
                            className="sk-textarea"
                            placeholder="Enter custom words separated by commas or new lines…"
                            value={roomState.settings.customWords ?? ''}
                            onChange={e => updateSettings('customWords', e.target.value)}
                            style={{ marginBottom: '1rem' }}
                        />

                        <button
                            className="sk-btn sk-btn--primary sk-btn--full sk-btn--lg"
                            disabled={playerList.length < 2}
                            onClick={startGame}
                        >
                            {playerList.length < 2 ? `Need ${2 - playerList.length} more player` : 'Start Game →'}
                        </button>
                    </>
                ) : (
                    <div className="sk-waiting-banner">⏳ Waiting for host to start the game…</div>
                )}
            </div>
        </div>
    );

    // ── RESULTS ───────────────────────────────────────────────────
    if (roomState.status === 'results') {
        const sorted = [...playerList];
        const top3 = sorted.slice(0, 3);
        const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;
        const heights = [80, 110, 60];
        const podiumHeightClass = ['sk-podium-bar--2', 'sk-podium-bar--1', 'sk-podium-bar--3'];
        return (
            <div className="sk-container">
                <div className="sk-card">
                    <h2 className="sk-title">🏆 Final Results</h2>
                    {top3.length >= 2 && (
                        <div className="sk-podium">
                            {podiumOrder.map((p, i) => p && (
                                <div key={p.id} className="sk-podium-slot">
                                    <AvatarSVG avatar={p.avatar} size={40} />
                                    <div className={`sk-podium-bar ${podiumHeightClass[i]}`} style={{ height: heights[i] }}>
                                        {i === 1 ? '🥇' : i === 0 ? '🥈' : '🥉'}
                                    </div>
                                    <div className="sk-podium-name">{p.name}</div>
                                    <div className="sk-podium-score">{p.score} pts</div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="sk-leaderboard">
                        {sorted.map((p, i) => (
                            <div key={p.id} className={`sk-lb-row${p.id === pid.current ? ' sk-player-chip--me' : ''}`}>
                                <span className="sk-lb-rank">{i + 1}</span>
                                <AvatarSVG avatar={p.avatar} size={28} />
                                <span className="sk-lb-name">{p.name}{p.id === pid.current ? ' (you)' : ''}</span>
                                <span className="sk-lb-score">{p.score} pts</span>
                            </div>
                        ))}
                    </div>
                    <hr className="sk-divider" />
                    {isHost ? (
                        <button className="sk-btn sk-btn--primary sk-btn--full" onClick={() => update(ref(db!, `skribbl-rooms/${roomCode}/state`), { status: 'lobby', 'game/roundIdx': 0 })}>Play Again</button>
                    ) : (
                        <p className="sk-hint" style={{ textAlign: 'center' }}>Waiting for host to start again…</p>
                    )}
                    <button className="sk-btn sk-btn--ghost sk-btn--full" style={{ marginTop: '0.5rem' }} onClick={leaveRoom}>Leave Room</button>
                </div>
            </div>
        );
    }

    // ── GAME SCREENS (choosing / drawing / round-end) ─────────────────────────
    const { game } = roomState;
    const isDrawer = game.currentDrawerId === pid.current;
    const currentDrawerPlayer = players[game.currentDrawerId];
    const timeLeft = roomState.status === 'drawing' ? Math.max(0, Math.floor((game.turnEndsAt - Date.now()) / 1000)) : 0;
    const chooseTimeLeft = roomState.status === 'choosing' ? Math.max(0, Math.floor(((game.chooseEndsAt ?? 0) - Date.now()) / 1000)) : 0;
    const isLow = timeLeft <= 10 && timeLeft > 0;
    const roundNum = Math.floor((game.roundIdx ?? 0) / Math.max(1, playerList.length)) + 1;

    const wordDisplay = roomState.status === 'drawing'
        ? (isDrawer ? game.currentWord : getHintDisplay(game.currentWord, game.turnEndsAt, roomState.settings.drawTime, roomState.settings.hintLetters ?? 1))
        : roomState.status === 'round-end'
            ? game.currentWord
            : '…';

    return (
        <div className="sk-game-container">
            <div className="sk-game-layout">

                {/* TOP BAR */}
                <div className="sk-topbar">
                    <span className="sk-topbar-round">Round {roundNum}/{roomState.settings.rounds} · Turn {(game.roundIdx ?? 0) % Math.max(1, playerList.length) + 1}/{playerList.length}</span>
                    <span className={`sk-topbar-word${!isDrawer && roomState.status === 'drawing' ? ' sk-topbar-word--blanks' : ''}`}>
                        {roomState.status === 'choosing'
                            ? (isDrawer ? 'Choose a word…' : `${currentDrawerPlayer?.name ?? '…'} is choosing…`)
                            : roomState.status === 'round-end'
                                ? `The word was: ${wordDisplay}`
                                : wordDisplay
                        }
                    </span>
                    {roomState.status === 'drawing' && (
                        <span className={`sk-topbar-timer${isLow ? ' sk-topbar-timer--low' : ''}`}>{timeLeft}</span>
                    )}
                    {isHost && roomState.status === 'drawing' && (
                        <button className="sk-btn sk-btn--ghost sk-btn--sm" onClick={endTurn}>Skip</button>
                    )}
                </div>

                {/* PLAYERS PANEL */}
                <div className="sk-players-panel">
                    {playerList.map(p => (
                        <div key={p.id} className={`sk-player-row${p.id === game.currentDrawerId ? ' sk-player-row--drawing' : ''}${p.hasGuessed && p.id !== game.currentDrawerId ? ' sk-player-row--guessed' : ''}${p.id === pid.current ? ' sk-player-row--me' : ''}`}>
                            <AvatarSVG avatar={p.avatar} size={28} />
                            <span className="sk-player-name">{p.name}{p.id === pid.current ? ' (you)' : ''}</span>
                            {p.id === game.currentDrawerId && <span className="sk-pencil-icon">✏️</span>}
                            {p.hasGuessed && p.id !== game.currentDrawerId && <span className="sk-pencil-icon">✅</span>}
                            <span className="sk-player-score">{p.score}</span>
                        </div>
                    ))}
                </div>

                {/* CANVAS AREA */}
                <div className="sk-canvas-area">
                    <div className="sk-canvas-wrapper">
                        <canvas
                            ref={canvasRef}
                            className="sk-canvas"
                            width={800}
                            height={500}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerLeave={onPointerUp}
                            style={{ cursor: isDrawer && roomState.status === 'drawing' ? (tool === 'eraser' ? 'cell' : 'crosshair') : 'default' }}
                        />
                        {/* not drawer — block events */}
                        {(!isDrawer || roomState.status !== 'drawing') && <div className="sk-canvas-blocked" />}

                        {/* Word choice overlay */}
                        {roomState.status === 'choosing' && isDrawer && (
                            <div className="sk-overlay">
                                <div className="sk-overlay-title">Choose a word to draw</div>
                                {chooseTimeLeft > 0 && (
                                    <div className={`sk-choose-timer${chooseTimeLeft <= 5 ? ' sk-choose-timer--low' : ''}`}>{chooseTimeLeft}s</div>
                                )}
                                <div className="sk-word-choices">
                                    {(game.wordChoices ?? []).map(w => (
                                        <button key={w} className="sk-word-choice-btn" onClick={() => chooseWord(w)}>{w}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {roomState.status === 'choosing' && !isDrawer && (
                            <div className="sk-overlay">
                                <div className="sk-waiting-draw">✏️ {currentDrawerPlayer?.name ?? '…'} is choosing a word…</div>
                            </div>
                        )}
                        {/* Round end overlay */}
                        {roomState.status === 'round-end' && (
                            <div className="sk-overlay">
                                <div className="sk-round-end">
                                    <div className="sk-round-end-icon">🎉</div>
                                    <div className="sk-round-end-label">The word was</div>
                                    <div className="sk-round-end-word">{game.currentWord}</div>
                                    <div className="sk-score-deltas">
                                        {playerList.map(p => {
                                            const prev = game.prevScores?.[p.id] ?? 0;
                                            const delta = p.score - prev;
                                            return (
                                                <div key={p.id} className="sk-score-delta-row">
                                                    <AvatarSVG avatar={p.avatar} size={20} />
                                                    <span style={{ flex: 1, marginLeft: '0.4rem' }}>{p.name}</span>
                                                    {delta > 0 && <span className="delta">+{delta}</span>}
                                                    <span style={{ marginLeft: '0.5rem', color: '#7dd3fc', fontWeight: 700 }}>{p.score}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p className="sk-hint">Next turn starting soon…</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* TOOLBAR */}
                    {isDrawer && roomState.status === 'drawing' && (
                        <div className="sk-toolbar">
                            <button className={`sk-tool-btn${tool === 'pen' ? ' sk-tool-btn--active' : ''}`} onClick={() => setTool('pen')} title="Pen">✏️</button>
                            <button className={`sk-tool-btn${tool === 'eraser' ? ' sk-tool-btn--active' : ''}`} onClick={() => setTool('eraser')} title="Eraser">🧹</button>
                            <button className="sk-tool-btn" onClick={handleFill} title="Fill">🪣</button>
                            <button className="sk-tool-btn" onClick={clearCanvas} title="Clear">🗑️</button>
                            <div className="sk-color-palette">
                                {PALETTE.map(c => (
                                    <div key={c} className={`sk-palette-swatch${color === c ? ' sk-palette-swatch--active' : ''}`} style={{ background: c }} onClick={() => { setColor(c); setTool('pen'); }} />
                                ))}
                            </div>
                            <div className="sk-brush-size">
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Size</span>
                                <input type="range" min={2} max={40} value={brushSize} onChange={e => setBrushSize(Number(e.target.value))} />
                                <span style={{ color: '#fff', fontSize: '0.8rem', minWidth: '1.5rem' }}>{brushSize}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* CHAT / GUESS PANEL */}
                <div className="sk-chat-panel">
                    <div className="sk-chat-messages">
                        {guesses.map(g => (
                            <div key={g.id} className={`sk-chat-msg${g.correct ? ' sk-chat-msg--correct' : g.close ? ' sk-chat-msg--close' : g.pid === 'system' ? ' sk-chat-msg--system' : ''}`}>
                                {g.correct ? (
                                    <span className="sk-chat-text">🎉 {g.name} guessed it!</span>
                                ) : g.pid === 'system' ? (
                                    <span className="sk-chat-text">{g.text}</span>
                                ) : (
                                    <>
                                        <span className="sk-chat-name">{g.name}: </span>
                                        <span className="sk-chat-text">{g.close ? `${g.text} (close!)` : g.text}</span>
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="sk-chat-input-row">
                        <input
                            className="sk-chat-input"
                            placeholder={isDrawer ? 'You\'re drawing!' : hasGuessedThisTurn ? '✅ Chat freely…' : 'Type your guess…'}
                            value={guessInput}
                            disabled={isDrawer || roomState.status !== 'drawing'}
                            onChange={e => setGuessInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendGuess()}
                        />
                        <button className="sk-btn sk-btn--primary sk-btn--sm" disabled={isDrawer || roomState.status !== 'drawing'} onClick={sendGuess}>→</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
