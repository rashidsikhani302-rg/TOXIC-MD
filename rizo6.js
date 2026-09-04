process.on("uncaughtException", _0x125a86 => {
  console.error("❌ UNCAUGHT EXCEPTION:", _0x125a86);
  console.error("Stack:", _0x125a86.stack);
});
process.on("unhandledRejection", (_0x339167, _0x52f773) => {
  console.error("❌ UNHANDLED REJECTION:", _0x339167);
  console.error("Promise:", _0x52f773);
});
require("./config");
const {
  updateUserSettings,
  getUserSettings
} = require("./lib2/settingsManager");
const CDN_LIST = ["cdn401.savetube.vip"];
const DB_URL = "https://raw.githubusercontent.com/5usama/usama-mini-database/refs/heads/main/mini-users.json";
const ADMINS = ["923497507427", "923497507427", "923497507427", "923497507427"];
global.admins = ["923497507427", "923497507427", "923497507427", "923497507427"];
let approvedCache = {
  numbers: [],
  expiry: {},
  lastUpdate: 0
};
const COVENANT_API_KEY = "cov_live_9acff1d46458a723b31c78dd3b5ceeb4061340ab64251b44";
const COVENANT_API_URL = "https://api.covenant.sbs/api/downloader/youtube";
const FGSI_API_URL = "https://fgsi.dpdns.org/api/downloader/youtube/v2";
const FGSI_API_KEY = "fgsiapi-7ebf57b-6d";
const sleep = _0xfd5d44 => new Promise(_0x564300 => setTimeout(_0x564300, _0xfd5d44));
const isUrl = _0x23b7fb => {
  try {
    new URL(_0x23b7fb);
    return true;
  } catch {
    return false;
  }
};
const ANU_KEY = Buffer.from("C5D58EF67A7584E4A29F6C35BBC4EB12", "hex");
const MAINTENANCE_MODE = false;
const MAINTENANCE_TIME = "30 minutes or 1 day";
const ADMIN_NUMBERS = ["923497507427"];
const BAN_ADMINS = ["923239601585", "923164811599", "923010967206", "923271636436"];
const BLACKLIST_FILE = "./lib2/blacklist.json";
const {
  generateMessageIDV2,
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const cheerio = require("cheerio");
const {
  exec
} = require("child_process");
const Jimp = require("jimp");
const chalk = require("chalk");
const moment = require("moment-timezone");
const yts = require("yt-search");
const didyoumean = require("didyoumean");
const similarity = require("similarity");
const pino = require("pino");
const logger = pino({
  level: "debug"
});
const crypto = require("crypto");
const path = require("path");
const express = require("express");
const BodyForm = require("form-data");
const qs = require("qs");
const https = require("https");
class ytmp3tax {
  constructor() {
    this.cdnBaseUrl = "https://media.savetube.me/api/random-cdn";
    this.encryptionKey = "C5D58EF67A6C35BB";
    this.headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/json",
      Origin: "https://ytmp3.tax",
      Referer: "https://ytmp3.tax/"
    };
  }
  decryptData(_0xfb3747, _0x2dff20) {
    try {
      const _0x3d696e = Buffer.from(_0x2dff20, "hex");
      const _0x2a52ed = Buffer.from(_0xfb3747, "base64");
      const _0x3d1df3 = crypto.createDecipheriv("aes-128-cbc", Buffer.from(this.encryptionKey, "utf8"), _0x3d696e);
      let _0x223349 = _0x3d1df3.update(_0x2a52ed);
      _0x223349 = Buffer.concat([_0x223349, _0x3d1df3.final()]);
      return JSON.parse(_0x223349.toString("utf8"));
    } catch (_0x93df84) {
      console.error("Decryption error:", _0x93df84);
      return null;
    }
  }
  async makeRequest(_0x2a8247, _0x20b84c = "GET", _0x43d18a = null) {
    return new Promise((_0x4235d5, _0x8d2aac) => {
      const _0x181858 = new URL(_0x2a8247);
      const _0x5b1d6d = {
        hostname: _0x181858.hostname,
        path: _0x181858.pathname + _0x181858.search,
        method: _0x20b84c,
        headers: this.headers,
        timeout: 30000
      };
      const _0x13b550 = https.request(_0x5b1d6d, _0x337f01 => {
        let _0x5aae93 = "";
        _0x337f01.on("data", _0x1ad332 => _0x5aae93 += _0x1ad332);
        _0x337f01.on("end", () => {
          try {
            const _0x4d32c0 = JSON.parse(_0x5aae93);
            _0x4235d5(_0x4d32c0);
          } catch (_0x7550ad) {
            _0x8d2aac(new Error("JSON parse error: " + _0x7550ad.message));
          }
        });
      });
      _0x13b550.on("error", _0x8d2aac);
      _0x13b550.on("timeout", () => {
        _0x13b550.destroy();
        _0x8d2aac(new Error("Request timeout"));
      });
      if (_0x43d18a) {
        _0x13b550.write(JSON.stringify(_0x43d18a));
      }
      _0x13b550.end();
    });
  }
  async getRandomCDN() {
    try {
      const _0x8365ab = await this.makeRequest(this.cdnBaseUrl);
      if (_0x8365ab && _0x8365ab.cdn) {
        const _0x103208 = _0x8365ab.cdn;
        if (_0x103208.startsWith("http")) {
          return _0x103208;
        } else {
          return "https://" + _0x103208;
        }
      }
      return "https://media.savetube.me";
    } catch (_0x1ff7a6) {
      console.log("CDN fetch failed, using fallback");
      return "https://media.savetube.me";
    }
  }
  async download(_0x453322, _0x4896dc = {}) {
    const {
      downloadType = "audio",
      quality = "128"
    } = _0x4896dc;
    try {
      const _0x45e661 = await this.getRandomCDN();
      console.log("CDN:", _0x45e661);
      const _0x3e04cf = _0x45e661 + "/v2/info";
      const _0x372319 = await this.makeRequest(_0x3e04cf, "POST", {
        url: _0x453322
      });
      if (!_0x372319 || !_0x372319.status) {
        throw new Error("Failed to get video info");
      }
      let _0x2c3532;
      if (_0x372319.data && _0x372319.iv) {
        _0x2c3532 = this.decryptData(_0x372319.data, _0x372319.iv);
      } else {
        _0x2c3532 = _0x372319;
      }
      if (!_0x2c3532 || !_0x2c3532.key) {
        throw new Error("No video data or key found");
      }
      const _0x26a2d8 = _0x45e661 + "/download";
      const _0x46d305 = await this.makeRequest(_0x26a2d8, "POST", {
        downloadType: downloadType,
        quality: quality,
        key: _0x2c3532.key
      });
      if (!_0x46d305 || !_0x46d305.status) {
        throw new Error("Failed to get download link");
      }
      let _0x59d197 = _0x46d305.data;
      if (_0x46d305.data && _0x46d305.iv) {
        _0x59d197 = this.decryptData(_0x46d305.data, _0x46d305.iv);
      }
      return {
        success: true,
        downloadUrl: _0x59d197.downloadUrl || _0x59d197.url,
        title: _0x2c3532.title,
        duration: _0x2c3532.duration,
        thumbnail: _0x2c3532.thumbnail
      };
    } catch (_0x226eef) {
      console.error("Download error:", _0x226eef);
      return {
        success: false,
        error: _0x226eef.message
      };
    }
  }
}
let myfunc = null;
try {
  myfunc = require("./lib2/myfunc");
} catch (_0x46d815) {
  console.error("⚠️ myfunc not found, using fallbacks");
  myfunc = {
    smsg: _0x3164e3 => _0x3164e3,
    fetchJson: async _0x50da98 => {
      const _0x126a85 = await axios.get(_0x50da98);
      return _0x126a85.data;
    },
    getBuffer: async _0x27522a => {
      const _0x297590 = await axios.get(_0x27522a, {
        responseType: "arraybuffer"
      });
      return _0x297590.data;
    },
    fetchBuffer: async _0x3bb2ef => {
      const _0x557b2b = await axios.get(_0x3bb2ef, {
        responseType: "arraybuffer"
      });
      return _0x557b2b.data;
    },
    getGroupAdmins: _0x5bc55d => _0x5bc55d.filter(_0x185e2c => _0x185e2c.admin).map(_0x16c11d => _0x16c11d.id),
    TelegraPh: async _0x1c1281 => {
      return null;
    },
    isUrl: _0x8a817c => /^https?:\/\//.test(_0x8a817c),
    hitungmundur: _0x4b0218 => {
      return "0 days";
    },
    sleep: _0x459e19 => new Promise(_0x5365c6 => setTimeout(_0x5365c6, _0x459e19)),
    clockString: _0x32c038 => {
      const _0x4431d4 = Math.floor(_0x32c038 / 86400);
      return _0x4431d4 + "d";
    },
    checkBandwidth: () => "N/A",
    runtime: _0x3781ed => {
      const _0x2405cf = Math.floor(_0x3781ed / 86400);
      return _0x2405cf + "d";
    },
    tanggal: () => new Date().toLocaleDateString(),
    getRandom: _0x47010a => "" + Date.now() + _0x47010a
  };
}
const {
  smsg,
  fetchJson,
  getBuffer,
  fetchBuffer,
  getGroupAdmins,
  TelegraPh: TelegraPhFunc,
  isUrl: isUrlFunc,
  hitungmundur,
  sleep: sleepFunc,
  clockString,
  checkBandwidth,
  runtime,
  tanggal,
  getRandom
} = myfunc;
module.exports = async (_0x106db2, _0x11be99) => {
  try {
    const _0x4e95a8 = _0x11be99.message?.ephemeralMessage?.message || _0x11be99.message?.viewOnceMessage?.message || _0x11be99.message?.editedMessage?.message || _0x11be99.message;
    let _0x5be814 = (_0x11be99.mtype === "conversation" ? _0x4e95a8.conversation : _0x11be99.mtype === "extendedTextMessage" ? _0x4e95a8.extendedTextMessage.text : _0x11be99.mtype === "imageMessage" ? _0x4e95a8.imageMessage.caption : _0x11be99.mtype === "videoMessage" ? _0x4e95a8.videoMessage.caption : _0x11be99.mtype === "documentMessage" ? _0x4e95a8.documentMessage.caption || _0x4e95a8.documentMessage.fileName : _0x11be99.mtype === "buttonsResponseMessage" ? _0x4e95a8.buttonsResponseMessage.selectedButtonId : _0x11be99.mtype === "templateButtonReplyMessage" ? _0x4e95a8.templateButtonReplyMessage.selectedId : _0x11be99.mtype === "listResponseMessage" ? _0x4e95a8.listResponseMessage.singleSelectReply.selectedRowId : _0x11be99.mtype === "interactiveResponseMessage" ? (() => {
      try {
        return JSON.parse(_0x4e95a8.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson)?.id;
      } catch {
        return null;
      }
    })() : null) || "";
    _0x11be99.body = _0x5be814.trim();
    _0x11be99.isButton = ["buttonsResponseMessage", "templateButtonReplyMessage", "interactiveResponseMessage", "listResponseMessage"].includes(_0x11be99.mtype);
    if (_0x11be99.isButton && _0x5be814) {
      try {
        const _0x5b0396 = _0x5be814.toLowerCase().trim();
        _0x11be99.command = _0x5b0396;
        _0x11be99.text = _0x5b0396;
        _0x11be99.body = _0x5b0396;
        _0x11be99.isCmd = true;
        console.log("🔘 Button → Command: " + _0x5b0396);
      } catch (_0x73a4d1) {
        console.error("Button error:", _0x73a4d1);
      }
    }
    let _0x1a9ad3 = _0x11be99.command || "";
    let _0xcf6911 = [];
    let _0x74101d = q = "";
    if (!_0x1a9ad3) {
      var _0x1f3727 = typeof _0x11be99.text == "string" ? _0x11be99.text : "";
      var _0x3c8088 = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x1f3727) ? _0x1f3727.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix;
      const _0x46506a = _0x1f3727.startsWith(_0x3c8088);
      _0x1a9ad3 = _0x46506a ? _0x1f3727.slice(_0x3c8088.length).trim().split(" ").shift().toLowerCase() : "";
      _0xcf6911 = _0x1f3727.trim().split(/ +/).slice(1);
      _0x74101d = q = _0xcf6911.join(" ");
    } else {
      _0x74101d = q = "";
      _0xcf6911 = [];
    }
    const _0x6d77b5 = _0x11be99.key.fromMe ? _0x106db2.user.id.split(":")[0] + "@s.whatsapp.net" || _0x106db2.user.id : _0x11be99.key.participant || _0x11be99.key.remoteJid;
    const _0x3f6b18 = await _0x106db2.decodeJid(_0x106db2.user.id);
    const _0x483920 = _0x6d77b5.split("@")[0];
    const _0x2ea648 = _0x11be99.pushName || "" + _0x483920;
    const _0x26a152 = _0x3f6b18.includes(_0x483920);
    const _0x567057 = _0x11be99.quoted ? _0x11be99.quoted : _0x11be99;
    const _0x4e0b15 = (_0x567057.msg || _0x567057).mimetype || "";
    const _0x532c91 = _0x567057.msg || _0x567057;
    const _0x5b1b57 = async _0x1e01fa => {
      try {
        const _0x4afd6a = {
          text: _0x1e01fa,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: global.Developer + " 💫💗",
              newsletterJid: "120363409763849179@newsletter",
              serverMessageId: Math.floor(Math.random() * 1000000)
            }
          }
        };
        return await _0x106db2.sendMessage(_0x11be99.chat, _0x4afd6a, {
          quoted: _0x11be99
        });
      } catch (_0x589a5e) {
        console.error("Reply error:", _0x589a5e);
        try {
          return await _0x106db2.sendMessage(_0x11be99.chat, {
            text: _0x1e01fa
          }, {
            quoted: _0x11be99
          });
        } catch (_0x343ce0) {
          console.error("Fallback reply also failed:", _0x343ce0);
          return null;
        }
      }
    };
    const _0x1bf22f = async _0x12b2ab => {
      try {
        await _0x106db2.sendMessage(_0x11be99.chat, {
          react: {
            text: _0x12b2ab,
            key: _0x11be99.key
          }
        });
      } catch (_0x2623fa) {
        console.error("Reaction error:", _0x2623fa);
      }
    };
    const _0x51ab89 = async _0x33b9c0 => {
      try {
        const _0x31b5c6 = _0x11be99.sender.split("@")[0];
        const _0x2b556b = ADMIN_NUMBERS.includes(_0x31b5c6);
        if (MAINTENANCE_MODE && !_0x2b556b) {
          const _0x114bd4 = "\n╭─「 🚧 𝗨𝗡𝗗𝗘𝗥 𝗠𝗔𝗜𝗡𝗧𝗘𝗡𝗔𝗡𝗖𝗘 🚧 」─╮\n│\n│ ❌ *Command Temporarily Disabled*\n│\n│ Command: ." + _0x33b9c0 + "\n│ User: @" + _0x31b5c6 + "\n│ Time: " + new Date().toLocaleString() + "\n│\n│ 🐛 *BUG IS UNDER MAINTENANCE*\n│ ⏰ It can take " + MAINTENANCE_TIME + " to complete\n│\n│ 📝 *Developer Note:*\n│ Our team is fixing critical bugs\n│ and improving system stability\n│\n│ ⚠️ Please try again later!\n│\n╰────────────────────╯";
          await _0x5b1b57(_0x114bd4);
          await _0x1bf22f("🚧");
          return true;
        }
        return false;
      } catch (_0xed0d70) {
        console.error("Maintenance check error:", _0xed0d70);
        return false;
      }
    };
    async function _0x54986c() {
      try {
        console.log(chalk.cyan("📡 Fetching approved numbers from database..."));
        const _0x330c09 = await axios.get(DB_URL, {
          timeout: 10000
        });
        const _0x8de8f = _0x330c09.data;
        global.approvedCache.numbers = [];
        global.approvedCache.expiry = {};
        if (Array.isArray(_0x8de8f)) {
          console.log(chalk.green("✅ Database is in array format"));
          _0x8de8f.forEach(_0x1b1a15 => {
            const _0x3d4e0c = String(_0x1b1a15.number || "").trim();
            if (!_0x3d4e0c) {
              return;
            }
            global.approvedCache.numbers.push(_0x3d4e0c);
            if (_0x1b1a15.addDate && _0x1b1a15.days) {
              const _0x1368fe = moment(_0x1b1a15.addDate);
              const _0x3a1669 = parseInt(_0x1b1a15.days) || 0;
              if (_0x1368fe.isValid() && _0x3a1669 > 0) {
                const _0x58b6a7 = _0x1368fe.add(_0x3a1669, "days").toISOString();
                global.approvedCache.expiry[_0x3d4e0c] = _0x58b6a7;
                console.log(chalk.blue("📅 " + _0x3d4e0c + ": Add " + _0x1b1a15.addDate + " + " + _0x3a1669 + " days = " + moment(_0x58b6a7).format("DD/MM/YYYY")));
              } else {
                global.approvedCache.expiry[_0x3d4e0c] = null;
              }
            } else {
              global.approvedCache.expiry[_0x3d4e0c] = null;
            }
          });
        } else {
          console.log(chalk.yellow("⚠️ Database is not in array format"));
          global.approvedCache.numbers = global.admins;
          global.approvedCache.expiry = {};
          global.admins.forEach(_0x13ae98 => {
            global.approvedCache.expiry[_0x13ae98] = null;
          });
        }
        global.approvedCache.lastUpdate = Date.now();
        console.log(chalk.green("✅ Loaded " + global.approvedCache.numbers.length + " approved users"));
      } catch (_0x2a1efb) {
        console.error(chalk.red("❌ Database fetch failed:"), _0x2a1efb.message);
        global.approvedCache.numbers = global.admins;
        global.approvedCache.expiry = {};
        global.admins.forEach(_0x31ccab => {
          global.approvedCache.expiry[_0x31ccab] = null;
        });
        global.approvedCache.lastUpdate = Date.now();
        console.log(chalk.yellow("⚠️ Using fallback admin list"));
      }
    }
    async function _0x46e415(_0x2f140b) {
      try {
        const _0x269c60 = String(_0x2f140b || "").trim();
        if (Date.now() - global.approvedCache.lastUpdate > 60000) {
          await _0x54986c();
        }
        if (!global.approvedCache.numbers.includes(_0x269c60)) {
          return {
            approved: false,
            message: "❌ This number is not in the approved database."
          };
        }
        const _0x812661 = global.approvedCache.expiry[_0x269c60];
        if (_0x812661) {
          const _0x3745a0 = moment(_0x812661);
          const _0x4e422b = moment();
          if (_0x3745a0.isBefore(_0x4e422b)) {
            return {
              approved: false,
              message: "⏰ Subscription expired on " + _0x3745a0.format("DD MMM YYYY")
            };
          }
          const _0x283b5d = _0x3745a0.diff(_0x4e422b, "days");
          return {
            approved: true,
            message: "✅ Premium access (" + _0x283b5d + " days remaining)",
            expiryDate: _0x812661,
            daysLeft: _0x283b5d
          };
        }
        return {
          approved: true,
          message: "✅ Lifetime premium access",
          expiryDate: null
        };
      } catch (_0x46dce4) {
        console.error("Approval check error:", _0x46dce4);
        return {
          approved: false,
          message: "❌ Database error. Please try again."
        };
      }
    }
    function _0x4a7a15(_0x8159e2) {
      try {
        const _0x3b7bf2 = _0x8159e2.split("@")[0];
        return ADMINS.includes(_0x3b7bf2);
      } catch (_0x3c084f) {
        console.error("isAdmin error:", _0x3c084f);
        return false;
      }
    }
    const MENU_IMAGES = ["https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg", "https://i.postimg.cc/REPLACE-2/image2.jpg", "https://i.postimg.cc/REPLACE-3/image3.jpg", "https://i.postimg.cc/REPLACE-4/image4.jpg", "https://i.postimg.cc/REPLACE-5/image5.jpg", "https://i.postimg.cc/REPLACE-6/image6.jpg"];
    async function getMenuThumb() {
      const _0xmiShuffled = [...MENU_IMAGES].sort(() => Math.random() - 0.5);
      for (const _0xmiUrl of _0xmiShuffled) {
        try {
          const _0xmiRes = await axios.get(_0xmiUrl, {
            responseType: "arraybuffer",
            timeout: 8000,
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
              "Referer": "https://postimg.cc/",
              "Accept": "image/*"
            }
          });
          if (_0xmiRes && _0xmiRes.data && _0xmiRes.data.byteLength > 0) {
            return Buffer.from(_0xmiRes.data);
          }
        } catch (_0xmiErr) {
          console.error("Menu thumb fetch failed for " + _0xmiUrl + ": " + _0xmiErr.message);
        }
      }
      console.error("⚠️ All MENU_IMAGES failed — check your links in MENU_IMAGES array.");
      return Buffer.from([]);
    }
    async function _0x5f29d0() {
      try {
        const _0x1e7cc3 = await axios.get(DB_URL + "?t=" + Date.now(), {
          timeout: 15000
        });
        return _0x1e7cc3.data;
      } catch (_0x37e236) {
        console.error("Database fetch error:", _0x37e236);
        return [];
      }
    }
    async function _0x42a624(_0x511cc3, _0x352a7f) {
      try {
        const _0x190674 = process.env.GITHUB_TOKEN || "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";
        const _0xce16b7 = "https://api.github.com/repos/5usama/usama-mini-database/contents/mini-users.json";
        const _0x3c6e76 = await axios.get(_0xce16b7, {
          headers: {
            Authorization: "token " + _0x190674
          }
        });
        const _0x194110 = _0x3c6e76.data.sha;
        await axios.put(_0xce16b7, {
          message: _0x352a7f,
          content: Buffer.from(JSON.stringify(_0x511cc3, null, 2)).toString("base64"),
          sha: _0x194110
        }, {
          headers: {
            Authorization: "token " + _0x190674,
            "Content-Type": "application/json"
          }
        });
        return true;
      } catch (_0xb89f4b) {
        console.error("GitHub update error:", _0xb89f4b);
        throw _0xb89f4b;
      }
    }
    async function _0x57a195(_0x188f4e) {
      try {
        const _0x362d27 = fs.createReadStream(_0x188f4e);
        const _0x287416 = new BodyForm();
        _0x287416.append("fileToUpload", _0x362d27);
        _0x287416.append("reqtype", "fileupload");
        _0x287416.append("userhash", "");
        const _0x40bc15 = await axios.post("https://catbox.moe/user/api.php", _0x287416, {
          headers: {
            ..._0x287416.getHeaders()
          }
        });
        return _0x40bc15.data;
      } catch (_0x305b39) {
        console.error("Catbox Error:", _0x305b39);
        throw new Error("Catbox upload failed");
      }
    }
    async function _0xd0cc4f(_0x3f9843) {
      return new Promise(async (_0x7e26f0, _0x42619f) => {
        if (!fs.existsSync(_0x3f9843)) {
          return _0x42619f(new Error("File not Found"));
        }
        try {
          const _0x207965 = new BodyForm();
          _0x207965.append("file", fs.createReadStream(_0x3f9843));
          const _0x4af512 = await axios({
            url: "https://telegra.ph/upload",
            method: "POST",
            headers: {
              ..._0x207965.getHeaders()
            },
            data: _0x207965
          });
          _0x7e26f0("https://telegra.ph" + _0x4af512.data[0].src);
        } catch (_0x3db8f5) {
          _0x42619f(new Error(String(_0x3db8f5)));
        }
      });
    }
    async function _0x351233(_0xc2f5cc) {
      return new Promise(async (_0x54a27a, _0xe282b4) => {
        try {
          const _0x581ff5 = new BodyForm();
          _0x581ff5.append("files[]", fs.createReadStream(_0xc2f5cc));
          const _0x11c43e = await axios({
            url: "https://uguu.se/upload.php",
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0",
              ..._0x581ff5.getHeaders()
            },
            data: _0x581ff5
          });
          _0x54a27a(_0x11c43e.data.files[0]);
        } catch (_0x4d7523) {
          _0xe282b4(_0x4d7523);
        }
      });
    }
    async function _0x4ad760(_0x1aaa88, _0x2a4974) {
      try {
        let _0x36482c = await axios.get(_0x1aaa88, {
          headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        });
        let _0x377e47 = cheerio.load(_0x36482c.data);
        let _0x28ad84 = _0x377e47("input[name=token]").val();
        let _0x592cfd = _0x377e47("input[name=build_server]").val();
        let _0x428ca2 = _0x377e47("input[name=build_server_id]").val();
        const _0x574d67 = "----WebKitFormBoundary" + Math.random().toString(36).substring(2);
        let _0x2baf23 = ["--" + _0x574d67, "Content-Disposition: form-data; name=\"text[]\"", "", _0x2a4974, "--" + _0x574d67, "Content-Disposition: form-data; name=\"token\"", "", _0x28ad84, "--" + _0x574d67, "Content-Disposition: form-data; name=\"build_server\"", "", _0x592cfd, "--" + _0x574d67, "Content-Disposition: form-data; name=\"build_server_id\"", "", _0x428ca2, "--" + _0x574d67 + "--", ""].join("\r\n");
        let _0x202264 = await axios({
          url: _0x1aaa88,
          method: "POST",
          data: _0x2baf23,
          headers: {
            Accept: "*/*",
            "user-agent": "Mozilla/5.0",
            cookie: _0x36482c.headers["set-cookie"]?.join("; "),
            "Content-Type": "multipart/form-data; boundary=" + _0x574d67
          }
        });
        let _0x25293e = cheerio.load(_0x202264.data);
        let _0x371c0a = JSON.parse(_0x25293e("input[name=form_value_input]").val());
        _0x371c0a["text[]"] = _0x371c0a.text;
        delete _0x371c0a.text;
        let {
          data: _0x3bb45d
        } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(_0x371c0a), {
          headers: {
            "user-agent": "Mozilla/5.0",
            cookie: _0x36482c.headers["set-cookie"].join("; ")
          }
        });
        return _0x592cfd + _0x3bb45d.image;
      } catch (_0x33a36e) {
        console.error("Ephoto Error:", _0x33a36e);
        throw new Error("Ephoto360 generation failed");
      }
    }
    async function _0x34ac46(_0x1d6309) {
      try {
        const _0x47331f = "https://igram.website/content.php?url=" + encodeURIComponent(_0x1d6309);
        const {
          data: _0x23b7d0
        } = await axios.post(_0x47331f, "", {
          headers: {
            authority: "igram.website",
            accept: "*/*",
            "content-type": "application/x-www-form-urlencoded",
            referer: "https://igram.website/",
            "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36"
          }
        });
        return _0x23b7d0;
      } catch (_0x431f9d) {
        return {
          error: _0x431f9d.message
        };
      }
    }
    function _0x234f61(_0x19280e) {
      try {
        const _0x10365b = _0x19280e.replace(/\n|\t/g, "");
        const _0x19424f = [..._0x10365b.matchAll(/<source src="([^"]+)/g)].map(_0x207273 => _0x207273[1]);
        let _0x2c8131 = [..._0x10365b.matchAll(/<img src="([^"]+)/g)].map(_0x9c2219 => _0x9c2219[1]);
        if (_0x2c8131.length > 0) {
          _0x2c8131 = _0x2c8131.slice(1);
        }
        const _0x20e9de = _0x10365b.match(/<p class="text-sm"[^>]*>(.*?)<\/p>/);
        const _0x5806ee = _0x20e9de ? _0x20e9de[1].replace(/<br ?\/?>/g, "\n") : "";
        const _0x208d33 = _0x10365b.match(/far fa-heart"[^>]*><\/i>\s*([^<]+)/);
        const _0x14ba9e = _0x10365b.match(/far fa-comment"[^>]*><\/i>\s*([^<]+)/);
        const _0x2db61c = _0x10365b.match(/far fa-clock"[^>]*><\/i>\s*([^<]+)/);
        return {
          is_video: _0x19424f.length > 0,
          videos: _0x19424f,
          images: _0x2c8131,
          caption: _0x5806ee,
          likes: _0x208d33 ? _0x208d33[1] : null,
          comments: _0x14ba9e ? _0x14ba9e[1] : null,
          time: _0x2db61c ? _0x2db61c[1] : null
        };
      } catch (_0x143f19) {
        console.error("Parse Instagram error:", _0x143f19);
        return {
          is_video: false,
          videos: [],
          images: []
        };
      }
    }
    function _0x2b4e5b(_0xd08e0) {
      if (_0xd08e0.includes("/reel/")) {
        return "Reel";
      }
      if (_0xd08e0.includes("/stories/")) {
        return "Story";
      }
      if (_0xd08e0.includes("/p/")) {
        return "Post";
      }
      return "Unknown";
    }
    async function _0x53947d(_0x4887ef) {
      try {
        if (!_0x4887ef || typeof _0x4887ef !== "string") {
          throw new Error("URL tidak valid");
        }
        const _0x37d7c8 = _0x2b4e5b(_0x4887ef);
        const _0x5951d9 = await _0x34ac46(_0x4887ef);
        if (!_0x5951d9 || _0x5951d9.error) {
          throw new Error(_0x5951d9.error || "Gagal mengambil data dari Instagram");
        }
        if (!_0x5951d9.html) {
          throw new Error("Response tidak memiliki HTML");
        }
        const _0x5a1d63 = _0x234f61(_0x5951d9.html);
        const _0x52d543 = {
          success: true,
          status: _0x5951d9.status || "success",
          username: _0x5951d9.username || null,
          contentType: _0x37d7c8,
          type: _0x5a1d63.is_video ? "video" : "image",
          caption: _0x5a1d63.caption || "",
          likes: _0x5a1d63.likes || null,
          comments: _0x5a1d63.comments || null,
          time: _0x5a1d63.time || null,
          media: []
        };
        if (_0x5a1d63.is_video && _0x5a1d63.videos.length > 0) {
          _0x52d543.media = _0x5a1d63.videos.map((_0x523105, _0x56055b) => ({
            type: "video",
            url: _0x523105,
            index: _0x56055b + 1
          }));
        } else if (_0x5a1d63.images.length > 0) {
          _0x52d543.media = _0x5a1d63.images.map((_0x3a9f00, _0x4af24c) => ({
            type: "image",
            url: _0x3a9f00,
            index: _0x4af24c + 1
          }));
        }
        if (_0x52d543.media.length === 0) {
          throw new Error("Tidak ada media yang ditemukan");
        }
        return _0x52d543;
      } catch (_0x5a1ec7) {
        throw _0x5a1ec7;
      }
    }
    function _0x1f8f6e(_0x33be35) {
      const _0x31e735 = [/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/, /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/, /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/, /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/];
      for (const _0x340d11 of _0x31e735) {
        const _0x1f4a23 = _0x33be35.match(_0x340d11);
        if (_0x1f4a23) {
          return _0x1f4a23[1];
        }
      }
      return null;
    }
    async function _0x231fa3(_0x543d41) {
      const _0x1d3fb5 = require("https");
      return new Promise(async (_0x53543b, _0x133850) => {
        try {
          const _0x599092 = "cnv.cx";
          const _0x1c2e5c = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0",
            accept: "*/*",
            origin: "https://x2download.is",
            referer: "https://x2download.is/"
          };
          function _0x19929f(_0x4b4d5a, _0x553e20 = null) {
            return new Promise((_0x366e0d, _0x419ff1) => {
              const _0xce858e = _0x1d3fb5.request(_0x4b4d5a, _0x27e95f => {
                let _0x13030c = "";
                _0x27e95f.on("data", _0x3aeda1 => _0x13030c += _0x3aeda1);
                _0x27e95f.on("end", () => {
                  try {
                    _0x366e0d(JSON.parse(_0x13030c));
                  } catch (_0x57ee4d) {
                    _0x419ff1(_0x57ee4d);
                  }
                });
              });
              _0xce858e.on("error", _0x419ff1);
              if (_0x553e20) {
                _0xce858e.write(_0x553e20);
              }
              _0xce858e.end();
            });
          }
          const _0x4e2a97 = {
            hostname: _0x599092,
            path: "/v2/sanity/key",
            method: "GET",
            headers: _0x1c2e5c,
            timeout: 10000
          };
          const _0x3f1d31 = await _0x19929f(_0x4e2a97);
          if (!_0x3f1d31 || !_0x3f1d31.key) {
            throw new Error("No API key");
          }
          const _0x109a0b = _0x3f1d31.key;
          const _0x368ff2 = encodeURIComponent(_0x543d41);
          const _0x5d75a5 = "link=" + _0x368ff2 + "&format=mp3&audioBitrate=320&videoQuality=720&vCodec=h264";
          const _0x290a50 = {
            hostname: _0x599092,
            path: "/v2/converter",
            method: "POST",
            headers: {
              ..._0x1c2e5c,
              "content-type": "application/x-www-form-urlencoded",
              key: _0x109a0b,
              "content-length": Buffer.byteLength(_0x5d75a5)
            },
            timeout: 30000
          };
          const _0x41f85e = await _0x19929f(_0x290a50, _0x5d75a5);
          if (_0x41f85e && _0x41f85e.status === "tunnel" && _0x41f85e.url) {
            _0x53543b({
              success: true,
              downloadUrl: _0x41f85e.url,
              filename: _0x41f85e.filename
            });
          } else {
            _0x133850(new Error("Conversion failed"));
          }
        } catch (_0x3d416e) {
          _0x133850(_0x3d416e);
        }
      });
    }
    async function _0x2f2809(_0x4644a2) {
      const _0x2762be = require("https");
      const _0x421fcc = require("http");
      const {
        URL: _0x51f138
      } = require("url");
      return new Promise(async (_0xddfcce, _0x3b1207) => {
        try {
          const _0x697883 = "https://ytmp3.gs";
          const _0x6202e7 = "https://epsilon.epsiloncloud.org";
          const _0x4e71ea = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
          function _0x5ca695(_0x177902, _0x59434d = {}, _0x1be213 = true) {
            return new Promise((_0x4abee0, _0x90179f) => {
              const _0x44ba3f = new _0x51f138(_0x177902);
              const _0x5e454e = _0x44ba3f.protocol === "https:" ? _0x2762be : _0x421fcc;
              const _0x4294df = {
                hostname: _0x44ba3f.hostname,
                port: _0x44ba3f.port || (_0x44ba3f.protocol === "https:" ? 443 : 80),
                path: _0x44ba3f.pathname + _0x44ba3f.search,
                method: "GET",
                headers: {
                  "user-agent": _0x4e71ea,
                  accept: "*/*",
                  ..._0x59434d
                },
                timeout: 30000
              };
              const _0x2ec613 = _0x5e454e.request(_0x4294df, _0xe2d49 => {
                let _0x46dd2c = "";
                _0xe2d49.setEncoding("utf8");
                _0xe2d49.on("data", _0x435d08 => _0x46dd2c += _0x435d08);
                _0xe2d49.on("end", () => {
                  let _0x1b88d8 = _0x46dd2c;
                  if (_0x1be213) {
                    try {
                      _0x1b88d8 = JSON.parse(_0x46dd2c);
                    } catch {
                      _0x1b88d8 = _0x46dd2c;
                    }
                  }
                  _0x4abee0({
                    status: _0xe2d49.statusCode,
                    headers: _0xe2d49.headers,
                    body: _0x1b88d8,
                    raw: _0x46dd2c
                  });
                });
              });
              _0x2ec613.on("error", _0x90179f);
              _0x2ec613.on("timeout", () => {
                _0x2ec613.destroy();
                _0x90179f(new Error("Timeout"));
              });
              _0x2ec613.end();
            });
          }
          const _0x49b531 = _0x1f8f6e(_0x4644a2);
          if (!_0x49b531) {
            throw new Error("Invalid video ID");
          }
          const _0x20e2f4 = await _0x5ca695(_0x697883, {
            accept: "text/html"
          }, false);
          if (_0x20e2f4.status !== 200) {
            throw new Error("Page fetch failed");
          }
          const _0x9121d0 = _0x20e2f4.raw;
          function _0x2aacae(_0x3027fa) {
            const _0x16866a = [/json\s*=\s*(\[[\s\S]*?\]);/, /var\s+json\s*=\s*(\[[\s\S]*?\]);/];
            for (const _0x1482c5 of _0x16866a) {
              const _0x7f7ddb = _0x3027fa.match(_0x1482c5);
              if (_0x7f7ddb) {
                try {
                  let _0x5737a8 = _0x7f7ddb[1] || _0x7f7ddb[0];
                  _0x5737a8 = _0x5737a8.replace(/,\s*\]/, "]");
                  const _0x4965c4 = JSON.parse(_0x5737a8);
                  if (Array.isArray(_0x4965c4) && _0x4965c4.length >= 3) {
                    return _0x4965c4;
                  }
                } catch (_0x4d1875) {}
              }
            }
            return null;
          }
          let _0x45b3a2 = _0x2aacae(_0x9121d0);
          if (!_0x45b3a2) {
            const _0x4884c0 = _0x9121d0.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
            if (_0x4884c0) {
              for (const _0x4077b6 of _0x4884c0) {
                _0x45b3a2 = _0x2aacae(_0x4077b6);
                if (_0x45b3a2) {
                  break;
                }
              }
            }
          }
          if (!_0x45b3a2) {
            throw new Error("Could not find config");
          }
          const _0x5264ba = _0x45b3a2[0];
          const _0xfb2c64 = _0x45b3a2[1];
          const _0x2b4bd9 = _0x45b3a2[2];
          let _0x1fd948 = "";
          for (let _0x1b4ad5 = 0; _0x1b4ad5 < _0x5264ba.length; _0x1b4ad5++) {
            _0x1fd948 += String.fromCharCode(_0x5264ba[_0x1b4ad5] - _0x2b4bd9[_0x2b4bd9.length - (_0x1b4ad5 + 1)]);
          }
          if (_0xfb2c64 === true || _0xfb2c64 === 1) {
            _0x1fd948 = _0x1fd948.split("").reverse().join("");
          }
          if (_0x1fd948.length > 32) {
            _0x1fd948 = _0x1fd948.substring(0, 32);
          }
          const _0x18799c = _0x45b3a2[6] || 106;
          const _0xa8c165 = String.fromCharCode(_0x18799c);
          const _0x2b3d2e = Math.floor(Date.now() / 1000);
          const _0x118d26 = _0x6202e7 + "/api/v1/init?" + _0xa8c165 + "=" + encodeURIComponent(_0x1fd948) + "&t=" + _0x2b3d2e;
          const _0x4f34c4 = await _0x5ca695(_0x118d26, {
            accept: "application/json",
            referer: _0x697883 + "/"
          });
          if (_0x4f34c4.status !== 200 || !_0x4f34c4.body.convertURL) {
            throw new Error("Init failed");
          }
          let _0x4cefb2 = _0x4f34c4.body.convertURL;
          let _0x1eaa0d = null;
          for (let _0x324dc0 = 0; _0x324dc0 < 5; _0x324dc0++) {
            const _0x5d2c92 = Math.floor(Date.now() / 1000);
            const _0x1abb69 = _0x4cefb2 + "&v=" + _0x49b531 + "&f=mp3&t=" + _0x5d2c92;
            const _0x30281e = await _0x5ca695(_0x1abb69, {
              accept: "application/json",
              referer: _0x697883 + "/"
            });
            if (_0x30281e.body && _0x30281e.body.downloadURL) {
              _0x1eaa0d = _0x30281e.body.downloadURL;
              break;
            }
            if (_0x30281e.body && _0x30281e.body.progressURL) {
              for (let _0x47d149 = 0; _0x47d149 < 30; _0x47d149++) {
                await new Promise(_0x3f1442 => setTimeout(_0x3f1442, 2000));
                const _0x37321a = Math.floor(Date.now() / 1000);
                const _0x4a4cdf = await _0x5ca695(_0x30281e.body.progressURL + "&t=" + _0x37321a);
                if (_0x4a4cdf.body && _0x4a4cdf.body.downloadURL) {
                  _0x1eaa0d = _0x4a4cdf.body.downloadURL;
                  break;
                }
              }
              if (_0x1eaa0d) {
                break;
              }
            }
            await new Promise(_0x532a30 => setTimeout(_0x532a30, 1000));
          }
          if (!_0x1eaa0d) {
            throw new Error("No download URL found");
          }
          _0xddfcce({
            success: true,
            downloadUrl: _0x1eaa0d,
            method: "V4"
          });
        } catch (_0x575eec) {
          _0x3b1207(_0x575eec);
        }
      });
    }
    async function _0x29c1f1(_0x5a68f6) {
      const _0x309ab7 = require("https");
      return new Promise(async (_0x125a5f, _0x59d671) => {
        try {
          const _0xec5169 = "cnv.cx";
          const _0xf8a9a1 = {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0",
            accept: "*/*",
            origin: "https://x2download.is",
            referer: "https://x2download.is/"
          };
          function _0x156eed(_0x118ac0, _0x337b5f = null) {
            return new Promise((_0x1223b7, _0x23ed78) => {
              const _0x1a7a10 = _0x309ab7.request(_0x118ac0, _0x5c1299 => {
                let _0x3d71d6 = "";
                _0x5c1299.on("data", _0x5bafbb => _0x3d71d6 += _0x5bafbb);
                _0x5c1299.on("end", () => {
                  try {
                    _0x1223b7(JSON.parse(_0x3d71d6));
                  } catch (_0x37440d) {
                    _0x23ed78(_0x37440d);
                  }
                });
              });
              _0x1a7a10.on("error", _0x23ed78);
              if (_0x337b5f) {
                _0x1a7a10.write(_0x337b5f);
              }
              _0x1a7a10.end();
            });
          }
          const _0x255340 = {
            hostname: _0xec5169,
            path: "/v2/sanity/key",
            method: "GET",
            headers: _0xf8a9a1,
            timeout: 10000
          };
          const _0x292b4d = await _0x156eed(_0x255340);
          if (!_0x292b4d || !_0x292b4d.key) {
            throw new Error("No API key");
          }
          const _0x345d2a = _0x292b4d.key;
          const _0x4748d1 = encodeURIComponent(_0x5a68f6);
          const _0x313602 = ["360", "480", "720"];
          for (const _0xe40126 of _0x313602) {
            try {
              const _0x5ce8e1 = "link=" + _0x4748d1 + "&format=mp4&videoQuality=" + _0xe40126 + "&vCodec=h264";
              const _0x47f8ed = {
                hostname: _0xec5169,
                path: "/v2/converter",
                method: "POST",
                headers: {
                  ..._0xf8a9a1,
                  "content-type": "application/x-www-form-urlencoded",
                  key: _0x345d2a,
                  "content-length": Buffer.byteLength(_0x5ce8e1)
                },
                timeout: 30000
              };
              const _0x3994e5 = await _0x156eed(_0x47f8ed, _0x5ce8e1);
              if (_0x3994e5 && _0x3994e5.status === "tunnel" && _0x3994e5.url) {
                _0x125a5f({
                  success: true,
                  downloadUrl: _0x3994e5.url,
                  quality: _0xe40126,
                  method: "V3"
                });
                return;
              }
            } catch (_0x255913) {
              continue;
            }
          }
          _0x59d671(new Error("No working quality found"));
        } catch (_0x5056c3) {
          _0x59d671(_0x5056c3);
        }
      });
    }
    async function _0x42de41(_0xcc13b6) {
      const _0x2b5151 = require("https");
      const _0x2706f4 = require("http");
      const {
        URL: _0x2d8368
      } = require("url");
      return new Promise(async (_0x204d21, _0x4fdf8f) => {
        try {
          const _0x3e7716 = "https://ytmp3.gs";
          const _0x116f50 = "https://epsilon.epsiloncloud.org";
          const _0xdfa5ca = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
          function _0x2c7ed6(_0x238839, _0x2cf1bc = {}, _0x597038 = true) {
            return new Promise((_0x35be4f, _0x35923d) => {
              const _0x5596d5 = new _0x2d8368(_0x238839);
              const _0x301ccf = _0x5596d5.protocol === "https:" ? _0x2b5151 : _0x2706f4;
              const _0x4399ae = {
                hostname: _0x5596d5.hostname,
                port: _0x5596d5.port || (_0x5596d5.protocol === "https:" ? 443 : 80),
                path: _0x5596d5.pathname + _0x5596d5.search,
                method: "GET",
                headers: {
                  "user-agent": _0xdfa5ca,
                  accept: "*/*",
                  ..._0x2cf1bc
                },
                timeout: 30000
              };
              const _0x4e4f2e = _0x301ccf.request(_0x4399ae, _0x26f5c8 => {
                let _0x3e14cd = "";
                _0x26f5c8.setEncoding("utf8");
                _0x26f5c8.on("data", _0x52fba5 => _0x3e14cd += _0x52fba5);
                _0x26f5c8.on("end", () => {
                  let _0x3c3846 = _0x3e14cd;
                  if (_0x597038) {
                    try {
                      _0x3c3846 = JSON.parse(_0x3e14cd);
                    } catch {
                      _0x3c3846 = _0x3e14cd;
                    }
                  }
                  _0x35be4f({
                    status: _0x26f5c8.statusCode,
                    headers: _0x26f5c8.headers,
                    body: _0x3c3846,
                    raw: _0x3e14cd
                  });
                });
              });
              _0x4e4f2e.on("error", _0x35923d);
              _0x4e4f2e.on("timeout", () => {
                _0x4e4f2e.destroy();
                _0x35923d(new Error("Timeout"));
              });
              _0x4e4f2e.end();
            });
          }
          const _0x451429 = _0x1f8f6e(_0xcc13b6);
          if (!_0x451429) {
            throw new Error("Invalid video ID");
          }
          const _0x32a8cd = await _0x2c7ed6(_0x3e7716, {
            accept: "text/html"
          }, false);
          if (_0x32a8cd.status !== 200) {
            throw new Error("Page fetch failed");
          }
          const _0x572e74 = _0x32a8cd.raw;
          function _0x5ae311(_0x17a780) {
            const _0x558e7c = [/json\s*=\s*(\[[\s\S]*?\]);/, /var\s+json\s*=\s*(\[[\s\S]*?\]);/];
            for (const _0x46cba2 of _0x558e7c) {
              const _0x31d7d7 = _0x17a780.match(_0x46cba2);
              if (_0x31d7d7) {
                try {
                  let _0x17efec = _0x31d7d7[1] || _0x31d7d7[0];
                  _0x17efec = _0x17efec.replace(/,\s*\]/, "]");
                  const _0x4f626f = JSON.parse(_0x17efec);
                  if (Array.isArray(_0x4f626f) && _0x4f626f.length >= 3) {
                    return _0x4f626f;
                  }
                } catch (_0x3569d1) {}
              }
            }
            return null;
          }
          let _0x340808 = _0x5ae311(_0x572e74);
          if (!_0x340808) {
            const _0x1aa687 = _0x572e74.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
            if (_0x1aa687) {
              for (const _0x5c396b of _0x1aa687) {
                _0x340808 = _0x5ae311(_0x5c396b);
                if (_0x340808) {
                  break;
                }
              }
            }
          }
          if (!_0x340808) {
            throw new Error("Could not find config");
          }
          const _0x4d09f1 = _0x340808[0];
          const _0xf7fdb2 = _0x340808[1];
          const _0x42ed9a = _0x340808[2];
          let _0x4d10d0 = "";
          for (let _0x207403 = 0; _0x207403 < _0x4d09f1.length; _0x207403++) {
            _0x4d10d0 += String.fromCharCode(_0x4d09f1[_0x207403] - _0x42ed9a[_0x42ed9a.length - (_0x207403 + 1)]);
          }
          if (_0xf7fdb2 === true || _0xf7fdb2 === 1) {
            _0x4d10d0 = _0x4d10d0.split("").reverse().join("");
          }
          if (_0x4d10d0.length > 32) {
            _0x4d10d0 = _0x4d10d0.substring(0, 32);
          }
          const _0x12b77b = _0x340808[6] || 106;
          const _0x15c916 = String.fromCharCode(_0x12b77b);
          const _0x547259 = Math.floor(Date.now() / 1000);
          const _0x30e79c = _0x116f50 + "/api/v1/init?" + _0x15c916 + "=" + encodeURIComponent(_0x4d10d0) + "&t=" + _0x547259;
          const _0x4020c9 = await _0x2c7ed6(_0x30e79c, {
            accept: "application/json",
            referer: _0x3e7716 + "/"
          });
          if (_0x4020c9.status !== 200 || !_0x4020c9.body.convertURL) {
            throw new Error("Init failed");
          }
          let _0x4d0999 = _0x4020c9.body.convertURL;
          let _0xd7f964 = null;
          for (let _0x43bd41 = 0; _0x43bd41 < 5; _0x43bd41++) {
            const _0x51dcb3 = Math.floor(Date.now() / 1000);
            const _0x5f11a5 = _0x4d0999 + "&v=" + _0x451429 + "&f=mp4&t=" + _0x51dcb3;
            const _0x134abd = await _0x2c7ed6(_0x5f11a5, {
              accept: "application/json",
              referer: _0x3e7716 + "/"
            });
            if (_0x134abd.body && _0x134abd.body.downloadURL) {
              _0xd7f964 = _0x134abd.body.downloadURL;
              break;
            }
            if (_0x134abd.body && _0x134abd.body.progressURL) {
              for (let _0x303ce9 = 0; _0x303ce9 < 30; _0x303ce9++) {
                await new Promise(_0x4781fb => setTimeout(_0x4781fb, 2000));
                const _0x34f565 = Math.floor(Date.now() / 1000);
                const _0x3a6047 = await _0x2c7ed6(_0x134abd.body.progressURL + "&t=" + _0x34f565);
                if (_0x3a6047.body && _0x3a6047.body.downloadURL) {
                  _0xd7f964 = _0x3a6047.body.downloadURL;
                  break;
                }
              }
              if (_0xd7f964) {
                break;
              }
            }
            await new Promise(_0x2f85bc => setTimeout(_0x2f85bc, 1000));
          }
          if (!_0xd7f964) {
            throw new Error("No download URL found");
          }
          _0x204d21({
            success: true,
            downloadUrl: _0xd7f964,
            method: "V4"
          });
        } catch (_0x2fb143) {
          _0x4fdf8f(_0x2fb143);
        }
      });
    }
    try {
      if (_0x11be99.isGroup && _0x5be814 && /chat\.whatsapp\.com\/[A-Za-z0-9]+/i.test(_0x5be814) && !_0x4a7a15(_0x11be99.sender)) {
        const _0xalSettings = getUserSettings(_0x11be99.chat) || {};
        if (_0xalSettings.antilink) {
          await _0x106db2.sendMessage(_0x11be99.chat, {
            delete: _0x11be99.key
          });
          await _0x5b1b57("🛡️ *Antilink:* group invite link removed!");
        }
      }
      if (_0x11be99.isGroup && !_0x4a7a15(_0x11be99.sender)) {
        const _0xmuSettings = getUserSettings(_0x11be99.chat) || {};
        if ((_0xmuSettings.mutedUsers || []).includes(_0x11be99.sender)) {
          await _0x106db2.sendMessage(_0x11be99.chat, {
            delete: _0x11be99.key
          });
        }
      }
    } catch (_0xalCheckErr) {
      console.error("Antilink/Mute check error:", _0xalCheckErr);
    }
    switch (_0x1a9ad3) {
      case "testimg":
      case "testimage":
      case "imgtest":
        {
          try {
            await _0x1bf22f("🖼️");
            const _0x3d8c27 = [{
              buttonId: "test_btn",
              buttonText: {
                displayText: "✅ Test Button"
              },
              type: 1
            }];
            const _0x10ed87 = {
              text: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - IMAGE TEST* ✧⎠⎠\n║┃\n║┃ 🖼️ *Is image showing?*\n║┃ \n║┃ ✅ Agar image dikh rahi hai\n║┃    to setting sahi hai!\n║┃\n║┃ ❌ Agar location icon dikhe\n║┃    to setting galat hai!\n║┃\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Test button:*",
              footer: "© " + global.Developer,
              buttons: _0x3d8c27,
              headerType: 1
            };
            await _0x106db2.sendMessage(_0x11be99.chat, _0x10ed87, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x71d967) {
            console.error("Test Error:", _0x71d967);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x71d967.message);
          }
          break;
        }
      case "main_menu":
      case "menu":
      case "help":
        {
          try {
            await _0x1bf22f("🏠");
            let _0x30497a = await getMenuThumb();
            const _0x33bbac = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + "* ✧⎠⎠\n║┃\n║┃ 👑 *Owner:* " + global.Developer + "\n║┃ 👤 *User:* " + _0x2ea648 + "\n║┃ 🕐 *Time:* " + moment().tz("Asia/Karachi").format("hh:mm A") + "\n║┃\n║┃ 📌 *Select a category below*\n║┃\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Choose an option:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0x30497a
                },
                buttons: [{
                  buttonId: "menu_selector",
                  buttonText: {
                    displayText: "📋 Select Menu"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "🌟 " + global.BotName + " - MAIN MENU",
                      sections: [{
                        title: "📥 DOWNLOADER",
                        highlight_label: "📥",
                        rows: [{
                          header: "1",
                          title: "📥 Downloader Menu",
                          description: "Audio, Video, Social Media",
                          id: "downloader"
                        }]
                      }, {
                        title: "🛠️ TOOLS",
                        highlight_label: "🛠️",
                        rows: [{
                          header: "2",
                          title: "🛠️ Tools Menu",
                          description: "Sticker, HD, Upload, DP",
                          id: "tools"
                        }]
                      }, {
                        title: "🎨 LOGO MAKER",
                        highlight_label: "🎨",
                        rows: [{
                          header: "3",
                          title: "🎨 Logo Menu",
                          description: "30+ Text Effects",
                          id: "logo"
                        }]
                      }, {
                        title: "⚙️ SETTINGS",
                        highlight_label: "⚙️",
                        rows: [{
                          header: "4",
                          title: "⚙️ Settings Menu",
                          description: "Bot Settings",
                          id: "settings"
                        }]
                      }, {
                        title: "👥 GROUP",
                        highlight_label: "👥",
                        rows: [{
                          header: "5",
                          title: "👥 Group Menu",
                          description: "Tag, Lock, Admins, Antilink",
                          id: "groupmenu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0x33bbac.message, {
              messageId: _0x33bbac.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0x304a1a) {
            console.error("Menu Error:", _0x304a1a);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x304a1a.message);
          }
          break;
        }
      case "downloader":
      case "dlmenu":
        {
          try {
            await _0x1bf22f("📥");
            let _0x579fee = await getMenuThumb();
            const _0xa13b86 = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - DOWNLOADER* ✧⎠⎠\n║┃\n║┃ 🎵 *Audio Download*\n║┃ .song <song_name>\n║┃ .song https://youtube.com/xxx\n║┃\n║┃ 🎬 *Video Download*\n║┃ .video <song_name>\n║┃ .video https://youtube.com/xxx\n║┃\n║┃ 📸 *Instagram*\n║┃ .ig <instagram_url>\n║┃\n║┃ 🎵 *TikTok*\n║┃ .tt <tiktok_url>\n║┃ .tt2 <tiktok_url>\n║┃\n║┃ 🎵 *Spotify*\n║┃ .spotify <spotify_url>\n║┃ .spsong <song_name>\n║┃\n║┃ 📘 *Facebook*\n║┃ .fb <facebook_url>\n║┃\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Go back to main menu:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0x579fee
                },
                buttons: [{
                  buttonId: "back_to_menu",
                  buttonText: {
                    displayText: "🏠 Main Menu"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "🏠 GO BACK",
                      sections: [{
                        title: "📌 Main Menu",
                        highlight_label: "🏠",
                        rows: [{
                          header: "1",
                          title: "🏠 Main Menu",
                          description: "Wapas jayein",
                          id: "main_menu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0xa13b86.message, {
              messageId: _0xa13b86.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0x5174a6) {
            console.error("Downloader Menu Error:", _0x5174a6);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x5174a6.message);
          }
          break;
        }
      case "tools":
      case "toolsmenu":
        {
          try {
            await _0x1bf22f("🛠️");
            let _0x256454 = await getMenuThumb();
            const _0x5a6761 = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - TOOLS* ✧⎠⎠\n║┃\n║┃ 🖼️ *Sticker Maker*\n║┃ .sticker (reply to image/video)\n║┃ .s (shortcut)\n║┃\n║┃ ✨ *HD Enhance*\n║┃ .hd (reply to image)\n║┃ .hd2 (Ultra HD)\n║┃ .uhd (4K)\n║┃\n║┃ 📤 *Upload to URL*\n║┃ .tourl (reply to image/video)\n║┃ .upload\n║┃\n║┃ 🖼️ *Sticker to Image*\n║┃ .toimg (reply to sticker)\n║┃\n║┃ 📱 *Get DP*\n║┃ .dp @mention\n║┃ .dp 923001234567\n║┃\n║┃ 📤 *Forward/View*\n║┃ .vv (reply to media)\n║┃ .vv2 (forward to owner)\n║┃\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Go back to main menu:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0x256454
                },
                buttons: [{
                  buttonId: "back_to_menu",
                  buttonText: {
                    displayText: "🏠 Main Menu"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "🏠 GO BACK",
                      sections: [{
                        title: "📌 Main Menu",
                        highlight_label: "🏠",
                        rows: [{
                          header: "1",
                          title: "🏠 Main Menu",
                          description: "Wapas jayein",
                          id: "main_menu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0x5a6761.message, {
              messageId: _0x5a6761.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0x4bedc1) {
            console.error("Tools Menu Error:", _0x4bedc1);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x4bedc1.message);
          }
          break;
        }
      case "groupmenu":
      case "gmenu":
        {
          try {
            await _0x1bf22f("👥");
            let _0xg1img = await getMenuThumb();
            const _0xg1msg = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - GROUP* ✧⎠⎠\n║┃\n║┃ 👥 *Members*\n║┃ .add @mention / number\n║┃ .kick @mention\n║┃ .promote @mention\n║┃ .demote @mention\n║┃ .listadmins\n║┃ .groupmembers\n║┃ .exportmembers\n║┃\n║┃ 📢 *Broadcast*\n║┃ .tagall <text>\n║┃ .hidetag <text>\n║┃\n║┃ ⚙️ *Group Setup*\n║┃ .setgname <name>\n║┃ .setgdesc <desc>\n║┃ .setgpp (reply to image)\n║┃ .groupid\n║┃ .rules <text>\n║┃\n║┃ 🔒 *Access Control*\n║┃ .lockgroup\n║┃ .unlockgroup\n║┃ .antilink on/off\n║┃\n║┃ 👋 *Welcome/Goodbye*\n║┃ .welcome on/off\n║┃ .setwelcome <text>\n║┃ .setgoodbye <text>\n║┃\n║┃ 🛡️ *Moderation*\n║┃ .warn @mention <reason>\n║┃ .warnings @mention\n║┃ .resetwarn @mention\n║┃ .mute @mention\n║┃ .unmute @mention\n║┃ .demoteall\n║┃ .groupsettings\n║┃\n║┃ 🔗 *Invite*\n║┃ .invitelink\n║┃ .revoke\n║┃ .join <code>\n║┃ .ginfo\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Go back to main menu:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0xg1img
                },
                buttons: [{
                  buttonId: "back_to_menu",
                  buttonText: {
                    displayText: "🏠 Main Menu"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "🏠 GO BACK",
                      sections: [{
                        title: "📌 Main Menu",
                        highlight_label: "🏠",
                        rows: [{
                          header: "1",
                          title: "🏠 Main Menu",
                          description: "Wapas jayein",
                          id: "main_menu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0xg1msg.message, {
              messageId: _0xg1msg.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0xg1cerr) {
            console.error("Group Menu Error:", _0xg1cerr);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0xg1cerr.message);
          }
          break;
        }
      case "logo":
      case "logomenu":
        {
          try {
            await _0x1bf22f("🎨");
            let _0x141974 = await getMenuThumb();
            const _0x32d3ac = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - LOGO MAKER* ✧⎠⎠\n║┃\n║┃ ✨ *Glitch Effects*\n║┃ .glitchtext <text>\n║┃ .pixelglitch <text>\n║┃ .neonglitch <text>\n║┃\n║┃ 🌟 *Neon Effects*\n║┃ .advancedglow <text>\n║┃ .makingneon <text>\n║┃ .lighteffects <text>\n║┃\n║┃ 👑 *Royal & Premium*\n║┃ .royaltext <text>\n║┃ .luxurygold <text>\n║┃ .galaxystyle <text>\n║┃ .gradienttext <text>\n║┃\n║┃ 💗 *Blackpink Style*\n║┃ .blackpinkstyle <text>\n║┃ .blackpinklogo <text>\n║┃\n║┃ 🏖️ *Summer & Beach*\n║┃ .summerbeach <text>\n║┃ .sandsummer <text>\n║┃\n║┃ 🌊 *Water & Underwater*\n║┃ .underwatertext <text>\n║┃ .writetext <text>\n║┃\n║┃ 🎨 *More Effects*\n║┃ .flagtext <text>\n║┃ .flag3dtext <text>\n║┃ .galaxywallpaper <text>\n║┃ .cartoonstyle <text>\n║┃ .papercutstyle <text>\n║┃ .watercolortext <text>\n║┃ .effectclouds <text>\n║┃ .typographytext <text>\n║┃\n║┃ 📌 *Usage:*\n║┃ .effectname Your Text\n║┃ Example: .glitchtext Rizo\n║┃\n║┃  \n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Go back to main menu:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0x141974
                },
                buttons: [{
                  buttonId: "back_to_menu",
                  buttonText: {
                    displayText: "🏠 Main Menu"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "🏠 GO BACK",
                      sections: [{
                        title: "📌 Main Menu",
                        highlight_label: "🏠",
                        rows: [{
                          header: "1",
                          title: "🏠 Main Menu",
                          description: "Wapas jayein",
                          id: "main_menu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0x32d3ac.message, {
              messageId: _0x32d3ac.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0x4cdfdc) {
            console.error("Logo Menu Error:", _0x4cdfdc);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x4cdfdc.message);
          }
          break;
        }
      case "settings":
      case "settingsmenu":
        {
          try {
            await _0x1bf22f("⚙️");
            let _0x3e040e = await getMenuThumb();
            const _0x1cf828 = getUserSettings(_0x106db2.user.id);
            const _0x4cd23c = generateWAMessageFromContent(_0x11be99.chat, {
              buttonsMessage: {
                contentText: "╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + " - SETTINGS* ✧⎠⎠\n║┃\n║┃ 📊 *Current Status:*\n║┃\n║┃ 🌐 *Public Mode:* " + (_0x1cf828.publicMode ? "✅ ON" : "❌ OFF") + "\n║┃ 🔄 *Auto React:* " + (_0x1cf828.autoReact ? "✅ ON" : "❌ OFF") + "\n║┃ 🗑️ *Anti Delete:* " + (_0x1cf828.antiDelete ? "✅ ON" : "❌ OFF") + "\n║┃ 👁️ *Auto View:* " + (_0x1cf828.autoStatusView ? "✅ ON" : "❌ OFF") + "\n║┃ 📞 *Reject Calls:* " + (_0x1cf828.autoRejectCall ? "✅ ON" : "❌ OFF") + "\n║┃ 🚫 *Anti Link:* " + (_0x1cf828.antiLink ? "✅ ON" : "❌ OFF") + "\n║┃\n║┃ ━━━━━━━━━━━━━━━━━━━━━\n║┃ 🔧 *Commands to Change:*\n║┃\n║┃ 🌐 .public - Public Mode ON\n║┃ 🔒 .self - Private Mode ON\n║┃\n║┃ 🔄 .autoreact-on - Auto React ON\n║┃ 🔄 .autoreact-off - Auto React OFF\n║┃\n║┃ 🗑️ .antidelete-on - Anti Delete ON\n║┃ 🗑️ .antidelete-off - Anti Delete OFF\n║┃\n║┃ 👁️ .autoview-on - Auto View ON\n║┃ 👁️ .autoview-off - Auto View OFF\n║┃\n║┃ 📞 .autorejectcall-on - Reject Calls ON\n║┃ 📞 .autorejectcall-off - Reject Calls OFF\n║┃\n║┃ 🚫 .antilink-on - Anti Link ON\n║┃ 🚫 .antilink-off - Anti Link OFF\n║┃\n║┃ 📊 .mysettings - View Current Settings\n║┃\n║┃\n║╰────•\n╚══════─── • ───════╝\n\n⬇️ *Select an option:*",
                footerText: "powered by " + global.Developer,
                headerType: 6,
                locationMessage: {
                  name: global.Developer + " 💫💗",
                  address: "📍 Developer",
                  jpegThumbnail: _0x3e040e
                },
                buttons: [{
                  buttonId: "settings_actions",
                  buttonText: {
                    displayText: "⚙️ Quick Actions"
                  },
                  type: 1,
                  nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                      title: "⚙️ QUICK ACTIONS",
                      sections: [{
                        title: "📌 Toggle Settings",
                        highlight_label: "⚙️",
                        rows: [{
                          header: "1",
                          title: _0x1cf828.publicMode ? "🔒 Switch to Private" : "🌐 Switch to Public",
                          description: _0x1cf828.publicMode ? "Sirf aap use kar sakte hain" : "Sabko bot use karne dein",
                          id: _0x1cf828.publicMode ? "self" : "public"
                        }, {
                          header: "2",
                          title: _0x1cf828.autoReact ? "🔄 Turn Auto React OFF" : "🔄 Turn Auto React ON",
                          description: _0x1cf828.autoReact ? "Auto react band karein" : "Auto react chalayein",
                          id: _0x1cf828.autoReact ? "autoreact-off" : "autoreact-on"
                        }, {
                          header: "3",
                          title: _0x1cf828.antiDelete ? "🗑️ Turn Anti Delete OFF" : "🗑️ Turn Anti Delete ON",
                          description: _0x1cf828.antiDelete ? "Anti delete band karein" : "Anti delete chalayein",
                          id: _0x1cf828.antiDelete ? "antidelete-off" : "antidelete-on"
                        }, {
                          header: "4",
                          title: _0x1cf828.autoStatusView ? "👁️ Turn Auto View OFF" : "👁️ Turn Auto View ON",
                          description: _0x1cf828.autoStatusView ? "Auto view band karein" : "Auto view chalayein",
                          id: _0x1cf828.autoStatusView ? "autoview-off" : "autoview-on"
                        }, {
                          header: "5",
                          title: _0x1cf828.autoRejectCall ? "📞 Turn Reject Calls OFF" : "📞 Turn Reject Calls ON",
                          description: _0x1cf828.autoRejectCall ? "Calls reject band karein" : "Calls reject chalayein",
                          id: _0x1cf828.autoRejectCall ? "autoreject-off" : "autoreject-on"
                        }, {
                          header: "6",
                          title: _0x1cf828.antiLink ? "🚫 Turn Anti Link OFF" : "🚫 Turn Anti Link ON",
                          description: _0x1cf828.antiLink ? "Anti link band karein" : "Anti link chalayein",
                          id: _0x1cf828.antiLink ? "antilink-off" : "antilink-on"
                        }]
                      }, {
                        title: "📌 Navigation",
                        highlight_label: "🏠",
                        rows: [{
                          header: "7",
                          title: "🏠 Main Menu",
                          description: "Wapas jayein",
                          id: "main_menu"
                        }]
                      }]
                    })
                  }
                }]
              }
            }, {
              userJid: _0x106db2.user.id
            });
            await _0x106db2.relayMessage(_0x11be99.chat, _0x4cd23c.message, {
              messageId: _0x4cd23c.key.id
            });
            await _0x1bf22f("✅");
          } catch (_0x4cc100) {
            console.error("Settings Menu Error:", _0x4cc100);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x4cc100.message);
          }
          break;
        }
      case "ping":
      case "alive":
        {
          try {
            await _0x1bf22f("🌐");
            const _0x2ba244 = Date.now();
            const _0x13cc80 = new Date();
            const _0x226414 = _0x13cc80.toLocaleTimeString("en-PK", {
              timeZone: "Asia/Karachi",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true
            });
            const _0x3a9c74 = _0x2a1125 => {
              const _0x1c10b8 = Math.floor(_0x2a1125 / 604800);
              const _0x22c484 = Math.floor(_0x2a1125 % 604800 / 86400);
              const _0x510154 = Math.floor(_0x2a1125 % 86400 / 3600);
              const _0x46b741 = Math.floor(_0x2a1125 % 3600 / 60);
              const _0x4c2869 = Math.floor(_0x2a1125 % 60);
              let _0x31dbbe = [];
              if (_0x1c10b8 > 0) {
                _0x31dbbe.push(_0x1c10b8 + "w");
              }
              if (_0x22c484 > 0) {
                _0x31dbbe.push(_0x22c484 + "d");
              }
              if (_0x510154 > 0) {
                _0x31dbbe.push(_0x510154 + "h");
              }
              if (_0x46b741 > 0) {
                _0x31dbbe.push(_0x46b741 + "m");
              }
              if (_0x4c2869 > 0 || _0x31dbbe.length === 0) {
                _0x31dbbe.push(_0x4c2869 + "s");
              }
              return _0x31dbbe.join(" ");
            };
            const _0xaae3ca = _0x3a9c74(process.uptime());
            const _0x2fd1a7 = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
            const _0x10f87d = (Date.now() - _0x2ba244).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              disclaimerText: "🤖 " + global.BotName + " | ⏱️ " + _0xaae3ca + " | 💾 " + _0x2fd1a7 + "MB | ⚡ " + _0x10f87d + "ms",
              headerText: "## 👑 " + global.Developer + "'s Bot - Connect With Us!",
              contentText: "---",
              links: [{
                text: "1. 👑 Contact Owner",
                title: "WhatsApp: wa.me/93497507427",
                url: "https://wa.me/923497507427?text=Assalamualaikum%20Sir%20Rizo%20Hacker%20❤️"
              }, {
                text: "2. 🤖 Free Bot Link",
                title: "Free Website link- " + global.BotName,
                url: "https://rizohost.xo.je/register.php"
              }, {
                text: "3. 👥 WhatsApp Group 1",
                title: "Join Group 1",
                url: "https://chat.whatsapp.com/HLETYxe9rC08rDKpLeUSXk"
              }, {
                text: "4. 👥 WhatsApp Group 2",
                title: "Join Group 2",
                url: "https://chat.whatsapp.com/HLETYxe9rC08rDKpLeUSXk"
              }, {
                text: "5. 📢 WhatsApp Channel",
                title: "Follow for updates",
                url: "https://whatsapp.com/channel/0029Vb9684d1SWszhXpuCr3g"
              }, {
                text: "6. 💻 GitHub",
                title: global.socialm,
                url: "https://github.com/rizolegend5"
              }, {
                text: "7. ▶️ YouTube",
                title: global.ytname,
                url: "https://youtube.com/" + global.ytname
              }],
              footerText: "---\n🕐 " + _0x226414 + " (PKT) | ⚡ *Tap any link to open!*\n© " + global.Developer
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x5876d4) {
            console.error("Social links error:", _0x5876d4);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ Error: " + _0x5876d4.message);
          }
          break;
        }
      case "autorejectcall-on":
        {
          updateUserSettings(_0x106db2.user.id, {
            autoRejectCall: true
          });
          _0x5b1b57("✅ *Auto-reject calls is now ON*");
          break;
        }
      case "autorejectcall-off":
        {
          updateUserSettings(_0x106db2.user.id, {
            autoRejectCall: false
          });
          _0x5b1b57("❌ *Auto-reject calls is now OFF*");
          break;
        }
      case "antilink-on":
        {
          updateUserSettings(_0x106db2.user.id, {
            antiLink: true
          });
          _0x5b1b57("✅ *Anti-link is now ON*\n\n3 strikes and user will be removed.");
          break;
        }
      case "antilink-off":
        {
          updateUserSettings(_0x106db2.user.id, {
            antiLink: false
          });
          _0x5b1b57("❌ *Anti-link is now OFF*");
          break;
        }
      case "autoreact-on":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              autoReact: true
            });
            await _0x1bf22f("✅");
            await _0x5b1b57("✅ *Auto-react is now ON*\n\n" + global.BotName + " will automatically react to messages.");
          } catch (_0x1931e8) {
            console.error("AutoReact error:", _0x1931e8);
            await _0x5b1b57("❌ Error: " + _0x1931e8.message);
          }
          break;
        }
      case "autoreact-off":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              autoReact: false
            });
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Auto-react is now OFF*\n\n" + global.BotName + " will not react automatically.");
          } catch (_0x4fc5e6) {
            console.error("AutoReact error:", _0x4fc5e6);
            await _0x5b1b57("❌ Error: " + _0x4fc5e6.message);
          }
          break;
        }
      case "antidelete-on":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              antiDelete: true
            });
            await _0x1bf22f("✅");
            await _0x5b1b57("✅ *Anti-delete is now ON*\n\n" + global.BotName + " will detect deleted messages.");
          } catch (_0x120d2f) {
            console.error("AntiDelete error:", _0x120d2f);
            await _0x5b1b57("❌ Error: " + _0x120d2f.message);
          }
          break;
        }
      case "antidelete-off":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              antiDelete: false
            });
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Anti-delete is now OFF*\n\n" + global.BotName + " will ignore deleted messages.");
          } catch (_0x496456) {
            console.error("AntiDelete error:", _0x496456);
            await _0x5b1b57("❌ Error: " + _0x496456.message);
          }
          break;
        }
      case "public":
        {
          try {
            _0x106db2.public = true;
            updateUserSettings(_0x106db2.user.id, {
              publicMode: true
            });
            await _0x1bf22f("🌐");
            await _0x5b1b57("🌐 *" + global.BotName + " mode changed to PUBLIC*\n\nEveryone can use the bot now.");
          } catch (_0x294565) {
            console.error("Public mode error:", _0x294565);
            await _0x5b1b57("❌ Error: " + _0x294565.message);
          }
          break;
        }
      case "self":
        {
          try {
            _0x106db2.public = false;
            updateUserSettings(_0x106db2.user.id, {
              publicMode: false
            });
            await _0x1bf22f("🔒");
            await _0x5b1b57("🔒 *" + global.BotName + " mode changed to PRIVATE*\n\nOnly you can use the bot now.");
          } catch (_0x54e7b5) {
            console.error("Self mode error:", _0x54e7b5);
            await _0x5b1b57("❌ Error: " + _0x54e7b5.message);
          }
          break;
        }
      case "autoview-on":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              autoStatusView: true
            });
            await _0x1bf22f("✅");
            await _0x5b1b57("✅ *Auto-status view is now ON*\n\n" + global.BotName + " will automatically view status updates.");
          } catch (_0x324d33) {
            console.error("AutoView error:", _0x324d33);
            await _0x5b1b57("❌ Error: " + _0x324d33.message);
          }
          break;
        }
      case "autoview-off":
        {
          try {
            updateUserSettings(_0x106db2.user.id, {
              autoStatusView: false
            });
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Auto-status view is now OFF*\n\n" + global.BotName + " will not view status updates.");
          } catch (_0x5f497e) {
            console.error("AutoView error:", _0x5f497e);
            await _0x5b1b57("❌ Error: " + _0x5f497e.message);
          }
          break;
        }
      case "settings":
      case "mysettings":
        {
          try {
            const _0x28dc3c = getUserSettings(_0x106db2.user.id);
            const _0x26c7e6 = _0x28dc3c.autoReact ? "✅ ON" : "❌ OFF";
            const _0x505ad2 = _0x28dc3c.antiDelete ? "✅ ON" : "❌ OFF";
            const _0x547ffc = _0x28dc3c.publicMode ? "🌐 PUBLIC" : "🔒 PRIVATE";
            const _0x7a62a7 = _0x28dc3c.autoStatusView ? "✅ ON" : "❌ OFF";
            const _0x245079 = "\n╭─「 ⚙️ *" + global.BotName + " SETTINGS* ⚙️ 」─╮\n│\n│ 🔄 *Auto-react:* " + _0x26c7e6 + "\n│ 🗑️ *Anti-delete:* " + _0x505ad2 + "\n│ 🌐 *Bot Mode:* " + _0x547ffc + "\n│ 👁️ *Auto-view:* " + _0x7a62a7 + "\n│\n│ ━━━━━━━━━━━━━━━━━━━━━\n│ *HOW TO CHANGE SETTINGS:*\n│\n│ 🔄 Auto-react:\n│   • .autoreact-on\n│   • .autoreact-off\n│\n│ 🗑️ Anti-delete:\n│   • .antidelete-on  \n│   • .antidelete-off\n│\n│ 🌐 Bot Mode:\n│   • .self\n│   • .public\n│\n│ 👁️ Auto-view:\n│   • .autoview-on\n│   • .autoview-off\n│\n╰─────────────────────╯\n> *LINK TO CONNECT " + global.BotName + " 👇*\n> https://rizo-toxic-md.vercel.app/";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0x245079,
              contextInfo: {
                externalAdReply: {
                  title: "⚙️ Settings Panel",
                  body: "Configure your " + global.BotName + " preferences",
                  thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  sourceUrl: "https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21",
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x11be99
            });
          } catch (_0x85bd66) {
            console.error("Settings error:", _0x85bd66);
            await _0x5b1b57("❌ Error: " + _0x85bd66.message);
          }
          break;
        }
      case "vv":
      case "😘":
        {
          try {
            const _0x5653c2 = _0x11be99.quoted ? _0x11be99.quoted : _0x11be99;
            if (!_0x11be99.quoted) {
              return _0x5b1b57("❌ Reply to a media message");
            }
            const _0x5ab0e2 = await _0x5653c2.download();
            const _0x2255bf = _0x5653c2.mtype;
            let _0x3bdbaa = {};
            switch (_0x2255bf) {
              case "imageMessage":
                _0x3bdbaa = {
                  image: _0x5ab0e2,
                  caption: _0x5653c2.caption || _0x5653c2.text || "",
                  mimetype: _0x5653c2.mimetype || "image/jpeg"
                };
                break;
              case "videoMessage":
                _0x3bdbaa = {
                  video: _0x5ab0e2,
                  caption: _0x5653c2.caption || _0x5653c2.text || "",
                  mimetype: _0x5653c2.mimetype || "video/mp4"
                };
                break;
              case "audioMessage":
                _0x3bdbaa = {
                  audio: _0x5ab0e2,
                  mimetype: "audio/mp4",
                  ptt: _0x5653c2.ptt || false
                };
                break;
              default:
                return _0x5b1b57("❌ Only image, video, and audio supported");
            }
            await _0x106db2.sendMessage(_0x11be99.chat, _0x3bdbaa, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x3c6554) {
            console.error("Send Error:", _0x3c6554);
            await _0x5b1b57("❌ Error: " + _0x3c6554.message);
          }
          break;
        }
      case "vv2":
      case "🖤":
        {
          try {
            const _0x1fba32 = _0x11be99.quoted ? _0x11be99.quoted : _0x11be99;
            if (!_0x11be99.quoted) {
              return _0x5b1b57("❌ Reply to a media message");
            }
            const _0x5b364f = await _0x1fba32.download();
            const _0x22e48 = _0x1fba32.mtype;
            let _0x5a8c10 = {};
            switch (_0x22e48) {
              case "imageMessage":
                _0x5a8c10 = {
                  image: _0x5b364f,
                  caption: _0x1fba32.caption || _0x1fba32.text || "",
                  mimetype: _0x1fba32.mimetype || "image/jpeg"
                };
                break;
              case "videoMessage":
                _0x5a8c10 = {
                  video: _0x5b364f,
                  caption: _0x1fba32.caption || _0x1fba32.text || "",
                  mimetype: _0x1fba32.mimetype || "video/mp4"
                };
                break;
              case "audioMessage":
                _0x5a8c10 = {
                  audio: _0x5b364f,
                  mimetype: "audio/mp4",
                  ptt: _0x1fba32.ptt || false
                };
                break;
              default:
                return _0x5b1b57("❌ Only image, video, and audio supported");
            }
            await _0x106db2.sendMessage(_0x3f6b18, _0x5a8c10, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x28191f) {
            console.error("Forward Error:", _0x28191f);
            await _0x5b1b57("❌ Error: " + _0x28191f.message);
          }
          break;
        }
      case "audio":
      case "song":
      case "play":
      case "mp3":
        {
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎵 *Usage:* .audio song_name\n*Example:* .audio shkini song");
            }
            await _0x1bf22f("🔍");
            const _0xfc7320 = await yts(_0x74101d);
            if (!_0xfc7320.videos || _0xfc7320.videos.length === 0) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ No results found for \"" + _0x74101d + "\"");
            }
            const _0x3c7ce3 = _0xfc7320.videos[0];
            const _0x3c97b7 = _0x3c7ce3.url;
            await _0x5b1b57("🎵 *" + _0x3c7ce3.title + "*\n" + ("👤 *" + _0x3c7ce3.author.name + "*\n") + ("⏱️ *" + _0x3c7ce3.duration + "*\n\n") + "📥 *Downloading audio...*");
            const _0x49daad = await axios.get(COVENANT_API_URL, {
              params: {
                url: _0x3c97b7,
                quality: 360,
                audio_only: true
              },
              headers: {
                "x-api-key": COVENANT_API_KEY
              },
              timeout: 30000
            });
            if (!_0x49daad.data || !_0x49daad.data.status) {
              throw new Error(_0x49daad.data?.message || "API request failed");
            }
            const _0x4a2ea6 = _0x49daad.data.data;
            const _0x148c15 = _0x4a2ea6.download_url;
            const _0x44903a = _0x4a2ea6.title || _0x3c7ce3.title;
            const _0x45ab37 = _0x4a2ea6.channel || _0x3c7ce3.author.name;
            const _0x17572f = _0x4a2ea6.duration;
            const _0x2d5f34 = _0x4a2ea6.quality || "360";
            await _0x1bf22f("📥");
            const _0xa7a68e = await axios({
              method: "GET",
              url: _0x148c15,
              responseType: "arraybuffer",
              timeout: 60000,
              maxRedirects: 5
            });
            const _0x20840a = Buffer.from(_0xa7a68e.data);
            const _0x140f5d = (_0x20840a.length / 1048576).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              audio: _0x20840a,
              mimetype: "audio/mpeg",
              fileName: _0x44903a.replace(/[^\w\s]/gi, "").substring(0, 50) + ".mp3",
              caption: "🎵 *" + _0x44903a + "*\n" + ("👤 *Artist:* " + _0x45ab37 + "\n") + ("⏱️ *Duration:* " + _0x17572f + " seconds\n") + ("📦 *Size:* " + _0x140f5d + " MB\n") + "📡 *Source:* Covenant API\n\n" + ("✅ " + global.BotName + " - Download Complete! 🎧"),
              ptt: false
            }, {
              quoted: _0x11be99
            });
            if (_0x49daad.data.usage) {
              console.log("API Usage - Remaining: " + _0x49daad.data.usage.remaining);
            }
            await _0x1bf22f("✅");
          } catch (_0x45986f) {
            console.error("Audio error:", _0x45986f);
            await _0x1bf22f("❌");
            let _0x2c62e2 = _0x45986f.message;
            if (_0x45986f.response?.data?.message) {
              _0x2c62e2 = _0x45986f.response.data.message;
            }
            _0x5b1b57("❌ *Download Failed!*\n\n*Error:* " + _0x2c62e2 + "\n\n💡 *Try again or use a different song*");
          }
          break;
        }
      case "video":
      case "vd":
      case "mp4":
        {
          const _0x54368d = require("fs");
          const _0x1e7738 = require("path");
          const {
            exec: _0x46913f
          } = require("child_process");
          const _0x5678d9 = require("util");
          const _0x2a46d8 = _0x5678d9.promisify(_0x46913f);
          let _0x535cc4;
          let _0x4612af;
          let _0x2a4183;
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎥 *Usage:*.video video_name");
            }
            await _0x1bf22f("🔍");
            const _0x4d6694 = await yts(_0x74101d);
            if (!_0x4d6694.videos || _0x4d6694.videos.length === 0) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ No results found");
            }
            const _0x4ee732 = _0x4d6694.videos[0];
            const _0x209005 = _0x4ee732.url;
            await _0x5b1b57("📥 *Downloading:* " + _0x4ee732.title);
            const _0x2e948c = await axios.get(COVENANT_API_URL, {
              params: {
                url: _0x209005,
                quality: 360,
                audio_only: false
              },
              headers: {
                "x-api-key": COVENANT_API_KEY
              },
              timeout: 60000
            });
            if (!_0x2e948c.data?.status) {
              throw new Error("API failed to fetch video");
            }
            const _0x5ce206 = _0x2e948c.data.data;
            const _0x47ca4d = _0x5ce206.download_url;
            const _0x1cafb8 = await axios({
              method: "GET",
              url: _0x47ca4d,
              responseType: "arraybuffer",
              timeout: 300000
            });
            let _0x59f7c0 = Buffer.from(_0x1cafb8.data);
            const _0x2ebf43 = _0x59f7c0.length / 1024 / 1024;
            if (_0x2ebf43 < 0.1) {
              throw new Error("Downloaded file is corrupt or too small");
            }
            const _0x1ce07a = Date.now();
            _0x535cc4 = _0x1e7738.join(__dirname, "vid_in_" + _0x1ce07a + ".mp4");
            _0x4612af = _0x1e7738.join(__dirname, "vid_out_" + _0x1ce07a + ".mp4");
            _0x2a4183 = _0x1e7738.join(__dirname, "vid_comp_" + _0x1ce07a + ".mp4");
            _0x54368d.writeFileSync(_0x535cc4, _0x59f7c0);
            await _0x2a46d8("ffmpeg -i \"" + _0x535cc4 + "\" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -preset fast -crf 28 -c:a aac -b:a 128k -movflags +faststart -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" \"" + _0x4612af + "\" -y");
            let _0x51a3c6 = _0x54368d.readFileSync(_0x4612af);
            let _0x3fa34a = _0x51a3c6.length / 1024 / 1024;
            if (_0x3fa34a > 63) {
              await _0x5b1b57("🗜️ *Compressing:* File too large " + _0x3fa34a.toFixed(1) + "MB");
              await _0x2a46d8("ffmpeg -i \"" + _0x4612af + "\" -c:v libx264 -profile:v baseline -crf 32 -preset veryfast -c:a aac -b:a 96k -movflags +faststart \"" + _0x2a4183 + "\" -y");
              _0x51a3c6 = _0x54368d.readFileSync(_0x2a4183);
              _0x3fa34a = _0x51a3c6.length / 1024 / 1024;
            }
            const _0x4920f1 = "🎬 *" + _0x5ce206.title + "*\n👤 *Channel:* " + _0x5ce206.channel + "\n💾 *Size:* " + _0x3fa34a.toFixed(1) + "MB\n⏱️ *Duration:* " + _0x4ee732.timestamp + "\n\n✅ " + global.BotName + " - Download Complete!";
            if (_0x3fa34a <= 63) {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                video: _0x51a3c6,
                caption: _0x4920f1,
                mimetype: "video/mp4"
              }, {
                quoted: _0x11be99
              });
            } else {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                document: _0x51a3c6,
                fileName: _0x5ce206.title.slice(0, 50) + ".mp4",
                mimetype: "video/mp4",
                caption: _0x4920f1 + "\n\n_Sent as document due to size_"
              }, {
                quoted: _0x11be99
              });
            }
            await _0x1bf22f("✅");
          } catch (_0x5b4c0e) {
            console.error("Video error:", _0x5b4c0e);
            await _0x1bf22f("❌");
            _0x5b1b57("❌ *Error:* " + _0x5b4c0e.message + "\n\nTry lower quality or shorter video.");
          } finally {
            [_0x535cc4, _0x4612af, _0x2a4183].forEach(_0x4770dd => {
              if (_0x4770dd && _0x54368d.existsSync(_0x4770dd)) {
                _0x54368d.unlinkSync(_0x4770dd);
              }
            });
          }
          break;
        }
      case "audio2":
      case "song2":
      case "play2":
        {
          const _0x187b23 = require("axios");
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎵 *Usage:*.audio2 song_name\n*Example:*.audio2 shkini song");
            }
            await _0x1bf22f("🔍");
            const _0x4cb783 = await yts(_0x74101d);
            if (!_0x4cb783.videos || _0x4cb783.videos.length === 0) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ No results found");
            }
            const _0x901305 = _0x4cb783.videos[0];
            await _0x5b1b57("📥 *Fetching:* " + _0x901305.title);
            const _0x2b2b0b = await _0x187b23.get(FGSI_API_URL, {
              params: {
                apikey: FGSI_API_KEY,
                url: _0x901305.url,
                type: "mp3"
              },
              timeout: 30000
            });
            let _0x19e65a;
            let _0x1325f4 = _0x901305.title;
            if (_0x2b2b0b.data?.data?.url) {
              _0x19e65a = _0x2b2b0b.data.data.url;
              _0x1325f4 = _0x2b2b0b.data.data.n || _0x901305.title;
            } else if (_0x2b2b0b.data?.message?.formats) {
              const _0x468034 = _0x2b2b0b.data.message.formats;
              let _0x3565c4 = _0x468034.find(_0x339cc4 => _0x339cc4.itag == 140 || _0x339cc4.itag == 251 || _0x339cc4.mimeType?.includes("audio"));
              if (!_0x3565c4) {
                throw new Error("Audio format not found");
              }
              _0x19e65a = _0x3565c4.url;
              _0x1325f4 = _0x2b2b0b.data.message.title || _0x901305.title;
            } else {
              throw new Error("Invalid API response: " + JSON.stringify(_0x2b2b0b.data));
            }
            await _0x1bf22f("📥");
            const _0x450aee = await _0x187b23({
              method: "GET",
              url: _0x19e65a,
              responseType: "arraybuffer",
              timeout: 120000
            });
            const _0x424504 = Buffer.from(_0x450aee.data);
            const _0x300ae8 = (_0x424504.length / 1024).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              audio: _0x424504,
              mimetype: "audio/mpeg",
              fileName: _0x1325f4.replace(/[^\w\s]/gi, "").substring(0, 50) + ".mp3",
              caption: "🎵 *" + _0x1325f4 + "*\n👤 *Channel:* " + _0x901305.author.name + "\n📦 *Size:* " + _0x300ae8 + " MB\n⏱️ *Duration:* " + _0x901305.timestamp + "\n\n✅ " + global.BotName + " - FGSI API",
              ptt: false
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x5a1a79) {
            console.error("Audio2 error:", _0x5a1a79);
            await _0x1bf22f("❌");
            _0x5b1b57("❌ *Error:* " + (_0x5a1a79.response?.data?.message || _0x5a1a79.message));
          }
          break;
        }
      case "video2":
      case "vd2":
      case "mp4_2":
        {
          const _0x323103 = require("axios");
          const _0x578b2f = require("fs");
          const _0x13f766 = require("path");
          const _0x1e1297 = require("os");
          const {
            exec: _0x173f9f
          } = require("child_process");
          const _0x119cc0 = require("util");
          const _0x1f9ffe = _0x119cc0.promisify(_0x173f9f);
          let _0x5cfb88;
          let _0xa81b44;
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎥 *Usage:*.video2 video_name\n*Example:*.video2 shkini");
            }
            await _0x1bf22f("🔍");
            const _0x207b99 = await yts(_0x74101d);
            if (!_0x207b99.videos || _0x207b99.videos.length === 0) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ No results found");
            }
            const _0x229f83 = _0x207b99.videos[0];
            await _0x5b1b57("📥 *Fetching:* " + _0x229f83.title + "\n⏳ Wait...");
            const _0x31962d = await _0x323103.get(FGSI_API_URL, {
              params: {
                apikey: FGSI_API_KEY,
                url: _0x229f83.url,
                type: "mp4"
              },
              timeout: 30000,
              validateStatus: () => true
            });
            console.log("FGSI Response:", JSON.stringify(_0x31962d.data));
            let _0x390b98;
            let _0x1760be = _0x229f83.title;
            const _0x25f22e = _0x31962d.data;
            if (_0x25f22e?.message?.formats && Array.isArray(_0x25f22e.message.formats) && _0x25f22e.message.formats.length > 0) {
              const _0x37bba4 = _0x25f22e.message.formats;
              let _0x474919 = _0x37bba4.find(_0x1285fa => _0x1285fa.itag === 18) || _0x37bba4.find(_0x2b683a => _0x2b683a.qualityLabel === "360p") || _0x37bba4.find(_0x1c0ed8 => _0x1c0ed8.height === 360) || _0x37bba4[0];
              if (!_0x474919?.url) {
                throw new Error("Formats mile lekin URL nahi mila");
              }
              _0x390b98 = _0x474919.url;
              _0x1760be = _0x25f22e.message.title || _0x229f83.title;
            } else if (_0x25f22e?.message?.url) {
              _0x390b98 = _0x25f22e.message.url;
              _0x1760be = _0x25f22e.message.title || _0x229f83.title;
            } else {
              throw new Error("Video URL nahi mila API se");
            }
            if (!_0x390b98 || !_0x390b98.startsWith("http")) {
              throw new Error("Invalid download URL");
            }
            await _0x1bf22f("📥");
            const _0x4079a = await _0x323103({
              method: "GET",
              url: _0x390b98,
              responseType: "arraybuffer",
              timeout: 300000,
              maxRedirects: 10,
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                Referer: "https://www.youtube.com/",
                Origin: "https://www.youtube.com",
                Connection: "keep-alive",
                "Sec-Fetch-Dest": "video",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "cross-site",
                Range: "bytes=0-"
              }
            });
            let _0x348166 = Buffer.from(_0x4079a.data);
            let _0x4362d5 = _0x348166.length / 1024;
            if (_0x4362d5 < 0.1) {
              throw new Error("Downloaded file too small: " + _0x4362d5.toFixed(2) + "MB");
            }
            const _0xe054d1 = Date.now();
            _0x5cfb88 = _0x13f766.join(_0x1e1297.tmpdir(), "fgsi_vid_" + _0xe054d1 + ".mp4");
            _0x578b2f.writeFileSync(_0x5cfb88, _0x348166);
            _0xa81b44 = _0x13f766.join(_0x1e1297.tmpdir(), "fgsi_comp_" + _0xe054d1 + ".mp4");
            await _0x1f9ffe("ffmpeg -i \"" + _0x5cfb88 + "\" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -preset fast -crf 28 -c:a aac -b:a 128k -movflags +faststart -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" \"" + _0xa81b44 + "\" -y");
            _0x578b2f.unlinkSync(_0x5cfb88);
            let _0x21f28d = _0x578b2f.readFileSync(_0xa81b44);
            let _0x416caa = _0x21f28d.length / 1024;
            _0x578b2f.unlinkSync(_0xa81b44);
            if (_0x416caa > 63) {
              await _0x5b1b57("🗜️ *Compressing:* " + _0x416caa.toFixed(1) + "MB → Under 64MB");
              _0x5cfb88 = _0x13f766.join(_0x1e1297.tmpdir(), "fgsi_vid2_" + _0xe054d1 + ".mp4");
              _0x578b2f.writeFileSync(_0x5cfb88, _0x21f28d);
              await _0x1f9ffe("ffmpeg -i \"" + _0x5cfb88 + "\" -c:v libx264 -profile:v baseline -crf 32 -preset veryfast -s 640x360 -c:a aac -b:a 96k -movflags +faststart \"" + _0xa81b44 + "\" -y");
              _0x578b2f.unlinkSync(_0x5cfb88);
              _0x21f28d = _0x578b2f.readFileSync(_0xa81b44);
              _0x416caa = _0x21f28d.length / 1024;
              _0x578b2f.unlinkSync(_0xa81b44);
            }
            const _0x30720b = "🎬 *" + _0x1760be + "*\n💾 *Size:* " + _0x416caa.toFixed(1) + "MB\n⏱️ *Duration:* " + _0x229f83.timestamp + "\n📡 *Source:* FGSI API\n\n✅ " + global.BotName + " - Download Complete!";
            if (_0x416caa <= 63) {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                video: _0x21f28d,
                caption: _0x30720b,
                mimetype: "video/mp4"
              }, {
                quoted: _0x11be99
              });
            } else {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                document: _0x21f28d,
                fileName: _0x1760be.slice(0, 50) + ".mp4",
                mimetype: "video/mp4",
                caption: _0x30720b
              }, {
                quoted: _0x11be99
              });
            }
            await _0x1bf22f("✅");
          } catch (_0x5a84cf) {
            console.error("Video2 error:", _0x5a84cf);
            await _0x1bf22f("❌");
            try {
              if (_0x5cfb88 && _0x578b2f.existsSync(_0x5cfb88)) {
                _0x578b2f.unlinkSync(_0x5cfb88);
              }
              if (_0xa81b44 && _0x578b2f.existsSync(_0xa81b44)) {
                _0x578b2f.unlinkSync(_0xa81b44);
              }
            } catch {}
            let _0x595af4 = "Unknown error";
            if (_0x5a84cf.response?.status === 403) {
              _0x595af4 = "403 Forbidden: Video URL expire ho gaya. 1-2 min baad phir try karo ya koi aur video try karo";
            } else if (_0x5a84cf.message) {
              _0x595af4 = _0x5a84cf.message.substring(0, 200);
            } else if (_0x5a84cf.response?.data) {
              _0x595af4 = "API Error: " + JSON.stringify(_0x5a84cf.response.data).substring(0, 100);
            }
            _0x5b1b57("❌ *Error:* " + _0x595af4);
          }
          break;
        }
      case "dpx":
        {
          const _0x36a1c5 = require("axios");
          try {
            let _0x4dacc7 = _0x74101d.replace(/[^0-9]/g, "");
            if (!_0x4dacc7) {
              return _0x5b1b57("Number do:.dpx 923001234567");
            }
            await _0x1bf22f("🔍");
            const {
              data: _0x14dfd6
            } = await _0x36a1c5.get("https://api.princetechn.com/api/tools/getpp?number=" + _0x4dacc7 + "&apikey=prince");
            if (_0x14dfd6.status && _0x14dfd6.result) {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                image: {
                  url: _0x14dfd6.result
                },
                caption: "🖼️ *DP via API*\n📱 +" + _0x4dacc7
              }, {
                quoted: _0x11be99
              });
              await _0x1bf22f("✅");
            } else {
              throw new Error("API se bhi nahi mili");
            }
          } catch (_0x475972) {
            await _0x1bf22f("❌");
            _0x5b1b57("❌ DP nahi mili. User ne hide ki hui hai");
          }
          break;
        }
      case "getdp":
      case "pp":
      case "dp":
        {
          try {
            if (!_0x11be99.isGroup && !_0x74101d && !_0x11be99.quoted && _0x11be99.mentionedJid.length === 0) {
              return _0x5b1b57("📌 *Usage:*\n.dp @mention\n.dp 923001234567\nReply karke.dp likho");
            }
            await _0x1bf22f("🖼️");
            let _0x2e8545;
            if (_0x11be99.quoted) {
              _0x2e8545 = _0x11be99.quoted.sender;
            } else if (_0x11be99.mentionedJid && _0x11be99.mentionedJid[0]) {
              _0x2e8545 = _0x11be99.mentionedJid[0];
            } else if (_0x74101d) {
              let _0x35d4d1 = _0x74101d.replace(/[^0-9]/g, "");
              if (_0x35d4d1.startsWith("0")) {
                _0x35d4d1 = "92" + _0x35d4d1.slice(1);
              }
              if (!_0x35d4d1.startsWith("92") && _0x35d4d1.length === 10) {
                _0x35d4d1 = "92" + _0x35d4d1;
              }
              _0x2e8545 = _0x35d4d1 + "@s.whatsapp.net";
            } else {
              _0x2e8545 = _0x11be99.sender;
            }
            let _0xd4367a;
            let _0x3b9a7f = "HD";
            try {
              _0xd4367a = await _0x106db2.profilePictureUrl(_0x2e8545, "image");
            } catch (_0x4e00dd) {
              try {
                _0xd4367a = await _0x106db2.profilePictureUrl(_0x2e8545);
                _0x3b9a7f = "Normal";
              } catch (_0x5b356d) {
                await _0x1bf22f("❌");
                return _0x5b1b57("❌ *DP Nahi Mili*\n\n*Wajah:*\n1. User ne DP privacy \"Nobody\" rakhi hai\n2. User ne \"My Contacts\" rakhi hai aur bot ka number save nahi hai\n3. User ne DP lagayi hi nahi\n\n*Solution:* Us user ko bolo bot ka number save kare");
              }
            }
            let _0x303955 = _0x2e8545.split("@")[0];
            try {
              _0x303955 = await _0x106db2.getName(_0x2e8545);
            } catch {}
            const _0x35b9a4 = "🖼️ *Profile Picture*\n\n👤 *Name:* " + _0x303955 + "\n📱 *Number:* +" + _0x2e8545.split("@")[0] + "\n📊 *Quality:* " + _0x3b9a7f + "\n\n✅ " + global.BotName + " - Downloaded";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: {
                url: _0xd4367a
              },
              caption: _0x35b9a4
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x561133) {
            console.error("DP Error:", _0x561133);
            await _0x1bf22f("❌");
            _0x5b1b57("❌ *Error:* DP fetch nahi ho saki");
          }
          break;
        }
      case "reactch":
      case "reactchannel":
      case "chatreact":
        {
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎯 *CHANNEL REACTION*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📌 *USAGE:* \n.reactch <post-link> <emoji1> <emoji2> ...\n\n📌 *EXAMPLES:*\n.reactch https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21/3008 ❤️ 🙂 🖤\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
            }
            const _0x37ac96 = _0x74101d.trim().split(/\s+/);
            let _0x3a7745 = null;
            let _0x2fd64d = [];
            for (const _0xf2e973 of _0x37ac96) {
              if (_0xf2e973.includes("whatsapp.com") || _0xf2e973.includes("http://") || _0xf2e973.includes("https://")) {
                _0x3a7745 = _0xf2e973;
              } else {
                const _0x145d54 = /^[\p{Emoji}\uFE0F\u20E3]+$/u;
                if (_0xf2e973.includes(",")) {
                  const _0x45f0b5 = _0xf2e973.split(",");
                  for (const _0x3d4314 of _0x45f0b5) {
                    if (_0x3d4314.trim() && _0x145d54.test(_0x3d4314.trim())) {
                      _0x2fd64d.push(_0x3d4314.trim());
                    }
                  }
                } else if (_0x145d54.test(_0xf2e973)) {
                  _0x2fd64d.push(_0xf2e973);
                }
              }
            }
            if (!_0x3a7745) {
              const _0x1839d6 = _0x74101d.match(/https?:\/\/[^\s]+/);
              if (_0x1839d6) {
                _0x3a7745 = _0x1839d6[0];
              }
            }
            if (_0x2fd64d.length === 0) {
              return _0x5b1b57("❌ *No emoji found!*\n\nExample: .reactch [link] ❤️ 🙂 🖤");
            }
            if (!_0x3a7745) {
              return _0x5b1b57("❌ *No link found!*\n\nExample: .reactch https://whatsapp.com/channel/xxx/123 ❤️ 🙂");
            }
            let _0x23983c = null;
            let _0x39262a = null;
            const _0xa8189c = _0x3a7745.match(/\/(\d{3,})(?:\/|$)/);
            if (_0xa8189c) {
              _0x39262a = _0xa8189c[1];
              console.log("✅ Extracted Post ID: " + _0x39262a);
            }
            const _0x2b61c5 = _0x3a7745.match(/whatsapp\.com\/channel\/([^\/\s?]+)/i);
            if (_0x2b61c5) {
              const _0x376a8e = _0x2b61c5[1];
              console.log("✅ Extracted Invite Code: " + _0x376a8e);
              try {
                const _0x430775 = await _0x106db2.newsletterMetadata("invite", _0x376a8e);
                if (_0x430775 && _0x430775.id) {
                  _0x23983c = _0x430775.id;
                  console.log("✅ Got JID via API: " + _0x23983c);
                }
              } catch (_0x2bbf59) {
                console.log("API failed, trying direct JID: " + _0x2bbf59.message);
                if (_0x376a8e.length > 10 && /^\d+$/.test(_0x376a8e)) {
                  _0x23983c = _0x376a8e + "@newsletter";
                  console.log("✅ Using direct JID: " + _0x23983c);
                }
              }
            }
            if (!_0x23983c) {
              const _0x2ac439 = _0x3a7745.match(/(\d{15,}@newsletter)/);
              if (_0x2ac439) {
                _0x23983c = _0x2ac439[1];
                console.log("✅ Found direct JID: " + _0x23983c);
              }
            }
            if (!_0x23983c) {
              return _0x5b1b57("❌ *Could not extract channel info!*\n\n📌 *Your link:* " + _0x3a7745 + "\n\n💡 *Make sure the bot follows this channel first!*\nUse: .follow INVITE_CODE");
            }
            if (!_0x39262a) {
              return _0x5b1b57("⚠️ *Post ID not found!*\n\n📌 *Your link should end with the post number:*\nhttps://whatsapp.com/channel/INVITE_CODE/3008");
            }
            if (!global.activeBots) {
              global.activeBots = new Map();
            }
            if (_0x106db2 && _0x106db2.user && _0x106db2.user.id) {
              if (!global.activeBots.has(_0x106db2.user.id)) {
                global.activeBots.set(_0x106db2.user.id, _0x106db2);
                console.log("✓ Bot registered: " + _0x106db2.user.id);
              }
            }
            if (global.activeBots.size === 0 && _0x106db2 && _0x106db2.user && _0x106db2.user.id) {
              global.activeBots.set(_0x106db2.user.id, _0x106db2);
              console.log("✓ Fallback: Bot registered");
            }
            if (global.activeBots.size === 0) {
              return _0x5b1b57("❌ *No bots available!*\n\nPlease restart the bot and try again.");
            }
            const _0x261701 = [];
            for (let [_0x3b08c9, _0x2e5223] of global.activeBots) {
              if (_0x2e5223 && _0x2e5223.user && _0x2e5223.user.id) {
                _0x261701.push({
                  id: _0x3b08c9,
                  phone: _0x3b08c9.split("@")[0],
                  conn: _0x2e5223
                });
              }
            }
            if (_0x261701.length === 0) {
              return _0x5b1b57("❌ *No valid bot connections found!*");
            }
            await _0x1bf22f("🎯");
            await _0x5b1b57("⚡ *STARTING CHANNEL REACTION*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📡 *Channel:* " + _0x23983c.split("@")[0] + "\n📝 *Post ID:* " + _0x39262a + "\n🎭 *Emojis:* " + _0x2fd64d.join(" → ") + "\n🤖 *Bots:* " + _0x261701.length + " connected\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⏳ *Processing...*");
            let _0x10b513 = 0;
            let _0x1d7576 = 0;
            const _0x5bf06a = [];
            if (!global.lastReactTime) {
              global.lastReactTime = new Map();
            }
            for (let _0x1f8888 = 0; _0x1f8888 < _0x261701.length; _0x1f8888++) {
              const _0x49b47d = _0x261701[_0x1f8888];
              const _0x4691a9 = _0x2fd64d[_0x1f8888 % _0x2fd64d.length];
              const _0x3d70b2 = _0x49b47d.phone;
              try {
                const _0x3af792 = global.lastReactTime.get(_0x49b47d.id) || 0;
                const _0x196d7e = Date.now();
                if (_0x196d7e - _0x3af792 < 2000) {
                  await new Promise(_0xf7c453 => setTimeout(_0xf7c453, 2000 - (_0x196d7e - _0x3af792)));
                }
                if (_0x49b47d.conn && typeof _0x49b47d.conn.newsletterReactMessage === "function") {
                  await _0x49b47d.conn.newsletterReactMessage(_0x23983c, String(_0x39262a), _0x4691a9);
                } else if (_0x49b47d.conn && typeof _0x49b47d.conn.sendMessage === "function") {
                  await _0x49b47d.conn.sendMessage(_0x23983c, {
                    react: {
                      text: _0x4691a9,
                      key: {
                        remoteJid: _0x23983c,
                        id: String(_0x39262a)
                      }
                    }
                  });
                } else {
                  throw new Error("Connection not ready");
                }
                _0x10b513++;
                _0x5bf06a.push("✅ " + _0x3d70b2 + ": " + _0x4691a9);
                global.lastReactTime.set(_0x49b47d.id, Date.now());
                console.log("✓ " + _0x3d70b2 + " reacted with " + _0x4691a9);
              } catch (_0x550a5a) {
                _0x1d7576++;
                _0x5bf06a.push("❌ " + _0x3d70b2 + ": " + _0x550a5a.message.substring(0, 30));
                console.error("✗ " + _0x3d70b2 + " failed:", _0x550a5a.message);
              }
              await new Promise(_0x56926b => setTimeout(_0x56926b, 500));
            }
            const _0x2728bd = "🎯 *REACTION COMPLETE*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📡 *Channel:* " + _0x23983c.split("@")[0] + "\n📝 *Post ID:* " + _0x39262a + "\n🎭 *Emojis:* " + _0x2fd64d.join(" → ") + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 *RESULTS*\n├─ ✅ Success: " + _0x10b513 + "\n├─ ❌ Failed: " + _0x1d7576 + "\n└─ 🤖 Total Bots: " + _0x261701.length + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡ *" + global.Developer + "*";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0x2728bd
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f(_0x10b513 > 0 ? "✅" : "❌");
          } catch (_0x579c39) {
            console.error("React Error:", _0x579c39);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Error:* " + _0x579c39.message + "\n\n📌 *Try this format:*\n.reactch https://whatsapp.com/channel/INVITE_CODE/POST_ID ❤️ 🙂");
          }
          break;
        }
      case "baileys":
      case "bfunc":
      case "listfunc":
        {
          try {
            await _0x1bf22f("📚");
            const _0x1e3064 = Object.getOwnPropertyNames(Object.getPrototypeOf(_0x106db2)).filter(_0x3f8cdc => typeof _0x106db2[_0x3f8cdc] === "function" && _0x3f8cdc !== "constructor");
            const _0x194828 = Object.getOwnPropertyNames(_0x106db2).filter(_0x432318 => typeof _0x106db2[_0x432318] === "function");
            const _0x48a4c6 = [...new Set([..._0x1e3064, ..._0x194828])].sort();
            const _0x1aa775 = {
              message: [],
              newsletter: [],
              group: [],
              contact: [],
              auth: [],
              connection: [],
              media: [],
              store: [],
              utility: [],
              other: []
            };
            const _0x51d47f = {
              message: ["send", "reply", "forward", "copy", "read", "delete", "star", "text", "media", "image", "video", "audio", "document", "sticker", "contact", "location", "poll", "list", "button"],
              newsletter: ["newsletter"],
              group: ["group", "invite", "participant", "subject", "description", "ephemeral"],
              contact: ["profile", "status", "about", "business"],
              auth: ["auth", "creds", "key"],
              connection: ["socket", "connect", "pairing", "qr", "ws", "ev", "event"],
              media: ["download", "upload", "media", "message", "content"],
              store: ["store", "load", "fetch", "message"],
              utility: ["decode", "encode", "jid", "type", "presence", "serialize", "wait"]
            };
            for (const _0x5db487 of _0x48a4c6) {
              const _0x414733 = _0x5db487.toLowerCase();
              let _0x171d5a = false;
              for (const [_0x2110ba, _0xc95a88] of Object.entries(_0x51d47f)) {
                if (_0xc95a88.some(_0x1f15f5 => _0x414733.includes(_0x1f15f5))) {
                  _0x1aa775[_0x2110ba].push(_0x5db487);
                  _0x171d5a = true;
                  break;
                }
              }
              if (!_0x171d5a && !_0x5db487.startsWith("_")) {
                _0x1aa775.other.push(_0x5db487);
              }
            }
            let _0x469037 = "╭──〘 *" + global.BotName + " - BAILEYS FUNCTIONS* 〙──\n";
            _0x469037 += "│  📊 Total: " + _0x48a4c6.length + " functions\n";
            _0x469037 += "│  🤖 Bot: " + (_0x106db2.user?.id?.split("@")[0] || "Connected") + "\n";
            _0x469037 += "│\n";
            for (const [_0x2eb235, _0x262533] of Object.entries(_0x1aa775)) {
              if (_0x262533.length > 0) {
                const _0x4554d2 = {
                  message: "📱",
                  newsletter: "📡",
                  group: "👥",
                  contact: "👤",
                  auth: "🔐",
                  connection: "🌐",
                  media: "🎨",
                  store: "💾",
                  utility: "🔧",
                  other: "📦"
                }[_0x2eb235] || "•";
                _0x469037 += "├─" + _0x4554d2 + " *" + _0x2eb235.toUpperCase() + "* (" + _0x262533.length + ")\n";
                for (const _0x482a50 of _0x262533) {
                  _0x469037 += "│  ├─ " + _0x482a50 + "\n";
                }
                _0x469037 += "│\n";
              }
            }
            _0x469037 += "╰──────────────────────────────────\n";
            _0x469037 += "📌 *Use:* .callfunc <function_name> <args>\n";
            _0x469037 += "📌 *Example:* .callfunc newsletterMetadata XjSkdjh\n";
            _0x469037 += "⚡ *" + global.Developer + "*";
            const _0x52a295 = "./baileys_complete_functions.txt";
            fs.writeFileSync(_0x52a295, _0x469037);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              document: {
                url: _0x52a295
              },
              mimetype: "text/plain",
              fileName: "baileys_complete_functions.txt",
              caption: "📚 *" + global.BotName + " - COMPLETE BAILEYS FUNCTIONS LIST*\n📊 Total: " + _0x48a4c6.length + " functions\n📁 File attached with full list"
            });
            if (_0x469037.length <= 40000) {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                text: _0x469037
              }, {
                quoted: _0x11be99
              });
            }
            fs.unlinkSync(_0x52a295);
            await _0x1bf22f("✅");
          } catch (_0x282eaf) {
            console.error(_0x282eaf);
            await _0x1bf22f("❌");
            _0x5b1b57("Error: " + _0x282eaf.message);
          }
          break;
        }
      case "tiktok2":
      case "tt2":
      case "tiktokdl2":
        {
          try {
            if (!_0x74101d && !_0x11be99.quoted) {
              return _0x5b1b57("🎵 *TikTok Downloader v2*\n━━━━━━━━━━━━━━━━━━━━━━\n📌 *Usage:* .tt2 <url>\n📌 *Example:* .tt2 https://vt.tiktok.com/xxxxx\n\n🎵 *To download audio:*\n• After video download, reply with \".tt2 1\"\n• Or type: .tt2 1 (replying to video)\n\n⚡ *Features:*\n├─ No Watermark Video\n├─ Photo/Slideshow Support\n└─ Manual Audio Download\n━━━━━━━━━━━━━━━━━━━━━━");
            }
            if (_0x11be99.quoted && (_0x74101d === "1" || _0x74101d === "audio" || _0x74101d === "mp3")) {
              const _0x1b7be9 = _0x11be99.quoted;
              const _0x4d2d7d = _0x1b7be9.key;
              let _0x33c9b9 = null;
              if (global.tiktokAudioCache && _0x4d2d7d.id) {
                _0x33c9b9 = global.tiktokAudioCache[_0x4d2d7d.id];
                console.log("Found audio in cache for " + _0x4d2d7d.id + ": " + _0x33c9b9);
              }
              if (!_0x33c9b9 && _0x1b7be9.msg?.caption) {
                const _0x145621 = _0x1b7be9.msg.caption;
                const _0x4aea7d = _0x145621.match(/🔗 Audio URL: (https?:\/\/[^\s]+)/);
                if (_0x4aea7d) {
                  _0x33c9b9 = _0x4aea7d[1];
                }
              }
              if (_0x33c9b9) {
                try {
                  await _0x1bf22f("🎵");
                  await _0x5b1b57("📥 *Downloading audio...*⏳");
                  await _0x106db2.sendMessage(_0x11be99.chat, {
                    audio: {
                      url: _0x33c9b9
                    },
                    mimetype: "audio/mpeg",
                    fileName: "tiktok_audio_" + Date.now() + ".mp3",
                    ptt: false,
                    contextInfo: {
                      externalAdReply: {
                        title: "🎵 " + global.BotName + " - TikTok Audio",
                        body: "Download Complete!",
                        thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                        mediaType: 1
                      }
                    }
                  }, {
                    quoted: _0x11be99
                  });
                  await _0x1bf22f("✅");
                  if (global.tiktokAudioCache && _0x4d2d7d.id) {
                    delete global.tiktokAudioCache[_0x4d2d7d.id];
                  }
                } catch (_0x4e2afd) {
                  console.error("Audio download error:", _0x4e2afd);
                  await _0x5b1b57("❌ *Failed to download audio*\n\nError: " + _0x4e2afd.message);
                }
                return;
              } else {
                return _0x5b1b57("❌ *No audio found!*\n\nPlease use .tt2 command first to download video, then reply with \"1\" for audio.\n\n*Note:* Audio request only works within 5 minutes of video download.");
              }
            }
            const _0x2944e0 = _0x74101d.trim();
            const _0x341f76 = /(tiktok\.com|vt\.tiktok\.com|vm\.tiktok\.com|tiktok\.com\/@|tiktok\.com\/t)/i;
            if (!_0x341f76.test(_0x2944e0)) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ *Invalid TikTok URL!*\n\nPlease send a valid TikTok video link.\n\nExample: .tt2 https://vt.tiktok.com/xxxxx");
            }
            await _0x1bf22f("⏳");
            await _0x5b1b57("📥 *Processing TikTok...*\n⏳ Please wait");
            const _0x2bd88d = new URLSearchParams({
              q: _0x2944e0,
              cursor: "0",
              page: "0",
              lang: "id"
            }).toString();
            const _0x1d1a49 = await axios.post("https://savetik.io/api/ajaxSearch", _0x2bd88d, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                Origin: "https://savetik.io",
                Referer: "https://savetik.io/id/download-tiktok-photos",
                Accept: "*/*"
              },
              timeout: 20000
            });
            const _0x174f04 = _0x1d1a49.data;
            const _0x194d97 = typeof _0x174f04.data === "string" ? _0x174f04.data : "";
            if (!_0x194d97) {
              throw new Error("Failed to fetch video data");
            }
            const _0x12fdb9 = cheerio.load(_0x194d97);
            const _0x196824 = _0x12fdb9("a:contains(\"Unduh MP4 [1]\")").attr("href") || _0x12fdb9("a:contains(\"Unduh MP4 [2]\")").attr("href") || _0x12fdb9("a:contains(\"Unduh MP4 HD\")").attr("href") || _0x12fdb9("a:contains(\"Download MP4 [1]\")").attr("href") || _0x12fdb9("a:contains(\"Download MP4 [2]\")").attr("href") || _0x12fdb9("a:contains(\"Download MP4 HD\")").attr("href") || null;
            const _0x7211e6 = _0x12fdb9("a:contains(\"Unduh MP3\")").attr("href") || _0x12fdb9("a:contains(\"Download MP3\")").attr("href") || null;
            const _0x222e0a = [];
            _0x12fdb9(".photo-list ul.download-box li").each((_0x585fd5, _0xad089c) => {
              const _0x14a046 = _0x12fdb9(_0xad089c).find("a[title='Unduh Gambar']").attr("href");
              if (_0x14a046) {
                _0x222e0a.push(_0x14a046);
              }
            });
            let _0x29357c = "TikTok Video";
            let _0x252d4a = "Unknown";
            try {
              const _0x38da70 = _0x12fdb9("h2").first().text();
              if (_0x38da70) {
                _0x29357c = _0x38da70.substring(0, 100);
              }
              const _0x4e9e71 = _0x12fdb9(".user-info .username").text();
              if (_0x4e9e71) {
                _0x252d4a = _0x4e9e71;
              }
            } catch (_0x441fb6) {}
            if (_0x196824) {
              let _0x120317 = "🎵 *TIKTOK VIDEO*\n━━━━━━━━━━━━━━━━━━━━━━\n📹 *Type:* Video\n📝 *Title:* " + _0x29357c.substring(0, 50) + "\n👤 *Author:* " + _0x252d4a + "\n━━━━━━━━━━━━━━━━━━━━━━\n⚡ *" + global.Developer + "*";
              if (_0x7211e6) {
                _0x120317 += "\n🔗 Audio URL: " + _0x7211e6;
              }
              const _0x25a130 = {
                video: {
                  url: _0x196824
                },
                caption: _0x120317,
                mimetype: "video/mp4",
                contextInfo: {
                  externalAdReply: {
                    title: "🎵 " + global.BotName + " - TikTok Video",
                    body: _0x29357c.substring(0, 50),
                    thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                    sourceUrl: _0x2944e0,
                    mediaType: 1
                  }
                }
              };
              const _0x17ae19 = await _0x106db2.sendMessage(_0x11be99.chat, _0x25a130, {
                quoted: _0x11be99
              });
              if (_0x7211e6 && _0x17ae19 && _0x17ae19.key) {
                if (!global.tiktokAudioCache) {
                  global.tiktokAudioCache = {};
                }
                global.tiktokAudioCache[_0x17ae19.key.id] = _0x7211e6;
                console.log("Stored audio for " + _0x17ae19.key.id + ": " + _0x7211e6);
                setTimeout(() => {
                  if (global.tiktokAudioCache && global.tiktokAudioCache[_0x17ae19.key.id]) {
                    delete global.tiktokAudioCache[_0x17ae19.key.id];
                    console.log("Cleaned up audio for " + _0x17ae19.key.id);
                  }
                }, 600000);
              }
              await _0x1bf22f("✅");
            } else if (_0x222e0a.length > 0) {
              let _0x388588 = "🖼️ *TIKTOK SLIDESHOW*\n━━━━━━━━━━━━━━━━━━━━━━\n📸 *Type:* " + _0x222e0a.length + " Photo(s)\n📝 *Title:* " + _0x29357c.substring(0, 50) + "\n👤 *Author:* " + _0x252d4a + "\n━━━━━━━━━━━━━━━━━━━━━━\n⚡ *" + global.Developer + "*";
              let _0x11bfdd = null;
              for (let _0x309973 = 0; _0x309973 < _0x222e0a.length; _0x309973++) {
                const _0x2d3651 = _0x309973 === 0 ? _0x388588 : "🖼️ *Image " + (_0x309973 + 1) + "/" + _0x222e0a.length + "*";
                const _0x489847 = await _0x106db2.sendMessage(_0x11be99.chat, {
                  image: {
                    url: _0x222e0a[_0x309973]
                  },
                  caption: _0x2d3651
                }, {
                  quoted: _0x11be99
                });
                if (_0x309973 === _0x222e0a.length - 1 && _0x489847 && _0x489847.key) {
                  _0x11bfdd = _0x489847.key;
                }
                if (_0x309973 < _0x222e0a.length - 1) {
                  await sleep(1000);
                }
              }
              if (_0x7211e6 && _0x11bfdd) {
                if (!global.tiktokAudioCache) {
                  global.tiktokAudioCache = {};
                }
                global.tiktokAudioCache[_0x11bfdd.id] = _0x7211e6;
                console.log("Stored audio for " + _0x11bfdd.id + ": " + _0x7211e6);
                setTimeout(() => {
                  if (global.tiktokAudioCache && global.tiktokAudioCache[_0x11bfdd.id]) {
                    delete global.tiktokAudioCache[_0x11bfdd.id];
                    console.log("Cleaned up audio for " + _0x11bfdd.id);
                  }
                }, 600000);
              }
              await _0x1bf22f("✅");
            } else {
              throw new Error("No media found in this TikTok post");
            }
          } catch (_0x159874) {
            console.error("TikTok v2 Error:", _0x159874);
            await _0x1bf22f("❌");
            let _0x4a7f3a = _0x159874.message;
            if (_0x159874.response?.status === 403) {
              _0x4a7f3a = "Access denied. Try again in a few seconds.";
            } else if (_0x159874.code === "ECONNABORTED") {
              _0x4a7f3a = "Request timeout. Server is slow, try again.";
            }
            await _0x5b1b57("❌ *Download Failed!*\n\n📛 *Error:* " + _0x4a7f3a + "\n\n💡 *Troubleshooting:*\n• Check if URL is correct\n• Try a different TikTok link\n• Try again after a few seconds\n\n📌 *Example:* .tt2 https://vt.tiktok.com/xxxxx");
          }
          break;
        }
      case "tt":
      case "tiktok":
        {
          try {
            await _0x1bf22f("⏳");
            if (!_0xcf6911[0]) {
              return _0x5b1b57("❌ *Format:* .tt <tiktok_url>");
            }
            const _0x162770 = _0xcf6911[0];
            if (!/https?:\/\/(vm|vt|www|tiktok)\.tiktok\.com/i.test(_0x162770)) {
              return _0x5b1b57("❌ Invalid TikTok URL");
            }
            class _0x59acd5 {
              constructor() {
                this.apiUrl = "https://myapi.app/api";
                this.sitename = "tikmate.cc";
              }
              async analyzeVideo(_0x149793) {
                try {
                  const _0x2e73c2 = await axios.post(this.apiUrl + "/analyze", new URLSearchParams({
                    url: _0x149793,
                    sitename: this.sitename
                  }), {
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    timeout: 30000
                  });
                  const _0x5c1755 = _0x2e73c2.data;
                  if (_0x5c1755.error === true) {
                    throw new Error("Failed to analyze video");
                  }
                  let _0x41c264 = _0x5c1755.medias.filter(_0x486c6c => _0x486c6c.quality !== "watermark");
                  _0x41c264 = _0x41c264.map(_0x3da84b => ({
                    ..._0x3da84b,
                    url: _0x3da84b.url || _0x3da84b.link || _0x3da84b.download_url,
                    extension: _0x3da84b.extension?.toUpperCase() || "MP4",
                    quality: this.formatQuality(_0x3da84b.quality)
                  }));
                  return {
                    id: _0x5c1755.id,
                    title: _0x5c1755.title || "TikTok Video",
                    author: _0x5c1755.author || "Unknown",
                    thumbnail: _0x5c1755.thumbnail,
                    duration: _0x5c1755.duration,
                    filename: _0x5c1755.filename,
                    medias: _0x41c264.reverse()
                  };
                } catch (_0x3cff4c) {
                  console.error("Error analyzing video:", _0x3cff4c.message);
                  throw _0x3cff4c;
                }
              }
              formatQuality(_0x1ce3f5) {
                const _0x3a421c = {
                  hd_no_watermark: "1080p",
                  no_watermark: "720p",
                  audio: "128kbps"
                };
                return _0x3a421c[_0x1ce3f5] || _0x1ce3f5 || "480p";
              }
              getDownloadUrl(_0x3c3c00) {
                return this.apiUrl + "/download?url=" + encodeURIComponent(_0x3c3c00) + "&sitename=" + this.sitename;
              }
            }
            const _0x2862da = new _0x59acd5();
            const _0x78aaf6 = await _0x2862da.analyzeVideo(_0x162770);
            if (!_0x78aaf6 || !_0x78aaf6.medias || _0x78aaf6.medias.length === 0) {
              return _0x5b1b57("❌ Failed to fetch video data");
            }
            const _0x474ec8 = _0x78aaf6.medias.find(_0x51c372 => _0x51c372.quality === "1080p") || _0x78aaf6.medias.find(_0x6d2ffc => _0x6d2ffc.quality === "720p") || _0x78aaf6.medias[0];
            if (!_0x474ec8 || !_0x474ec8.url) {
              return _0x5b1b57("❌ Video URL not found");
            }
            const _0x212df8 = _0x2862da.getDownloadUrl(_0x474ec8.url);
            const _0x27ae27 = "🎵 *TikTok Video*\n━━━━━━━━━━━━━━━\n📹 *Title:* " + (_0x78aaf6.title || "N/A") + "\n👤 *Author:* " + (_0x78aaf6.author || "N/A") + "\n⏱️ *Duration:* " + (_0x78aaf6.duration || "N/A") + " seconds\n📱 *Quality:* " + (_0x474ec8.quality || "N/A") + "\n━━━━━━━━━━━━━━━\n> Powered by " + global.Developer;
            await _0x106db2.sendMessage(_0x11be99.chat, {
              video: {
                url: _0x212df8
              },
              caption: _0x27ae27,
              mimetype: "video/mp4"
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x5ed949) {
            console.error("TikTok error:", _0x5ed949);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ Error: " + _0x5ed949.message);
          }
          break;
        }
      case "dis-conn":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!q) {
              return _0x5b1b57("Usage: .dis-conn 923###");
            }
            let _0x41bdae = _0x74101d.split("|")[0];
            let _0x252f81 = _0x11be99.mentionedJid[0] ? _0x11be99.mentionedJid[0] : _0x11be99.quoted ? _0x11be99.quoted.sender : _0x41bdae.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            var _0x12b491 = await _0x106db2.onWhatsApp(_0x252f81);
            if (_0x12b491.length == 0) {
              return _0x5b1b57("The number is not registered on WhatsApp");
            }
            const _0x22e38e = _0x252f81;
            const _0x3bf3fa = "./lib2/pairing/" + _0x22e38e;
            const _0x371273 = _0x49b101 => {
              if (fs.existsSync(_0x49b101)) {
                fs.readdirSync(_0x49b101).forEach(_0x2f981d => {
                  const _0x4bbac5 = path.join(_0x49b101, _0x2f981d);
                  if (fs.lstatSync(_0x4bbac5).isDirectory()) {
                    _0x371273(_0x4bbac5);
                  } else {
                    fs.unlinkSync(_0x4bbac5);
                  }
                });
                fs.rmdirSync(_0x49b101);
                console.log("Successfully deleted session for user: " + _0x22e38e);
              }
            };
            _0x371273(_0x3bf3fa);
            await _0x5b1b57("✅ Successfully removed bot access for: " + _0x22e38e);
          } catch (_0x4cbc20) {
            console.error("Delete session error:", _0x4cbc20);
            await _0x5b1b57("❌ Failed to remove bot access: " + _0x4cbc20.message);
          }
          break;
        }
      case "pair":
        {
          try {
            if (!q) {
              return _0x5b1b57("Usage: .pair 923###");
            }
            let _0x45fcf9 = _0x74101d.split("|")[0];
            let _0x40f5a1 = _0x11be99.mentionedJid[0] ? _0x11be99.mentionedJid[0] : _0x11be99.quoted ? _0x11be99.quoted.sender : _0x45fcf9.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            var _0x12b491 = await _0x106db2.onWhatsApp(_0x40f5a1);
            if (_0x12b491.length == 0) {
              return _0x5b1b57("The number is not registered on WhatsApp");
            }
            const _0x1b6a73 = require("./rentbot.js");
            await _0x1b6a73(_0x40f5a1);
            await sleep(4000);
            const _0x10e329 = fs.readFileSync("./lib2/pairing/pairing.json", "utf-8");
            const _0x2da520 = JSON.parse(_0x10e329);
            await _0x5b1b57("✅ *Bot Paired Successfully*\n\nCode: " + _0x2da520.code + "\n\nShare this code with the user.");
            await _0x5b1b57("" + _0x2da520.code);
          } catch (_0x3f7e42) {
            console.error("Pair error:", _0x3f7e42);
            await _0x5b1b57("❌ Error: " + _0x3f7e42.message);
          }
          break;
        }
      case "channel":
        {
          try {
            await _0x5b1b57("📢 *Updates Channel:*\nhttps://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21\n\nJoin for latest updates!");
          } catch (_0x10f086) {
            console.error("Channel error:", _0x10f086);
            await _0x5b1b57("❌ Error: " + _0x10f086.message);
          }
          break;
        }
      case "owner":
        {
          try {
            await _0x5b1b57("👑 *Bot Owner:*\n" + global.Developer + "\n\nContact for any issues or queries.");
          } catch (_0xb07905) {
            console.error("Owner error:", _0xb07905);
            await _0x5b1b57("❌ Error: " + _0xb07905.message);
          }
          break;
        }
      case "checkidd":
        {
          try {
            await _0x5b1b57("Chat ID: " + _0x11be99.chat);
          } catch (_0x5e0770) {
            console.error("CheckID error:", _0x5e0770);
            await _0x5b1b57("❌ Error: " + _0x5e0770.message);
          }
          break;
        }
      case "addnumber":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!_0xcf6911[0]) {
              return _0x5b1b57("Usage: .addnumber 923123456789 30\n(30 = days)");
            }
            const _0x30586e = _0xcf6911[0].replace(/[^0-9]/g, "");
            if (_0x30586e.length < 11) {
              return _0x5b1b57("❌ Invalid number!");
            }
            const _0x273e1d = parseInt(_0xcf6911[1]) || 30;
            const _0x510b43 = moment().format("YYYY-MM-DD");
            const _0x5f4d01 = await _0x5f29d0();
            const _0x2e5385 = _0x5f4d01.findIndex(_0x12bf11 => String(_0x12bf11.number).trim() === _0x30586e);
            let _0x586307;
            if (_0x2e5385 !== -1) {
              _0x5f4d01[_0x2e5385] = {
                number: _0x30586e,
                addDate: _0x510b43,
                days: _0x273e1d
              };
              _0x586307 = "🔄 *Updated user*\n📱 " + _0x30586e + "\n📅 " + _0x273e1d + " days\n➕ " + _0x510b43;
              await _0x1bf22f("🔄");
            } else {
              _0x5f4d01.push({
                number: _0x30586e,
                addDate: _0x510b43,
                days: _0x273e1d
              });
              _0x586307 = "✅ *Added user*\n📱 " + _0x30586e + "\n📅 " + _0x273e1d + " days\n➕ " + _0x510b43;
              await _0x1bf22f("✅");
            }
            await _0x42a624(_0x5f4d01, "Add/Update: " + _0x30586e + " for " + _0x273e1d + " days");
            approvedCache = {
              numbers: [],
              expiry: {},
              lastUpdate: 0
            };
            await _0x5b1b57(_0x586307);
          } catch (_0x4413e5) {
            console.error("Add number error:", _0x4413e5);
            await _0x5b1b57("❌ Error: " + _0x4413e5.message);
          }
          break;
        }
      case "removenumber":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!_0xcf6911[0]) {
              return _0x5b1b57("Usage: .removenumber 923123456789");
            }
            const _0x4a3bcd = _0xcf6911[0].replace(/[^0-9]/g, "");
            let _0x187dc7 = await _0x5f29d0();
            const _0x556adc = _0x187dc7.length;
            _0x187dc7 = _0x187dc7.filter(_0x32880b => String(_0x32880b.number).trim() !== _0x4a3bcd);
            if (_0x187dc7.length === _0x556adc) {
              await _0x1bf22f("❌");
              return _0x5b1b57("❌ Number " + _0x4a3bcd + " not found");
            }
            await _0x42a624(_0x187dc7, "Remove: " + _0x4a3bcd);
            await _0x1bf22f("🗑️");
            await _0x5b1b57("🗑️ *Removed*\n📱 " + _0x4a3bcd + "\n✅ Removed from database");
            approvedCache = {
              numbers: [],
              expiry: {},
              lastUpdate: 0
            };
          } catch (_0x4e46fc) {
            console.error("Remove number error:", _0x4e46fc);
            await _0x5b1b57("❌ Error: " + _0x4e46fc.message);
          }
          break;
        }
      case "listnumbers":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            const _0x22bcaf = await _0x5f29d0();
            if (!Array.isArray(_0x22bcaf) || _0x22bcaf.length === 0) {
              return _0x5b1b57("📭 Database is empty");
            }
            _0x22bcaf.sort((_0x37417d, _0x5db8ae) => new Date(_0x5db8ae.addDate || 0) - new Date(_0x37417d.addDate || 0));
            let _0x3c5e7a = "📋 *" + global.BotName + " DATABASE - " + _0x22bcaf.length + " USERS* 📋\n\n";
            let _0x3b3193 = 0;
            let _0x46f08e = 0;
            let _0x2865a8 = 0;
            _0x22bcaf.forEach((_0x4a50bc, _0x37ab88) => {
              const _0x4b0b8e = String(_0x4a50bc.number || "").trim();
              const _0xaf25ab = parseInt(_0x4a50bc.days) || 0;
              const _0x3e7aea = _0x4a50bc.addDate || "Unknown";
              let _0x2b6d15 = "❌";
              let _0x4e3b93 = "";
              if (_0xaf25ab > 0 && _0x3e7aea !== "Unknown") {
                const _0x3a9cac = moment(_0x3e7aea).add(_0xaf25ab, "days");
                const _0x3563a6 = _0x3a9cac.diff(moment(), "days");
                if (_0x3563a6 > 0) {
                  _0x2b6d15 = "✅";
                  _0x3b3193++;
                  _0x4e3b93 = _0x3563a6 + " days left";
                } else {
                  _0x2b6d15 = "⏰";
                  _0x46f08e++;
                  _0x4e3b93 = "Expired";
                }
              } else {
                _0x2b6d15 = "♾️";
                _0x2865a8++;
                _0x4e3b93 = "Lifetime";
              }
              _0x3c5e7a += _0x37ab88 + 1 + ". " + _0x2b6d15 + " " + _0x4b0b8e + "\n   📅 " + _0xaf25ab + " days | 📆 " + _0x3e7aea + "\n   ⏰ " + _0x4e3b93 + "\n\n";
            });
            _0x3c5e7a += "━━━━━━━━━━━━━━━━━━━━\n📊 *SUMMARY*\n👥 Total: " + _0x22bcaf.length + "\n✅ Active: " + _0x3b3193 + "\n⏰ Expired: " + _0x46f08e + "\n♾️ Lifetime: " + _0x2865a8 + "\n🕐 " + moment().format("DD/MM/YY HH:mm") + "\n";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0x3c5e7a,
              contextInfo: {
                externalAdReply: {
                  title: "📊 Database Stats",
                  body: _0x22bcaf.length + " users | " + _0x3b3193 + " active",
                  thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  sourceUrl: "https://github.com/5usama/usama-mini-database",
                  mediaType: 1
                }
              }
            });
          } catch (_0x2a7d1f) {
            console.error("List numbers error:", _0x2a7d1f);
            await _0x5b1b57("❌ Error: " + _0x2a7d1f.message);
          }
          break;
        }
      case "checknumber":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!_0xcf6911[0]) {
              return _0x5b1b57("Usage: .checknumber 923123456789");
            }
            const _0x238c5b = _0xcf6911[0].replace(/[^0-9]/g, "");
            const _0x414f80 = await _0x5f29d0();
            const _0x29b509 = _0x414f80.find(_0x246589 => String(_0x246589.number).trim() === _0x238c5b);
            if (!_0x29b509) {
              return _0x5b1b57("❌ " + _0x238c5b + " not found in database");
            }
            let _0x651e8f = "🔍 *NUMBER INFO* 🔍\n\n📱 Number: " + _0x29b509.number + "\n📅 Days: " + (_0x29b509.days || "Lifetime") + "\n➕ Added: " + (_0x29b509.addDate || "Unknown") + "\n";
            if (_0x29b509.days > 0 && _0x29b509.addDate) {
              const _0x123742 = moment(_0x29b509.addDate).add(_0x29b509.days, "days");
              const _0xa86a5e = _0x123742.diff(moment(), "days");
              const _0x42c513 = _0x123742.format("DD MMM YYYY");
              _0x651e8f += "⏰ Expiry: " + _0x42c513 + "\n📅 Days Left: " + _0xa86a5e + "\n✅ Status: " + (_0xa86a5e > 0 ? "Active" : "Expired") + "\n";
            } else {
              _0x651e8f += "⏰ Expiry: Lifetime ♾️\n✅ Status: Active\n";
            }
            await _0x5b1b57(_0x651e8f);
          } catch (_0x48c965) {
            console.error("Check number error:", _0x48c965);
            await _0x5b1b57("❌ Error: " + _0x48c965.message);
          }
          break;
        }
      case "searchnumber":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!_0xcf6911[0]) {
              return _0x5b1b57("Usage: .searchnumber 923");
            }
            const _0x312658 = _0xcf6911[0].replace(/[^0-9]/g, "");
            const _0x220814 = await _0x5f29d0();
            const _0x1cabbd = _0x220814.filter(_0x56de68 => String(_0x56de68.number).includes(_0x312658));
            if (_0x1cabbd.length === 0) {
              return _0x5b1b57("❌ No numbers found with \"" + _0x312658 + "\"");
            }
            let _0x4edddf = "🔍 *SEARCH RESULTS* 🔍\n\nSearch: " + _0x312658 + "\nFound: " + _0x1cabbd.length + " numbers\n\n";
            _0x1cabbd.forEach((_0x24d8c4, _0x25d534) => {
              _0x4edddf += _0x25d534 + 1 + ". " + _0x24d8c4.number + "\n   📅 " + (_0x24d8c4.days || "Lifetime") + " days\n   📆 " + (_0x24d8c4.addDate || "Unknown") + "\n\n";
            });
            await _0x5b1b57(_0x4edddf);
          } catch (_0x1409c2) {
            console.error("Search number error:", _0x1409c2);
            await _0x5b1b57("❌ Error: " + _0x1409c2.message);
          }
          break;
        }
      case "updatedays":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            if (!_0xcf6911[0] || !_0xcf6911[1]) {
              return _0x5b1b57("Usage: .updatedays 923123456789 60");
            }
            const _0x1e80e4 = _0xcf6911[0].replace(/[^0-9]/g, "");
            const _0x35a289 = parseInt(_0xcf6911[1]) || 30;
            const _0x32f557 = await _0x5f29d0();
            const _0x41b04c = _0x32f557.findIndex(_0x2c4198 => String(_0x2c4198.number).trim() === _0x1e80e4);
            if (_0x41b04c === -1) {
              return _0x5b1b57("❌ " + _0x1e80e4 + " not found in database");
            }
            _0x32f557[_0x41b04c].days = _0x35a289;
            _0x32f557[_0x41b04c].addDate = moment().format("YYYY-MM-DD");
            await _0x42a624(_0x32f557, "Update days: " + _0x1e80e4 + " to " + _0x35a289 + " days");
            await _0x1bf22f("🔄");
            await _0x5b1b57("🔄 *Updated*\n📱 " + _0x1e80e4 + "\n📅 New days: " + _0x35a289 + "\n⏰ Expiry: " + moment().add(_0x35a289, "days").format("DD/MM/YYYY"));
            approvedCache = {
              numbers: [],
              expiry: {},
              lastUpdate: 0
            };
          } catch (_0x241302) {
            console.error("Update days error:", _0x241302);
            await _0x5b1b57("❌ Error: " + _0x241302.message);
          }
          break;
        }
      case "dbstats":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            const _0x205a46 = await _0x5f29d0();
            let _0x201075 = "📊 *" + global.BotName + " DATABASE STATISTICS* 📊\n\n👥 Total Users: " + _0x205a46.length + "\n";
            let _0x5ab5e9 = 0;
            let _0x11ae90 = 0;
            let _0x5ae8ae = 0;
            let _0x21eb9b = 0;
            let _0x3be70c = 0;
            let _0x4f564a = 0;
            _0x205a46.forEach(_0x1e0b37 => {
              const _0x54265b = parseInt(_0x1e0b37.days) || 0;
              const _0x4f89d3 = _0x1e0b37.addDate;
              if (_0x54265b > 0 && _0x4f89d3) {
                const _0x2cf7aa = moment(_0x4f89d3).add(_0x54265b, "days");
                const _0x4d8077 = _0x2cf7aa.diff(moment(), "days");
                if (_0x4d8077 > 0) {
                  _0x5ab5e9++;
                } else {
                  _0x11ae90++;
                }
                const _0x4c4032 = moment(_0x4f89d3);
                if (_0x4c4032.isSame(moment(), "day")) {
                  _0x21eb9b++;
                }
                if (_0x4c4032.isAfter(moment().subtract(7, "days"))) {
                  _0x3be70c++;
                }
                if (_0x4c4032.isAfter(moment().subtract(30, "days"))) {
                  _0x4f564a++;
                }
              } else {
                _0x5ae8ae++;
              }
            });
            _0x201075 += "✅ Active: " + _0x5ab5e9 + "\n⏰ Expired: " + _0x11ae90 + "\n♾️ Lifetime: " + _0x5ae8ae + "\n\n📈 *RECENT ACTIVITY*\n📅 Today: " + _0x21eb9b + " added\n📅 This week: " + _0x3be70c + " added\n📅 This month: " + _0x4f564a + " added\n\n🔗 *DATABASE INFO*\n📂 URL: " + DB_URL + "\n🔄 Last sync: " + moment().format("DD/MM HH:mm") + "\n";
            await _0x5b1b57(_0x201075);
          } catch (_0x246f35) {
            console.error("DB Stats error:", _0x246f35);
            await _0x5b1b57("❌ Error: " + _0x246f35.message);
          }
          break;
        }
      case "clearcache":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            approvedCache = {
              numbers: [],
              expiry: {},
              lastUpdate: 0
            };
            await _0x1bf22f("🧹");
            await _0x5b1b57("🧹 *Cache Cleared*\n✅ Database cache has been reset\n🔄 Next fetch will get fresh data");
          } catch (_0x35c21e) {
            console.error("Clear cache error:", _0x35c21e);
            await _0x5b1b57("❌ Error: " + _0x35c21e.message);
          }
          break;
        }
      case "adminlist":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            const _0x5be197 = "\n╭─「 👑 *" + global.BotName + " ADMINISTRATORS* 👑 」─╮\n│\n│ *Bot Administrators:*\n│ 1. " + global.Developer + "\n│ 2. 923497507427 - Admin 2\n│ 3. 923010967206 - Admin 3  \n│ 4. 923271636436 - Admin 4\n│\n│ ⚙️ *Admin Commands:*\n│ ├─ .addnumber [num] [days]\n│ ├─ .removenumber [num]\n│ ├─ .listnumbers\n│ ├─ .checknumber [num]\n│ ├─ .searchnumber [num]\n│ ├─ .updatedays [num] [days]\n│ ├─ .dbstats\n│ ├─ .clearcache\n│\n│ 📞 *Contact:* " + global.Developer + "\n│\n╰─────────────────────╯";
            await _0x5b1b57(_0x5be197);
          } catch (_0x302c43) {
            console.error("Admin list error:", _0x302c43);
            await _0x5b1b57("❌ Error: " + _0x302c43.message);
          }
          break;
        }
      case "dbhelp":
        {
          try {
            if (!_0x4a7a15(_0x11be99.sender)) {
              await _0x1bf22f("⛔");
              return _0x5b1b57("❌ *ADMIN ONLY*");
            }
            const _0x32a6a9 = "\n╭─「 💾 *" + global.BotName + " DATABASE HELP* 💾 」─╮\n│\n│ 📋 *LIST COMMANDS*\n│ ├─ .addnumber 923xx 30\n│ ├─ .removenumber 923xx\n│ ├─ .listnumbers\n│ ├─ .checknumber 923xx\n│ ├─ .searchnumber 923\n│ ├─ .updatedays 923xx 60\n│ ├─ .dbstats\n│ ├─ .clearcache\n│\n│ 📊 *FORMAT*\n│ Number: 923123456789\n│ Days: 30 (or 0 for lifetime)\n│ Date: YYYY-MM-DD (auto)\n│\n│ 🔗 *DATABASE*\n│ " + DB_URL + "\n│\n│ ⚠️ *NOTES*\n│ • All changes are permanent\n│ • Cache clears automatically\n│ • Real-time updates\n│\n╰─────────────────────╯\n> *LINK TO CONNECT " + global.BotName + " 👇*\n> https://rizo-toxic-md.vercel.app/";
            await _0x5b1b57(_0x32a6a9);
          } catch (_0x21271b) {
            console.error("DB Help error:", _0x21271b);
            await _0x5b1b57("❌ Error: " + _0x21271b.message);
          }
          break;
        }
      case "hd2":
      case "remini2":
      case "upscale2":
      case "uhd":
        {
          const _0x78364 = require("axios");
          const _0x1ce978 = require("form-data");
          const _0xef72ba = require("fs-extra");
          const _0x131c20 = require("path");
          const _0x541adb = require("qs");
          const {
            v4: _0x512627
          } = require("uuid");
          try {
            if (!_0x11be99.quoted) {
              return _0x5b1b57("🖼️ *Usage:* Image pe reply kar ke.hd likho\n\n*Options:*\n.hd - HD Enhance\n.uhd - Ultra HD 4K");
            }
            const _0x2f5362 = _0x11be99.quoted;
            const _0x144289 = _0x2f5362.mtype || _0x2f5362.msg?.mimetype || "";
            if (!/image/.test(_0x144289) && !_0x2f5362.msg?.imageMessage) {
              return _0x5b1b57("❌ Sirf image pe reply karo!\n*Detected:* " + _0x144289);
            }
            await _0x1bf22f("🔄");
            const _0x440a12 = _0x1a9ad3 === "uhd";
            const _0x12f150 = _0x440a12 ? {
              type: 12,
              label: "Ultra HD Image",
              content_type: 1,
              beans: 4,
              free: true
            } : {
              type: 2,
              label: "HD Image",
              content_type: 1,
              beans: 2,
              free: true
            };
            await _0x5b1b57("📥 *Processing " + _0x12f150.label + "...*\n⏳ 30-60 second lagega");
            const _0x672597 = await _0x2f5362.download();
            if (!_0x672597) {
              throw new Error("Image download fail ho gaya");
            }
            const _0xd872bc = Date.now();
            const _0x44cb50 = _0x131c20.join(__dirname, "input_" + _0xd872bc + ".jpg");
            _0xef72ba.writeFileSync(_0x44cb50, _0x672597);
            const _0x25494c = (_0xef72ba.statSync(_0x44cb50).size / 1024).toFixed(2);
            const _0x253a84 = {
              BASE: "https://wink.ai",
              STRATEGY: "https://strategy.app.meitudata.com",
              QINIU: "https://up-qagw.meitudata.com"
            };
            const _0x4b71c5 = {
              ID: "1189857605",
              VERSION: "3.7.1",
              LANGUAGE: "en_US"
            };
            const _0xcffe0b = {
              is_mirror: 0,
              orientation_tag: 1,
              j_420_trans: "1",
              return_ext: "2"
            };
            const _0x36dfbc = {
              source: "4",
              touch_type: "4",
              function_id: "630",
              material_id: "63001"
            };
            const _0x902807 = _0x14ae09 => new Promise(_0x45987e => setTimeout(_0x45987e, _0x14ae09));
            function _0xe2ff90() {
              const _0x163174 = _0x131c20.join(__dirname, ".wink_gnum");
              if (_0xef72ba.existsSync(_0x163174)) {
                return _0xef72ba.readFileSync(_0x163174, "utf8").trim();
              }
              const _0x12d4af = Date.now().toString(16);
              const _0x3945d9 = Math.random().toString(16).slice(2).padEnd(12, "0").slice(0, 12);
              const _0xf1399f = Math.random().toString(16).slice(2).padEnd(12, "0").slice(0, 12);
              const _0x521241 = _0x12d4af + "-" + _0x3945d9 + "-10462c6e-288000-" + _0x12d4af + _0xf1399f.slice(0, 3);
              _0xef72ba.writeFileSync(_0x163174, _0x521241);
              return _0x521241;
            }
            const _0x445307 = _0xe2ff90();
            const _0x446d58 = "ID";
            const _0x1ab92b = "Asia/Jakarta";
            const _0x433fbf = _0x78364.create({
              baseURL: _0x253a84.BASE,
              timeout: 60000,
              headers: {
                Accept: "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                Origin: _0x253a84.BASE,
                Referer: _0x253a84.BASE + "/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
              }
            });
            const _0x2be79d = (_0x1f6ce4 = {}) => ({
              client_id: _0x4b71c5.ID,
              version: _0x4b71c5.VERSION,
              country_code: _0x446d58,
              gnum: _0x445307,
              client_language: _0x4b71c5.LANGUAGE,
              client_channel_id: "",
              client_timezone: _0x1ab92b,
              ..._0x1f6ce4
            });
            await _0x433fbf.get("/api/init.json", {
              params: _0x2be79d()
            });
            const _0x422eeb = _0x131c20.extname(_0x44cb50).toLowerCase() || ".jpg";
            const _0x5d5d55 = await _0x433fbf.get("/api/file/get_maat_sign.json", {
              params: _0x2be79d({
                suffix: _0x422eeb,
                type: "temp",
                count: 1
              })
            });
            const _0x57959f = _0x5d5d55.data?.data;
            if (!_0x57959f?.sig) {
              throw new Error("Upload signature fail");
            }
            const _0x3a8e3a = await _0x78364.get(_0x253a84.STRATEGY + "/upload/policy", {
              params: {
                app: _0x57959f.app || "wink",
                count: 1,
                sig: _0x57959f.sig,
                sigTime: _0x57959f.sig_time,
                sigVersion: _0x57959f.sig_version,
                suffix: _0x422eeb,
                type: "temp"
              },
              timeout: 15000
            });
            const _0x441b24 = _0x3a8e3a.data?.[0]?.qiniu;
            if (!_0x441b24?.token) {
              throw new Error("Qiniu policy fail");
            }
            const _0x5349f1 = new _0x1ce978();
            _0x5349f1.append("token", _0x441b24.token);
            _0x5349f1.append("key", _0x441b24.key);
            _0x5349f1.append("file", _0xef72ba.createReadStream(_0x44cb50), {
              filename: _0x131c20.basename(_0x44cb50),
              contentType: "image/" + _0x422eeb.replace(".", "").replace("jpg", "jpeg")
            });
            const _0x5a7752 = await _0x78364.post(_0x441b24.url || _0x253a84.QINIU, _0x5349f1, {
              headers: _0x5349f1.getHeaders(),
              timeout: 300000,
              maxBodyLength: Infinity,
              maxContentLength: Infinity
            });
            const _0x47d495 = _0x5a7752.data;
            if (!_0x47d495?.url) {
              throw new Error("Upload fail");
            }
            const _0x11ae49 = _0x12f150.label.replace(/\s+/g, "_") + "-" + _0x512627().replace(/-/g, "").slice(0, 16);
            const _0x69d6f7 = _0x541adb.stringify({
              ..._0x2be79d(),
              type: _0x12f150.type,
              source_url: _0x47d495.url,
              content_type: _0x12f150.content_type,
              ext_params: JSON.stringify({
                task_name: _0x11ae49,
                records: "2"
              }),
              type_params: JSON.stringify(_0xcffe0b),
              right_detail: JSON.stringify(_0x36dfbc),
              with_prepare: 1
            });
            const _0x4d926a = await _0x433fbf.post("/api/meitu_ai/delivery.json", _0x69d6f7, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
            const _0x508928 = _0x4d926a.data?.data;
            if (!_0x508928?.prepare_msg_id) {
              throw new Error("Task submit fail");
            }
            let _0x4df34d = _0x508928.prepare_msg_id;
            const _0x9f64f1 = Date.now() + 300000;
            let _0x2ac135 = null;
            while (Date.now() < _0x9f64f1) {
              await _0x902807(2000);
              const _0x34da77 = await _0x433fbf.get("/api/meitu_ai/query_batch.json", {
                params: {
                  ..._0x2be79d(),
                  msg_ids: _0x4df34d
                }
              });
              const _0x5064c2 = _0x34da77.data?.data?.item_list?.[0];
              if (!_0x5064c2) {
                continue;
              }
              if (_0x4df34d.startsWith("wpr_")) {
                const _0x365973 = _0x5064c2.result?.result;
                if (_0x365973 && _0x365973 !== _0x4df34d) {
                  _0x4df34d = _0x365973;
                }
                continue;
              }
              const _0xc2a7f9 = _0x5064c2.result?.error_code;
              if (_0xc2a7f9 && _0xc2a7f9 !== 0) {
                throw new Error("AI error [" + _0xc2a7f9 + "]: " + _0x5064c2.result?.error_msg);
              }
              const _0x4708a2 = _0x5064c2.result?.media_info_list;
              if (_0x4708a2?.length && _0x4708a2[0].media_data) {
                _0x2ac135 = _0x4708a2[0].media_data;
                break;
              }
            }
            if (!_0x2ac135) {
              throw new Error("Timeout: 5 minute me result nahi mila");
            }
            const _0x44af31 = await _0x78364.get(_0x2ac135, {
              responseType: "arraybuffer",
              timeout: 120000,
              headers: {
                Referer: _0x253a84.BASE
              }
            });
            const _0x465933 = Buffer.from(_0x44af31.data);
            const _0x17f6a8 = (_0x465933.length / 1024).toFixed(2);
            _0xef72ba.unlinkSync(_0x44cb50);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: _0x465933,
              caption: "✨ *" + _0x12f150.label + " Enhanced*\n\n📐 *Original:* " + _0x25494c + " KB\n📐 *Enhanced:* " + _0x17f6a8 + " KB\n⚡ *Quality:* " + (_0x440a12 ? "Ultra HD 4K" : "HD 2x") + "\n\n✅ " + global.BotName + " - Done!"
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x494772) {
            console.error("HD enhance error:", _0x494772);
            await _0x1bf22f("❌");
            try {
              const _0x56dd2a = _0xef72ba.readdirSync(__dirname);
              _0x56dd2a.forEach(_0x45ea4b => {
                if (_0x45ea4b.startsWith("input_") && _0x45ea4b.endsWith(".jpg")) {
                  _0xef72ba.unlinkSync(_0x131c20.join(__dirname, _0x45ea4b));
                }
              });
            } catch {}
            if (_0x494772.message.includes("ffmpeg")) {
              _0x5b1b57("❌ *Error:* ffmpeg install nahi hai\n\n*Fix:* `apk add ffmpeg`");
            } else if (_0x494772.message.includes("Timeout")) {
              _0x5b1b57("❌ *Error:* API timeout ho gaya\n\n*Fix:* 1-2 minute baad phir try karo");
            } else {
              _0x5b1b57("❌ *Error:* " + _0x494772.message);
            }
          }
          break;
        }
      case "hd":
      case "tohd":
      case "enhanced":
      case "remini":
        {
          try {
            if (!_0x567057) {
              return _0x5b1b57("❌ *Reply to an image!*");
            }
            if (!/image/.test(_0x4e0b15)) {
              return _0x5b1b57("❌ *Only images are supported!*");
            }
            await _0x1bf22f("🔄");
            const _0x247e27 = await _0x5b1b57("🎨 *Enhancing image quality...*\n⏳ Please wait 10-15 seconds");
            let _0x5c1289 = await _0x106db2.downloadAndSaveMediaMessage(_0x567057);
            let _0x2946d5;
            let _0x7e1af7 = "";
            try {
              _0x2946d5 = await _0x57a195(_0x5c1289);
              _0x7e1af7 = "Catbox";
            } catch (_0x2801dc) {
              try {
                _0x2946d5 = await _0xd0cc4f(_0x5c1289);
                _0x7e1af7 = "Telegra.ph";
              } catch (_0x4d7579) {
                let _0x250819 = await _0x351233(_0x5c1289);
                _0x2946d5 = _0x250819.url;
                _0x7e1af7 = "Uguu";
              }
            }
            try {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                delete: _0x247e27.key
              });
            } catch (_0x5c30cc) {}
            let _0x89fb51 = "https://api.deline.web.id/tools/hd?url=" + _0x2946d5;
            const _0x53728b = fs.statSync(_0x5c1289);
            const _0x3f35d2 = (_0x53728b.size / 1024).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: {
                url: _0x89fb51
              },
              caption: "✨ *Image Enhanced Successfully!*\n\n📸 *Quality:* HD/4K\n📁 *Server:* " + _0x7e1af7 + "\n📦 *Size:* " + _0x3f35d2 + " KB\n⚡ *Powered by:* " + global.Developer,
              contextInfo: {
                externalAdReply: {
                  title: "🖼️ HD Image Enhancer",
                  body: global.BotName + " - Quality improved",
                  thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  sourceUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x11be99
            });
            fs.unlinkSync(_0x5c1289);
            await _0x1bf22f("✅");
          } catch (_0xbd36f2) {
            console.error("HD Error:", _0xbd36f2);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Enhance failed!*\n\n📛 *Error:* " + (_0xbd36f2.message || "Unknown error") + "\n\n🔄 Try again later");
          }
          break;
        }
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloyellowneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          try {
            if (!q) {
              return _0x5b1b57("❌ *Usage:* ." + _0x1a9ad3 + " Your Text\n\n*Example:* ." + _0x1a9ad3 + " Rizo");
            }
            await _0x1bf22f("🎨");
            await _0x5b1b57("🖼️ *Creating " + _0x1a9ad3 + " effect...*\n⏳ Please wait 10-15 seconds");
            let _0x253ade;
            if (/glitchtext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
            }
            if (/writetext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
            }
            if (/advancedglow/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/advanced-glow-effects-74.html";
            }
            if (/typographytext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
            }
            if (/pixelglitch/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
            }
            if (/neonglitch/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
            }
            if (/flagtext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
            }
            if (/flag3dtext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
            }
            if (/deletingtext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
            }
            if (/blackpinkstyle/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
            }
            if (/glowingtext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
            }
            if (/underwatertext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
            }
            if (/logomaker/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
            }
            if (/cartoonstyle/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
            }
            if (/papercutstyle/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
            }
            if (/watercolortext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
            }
            if (/effectclouds/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
            }
            if (/blackpinklogo/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
            }
            if (/gradienttext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
            }
            if (/summerbeach/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
            }
            if (/luxurygold/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
            }
            if (/multicoloyellowneon/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-multicoloyellow-neon-light-signatures-591.html";
            }
            if (/sandsummer/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
            }
            if (/galaxywallpaper/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
            }
            if (/1917style/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/1917-style-text-effect-523.html";
            }
            if (/makingneon/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
            }
            if (/royaltext/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
            }
            if (/freecreate/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
            }
            if (/galaxystyle/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
            }
            if (/lighteffects/.test(_0x1a9ad3)) {
              _0x253ade = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
            }
            if (!_0x253ade) {
              return _0x5b1b57("❌ *Invalid effect!*");
            }
            let _0x3ab8e3 = await _0x4ad760(_0x253ade, q);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: {
                url: _0x3ab8e3
              },
              caption: "✨ *" + _0x1a9ad3 + " Effect Created!*\n\n📝 *Text:* " + q + "\n🎨 *Style:* " + _0x1a9ad3 + "\n⚡ *Powered by:* " + global.Developer,
              contextInfo: {
                externalAdReply: {
                  title: "🎨 Ephoto360 Text Maker",
                  body: global.BotName + " - " + _0x1a9ad3 + " effect",
                  thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  sourceUrl: "https://whatsapp.com/channel/0029VavSK8U8fewp1htKiS21",
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x5937d6) {
            console.error("Ephoto Command Error:", _0x5937d6);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Failed to create effect!*\n\n📛 *Error:* " + (_0x5937d6.message || "Unknown error") + "\n\n🔄 *Try again later*");
          }
          break;
        }
      case "tourl":
      case "upload":
      case "getlink":
      case "catbox":
      case "img2url":
        {
          try {
            if (!_0x567057) {
              return _0x5b1b57("❌ *Reply to an image/video/audio!*");
            }
            if (!/image|video|audio/.test(_0x4e0b15)) {
              return _0x5b1b57("❌ *Only images, videos, or audio supported!*");
            }
            await _0x1bf22f("📤");
            const _0x2b6e88 = await _0x5b1b57("🔄 *Uploading to server...*\n⏳ Please wait");
            let _0xe5a416 = await _0x106db2.downloadAndSaveMediaMessage(_0x567057);
            let _0x21beba;
            let _0x252e7d = "Catbox";
            try {
              _0x21beba = await _0x57a195(_0xe5a416);
            } catch (_0x1b7912) {
              try {
                _0x21beba = await _0xd0cc4f(_0xe5a416);
                _0x252e7d = "Telegra.ph";
              } catch (_0x2d90db) {
                let _0x133f8e = await _0x351233(_0xe5a416);
                _0x21beba = _0x133f8e.url;
                _0x252e7d = "Uguu";
              }
            }
            if (!_0x21beba) {
              throw new Error("All upload servers failed!");
            }
            try {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                delete: _0x2b6e88.key
              });
            } catch (_0x2acb1c) {}
            const _0x5e6205 = fs.statSync(_0xe5a416);
            const _0x433f9d = (_0x5e6205.size / 1024).toFixed(2);
            const _0x48e714 = path.extname(_0xe5a416).substring(1) || "unknown";
            let _0x3b278e = "📷 Image";
            if (_0x4e0b15.includes("video")) {
              _0x3b278e = "🎥 Video";
            }
            if (_0x4e0b15.includes("audio")) {
              _0x3b278e = "🎵 Audio";
            }
            const _0x1dc53f = "\n╭─「 📤 *UPLOAD SUCCESS* 」─╮\n│\n│ " + _0x3b278e + "\n│ 🔗 *URL:*\n│ " + _0x21beba + "\n│\n│ 📁 *Server:* " + _0x252e7d + "\n│ 📦 *Size:* " + _0x433f9d + " KB\n│ 🏷️ *Format:* " + _0x48e714 + "\n│\n│ ⚡ *Powered by:* " + global.Developer + "\n│\n╰─────────────────────╯\n\n📋 *Copy and open in browser*\n";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0x1dc53f,
              contextInfo: {
                externalAdReply: {
                  title: "📤 Image Upload",
                  body: global.BotName + " - Uploaded to " + _0x252e7d,
                  thumbnailUrl: "https://files.catbox.moe/3mnhrl.jpg",
                  sourceUrl: _0x21beba,
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x11be99
            });
            fs.unlinkSync(_0xe5a416);
            await _0x1bf22f("✅");
          } catch (_0x43a87a) {
            console.error("Tourl Error:", _0x43a87a);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Upload failed!*\n\n📛 *Error:* " + (_0x43a87a.message || "Unknown error"));
          }
          break;
        }
      case "fb":
      case "fbdl":
      case "facebook":
      case "fbdownload":
        {
          try {
            if (!_0x74101d || !_0x74101d.startsWith("http")) {
              return _0x5b1b57("❌ *Usage:* .fb https://facebook.com/xxx\n\n*Example:* .fb https://fb.watch/xxxxx/");
            }
            await _0x1bf22f("⏳");
            const _0x38be36 = await _0x5b1b57("📥 *Downloading from Facebook...*\n⏳ Please wait");
            const _0x29050b = "https://api-faa.my.id/faa/fbdownload?url=" + encodeURIComponent(_0x74101d);
            const _0x46ca4e = await fetch(_0x29050b);
            const _0x146a59 = await _0x46ca4e.json();
            if (!_0x146a59.status || !_0x146a59.result) {
              throw new Error("Failed to fetch data");
            }
            const _0x2f510b = _0x146a59.result.info || {};
            const _0x3d41bb = _0x146a59.result.media || {};
            try {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                delete: _0x38be36.key
              });
            } catch (_0xa525be) {}
            if (!_0x3d41bb.video_hd && !_0x3d41bb.video_sd) {
              let _0x519755 = [];
              if (_0x3d41bb.photo_image) {
                _0x519755.push(_0x3d41bb.photo_image);
              }
              if (_0x3d41bb.thumbnail && !_0x3d41bb.photo_image) {
                _0x519755.push(_0x3d41bb.thumbnail);
              }
              if (_0x519755.length === 0) {
                return _0x5b1b57("❌ No images found!");
              }
              for (let _0x3c28bb = 0; _0x3c28bb < _0x519755.length; _0x3c28bb++) {
                const _0x282cc5 = _0x3c28bb === 0 ? "┏━━❐ *FACEBOOK IMAGES*\n┃ 📸 *Total:* " + _0x519755.length + "\n┃ 🖼️ *Image:* " + (_0x3c28bb + 1) + "/" + _0x519755.length + "\n┃ 📝 *Title:* " + (_0x2f510b.title || "N/A") + "\n┗━━━━━━━━━━\n\n⚡ Powered by: " + global.Developer : "📸 *Image " + (_0x3c28bb + 1) + "/" + _0x519755.length + "*";
                await _0x106db2.sendMessage(_0x11be99.chat, {
                  image: {
                    url: _0x519755[_0x3c28bb]
                  },
                  caption: _0x282cc5
                }, {
                  quoted: _0x11be99
                });
                if (_0x3c28bb < _0x519755.length - 1) {
                  await sleep(1500);
                }
              }
              await _0x1bf22f("✅");
              return;
            }
            const _0x38c970 = _0x3d41bb.video_hd || _0x3d41bb.video_sd;
            if (!_0x38c970) {
              return _0x5b1b57("❌ No video found!");
            }
            const _0x2963ee = "┏━━❐ *FACEBOOK VIDEO*\n┃ 🎥 *Title:* " + (_0x2f510b.title || "N/A") + "\n┃ 👤 *Owner:* " + (_0x2f510b.owner || "Unknown") + "\n┃ 📊 *Quality:* " + (_0x3d41bb.video_hd ? "HD" : "SD") + "\n┗━━━━━━━━━━\n\n⚡ Powered by: " + global.Developer;
            await _0x106db2.sendMessage(_0x11be99.chat, {
              video: {
                url: _0x38c970
              },
              caption: _0x2963ee,
              contextInfo: {
                externalAdReply: {
                  title: "📱 Facebook Video",
                  body: _0x2f510b.title?.substring(0, 30) || "Facebook Video",
                  thumbnailUrl: _0x3d41bb.thumbnail || "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                  sourceUrl: _0x74101d,
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x400f4e) {
            console.error("Facebook Error:", _0x400f4e);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Download Failed!*\n\n📛 *Error:* " + (_0x400f4e.message || "Unknown error") + "\n\n🔄 Try again later");
          }
          break;
        }
      case "allmenu":
      case "listcmnd":
      case "getcmnd":
      case "list":
        {
          try {
            const _0x12c732 = "\n╔══════─── • ───════╗\n║╭────•\n║┃───⎝⎝✧ *" + global.BotName + "* ✧⎠⎠\n║┃\n║┃➳ *OWNER:*  " + global.Developer + "\n║┃➳ *VERSION:* v2.0.0\n║┃➳ *PREFIX:* .\n║┃➳ *USER:*   " + (_0x2ea648 || "Guest") + "\n║┃➳ *TIME:*   " + moment().tz("Asia/Karachi").format("hh:mm A") + "\n║┃➳ *DATE:*   " + moment().tz("Asia/Karachi").format("DD/MM/YYYY") + "\n║┃➳ *MODE:*   🌍 Public\n║┃\n║┃ ```rizo-toxic-md.vercel.app```\n║┃───⎝⎝ 📥 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿\n║┃➳ *.audio*    →  Song/MP3\n║┃➳ *.video*    →  Video/MP4\n║┃➳ *.audio2*   →  Song V2\n║┃➳ *.video2*   →  Video V2\n║┃➳ *.tt*       →  TikTok DL\n║┃➳ *.tt2*      →  TikTok V2\n║┃➳ *.ig*       →  Instagram\n║┃➳ *.fb*       →  Facebook\n║┃➳ *.spotify*  →  Spotify DL\n║┃➳ *.spsong*   →  Spotify Search\n║┃\n║┃───⎝⎝ 🎨 𝙏𝙀𝙓𝙏 𝙀𝙁𝙁𝙀𝘾𝙏𝙎 (30+)\n║┃➳ *.glitchtext*     *.writetext*\n║┃➳ *.advancedglow*   *.typographytext*\n║┃➳ *.pixelglitch*    *.neonglitch*\n║┃➳ *.flagtext*       *.flag3dtext*\n║┃➳ *.deletingtext*   *.blackpinkstyle*\n║┃➳ *.glowingtext*    *.underwatertext*\n║┃➳ *.logomaker*      *.cartoonstyle*\n║┃➳ *.papercutstyle*  *.watercolortext*\n║┃➳ *.effectclouds*   *.blackpinklogo*\n║┃➳ *.gradienttext*   *.summerbeach*\n║┃➳ *.luxurygold*     *.multicoloyellowneon*\n║┃➳ *.sandsummer*     *.galaxywallpaper*\n║┃➳ *.1917style*      *.makingneon*\n║┃➳ *.royaltext*      *.freecreate*\n║┃➳ *.galaxystyle*    *.lighteffects*\n║┃\n║┃───⎝⎝ 🔧 𝙏𝙊𝙊𝙇𝙎\n║┃➳ *.sticker*   →  Image to Sticker\n║┃➳ *.toimg*    →  Sticker to Image\n║┃➳ *.tomp3*    →  Video to Audio\n║┃➳ *.tourl*    →  Upload to URL\n║┃➳ *.hd*       →  HD Image Enhancer\n║┃➳ *.hd2*      →  HD Enhancer V2\n║┃➳ *.remini*   →  Image Upscale\n║┃➳ *.uhd*      →  Ultra HD 4K\n║┃➳ *.vv*       →  View Once Reply\n║┃➳ *.vv2*      →  Forward to Owner\n║┃➳ *.dp*       →  Get DP\n║┃➳ *.dpx*      →  Get DP (API)\n║┃\n║┃───⎝⎝ 👥 𝙂𝙍𝙊𝙐𝙋\n║┃➳ *.gcreate*    →  Create Group\n║┃➳ *.gleave*     →  Leave Group\n║┃➳ *.join*       →  Join by Code\n║┃➳ *.invitelink* →  Group Invite Link\n║┃➳ *.revoke*     →  Revoke Link\n║┃➳ *.gadd*       →  Add Member\n║┃➳ *.gremove*    →  Remove Member\n║┃➳ *.gpromote*   →  Promote Admin\n║┃➳ *.gdemote*    →  Demote Admin\n║┃➳ *.ginfo*      →  Group Info\n║┃➳ *.groupset*   →  Group Settings\n║┃➳ *.updategroup*→  Update Group Name/Desc\n║┃➳ *.tagall*     →  Tag All Members\n║┃➳ *.hidetag*    →  Hidden Tag All\n║┃➳ *.setgname*   →  Quick Group Name\n║┃➳ *.setgdesc*   →  Quick Group Desc\n║┃➳ *.setgpp*     →  Set Group Icon\n║┃➳ *.lockgroup*  →  Admins Only Mode\n║┃➳ *.unlockgroup*→  Everyone Can Send\n║┃➳ *.listadmins* →  List Group Admins\n║┃➳ *.groupmembers*→ List All Members\n║┃➳ *.antilink*   →  Toggle Antilink On/Off\n║┃\n║┃───⎝⎝ ⚙️ 𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎\n║┃➳ *.autoreact-on*   *.autoreact-off*\n║┃➳ *.antidelete-on*  *.antidelete-off*\n║┃➳ *.autoview-on*    *.autoview-off*\n║┃➳ *.public*    *.self*\n║┃➳ *.settings*  *.mysettings*\n║┃\n║┃───⎝⎝ 👤 𝙋𝙍𝙊𝙁𝙄𝙇𝙀\n║┃➳ *.setname*   →  Change Bot Name\n║┃➳ *.setpp*     →  Set Profile Pic\n║┃➳ *.delpp*     →  Remove Profile Pic\n║┃➳ *.getpp*     →  Get Profile Pic\n║┃\n║┃───⎝⎝ 📰 𝙉𝙀𝙒𝙎𝙇𝙀𝙏𝙏𝙀𝙍\n║┃➳ *.follow*    →  Follow Newsletter\n║┃➳ *.unfollow*  →  Unfollow Newsletter\n║┃➳ *.ninfo*     →  Newsletter Info\n║┃➳ *.reactch*   →  React to Channel Post\n║┃\n║┃───⎝⎝ 📱 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀\n║┃➳ *.sim*       →  SIM Info\n║┃➳ *.cnic*      →  CNIC Info\n║┃➳ *.simdetail* →  SIM Detail\n║┃\n║┃───⎝⎝ 🛠️ 𝙈𝙄𝙎𝘾\n║┃➳ *.ping*      →  Check Latency\n║┃➳ *.owner*     →  Bot Owner\n║┃➳ *.channel*   →  Updates Channel\n║┃➳ *.checkidd*  →  Chat ID\n║┃➳ *.pair*      →  Pair Device\n║┃➳ *.dis-conn*  →  Disconnect Session\n║┃➳ *.baileys*   →  List Baileys Functions\n║┃\n║╰────•\n╚══════─── • ───════╝\n> powered by *" + global.Developer + " 🔥*\n";
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: {
                url: "https://files.catbox.moe/3mnhrl.jpg"
              },
              caption: _0x12c732
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x1feb97) {
            console.error("Menu error:", _0x1feb97);
            await _0x5b1b57("❌ Error: " + _0x1feb97.message);
          }
          break;
        }
      case "sticker":
      case "s":
      case "stickergif":
      case "stickerimg":
        {
          const {
            exec: _0x577d81
          } = require("child_process");
          const _0x5bb7b5 = require("util");
          const _0x33e44c = _0x5bb7b5.promisify(_0x577d81);
          try {
            if (!_0x11be99.quoted) {
              return _0x5b1b57("🌟 *Usage:* Image/Video pe reply kar ke .sticker likho");
            }
            const _0x32bc97 = _0x11be99.quoted;
            const _0x3e2751 = _0x32bc97.mtype || _0x32bc97.msg?.mimetype || "";
            if (!/image|video/.test(_0x3e2751) && !_0x32bc97.msg?.imageMessage && !_0x32bc97.msg?.videoMessage) {
              return _0x5b1b57("❌ Sirf image ya video pe reply karo!\n*Detected:* " + _0x3e2751);
            }
            await _0x1bf22f("🔄");
            const _0x5644c7 = await _0x32bc97.download();
            if (!_0x5644c7) {
              throw new Error("Media download fail ho gaya");
            }
            const _0x28c3f2 = /video/.test(_0x3e2751) || _0x32bc97.msg?.videoMessage;
            if (_0x28c3f2) {
              const _0x8867b = _0x32bc97.msg?.videoMessage?.seconds || _0x32bc97.seconds || 0;
              if (_0x8867b > 10) {
                return _0x5b1b57("❌ Video 10 second se kam honi chahiye\n*Current:* " + _0x8867b + "s");
              }
            }
            const _0x9339f0 = Date.now();
            const _0x29b32c = path.join(__dirname, "input_" + _0x9339f0 + "." + (_0x28c3f2 ? "mp4" : "jpg"));
            const _0x4e8b19 = path.join(__dirname, "sticker_" + _0x9339f0 + ".webp");
            fs.writeFileSync(_0x29b32c, _0x5644c7);
            if (_0x28c3f2) {
              await _0x33e44c("ffmpeg -i \"" + _0x29b32c + "\" -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 \"" + _0x4e8b19 + "\" -y");
            } else {
              await _0x33e44c("ffmpeg -i \"" + _0x29b32c + "\" -vcodec libwebp -lossless 1 -qscale 50 -preset default -loop 0 -an -vsync 0 -s 512:512 \"" + _0x4e8b19 + "\" -y");
            }
            if (!fs.existsSync(_0x4e8b19)) {
              throw new Error("Sticker banane me fail");
            }
            const _0x5af5fd = fs.readFileSync(_0x4e8b19);
            fs.unlinkSync(_0x29b32c);
            fs.unlinkSync(_0x4e8b19);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              sticker: _0x5af5fd,
              packname: global.BotName,
              author: global.Developer
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x3cf020) {
            console.error("sticker error:", _0x3cf020);
            await _0x1bf22f("❌");
            if (_0x3cf020.message.includes("ffmpeg")) {
              _0x5b1b57("❌ *Error:* ffmpeg install nahi hai\n\n*Fix:* `apk add ffmpeg`");
            } else {
              _0x5b1b57("❌ *Error:* " + _0x3cf020.message);
            }
          }
          break;
        }
      case "toimg":
      case "toimage":
      case "stickertoimg":
        {
          const {
            exec: _0x43d98b
          } = require("child_process");
          const _0x435b29 = require("util");
          const _0x391f33 = _0x435b29.promisify(_0x43d98b);
          try {
            if (!_0x11be99.quoted) {
              return _0x5b1b57("🖼️ *Usage:* Sticker pe reply kar ke .toimg likho");
            }
            const _0x3f5119 = _0x11be99.quoted;
            const _0x1ff52a = _0x3f5119.mtype || _0x3f5119.msg?.mimetype || "";
            const _0x202001 = _0x1ff52a === "stickerMessage" || _0x3f5119.msg?.stickerMessage || _0x1ff52a.includes("webp") || _0x3f5119.msg?.mimetype && _0x3f5119.msg.mimetype.includes("webp");
            if (!_0x202001) {
              return _0x5b1b57("❌ Sirf sticker pe reply karo!\n*Detected:* " + _0x1ff52a);
            }
            await _0x1bf22f("🔄");
            const _0x5c6d41 = await _0x3f5119.download();
            if (!_0x5c6d41) {
              throw new Error("Sticker download fail ho gaya");
            }
            const _0x521944 = Date.now();
            const _0x21387d = path.join(__dirname, "sticker_" + _0x521944 + ".webp");
            const _0xae2dd = path.join(__dirname, "image_" + _0x521944 + ".png");
            fs.writeFileSync(_0x21387d, _0x5c6d41);
            await _0x391f33("ffmpeg -i \"" + _0x21387d + "\" \"" + _0xae2dd + "\" -y");
            if (!fs.existsSync(_0xae2dd)) {
              throw new Error("Conversion fail ho gaya");
            }
            const _0x2479b7 = fs.readFileSync(_0xae2dd);
            fs.unlinkSync(_0x21387d);
            fs.unlinkSync(_0xae2dd);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: _0x2479b7,
              caption: "✅ *Sticker to Image Converted*\n\n⚡ " + global.BotName
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x80fca7) {
            console.error("toimg error:", _0x80fca7);
            await _0x1bf22f("❌");
            if (_0x80fca7.message.includes("ffmpeg")) {
              _0x5b1b57("❌ *Error:* ffmpeg install nahi hai\n\n*Fix:* Pterodactyl console me: `apk add ffmpeg`");
            } else {
              _0x5b1b57("❌ *Error:* " + _0x80fca7.message);
            }
          }
          break;
        }
      case "ig":
      case "igdl":
      case "instagram":
      case "insta":
        {
          try {
            if (!_0xcf6911[0]) {
              return _0x5b1b57("❌ *Instagram URL Required!*\n\n*Example:*\n." + _0x1a9ad3 + " https://www.instagram.com/p/xxx\n\n*Support:*\n• Post (Image/Video)\n• Reels\n• Stories\n• Multiple Images");
            }
            const _0x13eafa = _0xcf6911[0];
            if (!_0x13eafa.match(/instagram\.com|instagr\.am/i)) {
              return _0x5b1b57("❌ *Invalid Instagram URL!*");
            }
            await _0x1bf22f("📥");
            const _0x33b33c = await _0x5b1b57("⏳ *Downloading from Instagram...*\n🔗 URL: " + _0x13eafa.substring(0, 50) + "...");
            const _0x8dfe9d = "https://kol.id";
            const _0x221d9e = "/download-video/instagram";
            const _0x400f80 = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36";
            const _0x14e5d0 = async () => {
              const _0x1e5e45 = await axios.get(_0x8dfe9d + _0x221d9e, {
                headers: {
                  "user-agent": _0x400f80,
                  "accept-language": "id-ID,id;q=0.9"
                }
              });
              const _0x232ff0 = _0x1e5e45.data.match(/_token:\s*['"]([^'"]+)['"]/);
              const _0x5e572a = _0x232ff0?.[1];
              const _0x148554 = _0x1e5e45.headers["set-cookie"] ?? [];
              const _0x16698f = _0x148554.map(_0x479ddd => _0x479ddd.split(";")[0]).join("; ");
              return {
                token: _0x5e572a,
                cookieStr: _0x16698f
              };
            };
            const {
              token: _0x5dbe2b,
              cookieStr: _0x3f6743
            } = await _0x14e5d0();
            if (!_0x5dbe2b) {
              throw new Error("Token not found");
            }
            const _0x344595 = await axios.post(_0x8dfe9d + _0x221d9e, new URLSearchParams({
              url: _0x13eafa,
              _token: _0x5dbe2b
            }).toString(), {
              headers: {
                "user-agent": _0x400f80,
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                accept: "*/*",
                origin: _0x8dfe9d,
                referer: _0x8dfe9d + _0x221d9e,
                "x-requested-with": "XMLHttpRequest",
                cookie: _0x3f6743
              }
            });
            const _0x345397 = _0x344595.data?.html ?? _0x344595.data;
            const _0x326ecb = cheerio.load(_0x345397);
            const _0x38535f = [];
            _0x326ecb("a[href]").each((_0x368979, _0x3fd3bc) => {
              const _0x2c40f1 = _0x326ecb(_0x3fd3bc).attr("href");
              if (_0x2c40f1 && (_0x2c40f1.includes("cdninstagram") || _0x2c40f1.includes("scontent") || _0x2c40f1.includes(".mp4"))) {
                _0x38535f.push({
                  label: _0x326ecb(_0x3fd3bc).text().trim() || "video",
                  url: _0x2c40f1
                });
              }
            });
            if (_0x38535f.length === 0) {
              const _0x21f965 = _0x345397.match(/https:\/\/scontent[^\s"'<>&]+\.mp4[^\s"'<>]*/g) ?? [];
              _0x21f965.forEach(_0x33eb9e => _0x38535f.push({
                label: "video",
                url: _0x33eb9e
              }));
            }
            if (_0x38535f.length === 0) {
              throw new Error("No media found");
            }
            const _0x3d54b9 = _0x38535f.map(_0x234e14 => ({
              type: _0x234e14.url.includes(".mp4") || _0x234e14.label.toLowerCase().includes("video") ? "video" : "image",
              url: _0x234e14.url
            }));
            let _0x1fe69d = "";
            const _0x2e0280 = _0x345397.match(/@([a-zA-Z0-9_.]+)/);
            if (_0x2e0280) {
              _0x1fe69d = _0x2e0280[1];
            }
            let _0x2dcc3e = "";
            const _0x42042f = _0x326ecb("meta[property=\"og:description\"]").attr("content");
            if (_0x42042f) {
              _0x2dcc3e = _0x42042f;
            }
            const _0x3cccf5 = _0x3d54b9.length > 1 ? "Post" : _0x3d54b9[0].type === "video" ? "Reel" : "Post";
            const _0x5b184c = {
              success: true,
              media: _0x3d54b9,
              caption: _0x2dcc3e,
              username: _0x1fe69d,
              contentType: _0x3cccf5,
              likes: null,
              comments: null,
              time: null
            };
            await _0x106db2.sendMessage(_0x11be99.chat, {
              delete: _0x33b33c.key
            }).catch(() => {});
            let _0x6ef2d6 = "┏━━❐ *Instagram Downloader*\n┃ ✅ *Success*\n┗━━━━━━━━━━\n\n";
            if (_0x5b184c.username) {
              _0x6ef2d6 += "👤 *Username:* @" + _0x5b184c.username + "\n";
            }
            if (_0x5b184c.contentType) {
              _0x6ef2d6 += "📌 *Type:* " + _0x5b184c.contentType + "\n";
            }
            _0x6ef2d6 += "🎬 *Total:* " + _0x5b184c.media.length + " media\n";
            _0x6ef2d6 += "⚡ *Powered by:* " + global.Developer + "\n";
            if (_0x5b184c.caption) {
              const _0x53fbf8 = _0x5b184c.caption.length > 150 ? _0x5b184c.caption.substring(0, 150) + "..." : _0x5b184c.caption;
              _0x6ef2d6 += "\n📝 *Caption:*\n" + _0x53fbf8;
            }
            for (const [_0xaa2705, _0x33de45] of _0x5b184c.media.entries()) {
              try {
                const _0x48b7a7 = _0x5b184c.media.length > 1 ? _0x6ef2d6 + "\n\n📊 *Media " + (_0xaa2705 + 1) + "/" + _0x5b184c.media.length + "*" : _0x6ef2d6;
                if (_0x33de45.type === "video") {
                  await _0x106db2.sendMessage(_0x11be99.chat, {
                    video: {
                      url: _0x33de45.url
                    },
                    caption: _0x48b7a7,
                    mimetype: "video/mp4",
                    contextInfo: {
                      externalAdReply: {
                        title: "📸 Instagram Video",
                        body: "@" + (_0x5b184c.username || "user"),
                        thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                        sourceUrl: _0x13eafa,
                        mediaType: 1
                      }
                    }
                  }, {
                    quoted: _0x11be99
                  });
                } else {
                  await _0x106db2.sendMessage(_0x11be99.chat, {
                    image: {
                      url: _0x33de45.url
                    },
                    caption: _0x48b7a7,
                    contextInfo: {
                      externalAdReply: {
                        title: "📸 Instagram Image",
                        body: "@" + (_0x5b184c.username || "user"),
                        thumbnailUrl: _0x33de45.url,
                        sourceUrl: _0x13eafa,
                        mediaType: 1
                      }
                    }
                  }, {
                    quoted: _0x11be99
                  });
                }
                if (_0x5b184c.media.length > 1 && _0xaa2705 < _0x5b184c.media.length - 1) {
                  await sleep(1500);
                }
              } catch (_0x11a963) {
                console.error("Error sending media " + _0xaa2705 + ":", _0x11a963);
                await _0x5b1b57("❌ Failed to send media " + (_0xaa2705 + 1));
              }
            }
            await _0x1bf22f("✅");
          } catch (_0xd7cdda) {
            console.error("Instagram Error:", _0xd7cdda);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Download Failed!*\n\n📛 *Error:* " + (_0xd7cdda.message || "Unknown error") + "\n\n🔄 Try again later");
          }
          break;
        }
      case "setbotname":
      case "setname":
        {
          try {
            if (!_0x74101d) {
              return _0x5b1b57("❌ *Usage:* .setbotname Your Bot Name");
            }
            const _0x2639b5 = require("./lib2/features");
            _0x2639b5.updateUserTheme(_0x11be99.sender, {
              botName: _0x74101d
            });
            await _0x1bf22f("✅");
            await _0x5b1b57("✅ *Bot name updated!*\n\nNow: *" + _0x74101d + "*");
          } catch (_0x238270) {
            console.error("Set name error:", _0x238270);
            await _0x5b1b57("❌ Error: " + _0x238270.message);
          }
          break;
        }
      case "setbotimage":
      case "setimage":
        {
          try {
            if (!_0x74101d) {
              return _0x5b1b57("❌ *Usage:* .setbotimage image_url");
            }
            if (!isUrl(_0x74101d)) {
              return _0x5b1b57("❌ *Invalid URL!*");
            }
            const _0x47b312 = require("./lib2/features");
            _0x47b312.updateUserTheme(_0x11be99.sender, {
              botImage: _0x74101d
            });
            await _0x1bf22f("✅");
            await _0x5b1b57("✅ *Bot image updated!*");
          } catch (_0x4201ce) {
            console.error("Set image error:", _0x4201ce);
            await _0x5b1b57("❌ Error: " + _0x4201ce.message);
          }
          break;
        }
      case "resettheme":
        {
          try {
            const _0x40b926 = require("./lib2/features");
            _0x40b926.resetUserTheme(_0x11be99.sender);
            await _0x1bf22f("🔄");
            await _0x5b1b57("✅ *Theme reset to default " + global.Developer + " theme!*");
          } catch (_0x5a5f1f) {
            console.error("Reset theme error:", _0x5a5f1f);
            await _0x5b1b57("❌ Error: " + _0x5a5f1f.message);
          }
          break;
        }
      case "mytheme":
        {
          try {
            const _0x89eb69 = require("./lib2/features");
            const _0x15cb5e = _0x89eb69.getUserTheme(_0x11be99.sender);
            await _0x5b1b57("🎨 *Your Current Theme*\n\n🤖 Name: " + _0x15cb5e.botName + "\n🖼️ Image: " + _0x15cb5e.botImage.substring(0, 50) + "...");
          } catch (_0x53d11a) {
            console.error("My theme error:", _0x53d11a);
            await _0x5b1b57("❌ Error: " + _0x53d11a.message);
          }
          break;
        }
      case "sim":
      case "siminfo":
      case "searchsim":
      case "cnic":
        {
          try {
            if (!_0xcf6911[0]) {
              const _0x673846 = "\n╭─「 📱 SIM DATABASE 」─╮\n│\n│ *Usage:* \n│ .sim 03402219264    (Mobile)\n│ .cnic 3640225510633 (CNIC)\n│\n╰──────────────────────╯";
              return _0x5b1b57(_0x673846);
            }
            await _0x1bf22f("🔍");
            const _0x3288e2 = _0xcf6911[0].trim();
            const _0x40b9e1 = _0x3288e2.replace(/\D/g, "");
            if (_0x40b9e1.length < 10) {
              return _0x5b1b57("❌ *INVALID QUERY*");
            }
            const _0x505982 = await _0x5b1b57("🔍 *Searching...*\n\n📊 *Query:* " + _0x40b9e1);
            const _0x218edc = "https://shy-aphid-mubashir7860-6fea2a3c.koyeb.app/api/lookup?query=" + _0x40b9e1;
            const _0x237113 = await axios.get(_0x218edc, {
              timeout: 15000,
              headers: {
                "User-Agent": "Mozilla/5.0"
              }
            });
            try {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                delete: _0x505982.key
              });
            } catch (_0x3087f4) {}
            const _0xbc57d8 = _0x237113.data;
            if (!_0xbc57d8 || !_0xbc57d8.results || _0xbc57d8.results_count === 0) {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                text: "❌ *NO DATA FOUND* ❌\n\n📊 *Query:* " + _0x40b9e1 + "\n📈 *Records:* 0\n\n⚠️ *Not found in database*\n🔄 *Try different query*"
              }, {
                quoted: _0x11be99
              });
              await _0x1bf22f("❌");
              return;
            }
            const _0x3d0123 = _0xbc57d8.results;
            const _0x4e7a42 = _0xbc57d8.results_count || _0x3d0123.length;
            if (_0x4e7a42 === 1) {
              const _0x5b9a0a = _0x3d0123[0];
              const _0x52f669 = "\n╭─「 ✅ RECORD FOUND 」─╮\n│\n│ 📱 *Mobile:* " + (_0x5b9a0a.mobile || "N/A") + "\n│ 👤 *Name:* " + (_0x5b9a0a.name || "N/A") + "\n│ 🆔 *CNIC:* " + (_0x5b9a0a.cnic || "N/A") + "\n│ 📍 *Address:* " + (_0x5b9a0a.address || "N/A") + "\n│\n│ 📊 *Records:* " + _0x4e7a42 + "\n│ 🔍 *Query:* " + (_0xbc57d8.query || _0x40b9e1) + "\n│ 👨‍💻 *Developer:* " + global.Developer + "\n│\n╰──────────────────────╯\n> *LINK TO CONNECT " + global.BotName + " 👇*\n> https://rizo-toxic-md.vercel.app/";
              await _0x106db2.sendMessage(_0x11be99.chat, {
                text: _0x52f669,
                contextInfo: {
                  externalAdReply: {
                    title: "📱 SIM Database",
                    body: _0x5b9a0a.name?.substring(0, 20) || "User Info",
                    thumbnailUrl: "https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg",
                    mediaType: 1
                  }
                }
              }, {
                quoted: _0x11be99
              });
            } else {
              let _0x216d74 = "";
              _0x3d0123.forEach((_0x4e8d05, _0x5d4977) => {
                _0x216d74 += "\n" + (_0x5d4977 + 1) + ". *" + (_0x4e8d05.name || "Unknown") + "*\n   📱 " + (_0x4e8d05.mobile || "N/A") + "\n   🆔 " + (_0x4e8d05.cnic || "N/A") + "\n";
              });
              const _0x32da88 = "\n╭─「 📊 MULTIPLE RECORDS 」─╮\n│\n│ 🔍 *Query:* " + _0x40b9e1 + "\n│ 📈 *Total:* " + _0x4e7a42 + " records\n│" + _0x216d74 + "\n│ *To see full details:*\n│ .simdetail 1-" + Math.min(_0x4e7a42, 5) + "\n│\n╰─────────────────────────╯\n> *LINK TO CONNECT " + global.BotName + " 👇*\n> https://rizo-toxic-md.vercel.app/";
              await _0x106db2.sendMessage(_0x11be99.chat, {
                text: _0x32da88
              }, {
                quoted: _0x11be99
              });
              global.simRecords = global.simRecords || {};
              global.simRecords[_0x11be99.sender] = _0x3d0123;
            }
            await _0x1bf22f("✅");
          } catch (_0xf2e04c) {
            console.error("SIM Error:", _0xf2e04c);
            await _0x1bf22f("❌");
            await _0x5b1b57("❌ *Search Failed!*\n\n📛 *Error:* " + _0xf2e04c.message + "\n\n🔄 Try: .sim 03401234567");
          }
          break;
        }
      case "simdetail":
      case "simdetails":
        {
          try {
            if (!_0xcf6911[0]) {
              return _0x5b1b57("❌ Usage: .simdetail 1");
            }
            const _0x418bb1 = parseInt(_0xcf6911[0]) - 1;
            const _0xfc0d3b = global.simRecords?.[_0x11be99.sender];
            if (!_0xfc0d3b || !_0xfc0d3b[_0x418bb1]) {
              return _0x5b1b57("❌ No record found! Search again with .sim");
            }
            const _0x1f738c = _0xfc0d3b[_0x418bb1];
            const _0x22a1eb = "\n╭─「 📌 DETAIL RECORD " + parseInt(_0xcf6911[0]) + " 」─╮\n│\n│ 📱 *Mobile:* " + (_0x1f738c.mobile || "N/A") + "\n│ 👤 *Name:* " + (_0x1f738c.name || "N/A") + "\n│ 🆔 *CNIC:* " + (_0x1f738c.cnic || "N/A") + "\n│ 📍 *Address:* " + (_0x1f738c.address || "N/A") + "\n│\n╰─────────────────────────╯\n> *LINK TO CONNECT " + global.BotName + " 👇*\n> https://rizo-toxic-md.vercel.app/";
            await _0x5b1b57(_0x22a1eb);
          } catch (_0x2f517c) {
            console.error("SIM Detail error:", _0x2f517c);
            await _0x5b1b57("❌ Error: " + _0x2f517c.message);
          }
          break;
        }
      case "gcreate":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .gcreate <group_name>\nExample: .gcreate My New Group");
          }
          try {
            await _0x1bf22f("⏳");
            const _0x884e4b = _0x74101d;
            const _0xdd8cb5 = await _0x106db2.groupCreate(_0x884e4b, [_0x11be99.sender]);
            _0x5b1b57("✅ Group Created Successfully!\n📛 Name: " + _0x884e4b + "\n🆔 JID: " + _0xdd8cb5.id + "\n👥 Join via invite link");
            await _0x1bf22f("✅");
          } catch (_0x514e48) {
            _0x5b1b57("❌ Error: " + _0x514e48.message);
          }
          break;
        }
      case "gleave":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          try {
            await _0x1bf22f("🚪");
            await _0x106db2.groupLeave(_0x11be99.chat);
            _0x5b1b57("✅ Left the group!");
          } catch (_0x72bd87) {
            _0x5b1b57("❌ Error: " + _0x72bd87.message);
          }
          break;
        }
      case "gaccept":
      case "join":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .join <invite_code>\nExample: .join GKdkT18LDXj");
          }
          try {
            await _0x1bf22f("🔗");
            const _0x727ddf = await _0x106db2.groupAcceptInvite(_0x74101d);
            _0x5b1b57("✅ Joined group!\n📛 " + (_0x727ddf.subject || "Group"));
            await _0x1bf22f("✅");
          } catch (_0x523fa1) {
            _0x5b1b57("❌ Error: " + _0x523fa1.message);
          }
          break;
        }
      case "ginvite":
      case "invitelink":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender) && !isBotAdmin) {
            return _0x5b1b57("❌ I need to be admin!");
          }
          try {
            await _0x1bf22f("🔗");
            const _0x2c805e = await _0x106db2.groupInviteCode(_0x11be99.chat);
            const _0x3fe3e9 = "https://chat.whatsapp.com/" + _0x2c805e;
            _0x5b1b57("🔗 *Group Invite Link*\n" + _0x3fe3e9 + "\n\n📌 Expires never (revocable)");
          } catch (_0x5aac0a) {
            _0x5b1b57("❌ Error: " + _0x5aac0a.message);
          }
          break;
        }
      case "grevoke":
      case "revoke":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender) && !isBotAdmin) {
            return _0x5b1b57("❌ Need admin rights!");
          }
          try {
            await _0x1bf22f("🔄");
            const _0x26c2c2 = await _0x106db2.groupRevokeInvite(_0x11be99.chat);
            _0x5b1b57("✅ Invite link revoked!\n🔗 New link: https://chat.whatsapp.com/" + _0x26c2c2);
          } catch (_0x106378) {
            _0x5b1b57("❌ Error: " + _0x106378.message);
          }
          break;
        }
      case "gupdate":
      case "updategroup":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .updategroup <subject|desc> <text>\nExample: .updategroup subject New Name");
          }
          try {
            const _0x519c7d = _0x74101d.split(/ (.+)/);
            const _0x8ed56 = _0x519c7d[0].toLowerCase();
            const _0x36f5ab = _0x519c7d[1];
            if (!_0x36f5ab) {
              return _0x5b1b57("Please provide value!");
            }
            if (_0x8ed56 === "subject" || _0x8ed56 === "name") {
              await _0x106db2.groupUpdateSubject(_0x11be99.chat, _0x36f5ab);
              _0x5b1b57("✅ Group name updated to: " + _0x36f5ab);
            } else if (_0x8ed56 === "desc" || _0x8ed56 === "description") {
              await _0x106db2.groupUpdateDescription(_0x11be99.chat, _0x36f5ab);
              _0x5b1b57("✅ Group description updated!");
            } else {
              _0x5b1b57("❌ Invalid! Use: subject or desc");
            }
          } catch (_0x1105c6) {
            _0x5b1b57("❌ Error: " + _0x1105c6.message);
          }
          break;
        }
      case "gsettings":
      case "groupset":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .groupset <setting> <value>\n\n📌 Settings:\n• ephemeral <on/off/seconds>\n• announce <on/off>\n• restrict <on/off>\n\nExample: .groupset ephemeral 86400");
          }
          try {
            const _0xaae14d = _0x74101d.split(/ (.+)/);
            const _0x3f68d1 = _0xaae14d[0].toLowerCase();
            const _0x588db8 = _0xaae14d[1];
            if (_0x3f68d1 === "ephemeral") {
              const _0xeabf69 = _0x588db8 === "on" ? 86400 : _0x588db8 === "off" ? 0 : parseInt(_0x588db8);
              await _0x106db2.groupToggleEphemeral(_0x11be99.chat, _0xeabf69);
              _0x5b1b57("✅ Ephemeral mode set to: " + (_0xeabf69 === 0 ? "OFF" : _0xeabf69 + " seconds"));
            } else if (_0x3f68d1 === "announce") {
              await _0x106db2.groupSettingUpdate(_0x11be99.chat, _0x588db8 === "on" ? "announcement" : "not_announcement");
              _0x5b1b57("✅ Announce mode: " + (_0x588db8 === "on" ? "ON (only admins can send)" : "OFF (everyone can send)"));
            } else if (_0x3f68d1 === "restrict") {
              await _0x106db2.groupSettingUpdate(_0x11be99.chat, _0x588db8 === "on" ? "locked" : "unlocked");
              _0x5b1b57("✅ Restrict mode: " + (_0x588db8 === "on" ? "ON (admins can edit group info)" : "OFF (everyone can edit)"));
            } else {
              _0x5b1b57("❌ Invalid setting! Use: ephemeral, announce, or restrict");
            }
          } catch (_0x40bb) {
            _0x5b1b57("❌ Error: " + _0x40bb.message);
          }
          break;
        }
      case "gadd":
      case "add":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .add @mention or .add 923xxxxxxxxx");
          }
          try {
            let _0x2ddfb0 = _0x74101d.replace(/[^0-9]/g, "");
            if (!_0x2ddfb0.startsWith("92")) {
              _0x2ddfb0 = "92" + _0x2ddfb0;
            }
            const _0x3a6326 = _0x2ddfb0 + "@s.whatsapp.net";
            await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, [_0x3a6326], "add");
            _0x5b1b57("✅ Added @" + _0x2ddfb0, {
              mentions: [_0x3a6326]
            });
          } catch (_0x695696) {
            _0x5b1b57("❌ Error: " + _0x695696.message);
          }
          break;
        }
      case "gremove":
      case "kick":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0x5eb96d = _0x11be99.mentionedJid[0];
          if (!_0x5eb96d) {
            return _0x5b1b57("❌ Mention someone to kick!");
          }
          try {
            await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, [_0x5eb96d], "remove");
            _0x5b1b57("✅ Removed " + _0x5eb96d.split("@")[0]);
          } catch (_0xc6a73b) {
            _0x5b1b57("❌ Error: " + _0xc6a73b.message);
          }
          break;
        }
      case "gpromote":
      case "promote":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0x278b13 = _0x11be99.mentionedJid[0];
          if (!_0x278b13) {
            return _0x5b1b57("❌ Mention someone to promote!");
          }
          try {
            await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, [_0x278b13], "promote");
            _0x5b1b57("✅ Promoted " + _0x278b13.split("@")[0] + " to admin!");
          } catch (_0x5e144b) {
            _0x5b1b57("❌ Error: " + _0x5e144b.message);
          }
          break;
        }
      case "gdemote":
      case "demote":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0x1e2acf = _0x11be99.mentionedJid[0];
          if (!_0x1e2acf) {
            return _0x5b1b57("❌ Mention someone to demote!");
          }
          try {
            await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, [_0x1e2acf], "demote");
            _0x5b1b57("✅ Demoted " + _0x1e2acf.split("@")[0] + " from admin!");
          } catch (_0x4498f1) {
            _0x5b1b57("❌ Error: " + _0x4498f1.message);
          }
          break;
        }
      case "ginfo":
      case "groupinfo":
        {
          if (!_0x11be99.isGroup && !_0x74101d) {
            return _0x5b1b57("Use in group or provide JID!");
          }
          try {
            const _0x47a1ad = _0x11be99.isGroup ? _0x11be99.chat : _0x74101d;
            const _0x20814e = await _0x106db2.groupMetadata(_0x47a1ad);
            let _0x5011b9 = "👥 *GROUP INFO*\n━━━━━━━━━━━━━━━━━━\n📛 *Name:* " + _0x20814e.subject + "\n🆔 *JID:* " + _0x20814e.id + "\n👤 *Owner:* " + (_0x20814e.owner?.split("@")[0] || "Unknown") + "\n👥 *Members:* " + (_0x20814e.participants?.length || 0) + "\n📅 *Created:* " + new Date(_0x20814e.creation * 1000).toLocaleString() + "\n🔒 *Ephemeral:* " + (_0x20814e.ephemeralDuration ? _0x20814e.ephemeralDuration + " seconds" : "OFF") + "\n━━━━━━━━━━━━━━━━━━\n⚡ " + global.Developer;
            _0x5b1b57(_0x5011b9);
          } catch (_0x5baa52) {
            _0x5b1b57("❌ Error: " + _0x5baa52.message);
          }
          break;
        }
      case "tagall":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("📢");
            const _0xtaMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            const _0xtaParts = _0xtaMeta.participants.map(_0xtaP => _0xtaP.id);
            let _0xtaText = "📢 *TAG ALL*\n━━━━━━━━━━━━━━━━━━\n" + (_0x74101d ? _0x74101d + "\n\n" : "") ;
            for (const _0xtaJid of _0xtaParts) {
              _0xtaText += "@" + _0xtaJid.split("@")[0] + "\n";
            }
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0xtaText,
              mentions: _0xtaParts
            });
            await _0x1bf22f("✅");
          } catch (_0xtaErr) {
            _0x5b1b57("❌ Error: " + _0xtaErr.message);
          }
          break;
        }
      case "hidetag":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .hidetag <message>");
          }
          try {
            await _0x1bf22f("📣");
            const _0xhtMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            const _0xhtParts = _0xhtMeta.participants.map(_0xhtP => _0xhtP.id);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0x74101d,
              mentions: _0xhtParts
            });
            await _0x1bf22f("✅");
          } catch (_0xhtErr) {
            _0x5b1b57("❌ Error: " + _0xhtErr.message);
          }
          break;
        }
      case "setgname":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .setgname <new_group_name>");
          }
          try {
            await _0x1bf22f("✏️");
            await _0x106db2.groupUpdateSubject(_0x11be99.chat, _0x74101d);
            _0x5b1b57("✅ Group name updated to: " + _0x74101d);
            await _0x1bf22f("✅");
          } catch (_0xsgnErr) {
            _0x5b1b57("❌ Error: " + _0xsgnErr.message);
          }
          break;
        }
      case "setgdesc":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .setgdesc <new_description>");
          }
          try {
            await _0x1bf22f("✏️");
            await _0x106db2.groupUpdateDescription(_0x11be99.chat, _0x74101d);
            _0x5b1b57("✅ Group description updated!");
            await _0x1bf22f("✅");
          } catch (_0xsgdErr) {
            _0x5b1b57("❌ Error: " + _0xsgdErr.message);
          }
          break;
        }
      case "setgpp":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x11be99.quoted || !_0x11be99.quoted.message?.imageMessage) {
            return _0x5b1b57("❌ Reply to an image to set as group icon!\nUsage: Reply to image with .setgpp");
          }
          try {
            await _0x1bf22f("📸");
            const _0xsgpBuf = await _0x106db2.downloadMediaMessage(_0x11be99.quoted);
            await _0x106db2.updateProfilePicture(_0x11be99.chat, _0xsgpBuf);
            _0x5b1b57("✅ Group icon updated!");
            await _0x1bf22f("✅");
          } catch (_0xsgpErr) {
            _0x5b1b57("❌ Error: " + _0xsgpErr.message);
          }
          break;
        }
      case "lockgroup":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("🔒");
            await _0x106db2.groupSettingUpdate(_0x11be99.chat, "announcement");
            _0x5b1b57("🔒 Group locked! Only admins can send messages now.");
            await _0x1bf22f("✅");
          } catch (_0xlgErr) {
            _0x5b1b57("❌ Error: " + _0xlgErr.message);
          }
          break;
        }
      case "unlockgroup":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("🔓");
            await _0x106db2.groupSettingUpdate(_0x11be99.chat, "not_announcement");
            _0x5b1b57("🔓 Group unlocked! Everyone can send messages now.");
            await _0x1bf22f("✅");
          } catch (_0xulgErr) {
            _0x5b1b57("❌ Error: " + _0xulgErr.message);
          }
          break;
        }
      case "listadmins":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          try {
            await _0x1bf22f("👑");
            const _0xlaMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            const _0xlaAdmins = _0xlaMeta.participants.filter(_0xlaP => _0xlaP.admin);
            if (!_0xlaAdmins.length) {
              return _0x5b1b57("❌ No admins found!");
            }
            let _0xlaText = "👑 *GROUP ADMINS*\n━━━━━━━━━━━━━━━━━━\n";
            for (const _0xlaA of _0xlaAdmins) {
              _0xlaText += "• @" + _0xlaA.id.split("@")[0] + (_0xlaA.admin === "superadmin" ? " (Owner)" : "") + "\n";
            }
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0xlaText,
              mentions: _0xlaAdmins.map(_0xlaA => _0xlaA.id)
            });
            await _0x1bf22f("✅");
          } catch (_0xlaErr) {
            _0x5b1b57("❌ Error: " + _0xlaErr.message);
          }
          break;
        }
      case "groupmembers":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          try {
            await _0x1bf22f("👥");
            const _0xgmMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            let _0xgmText = "👥 *GROUP MEMBERS* (" + _0xgmMeta.participants.length + ")\n━━━━━━━━━━━━━━━━━━\n";
            for (const _0xgmP of _0xgmMeta.participants) {
              _0xgmText += "• @" + _0xgmP.id.split("@")[0] + "\n";
            }
            await _0x106db2.sendMessage(_0x11be99.chat, {
              text: _0xgmText,
              mentions: _0xgmMeta.participants.map(_0xgmP => _0xgmP.id)
            });
            await _0x1bf22f("✅");
          } catch (_0xgmErr) {
            _0x5b1b57("❌ Error: " + _0xgmErr.message);
          }
          break;
        }
      case "antilink":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xalArg = (_0x74101d || "").toLowerCase().trim();
          if (_0xalArg !== "on" && _0xalArg !== "off") {
            return _0x5b1b57("Usage: .antilink on/off");
          }
          try {
            const _0xalCur = getUserSettings(_0x11be99.chat) || {};
            updateUserSettings(_0x11be99.chat, {
              ..._0xalCur,
              antilink: _0xalArg === "on"
            });
            _0x5b1b57(_0xalArg === "on" ? "🛡️ Antilink enabled! Group invite links will be auto-deleted." : "🛡️ Antilink disabled!");
            await _0x1bf22f("✅");
          } catch (_0xalErr) {
            _0x5b1b57("❌ Error: " + _0xalErr.message);
          }
          break;
        }
      case "welcome":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xwlArg = (_0x74101d || "").toLowerCase().trim();
          if (_0xwlArg !== "on" && _0xwlArg !== "off") {
            return _0x5b1b57("Usage: .welcome on/off\n\nCustomize with:\n.setwelcome <text> (use @user and @group)\n.setgoodbye <text>");
          }
          try {
            const _0xwlCur = getUserSettings(_0x11be99.chat) || {};
            updateUserSettings(_0x11be99.chat, {
              ..._0xwlCur,
              welcome: _0xwlArg === "on"
            });
            _0x5b1b57(_0xwlArg === "on" ? "👋 Welcome/Goodbye messages enabled!" : "👋 Welcome/Goodbye messages disabled!");
            await _0x1bf22f("✅");
          } catch (_0xwlErr) {
            _0x5b1b57("❌ Error: " + _0xwlErr.message);
          }
          break;
        }
      case "setwelcome":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .setwelcome <text>\nPlaceholders: @user, @group\nExample: .setwelcome Welcome @user to @group! 🎉");
          }
          try {
            const _0xswCur = getUserSettings(_0x11be99.chat) || {};
            updateUserSettings(_0x11be99.chat, {
              ..._0xswCur,
              welcomeText: _0x74101d
            });
            _0x5b1b57("✅ Custom welcome message saved!");
            await _0x1bf22f("✅");
          } catch (_0xswErr) {
            _0x5b1b57("❌ Error: " + _0xswErr.message);
          }
          break;
        }
      case "setgoodbye":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .setgoodbye <text>\nPlaceholders: @user, @group\nExample: .setgoodbye @user left @group 😢");
          }
          try {
            const _0xsgCur = getUserSettings(_0x11be99.chat) || {};
            updateUserSettings(_0x11be99.chat, {
              ..._0xsgCur,
              goodbyeText: _0x74101d
            });
            _0x5b1b57("✅ Custom goodbye message saved!");
            await _0x1bf22f("✅");
          } catch (_0xsgErr) {
            _0x5b1b57("❌ Error: " + _0xsgErr.message);
          }
          break;
        }
      case "groupid":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          _0x5b1b57("🆔 *Group JID:*\n" + _0x11be99.chat);
          break;
        }
      case "exportmembers":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("📤");
            const _0xemMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            const _0xemList = _0xemMeta.participants.map(_0xemP => _0xemP.id.split("@")[0]).join("\n");
            await _0x106db2.sendMessage(_0x11be99.chat, {
              document: Buffer.from(_0xemList, "utf-8"),
              mimetype: "text/plain",
              fileName: _0xemMeta.subject.replace(/[^a-zA-Z0-9]/g, "_") + "_members.txt",
              caption: "📤 " + _0xemMeta.participants.length + " members exported!"
            });
            await _0x1bf22f("✅");
          } catch (_0xemErr) {
            _0x5b1b57("❌ Error: " + _0xemErr.message);
          }
          break;
        }
      case "rules":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          const _0xruCur = getUserSettings(_0x11be99.chat) || {};
          if (!_0x74101d) {
            return _0x5b1b57(_0xruCur.rules ? "📜 *GROUP RULES*\n━━━━━━━━━━━━━━━━━━\n" + _0xruCur.rules : "❌ No rules set yet!\nAdmin can set with: .rules <text>");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only can set rules!");
          }
          try {
            updateUserSettings(_0x11be99.chat, {
              ..._0xruCur,
              rules: _0x74101d
            });
            _0x5b1b57("✅ Group rules updated!");
            await _0x1bf22f("✅");
          } catch (_0xruErr) {
            _0x5b1b57("❌ Error: " + _0xruErr.message);
          }
          break;
        }
      case "groupdesc":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          try {
            const _0xgdMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            _0x5b1b57("📝 *GROUP DESCRIPTION*\n━━━━━━━━━━━━━━━━━━\n" + (_0xgdMeta.desc || "No description set."));
          } catch (_0xgdErr) {
            _0x5b1b57("❌ Error: " + _0xgdErr.message);
          }
          break;
        }
      case "groupicon":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          try {
            await _0x1bf22f("🖼️");
            const _0xgiUrl = await _0x106db2.profilePictureUrl(_0x11be99.chat, "image").catch(() => null);
            if (!_0xgiUrl) {
              return _0x5b1b57("❌ This group has no icon set!");
            }
            const _0xgiRes = await axios.get(_0xgiUrl, {
              responseType: "arraybuffer"
            });
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: Buffer.from(_0xgiRes.data),
              caption: "🖼️ Current group icon"
            });
            await _0x1bf22f("✅");
          } catch (_0xgiErr) {
            _0x5b1b57("❌ Error: " + _0xgiErr.message);
          }
          break;
        }
      case "groupsettings":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          const _0xgsCur = getUserSettings(_0x11be99.chat) || {};
          const _0xgsMuted = (_0xgsCur.mutedUsers || []).length;
          _0x5b1b57("⚙️ *GROUP BOT SETTINGS*\n━━━━━━━━━━━━━━━━━━\n🛡️ Antilink: " + (_0xgsCur.antilink ? "ON ✅" : "OFF ❌") + "\n👋 Welcome/Goodbye: " + (_0xgsCur.welcome ? "ON ✅" : "OFF ❌") + "\n📜 Rules Set: " + (_0xgsCur.rules ? "Yes ✅" : "No ❌") + "\n🔇 Muted Members: " + _0xgsMuted + "\n━━━━━━━━━━━━━━━━━━\n⚡ " + global.Developer);
          break;
        }
      case "demoteall":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("⏳");
            const _0xdaMeta = await _0x106db2.groupMetadata(_0x11be99.chat);
            const _0xdaAdmins = _0xdaMeta.participants.filter(_0xdaP => _0xdaP.admin && _0xdaP.id.split("@")[0] !== ADMINS[0]).map(_0xdaP => _0xdaP.id);
            if (!_0xdaAdmins.length) {
              return _0x5b1b57("❌ No admins to demote!");
            }
            await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, _0xdaAdmins, "demote");
            _0x5b1b57("✅ Demoted " + _0xdaAdmins.length + " admin(s)!");
            await _0x1bf22f("✅");
          } catch (_0xdaErr) {
            _0x5b1b57("❌ Error: " + _0xdaErr.message);
          }
          break;
        }
      case "warn":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xwaJid = _0x11be99.mentionedJid[0];
          if (!_0xwaJid) {
            return _0x5b1b57("Usage: .warn @mention <reason>");
          }
          try {
            const _0xwaCur = getUserSettings(_0x11be99.chat) || {};
            const _0xwaWarns = _0xwaCur.warnings || {};
            const _0xwaNum = _0xwaJid.split("@")[0];
            _0xwaWarns[_0xwaNum] = (_0xwaWarns[_0xwaNum] || 0) + 1;
            updateUserSettings(_0x11be99.chat, {
              ..._0xwaCur,
              warnings: _0xwaWarns
            });
            if (_0xwaWarns[_0xwaNum] >= 3) {
              await _0x106db2.groupParticipantsUpdate(_0x11be99.chat, [_0xwaJid], "remove");
              _0xwaWarns[_0xwaNum] = 0;
              updateUserSettings(_0x11be99.chat, {
                ..._0xwaCur,
                warnings: _0xwaWarns
              });
              await _0x5b1b57("🚫 @" + _0xwaNum + " reached 3 warnings and was removed!", {
                mentions: [_0xwaJid]
              });
            } else {
              await _0x106db2.sendMessage(_0x11be99.chat, {
                text: "⚠️ @" + _0xwaNum + " warned (" + _0xwaWarns[_0xwaNum] + "/3)" + (_0x74101d ? "\nReason: " + _0x74101d.replace(/@\S+\s*/, "") : ""),
                mentions: [_0xwaJid]
              });
            }
            await _0x1bf22f("✅");
          } catch (_0xwaErr) {
            _0x5b1b57("❌ Error: " + _0xwaErr.message);
          }
          break;
        }
      case "warnings":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          const _0xwvJid = _0x11be99.mentionedJid[0] || _0x11be99.sender;
          const _0xwvCur = getUserSettings(_0x11be99.chat) || {};
          const _0xwvNum = _0xwvJid.split("@")[0];
          const _0xwvCount = (_0xwvCur.warnings || {})[_0xwvNum] || 0;
          _0x5b1b57("⚠️ @" + _0xwvNum + " has " + _0xwvCount + "/3 warning(s).", {
            mentions: [_0xwvJid]
          });
          break;
        }
      case "resetwarn":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xrwJid = _0x11be99.mentionedJid[0];
          if (!_0xrwJid) {
            return _0x5b1b57("Usage: .resetwarn @mention");
          }
          try {
            const _0xrwCur = getUserSettings(_0x11be99.chat) || {};
            const _0xrwWarns = _0xrwCur.warnings || {};
            const _0xrwNum = _0xrwJid.split("@")[0];
            _0xrwWarns[_0xrwNum] = 0;
            updateUserSettings(_0x11be99.chat, {
              ..._0xrwCur,
              warnings: _0xrwWarns
            });
            _0x5b1b57("✅ Warnings reset for @" + _0xrwNum, {
              mentions: [_0xrwJid]
            });
            await _0x1bf22f("✅");
          } catch (_0xrwErr) {
            _0x5b1b57("❌ Error: " + _0xrwErr.message);
          }
          break;
        }
      case "mute":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xmuJid = _0x11be99.mentionedJid[0];
          if (!_0xmuJid) {
            return _0x5b1b57("Usage: .mute @mention");
          }
          try {
            const _0xmuCur = getUserSettings(_0x11be99.chat) || {};
            const _0xmuList = _0xmuCur.mutedUsers || [];
            if (!_0xmuList.includes(_0xmuJid)) {
              _0xmuList.push(_0xmuJid);
            }
            updateUserSettings(_0x11be99.chat, {
              ..._0xmuCur,
              mutedUsers: _0xmuList
            });
            _0x5b1b57("🔇 @" + _0xmuJid.split("@")[0] + " muted! Their messages will be auto-deleted.", {
              mentions: [_0xmuJid]
            });
            await _0x1bf22f("✅");
          } catch (_0xmuErr) {
            _0x5b1b57("❌ Error: " + _0xmuErr.message);
          }
          break;
        }
      case "unmute":
        {
          if (!_0x11be99.isGroup) {
            return _0x5b1b57("Use in group!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          const _0xumJid = _0x11be99.mentionedJid[0];
          if (!_0xumJid) {
            return _0x5b1b57("Usage: .unmute @mention");
          }
          try {
            const _0xumCur = getUserSettings(_0x11be99.chat) || {};
            const _0xumList = (_0xumCur.mutedUsers || []).filter(_0xumJ => _0xumJ !== _0xumJid);
            updateUserSettings(_0x11be99.chat, {
              ..._0xumCur,
              mutedUsers: _0xumList
            });
            _0x5b1b57("🔊 @" + _0xumJid.split("@")[0] + " unmuted!", {
              mentions: [_0xumJid]
            });
            await _0x1bf22f("✅");
          } catch (_0xumErr) {
            _0x5b1b57("❌ Error: " + _0xumErr.message);
          }
          break;
        }
      case "setname":
      case "updateprofile":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .setname <new_name>\nExample: .setname ${global.BotName}");
          }
          try {
            await _0x1bf22f("✏️");
            await _0x106db2.updateProfileName(_0x74101d);
            _0x5b1b57("✅ Profile name updated to: " + _0x74101d);
            await _0x1bf22f("✅");
          } catch (_0x3bdd80) {
            _0x5b1b57("❌ Error: " + _0x3bdd80.message);
          }
          break;
        }
      case "setpp":
      case "setprofilepic":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x11be99.quoted || !_0x11be99.quoted.message?.imageMessage) {
            return _0x5b1b57("❌ Reply to an image to set as profile picture!\nUsage: Reply to image with .setpp");
          }
          try {
            await _0x1bf22f("📸");
            const _0x243fd3 = await _0x106db2.downloadMediaMessage(_0x11be99.quoted);
            await _0x106db2.updateProfilePicture(_0x106db2.user.id, _0x243fd3);
            _0x5b1b57("✅ " + global.BotName + " profile picture updated successfully!");
            await _0x1bf22f("✅");
          } catch (_0x31313e) {
            _0x5b1b57("❌ Error: " + _0x31313e.message);
          }
          break;
        }
      case "delpp":
      case "removepp":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x1bf22f("🗑️");
            await _0x106db2.removeProfilePicture(_0x106db2.user.id);
            _0x5b1b57("✅ " + global.BotName + " profile picture removed!");
          } catch (_0x480a81) {
            _0x5b1b57("❌ Error: " + _0x480a81.message);
          }
          break;
        }
      case "getpp":
      case "getprofilepic":
        {
          let _0x1d6147 = _0x11be99.quoted ? _0x11be99.quoted.sender || _0x11be99.quoted.participant : _0x74101d || _0x11be99.sender;
          if (!_0x1d6147.includes("@")) {
            _0x1d6147 = _0x1d6147 + "@s.whatsapp.net";
          }
          try {
            await _0x1bf22f("🖼️");
            const _0x482fdd = await _0x106db2.profilePictureUrl(_0x1d6147, "image");
            await _0x106db2.sendMessage(_0x11be99.chat, {
              image: {
                url: _0x482fdd
              },
              caption: "📸 Profile Picture\n👤 " + _0x1d6147.split("@")[0] + "\n\n⚡ " + global.BotName
            });
          } catch (_0x1dc1a0) {
            _0x5b1b57("❌ No profile picture found!");
          }
          break;
        }
      case "getstatus":
        {
          let _0x3f8c98 = _0x74101d || _0x11be99.sender;
          if (!_0x3f8c98.includes("@")) {
            _0x3f8c98 = _0x3f8c98 + "@s.whatsapp.net";
          }
          try {
            const _0x8c1f3b = await _0x106db2.fetchStatus(_0x3f8c98);
            _0x5b1b57("📝 *Status*\n👤 " + _0x3f8c98.split("@")[0] + "\n📋 " + (_0x8c1f3b.status || "No status") + "\n🕒 " + new Date(_0x8c1f3b.setAt).toLocaleString());
          } catch (_0x112ee3) {
            _0x5b1b57("❌ No status found!");
          }
          break;
        }
      case "nfollow":
      case "follow":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .follow <newsletter_jid_or_invite>\nExample: .follow 120363359467682362@newsletter");
          }
          try {
            await _0x1bf22f("🔔");
            let _0x3db1 = _0x74101d;
            if (!_0x3db1.includes("@")) {
              const _0x2011e7 = await _0x106db2.newsletterMetadata("invite", _0x74101d);
              _0x3db1 = _0x2011e7.id;
            }
            await _0x106db2.newsletterFollow(_0x3db1);
            _0x5b1b57("✅ " + global.BotName + " now following newsletter: " + _0x3db1);
          } catch (_0x3a6edb) {
            _0x5b1b57("❌ Error: " + _0x3a6edb.message);
          }
          break;
        }
      case "nunfollow":
      case "unfollow":
        {
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .unfollow <newsletter_jid>");
          }
          try {
            await _0x106db2.newsletterUnfollow(_0x74101d);
            _0x5b1b57("✅ " + global.BotName + " unfollowed newsletter: " + _0x74101d);
          } catch (_0x5ec8f0) {
            _0x5b1b57("❌ Error: " + _0x5ec8f0.message);
          }
          break;
        }
      case "ninfo":
      case "newsletterinfo":
        {
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .ninfo <invite_code_or_jid>\nExample: .ninfo XjSkdjh");
          }
          try {
            await _0x1bf22f("📡");
            const _0x461084 = await _0x106db2.newsletterMetadata("invite", _0x74101d);
            let _0x6de55e = "📡 *NEWSLETTER INFO*\n━━━━━━━━━━━━━━━━━━\n📛 *Name:* " + (_0x461084.name || _0x461084.subject) + "\n🆔 *JID:* " + _0x461084.id + "\n👥 *Subscribers:* " + (_0x461084.subscribers?.toLocaleString() || "N/A") + "\n📝 *Description:* " + (_0x461084.description || "No description") + "\n👤 *Owner:* " + (_0x461084.owner || "Unknown") + "\n━━━━━━━━━━━━━━━━━━\n⚡ " + global.Developer;
            _0x5b1b57(_0x6de55e);
          } catch (_0x353a01) {
            _0x5b1b57("❌ Error: " + _0x353a01.message);
          }
          break;
        }
      case "forward":
      case "fwd":
        {
          if (!_0x11be99.quoted) {
            return _0x5b1b57("Reply to a message to forward!");
          }
          if (!_0x74101d) {
            return _0x5b1b57("Usage: .forward <jid>\nExample: .forward 923xxxxxxxxx@s.whatsapp.net");
          }
          try {
            let _0x3086f7 = _0x74101d;
            if (!_0x3086f7.includes("@")) {
              _0x3086f7 = _0x3086f7 + "@s.whatsapp.net";
            }
            await _0x106db2.copyNForward(_0x3086f7, _0x11be99.quoted, true);
            _0x5b1b57("✅ Message forwarded to " + _0x3086f7);
          } catch (_0x56072f) {
            _0x5b1b57("❌ Error: " + _0x56072f.message);
          }
          break;
        }
      case "read":
      case "markread":
        {
          if (!_0x11be99.quoted) {
            return _0x5b1b57("Reply to a message to mark as read!");
          }
          try {
            await _0x106db2.readMessages([_0x11be99.quoted.key]);
            _0x5b1b57("✅ Message marked as read");
          } catch (_0x133304) {
            _0x5b1b57("❌ Error: " + _0x133304.message);
          }
          break;
        }
      case "delete":
      case "del":
        {
          if (!_0x11be99.quoted) {
            return _0x5b1b57("Reply to a message to delete!");
          }
          if (!_0x4a7a15(_0x11be99.sender)) {
            return _0x5b1b57("❌ Admin only!");
          }
          try {
            await _0x106db2.sendMessage(_0x11be99.chat, {
              delete: _0x11be99.quoted.key
            });
            _0x5b1b57("✅ Message deleted!");
          } catch (_0x288117) {
            _0x5b1b57("❌ Error: " + _0x288117.message);
          }
          break;
        }
      case "spsong":
      case "spotifysong":
        {
          try {
            if (!_0x74101d) {
              return _0x5b1b57("🎵 *Usage:* .spsong <song name>\n*Example:* .spsong Believer");
            }
            await _0x1bf22f("🔍");
            await _0x5b1b57("🔎 *Searching Spotify for:* " + _0x74101d);
            const _0x21eced = "376136387538459893883312310911992847112448894410210511297108";
            const _0x33be43 = "1.2.88.61.ge172202b";
            const _0x3f35a1 = "21b3fe49546912ba782db5c47e9ef5a7dbd20329520ba0c7d0fcfadee671d24e";
            function _0x26ea5d(_0x5c1fe8) {
              const _0x57aee0 = Math.floor(_0x5c1fe8 / 1000 / 30);
              const _0x512752 = Buffer.alloc(8);
              _0x512752.writeBigInt64BE(BigInt(_0x57aee0));
              const _0x30db6a = crypto.createHmac("sha1", Buffer.from(_0x21eced, "utf8")).update(_0x512752);
              const _0x40fe8d = _0x30db6a.digest();
              const _0x2e9762 = _0x40fe8d[_0x40fe8d.length - 1] & 15;
              const _0xf14218 = (_0x40fe8d.readUInt32BE(_0x2e9762) & 2147483647) % 1000000;
              return _0xf14218.toString().padStart(6, "0");
            }
            let _0x1efbb8 = axios.create({
              headers: {
                referer: "https://open.spotify.com/",
                origin: "https://open.spotify.com",
                "content-type": "application/json",
                accept: "application/json",
                "user-agent": "Mozilla/5.0 (Linux; Android 16; NX729J) AppleWebKit/537.36"
              }
            });
            const _0x2890c7 = Math.floor(Date.now() / 1000);
            const _0x1f37f6 = await _0x1efbb8.get("https://open.spotify.com/api/token", {
              params: {
                reason: "init",
                productType: "web-player",
                totp: _0x26ea5d(Date.now()),
                totpServer: _0x26ea5d(_0x2890c7 * 1000),
                totpVer: "61"
              }
            });
            const _0x910ff5 = _0x1f37f6.data;
            const _0xb5806d = await _0x1efbb8.post("https://clienttoken.spotify.com/v1/clienttoken", {
              client_data: {
                client_version: _0x33be43,
                client_id: _0x910ff5.clientId,
                js_sdk_data: {
                  device_brand: "unknown",
                  device_model: "unknown",
                  os: "linux",
                  os_version: "24.04",
                  device_id: crypto.randomUUID(),
                  device_type: "computer"
                }
              }
            });
            const _0x73d697 = _0xb5806d.data.granted_token.token;
            _0x1efbb8.defaults.headers.authorization = "Bearer " + _0x910ff5.accessToken;
            _0x1efbb8.defaults.headers["client-token"] = _0x73d697;
            _0x1efbb8.defaults.headers["spotify-app-version"] = _0x33be43;
            const _0x208cf9 = await _0x1efbb8.post("https://api-partner.spotify.com/pathfinder/v2/query", {
              variables: {
                searchTerm: _0x74101d,
                offset: 0,
                limit: 5,
                numberOfTopResults: 5,
                includeAudiobooks: true,
                includeArtistHasConcertsField: false,
                includePreReleases: true
              },
              operationName: "searchDesktop",
              extensions: {
                persistedQuery: {
                  version: 1,
                  sha256Hash: _0x3f35a1
                }
              }
            });
            const _0x31dc72 = _0x208cf9.data?.data?.searchV2?.tracksV2?.items || [];
            if (!_0x31dc72.length) {
              throw new Error("No track found");
            }
            const _0x571680 = _0x31dc72[0].item?.data;
            const _0x25b271 = _0x571680.uri;
            const _0xb58595 = _0x571680.name;
            const _0x58d74d = (_0x571680.artists?.items || []).map(_0x2e1250 => _0x2e1250.profile?.name).join(", ");
            const _0x3b7fb5 = "https://open.spotify.com/track/" + _0x25b271.split(":")[2];
            await _0x5b1b57("📥 *Found:* " + _0xb58595 + " by " + _0x58d74d + "\n⏳ Downloading...");
            const _0x2d8f34 = await axios.get("https://spotmate.online/en1");
            const _0xdcfd29 = _0x2d8f34.data.match(/<meta[^>]+name="csrf-token"[^>]+content="([^"]+)"/i);
            const _0x54953f = _0xdcfd29[1];
            const _0x26a537 = _0x2d8f34.headers["set-cookie"].map(_0x3dab2f => _0x3dab2f.split(";")[0]).join("; ");
            const _0x260c3b = axios.create({
              baseURL: "https://spotmate.online",
              headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-csrf-token": _0x54953f,
                cookie: _0x26a537,
                "x-requested-with": "XMLHttpRequest",
                origin: "https://spotmate.online",
                referer: "https://spotmate.online/en1",
                "user-agent": "Mozilla/5.0"
              }
            });
            const _0x236a70 = await _0x260c3b.post("/getTrackData", qs.stringify({
              spotify_url: _0x3b7fb5
            }));
            const _0xdddde6 = await _0x260c3b.post("/convert", qs.stringify({
              urls: _0x3b7fb5
            }));
            const _0x1b61e0 = _0xdddde6.data?.url;
            if (!_0x1b61e0) {
              throw new Error("Download link not received");
            }
            const _0x4855cb = await axios.get(_0x1b61e0, {
              responseType: "arraybuffer",
              timeout: 60000
            }).then(_0x16844a => Buffer.from(_0x16844a.data));
            const _0x2a9c9f = (_0x4855cb.length / 1024 / 1024).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              audio: _0x4855cb,
              mimetype: "audio/mpeg",
              fileName: _0xb58595.replace(/[^\w\s]/g, "") + ".mp3",
              caption: "🎵 *" + _0xb58595 + "*\n👤 *Artist:* " + _0x58d74d + "\n📦 *Size:* " + _0x2a9c9f + " MB\n🔗 *Spotify:* " + _0x3b7fb5 + "\n\n✅ " + global.BotName + " - Download Complete!",
              ptt: false
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x1cc515) {
            console.error(_0x1cc515);
            await _0x1bf22f("❌");
            _0x5b1b57("❌ *Spotify Error:* " + _0x1cc515.message);
          }
          break;
        }
      case "spotify":
      case "spotifydl":
        {
          try {
            let _0x1cdc68 = _0x74101d.trim();
            if (!_0x1cdc68 || !_0x1cdc68.includes("spotify.com/track/")) {
              return _0x5b1b57("🎵 *Usage:* .spotify <track_url>\n*Example:* .spotify https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT");
            }
            await _0x1bf22f("🔍");
            await _0x5b1b57("📥 *" + global.BotName + " - Downloading from Spotify...*");
            const _0x3a26d4 = await axios.get("https://spotmate.online/en1");
            const _0x54bdf6 = _0x3a26d4.data.match(/<meta[^>]+name="csrf-token"[^>]+content="([^"]+)"/i);
            const _0x1c1be2 = _0x54bdf6[1];
            const _0x5c871b = _0x3a26d4.headers["set-cookie"].map(_0x18760f => _0x18760f.split(";")[0]).join("; ");
            const _0x5f045a = axios.create({
              baseURL: "https://spotmate.online",
              headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-csrf-token": _0x1c1be2,
                cookie: _0x5c871b,
                "x-requested-with": "XMLHttpRequest",
                origin: "https://spotmate.online",
                referer: "https://spotmate.online/en1",
                "user-agent": "Mozilla/5.0"
              }
            });
            const _0x2bfb26 = await _0x5f045a.post("/getTrackData", qs.stringify({
              spotify_url: _0x1cdc68
            }));
            const _0x64d6cc = await _0x5f045a.post("/convert", qs.stringify({
              urls: _0x1cdc68
            }));
            const _0x4ff2ed = _0x64d6cc.data?.url;
            if (!_0x4ff2ed) {
              throw new Error("Download link not received");
            }
            const _0x2572e9 = _0x2bfb26.data;
            const _0x189f48 = _0x2572e9.name || "Spotify Track";
            const _0x2502ba = _0x2572e9.artists || "Unknown Artist";
            const _0x5b27b5 = _0x2572e9.album || "";
            const _0x2cda88 = await axios.get(_0x4ff2ed, {
              responseType: "arraybuffer",
              timeout: 60000
            }).then(_0x30d195 => Buffer.from(_0x30d195.data));
            const _0x2282ca = (_0x2cda88.length / 1024 / 1024).toFixed(2);
            await _0x106db2.sendMessage(_0x11be99.chat, {
              audio: _0x2cda88,
              mimetype: "audio/mpeg",
              fileName: _0x189f48.replace(/[^\w\s]/g, "") + ".mp3",
              caption: "🎵 *" + _0x189f48 + "*\n👤 *Artist:* " + _0x2502ba + "\n💿 *Album:* " + _0x5b27b5 + "\n📦 *Size:* " + _0x2282ca + " MB\n🔗 *Spotify:* " + _0x1cdc68 + "\n\n✅ " + global.BotName + " - Download Complete!",
              ptt: false
            }, {
              quoted: _0x11be99
            });
            await _0x1bf22f("✅");
          } catch (_0x33bbdd) {
            console.error(_0x33bbdd);
            await _0x1bf22f("❌");
            _0x5b1b57("❌ *Spotify Error:* " + _0x33bbdd.message);
          }
          break;
        }
      case "groupcmds":
      case "grouphelp":
        {
          const _0x11bc00 = "╭──〘 *" + global.BotName + " - GROUP & PROFILE COMMANDS* 〙──\n│\n├─👥 *GROUP COMMANDS*\n│  ├─ .gcreate <name> - Create group\n│  ├─ .gleave - Leave group\n│  ├─ .join <code> - Join group by invite\n│  ├─ .invitelink - Get invite link\n│  ├─ .revoke - Revoke invite link\n│  ├─ .updategroup <subject/desc> <text>\n│  ├─ .groupset <ephemeral/announce/restrict>\n│  ├─ .add @mention - Add member\n│  ├─ .kick @mention - Remove member\n│  ├─ .promote @mention - Make admin\n│  ├─ .demote @mention - Remove admin\n│  ├─ .groupinfo - Group details\n│  ├─ .tagall <text> - Tag all members\n│  ├─ .hidetag <text> - Hidden tag all\n│  ├─ .setgname <name> - Quick rename\n│  ├─ .setgdesc <desc> - Quick description\n│  ├─ .setgpp (reply image) - Set group icon\n│  ├─ .lockgroup - Admins only mode\n│  ├─ .unlockgroup - Everyone can send\n│  ├─ .listadmins - List group admins\n│  ├─ .groupmembers - List all members\n│  └─ .antilink on/off - Auto-remove invite links\n│\n├─👤 *PROFILE COMMANDS*\n│  ├─ .setname <name> - Change bot name\n│  ├─ .setpp (reply to image) - Set profile pic\n│  ├─ .delpp - Remove profile pic\n│  ├─ .setstatus <text> - Set about status\n│  └─ .getpp [jid] - Get profile picture\n│\n├─📡 *NEWSLETTER COMMANDS*\n│  ├─ .follow <jid/code> - Follow newsletter\n│  ├─ .unfollow <jid> - Unfollow newsletter\n│  └─ .ninfo <code> - Newsletter info\n│\n├─💬 *MESSAGE COMMANDS*\n│  ├─ .forward <jid> (reply) - Forward message\n│  ├─ .read (reply) - Mark as read\n│  └─ .delete (reply) - Delete message\n│\n╰──────────────────────────\n⚡ *" + global.Developer + "*";
          _0x5b1b57(_0x11bc00);
          break;
        }
      default:
        if (_0x5be814.startsWith("=>")) {
          if (!_0x4a7a15(_0x11be99.sender)) {
            await _0x5b1b57("❌ *ADMIN ONLY*");
            break;
          }
          try {
            const _0x13ce8c = await eval("(async () => { return " + _0x5be814.slice(3) + " })()");
            await _0x5b1b57(util.format(_0x13ce8c));
          } catch (_0x550dfc) {
            console.error("Eval error:", _0x550dfc);
            await _0x5b1b57(String(_0x550dfc));
          }
        }
        if (_0x5be814.startsWith(">")) {
          if (!_0x4a7a15(_0x11be99.sender)) {
            await _0x5b1b57("❌ *ADMIN ONLY*");
            break;
          }
          let _0x22ed03 = _0x5be814.trim().split(/ +/)[0];
          try {
            let _0x300f04 = await eval("(async () => { " + (_0x22ed03 == ">>" ? "return" : "") + " " + q + "})()");
            await _0x5b1b57(util.format(_0x300f04));
          } catch (_0x1dd9dd) {
            console.error("Exec error:", _0x1dd9dd);
            await _0x5b1b57(String(_0x1dd9dd));
          }
        }
        if (_0x5be814.startsWith("π")) {
          if (!_0x4a7a15(_0x11be99.sender)) {
            await _0x5b1b57("❌ *ADMIN ONLY*");
            break;
          }
          exec(_0x5be814.slice(2), (_0xbb8b0e, _0x6cc0cf) => {
            if (_0xbb8b0e) {
              _0x5b1b57("" + _0xbb8b0e);
            }
            if (_0x6cc0cf) {
              _0x5b1b57(_0x6cc0cf);
            }
          });
        }
    }
  } catch (_0x35fecb) {
    console.error("❌ Main handler error:", _0x35fecb);
    console.error("Stack:", _0x35fecb.stack);
    try {
      await reply("❌ *System Error:*\n" + _0x35fecb.message.substring(0, 200));
    } catch (_0x3c280e) {
      console.error("Could not send error reply:", _0x3c280e);
    }
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});