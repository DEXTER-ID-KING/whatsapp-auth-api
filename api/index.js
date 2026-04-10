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
const title12 = "┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈";

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

const fs = require('fs');
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
} else if (fs.existsSync('.env')) {
    require('dotenv').config();
}

// ============================================
// PASTEBIN CONFIG
// ============================================
const PASTEBIN_API_KEY = process.env.PASTEBIN_API_KEY || '';
const PASTEBIN_USER_KEY = process.env.PASTEBIN_USER_KEY || '';

// ============================================
// PASTEBIN FUNCTIONS
// ============================================
async function uploadToPastebin(content, title) {
    try {
        const params = new URLSearchParams();
        params.append('api_dev_key', PASTEBIN_API_KEY);
        params.append('api_option', 'paste');
        params.append('api_paste_code', content);
        params.append('api_paste_name', title || 'UDMODZ Session');
        params.append('api_paste_private', '1');
        params.append('api_paste_expire_date', 'N');

        if (PASTEBIN_USER_KEY) {
            params.append('api_user_key', PASTEBIN_USER_KEY);
        }

        const response = await axios.post('https://pastebin.com/api/api_post.php', params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (response.data.startsWith('https://pastebin.com/')) {
            const pasteId = response.data.split('/').pop().trim();
            const rawUrl = `https://pastebin.com/raw/${pasteId}`;
            console.log(`[PASTEBIN] Session uploaded: ${rawUrl}`);
            return { url: response.data.trim(), rawUrl, pasteId };
        } else {
            throw new Error('Pastebin error: ' + response.data);
        }
    } catch (err) {
        console.error('[PASTEBIN ERR]', err.message);
        throw err;
    }
}

async function loadFromPastebin(pasteId) {
    try {
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
// SESSION FILE MANAGEMENT (local pastebin id store)
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
    } catch (e) {}
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

udmodzportal.use(cors());
udmodzportal.use(express.json());
udmodzportal.use(express.static(path.join(__dirname, 'public')));

const connections = new Map();
const saveud0 = new Map();

async function saveudpastebin(sessionId, state) {
    if (!saveud0.has(sessionId)) {
        saveud0.set(sessionId, Promise.resolve());
    }

    const currentChain = saveud0.get(sessionId);
    const nextLink = currentChain.then(async () => {
        try {
            const content = JSON.stringify(state, BufferJSON.replacer, 2);
            const existingPasteId = getSessionPasteId(sessionId);

            const result = await uploadToPastebin(content, `UDMODZ-${sessionId}`);
            setSessionPasteId(sessionId, result.pasteId);

            console.log(`[PASTEBIN] Session ${sessionId} saved. Paste ID: ${result.pasteId}`);
            console.log(`[PASTEBIN] Raw URL: ${result.rawUrl}`);

        } catch (err) {
            console.error('[PASTEBIN SAVE ERR]', err.message);
        }
    });

    saveud0.set(sessionId, nextLink);
    return nextLink;
}

async function loadSessionFromPastebin(sessionId) {
    const pasteId = getSessionPasteId(sessionId);
    if (!pasteId) return null;
    return await loadFromPastebin(pasteId);
}

async function deleteSessionFromPastebin(sessionId) {
    removeSessionPasteId(sessionId);
    console.log(`[PASTEBIN] Session ${sessionId} removed from local map`);
}

async function connectUDmodzBot(phoneNumber) {
    const sessionId = `session_${phoneNumber}`;
    let sessionData = await loadSessionFromPastebin(sessionId);

    let creds = sessionData?.creds || initAuthCreds();
    let keys = sessionData?.keys || {};

    let saveTimer = null;
    const scheduleSave = () => {
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
            saveudpastebin(sessionId, { creds, keys }).catch(() => {});
        }, 5000);
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
                    for (const id in data[type]) keys[`${type}-${id}`] = data[type][id];
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
            sessionId
        });

        udmodzConnect.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;

            if (connection && connections.has(phoneNumber)) {
                connections.get(phoneNumber).status = connection;
                connections.get(phoneNumber).lastUpdate = Date.now();
            }

            // ============================================
            // BOT CONNECT උනාම SESSION PASTEBIN UPLOAD + MSG
            // ============================================
            if (connection === 'open') {
                console.log(`[BOT] ${phoneNumber} connected successfully!`);

                try {
                    // Save session to pastebin
                    await saveudpastebin(sessionId, { creds, keys });

                    // Get paste ID
                    await delay(3000);
                    const pasteId = getSessionPasteId(sessionId);

                    if (pasteId) {
                        const rawUrl = `https://pastebin.com/raw/${pasteId}`;
                        const pasteUrl = `https://pastebin.com/${pasteId}`;

                        const sessionMsg = `╔══════════════════════════════╗
║     🤖 *UDMODZ BOT CONNECTED* 🤖     ║
╚══════════════════════════════╝

✅ *Bot Successfully Connected!*

📱 *Number:* ${phoneNumber}
🆔 *Session ID:* \`${pasteId}\`

🔗 *Pastebin URL:*
${pasteUrl}

📋 *Raw Session URL:*
${rawUrl}

💾 *Copy Session ID:*
\`\`\`${pasteId}\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 *How to use SESSION_ID:*
Set SESSION_ID=${pasteId} in your config

⚠️ *Keep this ID safe & private!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

> *Powered by UDMODZ* 💜`;

                        // Send session info to bot's own number
                        await udmodzConnect.sendMessage(
                            phoneNumber + '@s.whatsapp.net',
                            { text: sessionMsg }
                        );

                        console.log(`[SESSION] Sent to ${phoneNumber}: ${pasteId}`);
                    }
                } catch (e) {
                    console.error('[SESSION MSG ERR]', e.message);
                }
            }

            if (connection === 'close') {
                const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
                if (shouldReconnect) {
                    console.log(`[BOT] ${phoneNumber} reconnecting...`);
                    await delay(5000);
                    await connect();
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

// Pair route
udmodzportal.get('/pair', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Number required' });

    try {
        const udmodzConnect = await connectUDmodzBot(number);
        await delay(5000);

        if (!udmodzConnect.authState.creds.registered) {
            const code = await udmodzConnect.requestPairingCode(number);
            res.json({
                status: 'success',
                code,
                message: 'After pairing, session ID will be sent to your WhatsApp'
            });
        } else {
            const pasteId = getSessionPasteId(`session_${number}`);
            res.json({
                status: 'already_authenticated',
                message: 'This bot is already paired.',
                sessionId: pasteId || 'Check your WhatsApp for session ID'
            });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get session ID route
udmodzportal.get('/session', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Number required' });

    const pasteId = getSessionPasteId(`session_${number}`);
    if (pasteId) {
        res.json({
            status: 'success',
            sessionId: pasteId,
            rawUrl: `https://pastebin.com/raw/${pasteId}`,
            pasteUrl: `https://pastebin.com/${pasteId}`
        });
    } else {
        res.status(404).json({ error: 'Session not found for this number' });
    }
});

// Manage route (delete)
udmodzportal.get('/manage', async (req, res) => {
    const { number, action } = req.query;
    const cleanNumber = number?.replace(/[^0-9]/g, '');
    if (!cleanNumber) return res.status(400).json({ error: 'Number required' });

    if (action === 'delete') {
        const bot = connections.get(cleanNumber);
        if (bot) {
            try { bot.udmodzConnect.logout(); } catch (e) {}
            connections.delete(cleanNumber);
        }
        await deleteSessionFromPastebin(`session_${cleanNumber}`);
        return res.json({ status: 'success', message: `Bot ${cleanNumber} deleted.` });
    }

    res.status(400).json({ error: 'Invalid action' });
});

// Send message route
udmodzportal.get('/send', async (req, res) => {
    const { text, msg, botNumber, receiver } = req.query;
    const messageContent = text || msg;
    const cleanedbotud = botNumber?.replace(/[^0-9]/g, '');
    const cleanedreciud = receiver?.replace(/[^0-9]/g, '');

    if (!messageContent || !cleanedbotud || !cleanedreciud) {
        return res.status(400).json({ error: 'text/msg, botNumber, and receiver required' });
    }

    const receiverJid = cleanedreciud + '@s.whatsapp.net';
    let bot = connections.get(cleanedbotud);

    if (!bot || bot.status !== 'open') {
        const sessionExists = getSessionPasteId(`session_${cleanedbotud}`);
        if (sessionExists) {
            if (bot && bot.udmodzConnect) {
                try { bot.udmodzConnect.end(undefined); } catch (e) {}
            }
            await connectUDmodzBot(cleanedbotud);
            let attempts = 0;
            while (attempts < 10) {
                bot = connections.get(cleanedbotud);
                if (bot && bot.status === 'open') break;
                await delay(2000);
                attempts++;
            }
        }
    }

    if (bot && (bot.status === 'open' || bot.status === 'connected')) {
        try {
            await bot.udmodzConnect.sendMessage(receiverJid, { text: messageContent });
            res.json({ status: 'success', message: 'Message sent' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to send message: ' + err.message });
        }
    } else {
        res.status(404).json({ error: 'Bot is offline or not found.' });
    }
});

// Health check route
udmodzportal.get('/health', async (req, res) => {
    const list = [];
    connections.forEach((val, key) => {
        const pasteId = getSessionPasteId(`session_${key}`);
        list.push({
            number: key,
            status: val.status,
            lastUpdate: new Date(val.lastUpdate).toISOString(),
            sessionId: pasteId || 'N/A',
            rawUrl: pasteId ? `https://pastebin.com/raw/${pasteId}` : 'N/A'
        });
    });

    const sessionMap = loadSessionMap();
    for (const [sessionId, pasteId] of Object.entries(sessionMap)) {
        const num = sessionId.replace('session_', '');
        if (!connections.has(num)) {
            list.push({
                number: num,
                status: 'offline',
                lastUpdate: 'N/A',
                sessionId: pasteId,
                rawUrl: `https://pastebin.com/raw/${pasteId}`
            });
        }
    }

    res.json({ status: 'ok', bots: list });
});

// ============================================
// INIT - Load existing sessions
// ============================================
async function init() {
    console.log('[INIT] Loading existing sessions...');
    const sessionMap = loadSessionMap();

    for (const [sessionId, pasteId] of Object.entries(sessionMap)) {
        const num = sessionId.replace('session_', '');
        console.log(`[INIT] Reconnecting: ${num} (Paste: ${pasteId})`);
        try {
            await connectUDmodzBot(num);
            await delay(2000);
        } catch (e) {
            console.error(`[INIT ERR] ${num}:`, e.message);
        }
    }
}

const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL || process.env.CLEVER_CLOUD;

if (isProduction) {
    udmodzportal.listen(port, async () => {
        console.log(`[SERVER] Running on port ${port}`);
        await init();
    });
} else {
    const https = require('https');
    const selfsigned = require('selfsigned');
    const attrs = [{ name: 'commonName', value: 'localhost' }];
    const pems = selfsigned.generate(attrs, { days: 365 });

    const httpsServer = https.createServer({
        key: pems.private,
        cert: pems.cert
    }, udmodzportal);

    httpsServer.listen(port, async () => {
        console.log(`[SERVER] Running on port ${port}`);
        console.log(`[SERVER] URL: https://localhost:${port}`);
        await init();
    });
}

module.exports = udmodzportal;
