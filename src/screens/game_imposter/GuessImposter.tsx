import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './GuessImposter.css';
import eGovLogo from '../../assets/eGovPHLogoB.png';
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

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPair { id: string; realWord: string; imposterWord: string }

interface Player {
    id: string;
    name: string;
    joinedAt: number;
    hasSeenWord: boolean;
    vote: string;
    isHost: boolean;
}

interface RoomState {
    status: 'lobby' | 'revealing' | 'discussing' | 'voting' | 'results';
    hostId: string;
    realWord: string;
    imposterWord: string;
    imposterPlayerId: string;
    createdAt: number;
    turnIdx: number;
    turnEndsAt: number;
    turnSeconds: number;
    gameDurationMinutes: number; // total game time (shown as countdown)
    rotationCount: number;       // how many times each player rotates clues
    roundCount: number;          // total rounds
    currentRound: number;        // 1-based current round number
    gameStartsAt: number;        // ms timestamp when game started (for overall timer)
}

type LocalView = 'home' | 'word-manager' | 'creating' | 'joining';

// ─── Constants ────────────────────────────────────────────────────────────────
const PAIRS_KEY = 'imposter_pairs';
const PID_KEY = 'imposter_pid';
const GEMINI_KEY = 'imposter_gemini_key';

const DEFAULT_PAIRS: WordPair[] = [
    { id: 'dp1', realWord: 'Apple', imposterWord: 'Pear' },
    { id: 'dp2', realWord: 'Beach', imposterWord: 'Pool' },
    { id: 'dp3', realWord: 'Coffee', imposterWord: 'Tea' },
    { id: 'dp4', realWord: 'Hospital', imposterWord: 'Clinic' },
    { id: 'dp5', realWord: 'Piano', imposterWord: 'Guitar' },
    { id: 'dp6', realWord: 'Mountain', imposterWord: 'Hill' },
    { id: 'dp7', realWord: 'Sushi', imposterWord: 'Onigiri' },
    { id: 'dp8', realWord: 'Doctor', imposterWord: 'Nurse' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function uid() { return Math.random().toString(36).slice(2, 11); }

function genRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function getOrCreatePid() {
    let pid = sessionStorage.getItem(PID_KEY);
    if (!pid) { pid = uid(); sessionStorage.setItem(PID_KEY, pid); }
    return pid;
}

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
    if (!cfg.databaseURL) throw new Error('VITE_FIREBASE_DATABASE_URL is not set in .env');
    const app = getApps().length ? getApp() : initializeApp(cfg);
    _dbInstance = getDatabase(app);
    return _dbInstance;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function GuessImposter() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const pid = useRef(getOrCreatePid());

    const [db, setDb] = useState<Database | null>(_dbInstance);
    const [view, setView] = useState<LocalView>('home');

    const [roomCode, setRoomCode] = useState('');
    const [roomState, setRoomState] = useState<RoomState | null>(null);
    const [players, setPlayers] = useState<Record<string, Player>>({});
    const [inRoom, setInRoom] = useState(false);
    const unsubsRef = useRef<(() => void)[]>([]);

    const [joinCode, setJoinCode] = useState(() => (searchParams.get('room') || '').toUpperCase());
    const [joinName, setJoinName] = useState('');
    const [joinError, setJoinError] = useState('');
    const [joinLoading, setJoinLoading] = useState(false);

    const [createName, setCreateName] = useState('');
    const [createError, setCreateError] = useState('');
    const [createLoading, setCreateLoading] = useState(false);

    const [wordPairs, setWordPairs] = useState<WordPair[]>(() => {
        try { const r = localStorage.getItem(PAIRS_KEY); return r ? JSON.parse(r) : DEFAULT_PAIRS; }
        catch { return DEFAULT_PAIRS; }
    });
    const [newReal, setNewReal] = useState('');
    const [newImposter, setNewImposter] = useState('');
    const [apiKey, setApiKey] = useState(() => localStorage.getItem(GEMINI_KEY) || '');
    const [aiLoading, setAiLoading] = useState(false);
    const [aiError, setAiError] = useState('');
    const [aiCount, setAiCount] = useState(5);

    const [clues, setClues] = useState<Record<string, string>>({});
    const [myClue, setMyClue] = useState('');
    const [turnSecondsConfig, setTurnSecondsConfig] = useState(30);
    const [gameDurationConfig, setGameDurationConfig] = useState(10); // minutes
    const [rotationCountConfig, setRotationCountConfig] = useState(1);
    const [roundCountConfig, setRoundCountConfig] = useState(3);
    const [, setTick] = useState(0);
    const [highlightedCluePid, setHighlightedCluePid] = useState<string | null>(null);
    const prevCluesRef = useRef<Record<string, string>>({});

    const playerList = Object.values(players).sort((a, b) => a.joinedAt - b.joinedAt);
    const isHost = roomState ? pid.current === roomState.hostId : false;
    const myPlayer = players[pid.current];
    const allSeenWord = playerList.length > 0 && playerList.every(p => p.hasSeenWord);
    const allVoted = playerList.length > 0 && playerList.every(p => p.vote !== '');

    useEffect(() => { localStorage.setItem(PAIRS_KEY, JSON.stringify(wordPairs)); }, [wordPairs]);

    useEffect(() => {
        if (_dbInstance) { setDb(_dbInstance); return; }
        try { const database = initFirebase(); setDb(database); }
        catch (e) { console.error('Firebase init failed:', e); }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => () => { unsubsRef.current.forEach(fn => fn()); }, []);

    useEffect(() => {
        if (!db || !inRoom || !roomCode) return;
        unsubsRef.current.forEach(fn => fn());
        unsubsRef.current = [];

        const unsubState = onValue(ref(db, `rooms/${roomCode}/state`), snap => {
            if (snap.exists()) {
                setRoomState(snap.val());
            } else {
                setInRoom(false); setRoomState(null); setPlayers({}); setRoomCode('');
            }
        });
        const unsubPlayers = onValue(ref(db, `rooms/${roomCode}/players`), snap => {
            setPlayers(snap.exists() ? snap.val() : {});
        });
        const unsubClues = onValue(ref(db, `rooms/${roomCode}/clues`), snap => {
            setClues(snap.exists() ? snap.val() : {});
        });
        unsubsRef.current = [unsubState, unsubPlayers, unsubClues];
        return () => { unsubState(); unsubPlayers(); unsubClues(); };
    }, [db, inRoom, roomCode]);

    useEffect(() => {
        if (!db || !roomState || roomState.status !== 'revealing' || !isHost || !allSeenWord) return;
        update(ref(db, `rooms/${roomCode}/state`), {
            status: 'discussing',
            turnIdx: 0,
            turnEndsAt: Date.now() + roomState.turnSeconds * 1000,
        });
    }, [allSeenWord, roomState?.status, isHost, db, roomCode]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!db || !roomState || roomState.status !== 'voting' || !isHost || !allVoted) return;
        update(ref(db, `rooms/${roomCode}/state`), { status: 'results' });
    }, [allVoted, roomState?.status, isHost, db, roomCode]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Countdown tick (re-render every 500 ms during discussion) ─────────────
    useEffect(() => {
        if (!roomState || roomState.status !== 'discussing') return;
        const id = setInterval(() => setTick(t => t + 1), 500);
        return () => clearInterval(id);
    }, [roomState?.status]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Host: auto-advance turn when timer expires ────────────────────────────
    useEffect(() => {
        if (!db || !roomState || roomState.status !== 'discussing' || !isHost) return;
        const { turnIdx, turnEndsAt, turnSeconds } = roomState;
        if (turnIdx >= playerList.length) return;
        const delay = Math.max(0, turnEndsAt - Date.now()) + 150;
        const t = setTimeout(async () => {
            const snap = await get(ref(db, `rooms/${roomCode}/state/turnIdx`));
            if (snap.val() !== turnIdx) return;
            const cluePid = playerList[turnIdx]?.id;
            if (cluePid) {
                const clueSnap = await get(ref(db, `rooms/${roomCode}/clues/${cluePid}`));
                if (!clueSnap.exists()) {
                    await set(ref(db, `rooms/${roomCode}/clues/${cluePid}`), '⏱ (time ran out)');
                }
            }
            const nextIdx = turnIdx + 1;
            const upd: Record<string, unknown> = { [`rooms/${roomCode}/state/turnIdx`]: nextIdx };
            if (nextIdx < playerList.length) {
                upd[`rooms/${roomCode}/state/turnEndsAt`] = Date.now() + turnSeconds * 1000;
            }
            await update(ref(db, '/'), upd);
        }, delay);
        return () => clearTimeout(t);
    }, [roomState?.turnIdx, roomState?.turnEndsAt, roomState?.status, isHost, db, roomCode, playerList.length]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Flash highlight when a new clue is submitted ──────────────────────────
    useEffect(() => {
        const prevKeys = Object.keys(prevCluesRef.current);
        const newKey = Object.keys(clues).find(k => !prevKeys.includes(k));
        prevCluesRef.current = { ...clues };
        if (!newKey) return;
        setHighlightedCluePid(newKey);
        const t = setTimeout(() => setHighlightedCluePid(null), 2000);
        return () => clearTimeout(t);
    }, [clues]);

    // ── Clear input when turn rotates ─────────────────────────────────────────
    useEffect(() => { setMyClue(''); }, [roomState?.turnIdx]);

    // ── Actions ───────────────────────────────────────────────────────────────
    const createRoom = async () => {
        if (!db || !createName.trim()) { setCreateError('Enter your name.'); return; }
        if (wordPairs.length === 0) { setCreateError('No word pairs! Add some words first.'); return; }
        setCreateLoading(true); setCreateError('');
        try {
            const code = genRoomCode();
            const now = Date.now();
            const state: RoomState = {
                status: 'lobby', hostId: pid.current,
                realWord: '', imposterWord: '', imposterPlayerId: '', createdAt: now,
                turnIdx: 0, turnEndsAt: 0, turnSeconds: 30,
                gameDurationMinutes: 10, rotationCount: 1, roundCount: 3,
                currentRound: 1, gameStartsAt: 0,
            };
            const me: Player = {
                id: pid.current, name: createName.trim(), joinedAt: now,
                hasSeenWord: false, vote: '', isHost: true,
            };
            await set(ref(db, `rooms/${code}`), { state, players: { [pid.current]: me } });
            onDisconnect(ref(db, `rooms/${code}`)).remove();
            setRoomCode(code); setInRoom(true);
        } catch (e) {
            setCreateError(e instanceof Error ? e.message : 'Failed to create room.');
        } finally { setCreateLoading(false); }
    };

    const joinRoom = async () => {
        if (!db) return;
        const code = joinCode.trim().toUpperCase();
        if (!code || !joinName.trim()) { setJoinError('Fill in both fields.'); return; }
        setJoinLoading(true); setJoinError('');
        try {
            const snap = await get(ref(db, `rooms/${code}/state`));
            if (!snap.exists()) { setJoinError('Room not found. Check the code.'); return; }
            const state = snap.val() as RoomState;
            if (state.status !== 'lobby') { setJoinError('Game already started.'); return; }
            const me: Player = {
                id: pid.current, name: joinName.trim(), joinedAt: Date.now(),
                hasSeenWord: false, vote: '', isHost: false,
            };
            await set(ref(db, `rooms/${code}/players/${pid.current}`), me);
            onDisconnect(ref(db, `rooms/${code}/players/${pid.current}`)).remove();
            setRoomCode(code); setInRoom(true);
        } catch (e) {
            setJoinError(e instanceof Error ? e.message : 'Failed to join.');
        } finally { setJoinLoading(false); }
    };

    const startGame = async () => {
        if (!db || !isHost || playerList.length < 3) return;
        const pair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
        const imposterPlayerId = playerList[Math.floor(Math.random() * playerList.length)].id;
        await update(ref(db, `rooms/${roomCode}/state`), {
            status: 'revealing', realWord: pair.realWord,
            imposterWord: pair.imposterWord, imposterPlayerId,
            turnSeconds: turnSecondsConfig,
            gameDurationMinutes: gameDurationConfig,
            rotationCount: rotationCountConfig,
            roundCount: roundCountConfig,
            currentRound: 1,
            gameStartsAt: Date.now(),
            turnIdx: 0, turnEndsAt: 0,
        });
    };

    const confirmSeenWord = () => {
        if (!db) return;
        update(ref(db, `rooms/${roomCode}/players/${pid.current}`), { hasSeenWord: true });
    };

    const startVoting = () => {
        if (!db || !isHost) return;
        update(ref(db, `rooms/${roomCode}/state`), { status: 'voting' });
    };

    const castVote = (votedId: string) => {
        if (!db || myPlayer?.vote) return;
        update(ref(db, `rooms/${roomCode}/players/${pid.current}`), { vote: votedId });
    };

    const newRound = async () => {
        if (!db || !isHost || !roomState) return;
        const nextRound = (roomState.currentRound || 1) + 1;
        const isLastRound = nextRound > (roomState.roundCount || 3);
        const updates: Record<string, unknown> = {
            [`rooms/${roomCode}/state/status`]: 'lobby',
            [`rooms/${roomCode}/state/realWord`]: '',
            [`rooms/${roomCode}/state/imposterWord`]: '',
            [`rooms/${roomCode}/state/imposterPlayerId`]: '',
            [`rooms/${roomCode}/state/turnIdx`]: 0,
            [`rooms/${roomCode}/state/turnEndsAt`]: 0,
            [`rooms/${roomCode}/state/currentRound`]: isLastRound ? 1 : nextRound,
            [`rooms/${roomCode}/clues`]: null,
        };
        playerList.forEach(p => {
            updates[`rooms/${roomCode}/players/${p.id}/hasSeenWord`] = false;
            updates[`rooms/${roomCode}/players/${p.id}/vote`] = '';
        });
        await update(ref(db, '/'), updates);
    };

    const submitClue = async () => {
        if (!db || !roomState) return;
        const currentPlayer = playerList[roomState.turnIdx];
        if (!currentPlayer || currentPlayer.id !== pid.current) return;
        const myIdx = roomState.turnIdx;
        await set(ref(db, `rooms/${roomCode}/clues/${pid.current}`), myClue.trim() || '(skipped)');
        setMyClue('');
        const snap = await get(ref(db, `rooms/${roomCode}/state/turnIdx`));
        if (snap.val() !== myIdx) return;
        const nextIdx = myIdx + 1;
        const upd: Record<string, unknown> = { [`rooms/${roomCode}/state/turnIdx`]: nextIdx };
        if (nextIdx < playerList.length) {
            upd[`rooms/${roomCode}/state/turnEndsAt`] = Date.now() + roomState.turnSeconds * 1000;
        }
        await update(ref(db, '/'), upd);
    };

    const leaveRoom = async () => {
        if (!db || !roomCode) return;
        unsubsRef.current.forEach(fn => fn());
        unsubsRef.current = [];
        if (isHost) {
            await remove(ref(db, `rooms/${roomCode}`));
        } else {
            await remove(ref(db, `rooms/${roomCode}/players/${pid.current}`));
        }
        setInRoom(false); setRoomState(null); setPlayers({}); setRoomCode('');
    };

    const addPair = () => {
        if (!newReal.trim() || !newImposter.trim()) return;
        setWordPairs(p => [...p, { id: uid(), realWord: newReal.trim(), imposterWord: newImposter.trim() }]);
        setNewReal(''); setNewImposter('');
    };

    const generateWithAI = async () => {
        if (!apiKey.trim()) { setAiError('Enter a Groq API key.'); return; }
        setAiLoading(true); setAiError('');
        try {
            const prompt = `Generate ${aiCount} word pairs for a "Guess the Imposter" party game.\nRules:\n- "realWord" is what most players receive\n- "imposterWord" is a DIFFERENT but closely related word in the same category (NOT a spelling variant, NOT the same word misspelled)\n- Both words must be real, common English words\n- They should be close enough that clues overlap but different enough to eventually expose the imposter\n- Good examples: {realWord:"beach", imposterWord:"lake"}, {realWord:"guitar", imposterWord:"violin"}, {realWord:"lion", imposterWord:"tiger"}, {realWord:"coffee", imposterWord:"tea"}\n- Bad examples (do NOT do this): {realWord:"knight", imposterWord:"nite"}, {realWord:"cloud", imposterWord:"clowd"}\nReturn ONLY a valid JSON array, no markdown, no explanation: [{"realWord":"...","imposterWord":"..."},...]`;
            const res = await fetch(
                'https://api.groq.com/openai/v1/chat/completions',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                    body: JSON.stringify({
                        model: 'llama-3.3-70b-versatile',
                        messages: [{ role: 'user', content: prompt }],
                        temperature: 0.8,
                    }),
                }
            );
            if (!res.ok) { const e = await res.json(); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
            const data = await res.json();
            const text: string = data.choices?.[0]?.message?.content ?? '';
            const match = text.match(/\[[\s\S]*\]/);
            if (!match) throw new Error('Unexpected AI response format.');
            const pairs = JSON.parse(match[0]) as { realWord: string; imposterWord: string }[];
            const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
            setWordPairs(prev => [...prev, ...pairs.map(p => ({ id: uid(), realWord: cap(p.realWord), imposterWord: cap(p.imposterWord) }))]);
            localStorage.setItem(GEMINI_KEY, apiKey);
        } catch (e) {
            setAiError(e instanceof Error ? e.message : 'Failed to generate.');
        } finally { setAiLoading(false); }
    };

    const computeTally = () => {
        const tally: Record<string, number> = {};
        playerList.forEach(p => { if (p.vote) tally[p.vote] = (tally[p.vote] || 0) + 1; });
        const max = Math.max(...Object.values(tally), 0);
        const mostVoted = Object.entries(tally).filter(([, c]) => c === max).map(([id]) => id);
        const imposter = roomState ? players[roomState.imposterPlayerId] : undefined;
        const caught = imposter ? mostVoted.includes(imposter.id) : false;
        return { tally, imposter, caught };
    };

    const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
    const copyUrl = () => navigator.clipboard.writeText(shareUrl);
    const copyCode = () => navigator.clipboard.writeText(roomCode);

    // ─────────────────────────────────────────────────────────────────────────
    //  SCREENS
    // ─────────────────────────────────────────────────────────────────────────

    // ── HOME ──────────────────────────────────────────────────────────────────
    if (!inRoom && view === 'home') return (
        <div className="imposter-container">
            <div className="imposter-card imposter-menu">
                <img src={eGovLogo} className="imposter-logo" alt="eGov Logo" />
                <h1 className="imposter-title">Guess the Imposter</h1>
                <p className="imposter-subtitle">One player has a different word — can the group find them?</p>
                <div className="imposter-menu-buttons">
                    <button className="gi-btn gi-btn--primary" onClick={() => setView('creating')}>🏠 Create Room</button>
                    <button className="gi-btn gi-btn--secondary" onClick={() => { setJoinCode((searchParams.get('room') || '').toUpperCase()); setView('joining'); }}>
                        🚪 Join Room
                    </button>
                    <button className="gi-btn gi-btn--ghost" onClick={() => setView('word-manager')}>
                        📝 Manage Words <span className="gi-badge">{wordPairs.length}</span>
                    </button>
                </div>
                <div className="gi-footer-links">
                    <button className="gi-back-link" onClick={() => navigate('/eGov-Game/main-page')}>← Back to Games</button>
                </div>
            </div>
        </div>
    );

    // ── CREATE ROOM ───────────────────────────────────────────────────────────
    if (!inRoom && view === 'creating') return (
        <div className="imposter-container">
            <div className="imposter-card gi-setup-card">
                <div className="gi-screen-header">
                    <button className="gi-icon-btn" onClick={() => setView('home')}>←</button>
                    <h2>Create Room</h2>
                </div>
                <label className="gi-label">Your Name (as host)</label>
                <input
                    className="gi-input" style={{ width: '100%', boxSizing: 'border-box' }}
                    placeholder="Enter your name" value={createName}
                    onChange={e => setCreateName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && createRoom()} autoFocus
                />
                {wordPairs.length === 0 ? (
                    <div className="gi-warning">
                        No word pairs! <button className="gi-text-btn" onClick={() => setView('word-manager')}>Add words first →</button>
                    </div>
                ) : (
                    <p className="gi-hint" style={{ marginTop: '0.25rem' }}>
                        {wordPairs.length} word pair{wordPairs.length !== 1 ? 's' : ''} ready.{' '}
                        <button className="gi-text-btn" onClick={() => setView('word-manager')}>Manage</button>
                    </p>
                )}
                {createError && <p className="gi-error">{createError}</p>}
                <div className="setup-actions" style={{ marginTop: '1rem' }}>
                    <button className="gi-btn gi-btn--ghost" onClick={() => setView('home')}>Cancel</button>
                    <button className="gi-btn gi-btn--primary" onClick={createRoom}
                        disabled={createLoading || !createName.trim() || wordPairs.length === 0}>
                        {createLoading ? 'Creating…' : 'Create Room →'}
                    </button>
                </div>
            </div>
        </div>
    );

    // ── JOIN ROOM ─────────────────────────────────────────────────────────────
    if (!inRoom && view === 'joining') return (
        <div className="imposter-container">
            <div className="imposter-card gi-setup-card">
                <div className="gi-screen-header">
                    <button className="gi-icon-btn" onClick={() => setView('home')}>←</button>
                    <h2>Join Room</h2>
                </div>
                <label className="gi-label">Room Code</label>
                <input
                    className="gi-input gi-input--code" style={{ width: '100%', boxSizing: 'border-box' }}
                    placeholder="XXXXXX" maxLength={6} value={joinCode}
                    onChange={e => setJoinCode(e.target.value.toUpperCase())}
                />
                <label className="gi-label" style={{ marginTop: '0.75rem' }}>Your Name</label>
                <input
                    className="gi-input" style={{ width: '100%', boxSizing: 'border-box' }}
                    placeholder="Enter your name" value={joinName}
                    onChange={e => setJoinName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && joinRoom()}
                />
                {joinError && <p className="gi-error">{joinError}</p>}
                <div className="setup-actions" style={{ marginTop: '1rem' }}>
                    <button className="gi-btn gi-btn--ghost" onClick={() => setView('home')}>Cancel</button>
                    <button className="gi-btn gi-btn--primary" onClick={joinRoom}
                        disabled={joinLoading || !joinCode.trim() || !joinName.trim()}>
                        {joinLoading ? 'Joining…' : 'Join →'}
                    </button>
                </div>
            </div>
        </div>
    );

    // ── WORD MANAGER ──────────────────────────────────────────────────────────
    if (view === 'word-manager') return (
        <div className="imposter-container">
            <div className="imposter-card imposter-word-manager">
                <div className="gi-screen-header">
                    <button className="gi-icon-btn" onClick={() => setView('home')}>←</button>
                    <h2>Word Pairs</h2>
                    <span className="gi-badge gi-badge--large">{wordPairs.length}</span>
                </div>
                <div className="wm-add-form">
                    <input className="gi-input gi-input--flex" placeholder="Real word (most players)" value={newReal} onChange={e => setNewReal(e.target.value)} onKeyDown={e => e.key === 'Enter' && addPair()} />
                    <span className="wm-vs">⇄</span>
                    <input className="gi-input gi-input--flex" placeholder="Imposter word" value={newImposter} onChange={e => setNewImposter(e.target.value)} onKeyDown={e => e.key === 'Enter' && addPair()} />
                    <button className="gi-btn gi-btn--primary gi-btn--sm" onClick={addPair}>Add</button>
                </div>
                <div className="wm-ai-section">
                    <div className="wm-ai-label">✨ AI Generate (Gemini)</div>
                    <div className="wm-ai-controls">
                        <input className="gi-input gi-input--flex" type="password" placeholder="Groq API key" value={apiKey} onChange={e => setApiKey(e.target.value)} />
                        <input className="gi-input gi-input--num" type="number" min={1} max={20} value={aiCount} onChange={e => setAiCount(Math.max(1, Math.min(20, Number(e.target.value))))} />
                        <button className="gi-btn gi-btn--ai" onClick={generateWithAI} disabled={aiLoading}>
                            {aiLoading ? 'Generating…' : `Generate ${aiCount}`}
                        </button>
                    </div>
                    {aiError && <p className="gi-error">{aiError}</p>}
                    <p className="gi-hint">Get a free key at <span className="gi-hint-strong">aistudio.google.com</span></p>
                </div>
                <div className="wm-list">
                    {wordPairs.length === 0 && <p className="wm-empty">No pairs yet.</p>}
                    {wordPairs.map(pair => (
                        <div key={pair.id} className="wm-pair-row">
                            <span className="wm-real">{pair.realWord}</span>
                            <span className="wm-arrow">⇄</span>
                            <span className="wm-imposter">{pair.imposterWord}</span>
                            <button className="wm-delete-btn" onClick={() => setWordPairs(p => p.filter(x => x.id !== pair.id))}>✕</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // ─────────────────────────────────────────────────────────────────────────
    //  IN-ROOM SCREENS
    // ─────────────────────────────────────────────────────────────────────────
    if (!inRoom || !roomState) return null;

    // ── LOBBY ─────────────────────────────────────────────────────────────────
    if (roomState.status === 'lobby') return (
        <div className="imposter-container">
            <div className="imposter-card gi-lobby-card">
                <div className="gi-lobby-header">
                    <div>
                        <div className="gi-room-label">Room Code</div>
                        <div className="gi-room-code" onClick={copyCode} title="Click to copy">{roomCode}</div>
                    </div>
                    <button className="gi-btn gi-btn--ghost gi-btn--sm" onClick={leaveRoom}>
                        {isHost ? 'Close Room' : 'Leave'}
                    </button>
                </div>
                <div className="gi-share-row">
                    <span className="gi-share-url">{shareUrl}</span>
                    <button className="gi-btn gi-btn--ghost gi-btn--sm" onClick={copyUrl}>Copy Link</button>
                </div>
                <div className="gi-lobby-players-label">
                    Players <span className="gi-badge">{playerList.length}</span>
                    {playerList.length < 3 && <span className="gi-hint" style={{ marginLeft: '0.5rem' }}>Need at least 3</span>}
                </div>
                <div className="gi-player-list">
                    {playerList.map(p => (
                        <div key={p.id} className={`gi-player-chip${p.id === pid.current ? ' gi-player-chip--me' : ''}`}>
                            {p.isHost && <span className="gi-host-badge">HOST</span>}
                            {p.name}
                            {p.id === pid.current && <span style={{ opacity: 0.5, fontSize: '0.75rem' }}> (you)</span>}
                        </div>
                    ))}
                    {playerList.length === 0 && <p className="wm-empty">Waiting for players…</p>}
                </div>
                {isHost ? (
                    <>
                        <div className="gi-config-grid">
                            <div className="gi-turn-config">
                                <span className="gi-turn-config-label">⏱ Secs per turn</span>
                                <div className="gi-turn-config-controls">
                                    <button className="gi-icon-btn" onClick={() => setTurnSecondsConfig(s => Math.max(10, s - 5))}>−</button>
                                    <span className="gi-turn-config-value">{turnSecondsConfig}s</span>
                                    <button className="gi-icon-btn" onClick={() => setTurnSecondsConfig(s => Math.min(120, s + 5))}>+</button>
                                </div>
                            </div>
                            <div className="gi-turn-config">
                                <span className="gi-turn-config-label">🕐 Game duration</span>
                                <div className="gi-turn-config-controls">
                                    <button className="gi-icon-btn" onClick={() => setGameDurationConfig(s => Math.max(1, s - 1))}>−</button>
                                    <span className="gi-turn-config-value">{gameDurationConfig}m</span>
                                    <button className="gi-icon-btn" onClick={() => setGameDurationConfig(s => Math.min(60, s + 1))}>+</button>
                                </div>
                            </div>
                            <div className="gi-turn-config">
                                <span className="gi-turn-config-label">🔄 Rotations</span>
                                <div className="gi-turn-config-controls">
                                    <button className="gi-icon-btn" onClick={() => setRotationCountConfig(s => Math.max(1, s - 1))}>−</button>
                                    <span className="gi-turn-config-value">{rotationCountConfig}×</span>
                                    <button className="gi-icon-btn" onClick={() => setRotationCountConfig(s => Math.min(5, s + 1))}>+</button>
                                </div>
                            </div>
                            <div className="gi-turn-config">
                                <span className="gi-turn-config-label">🏆 Rounds</span>
                                <div className="gi-turn-config-controls">
                                    <button className="gi-icon-btn" onClick={() => setRoundCountConfig(s => Math.max(1, s - 1))}>−</button>
                                    <span className="gi-turn-config-value">{roundCountConfig}</span>
                                    <button className="gi-icon-btn" onClick={() => setRoundCountConfig(s => Math.min(10, s + 1))}>+</button>
                                </div>
                            </div>
                        </div>
                        <button
                            className="gi-btn gi-btn--primary gi-btn--lg"
                            style={{ width: '100%', marginTop: '0.5rem' }}
                            disabled={playerList.length < 3}
                            onClick={startGame}
                        >
                            {playerList.length < 3 ? `Need ${3 - playerList.length} more player${3 - playerList.length !== 1 ? 's' : ''}` : 'Start Game →'}
                        </button>
                    </>
                ) : (
                    <div className="gi-waiting-banner">⏳ Waiting for host to start the game…</div>
                )}
            </div>
        </div>
    );

    // ── REVEALING ────────────────────────────────────────────────────────────
    if (roomState.status === 'revealing') {
        const isImposter = pid.current === roomState.imposterPlayerId;
        const myWord = isImposter ? roomState.imposterWord : roomState.realWord;
        const hasSeen = myPlayer?.hasSeenWord || false;
        const seenCount = playerList.filter(p => p.hasSeenWord).length;
        const gameSecsLeft = roomState.gameStartsAt
            ? Math.max(0, Math.floor(roomState.gameDurationMinutes * 60 - (Date.now() - roomState.gameStartsAt) / 1000))
            : roomState.gameDurationMinutes * 60;
        const gameMins = Math.floor(gameSecsLeft / 60);
        const gameSecs = gameSecsLeft % 60;

        return (
            <div className="imposter-container">
                <div className="imposter-card imposter-reveal">
                    <div className="gi-game-topbar">
                        <div className="gi-round-badge">Round {roomState.currentRound} / {roomState.roundCount}</div>
                        <div className="gi-game-timer">🕐 {gameMins}:{String(gameSecs).padStart(2, '0')}</div>
                    </div>
                    <h2 className="gi-phase-title">Your Secret Word</h2>
                    <p className="gi-phase-subtitle">Private — don't show other screens!</p>
                    {!hasSeen ? (
                        <div className="reveal-card reveal-card--tap-me" onClick={confirmSeenWord}>
                            <div className="reveal-card__front">
                                <div className="reveal-player-num">{myPlayer ? myPlayer.name[0].toUpperCase() : '?'}</div>
                                <div className="reveal-player-name">{myPlayer?.name}</div>
                                <div className="reveal-tap-badge">👆 Tap to reveal</div>
                                <p className="reveal-tap-hint">Your secret word is hidden — tap to see it!</p>
                            </div>
                        </div>
                    ) : (
                        <div className="reveal-card reveal-card--visible">
                            <div className="reveal-card__back">
                                <div className="reveal-word-label">Your word is:</div>
                                <div className="reveal-word">{myWord}</div>
                                <p className={`reveal-role-hint${isImposter ? ' reveal-role-hint--imposter' : ''}`}>
                                    {isImposter ? '🕵️ You are the IMPOSTER — blend in!' : '✅ Give clues without saying the word!'}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="gi-seen-progress">
                        <span className="gi-hint">{seenCount} / {playerList.length} players ready</span>
                        <div className="gi-progress-bar">
                            <div className="gi-progress-fill" style={{ width: `${(seenCount / playerList.length) * 100}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── DISCUSSING (turn-based) ───────────────────────────────────────────────
    if (roomState.status === 'discussing') {
        const { turnIdx, turnEndsAt, turnSeconds } = roomState;
        const allTurnsDone = turnIdx >= playerList.length;
        const currentPlayer = !allTurnsDone ? playerList[turnIdx] : null;
        const isMyTurn = currentPlayer?.id === pid.current;
        const timeLeft = allTurnsDone ? 0 : Math.max(0, Math.floor((turnEndsAt - Date.now()) / 1000));
        const RADIUS = 36;
        const CIRC = 2 * Math.PI * RADIUS;
        const progress = turnSeconds > 0 ? timeLeft / turnSeconds : 0;
        const offset = CIRC * (1 - progress);
        const isLow = timeLeft <= 5 && timeLeft > 0;

        return (
            <div className="imposter-container">
                <div className="imposter-card imposter-discuss">
                    <div className="gi-game-topbar">
                        <div className="gi-round-badge">Round {roomState.currentRound} / {roomState.roundCount}</div>
                        {roomState.gameStartsAt > 0 && (() => {
                            const gs = Math.max(0, Math.floor(roomState.gameDurationMinutes * 60 - (Date.now() - roomState.gameStartsAt) / 1000));
                            return <div className={`gi-game-timer${gs <= 60 ? ' gi-game-timer--low' : ''}`}>🕐 {Math.floor(gs / 60)}:{String(gs % 60).padStart(2, '0')}</div>;
                        })()}
                    </div>
                    {!allTurnsDone ? (
                        <>
                            <div className="gi-turn-header">
                                <div className="gi-turn-player-name">
                                    {isMyTurn ? '🎤 Your turn!' : `🎤 ${currentPlayer?.name}'s turn`}
                                </div>
                                <svg className="gi-countdown-svg" width="88" height="88" viewBox="0 0 88 88">
                                    <circle cx="44" cy="44" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                                    <circle
                                        cx="44" cy="44" r={RADIUS}
                                        fill="none"
                                        stroke={isLow ? '#ef4444' : '#6366f1'}
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={CIRC}
                                        strokeDashoffset={offset}
                                        transform="rotate(-90 44 44)"
                                        style={{ transition: 'stroke-dashoffset 0.3s linear, stroke 0.3s' }}
                                    />
                                    <text x="44" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{timeLeft}</text>
                                </svg>
                            </div>
                            {isMyTurn ? (
                                <div className="gi-my-turn-input">
                                    <p className="gi-hint" style={{ marginBottom: '0.5rem' }}>Give a clue related to your word — don't say it directly!</p>
                                    <div className="gi-clue-input-row">
                                        <input
                                            className="gi-input gi-input--flex"
                                            placeholder="Type your clue…"
                                            value={myClue}
                                            onChange={e => setMyClue(e.target.value)}
                                            onKeyDown={e => e.key === 'Enter' && submitClue()}
                                            autoFocus
                                            maxLength={80}
                                        />
                                        <button className="gi-btn gi-btn--primary gi-btn--sm" onClick={submitClue}>Submit →</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="gi-waiting-banner" style={{ marginTop: 0 }}>
                                    ⏳ Waiting for {currentPlayer?.name} to give a clue…
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="gi-all-done-banner">
                            <div className="gi-all-done-icon">✅</div>
                            <div className="gi-all-done-text">All clues in!</div>
                            {isHost
                                ? <button className="gi-btn gi-btn--primary gi-btn--lg" onClick={startVoting}>Start Voting →</button>
                                : <p className="gi-hint">Waiting for host to start voting…</p>
                            }
                        </div>
                    )}

                    {Object.keys(clues).length > 0 && (
                        <div className="gi-clue-list">
                            <div className="gi-clue-list-title">Clues Given</div>
                            {playerList.filter(p => clues[p.id] !== undefined).map(p => (
                                <div
                                    key={p.id}
                                    className={`gi-clue-item${highlightedCluePid === p.id ? ' gi-clue-item--new' : ''}`}
                                >
                                    <span className="gi-clue-player">{p.name}</span>
                                    <span className="gi-clue-text">"{clues[p.id]}"</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="reveal-progress">
                        {playerList.map((p, i) => (
                            <div
                                key={p.id}
                                className={`reveal-dot${clues[p.id] !== undefined ? ' reveal-dot--done' : i === turnIdx ? ' reveal-dot--current' : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ── VOTING ────────────────────────────────────────────────────────────────
    if (roomState.status === 'voting') {
        const myVote = myPlayer?.vote || '';
        const votedCount = playerList.filter(p => p.vote !== '').length;
        return (
            <div className="imposter-container">
                <div className="imposter-card imposter-vote">
                    <h2 className="gi-phase-title">🗳 Vote</h2>
                    <p className="gi-phase-subtitle">Who do you think is the imposter?</p>
                    {!myVote ? (
                        <div className="vote-options">
                            {playerList.filter(p => p.id !== pid.current).map(p => (
                                <button key={p.id} className="vote-option-btn" onClick={() => castVote(p.id)}>{p.name}</button>
                            ))}
                        </div>
                    ) : (
                        <div className="gi-voted-confirmation">
                            <div className="gi-voted-icon">✅</div>
                            <div className="gi-voted-text">You voted for <strong>{players[myVote]?.name ?? '?'}</strong></div>
                        </div>
                    )}
                    <div className="gi-seen-progress" style={{ marginTop: '1rem' }}>
                        <span className="gi-hint">{votedCount} / {playerList.length} votes submitted</span>
                        <div className="gi-progress-bar">
                            <div className="gi-progress-fill" style={{ width: `${(votedCount / playerList.length) * 100}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── RESULTS ───────────────────────────────────────────────────────────────
    if (roomState.status === 'results') {
        const { tally, imposter, caught } = computeTally();
        return (
            <div className="imposter-container">
                <div className="imposter-card imposter-result">
                    <div className={`result-banner${caught ? ' result-banner--success' : ' result-banner--fail'}`}>
                        {caught ? '🎉 Imposter Caught!' : '😈 Imposter Wins!'}
                    </div>
                    <div className="result-imposter-section">
                        <div className="result-imposter-card">
                            <div className="result-label">The Imposter was</div>
                            <div className="result-imposter-name">{imposter?.name ?? '?'}</div>
                        </div>
                    </div>
                    <div className="result-words-row">
                        <div className="result-word-card result-word-card--real">
                            <div className="result-word-label">Real Word</div>
                            <div className="result-word-value">{roomState.realWord}</div>
                        </div>
                        <span className="wm-arrow" style={{ fontSize: '1.5rem' }}>⇄</span>
                        <div className="result-word-card result-word-card--imposter">
                            <div className="result-word-label">Imposter Word</div>
                            <div className="result-word-value">{roomState.imposterWord}</div>
                        </div>
                    </div>
                    <div className="result-votes">
                        <h3 className="result-votes-title">Vote Results</h3>
                        {playerList.map(p => {
                            const count = tally[p.id] || 0;
                            return (
                                <div key={p.id} className="vote-tally-row">
                                    <span className={`tally-name${p.id === roomState.imposterPlayerId ? ' tally-name--imposter' : ''}`}>
                                        {p.name} {p.id === roomState.imposterPlayerId ? '🕵️' : ''}
                                    </span>
                                    <div className="tally-bar-bg">
                                        <div className="tally-bar" style={{ width: `${(count / Math.max(playerList.length - 1, 1)) * 100}%` }} />
                                    </div>
                                    <span className="tally-count">{count}</span>
                                </div>
                            );
                        })}
                    </div>
                    {isHost ? (
                        <div className="result-actions">
                            <button className="gi-btn gi-btn--primary" onClick={newRound}>Play Again</button>
                            <button className="gi-btn gi-btn--ghost" onClick={leaveRoom}>Close Room</button>
                        </div>
                    ) : (
                        <div className="gi-waiting-banner" style={{ marginTop: '0.5rem' }}>⏳ Waiting for host to start next round…</div>
                    )}
                </div>
            </div>
        );
    }

    return null;
}

