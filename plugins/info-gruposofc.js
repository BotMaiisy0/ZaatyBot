import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
//let vn = './media/naa.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `β­ββγπππππππ ππππ-πππγ
β β₯β­ββββββββββββββ      
β β₯βΰΉΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${taguser}πβ¨ 
β β₯ββππππππ ππππππ ${uptime}
β β₯βππππππ ${week}, ${date}
β β₯βπππππππππ ${rtotalreg}
β β₯βπ€΄πππππππ πππ πππ 
β β₯βhttp://wa.me/5212411719888  
β β₯β°βββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----*GRUPOS OFICIALES*----β¦Ώ
β β₯β­βββββββββββββ
β β₯ββ¦β ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· πβ¨ HOLA TE ENVIAMOS 
β β₯ββ¦ββοΈοΈα©­βUNIRTE AL LOSπ GRUPOS 
β β₯ββ¦βπΉοΈα©­βOFICIALES DEL BOT DEπ©βπ«β¨
β β₯ββ¦βποΈα©­βπππππ _πππ y miku bot 
β β₯ββ¦βποΈα©­β SOMOS UNA FAMILIA DE BOTS 
β β₯ββ¦βπα©­βπ·π°π³π΄π-π±πΎπ π πΌπΈπΊπ-π±πΎπ1 
β β₯ββ¦βπα©­βhttps://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0
β β₯ββ¦ββοΈα©­βπ·π°π³π΄π-π±πΎπ π πΌπΈπΊπ-π±πΎπ2 
β β₯ββ¦ββ¨α©­βhttps://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ
β β₯ββ¦βπα©­βπ·π°π³π΄π-π±πΎπ π πΌπΈπΊπ-π±πΎπ3 
β β₯ββ¦ββ€οΈα©­βhttps://chat.whatsapp.com/KnpPbr8BN4VDLtwJFMNTtw
β β₯ββ¦βπ±α©­βπ·π°π³π΄π-π±πΎπ π πΌπΈπΊπ-π±πΎπ4 
β β₯ββ¦βπα©­βhttps://chat.whatsapp.com/BtzGZregRxzFswm0FgunHL
β β₯β°βββββββββββ
β°ββββββββββββββ·`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'π§Ώα΄α΄Ι΄α΄β' }, type: 1 },
{ buttonId: '/donar', buttonText: { displayText: 'πα΄α΄Ι΄α΄Κπ' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'βπππππππ ππππ-ππππ?',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^linkgc|grupos|grupos|grupos|grupos|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
