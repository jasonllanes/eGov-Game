import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './TypingRace.css';
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

type Difficulty = 'easy' | 'medium' | 'hard';

interface Player {
    id: string;
    name: string;
    isHost: boolean;
    joinedAt: number;
    score: number;
    // per-round progress
    typedChars: number;    // chars correctly typed in current phrase
    finishedAt: number;    // ms timestamp when player finished this round (0 = not done)
    wpm: number;           // wpm for last round
    roundsCompleted: number;
}

interface RoomState {
    status: 'lobby' | 'countdown' | 'typing' | 'round-end' | 'results';
    hostId: string;
    createdAt: number;
    settings: {
        totalRounds: number;
        difficulty: Difficulty;
        customPhrases: string;   // newline/comma separated
        useAI: boolean;
    };
    game: {
        currentRound: number;    // 1-based
        phrase: string;
        roundStartsAt: number;
        countdownEndsAt: number;
        roundEndAt: number;      // 0 = no hard time limit (wait for all)
        phrases: string[];       // all 10 phrases for the game, pre-generated
    };
}

// ─── Phrase Banks ──────────────────────────────────────────────────────────────

const EASY_PHRASES = [
    'The quick brown fox jumps over the lazy dog.',
    'A journey of a thousand miles begins with a single step.',
    'To be or not to be that is the question.',
    'All that glitters is not gold.',
    'Actions speak louder than words.',
    'Every cloud has a silver lining.',
    'Knowledge is power and power is freedom.',
    'The early bird catches the worm.',
    'Practice makes perfect every time.',
    'A friend in need is a friend indeed.',
    'Better late than never but never late is better.',
    'You miss one hundred percent of the shots you do not take.',
    'The pen is mightier than the sword.',
    'When in doubt do not act without thinking.',
    'Look before you leap into any situation.',
    'Birds of a feather flock together always.',
    'Rome was not built in a single day.',
    'A picture is worth a thousand words.',
    'The only way to do great work is to love what you do.',
    'In the middle of every difficulty lies opportunity.',
];

const MEDIUM_PHRASES = [
    'The Philippine government is committed to transforming public services through digital innovation and technology.',
    'Electronic governance enables citizens to access government services conveniently from any location.',
    'Data privacy and information security are fundamental pillars of modern digital government systems.',
    'The integration of artificial intelligence in public administration streamlines bureaucratic processes significantly.',
    'Transparent and accountable governance fosters public trust and encourages active citizen participation.',
    'Local government units play a critical role in the decentralization of public service delivery.',
    'Digital literacy programs empower Filipino citizens to participate fully in the digital economy.',
    'Interoperability between government agencies is essential for seamless and efficient service delivery.',
    'Public procurement systems benefit enormously from electronic platforms that ensure transparency and reduce corruption.',
    'Smart cities leverage technology to optimize resource allocation and improve quality of life for residents.',
    'The deployment of fiber optic infrastructure is crucial for bridging the digital divide across provinces.',
    'Government cloud services offer scalable and cost-effective solutions for managing citizen data securely.',
    'Open data initiatives allow researchers and developers to create innovative applications for the public good.',
    'Blockchain technology can revolutionize land registration and property ownership records in the Philippines.',
    'The implementation of electronic identification systems simplifies verification processes for all government transactions.',
    'Cybersecurity frameworks must continuously evolve to protect critical government infrastructure from emerging threats.',
    'Digital payment gateways reduce cash transactions and improve the efficiency of government revenue collection.',
    'Capacity building programs ensure government employees possess the skills needed for digital transformation.',
    'The National ID System provides every Filipino with a single verifiable proof of identity and citizenship.',
    'Automation of routine government tasks frees up human resources for more complex policy decisions.',
];

