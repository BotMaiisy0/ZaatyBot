let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `β­ββγπππ_ππππ_πππγβββ·
β β₯β­ββββββββββββββ      
β β₯βπ§Ώ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯π gracias por π₯³solicitar la instalaciΓ³n π€ del bot gracias por tu preferencia te dejarΓ© los requisitos para π©βπ»instalar el bot cualquier duda puedes contactarme a mi nΓΊmero personal en caso de si  necesitas ayuda para instalar π€΄
β β₯β°βββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----π²πΎπ½ππ°π²ππΎ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯βπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
β β₯βhttp://wa.me/5212411719888
β β₯βππππππππ: ππππ’
β β₯βhttps://youtu.be/HoxZuQokeMM
β β₯β°βββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯βpkg update && pkg upgrade
β β₯βpkg install git -y
β β₯βpkg install nodejs -y
β β₯βpkg install ffmpeg -y
β β₯βpkg install imagemagick -y
β β₯βtermux-setup-storage
β β₯βgit clone https://github.com/OFC-YOVANI/HATSUNE-MIKU.git
β β₯βcd HATSUNE-MIKU
β β₯βnpm install
β β₯βnpm update
β β₯βnpm start
β β₯β°βββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----πΈπ½π΅πΎππΌπ°π²πΈπΎπ½----β¦Ώ
β β₯β­βββββββββββββ 
β β₯βSi el termux se cierra para volver activar escribe:
β β₯βcd HATSUNE-MIKU
β β₯βnpm start 
β β₯βPara obtener nuevamente el 
β β₯βcodigo QR, escribe en el termux:
β β₯βcd HATSUNE-MIKU
β β₯βrm -rf session.data.json
β β₯βnpm start 
β β₯βCada vez que realices una modificacion en el
β β₯βrepositorio del Bot (tu GitHub), puedes usar 
β β₯βel comando #actualizar para que se actualicen los datos
β β₯βAconsejable maximo 30 grupos, despues 
β β₯βde esa cantidad el Bot empieza a ir 
β β₯βexcesivamente lento (depende del
β β₯βWhatsApp igual)
β β₯β°βββββββββββ
β°ββββββββββββββ·`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `ππππ-πππππ-πππ-ππβ¨`,
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
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: 'π§ΏΙ’Ιͺα΄Κα΄Κπ'}, type: 1}, 
{buttonId: `${usedPrefix}yovani`, buttonText: {displayText: 'π€΄α΄α΄Ι΄α΄α΄α΄α΄α΄π§Ώ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler