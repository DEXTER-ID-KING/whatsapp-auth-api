/* 



██╗░░░██╗██████╗░███╗░░░███╗░█████╗░██████╗░███████╗ 
██║░░░██║██╔══██╗████╗░████║██╔══██╗██╔══██╗╚════██║ 
██║░░░██║██║░░██║██╔████╔██║██║░░██║██║░░██║░░███╔═╝ 
██║░░░██║██║░░██║██║╚██╔╝██║██║░░██║██║░░██║██╔══╝░░ 
╚██████╔╝██████╔╝██║░╚═╝░██║╚█████╔╝██████╔╝███████╗ 
░╚═════╝░╚═════╝░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚══════╝ 
By UDMODZ
DONT SELL
A FREE API
I'M UDMODZ




*/

const {
    default: makeWASocket,
    fetchLatestVersion,
    delay,
    initAuthCreds,
    BufferJSON,
    Browsers,
    proto,
    DisconnectReason,
    generateWAMessageFromContent
} = require('noname089');

const P = require('pino');
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const os = require('os');

const udmodzportal = express();
const port = process.env.PORT || 8080;
const gradient = require("gradient-string");

const title1 = "┈█┈┈┈┈██┈▓█████▄┈┈┈███▄┈▄███▓┈▒█████┈┈┈▓█████▄┈┈▒███████▒";
const title2 = "┈██┈┈▓██▒▒██▀┈██▌┈▓██▒▀█▀┈██▒▒██▒┈┈██▒┈▒██▀┈██▌┈▒┈▒┈▒┈▄▀░";
const title3 = "▓██┈┈▒██░░██┈┈┈█▌┈▓██┈┈┈┈▓██░▒██░┈┈██▒┈░██┈┈┈█▌┈░┈▒┈▄▀▒░┈";
const title4 = "▓▓█┈┈░██░░▓█▄┈┈┈▌┈▒██┈┈┈┈▒██┈▒██┈┈┈██░┈░▓█▄┈┈┈▌┈┈┈▄▀▒┈┈┈░";
const title5 = "▓▓█┈┈░██░░▓█▄┈┈┈▌┈▒██┈┈┈┈▒██┈▒██┈┈┈██░┈░▓█▄┈┈┈▌┈┈┈▄▀▒┈┈┈░";
const title6 = "▒▒█████▓┈░▒████▓┈┈▒██▒┈┈┈░██▒░┈████▓▒░┈░▒████▓┈┈▒███████▒";
const title7 = "░▒▓▒┈▒┈▒┈┈▒▒▓┈┈▒┈┈░┈▒░┈┈┈░┈┈░░┈▒░▒░▒░┈┈┈▒▒▓┈┈▒┈┈░▒▒┈▓░▒░▒";
const title8 = "░░▒░┈░┈░┈┈░┈▒┈┈▒┈┈░┈┈░┈┈┈┈┈┈░┈┈░┈▒┈▒░┈┈┈░┈▒┈┈▒┈┈░░▒┈▒┈░┈▒";
const title9 = "┈░░░┈░┈░┈┈░┈░┈┈░┈┈░┈┈┈┈┈┈░┈┈┈░┈░┈░┈▒┈┈┈┈░┈░┈┈░┈┈░┈░┈░┈░┈░";
const title10 = "┈░░░┈░┈░┈┈░┈░┈┈░┈┈░┈┈┈┈┈┈░┈┈┈░┈░┈░┈▒┈┈┈┈░┈░┈┈░┈┈░┈░┈░┈░┈░";
const title11 = "┈┈┈░┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈░┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈░┈┈┈┈";

console.log('');
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title1));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title2));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title3));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title4));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title5));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title6));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title7));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title8));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title9));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title10));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title11));
console.log('');
console.log(gradient(["#ff0055ff", "#FFFFFF", "#2f00ffff"])('By UDMODZ'));
console.log(gradient(["#ff0008ff", "#FFFFFF", "#2f00ffff"])('DONT SELL'));
console.log(gradient(["#ff0026ff", "#FFFFFF", "#2f00ffff"])('A FREE API'));
console.log(gradient(["#ff0000ff", "#FFFFFF", "#2f00ffff"])('ITz UDMODZ'));
console.log('');