const HARD_PHRASES = [
    'The exponential proliferation of interconnected digital infrastructure necessitates a comprehensive cybersecurity framework encompassing encryption protocols, multi-factor authentication, and continuous intrusion detection mechanisms.',
    'Algorithmic governance and machine learning applications in public administration must be carefully audited to prevent systemic bias and ensure equitable distribution of government resources across socioeconomic strata.',
    'The constitutional mandate for transparency in government procurement demands meticulous documentation, blockchain-based audit trails, and whistleblower protection mechanisms that withstand judicial scrutiny.',
    'Quantum computing advancements pose unprecedented challenges to current asymmetric cryptographic standards, compelling government agencies to accelerate post-quantum cryptography adoption timelines significantly.',
    'Federated learning architectures enable collaborative model training across distributed government databases without centralizing sensitive personally identifiable information, preserving individual privacy while maximizing analytical utility.',
    'The interoperability of heterogeneous legacy systems with contemporary microservice architectures requires comprehensive middleware solutions, standardized application programming interfaces, and rigorous regression testing methodologies.',
    'Geospatial data analytics combined with demographic profiling enables precision targeting of social welfare programs, optimizing resource allocation while minimizing bureaucratic overhead and administrative redundancies.',
    'The implementation of zero-trust network architectures in government data centers eliminates implicit trust assumptions and enforces granular access controls through continuous authentication and authorization verification.',
    'Decentralized autonomous organizations leveraging smart contracts could fundamentally restructure participatory budgeting processes, enabling direct citizen involvement in municipal expenditure prioritization without intermediary oversight.',
    'Regulatory sandboxes for financial technology innovations must balance fostering entrepreneurship with maintaining systemic financial stability, consumer protection imperatives, and anti-money laundering compliance requirements.',
    'The digital transformation of judicial processes through electronic filing systems and virtual hearings substantially reduces case backlogs while improving access to justice for geographically marginalized populations.',
    'Artificial intelligence-powered natural language processing systems can analyze vast repositories of legislative documents, identifying contradictions, redundancies, and gaps in existing regulatory frameworks with unprecedented precision.',
    'The establishment of government data sovereignty principles requires careful negotiation of international data transfer agreements, jurisdictional boundaries, and cross-border enforcement mechanisms for data protection violations.',
    'Predictive analytics models trained on historical public health data enable proactive resource allocation for epidemic preparedness, reducing mortality rates and minimizing economic disruption during outbreak scenarios.',
    'The harmonization of municipal, provincial, and national government information systems through standardized ontologies and taxonomies facilitates comprehensive policy impact assessments and evidence-based decision-making processes.',
];

// Difficulty scaling: round number => difficulty override for that round
function phraseDifficultyForRound(baseDifficulty: Difficulty, round: number, total: number): Difficulty {
    // Start easy, ramp to base difficulty, end hard
    const progress = (round - 1) / Math.max(total - 1, 1);
    if (progress < 0.3) {
        if (baseDifficulty === 'hard') return 'medium';
        return 'easy';
    }
    if (progress < 0.7) {
        if (baseDifficulty === 'easy') return 'easy';
        return 'medium';
    }
    return baseDifficulty === 'easy' ? 'easy' : baseDifficulty;
}

function pickPhrasesForGame(difficulty: Difficulty, total: number, custom: string): string[] {
    const customList = custom.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
    const phrases: string[] = [];
    for (let i = 1; i <= total; i++) {
        if (customList.length >= total) {
            phrases.push(customList[i - 1]);
        } else if (customList.length > 0) {
            // Mix custom + bank
            if (i <= customList.length) {
                phrases.push(customList[i - 1]);
            } else {
                const d = phraseDifficultyForRound(difficulty, i, total);
                const bank = d === 'easy' ? EASY_PHRASES : d === 'medium' ? MEDIUM_PHRASES : HARD_PHRASES;
                const pick = bank[Math.floor(Math.random() * bank.length)];
                phrases.push(pick);
            }
        } else {
            const d = phraseDifficultyForRound(difficulty, i, total);
            const bank = d === 'easy' ? EASY_PHRASES : d === 'medium' ? MEDIUM_PHRASES : HARD_PHRASES;
            const pick = bank[Math.floor(Math.random() * bank.length)];
            phrases.push(pick);
        }
    }
    return phrases;
}

// ─── AI Phrase Generation ──────────────────────────────────────────────────────

