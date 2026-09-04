global.PORT = process.env.PORT || 20348;
global.BotName = "RIZO TOXIC MD"
global.Developer = "RIZO HACKER"
global.Name = "RIZO"
global.ownername = "RIZO HACKER"
global.ytname = "@rizoteach1"
global.socialm = "GitHub: rizolegend5"
global.location = "Pakpattan, Pakistan"
global.url1 = 'https://whatsapp.com/channel/0029Vb9684d1SWszhXpuCr3g' //
global.url2 = 'https://whatsapp.com/channel/0029Vb9684d1SWszhXpuCr3g1' //
global.linkgc = 'https://whatsapp.com/channel/0029Vb9684d1SWszhXpuCr3g'
global.delayjpm = 3500
global.ownernumber = '923497507427'  //creator number
global.ownername = 'RIZO HACKER' //owner name
global.botname = 'RIZO TOXIC MD' //name of the bot

//sticker details
global.packname = 'Stickers By Rizo'
global.author = 'Rizo \n\nContact: +92323960****'

//console view/theme
global.themeemoji = '🕷️'
global.wm = "𝚁𝙸𝚉𝙾."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb9684d1SWszhXpuCr3g'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}
// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Be Used By Premium User Only" Want Premium? Chat Owner`,
}

// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})