if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
} else if (fs.existsSync('.env')) {
    require('dotenv').config();
}

// ============================================
// WRITABLE TEMP DIR (Read-only filesystem fix)
// ============================================
const TEMP_DIR = process.env.TEMP_DIR || os.tmpdir();
const SESSION_MAP_FILE = path.join(TEMP_DIR, 'udmodz_session_map.json');

console.log('[SYSTEM] 📁 Temp dir:', TEMP_DIR);
console.log('[SYSTEM] 📄 Session map:', SESSION_MAP_FILE);

// ============================================
// PASTEBIN CONFIG
// ============================================
const PASTEBIN_API_KEY = process.env.PASTEBIN_API_KEY || '0AD7HvdRLJpSZDyBCSgn4KCJKtyOy6dO';
const PASTEBIN_USERNAME = process.env.PASTEBIN_USERNAME || '';
const PASTEBIN_PASSWORD = process.env.PASTEBIN_PASSWORD || '';

// ============================================
// IN-MEMORY SESSION MAP (Primary)
// File-based map (Secondary - if writable)
// ============================================
const inMemorySessionMap = new Map();

function loadSessionMap() {
    // First load from memory
    if (inMemorySessionMap.size > 0) {
        const obj = {};
        inMemorySessionMap.forEach((v, k) => obj[k] = v);
        return obj;
    }

    // Try file
    try {
        if (fs.existsSync(SESSION_MAP_FILE)) {
            const data = JSON.parse(fs.readFileSync(SESSION_MAP_FILE, 'utf-8'));
            // Load into memory
            Object.entries(data).forEach(([k, v]) => inMemorySessionMap.set(k, v));
            return data;
        }
    } catch (e) {
        console.log('[MAP] File read skipped:', e.message);
    }
    return {};
}

function saveSessionMap(map) {
    // Always save to memory first
    Object.entries(map).forEach(([k, v]) => inMemorySessionMap.set(k, v));

    // Try file (non-blocking)
    try {
        fs.writeFileSync(SESSION_MAP_FILE, JSON.stringify(map, null, 2));
    } catch (e) {
        // Silently ignore read-only filesystem errors
        if (!e.message.includes('EROFS') && !e.message.includes('read-only')) {
            console.log('[MAP] File write skipped:', e.code);
        }
    }
}

function getSessionPasteId(sessionId) {
    // Check memory first
    if (inMemorySessionMap.has(sessionId)) {
        return inMemorySessionMap.get(sessionId);
    }
    // Check file
    const map = loadSessionMap();
    return map[sessionId] || null;
}

function setSessionPasteId(sessionId, pasteId) {
    inMemorySessionMap.set(sessionId, pasteId);
    const map = loadSessionMap();
    map[sessionId] = pasteId;
    saveSessionMap(map);
    console.log(`[MAP] ✅ Saved ${sessionId} = ${pasteId}`);
}

function removeSessionPasteId(sessionId) {
    inMemorySessionMap.delete(sessionId);
    const map = loadSessionMap();
    delete map[sessionId];
    saveSessionMap(map);
}

// ============================================
// PASTEBIN USER KEY CACHE
// ============================================
let cachedUserKey = null;

async function getPastebinUserKey() {
    if (cachedUserKey) return cachedUserKey;
    if (!PASTEBIN_USERNAME || !PASTEBIN_PASSWORD) return null;

    try {
        const params = new URLSearchParams();
        params.append('api_dev_key', PASTEBIN_API_KEY);
        params.append('api_user_name', PASTEBIN_USERNAME);
        params.append('api_user_password', PASTEBIN_PASSWORD);

        const response = await axios.post(
            'https://pastebin.com/api/api_login.php',
            params,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                timeout: 15000
            }
        );

        if (response.data && !response.data.startsWith('Bad')) {
            cachedUserKey = response.data.trim();
            console.log('[PASTEBIN] ✅ User key obtained');
            return cachedUserKey;
        }
        console.warn('[PASTEBIN] Login failed:', response.data);
        return null;
    } catch (err) {
        console.error('[PASTEBIN LOGIN ERR]', err.message);
        return null;
    }
}

