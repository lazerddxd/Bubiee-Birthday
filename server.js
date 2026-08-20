const http=require("http"),fs=require("fs"),path=require("path");
const root=path.join(__dirname,"public"),port=process.env.PORT||3000;
const mime={".html":"text/html",".css":"text/css",".js":"text/javascript",".jpg":"image/jpeg",".wav":"audio/wav"};
const memories=[["😊","Senyummu","Senyummu selalu punya cara membuat hari terasa lebih ringan."],["✨","Hal kecil","Hal-hal kecil tentangmu justru menjadi bagian yang paling aku ingat."],["❤️","Cerita kita","Semoga masih ada banyak bab yang bisa kita tulis bersama."]];
http.createServer((req,res)=>{const u=new URL(req.url,`http://${req.headers.host}`);
if(u.pathname==="/api/health")return json(res,{ok:true,app:"Bubiee Birthday Studio"});
if(u.pathname==="/api/memories")return json(res,memories);
let n=decodeURIComponent(u.pathname);if(n==="/")n="/index.html";const f=path.normalize(path.join(root,n));
if(!f.startsWith(root))return end(res,403,"Forbidden");fs.stat(f,(e,s)=>{if(e||!s.isFile())return end(res,404,"Not found");res.writeHead(200,{"Content-Type":mime[path.extname(f)]||"application/octet-stream"});fs.createReadStream(f).pipe(res);});}).listen(port,()=>console.log(`http://localhost:${port}`));
function end(r,c,t,b){r.writeHead(c,{"Content-Type":t});r.end(b||t)}function json(r,o){r.writeHead(200,{"Content-Type":"application/json"});r.end(JSON.stringify(o))}