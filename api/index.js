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
    makeCacheableSignalKeyStore,
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
console.log('');
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
console.log('');
console.log('');
console.log(gradient(["#ff0055ff", "#FFFFFF", "#2f00ffff"])('By UDMODZ'));
console.log(gradient(["#ff0008ff", "#FFFFFF", "#2f00ffff"])('DONT SELL'));
console.log(gradient(["#ff0026ff", "#FFFFFF", "#2f00ffff"])('A FREE API'));
console.log(gradient(["#ff0000ff", "#FFFFFF", "#2f00ffff"])('ITz UDMODZ'));
console.log('');
console.log('');
console.log('');

if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
} else if (fs.existsSync('.env')) {
    require('dotenv').config();
}

// ============================================
// PASTEBIN CONFIG - API KEY HARDCODED
// ============================================
const PASTEBIN_API_KEY = process.env.PASTEBIN_API_KEY || '0AD7HvdRLJpSZDyBCSgn4KCJKtyOy6dO';
const PASTEBIN_USERNAME = process.env.PASTEBIN_USERNAME || '';
const PASTEBIN_PASSWORD = process.env.PASTEBIN_PASSWORD || '';

// ============================================
// SESSION MAP - Local storage for paste IDs
// ============================================
const SESSION_MAP_FILE = path.join(__dirname, 'session_map.json');

function loadSessionMap() {
    try {
        if (fs.existsSync(SESSION_MAP_FILE)) {
            return JSON.parse(fs.readFileSync(SESSION_MAP_FILE, 'utf-8'));
        }
    } catch (e) {}
    return {};
}

function saveSessionMap(map) {
    try {
        fs.writeFileSync(SESSION_MAP_FILE, JSON.stringify(map, null, 2));
    } catch (e) {
        console.error('[MAP SAVE ERR]', e.message);
    }
}

function getSessionPasteId(sessionId) {
    const map = loadSessionMap();
    return map[sessionId] || null;
}

function setSessionPasteId(sessionId, pasteId) {
    const map = loadSessionMap();
    map[sessionId] = pasteId;
    saveSessionMap(map);
}

function removeSessionPasteId(sessionId) {
    const map = loadSessionMap();
    delete map[sessionId];
    saveSessionMap(map);
}

// ============================================
// PASTEBIN USER KEY (cache)
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
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        if (response.data && !response.data.startsWith('Bad')) {
            cachedUserKey = response.data.trim();
            console.log('[PASTEBIN] User key obtained successfully');
            return cachedUserKey;
        } else {
            console.warn('[PASTEBIN] Login failed:', response.data);
            return null;
        }
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

        // Private paste if user key available, unlisted if not
        if (userKey) {
            params.append('api_user_key', userKey);
            params.append('api_paste_private', '2'); // Private
        } else {
            params.append('api_paste_private', '1'); // Unlisted
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

            console.log(`[PASTEBIN] ✅ Uploaded successfully!`);
            console.log(`[PASTEBIN] 🔗 URL: ${pasteUrl}`);
            console.log(`[PASTEBIN] 📋 Raw: ${rawUrl}`);
            console.log(`[PASTEBIN] 🆔 ID: ${pasteId}`);

            return { url: pasteUrl, rawUrl, pasteId };
        } else {
            throw new Error('Pastebin API error: ' + response.data);
        }
    } catch (err) {
        console.error('[PASTEBIN UPLOAD ERR]', err.message);
        throw err;
    }
}

// ============================================
// LOAD FROM PASTEBIN RAW
// ============================================
async function loadFromPastebin(pasteId) {
    try {
        const userKey = await getPastebinUserKey();

        // Try API raw fetch first (for private pastes)
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
                    return data;
                }
            } catch (e) {}
        }

        // Fallback: public raw URL
        const rawUrl = `https://pastebin.com/raw/${pasteId}`;
        const response = await axios.get(rawUrl, {
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });

        let data = response.data;
        if (typeof data === 'string') {
            data = JSON.parse(data, BufferJSON.reviver);
        }
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
        if (!userKey) {
            console.warn('[PASTEBIN] No user key, cannot delete paste');
            return false;
        }

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
            console.log(`[PASTEBIN] ✅ Paste ${pasteId} deleted`);
            return true;
        } else {
            console.warn('[PASTEBIN] Delete response:', response.data);
            return false;
        }
    } catch (err) {
        console.error('[PASTEBIN DELETE ERR]', err.message);
        return false;
    }
}

// ============================================
// SETUP EXPRESS
// ============================================
udmodzportal.use(cors());
udmodzportal.use(express.json());
udmodzportal.use(express.static(path.join(__dirname, 'public')));

const connections = new Map();
const saveud0 = new Map();

// ============================================
// SAVE SESSION TO PASTEBIN (with queue)
// ============================================
async function saveudpastebin(sessionId, state) {
    if (!saveud0.has(sessionId)) {
        saveud0.set(sessionId, Promise.resolve());
    }

    const currentChain = saveud0.get(sessionId);
    const nextLink = currentChain.then(async () => {
        let retry = 0;
        const maxRetries = 3;

        while (retry < maxRetries) {
            try {
                const content = JSON.stringify(state, BufferJSON.replacer, 2);
                const result = await uploadToPastebin(content, `UDMODZ-${sessionId}`);

                // Delete old paste if exists
                const oldPasteId = getSessionPasteId(sessionId);
                if (oldPasteId && oldPasteId !== result.pasteId) {
                    deleteFromPastebin(oldPasteId).catch(() => {});
                }

                setSessionPasteId(sessionId, result.pasteId);
                console.log(`[SESSION] ✅ ${sessionId} saved - ID: ${result.pasteId}`);
                return result;

            } catch (err) {
                retry++;
                console.warn(`[SESSION] Retry ${retry}/${maxRetries} for ${sessionId}`);
                if (retry < maxRetries) {
                    await new Promise(r => setTimeout(r, 3000 * retry));
                } else {
                    console.error('[SESSION SAVE ERR]', err.message);
                }
            }
        }
    });

    saveud0.set(sessionId, nextLink);
    return nextLink;
}

// ============================================
// CONNECT BOT
// ============================================
async function connectUDmodzBot(phoneNumber) {
    const sessionId = `session_${phoneNumber}`;

    // Load session from pastebin
    let sessionData = null;
    const pasteId = getSessionPasteId(sessionId);
    if (pasteId) {
        console.log(`[BOT] Loading session for ${phoneNumber} from paste: ${pasteId}`);
        sessionData = await loadFromPastebin(pasteId);
    }

    let creds = sessionData?.creds || initAuthCreds();
    let keys = sessionData?.keys || {};

    let saveTimer = null;
    const scheduleSave = () => {
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(async () => {
            await saveudpastebin(sessionId, { creds, keys }).catch(() => {});
        }, 8000);
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
                scheduleSave();
            }
        }
    };

    const version = (typeof fetchLatestVersion === 'function')
        ? (await fetchLatestVersion().catch(() => ({ version: [2, 3100, 1015901307] }))).version
        : [2, 3100, 1015901307];

    async function connect() {
        const udmodzConnect = makeWASocket({
            logger: P({ level: "silent" }),
            printQRInTerminal: false,
            auth: state,
            version,
            connectTimeoutMs: 60000,
            defaultQueryTimeoutMs: 0,
            keepAliveIntervalMs: 10000,
            emitOwnEvents: true,
            fireInitQueries: true,
            generateHighQualityLinkPreview: true,
            syncFullHistory: false,
            markOnlineOnConnect: true,
            browser: ['Mac OS', 'Safari', '10.15.7']
        });

        connections.set(phoneNumber, {
            udmodzConnect,
            status: 'connecting',
            lastUpdate: Date.now(),
            sessionId,
            phoneNumber
        });

        udmodzConnect.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;

            if (connection && connections.has(phoneNumber)) {
                connections.get(phoneNumber).status = connection;
                connections.get(phoneNumber).lastUpdate = Date.now();
            }

            // ============================================
            // CONNECTED - UPLOAD SESSION & SEND TO WA
            // ============================================
            if (connection === 'open') {
                console.log(`[BOT] ✅ ${phoneNumber} connected!`);

                try {
                    // Save session to pastebin
                    console.log(`[BOT] 📤 Uploading session to Pastebin...`);
                    const saveResult = await saveudpastebin(sessionId, { creds, keys });

                    // Wait for upload to complete
                    await delay(5000);

                    const currentPasteId = getSessionPasteId(sessionId);

                    if (currentPasteId) {
                        const rawUrl = `https://pastebin.com/raw/${currentPasteId}`;
                        const pasteUrl = `https://pastebin.com/${currentPasteId}`;

                        // Format session message
                        const sessionMsg =
`╔═══════════════════════════╗
║  🤖 *UDMODZ BOT CONNECTED* 🤖  ║
╚═══════════════════════════╝

✅ *Bot Connected Successfully!*

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 *Number:* ${phoneNumber}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 *YOUR SESSION ID:*
\`\`\`${currentPasteId}\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *Copy Session ID:*
${currentPasteId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 *Pastebin URL:*
${pasteUrl}

📄 *Raw Session URL:*
${rawUrl}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
💾 *How to use:*
Set in your bot config:
SESSION_ID=${currentPasteId}

⚠️ *Keep this ID PRIVATE & SAFE!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━

> *Powered by UDMODZ API* 💜
> *DONT SELL • A FREE API*`;

                        // Send to bot's own WhatsApp
                        try {
                            await udmodzConnect.sendMessage(
                                phoneNumber + '@s.whatsapp.net',
                                { text: sessionMsg }
                            );
                            console.log(`[BOT] ✅ Session ID sent to ${phoneNumber}`);
                            console.log(`[BOT] 🆔 Session ID: ${currentPasteId}`);
                        } catch (msgErr) {
                            console.error('[BOT] Message send error:', msgErr.message);
                        }
                    } else {
                        console.error('[BOT] ❌ No paste ID found after upload');
                    }

                } catch (e) {
                    console.error('[BOT] Session upload error:', e.message);
                }
            }

            // ============================================
            // DISCONNECTED - RECONNECT
            // ============================================
            if (connection === 'close') {
                const statusCode = lastDisconnect?.error?.output?.statusCode;
                const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

                console.log(`[BOT] ${phoneNumber} disconnected. Code: ${statusCode}`);

                if (shouldReconnect) {
                    console.log(`[BOT] 🔄 Reconnecting ${phoneNumber}...`);
                    await delay(5000);
                    await connect().catch(console.error);
                } else {
                    console.log(`[BOT] 🚫 ${phoneNumber} logged out permanently`);
                    connections.delete(phoneNumber);
                }
            }
        });

        udmodzConnect.ev.on('creds.update', () => {
            creds = state.creds;
            scheduleSave();
        });

        return udmodzConnect;
    }

    return await connect();
}