// ============================================
// UPLOAD TO PASTEBIN
// ============================================
async function uploadToPastebin(content, title) {
    try {
        const userKey = await getPastebinUserKey();
        const params = new URLSearchParams();
        params.append('api_dev_key', PASTEBIN_API_KEY);
        params.append('api_option', 'paste');
        params.append('api_paste_code', content);
        params.append('api_paste_name', title || 'UDMODZ-Session');
        params.append('api_paste_expire_date', 'N');

        if (userKey) {
            params.append('api_user_key', userKey);
            params.append('api_paste_private', '2');
        } else {
            params.append('api_paste_private', '1');
        }

        const response = await axios.post(
            'https://pastebin.com/api/api_post.php',
            params,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                timeout: 30000
            }
        );

        if (response.data && response.data.startsWith('https://pastebin.com/')) {
            const pasteUrl = response.data.trim();
            const pasteId = pasteUrl.split('/').pop();
            const rawUrl = `https://pastebin.com/raw/${pasteId}`;
            console.log(`[PASTEBIN] ✅ Uploaded! ID: ${pasteId}`);
            return { url: pasteUrl, rawUrl, pasteId };
        }
        throw new Error('Pastebin error: ' + response.data);
    } catch (err) {
        console.error('[PASTEBIN UPLOAD ERR]', err.message);
        throw err;
    }
}

