require("./config.js");
const fs = require("fs");
const os = require("os");
const speed = require("performance-now");
const axios = require("axios");
const chalk = require("chalk");
const http = require("http");
const url = require("url");
const {
  Client
} = require("ssh2");
const {
  getUserSettings,
  updateUserSettings
} = require("./lib2/settingsManager");
global.activeConnections = new Map();
global.connectionCleanups = new Map();
global.cache = {
  pairingDir: null,
  lastChecked: 0,
  sessionCount: 0
};
async function autoReconnectExistingSessions() {
  const _0x2de4ec = "./lib2/pairing/";
  if (!fs.existsSync(_0x2de4ec)) {
    console.log(chalk.yellow("📁 No pairing directory found"));
    return;
  }
  try {
    const _0x582c91 = Date.now();
    if (!global.cache.pairingDir || _0x582c91 - global.cache.lastChecked > 30000) {
      const _0x12050e = fs.readdirSync(_0x2de4ec).filter(_0x17ebac => {
        const _0x13308c = _0x2de4ec + _0x17ebac;
        try {
          return fs.statSync(_0x13308c).isDirectory() && _0x17ebac.endsWith("@s.whatsapp.net");
        } catch (_0x1e89d4) {
          return false;
        }
      });
      global.cache.pairingDir = _0x12050e;
      global.cache.lastChecked = _0x582c91;
      global.cache.sessionCount = _0x12050e.length;
    }
    const _0x297b44 = global.cache.pairingDir;
    if (_0x297b44.length === 0) {
      console.log(chalk.yellow("ℹ️  No existing sessions found"));
      return;
    }
    console.log(chalk.blue("🔍 Found " + _0x297b44.length + " existing sessions"));
    let _0x4a4adc;
    try {
      delete require.cache[require.resolve("./rentbot.js")];
      _0x4a4adc = require("./rentbot.js");
      console.log(chalk.green("✅ Rentbot module loaded"));
    } catch (_0x2fce9a) {
      console.log(chalk.red("❌ Failed to load rentbot.js:"), _0x2fce9a.message);
      return;
    }
    let _0x1a7ba6;
    if (_0x4a4adc.startpairing) {
      _0x1a7ba6 = _0x4a4adc.startpairing;
      console.log(chalk.green("✅ Using startpairing function"));
    } else if (typeof _0x4a4adc === "function") {
      _0x1a7ba6 = _0x4a4adc;
      console.log(chalk.green("✅ Using default export"));
    } else {
      console.log(chalk.red("❌ No valid export found"));
      return;
    }
    let _0x2410f2 = 0;
    let _0x34d0f6 = 0;
    for (const _0x167de0 of _0x297b44) {
      try {
        const _0x4a28a7 = _0x167de0;
        if (global.activeConnections.has(_0x4a28a7)) {
          console.log(chalk.yellow("⚠️  " + _0x4a28a7 + ": Already connected, skipping"));
          _0x2410f2++;
          continue;
        }
        console.log(chalk.cyan("▶️  Auto-connecting: " + _0x4a28a7));
        await _0x1a7ba6(_0x4a28a7);
        _0x2410f2++;
        console.log(chalk.green("✅ " + _0x4a28a7 + ": Session reconnected"));
        await new Promise(_0x23e72a => setTimeout(_0x23e72a, 3000));
      } catch (_0x24adb5) {
        console.log(chalk.red("❌ " + _0x167de0 + ": " + _0x24adb5.message));
        _0x34d0f6++;
        const _0x5017ab = _0x167de0;
        if (global.activeConnections.has(_0x5017ab)) {
          global.activeConnections.delete(_0x5017ab);
        }
      }
    }
    console.log(chalk.green.bold("🎉 " + _0x2410f2 + "/" + _0x297b44.length + " sessions auto-reconnected!"));
    if (_0x34d0f6 > 0) {
      console.log(chalk.red("❌ " + _0x34d0f6 + " failed reconnections"));
    }
  } catch (_0x3585a4) {
    console.log(chalk.red("🔥 Auto-reconnect error:"), _0x3585a4.message);
  }
}
global.api = (_0x49b069, _0x357225 = "/", _0x2e3263 = {}, _0x13b7da) => (_0x49b069 in global.APIs ? global.APIs[_0x49b069] : _0x49b069) + _0x357225 + (_0x2e3263 || _0x13b7da ? "?" + new URLSearchParams(Object.entries({
  ..._0x2e3263,
  ...(_0x13b7da ? {
    [_0x13b7da]: global.APIKeys[_0x49b069 in global.APIs ? global.APIs[_0x49b069] : _0x49b069]
  } : {})
})) : "");
const WEB_PORT = global.PORT;
const server = http.createServer((_0x395629, _0x38514c) => {
  const _0x5968b3 = url.parse(_0x395629.url, true);
  const _0x564800 = _0x5968b3.pathname;
  // Local menu/category artwork for WhatsApp menus and the pairing website.
  if (_0x395629.method === "GET" && (_0x564800 === "/menu.jpg" || _0x564800.startsWith("/assets/"))) {
    const _0xassetName = _0x564800 === "/menu.jpg" ? "menu.jpg" : path.basename(_0x564800);
    const _0xallowedAssets = new Set(["menu.jpg", "main.jpg", "downloader.jpg", "tools.jpg", "logo.jpg", "settings.jpg", "group.jpg", "pairing.jpg"]);
    if (!_0xallowedAssets.has(_0xassetName)) {
      _0x38514c.writeHead(404, { "Content-Type": "text/plain" });
      _0x38514c.end("Asset not found");
      return;
    }
    const _0xassetPath = path.join(__dirname, "assets", _0xassetName);
    if (!fs.existsSync(_0xassetPath)) {
      _0x38514c.writeHead(404, { "Content-Type": "text/plain" });
      _0x38514c.end("Menu image not found");
      return;
    }
    const _0xassetData = fs.readFileSync(_0xassetPath);
    _0x38514c.writeHead(200, {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600"
    });
    _0x38514c.end(_0xassetData);
    return;
  }
  if (_0x564800 === "/" && _0x395629.method === "GET") {
    let _0x49ef48 = global.cache.sessionCount || 0;
    try {
      if (fs.existsSync("./lib2/pairing")) {
        const _0x221890 = fs.readdirSync("./lib2/pairing", {
          withFileTypes: true
        });
        _0x49ef48 = _0x221890.filter(_0x431fe1 => _0x431fe1.isDirectory()).length;
        global.cache.sessionCount = _0x49ef48;
      }
    } catch (_0x58b7d9) {}
    const _0x3e105d = Math.floor(process.uptime());
    const _0x41f210 = Math.floor(_0x3e105d / 604800);
    const _0xbb5877 = Math.floor(_0x3e105d % 604800 / 86400);
    const _0x43062b = Math.floor(_0x3e105d % 86400 / 3600);
    const _0x55c3e7 = Math.floor(_0x3e105d % 3600 / 60);
    const _0x1b422d = _0x3e105d % 60;
    let _0x1fe5fa = "";
    if (_0x41f210 > 0) {
      _0x1fe5fa += _0x41f210 + "w ";
    }
    if (_0xbb5877 > 0) {
      _0x1fe5fa += _0xbb5877 + "d ";
    }
    if (_0x43062b > 0) {
      _0x1fe5fa += _0x43062b + "h ";
    }
    if (_0x55c3e7 > 0) {
      _0x1fe5fa += _0x55c3e7 + "m ";
    }
    _0x1fe5fa += _0x1b422d + "s";
    const _0x592c13 = os.totalmem();
    const _0x4f7815 = os.freemem();
    const _0x5e53e3 = _0x592c13 - _0x4f7815;
    const _0x460b94 = (_0x5e53e3 / _0x592c13 * 100).toFixed(1);
    fs.readFile("./hehe.html", "utf8", (_0x22aecb, _0x5a3a4f) => {
      if (_0x22aecb) {
        console.log(chalk.red("❌ Error loading hehe.html:"), _0x22aecb.message);
        _0x38514c.writeHead(500);
        _0x38514c.end("Error loading page");
        return;
      }
      let _0x51ce4f = _0x5a3a4f.replace(/id="connectedUsers">0<\/div>/, "id=\"connectedUsers\">" + _0x49ef48 + "</div>").replace(/id="uptime">0s<\/div>/, "id=\"uptime\">" + _0x1fe5fa + "</div>").replace(/id="ram">0%<\/div>/, "id=\"ram\">" + _0x460b94 + "%</div>");
      _0x38514c.writeHead(200, {
        "Content-Type": "text/html"
      });
      _0x38514c.end(_0x51ce4f);
    });
    return;
  }
  if (_0x564800 === "/api/connect" && _0x395629.method === "POST") {
    let _0x37c561 = "";
    let _0xbodyTooLarge = false;
    _0x395629.on("data", _0x5e15d6 => {
      _0x37c561 += _0x5e15d6.toString();
      if (_0x37c561.length > 10000) _0xbodyTooLarge = true;
    });
    _0x395629.on("end", async () => {
      const sendJSON = (_0xpayload) => {
        _0x38514c.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
        _0x38514c.end(JSON.stringify(_0xpayload));
      };
      try {
        if (_0xbodyTooLarge) return sendJSON({ success: false, message: "Invalid request" });
        const { number: _0x149e62 } = JSON.parse(_0x37c561 || "{}");
        const _0x317449 = _0x149e62 ? String(_0x149e62).replace(/\D/g, "") : "";
        if (!_0x317449 || _0x317449.length < 8 || _0x317449.length > 15) {
          return sendJSON({ success: false, message: "Enter a valid number with country code, for example 923001234567." });
        }

        const _0xcodeFile = path.join(__dirname, "lib2", "pairing", "pairing.json");
        // Remove only the temporary code file. The old 3-second wait was shorter
        // than rentbot's own pairing request delay, so the page returned "Error"
        // before WhatsApp had a chance to create a code.
        try { if (fs.existsSync(_0xcodeFile)) fs.unlinkSync(_0xcodeFile); } catch (_) {}

        let _0xstartError = null;
        try {
          const _0x4f581f = require("./rentbot.js");
          const _0x3428ee = _0x4f581f.startpairing || _0x4f581f;
          await _0x3428ee(_0x317449 + "@s.whatsapp.net");
        } catch (_0x4224ff) {
          _0xstartError = _0x4224ff;
          console.error("Bot pairing start error:", _0x4224ff.message);
        }
        if (_0xstartError) {
          return sendJSON({ success: false, message: "Could not start pairing: " + (_0xstartError.message || "unknown error") });
        }

        // Wait up to 30 seconds for the socket to connect and WhatsApp to return
        // the pairing code. Polling avoids a fixed, unreliable sleep.
        const _0xdeadline = Date.now() + 30000;
        let _0x3fe66a = "";
        while (Date.now() < _0xdeadline) {
          try {
            if (fs.existsSync(_0xcodeFile)) {
              const _0x2da5ab = JSON.parse(fs.readFileSync(_0xcodeFile, "utf-8"));
              const _0xcandidate = String(_0x2da5ab.code || "").trim();
              if (_0xcandidate && _0xcandidate !== "Error" && _0xcandidate !== "No code") {
                _0x3fe66a = _0xcandidate;
                break;
              }
            }
          } catch (_) {}
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        let _0x36b214 = global.cache.sessionCount || 0;
        try {
          if (fs.existsSync("./lib2/pairing")) {
            const _0x39b406 = fs.readdirSync("./lib2/pairing", { withFileTypes: true });
            _0x36b214 = _0x39b406.filter(_0x24c113 => _0x24c113.isDirectory()).length;
            global.cache.sessionCount = _0x36b214;
          }
        } catch (_) {}

        if (!_0x3fe66a) {
          return sendJSON({
            success: false,
            message: "Pairing code was not received yet. Make sure the server can connect to WhatsApp, then try again."
          });
        }

        return sendJSON({
          success: true,
          code: _0x3fe66a,
          number: _0x317449,
          connectedUsers: _0x36b214
        });
      } catch (_0x49e7aa) {
        console.error("Pairing API error:", _0x49e7aa.message);
        return sendJSON({ success: false, message: "Error: " + _0x49e7aa.message });
      }
    });
    return;
  }
  if (_0x564800 === "/api/status" && _0x395629.method === "GET") {
    try {
      const _0x2d714d = os.totalmem();
      const _0x117482 = os.freemem();
      const _0x41772e = _0x2d714d - _0x117482;
      let _0x39d38f = global.cache.sessionCount || 0;
      if (fs.existsSync("./lib2/pairing")) {
        const _0x815afd = fs.readdirSync("./lib2/pairing", {
          withFileTypes: true
        });
        _0x39d38f = _0x815afd.filter(_0x2fb0e2 => _0x2fb0e2.isDirectory()).length;
        global.cache.sessionCount = _0x39d38f;
      }
      _0x38514c.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });
      _0x38514c.end(JSON.stringify({
        success: true,
        uptime: Math.floor(process.uptime() / 60) + "m",
        uptimeSeconds: Math.floor(process.uptime()),
        ramUsage: (_0x41772e / _0x2d714d * 100).toFixed(1) + "%",
        connectedUsers: _0x39d38f
      }));
    } catch (_0x3e319b) {
      _0x38514c.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });
      _0x38514c.end(JSON.stringify({
        success: false,
        message: _0x3e319b.message
      }));
    }
    return;
  }
  _0x38514c.writeHead(404, {
    "Content-Type": "text/plain"
  });
  _0x38514c.end("404");
});
server.listen(WEB_PORT, () => {
  console.log(chalk.green("🌐 Web: http://(Hostname.PORT:" + WEB_PORT));
  setTimeout(() => {
    console.log(chalk.yellow("🔄 Starting auto-reconnect for existing sessions..."));
    autoReconnectExistingSessions();
  }, 5000);
});
function monitorMemory() {
  const _0x27d32e = process.memoryUsage();
  const _0x52b555 = Math.round(_0x27d32e.heapUsed / 1024 / 1024);
  const _0x4b3e23 = Math.round(_0x27d32e.heapTotal / 1024 / 1024);
  const _0x41afce = Math.round(_0x52b555 / _0x4b3e23 * 100);
  if (_0x41afce > 80) {
    console.log(chalk.red("⚠️  HIGH MEMORY USAGE: " + _0x41afce + "% (" + _0x52b555 + "MB/" + _0x4b3e23 + "MB)"));
    console.log(chalk.yellow("🔄 Cleaning up memory..."));
    for (const [_0x3b58b3, _0x407b3c] of global.connectionCleanups.entries()) {
      try {
        _0x407b3c();
      } catch (_0x47b3b3) {
        console.error("Cleanup error:", _0x47b3b3.message);
      }
    }
    if (global.gc) {
      global.gc();
      console.log(chalk.green("🧹 Garbage collection forced"));
    }
  } else if (_0x41afce > 60) {
    console.log(chalk.yellow("📊 Memory: " + _0x41afce + "% (" + _0x52b555 + "MB/" + _0x4b3e23 + "MB)"));
  }
}
setInterval(monitorMemory, 300000);
process.on("SIGINT", () => {
  console.log(chalk.yellow("🛑 Shutting down gracefully..."));
  for (const [_0x2d4726, _0x4ec63c] of global.connectionCleanups.entries()) {
    try {
      _0x4ec63c();
    } catch (_0x2b9909) {
      console.error("Shutdown cleanup error:", _0x2b9909.message);
    }
  }
  process.exit(0);
});
process.on("SIGTERM", () => {
  console.log(chalk.yellow("🛑 Received SIGTERM, shutting down..."));
  for (const [_0x2118a0, _0x4a34ec] of global.connectionCleanups.entries()) {
    try {
      _0x4a34ec();
    } catch (_0x493702) {
      console.error("Shutdown cleanup error:", _0x493702.message);
    }
  }
  process.exit(0);
});
const {
  default: makeWASocket,
  DisconnectReason,
  makeInMemoryStore,
  jidDecode,
  Browsers,
  proto,
  getContentType,
  useMultiFileAuthState,
  downloadContentFromMessage,
  jidNormalizedUser
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const readline = require("readline");
const _ = require("lodash");
const FileType = require("file-type");
const path = require("path");
const yargs = require("yargs/yargs");
const PhoneNumber = require("awesome-phonenumber");
const simple2 = require("./lib2/oke.js");
const {
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetch,
  sleep,
  reSize
} = require("./lib2/myfunc");
var low;
try {
  low = require("lowdb");
} catch (_0x4228ea) {
  low = require("./lib2/lowdb");
}
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./lib2/mongoDB");
let store;
try {
  const {
    makeInMemoryStore: makeStore
  } = require("@whiskeysockets/baileys");
  store = makeStore({
    logger: pino().child({
      level: "silent",
      stream: "store"
    })
  });
} catch (_0x4f3f3f) {
  store = {
    bind: () => {},
    loadMessage: async () => null,
    contacts: {},
    messages: {},
    chats: {},
    groupMetadata: async () => ({}),
    logger: {
      child: () => ({})
    }
  };
}
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(/https?:\/\//.test(opts.db || "") ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new mongoDB(opts.db) : new JSONFile("./src/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x23dd23 => setInterval(function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x23dd23(global.db.data == null ? global.loadDatabase() : global.db.data);
      } else {
        null;
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    game: {},
    database: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
const appenTextMessage = async (_0x224523, _0x166216, _0x509a9a, _0x94ef96) => {
  let _0x2a91b9 = await generateWAMessage(_0x224523.key.remoteJid, {
    text: _0x509a9a
  }, {
    quoted: _0x224523.quoted
  });
  _0x2a91b9.key.fromMe = areJidsSameUser(_0x224523.sender, _0x166216.user.id);
  _0x2a91b9.key.id = _0x224523.key.id;
  _0x2a91b9.pushName = _0x224523.pushName;
  if (_0x224523.isGroup) {
    _0x2a91b9.participant = _0x224523.sender;
  }
  let _0x326e44 = {
    ..._0x94ef96,
    messages: [proto.WebMessageInfo.fromObject(_0x2a91b9)],
    type: "append"
  };
  return _0x166216.ev.emit("messages.upsert", _0x326e44);
};
const question = _0x2cbdbd => {
  const _0x5a36ec = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x498142 => {
    _0x5a36ec.question(_0x2cbdbd, _0x498142);
  });
};
async function RizoStart() {
  const {
    state: _0x5a35d8,
    saveCreds: _0x2306f1
  } = await useMultiFileAuthState("session");
  const _0x10b180 = simple2({
    logger: pino({
      level: "silent"
    }),
    printQRInTerminal: false,
    auth: _0x5a35d8,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    getMessage: async _0x2106dd => {
      const _0x5b0b2e = jidNormalizedUser(_0x2106dd.remoteJid);
      const _0x5a4bf5 = await store.loadMessage(_0x5b0b2e, _0x2106dd.id);
      return _0x5a4bf5?.message || "";
    },
    shouldSyncHistoryMessage: _0x978729 => {
      console.log("[32mLoading Chat [" + _0x978729.progress + "%][39m");
      return !!_0x978729.syncType;
    }
  }, store);
  if (!_0x10b180.authState.creds.registered) {
    const _0x16b212 = await question("Enter your phone number with country code without space and plus sign :\n");
    let _0x32ad1a = await _0x10b180.requestPairingCode(_0x16b212);
    _0x32ad1a = _0x32ad1a?.match(/.{1,4}/g)?.join("-") || _0x32ad1a;
    console.log("Code :", _0x32ad1a);
  }
  store.bind(_0x10b180.ev);
  _0x10b180.ev.on("messages.upsert", async _0x45b4eb => {
    try {
      mek = _0x45b4eb.messages[0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x10b180.public && !mek.key.fromMe && _0x45b4eb.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) {
        return;
      }
      m = smsg(_0x10b180, mek, store);
      require("./rizo6.js")(_0x10b180, m, _0x45b4eb, store);
    } catch (_0x34e0e6) {
      console.log(_0x34e0e6);
    }
  });
  _0x10b180.ev.on("group-participants.update", async _0xgpUpdate => {
    try {
      const _0xgpChat = _0xgpUpdate.id;
      const _0xgpSettings = getUserSettings(_0xgpChat) || {};
      if (!_0xgpSettings.welcome) {
        return;
      }
      const _0xgpMeta = await _0x10b180.groupMetadata(_0xgpChat);
      for (const _0xgpJid of _0xgpUpdate.participants) {
        const _0xgpNum = _0xgpJid.split("@")[0];
        if (_0xgpUpdate.action === "add") {
          const _0xgpText = _0xgpSettings.welcomeText ? _0xgpSettings.welcomeText.replace("@user", "@" + _0xgpNum).replace("@group", _0xgpMeta.subject) : "👋 Welcome @" + _0xgpNum + " to *" + _0xgpMeta.subject + "*!";
          await _0x10b180.sendMessage(_0xgpChat, {
            text: _0xgpText,
            mentions: [_0xgpJid]
          });
        } else if (_0xgpUpdate.action === "remove") {
          const _0xgpByeText = _0xgpSettings.goodbyeText ? _0xgpSettings.goodbyeText.replace("@user", "@" + _0xgpNum).replace("@group", _0xgpMeta.subject) : "👋 @" + _0xgpNum + " has left *" + _0xgpMeta.subject + "*.";
          await _0x10b180.sendMessage(_0xgpChat, {
            text: _0xgpByeText,
            mentions: [_0xgpJid]
          });
        }
      }
    } catch (_0xgpErr) {
      console.error("Welcome/Goodbye error:", _0xgpErr);
    }
  });
  _0x10b180.decodeJid = _0x491463 => {
    if (!_0x491463) {
      return _0x491463;
    }
    if (/:\d+@/gi.test(_0x491463)) {
      let _0x28715d = jidDecode(_0x491463) || {};
      return _0x28715d.user && _0x28715d.server && _0x28715d.user + "@" + _0x28715d.server || _0x491463;
    } else {
      return _0x491463;
    }
  };
  _0x10b180.getName = (_0x18d43a, _0x5f4070 = false) => {
    id = _0x10b180.decodeJid(_0x18d43a);
    _0x5f4070 = _0x10b180.withoutContact || _0x5f4070;
    let _0x37a9c8;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x357a58 => {
        _0x37a9c8 = store.contacts[id] || {};
        if (!_0x37a9c8.name && !_0x37a9c8.subject) {
          _0x37a9c8 = _0x10b180.groupMetadata(id) || {};
        }
        _0x357a58(_0x37a9c8.name || _0x37a9c8.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    } else {
      _0x37a9c8 = id === "0@s.whatsapp.net" ? {
        id: id,
        name: "WhatsApp"
      } : id === _0x10b180.decodeJid(_0x10b180.user.id) ? _0x10b180.user : store.contacts[id] || {};
    }
    return (_0x5f4070 ? "" : _0x37a9c8.name) || _0x37a9c8.subject || _0x37a9c8.verifiedName || PhoneNumber("+" + _0x18d43a.replace("@s.whatsapp.net", "")).getNumber("international");
  };
  _0x10b180.public = true;
  _0x10b180.serializeM = _0x39c0c1 => smsg(_0x10b180, _0x39c0c1, store);
  _0x10b180.ev.on("connection.update", async _0x2f8faf => {
    const {
      connection: _0x2d8866,
      lastDisconnect: _0x30ea9a
    } = _0x2f8faf;
    if (_0x2d8866 === "close") {
      const _0x32d7da = new Boom(_0x30ea9a?.error)?.output?.statusCode;
      switch (_0x32d7da) {
        case DisconnectReason.badSession:
          console.error("Bad session file. Deleting session and reconnecting...");
          fs.rmSync("./session", {
            recursive: true,
            force: true
          });
          RizoStart();
          break;
        case DisconnectReason.connectionClosed:
        case DisconnectReason.connectionLost:
        case DisconnectReason.timedOut:
          console.warn("Connection closed. Reconnecting...");
          RizoStart();
          break;
        case DisconnectReason.loggedOut:
          console.error("Logged out. Delete session and re-run the script.");
          fs.rmSync("./session", {
            recursive: true,
            force: true
          });
          break;
        case DisconnectReason.restartRequired:
          console.log("Restart required. Reconnecting...");
          RizoStart();
          break;
        default:
          console.error("Unknown disconnect reason: " + _0x32d7da + ". Reconnecting...");
          RizoStart();
          break;
      }
    } else if (_0x2d8866 === "open") {
      console.log(chalk.blue.bold("Connected to " + _0x10b180.user.id.split(":")[0]));
      await _0x10b180.sendMessage("923497507427@s.whatsapp.net", {
        text: "TOXIC MD-V3 IS CONNECTED 😎"
      });
      await sleep(1999);
      fs.readdir("./lib2/pairing/", {
        withFileTypes: true
      }, async (_0xb1bd4d, _0xe84826) => {
        for (let _0x17676d = 0; _0x17676d < _0xe84826.length; _0x17676d++) {
          const _0x36afc8 = _0xe84826[_0x17676d];
          if (_0x36afc8.isDirectory()) {
            console.log(_0x36afc8.name);
            const _0x136852 = require("./rentbot.js");
            await _0x136852(_0x36afc8.name);
            await sleep(200);
          }
        }
      });
    }
  });
  _0x10b180.ev.on("creds.update", _0x2306f1);
  async function _0x4d677c(_0x581904) {
    if (store) {
      const _0xad9b7 = await store.loadMessage(_0x581904.remoteJid, _0x581904.id);
      return _0xad9b7;
    }
    return {
      conversation: "Rizo Bug Bot"
    };
  }
  _0x10b180.ev.on("messages.update", async _0x10c2fc => {
    for (const {
      key: _0x25390d,
      update: _0x290611
    } of _0x10c2fc) {
      if (_0x290611.pollUpdates && _0x25390d.fromMe) {
        const _0x18c98e = await _0x4d677c(_0x25390d);
        if (_0x18c98e) {
          let _0x4f7d05 = await getAggregateVotesInPollMessage({
            message: _0x18c98e?.message,
            pollUpdates: _0x290611.pollUpdates
          });
          let _0x5a9d8a = _0x4f7d05.filter(_0x4145d3 => _0x4145d3.voters.length !== 0)[0]?.name;
          console.log(_0x5a9d8a);
          await appenTextMessage(m, _0x10b180, _0x5a9d8a, _0x18c98e);
          await _0x10b180.sendMessage(m.cht, {
            delete: _0x25390d
          });
        } else {
          return false;
        }
        return;
      }
    }
  });
  _0x10b180.sendText = (_0x2be284, _0x47f6f1, _0x4b8096 = "", _0x16cc56) => _0x10b180.sendMessage(_0x2be284, {
    text: _0x47f6f1,
    ..._0x16cc56
  }, {
    quoted: _0x4b8096
  });
  _0x10b180.downloadAndSaveMediaMessage = async (_0x26901d, _0xec018f, _0x1f04a8 = true) => {
    let _0x5d7015 = _0x26901d.msg ? _0x26901d.msg : _0x26901d;
    let _0x44af08 = (_0x26901d.msg || _0x26901d).mimetype || "";
    let _0x4a022e = _0x26901d.mtype ? _0x26901d.mtype.replace(/Message/gi, "") : _0x44af08.split("/")[0];
    const _0x75693c = await downloadContentFromMessage(_0x5d7015, _0x4a022e);
    let _0x436cc3 = Buffer.from([]);
    for await (const _0x47c3af of _0x75693c) {
      _0x436cc3 = Buffer.concat([_0x436cc3, _0x47c3af]);
    }
    let _0x10f9e2 = await FileType.fromBuffer(_0x436cc3);
    let _0x5e0c79 = _0x1f04a8 ? "./sticker/" + _0xec018f + "." + _0x10f9e2.ext : "./sticker/" + _0xec018f;
    await fs.writeFileSync(_0x5e0c79, _0x436cc3);
    return _0x5e0c79;
  };
  _0x10b180.getFile = async (_0x4dc345, _0x1ffbbc) => {
    let _0x371c3c;
    let _0x5f492b = Buffer.isBuffer(_0x4dc345) ? _0x4dc345 : /^data:.*?\/.*?;base64,/i.test(_0x4dc345) ? Buffer.from(_0x4dc345.split`,`[1], "base64") : /^https?:\/\//.test(_0x4dc345) ? await (_0x371c3c = await getBuffer(_0x4dc345)) : fs.existsSync(_0x4dc345) ? (filename = _0x4dc345, fs.readFileSync(_0x4dc345)) : typeof _0x4dc345 === "string" ? _0x4dc345 : Buffer.alloc(0);
    let _0x5e638b = (await FileType.fromBuffer(_0x5f492b)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    filename = path.join(__filename, "../src/" + new Date() * 1 + "." + _0x5e638b.ext);
    if (_0x5f492b && _0x1ffbbc) {
      fs.promises.writeFile(filename, _0x5f492b);
    }
    return {
      res: _0x371c3c,
      filename: filename,
      size: await getSizeMedia(_0x5f492b),
      ..._0x5e638b,
      data: _0x5f492b
    };
  };
  _0x10b180.sendFile = async (_0x20a50c, _0xf0f1ae, _0x4dc5af = "", _0x2d41ec = "", _0x5d86f0, _0x3b778b = false, _0x1d4a9b = {}) => {
    let _0x429c5d = await _0x10b180.getFile(_0xf0f1ae, true);
    let {
      res: _0x115417,
      data: _0x5e0d64,
      filename: _0x35a8fd
    } = _0x429c5d;
    if (_0x115417 && _0x115417.status !== 200 || _0x5e0d64.length <= 65536) {
      try {
        throw {
          json: JSON.parse(_0x5e0d64.toString())
        };
      } catch (_0x1969f7) {
        if (_0x1969f7.json) {
          throw _0x1969f7.json;
        }
      }
    }
    let _0x64ab7e = {
      filename: _0x4dc5af
    };
    if (_0x5d86f0) {
      _0x64ab7e.quoted = _0x5d86f0;
    }
    if (!_0x429c5d) {
      _0x1d4a9b.asDocument = true;
    }
    let _0x2d465b = "";
    let _0x581891 = _0x429c5d.mime;
    let _0x388139;
    if (/webp/.test(_0x429c5d.mime) || /image/.test(_0x429c5d.mime) && _0x1d4a9b.asSticker) {
      _0x2d465b = "sticker";
    } else if (/image/.test(_0x429c5d.mime) || /webp/.test(_0x429c5d.mime) && _0x1d4a9b.asImage) {
      _0x2d465b = "image";
    } else if (/video/.test(_0x429c5d.mime)) {
      _0x2d465b = "video";
    } else if (/audio/.test(_0x429c5d.mime)) {
      _0x388139 = await (_0x3b778b ? toPTT : toAudio)(_0x5e0d64, _0x429c5d.ext);
      _0x5e0d64 = _0x388139.data;
      _0x35a8fd = _0x388139.filename;
      _0x2d465b = "audio";
      _0x581891 = "audio/ogg; codecs=opus";
    } else {
      _0x2d465b = "document";
    }
    if (_0x1d4a9b.asDocument) {
      _0x2d465b = "document";
    }
    delete _0x1d4a9b.asSticker;
    delete _0x1d4a9b.asLocation;
    delete _0x1d4a9b.asVideo;
    delete _0x1d4a9b.asDocument;
    delete _0x1d4a9b.asImage;
    let _0x361aee = {
      ..._0x1d4a9b,
      caption: _0x2d41ec,
      ptt: _0x3b778b,
      [_0x2d465b]: {
        url: _0x35a8fd
      },
      mimetype: _0x581891
    };
    let _0x1634de;
    try {
      _0x1634de = await _0x10b180.sendMessage(_0x20a50c, _0x361aee, {
        ..._0x64ab7e,
        ..._0x1d4a9b
      });
    } catch (_0x355e61) {
      _0x1634de = null;
    } finally {
      if (!_0x1634de) {
        _0x1634de = await _0x10b180.sendMessage(_0x20a50c, {
          ..._0x361aee,
          [_0x2d465b]: _0x5e0d64
        }, {
          ..._0x64ab7e,
          ..._0x1d4a9b
        });
      }
      _0x5e0d64 = null;
      return _0x1634de;
    }
  };
  _0x10b180.sendTextWithMentions = async (_0x4309db, _0x21d10d, _0x4c9f33, _0x20a79c = {}) => _0x10b180.sendMessage(_0x4309db, {
    text: _0x21d10d,
    mentions: [..._0x21d10d.matchAll(/@(\d{0,16})/g)].map(_0x147293 => _0x147293[1] + "@s.whatsapp.net"),
    ..._0x20a79c
  }, {
    quoted: _0x4c9f33
  });
  _0x10b180.downloadMediaMessage = async _0x2f3fd2 => {
    let _0x8fc518 = (_0x2f3fd2.msg || _0x2f3fd2).mimetype || "";
    let _0x59683a = _0x2f3fd2.mtype ? _0x2f3fd2.mtype.replace(/Message/gi, "") : _0x8fc518.split("/")[0];
    const _0x446bf6 = await downloadContentFromMessage(_0x2f3fd2, _0x59683a);
    let _0x47d084 = Buffer.from([]);
    for await (const _0x6c8051 of _0x446bf6) {
      _0x47d084 = Buffer.concat([_0x47d084, _0x6c8051]);
    }
    return _0x47d084;
  };
  return _0x10b180;
}
function smsg(_0x1ec825, _0x29f2fb, _0x2f9f11) {
  if (!_0x29f2fb) {
    return _0x29f2fb;
  }
  let _0x1b81fd = proto.WebMessageInfo;
  if (_0x29f2fb.key) {
    _0x29f2fb.id = _0x29f2fb.key.id;
    _0x29f2fb.isBaileys = _0x29f2fb.id.startsWith("BAE5") && _0x29f2fb.id.length === 16;
    _0x29f2fb.chat = _0x29f2fb.key.remoteJid;
    _0x29f2fb.fromMe = _0x29f2fb.key.fromMe;
    _0x29f2fb.isGroup = _0x29f2fb.chat.endsWith("@g.us");
    _0x29f2fb.sender = _0x1ec825.decodeJid(_0x29f2fb.fromMe && _0x1ec825.user.id || _0x29f2fb.participant || _0x29f2fb.key.participant || _0x29f2fb.chat || "");
    if (_0x29f2fb.isGroup) {
      _0x29f2fb.participant = _0x1ec825.decodeJid(_0x29f2fb.key.participant) || "";
    }
  }
  if (_0x29f2fb.message) {
    _0x29f2fb.mtype = getContentType(_0x29f2fb.message);
    _0x29f2fb.msg = _0x29f2fb.mtype == "viewOnceMessage" ? _0x29f2fb.message[_0x29f2fb.mtype].message[getContentType(_0x29f2fb.message[_0x29f2fb.mtype].message)] : _0x29f2fb.message[_0x29f2fb.mtype];
    _0x29f2fb.body = _0x29f2fb.message.conversation || _0x29f2fb.msg.caption || _0x29f2fb.msg.text || _0x29f2fb.mtype == "listResponseMessage" && _0x29f2fb.msg.singleSelectReply.selectedRowId || _0x29f2fb.mtype == "buttonsResponseMessage" && _0x29f2fb.msg.selectedButtonId || _0x29f2fb.mtype == "viewOnceMessage" && _0x29f2fb.msg.caption || _0x29f2fb.text;
    let _0xc17c71 = _0x29f2fb.quoted = _0x29f2fb.msg.contextInfo ? _0x29f2fb.msg.contextInfo.quotedMessage : null;
    _0x29f2fb.mentionedJid = _0x29f2fb.msg.contextInfo ? _0x29f2fb.msg.contextInfo.mentionedJid : [];
    if (_0x29f2fb.quoted) {
      let _0x35ce61 = getContentType(_0xc17c71);
      _0x29f2fb.quoted = _0x29f2fb.quoted[_0x35ce61];
      if (["productMessage"].includes(_0x35ce61)) {
        _0x35ce61 = getContentType(_0x29f2fb.quoted);
        _0x29f2fb.quoted = _0x29f2fb.quoted[_0x35ce61];
      }
      if (typeof _0x29f2fb.quoted === "string") {
        _0x29f2fb.quoted = {
          text: _0x29f2fb.quoted
        };
      }
      _0x29f2fb.quoted.mtype = _0x35ce61;
      _0x29f2fb.quoted.id = _0x29f2fb.msg.contextInfo.stanzaId;
      _0x29f2fb.quoted.chat = _0x29f2fb.msg.contextInfo.remoteJid || _0x29f2fb.chat;
      _0x29f2fb.quoted.isBaileys = _0x29f2fb.quoted.id ? _0x29f2fb.quoted.id.startsWith("BAE5") && _0x29f2fb.quoted.id.length === 16 : false;
      _0x29f2fb.quoted.sender = _0x1ec825.decodeJid(_0x29f2fb.msg.contextInfo.participant);
      _0x29f2fb.quoted.fromMe = _0x29f2fb.quoted.sender === _0x1ec825.decodeJid(_0x1ec825.user.id);
      _0x29f2fb.quoted.text = _0x29f2fb.quoted.text || _0x29f2fb.quoted.caption || _0x29f2fb.quoted.conversation || _0x29f2fb.quoted.contentText || _0x29f2fb.quoted.selectedDisplayText || _0x29f2fb.quoted.title || "";
      _0x29f2fb.quoted.mentionedJid = _0x29f2fb.msg.contextInfo ? _0x29f2fb.msg.contextInfo.mentionedJid : [];
      _0x29f2fb.getQuotedObj = _0x29f2fb.getQuotedMessage = async () => {
        if (!_0x29f2fb.quoted.id) {
          return false;
        }
        let _0x426b15 = await _0x2f9f11.loadMessage(_0x29f2fb.chat, _0x29f2fb.quoted.id, conn);
        return exports.smsg(conn, _0x426b15, _0x2f9f11);
      };
      let _0x3d0372 = _0x29f2fb.quoted.fakeObj = _0x1b81fd.fromObject({
        key: {
          remoteJid: _0x29f2fb.quoted.chat,
          fromMe: _0x29f2fb.quoted.fromMe,
          id: _0x29f2fb.quoted.id
        },
        message: _0xc17c71,
        ...(_0x29f2fb.isGroup ? {
          participant: _0x29f2fb.quoted.sender
        } : {})
      });
      _0x29f2fb.quoted.delete = () => _0x1ec825.sendMessage(_0x29f2fb.quoted.chat, {
        delete: _0x3d0372.key
      });
      _0x29f2fb.quoted.copyNForward = (_0x2a8ffc, _0x5c79db = false, _0x240e9b = {}) => _0x1ec825.copyNForward(_0x2a8ffc, _0x3d0372, _0x5c79db, _0x240e9b);
      _0x29f2fb.quoted.download = () => _0x1ec825.downloadMediaMessage(_0x29f2fb.quoted);
    }
  }
  if (_0x29f2fb.msg.url) {
    _0x29f2fb.download = () => _0x1ec825.downloadMediaMessage(_0x29f2fb.msg);
  }
  _0x29f2fb.text = _0x29f2fb.msg.text || _0x29f2fb.msg.caption || _0x29f2fb.message.conversation || _0x29f2fb.msg.contentText || _0x29f2fb.msg.selectedDisplayText || _0x29f2fb.msg.title || "";
  _0x29f2fb.reply = (_0x3b6f17, _0x1fc5f8 = _0x29f2fb.chat, _0x311bd8 = {}) => Buffer.isBuffer(_0x3b6f17) ? _0x1ec825.sendMedia(_0x1fc5f8, _0x3b6f17, "file", "", _0x29f2fb, {
    ..._0x311bd8
  }) : _0x1ec825.sendText(_0x1fc5f8, _0x3b6f17, _0x29f2fb, {
    ..._0x311bd8
  });
  _0x29f2fb.copy = () => exports.smsg(conn, _0x1b81fd.fromObject(_0x1b81fd.toObject(_0x29f2fb)));
  _0x29f2fb.copyNForward = (_0x392858 = _0x29f2fb.chat, _0x12bce1 = false, _0x58aef4 = {}) => _0x1ec825.copyNForward(_0x392858, _0x29f2fb, _0x12bce1, _0x58aef4);
  return _0x29f2fb;
}
(async () => {
  try {
    console.log("Connecting to WhatsApp...");
    await RizoStart();
  } catch (_0x11bf91) {
    console.error("Error:", _0x11bf91.message);
    process.exit(1);
  }
})();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});