// ============================================
// ROUTES
// ============================================

// Serve index.html
udmodzportal.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// PAIR ROUTE
// ============================================
udmodzportal.get('/pair', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Phone number required' });

    try {
        const udmodzConnect = await connectUDmodzBot(number);
        await delay(5000);

        if (!udmodzConnect.authState.creds.registered) {
            const code = await udmodzConnect.requestPairingCode(number);
            const formattedCode = code?.match(/.{1,4}/g)?.join('-') || code;

            res.json({
                status: 'success',
                code: formattedCode,
                message: 'Enter this code in WhatsApp → Linked Devices → Link a Device. Session ID will be sent to your WhatsApp after pairing!'
            });
        } else {
            const pasteId = getSessionPasteId(`session_${number}`);
            res.json({
                status: 'already_authenticated',
                message: 'Bot already paired!',
                sessionId: pasteId || 'Check your WhatsApp',
                rawUrl: pasteId ? `https://pastebin.com/raw/${pasteId}` : null
            });
        }
    } catch (err) {
        console.error('[PAIR ERR]', err.message);
        res.status(500).json({ error: err.message });
    }
});

// ============================================
// GET SESSION ROUTE
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
            error: 'Session not found. Please pair your bot first.',
            number
        });
    }
});

// ============================================
// MANAGE ROUTE (DELETE)
// ============================================
udmodzportal.get('/manage', async (req, res) => {
    const { number, action } = req.query;
    const cleanNumber = number?.replace(/[^0-9]/g, '');
    if (!cleanNumber) return res.status(400).json({ error: 'Number required' });

    if (action === 'delete') {
        // Disconnect bot
        const bot = connections.get(cleanNumber);
        if (bot) {
            try {
                bot.udmodzConnect.logout();
            } catch (e) {}
            connections.delete(cleanNumber);
        }

        // Delete from pastebin
        const pasteId = getSessionPasteId(`session_${cleanNumber}`);
        if (pasteId) {
            await deleteFromPastebin(pasteId);
        }

        // Remove from local map
        removeSessionPasteId(`session_${cleanNumber}`);

        return res.json({
            status: 'success',
            message: `Bot ${cleanNumber} deleted successfully.`
        });
    }

    res.status(400).json({ error: 'Invalid action. Use: delete' });
});