// ============================================
// LOAD FROM PASTEBIN
// ============================================
async function loadFromPastebin(pasteId) {
    try {
        const userKey = await getPastebinUserKey();

        // Try API (for private pastes)
        if (userKey) {
            try {
                const params = new URLSearchParams();
                params.append('api_dev_key', PASTEBIN_API_KEY);
                params.append('api_user_key', userKey);
                params.append('api_paste_key', pasteId);
                params.append('api_option', 'show_paste');

                const response = await axios.post(
                    'https://pastebin.com/api/api_raw.php',
                    params,
                    {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        timeout: 15000
                    }
                );

                if (response.data && !response.data.startsWith('Bad')) {
                    let data = response.data;
                    if (typeof data === 'string') {
                        data = JSON.parse(data, BufferJSON.reviver);
                    }
                    console.log(`[PASTEBIN] ✅ Loaded from API: ${pasteId}`);
                    return data;
                }
            } catch (e) {
                console.log('[PASTEBIN] API load failed, trying raw URL');
            }
        }

        // Fallback: raw URL
        const rawUrl = `https://pastebin.com/raw/${pasteId}`;
        const response = await axios.get(rawUrl, {
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        let data = response.data;
        if (typeof data === 'string') {
            data = JSON.parse(data, BufferJSON.reviver);
        }
        console.log(`[PASTEBIN] ✅ Loaded from raw: ${pasteId}`);
        return data;

    } catch (err) {
        console.error('[PASTEBIN LOAD ERR]', err.message);
        return null;
    }
}

// ============================================
// DELETE FROM PASTEBIN
// ============================================
async function deleteFromPastebin(pasteId) {
    try {
        const userKey = await getPastebinUserKey();
        if (!userKey) return false;

        const params = new URLSearchParams();
        params.append('api_dev_key', PASTEBIN_API_KEY);
        params.append('api_user_key', userKey);
        params.append('api_paste_key', pasteId);
        params.append('api_option', 'delete');

        const response = await axios.post(
            'https://pastebin.com/api/api_post.php',
            params,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                timeout: 15000
            }
        );

        if (response.data === 'Paste Removed') {
            console.log(`[PASTEBIN] ✅ Deleted: ${pasteId}`);
            return true;
        }
        return false;
    } catch (err) {
        console.error('[PASTEBIN DELETE ERR]', err.message);
        return false;
    }
}

// ============================================
// EXPRESS SETUP
// ============================================
udmodzportal.use(cors());
udmodzportal.use(express.json());
udmodzportal.use(express.static(path.join(__dirname, 'public')));

const connections = new Map();
const saveQueues = new Map();
const pendingPairings = new Map();

// ============================================
// SAVE SESSION QUEUE
// ============================================
async function saveudpastebin(sessionId, state) {
    if (!saveQueues.has(sessionId)) {
        saveQueues.set(sessionId, Promise.resolve());
    }

    const chain = saveQueues.get(sessionId);
    const next = chain.then(async () => {
        let retry = 0;
        while (retry < 3) {
            try {
                const content = JSON.stringify(state, BufferJSON.replacer, 2);
                const result = await uploadToPastebin(content, `UDMODZ-${sessionId}`);

                // Delete old paste
                const oldId = getSessionPasteId(sessionId);
                if (oldId && oldId !== result.pasteId) {
                    deleteFromPastebin(oldId).catch(() => {});
                }

                setSessionPasteId(sessionId, result.pasteId);
                return result;
            } catch (err) {
                retry++;
                if (retry < 3) await new Promise(r => setTimeout(r, 3000 * retry));
            }
        }
    });

    saveQueues.set(sessionId, next);
    return next;
}

// ============================================
// MAIN BOT CONNECT FUNCTION
// ============================================
async function connectUDmodzBot(phoneNumber, isNewPairing = false) {
    const sessionId = `session_${phoneNumber}`;

    // Load existing session
    let creds = initAuthCreds();
    let keys = {};

    if (!isNewPairing) {
        const pasteId = getSessionPasteId(sessionId);
        if (pasteId) {
            console.log(`[BOT] Loading session for ${phoneNumber} from: ${pasteId}`);
            const sessionData = await loadFromPastebin(pasteId);
            if (sessionData) {
                creds = sessionData.creds || initAuthCreds();
                keys = sessionData.keys || {};
                console.log(`[BOT] ✅ Session loaded for ${phoneNumber}`);
            }
        }
    }

    let saveTimer = null;
    let isConnected = false;
    let sessionSaved = false;

    const scheduleSave = () => {
        // Don't save if not properly connected yet
        if (!isConnected && !sessionSaved) return;
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(async () => {
            await saveudpastebin(sessionId, { creds, keys }).catch(() => {});
        }, 10000);
    };

    const state = {
        creds,
        keys: {
            get: (type, ids) => {
                const data = {};
                for (const id of ids) data[id] = keys[`${type}-${id}`];
                return data;
            },
            set: (data) => {
                for (const type in data) {
                    for (const id in data[type]) {
                        keys[`${type}-${id}`] = data[type][id];
                    }
                }
                // Only schedule save after connected
                if (isConnected) scheduleSave();
            }
        }
    };

    const version = (typeof fetchLatestVersion === 'function')
        ? (await fetchLatestVersion().catch(() => ({ version: [2, 3100, 1015901307] }))).version
        : [2, 3100, 1015901307];

    async function connect() {
        const sock = makeWASocket({
            logger: P({ level: "silent" }),
            printQRInTerminal: false,
            auth: state,
            version,
            connectTimeoutMs: 60000,
            defaultQueryTimeoutMs: 0,
            keepAliveIntervalMs: 25000,
            emitOwnEvents: true,
            fireInitQueries: true,
            generateHighQualityLinkPreview: true,
            syncFullHistory: false,
            markOnlineOnConnect: true,
            browser: ['Ubuntu', 'Chrome', '20.0.04']
        });

        connections.set(phoneNumber, {
            sock,
            status: 'connecting',
            lastUpdate: Date.now(),
            sessionId,
            phoneNumber
        });

        // ============================================
        // CONNECTION UPDATE HANDLER
        // ============================================
        sock.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect, qr } = update;

            console.log(`[BOT] ${phoneNumber} update:`, connection || 'partial');

            if (connection) {
                if (connections.has(phoneNumber)) {
                    connections.get(phoneNumber).status = connection;
                    connections.get(phoneNumber).lastUpdate = Date.now();
                }
            }

            // ============================================
            // CONNECTED SUCCESSFULLY
            // ============================================
            if (connection === 'open') {
                isConnected = true;
                console.log(`[BOT] ✅ ${phoneNumber} CONNECTED!`);

                // Small delay to stabilize
                await delay(3000);

                try {
                    // Save session to pastebin
                    console.log(`[BOT] 📤 Saving session to Pastebin...`);
                    const result = await saveudpastebin(sessionId, { creds, keys });
                    sessionSaved = true;

                    // Wait for upload
                    await delay(4000);

                    const currentPasteId = getSessionPasteId(sessionId);
                    console.log(`[BOT] 🆔 Current Paste ID: ${currentPasteId}`);

                    if (currentPasteId) {
                        const rawUrl = `https://pastebin.com/raw/${currentPasteId}`;
                        const pasteUrl = `https://pastebin.com/${currentPasteId}`;

                        const sessionMsg =
`╔══════════════════════════╗
║  🤖 *UDMODZ BOT CONNECTED* 🤖  ║
╚══════════════════════════╝

✅ *Bot Connected Successfully!*

━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 *Number:* ${phoneNumber}
━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 *SESSION ID:*
\`\`\`${currentPasteId}\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *Raw URL:*
${rawUrl}

🔗 *Pastebin URL:*
${pasteUrl}

━━━━━━━━━━━━━━━━━━━━━━━━━━
💾 *Bot Config:*
SESSION_ID=${currentPasteId}

⚠️ *Keep this ID PRIVATE!*
━━━━━━━━━━━━━━━━━━━━━━━━━━

> *UDMODZ API* 💜 | *DON'T SELL*`;

                        // Send to own number
                        try {
                            await sock.sendMessage(
                                phoneNumber + '@s.whatsapp.net',
                                { text: sessionMsg }
                            );
                            console.log(`[BOT] ✅ Session msg sent to ${phoneNumber}`);
                        } catch (msgErr) {
                            console.error('[BOT] Msg send err:', msgErr.message);
                        }

                        // Store for API response
                        if (pendingPairings.has(phoneNumber)) {
                            pendingPairings.get(phoneNumber).pasteId = currentPasteId;
                            pendingPairings.get(phoneNumber).rawUrl = rawUrl;
                        }
                    }
                } catch (e) {
                    console.error('[BOT] Post-connect error:', e.message);
                }
            }

            // ============================================
            // DISCONNECTED
            // ============================================
            if (connection === 'close') {
                const statusCode = lastDisconnect?.error?.output?.statusCode;
                const reason = lastDisconnect?.error?.message || 'Unknown';
                isConnected = false;

                console.log(`[BOT] ❌ ${phoneNumber} disconnected`);
                console.log(`[BOT] Code: ${statusCode} | Reason: ${reason}`);

                if (saveTimer) clearTimeout(saveTimer);

                // 401 = Logged out, 440 = Replaced, 428 = Connection closed
                if (statusCode === DisconnectReason.loggedOut || statusCode === 401) {
                    console.log(`[BOT] 🚫 ${phoneNumber} - Permanent logout`);
                    connections.delete(phoneNumber);
                    return;
                }

                // Reconnect for other errors
                const shouldReconnect = [
                    undefined,
                    408, // Timeout
                    428, // Connection closed
                    440, // Replaced
                    500, // Server error
                    503  // Service unavailable
                ].includes(statusCode) || statusCode < 500;

                if (shouldReconnect && statusCode !== 401) {
                    const waitTime = statusCode === 408 ? 10000 : 5000;
                    console.log(`[BOT] 🔄 Reconnecting ${phoneNumber} in ${waitTime}ms...`);
                    await delay(waitTime);
                    await connect().catch(e => console.error('[BOT] Reconnect err:', e.message));
                } else {
                    console.log(`[BOT] 🚫 Not reconnecting. Code: ${statusCode}`);
                    connections.delete(phoneNumber);
                }
            }
        });

        // ============================================
        // CREDS UPDATE - SAVE TO PASTEBIN
        // ============================================
        sock.ev.on('creds.update', async () => {
            creds = state.creds;
            if (isConnected) {
                scheduleSave();
            }
        });

        return sock;
    }

    return await connect();
}

