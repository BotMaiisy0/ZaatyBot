
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `β­βγπππππππ ππππ-πππγββ·
β β₯ββ¦βπα©­βsi deseas π€apoyarme mejor ayΓΊdame y apΓ³yame en mis cuentas oficiales de πYouTube y en π₯facebook y podrΓ­as regalarme una estrella en mi cuenta de gitπ
β β₯ββ¦βπα©­βπ½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ
β β₯ββ¦βπα©­βhttp://wa.me/5212411719888 
β β₯ββ¦βπα©­βππππππππ: ππππ’
β β₯ββ¦βπα©­βhttps://youtu.be/6FYKkeBCTdw
β β₯ββ¦ββοΈα©­βπΆπΈπ π²π»πΎπ½π΄
β β₯ββ¦βπα©­βhttps://github.com/OFC-YOVANI/HADES-BOT-MD.git
β β₯ββ¦βπ±α©­βπΆπππΏπΎ π³π΄ π΅π°π²π΄π±πΎπΎπΊ 
β β₯ββ¦βπ΄α©­βhttps://www.facebook.com/groups/987464505464904
β β₯ββ¦βπα©­βvoy a agradecer βοΈmucho su apoyo π 
β β₯β°βββββββββββ
β°ββββββββββββββ·`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `πππππππ ππππ-πππ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HATSUNE-MIKU.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/6FYKkeBCTdw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'π₯ΙͺΙ΄sα΄α΄Κα΄ΚΚα΄α΄π€'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: 'π§Ώα΄α΄α΄Ι΄α΄α΄sπ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i

export default handler