async function generateAIPhrases(apiKey: string, difficulty: Difficulty, total: number): Promise<string[]> {
    const diffDesc = difficulty === 'easy'
        ? 'simple and short (under 60 characters) sentences'
        : difficulty === 'medium'
            ? 'moderately complex sentences about technology, government, or everyday topics (60-150 characters)'
            : 'complex, technical sentences related to digital governance, cybersecurity, or public administration (150-300 characters)';
    const prompt = `Generate exactly ${total} typing race phrases for difficulty "${difficulty}". They should be ${diffDesc}. Number them 1 through ${total}. Each phrase on its own line. Format: just the phrase text with no numbering or extra punctuation.`;
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
            model: 'llama3-8b-8192',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.9,
            max_tokens: 2048,
        }),
    });
    if (!res.ok) throw new Error(`Groq error: ${res.status}`);
    const data = await res.json();
    const text: string = data.choices?.[0]?.message?.content ?? '';
    const lines = text.split('\n').map(l => l.replace(/^\d+[\.\)]\s*/, '').trim()).filter(Boolean);
    if (lines.length < total) throw new Error('Not enough phrases returned');
    return lines.slice(0, total);
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const PID_KEY = 'typing_pid';
const NAME_KEY = 'typing_name';
const GROQ_KEY = 'typing_groq_key';
const CUSTOM_KEY = 'typing_custom_phrases';
const COUNTDOWN_SECS = 3;

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
function calcWpm(charsTyped: number, elapsedMs: number): number {
    const minutes = elapsedMs / 60000;
    if (minutes <= 0) return 0;
    return Math.round((charsTyped / 5) / minutes);
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

// ─── Phrase Display with per-player cursor highlighting ───────────────────────

function PhraseDisplay({
    phrase,
    typed,
    otherPlayers,
    // playerColors,
}: {
    phrase: string;
    typed: string;   // local player's typed text
    otherPlayers: { name: string; typedChars: number; color: string }[];
    playerColors: Record<string, string>;
}) {
    // For each character position, determine what overlays exist
    const chars = phrase.split('');

    // Build a map of charIdx -> list of player cursors on that char
    const cursors: Record<number, { name: string; color: string }[]> = {};
    for (const op of otherPlayers) {
        const pos = Math.min(op.typedChars, phrase.length - 1);
        if (op.typedChars < phrase.length) {
            if (!cursors[pos]) cursors[pos] = [];
            cursors[pos].push({ name: op.name, color: op.color });
        }
    }
    // Local cursor
    // const localCursorPos = Math.min(typed.length, phrase.length - 1);

    return (
        <div className="tr-phrase-display" aria-label="Typing phrase">
            {chars.map((ch, i) => {
                const isCorrect = i < typed.length && typed[i] === ch;
                const isWrong = i < typed.length && typed[i] !== ch;
                const isCurrent = i === typed.length;
                const otherCursorsHere = cursors[i] ?? [];

                let className = 'tr-char';
                if (isCorrect) className += ' tr-char--correct';
                else if (isWrong) className += ' tr-char--wrong';
                else if (isCurrent) className += ' tr-char--cursor';

                return (
                    <span key={i} className={className} style={{ position: 'relative' }}>
                        {ch === ' ' ? '\u00A0' : ch}
                        {/* Other players' cursors */}
                        {otherCursorsHere.map(({ name, color }) => (
                            <span
                                key={name}
                                className="tr-other-cursor"
                                style={{ background: color }}
                                title={name}
                            >
                                <span className="tr-other-cursor-label" style={{ background: color }}>{name}</span>
                            </span>
                        ))}
                    </span>
                );
            })}
            {/* If local player is at the very end */}
            {typed.length >= phrase.length && (
                <span className="tr-char tr-char--done" />
            )}
        </div>
    );
}

// Assign colors to players
const PLAYER_COLORS = ['#38bdf8', '#f59e0b', '#34d399', '#f87171', '#a78bfa', '#fb923c', '#4ade80', '#e879f9'];
function getPlayerColor(idx: number) { return PLAYER_COLORS[idx % PLAYER_COLORS.length]; }

// ─── Main Component ────────────────────────────────────────────────────────────

export default function TypingRace() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const pid = useRef(getOrCreatePid());

    const [view, setView] = useState<'home' | 'creating' | 'joining' | 'phrase-settings'>('home');
    const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || '');
    const [joinCode, setJoinCode] = useState('');
    const [inputError, setInputError] = useState('');

    const [db, setDb] = useState<Database | null>(null);
    const [roomCode, setRoomCode] = useState('');
    const [inRoom, setInRoom] = useState(false);
    const [roomState, setRoomState] = useState<RoomState | null>(null);
    const [players, setPlayers] = useState<Record<string, Player>>({});

    const [, setTick] = useState(0);
    const [copied, setCopied] = useState(false);
    const unsubsRef = useRef<(() => void)[]>([]);

    // Input state
    const [typed, setTyped] = useState('');
    const [myFinishedThisRound, setMyFinishedThisRound] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const roundStartRef = useRef<number>(0);

    // Settings (host UI)
    // const [settingRounds, setSettingRounds] = useState(10);
    // const [settingDifficulty, setSettingDifficulty] = useState<Difficulty>('medium');
    const [settingCustom] = useState(() => localStorage.getItem(CUSTOM_KEY) || '');
    // const [settingUseAI, setSettingUseAI] = useState(false);
    const [apiKey, setApiKey] = useState(() => localStorage.getItem(GROQ_KEY) || '');
    const [aiLoading, setAiLoading] = useState(false);
    const [aiError, setAiError] = useState('');

    // Persist
    useEffect(() => { localStorage.setItem(NAME_KEY, name); }, [name]);
    useEffect(() => { localStorage.setItem(CUSTOM_KEY, settingCustom); }, [settingCustom]);

    // Init Firebase
    useEffect(() => {
        if (_dbInstance) { setDb(_dbInstance); return; }
        try { setDb(initFirebase()); } catch (e) { console.error(e); }
    }, []);

    // Handle join-via-URL
    useEffect(() => {
        const code = searchParams.get('room');
        if (code) { setJoinCode(code.toUpperCase()); setView('joining'); }
    }, [searchParams]);

    // Fetch Groq key from Firebase
    useEffect(() => {
        if (!db || localStorage.getItem(GROQ_KEY)) return;
        get(ref(db, 'config/groqApiKey')).then(snap => {
            if (snap.exists()) setApiKey(snap.val() as string);
        }).catch(() => { });
    }, [db]);

    // Cleanup
    useEffect(() => () => { unsubsRef.current.forEach(f => f()); }, []);

    // Tick every second for timers
    useEffect(() => {
        const t = setInterval(() => setTick(n => n + 1), 500);
        return () => clearInterval(t);
    }, []);

    // Focus input during typing
    useEffect(() => {
        if (roomState?.status === 'typing') {
            inputRef.current?.focus();
            roundStartRef.current = roomState.game.roundStartsAt;
        }
    }, [roomState?.status, roomState?.game?.currentRound]);

    // Reset typed when new round starts
    useEffect(() => {
        setTyped('');
        setMyFinishedThisRound(false);
    }, [roomState?.game?.currentRound]);

    // ─────────────────────────────────────────────────────────────
    //  FIREBASE SUBSCRIPTIONS
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!db || !roomCode) return;
        const base = `typing-rooms/${roomCode}`;

        const u1 = onValue(ref(db, `${base}/state`), snap => {
            setRoomState(snap.val() as RoomState | null);
        });
        const u2 = onValue(ref(db, `${base}/players`), snap => {
            setPlayers((snap.val() as Record<string, Player>) || {});
        });

        unsubsRef.current.push(u1, u2);
        return () => { u1(); u2(); };
    }, [db, roomCode]);

    // ─────────────────────────────────────────────────────────────
    //  HOST: countdown -> typing
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db) return;
        if (roomState.status !== 'countdown') return;
        if (roomState.hostId !== pid.current) return;
        const delay = roomState.game.countdownEndsAt - Date.now();
        const t = setTimeout(async () => {
            const now = Date.now();
            await update(ref(db, `typing-rooms/${roomCode}/state`), {
                status: 'typing',
                'game/roundStartsAt': now,
            });
            // Reset all players' progress
            const pList = Object.values(players);
            for (const p of pList) {
                await update(ref(db, `typing-rooms/${roomCode}/players/${p.id}`), {
                    typedChars: 0, finishedAt: 0, wpm: 0,
                });
            }
        }, Math.max(delay, 0) + 100);
        return () => clearTimeout(t);
    }, [roomState?.status, roomState?.game?.countdownEndsAt]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  HOST: check if all finished -> round-end
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db || roomState.status !== 'typing') return;
        if (roomState.hostId !== pid.current) return;
        const pList = Object.values(players);
        if (pList.length === 0) return;
        const allDone = pList.every(p => p.finishedAt > 0);
        if (allDone) {
            update(ref(db, `typing-rooms/${roomCode}/state`), { status: 'round-end' });
        }
    }, [players]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  HOST: auto-advance from round-end to next round
    // ─────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!roomState || !db || roomState.status !== 'round-end') return;
        if (roomState.hostId !== pid.current) return;
        const t = setTimeout(async () => {
            const { currentRound, phrases } = roomState.game;
            const total = roomState.settings.totalRounds;
            if (currentRound >= total) {
                await update(ref(db, `typing-rooms/${roomCode}/state`), { status: 'results' });
                return;
            }
            const nextRound = currentRound + 1;
            const nextPhrase = phrases[nextRound - 1];
            await update(ref(db, `typing-rooms/${roomCode}/state`), {
                status: 'countdown',
                'game/currentRound': nextRound,
                'game/phrase': nextPhrase,
                'game/countdownEndsAt': Date.now() + COUNTDOWN_SECS * 1000,
                'game/roundStartsAt': 0,
            });
        }, 5000);
        return () => clearTimeout(t);
    }, [roomState?.status, roomState?.game?.currentRound]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─────────────────────────────────────────────────────────────
    //  ROOM ACTIONS
    // ─────────────────────────────────────────────────────────────
    const playerList = Object.values(players).sort((a, b) => a.joinedAt - b.joinedAt);
    const isHost = roomState?.hostId === pid.current;

    async function createRoom() {
        if (!db) return;
        if (!name.trim()) { setInputError('Enter your name first.'); return; }
        const code = genCode();
        const base = `typing-rooms/${code}`;
        const playerData: Player = {
            id: pid.current, name: name.trim(), isHost: true, joinedAt: Date.now(),
            score: 0, typedChars: 0, finishedAt: 0, wpm: 0, roundsCompleted: 0,
        };
        const roomData: RoomState = {
            status: 'lobby',
            hostId: pid.current,
            createdAt: Date.now(),
            settings: { totalRounds: 10, difficulty: 'medium', customPhrases: '', useAI: false },
            game: { currentRound: 1, phrase: '', roundStartsAt: 0, countdownEndsAt: 0, roundEndAt: 0, phrases: [] },
        };
        await set(ref(db, `${base}/state`), roomData);
        await set(ref(db, `${base}/players/${pid.current}`), playerData);
        onDisconnect(ref(db, `${base}/players/${pid.current}`)).remove();
        setRoomCode(code);
        setInRoom(true);
    }

    async function joinRoom() {
        if (!db) return;
        if (!name.trim()) { setInputError('Enter your name first.'); return; }
        if (!joinCode.trim()) { setInputError('Enter a room code.'); return; }
        const code = joinCode.trim().toUpperCase();
        const snap = await get(ref(db, `typing-rooms/${code}/state`));
        if (!snap.exists()) { setInputError('Room not found.'); return; }
        const state = snap.val() as RoomState;
        if (state.status !== 'lobby') { setInputError('Game already started.'); return; }
        const playerData: Player = {
            id: pid.current, name: name.trim(), isHost: false, joinedAt: Date.now(),
            score: 0, typedChars: 0, finishedAt: 0, wpm: 0, roundsCompleted: 0,
        };
        await set(ref(db, `typing-rooms/${code}/players/${pid.current}`), playerData);
        onDisconnect(ref(db, `typing-rooms/${code}/players/${pid.current}`)).remove();
        setRoomCode(code);
        setInRoom(true);
    }

    async function leaveRoom() {
        if (!db || !roomCode) return;
        const base = `typing-rooms/${roomCode}`;
        await remove(ref(db, `${base}/players/${pid.current}`));
        if (isHost) await remove(ref(db, base));
        setInRoom(false);
        setRoomCode('');
        setRoomState(null);
        setPlayers({});
        unsubsRef.current.forEach(f => f());
        unsubsRef.current = [];
    }

    async function startGame() {
        if (!db || !roomCode || !isHost || !roomState) return;
        if (playerList.length < 2) return;
        const s = roomState.settings;
        let phrases: string[];

        if (s.useAI && apiKey) {
            setAiLoading(true);
            setAiError('');
            try {
                phrases = await generateAIPhrases(apiKey, s.difficulty, s.totalRounds);
            } catch (e) {
                setAiError('AI phrase generation failed. Using built-in phrases.');
                phrases = pickPhrasesForGame(s.difficulty, s.totalRounds, s.customPhrases);
            } finally {
                setAiLoading(false);
            }
        } else {
            phrases = pickPhrasesForGame(s.difficulty, s.totalRounds, s.customPhrases);
        }

        const phrase = phrases[0];
        await update(ref(db, `typing-rooms/${roomCode}/state`), {
            status: 'countdown',
            'game/currentRound': 1,
            'game/phrase': phrase,
            'game/phrases': phrases,
            'game/countdownEndsAt': Date.now() + COUNTDOWN_SECS * 1000,
            'game/roundStartsAt': 0,
        });
        // Reset scores
        for (const p of playerList) {
            await update(ref(db, `typing-rooms/${roomCode}/players/${p.id}`), {
                score: 0, typedChars: 0, finishedAt: 0, wpm: 0, roundsCompleted: 0,
            });
        }
    }

    async function updateSettings(updates: Partial<RoomState['settings']>) {
        if (!db || !roomCode || !isHost) return;
        const current = roomState?.settings ?? {};
        await update(ref(db, `typing-rooms/${roomCode}/state/settings`), { ...current, ...updates });
    }

    // ─────────────────────────────────────────────────────────────
    //  TYPING LOGIC
    // ─────────────────────────────────────────────────────────────
    const handleTyping = useCallback(async (val: string) => {
        if (!db || !roomCode || !roomState || roomState.status !== 'typing') return;
        if (myFinishedThisRound) return;
        const phrase = roomState.game.phrase;
        setTyped(val);

        // Count correct characters from start
        let correctCount = 0;
        for (let i = 0; i < val.length && i < phrase.length; i++) {
            if (val[i] === phrase[i]) correctCount++;
            else break; // stop at first mistake (no skip-ahead)
        }

        // Update Firebase with current position
        await update(ref(db, `typing-rooms/${roomCode}/players/${pid.current}`), {
            typedChars: val.length, // we use raw typed length for cursor position
        });

        // Check completion
        if (val === phrase) {
            const now = Date.now();
            const elapsed = now - roundStartRef.current;
            const wpm = calcWpm(phrase.length, elapsed);
            const roundsCompleted = (players[pid.current]?.roundsCompleted ?? 0) + 1;
            // Score: WPM-based, bonus for earlier finish
            const bonus = Math.max(0, 100 - Math.floor(elapsed / 1000));
            const roundScore = wpm + bonus;
            const newScore = (players[pid.current]?.score ?? 0) + roundScore;
            setMyFinishedThisRound(true);
            await update(ref(db, `typing-rooms/${roomCode}/players/${pid.current}`), {
                typedChars: phrase.length,
                finishedAt: now,
                wpm,
                score: newScore,
                roundsCompleted,
            });
        }
    }, [db, roomCode, roomState, myFinishedThisRound, players]); // eslint-disable-line react-hooks/exhaustive-deps

    function copyCode() {
        navigator.clipboard.writeText(roomCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
    }
    const shareUrl = `${window.location.origin}/eGov-Game/typing-race?room=${roomCode}`;
    function copyUrl() { navigator.clipboard.writeText(shareUrl); }

    // Build player color map
    const playerColorMap: Record<string, string> = {};
    playerList.forEach((p, i) => { playerColorMap[p.id] = getPlayerColor(i); });

    // ─────────────────────────────────────────────────────────────
    //  RENDER
    // ─────────────────────────────────────────────────────────────

    // ── HOME ──────────────────────────────────────────────────────
    if (!inRoom) return (
        <div className="tr-container">
            <div className="tr-card">
                <h1 className="tr-title">⌨️ Typing Race</h1>
                <p className="tr-subtitle">Race to type phrases. Speed & accuracy wins!</p>

                <span className="tr-label">Your Name</span>
                <input
                    className="tr-input"
                    style={{ marginBottom: '1rem' }}
                    placeholder="Enter your name…"
                    maxLength={20}
                    value={name}
                    onChange={e => { setName(e.target.value); setInputError(''); }}
                />

                {inputError && <p className="tr-error" style={{ marginBottom: '0.75rem' }}>{inputError}</p>}

                {view === 'home' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="tr-btn tr-btn--primary tr-btn--full tr-btn--lg" onClick={() => setView('creating')}>🏠 Create Room</button>
                        <button className="tr-btn tr-btn--secondary tr-btn--full tr-btn--lg" onClick={() => setView('joining')}>🔗 Join Room</button>
                        <button className="tr-btn tr-btn--ghost tr-btn--full" onClick={() => navigate(-1)}>← Back</button>
                    </div>
                )}

                {view === 'creating' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="tr-btn tr-btn--primary tr-btn--full tr-btn--lg" onClick={createRoom}>✅ Create Room</button>
                        <button className="tr-btn tr-btn--ghost tr-btn--full" onClick={() => setView('home')}>← Back</button>
                    </div>
                )}

                {view === 'joining' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <input
                            className="tr-input"
                            placeholder="Room Code (e.g. ABC123)"
                            maxLength={6}
                            value={joinCode}
                            onChange={e => setJoinCode(e.target.value.toUpperCase())}
                            onKeyDown={e => e.key === 'Enter' && joinRoom()}
                        />
                        <button className="tr-btn tr-btn--primary tr-btn--full tr-btn--lg" onClick={joinRoom}>🔗 Join</button>
                        <button className="tr-btn tr-btn--ghost tr-btn--full" onClick={() => setView('home')}>← Back</button>
                    </div>
                )}
            </div>
        </div>
    );

    const phrase = roomState?.game?.phrase ?? '';
    const currentRound = roomState?.game?.currentRound ?? 1;
    const totalRounds = roomState?.settings?.totalRounds ?? 10;
    const status = roomState?.status ?? 'lobby';

    // Other players' cursor info
    const otherPlayers = playerList
        .filter(p => p.id !== pid.current)
        .map(p => ({
            name: p.name,
            typedChars: p.typedChars ?? 0,
            color: playerColorMap[p.id] ?? '#38bdf8',
        }));

    const myPlayer = players[pid.current];
    const countdownSecs = roomState ? Math.max(0, Math.ceil((roomState.game.countdownEndsAt - Date.now()) / 1000)) : 0;

    // ── LOBBY ─────────────────────────────────────────────────────
    if (status === 'lobby') return (
        <div className="tr-container">
            <div className="tr-card" style={{ maxWidth: 620 }}>
                <h1 className="tr-title">⌨️ Typing Race</h1>
                <div className="tr-room-code-row">
                    <span className="tr-room-code">{roomCode}</span>
                    <button className="tr-btn tr-btn--ghost tr-btn--sm" onClick={copyCode}>{copied ? '✅ Copied' : '📋 Copy Code'}</button>
                    <button className="tr-btn tr-btn--ghost tr-btn--sm" onClick={copyUrl}>🔗 Copy Link</button>
                </div>

                {/* Settings (host only) */}
                {isHost && (
                    <div className="tr-settings">
                        <span className="tr-label">Game Settings</span>
                        <div className="tr-settings-grid">
                            <div>
                                <span className="tr-label">Rounds</span>
                                <select className="tr-input" value={roomState?.settings?.totalRounds ?? 10}
                                    onChange={e => updateSettings({ totalRounds: Number(e.target.value) })}>
                                    {[5, 8, 10, 15, 20].map(n => <option key={n} value={n}>{n} rounds</option>)}
                                </select>
                            </div>
                            <div>
                                <span className="tr-label">Difficulty</span>
                                <select className="tr-input" value={roomState?.settings?.difficulty ?? 'medium'}
                                    onChange={e => updateSettings({ difficulty: e.target.value as Difficulty })}>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <span className="tr-label" style={{ margin: 0 }}>Use AI-generated phrases</span>
                                <button
                                    className={`tr-toggle ${roomState?.settings?.useAI ? 'tr-toggle--on' : ''}`}
                                    onClick={() => updateSettings({ useAI: !roomState?.settings?.useAI })}
                                >
                                    {roomState?.settings?.useAI ? 'ON' : 'OFF'}
                                </button>
                            </div>
                            {roomState?.settings?.useAI && (
                                <input
                                    className="tr-input"
                                    style={{ marginBottom: '0.5rem' }}
                                    type="password"
                                    placeholder="Groq API Key (for AI phrases)"
                                    value={apiKey}
                                    onChange={e => { setApiKey(e.target.value); localStorage.setItem(GROQ_KEY, e.target.value); }}
                                />
                            )}
                        </div>

                        <div style={{ marginTop: '0.75rem' }}>
                            <span className="tr-label">Custom Phrases (one per line, comma-separated or blank for built-in)</span>
                            <textarea
                                className="tr-input tr-textarea"
                                rows={4}
                                placeholder="Type your own phrases here, one per line…"
                                value={roomState?.settings?.customPhrases ?? ''}
                                onChange={e => updateSettings({ customPhrases: e.target.value })}
                            />
                        </div>

                        {aiError && <p className="tr-error">{aiError}</p>}
                    </div>
                )}

                {/* Player list */}
                <div className="tr-player-list">
                    {playerList.map((p) => (
                        <div key={p.id} className="tr-player-row">
                            <div className="tr-player-dot" style={{ background: playerColorMap[p.id] }} />
                            <span className="tr-player-name">{p.name}{p.id === pid.current ? ' (you)' : ''}</span>
                            {p.isHost && <span className="tr-badge tr-badge--host">Host</span>}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {isHost && (
                        <button
                            className="tr-btn tr-btn--primary tr-btn--lg"
                            onClick={startGame}
                            disabled={playerList.length < 2 || aiLoading}
                        >
                            {aiLoading ? '🤖 Generating phrases…' : '▶ Start Game'}
                        </button>
                    )}
                    {!isHost && <p className="tr-hint">Waiting for host to start…</p>}
                    <button className="tr-btn tr-btn--danger tr-btn--sm" onClick={leaveRoom}>Leave</button>
                </div>
            </div>
        </div>
    );

    // ── COUNTDOWN ─────────────────────────────────────────────────
    if (status === 'countdown') return (
        <div className="tr-container">
            <div className="tr-card tr-card--center">
                <div className="tr-round-badge">Round {currentRound} / {totalRounds}</div>
                <div className="tr-countdown">{countdownSecs > 0 ? countdownSecs : '🚀'}</div>
                <p className="tr-hint" style={{ marginTop: '1rem' }}>Get ready to type!</p>
                <div className="tr-phrase-preview">{phrase}</div>
            </div>
        </div>
    );

    // ── TYPING ────────────────────────────────────────────────────
    if (status === 'typing' || status === 'round-end') {
        const pListSorted = [...playerList].sort((a, b) => {
            if (a.finishedAt > 0 && b.finishedAt > 0) return a.finishedAt - b.finishedAt;
            if (a.finishedAt > 0) return -1;
            if (b.finishedAt > 0) return 1;
            return (b.typedChars ?? 0) - (a.typedChars ?? 0);
        });

        const progressPct = phrase.length > 0 ? Math.min(100, ((typed.length) / phrase.length) * 100) : 0;

        return (
            <div className="tr-container">
                <div className="tr-game-layout">
                    {/* Left: players leaderboard */}
                    <div className="tr-sidebar">
                        <div className="tr-round-badge">Round {currentRound} / {totalRounds}</div>
                        <div className="tr-sidebar-title">Players</div>
                        {pListSorted.map((p) => {
                            const pct = phrase.length > 0 ? Math.min(100, ((p.typedChars ?? 0) / phrase.length) * 100) : 0;
                            const done = (p.finishedAt ?? 0) > 0;
                            return (
                                <div key={p.id} className={`tr-sb-player${done ? ' tr-sb-player--done' : ''}`}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <div className="tr-player-dot" style={{ background: playerColorMap[p.id] }} />
                                        <span className="tr-sb-name">{p.name}{p.id === pid.current ? ' (you)' : ''}</span>
                                        {done && <span className="tr-badge tr-badge--done">✓ Done</span>}
                                    </div>
                                    <div className="tr-progress-track">
                                        <div className="tr-progress-fill" style={{ width: `${pct}%`, background: playerColorMap[p.id] }} />
                                    </div>
                                    <div className="tr-sb-stats">
                                        <span>{Math.round(pct)}%</span>
                                        {done && <span>{p.wpm} WPM</span>}
                                        <span>🏆 {p.score ?? 0} pts</span>
                                    </div>
                                </div>
                            );
                        })}

                        {status === 'round-end' && (
                            <div className="tr-round-end-msg">
                                ⏳ Next round starting soon…
                            </div>
                        )}
                    </div>

                    {/* Right: typing area */}
                    <div className="tr-main">
                        <div className="tr-difficulty-badge">
                            {phraseDifficultyForRound(roomState?.settings?.difficulty ?? 'medium', currentRound, totalRounds).toUpperCase()}
                        </div>

                        <PhraseDisplay
                            phrase={phrase}
                            typed={myFinishedThisRound ? phrase : typed}
                            otherPlayers={otherPlayers}
                            playerColors={playerColorMap}
                        />

                        <div className="tr-my-progress-bar">
                            <div className="tr-my-progress-fill" style={{ width: `${progressPct}%` }} />
                        </div>

                        {!myFinishedThisRound && status === 'typing' ? (
                            <input
                                ref={inputRef}
                                className="tr-type-input"
                                value={typed}
                                onChange={e => handleTyping(e.target.value)}
                                placeholder="Start typing…"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        ) : (
                            <div className="tr-finished-msg">
                                {myFinishedThisRound
                                    ? `✅ Finished! ${myPlayer?.wpm ?? 0} WPM — Waiting for others…`
                                    : '⏳ Round ended. Next round loading…'}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // ── RESULTS ───────────────────────────────────────────────────
    if (status === 'results') {
        const ranked = [...playerList].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
        const medals = ['🥇', '🥈', '🥉'];
        return (
            <div className="tr-container">
                <div className="tr-card">
                    <h2 className="tr-title">🏁 Final Results</h2>
                    <p className="tr-subtitle">Game over! Here are the rankings.</p>
                    <div className="tr-results-list">
                        {ranked.map((p, i) => (
                            <div key={p.id} className={`tr-result-row${i === 0 ? ' tr-result-row--first' : ''}`}>
                                <span className="tr-result-medal">{medals[i] ?? `#${i + 1}`}</span>
                                <div className="tr-player-dot" style={{ background: playerColorMap[p.id] }} />
                                <span className="tr-result-name">{p.name}{p.id === pid.current ? ' (you)' : ''}</span>
                                <span className="tr-result-score">{p.score ?? 0} pts</span>
                                <span className="tr-result-wpm">{p.wpm ?? 0} WPM</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        {isHost && (
                            <button className="tr-btn tr-btn--primary" onClick={async () => {
                                if (!db || !roomCode) return;
                                await update(ref(db, `typing-rooms/${roomCode}/state`), {
                                    status: 'lobby',
                                    'game/currentRound': 1,
                                    'game/phrase': '',
                                    'game/phrases': [],
                                    'game/roundStartsAt': 0,
                                    'game/countdownEndsAt': 0,
                                });
                                for (const p of playerList) {
                                    await update(ref(db, `typing-rooms/${roomCode}/players/${p.id}`), {
                                        score: 0, typedChars: 0, finishedAt: 0, wpm: 0, roundsCompleted: 0,
                                    });
                                }
                            }}>🔄 Play Again</button>
                        )}
                        <button className="tr-btn tr-btn--danger" onClick={leaveRoom}>Leave</button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