// ============================================
// ROUTES
// ============================================

udmodzportal.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// PAIR ROUTE - Fixed 401 issue
// ============================================
udmodzportal.get('/pair', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Phone number required' });

    // Check if already connected
    const existing = connections.get(number);
    if (existing?.status === 'open') {
        const pasteId = getSessionPasteId(`session_${number}`);
        return res.json({
            status: 'already_authenticated',
            message: 'Bot already connected!',
            sessionId: pasteId || null,
            rawUrl: pasteId ? `https://pastebin.com/raw/${pasteId}` : null
        });
    }

    try {
        // Connect as NEW pairing (don't load old session)
        const sock = await connectUDmodzBot(number, true);

        // Store pending pairing info
        pendingPairings.set(number, { sock, pasteId: null, rawUrl: null });

        // Wait for socket to be ready
        await delay(3000);

        // Check if already registered
        if (sock.authState.creds.registered) {
            pendingPairings.delete(number);
            const pasteId = getSessionPasteId(`session_${number}`);
            return res.json({
                status: 'already_authenticated',
                message: 'Already paired!',
                sessionId: pasteId || null
            });
        }

        // Request pairing code
        console.log(`[PAIR] Requesting pairing code for ${number}`);
        const code = await sock.requestPairingCode(number);
        const formattedCode = code?.match(/.{1,4}/g)?.join('-') || code;

        console.log(`[PAIR] ✅ Code for ${number}: ${formattedCode}`);

        res.json({
            status: 'success',
            code: formattedCode,
            message: 'Enter code in WhatsApp > Linked Devices > Link a Device. Session ID will be sent to your WhatsApp!'
        });

    } catch (err) {
        console.error('[PAIR ERR]', err.message);
        // Cleanup on error
        connections.delete(number);
        pendingPairings.delete(number);
        res.status(500).json({ error: err.message });
    }
});