// ============================================
// SEND MESSAGE ROUTE
// ============================================
udmodzportal.get('/send', async (req, res) => {
    const { text, msg, botNumber, receiver } = req.query;
    const messageContent = text || msg;
    const cleanedbotud = botNumber?.replace(/[^0-9]/g, '');
    const cleanedreciud = receiver?.replace(/[^0-9]/g, '');

    if (!messageContent || !cleanedbotud || !cleanedreciud) {
        return res.status(400).json({
            error: 'Required: text/msg, botNumber, receiver'
        });
    }

    const receiverJid = cleanedreciud + '@s.whatsapp.net';
    let bot = connections.get(cleanedbotud);

    // Try to reconnect if offline
    if (!bot || bot.status !== 'open') {
        const pasteId = getSessionPasteId(`session_${cleanedbotud}`);
        if (pasteId) {
            console.log(`[SEND] Reconnecting ${cleanedbotud}...`);
            if (bot?.udmodzConnect) {
                try { bot.udmodzConnect.end(undefined); } catch (e) {}
            }
            await connectUDmodzBot(cleanedbotud).catch(() => {});

            let attempts = 0;
            while (attempts < 15) {
                bot = connections.get(cleanedbotud);
                if (bot?.status === 'open') break;
                await delay(2000);
                attempts++;
            }
        }
    }

    if (bot && (bot.status === 'open' || bot.status === 'connected')) {
        try {
            await bot.udmodzConnect.sendMessage(receiverJid, { text: messageContent });
            res.json({ status: 'success', message: 'Message sent successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Send failed: ' + err.message });
        }
    } else {
        res.status(404).json({
            error: 'Bot is offline. Please pair first or wait for reconnection.'
        });
    }
});

// ============================================
// HEALTH CHECK ROUTE
// ============================================
udmodzportal.get('/health', async (req, res) => {
    const list = [];

    connections.forEach((val, key) => {
        const pasteId = getSessionPasteId(`session_${key}`);
        list.push({
            number: key,
            status: val.status,
            lastUpdate: new Date(val.lastUpdate).toISOString(),
            sessionId: pasteId || 'N/A',
            rawUrl: pasteId ? `https://pastebin.com/raw/${pasteId}` : null,
            pasteUrl: pasteId ? `https://pastebin.com/${pasteId}` : null
        });
    });

    // Add offline bots from session map
    const sessionMap = loadSessionMap();
    for (const [sId, pId] of Object.entries(sessionMap)) {
        const num = sId.replace('session_', '');
        if (!connections.has(num)) {
            list.push({
                number: num,
                status: 'offline',
                lastUpdate: 'N/A',
                sessionId: pId,
                rawUrl: `https://pastebin.com/raw/${pId}`,
                pasteUrl: `https://pastebin.com/${pId}`
            });
        }
    }

    res.json({
        status: 'ok',
        total: list.length,
        online: list.filter(b => b.status === 'open').length,
        offline: list.filter(b => b.status === 'offline').length,
        bots: list
    });
});

// ============================================
// INIT - Load existing sessions on startup
// ============================================
async function init() {
    console.log('[INIT] 🚀 Starting UDMODZ API...');
    console.log('[INIT] 🔑 Pastebin API Key:', PASTEBIN_API_KEY ? '✅ Set' : '❌ Missing');

    // Get user key on startup
    if (PASTEBIN_USERNAME && PASTEBIN_PASSWORD) {
        await getPastebinUserKey();
    }

    const sessionMap = loadSessionMap();
    const sessions = Object.entries(sessionMap);

    if (sessions.length === 0) {
        console.log('[INIT] No existing sessions found');
        return;
    }

    console.log(`[INIT] Found ${sessions.length} session(s), reconnecting...`);

    for (const [sessionId, pasteId] of sessions) {
        const num = sessionId.replace('session_', '');
        console.log(`[INIT] 🔄 Connecting: ${num} (Paste: ${pasteId})`);
        try {
            await connectUDmodzBot(num);
            await delay(3000);
        } catch (e) {
            console.error(`[INIT ERR] ${num}:`, e.message);
        }
    }

    console.log('[INIT] ✅ All sessions loaded!');
}

// ============================================
// START SERVER
// ============================================
const isProduction = process.env.NODE_ENV === 'production' ||
    process.env.VERCEL ||
    process.env.CLEVER_CLOUD ||
    process.env.RAILWAY_ENVIRONMENT;

if (isProduction) {
    udmodzportal.listen(port, async () => {
        console.log(`[SERVER] ✅ Running on port ${port}`);
        await init();
    });
} else {
    try {
        const https = require('https');
        const selfsigned = require('selfsigned');
        const attrs = [{ name: 'commonName', value: 'localhost' }];
        const pems = selfsigned.generate(attrs, { days: 365 });

        const httpsServer = https.createServer({
            key: pems.private,
            cert: pems.cert
        }, udmodzportal);

        httpsServer.listen(port, async () => {
            console.log(`[SERVER] ✅ HTTPS Running on port ${port}`);
            console.log(`[SERVER] 🌐 URL: https://localhost:${port}`);
            await init();
        });
    } catch (e) {
        // Fallback to HTTP if selfsigned not available
        udmodzportal.listen(port, async () => {
            console.log(`[SERVER] ✅ HTTP Running on port ${port}`);
            console.log(`[SERVER] 🌐 URL: http://localhost:${port}`);
            await init();
        });
    }
}

module.exports = udmodzportal;
