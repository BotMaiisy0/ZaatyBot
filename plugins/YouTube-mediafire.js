import { mediafiredl } from '@bochilteam/scraper'
import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*`
try {
let json = await mediafireDl2(args[0])
let caption = `β­βββββΒ°.β‘.Β°β§βββββ
βπ*π½πΎπΌπ±ππ΄:*  ${json[0].nama.replace('+', ' ')}
βπ*πΏπ΄ππΎ:* ${json[0].size}
βπ΄*ππΈπΏπΎ:* ${json[0].mime.toUpperCase()}
β°βββββΒ°.β‘.Β°β§βββββ
*β³ π΄ππΏπ΄ππ΄ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ²π·πΈππΎ. . . .* 
`.trim()   
conn.sendMessage(m.chat, { text: caption, footer: wm }, { quoted: m })
conn.sendMessage(m.chat, { document : { url: json[0].link }, fileName : json[0].nama.replace('+', ' '), mimetype: json[0].mime.toUpperCase() }, { quoted: m })
} catch {  
try {  
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res
let caption = `β­βββββΒ°.β‘.Β°β§βββββ
βπ*π½πΎπΌπ±ππ΄:* ${filename}
βπ*πΏπ΄ππΎ:* ${filesizeH}
βπ΄*ππΈπΏπΎ:* ${ext}
β°βββββΒ°.β‘.Β°β§βββββ
*β³ π΄ππΏπ΄ππ΄ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ²π·πΈππΎ. . . .* 
`.trim()
let msg = m.reply(caption)
if (!msg || msg == '') return m.reply(global.wait)
let res2 = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkeysapi}&url=${args[0]}`)
let res3 = await res2.json()
let res4 = await res3.result.link  
if (!url || url == '') url = res4
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {  
await m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*')
}}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.limit = 4
export default handler
async function mediafireDl2(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
const seplit = link.split('/')
const nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil }     