// ============================================
// SESSION ROUTE
// ============================================
udmodzportal.get('/session', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Phone number required' });

    const pasteId = getSessionPasteId(`session_${number}`);

    if (pasteId) {
        res.json({
            status: 'success',
            sessionId: pasteId,
            rawUrl: `https://pastebin.com/raw/${pasteId}`,
            pasteUrl: `https://pastebin.com/${pasteId}`,
            configLine: `SESSION_ID=${pasteId}`
        });
    } else {
        res.status(404).json({
            error: 'Session not found. Pair your bot first.',
            hint: 'Go to /pair endpoint'
        });
    }
});

// ============================================
// SEND MESSAGE ROUTE
// ============================================
udmodzportal.get('/send', async (req, res) => {
    const { text, msg, botNumber, receiver } = req.query;
    const messageContent = text || msg;
    const cleanBot = botNumber?.replace(/[^0-9]/g, '');
    const cleanReceiver = receiver?.replace(/[^0-9]/g, '');

    if (!messageContent || !cleanBot || !cleanReceiver) {
        return res.status(400).json({ error: 'Required: text/msg, botNumber, receiver' });
    }

    const receiverJid = cleanReceiver + '@s.whatsapp.net';
    let bot = connections.get(cleanBot);

    if (!bot || bot.status !== 'open') {
        const pasteId = getSessionPasteId(`session_${cleanBot}`);
        if (pasteId) {
            console.log(`[SEND] Reconnecting ${cleanBot}...`);
            try {
                await connectUDmodzBot(cleanBot, false);
                let attempts = 0;
                while (attempts < 15) {
                    bot = connections.get(cleanBot);
                    if (bot?.status === 'open') break;
                    await delay(2000);
                    attempts++;
                }
            } catch (e) {
                return res.status(500).json({ error: 'Reconnect failed: ' + e.message });
            }
        }
    }

    if (bot?.status === 'open') {
        try {
            await bot.sock.sendMessage(receiverJid, { text: messageContent });
            res.json({ status: 'success', message: 'Message sent!' });
        } catch (err) {
            res.status(500).json({ error: 'Send failed: ' + err.message });
        }
    } else {
        res.status(404).json({ error: 'Bot offline. Pair first.' });
    }
});

// ============================================
// MANAGE ROUTE
// ============================================
udmodzportal.get('/manage', async (req, res) => {
    const { number, action } = req.query;
    const cleanNumber = number?.replace(/[^0-9]/g, '');
    if (!cleanNumber) return res.status(400).json({ error: 'Number required' });

    if (action === 'delete') {
        const bot = connections.get(cleanNumber);
        if (bot) {
            try { bot.sock.logout(); } catch (e) {}
            connections.delete(cleanNumber);
        }

        const pasteId = getSessionPasteId(`session_${cleanNumber}`);
        if (pasteId) deleteFromPastebin(pasteId).catch(() => {});
        removeSessionPasteId(`session_${cleanNumber}`);
        pendingPairings.delete(cleanNumber);

        return res.json({ status: 'success', message: `Bot ${cleanNumber} deleted.` });
    }

    res.status(400).json({ error: 'Invalid action' });
});

// ============================================
// HEALTH ROUTE
// ============================================
udmodzportal.get('/health', (req, res) => {
    const list = [];

    connections.forEach((val, key) => {
        const pasteId = getSessionPasteId(`session_${key}`);
        list.push({
            number: key,
            status: val.status,
            lastUpdate: new Date(val.lastUpdate).toISOString(),
            sessionId: pasteId || null,
            rawUrl: pasteId ? `https://pastebin.com/raw/${pasteId}` : null,
            pasteUrl: pasteId ? `https://pastebin.com/${pasteId}` : null
        });
    });

    // Add offline from memory map
    inMemorySessionMap.forEach((pasteId, sessionId) => {
        const num = sessionId.replace('session_', '');
        if (!connections.has(num)) {
            list.push({
                number: num,
                status: 'offline',
                lastUpdate: null,
                sessionId: pasteId,
                rawUrl: `https://pastebin.com/raw/${pasteId}`,
                pasteUrl: `https://pastebin.com/${pasteId}`
            });
        }
    });

    res.json({
        status: 'ok',
        total: list.length,
        online: list.filter(b => b.status === 'open').length,
        offline: list.filter(b => b.status !== 'open').length,
        bots: list
    });
});

// ============================================
// STATUS ROUTE - Quick check
// ============================================
udmodzportal.get('/status', (req, res) => {
    res.json({
        status: 'running',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        sessions: inMemorySessionMap.size,
        connections: connections.size
    });
});

// ============================================
// INIT
// ============================================
async function init() {
    console.log('[INIT] 🚀 UDMODZ API Starting...');
    console.log('[INIT] 🔑 API Key:', PASTEBIN_API_KEY ? '✅' : '❌');

    if (PASTEBIN_USERNAME && PASTEBIN_PASSWORD) {
        await getPastebinUserKey().catch(() => {});
    }

    // Load session map into memory
    loadSessionMap();

    const sessions = [...inMemorySessionMap.entries()];
    console.log(`[INIT] Found ${sessions.length} saved session(s)`);

    for (const [sessionId, pasteId] of sessions) {
        const num = sessionId.replace('session_', '');
        console.log(`[INIT] 🔄 Reconnecting: ${num}`);
        try {
            await connectUDmodzBot(num, false);
            await delay(3000);
        } catch (e) {
            console.error(`[INIT ERR] ${num}:`, e.message);
        }
    }

    console.log('[INIT] ✅ Ready!');
}

// ============================================
// START SERVER
// ============================================
const isProduction = !!(
    process.env.NODE_ENV === 'production' ||
    process.env.VERCEL ||
    process.env.RAILWAY_ENVIRONMENT ||
    process.env.RENDER ||
    process.env.HEROKU_APP_NAME
);

if (isProduction) {
    udmodzportal.listen(port, async () => {
        console.log(`[SERVER] ✅ Port: ${port}`);
        await init();
    });
} else {
    try {
        const https = require('https');
        const selfsigned = require('selfsigned');
        const pems = selfsigned.generate(
            [{ name: 'commonName', value: 'localhost' }],
            { days: 365 }
        );
        https.createServer({ key: pems.private, cert: pems.cert }, udmodzportal)
            .listen(port, async () => {
                console.log(`[SERVER] ✅ HTTPS: https://localhost:${port}`);
                await init();
            });
    } catch (e) {
        udmodzportal.listen(port, async () => {
            console.log(`[SERVER] ✅ HTTP: http://localhost:${port}`);
            await init();
        });
    }
}

module.exports = udmodzportal;
