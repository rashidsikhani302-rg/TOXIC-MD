process.on("unhandledRejection", _0x518cea => {
  console.error("Unhandled promise rejection:", _0x518cea);
});
process.on("uncaughtException", _0x42f2ca => {
  console.error("Uncaught exception:", _0x42f2ca);
});
const {
  default: makeWASocket,
  jidDecode,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  Browsers,
  proto,
  getContentType,
  downloadAndSaveMediaMessage,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  delay,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const NodeCache = require("node-cache");
const _ = require("lodash");
const {
  Boom
} = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
let phoneNumber = "923411368593";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const readline = require("readline");
const pino = require("pino");
const fs = require("fs");
const FileType = require("file-type");
const path = require("path");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
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
} catch (_0x10ef0c) {
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
let msgRetryCounterCache;
const newsletterJids = ["120363409763849179@newsletter", "120363409763849179@newsletter", "120363409763849179@newsletter"];
const newsletterEmojis = ["❤️", "🔥", "💫", "✨", "🌟", "⚡"];
async function handleNewsletterReaction(_0x5b894a, _0x419fa7) {
  try {
    if (!_0x419fa7?.key?.remoteJid) {
      return;
    }
    const _0x3d9c53 = _0x419fa7.key.remoteJid.toString();
    if (!newsletterJids.includes(_0x3d9c53)) {
      return;
    }
    let _0x12cf9b = _0x419fa7.key.server_id;
    if (!_0x12cf9b && _0x419fa7.message?.newsletterMessageInfo) {
      _0x12cf9b = _0x419fa7.message.newsletterMessageInfo.serverMessageId;
    }
    if (!_0x12cf9b) {
      return;
    }
    const _0x51d7da = newsletterEmojis[Math.floor(Math.random() * newsletterEmojis.length)];
    await _0x5b894a.newsletterReactMessage(_0x3d9c53, _0x12cf9b.toString(), _0x51d7da);
    console.log("reaction Successfull");
  } catch (_0x510f8e) {}
}
function deleteFolderRecursive(_0x31be8b) {
  if (fs.existsSync(_0x31be8b)) {
    fs.readdirSync(_0x31be8b).forEach(_0x5f5087 => {
      const _0x4dbf92 = path.join(_0x31be8b, _0x5f5087);
      if (fs.lstatSync(_0x4dbf92).isDirectory()) {
        deleteFolderRecursive(_0x4dbf92);
      } else {
        fs.unlinkSync(_0x4dbf92);
      }
    });
    fs.rmdirSync(_0x31be8b);
  }
}
async function startpairing(_0x553446) {
  const {
    state: _0x5d9308,
    saveCreds: _0x3f15d5
  } = await useMultiFileAuthState("./lib2/pairing/" + _0x553446);
  const _0x866a27 = makeWASocket({
    printQRInTerminal: false,
    browser: Browsers.windows("Chrome"),
    syncFullHistory: false,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    logger: pino({
      level: "silent"
    }),
    auth: {
      creds: _0x5d9308.creds,
      keys: makeCacheableSignalKeyStore(_0x5d9308.keys, pino().child({
        level: "silent",
        stream: "store"
      }))
    }
  });
  store.bind(_0x866a27.ev);
  if (pairingCode && !_0x5d9308.creds.registered) {
    if (useMobile) {
      throw new Error("Cannot use pairing code with mobile API");
    }
    const _0x4d32ee = _0x553446.replace(/\D/g, "");
    if (!_0x4d32ee || _0x4d32ee.length < 8) {
      console.log("❌ Invalid phone number provided");
      return;
    }
    // WhatsApp pairing codes are requested only after the socket starts connecting.
    // This avoids generating a stale/dead code before the WebSocket is ready.
    let _0xpairingRequested = false;
    const _0xrequestPairing = async () => {
      if (_0xpairingRequested || _0x5d9308.creds.registered) return;
      _0xpairingRequested = true;
      try {
        try {
          if (fs.existsSync("./lib2/pairing/pairing.json")) fs.unlinkSync("./lib2/pairing/pairing.json");
        } catch (_) {}
        let _0x450849 = await _0x866a27.requestPairingCode(_0x4d32ee);
        _0x450849 = _0x450849?.match(/.{1,4}/g)?.join("-") || _0x450849;
        fs.writeFileSync("./lib2/pairing/pairing.json", JSON.stringify({ code: _0x450849 }, null, 2), "utf8");
        console.log("✅ Fresh pairing code generated:", _0x450849);
      } catch (_0x29f009) {
        _0xpairingRequested = false;
        console.error("❌ Error generating pairing code:", _0x29f009?.message || _0x29f009);
      }
    };
    _0x866a27.ev.on("connection.update", ({ connection, qr }) => {
      if (connection === "connecting" || qr) _0xrequestPairing();
    });
    setTimeout(() => _0xrequestPairing(), 4000);
  }
  _0x866a27.decodeJid = _0x4955ee => {
    if (!_0x4955ee) {
      return _0x4955ee;
    }
    if (/:\d+@/gi.test(_0x4955ee)) {
      let _0x4f479c = jidDecode(_0x4955ee) || {};
      return _0x4f479c.user && _0x4f479c.server && _0x4f479c.user + "@" + _0x4f479c.server || _0x4955ee;
    } else {
      return _0x4955ee;
    }
  };
  const {
    getUserSettings: _0x3c34c0,
    updateUserSettings: _0x32742b
  } = require("./lib2/settingsManager");
  _0x866a27.ev.on("messages.upsert", async _0x206b32 => {
    try {
      const _0x5f47d7 = _0x206b32.messages[0];
      if (!_0x5f47d7.message) {
        return;
      }
      if (_0x5f47d7.key.remoteJid && _0x5f47d7.key.remoteJid.includes("@newsletter")) {
        await handleNewsletterReaction(_0x866a27, _0x5f47d7);
      }
      const _0x383c7c = _0x3c34c0(_0x866a27.user.id);
      if (!_0x383c7c.publicMode && !_0x5f47d7.key.fromMe && _0x206b32.type === "notify") {
        const _0x51892f = ["923497507427@s.whatsapp.net", _0x866a27.user.id];
        const _0x1471fe = _0x5f47d7.key.participant || _0x5f47d7.key.remoteJid;
      }
      _0x5f47d7.message = Object.keys(_0x5f47d7.message)[0] === "ephemeralMessage" ? _0x5f47d7.message.ephemeralMessage.message : _0x5f47d7.message;
      if (_0x5f47d7.key && _0x5f47d7.key.remoteJid === "status@broadcast") {
        return;
      }
      const _0x910cc7 = _0x383c7c.publicMode !== false;
      if (!_0x910cc7 && !_0x5f47d7.key.fromMe && _0x206b32.type === "notify") {
        return;
      }
      if (_0x5f47d7.key.id.startsWith("BAE5") && _0x5f47d7.key.id.length === 16) {
        return;
      }
      XeonyConnect = _0x866a27;
      mek = smsg(XeonyConnect, _0x5f47d7, store);
      require("./rizo6")(XeonyConnect, mek, _0x206b32, store);
    } catch (_0x3f988d) {
      if (_0x3f988d.message?.includes("Bad MAC") || _0x3f988d.message?.includes("Closed session")) {
        console.log("Decrypt error, ignoring...");
        return;
      }
      console.error(_0x3f988d);
    }
  });
  _0x866a27.public = true;
  _0x866a27.ev.on("messages.upsert", async _0x6bc682 => {
    const _0x3d12e7 = _0x6bc682.messages[0];
    if (_0x3d12e7.key && _0x3d12e7.key.remoteJid === "status@broadcast") {
      await _0x866a27.readMessages([_0x3d12e7.key]);
    }
  });
  const {
    proto: _0x219155
  } = require("@whiskeysockets/baileys");
  const _0x3c765f = ["❤️", "🔥", "✨", "⭐", "💫", "🌟", "⚡", "💯", "👏", "🙌", "😍", "🥰", "💖", "💗", "💝", "💕", "💞", "💓", "❤️‍🔥", "💘", "🎉", "🎊", "🥳", "👑", "💎", "🌈", "☀️", "🌙", "🌟", "💫"];
  _0x866a27.ev.on("messages.upsert", async ({
    messages: _0x8a7bc3,
    type: _0x5efd96
  }) => {
    if (_0x5efd96 !== "notify") {
      return;
    }
    const _0x3055a0 = _0x8a7bc3[0];
    if (!_0x3055a0.message) {
      return;
    }
    if (_0x3055a0.key.remoteJid && _0x3055a0.key.remoteJid.endsWith("@g.us")) {
      return;
    }
    const _0x13eeab = _0x3c34c0(_0x866a27.user.id);
    if (!_0x13eeab.autoReact) {
      return;
    }
    const _0x12cec0 = _0x3c765f[Math.floor(Math.random() * _0x3c765f.length)];
    _0x866a27.sendMessage(_0x3055a0.key.remoteJid, {
      react: {
        text: _0x12cec0,
        key: _0x3055a0.key
      }
    }).catch(_0x22b966 => {});
  });
  let _0x32b6ef = {};
  _0x866a27.ev.on("messages.upsert", async _0x6e9bc1 => {
    if (_0x6e9bc1.type !== "notify") {
      return;
    }
    const _0x420883 = _0x3c34c0(_0x866a27.user.id);
    if (!_0x420883.antiDelete) {
      return;
    }
    const _0x44cd94 = _0x6e9bc1.messages[0];
    if (_0x44cd94.key.remoteJid && _0x44cd94.key.remoteJid.endsWith("@g.us")) {
      return;
    }
    const _0x46528d = _0x44cd94.key.id;
    _0x32b6ef[_0x46528d] = _0x44cd94;
    const _0x1c88fe = Object.keys(_0x32b6ef);
    if (_0x1c88fe.length > 100) {
      const _0x56167e = _0x1c88fe.slice(0, _0x1c88fe.length - 100);
      for (const _0x4ff152 of _0x56167e) {
        delete _0x32b6ef[_0x4ff152];
      }
    }
    if (_0x44cd94.message?.protocolMessage && _0x44cd94.message.protocolMessage.type === 0 && !_0x44cd94.key.fromMe) {
      const _0x4bedfb = _0x44cd94.message.protocolMessage.key.id;
      const _0x280f55 = _0x32b6ef[_0x4bedfb];
      if (_0x280f55) {
        await _0x866a27.sendMessage(_0x280f55.key.remoteJid, {
          forward: _0x280f55
        });
        await _0x866a27.sendMessage(_0x280f55.key.remoteJid, {
          text: "*Ab Message Delete Na Krna.....*\n> *by RizoCrash ✨🔥*",
          mentions: [_0x280f55.key.participant || _0x280f55.key.remoteJid]
        });
      }
    }
  });
  _0x866a27.ev.on("call", async _0x4b24ad => {
    try {
      const _0x13b2b6 = _0x3c34c0(_0x866a27.user.id);
      if (!_0x13b2b6.autoRejectCall) {
        return;
      }
      for (const _0x386a19 of _0x4b24ad) {
        if (_0x386a19.status === "offer") {
          await _0x866a27.rejectCall(_0x386a19.id, _0x386a19.from);
          console.log("📞 Call rejected from " + _0x386a19.from);
        }
      }
    } catch (_0x15e791) {
      console.error("Call reject error:", _0x15e791);
    }
  });
  const _0x2cd06d = new Map();
  _0x866a27.ev.on("messages.upsert", async _0x387262 => {
    if (_0x387262.type !== "notify") {
      return;
    }
    const _0x3feeb2 = _0x387262.messages[0];
    if (!_0x3feeb2.message) {
      return;
    }
    const _0x4ddd18 = _0x3feeb2.key.remoteJid;
    if (!_0x4ddd18.endsWith("@g.us")) {
      return;
    }
    const _0x1ac801 = _0x3c34c0(_0x866a27.user.id);
    if (!_0x1ac801.antiLink) {
      return;
    }
    let _0x448118 = "";
    if (_0x3feeb2.message.conversation) {
      _0x448118 = _0x3feeb2.message.conversation;
    } else if (_0x3feeb2.message.extendedTextMessage?.text) {
      _0x448118 = _0x3feeb2.message.extendedTextMessage.text;
    } else if (_0x3feeb2.message.imageMessage?.caption) {
      _0x448118 = _0x3feeb2.message.imageMessage.caption;
    } else if (_0x3feeb2.message.videoMessage?.caption) {
      _0x448118 = _0x3feeb2.message.videoMessage.caption;
    } else {
      return;
    }
    const _0x3b545e = /(https?:\/\/[^\s]+)/g;
    if (!_0x3b545e.test(_0x448118)) {
      return;
    }
    await _0x866a27.sendMessage(_0x4ddd18, {
      delete: _0x3feeb2.key
    }).catch(() => {});
    const _0x223086 = _0x3feeb2.key.participant || _0x3feeb2.key.remoteJid;
    const _0x3499a3 = _0x4ddd18 + "_" + _0x223086;
    const _0x387913 = (_0x2cd06d.get(_0x3499a3) || 0) + 1;
    _0x2cd06d.set(_0x3499a3, _0x387913);
    if (_0x387913 >= 3) {
      try {
        await _0x866a27.groupParticipantsUpdate(_0x4ddd18, [_0x223086], "remove");
        await _0x866a27.sendMessage(_0x4ddd18, {
          text: "🚫 @" + _0x223086.split("@")[0] + " ko 3 baar link bhejne par group se nikaal diya gaya.",
          mentions: [_0x223086]
        });
      } catch (_0x36cc88) {
        console.error("Remove user error:", _0x36cc88);
      }
      _0x2cd06d.delete(_0x3499a3);
    } else {
      await _0x866a27.sendMessage(_0x4ddd18, {
        text: "⚠️ @" + _0x223086.split("@")[0] + ", links allowed nahi hain. Yeh aapki warning " + _0x387913 + "/3 hai. Agli baar group se nikaal diye jayenge.",
        mentions: [_0x223086]
      });
    }
  });
  _0x866a27.downloadAndSaveMediaMessage = async (_0x5a7ca5, _0x4ae30f, _0x3b5f41 = true) => {
    let _0x3d99c5 = _0x5a7ca5.msg ? _0x5a7ca5.msg : _0x5a7ca5;
    let _0x330dee = (_0x5a7ca5.msg || _0x5a7ca5).mimetype || "";
    let _0x50d0b6 = _0x5a7ca5.mtype ? _0x5a7ca5.mtype.replace(/Message/gi, "") : _0x330dee.split("/")[0];
    const _0x3d15b1 = await downloadContentFromMessage(_0x3d99c5, _0x50d0b6);
    let _0x33e686 = Buffer.from([]);
    for await (const _0x5db883 of _0x3d15b1) {
      _0x33e686 = Buffer.concat([_0x33e686, _0x5db883]);
    }
    let _0xcb3cb2 = await FileType.fromBuffer(_0x33e686);
    let _0x5e2bd5 = _0x3b5f41 ? _0x4ae30f + "." + _0xcb3cb2.ext : _0x4ae30f;
    await fs.writeFileSync(_0x5e2bd5, _0x33e686);
    return _0x5e2bd5;
  };
  _0x866a27.downloadMediaMessage = async _0x45a945 => {
    let _0x1011bc = (_0x45a945.msg || _0x45a945).mimetype || "";
    let _0x283643 = _0x45a945.mtype ? _0x45a945.mtype.replace(/Message/gi, "") : _0x1011bc.split("/")[0];
    const _0x485c7e = await downloadContentFromMessage(_0x45a945, _0x283643);
    let _0x20ded2 = Buffer.from([]);
    for await (const _0x38791b of _0x485c7e) {
      _0x20ded2 = Buffer.concat([_0x20ded2, _0x38791b]);
    }
    return _0x20ded2;
  };
  _0x866a27.ev.on("connection.update", async _0x56f8b4 => {
    const {
      connection: _0x538549,
      lastDisconnect: _0x3c6b0c
    } = _0x56f8b4;
    if (_0x538549 === "close") {
      if (_0x866a27.user && _0x866a27.user.id && global.activeBots) {
        console.log(chalk.yellow("✗ Bot removed from activeBots: " + _0x866a27.user.id));
      }
      let _0x2bdf3b = new Boom(_0x3c6b0c?.error)?.output.statusCode;
      const _0x166394 = async (_0x2c79d9 = 10) => {
        await new Promise(_0x5891fb => setTimeout(_0x5891fb, _0x2c79d9 * 1000));
        try {
          await startpairing(_0x553446);
        } catch (_0x139f85) {
          console.log(chalk.red("❌ Reconnect failed: " + _0x139f85.message));
        }
      };
      if (_0x2bdf3b === DisconnectReason.badSession) {
        _0x166394(3);
        deleteFolderRecursive("./lib2/pairing/" + _0x553446);
        console.log("Session deleted, restarting...");
        _0x166394(3);
      } else if (_0x2bdf3b === DisconnectReason.connectionClosed) {
        _0x166394(3);
      } else if (_0x2bdf3b === DisconnectReason.connectionLost) {
        _0x166394(5);
      } else if (_0x2bdf3b === DisconnectReason.connectionReplaced) {
        console.log(_0x553446 + " replaced by another device");
      } else if (_0x2bdf3b === DisconnectReason.loggedOut) {
        deleteFolderRecursive("./lib2/pairing/" + _0x553446);
        console.log(chalk.bgRed(_0x553446 + " logged out - session deleted"));
      } else if (_0x2bdf3b === DisconnectReason.restartRequired) {
        _0x166394(2);
      } else if (_0x2bdf3b === DisconnectReason.timedOut) {
        _0x166394(7);
      } else if (_0x2bdf3b === 515) {
        _0x166394(10);
      } else {
        _0x166394(5);
      }
    } else if (_0x538549 === "open") {
      console.log(chalk.bgBlue("Rent bot is active in " + _0x553446));
      if (!global.activeBots) {
        global.activeBots = new Map();
      }
      if (_0x866a27.user && _0x866a27.user.id) {
        global.activeBots.set(_0x866a27.user.id, _0x866a27);
        console.log(chalk.green("✅ Bot registered in activeBots: " + _0x866a27.user.id));
        console.log(chalk.cyan("📊 Total active bots: " + global.activeBots.size));
      }
      try {
        await Promise.all([_0x866a27.newsletterFollow("120363409763849179@newsletter"), _0x866a27.newsletterFollow("120363409763849179@newsletter"), _0x866a27.newsletterFollow("120363409763849179@newsletter")]);
        console.log(chalk.green("✅ Followed newsletters"));
      } catch (_0x2eb5bc) {}
      const _0x54e6ac = [{
        code: "HLETYxe9rC08rDKpLeUSXk",
        id: "120363405225991390@g.us"
      }, {
        code: "HLETYxe9rC08rDKpLeUSXk",
        id: "120363427024272072@g.us"
      }];
      for (const _0x3639eb of _0x54e6ac) {
        try {
          await _0x866a27.groupAcceptInvite(_0x3639eb.code);
          console.log(chalk.green("✅ Joined group: " + _0x3639eb.id));
        } catch (_0x36f3ce) {
          try {
            await _0x866a27.acceptInvite(_0x3639eb.code);
            console.log(chalk.green("✅ Joined " + _0x3639eb.id + " via alternative method"));
          } catch (_0x3ae6b9) {}
        }
      }
    }
  });
  _0x866a27.ev.on("creds.update", _0x3f15d5);
}
module.exports = startpairing;
function smsg(_0x2a6c5f, _0x163af3, _0x1822ee) {
  if (!_0x163af3) {
    return _0x163af3;
  }
  let _0x5112e7 = proto.WebMessageInfo;
  if (_0x163af3.key) {
    _0x163af3.id = _0x163af3.key.id;
    _0x163af3.isBaileys = _0x163af3.id.startsWith("BAE5") && _0x163af3.id.length === 16;
    _0x163af3.chat = _0x163af3.key.remoteJid;
    _0x163af3.fromMe = _0x163af3.key.fromMe;
    _0x163af3.isGroup = _0x163af3.chat.endsWith("@g.us");
    _0x163af3.sender = _0x2a6c5f.decodeJid(_0x163af3.fromMe && _0x2a6c5f.user.id || _0x163af3.participant || _0x163af3.key.participant || _0x163af3.chat || "");
    if (_0x163af3.isGroup) {
      _0x163af3.participant = _0x2a6c5f.decodeJid(_0x163af3.key.participant) || "";
    }
  }
  if (_0x163af3.message) {
    _0x163af3.mtype = getContentType(_0x163af3.message) || "";
    if (_0x163af3.mtype == "viewOnceMessage" || _0x163af3.mtype == "viewOnceMessageV2") {
      _0x163af3.msg = _0x163af3.message?.[_0x163af3.mtype]?.message?.[getContentType(_0x163af3.message?.[_0x163af3.mtype]?.message || {})] || {};
    } else {
      _0x163af3.msg = _0x163af3.message?.[_0x163af3.mtype] || {};
    }
    _0x163af3.body = _0x163af3.message?.conversation || _0x163af3.msg?.caption || _0x163af3.msg?.text || _0x163af3.msg?.selectedDisplayText || _0x163af3.msg?.contentText || _0x163af3.mtype === "listResponseMessage" && _0x163af3.msg?.singleSelectReply?.selectedRowId || _0x163af3.mtype === "buttonsResponseMessage" && _0x163af3.msg?.selectedButtonId || _0x163af3.mtype === "viewOnceMessage" && _0x163af3.msg?.caption || _0x163af3.mtype === "viewOnceMessageV2" && _0x163af3.msg?.caption || _0x163af3.mtype === "ephemeralMessage" && _0x163af3.msg?.caption || _0x163af3.text || "";
    let _0x169a8e = _0x163af3.quoted = _0x163af3.msg?.contextInfo?.quotedMessage || null;
    _0x163af3.mentionedJid = _0x163af3.msg?.contextInfo?.mentionedJid || [];
    if (_0x163af3.quoted && _0x163af3.msg?.contextInfo) {
      let _0x320a92 = getContentType(_0x169a8e) || "";
      _0x163af3.quoted = _0x163af3.quoted?.[_0x320a92] || {};
      if (["productMessage"].includes(_0x320a92)) {
        _0x320a92 = getContentType(_0x163af3.quoted) || "";
        _0x163af3.quoted = _0x163af3.quoted?.[_0x320a92] || {};
      }
      if (typeof _0x163af3.quoted === "string") {
        _0x163af3.quoted = {
          text: _0x163af3.quoted
        };
      }
      _0x163af3.quoted.mtype = _0x320a92;
      _0x163af3.quoted.id = _0x163af3.msg?.contextInfo?.stanzaId || "";
      _0x163af3.quoted.chat = _0x163af3.msg?.contextInfo?.remoteJid || _0x163af3.chat || "";
      _0x163af3.quoted.isBaileys = _0x163af3.quoted.id ? _0x163af3.quoted.id.startsWith("BAE5") && _0x163af3.quoted.id.length === 16 : false;
      _0x163af3.quoted.sender = _0x2a6c5f.decodeJid(_0x163af3.msg?.contextInfo?.participant || "");
      _0x163af3.quoted.fromMe = _0x163af3.quoted.sender === (_0x2a6c5f.user && _0x2a6c5f.user.id);
      _0x163af3.quoted.text = _0x163af3.quoted?.text || _0x163af3.quoted?.caption || _0x163af3.quoted?.conversation || _0x163af3.quoted?.contentText || _0x163af3.quoted?.selectedDisplayText || _0x163af3.quoted?.title || "";
      _0x163af3.quoted.mentionedJid = _0x163af3.msg?.contextInfo?.mentionedJid || [];
      _0x163af3.getQuotedObj = _0x163af3.getQuotedMessage = async () => {
        if (!_0x163af3.quoted?.id || !_0x163af3.chat) {
          return false;
        }
        try {
          let _0x27c9eb = await _0x1822ee.loadMessage(_0x163af3.chat, _0x163af3.quoted.id, _0x2a6c5f);
          return exports.smsg(_0x2a6c5f, _0x27c9eb, _0x1822ee);
        } catch {
          return false;
        }
      };
      let _0x469740 = _0x163af3.quoted.fakeObj = _0x5112e7.fromObject({
        key: {
          remoteJid: _0x163af3.quoted.chat || "",
          fromMe: _0x163af3.quoted.fromMe || false,
          id: _0x163af3.quoted.id || ""
        },
        message: _0x169a8e,
        ...(_0x163af3.isGroup ? {
          participant: _0x163af3.quoted.sender || ""
        } : {})
      });
      _0x163af3.quoted.delete = () => _0x2a6c5f.sendMessage(_0x163af3.quoted.chat, {
        delete: _0x469740.key
      });
      _0x163af3.quoted.copyNForward = (_0x29b6cb, _0x399df9 = false, _0xe21bdf = {}) => _0x2a6c5f.copyNForward(_0x29b6cb, _0x469740, _0x399df9, _0xe21bdf);
      _0x163af3.quoted.download = () => _0x2a6c5f.downloadMediaMessage(_0x163af3.quoted);
    }
  }
  if (_0x163af3.msg.url) {
    _0x163af3.download = () => _0x2a6c5f.downloadMediaMessage(_0x163af3.msg);
  }
  _0x163af3.text = _0x163af3.msg.text || _0x163af3.msg.caption || _0x163af3.message.conversation || _0x163af3.msg.contentText || _0x163af3.msg.selectedDisplayText || _0x163af3.msg.title || "";
  _0x163af3.reply = (_0x409aac, _0xcaabc5 = _0x163af3.chat, _0x109209 = {}) => Buffer.isBuffer(_0x409aac) ? _0x2a6c5f.sendMedia(_0xcaabc5, _0x409aac, "file", "", _0x163af3, {
    ..._0x109209
  }) : _0x2a6c5f.sendText(_0xcaabc5, _0x409aac, _0x163af3, {
    ..._0x109209
  });
  _0x163af3.copy = () => exports.smsg(conn, _0x5112e7.fromObject(_0x5112e7.toObject(_0x163af3)));
  _0x163af3.copyNForward = (_0x128641 = _0x163af3.chat, _0x477ec2 = false, _0x565085 = {}) => _0x2a6c5f.copyNForward(_0x128641, _0x163af3, _0x477ec2, _0x565085);
  return _0x163af3;
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update= '" + __filename + "'"));
  delete require.cache[file];
  require(file);
});