const $=s=>document.querySelector(s),audio=$("#audio");let playing=false,photoIndex=0;
const photos=["bubie-1.jpg","bubie-2.jpg","bubie-3.jpg","bubie-4.jpg","bubie-5.jpg","bubie-6.jpg","bubie-7.jpg"];
const captions=["Your smile ❤️","A moment together","Us ✨","Pretty as always","My favorite view","Another memory ❤️","Me & You ❤️"];
function confetti(n=90){for(let i=0;i<n;i++){const e=document.createElement("i");e.style.cssText=`position:fixed;z-index:110;width:8px;height:14px;top:-20px;left:${Math.random()*100}vw;background:${["#ff5b95","#ffb2ca","#a979ff","#fff"][Math.floor(Math.random()*4)]};animation:fall ${2+Math.random()*3}s linear forwards`;document.body.appendChild(e);setTimeout(()=>e.remove(),5500)}}
$("#open").onclick=()=>{$("#intro").classList.add("hide");audio.play().then(()=>{playing=true;$("#music").textContent="♫"}).catch(()=>{});confetti(120)};
$("#music").onclick=()=>{if(playing){audio.pause();playing=false;$("#music").textContent="♪"}else{audio.play();playing=true;$("#music").textContent="♫"}};
$("#theme").onclick=()=>document.body.classList.toggle("light");$("#maybe").onclick=()=>alert("Jawabannya harus YES dong 😜❤️");
function modal(t){$("#msg").innerHTML=t+"<br><br><b>I love you. Always. ❤️</b>";$("#modal").classList.add("show")}
$("#yes").onclick=()=>{confetti(160);modal("Aku simpan jawaban itu ya. ❤️<br><br>Mari kita buat lebih banyak cerita, perjalanan, foto, dan alasan untuk tetap memilih satu sama lain.")};
$("#final").onclick=()=>modal("Kalau suatu hari kamu membuka website ini lagi, semoga kamu masih tersenyum. Terima kasih sudah hadir. Selamat ulang tahun, sayang. Semoga panjang umur, sehat selalu, bahagia terus, dan semoga aku bisa menemani banyak ulang tahunmu berikutnya.");
$("#close").onclick=()=>$("#modal").classList.remove("show");$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};
const text="Untuk seseorang yang selalu punya tempat spesial di hatiku...",q=$("#typing");let ti=0;(function type(){if(ti<text.length){q.textContent+=text[ti++];setTimeout(type,38)}})();
$("#photos").innerHTML=photos.map((p,i)=>`<figure data-index="${i}"><img src="photos/${p}" loading="${i<2?"eager":"lazy"}" alt="${captions[i]}"><figcaption>${captions[i]}</figcaption></figure>`).join("");
document.querySelectorAll("#photos figure").forEach(f=>f.onclick=()=>openPhoto(+f.dataset.index));
function openPhoto(i){photoIndex=(i+photos.length)%photos.length;$("#lbImg").src="photos/"+photos[photoIndex];$("#lbCaption").textContent=captions[photoIndex];$("#lightbox").classList.add("show")}
function step(n){openPhoto(photoIndex+n)}$("#lbClose").onclick=()=>$("#lightbox").classList.remove("show");$("#lbPrev").onclick=()=>step(-1);$("#lbNext").onclick=()=>step(1);$("#lightbox").onclick=e=>{if(e.target.id==="lightbox")$("#lightbox").classList.remove("show")};
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#lightbox").classList.remove("show");if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
// 🎂 Tanggal lahir Bubie dikunci: 10 Agustus 2001
// Countdown otomatis menuju 10 Agustus berikutnya setiap tahun.
const BUBIE_BIRTHDAY_MONTH = 7; // Agustus (Januari = 0)
const BUBIE_BIRTHDAY_DAY = 10;

function updateCountdown(){
    const now = new Date();

    let target = new Date(
        now.getFullYear(),
        BUBIE_BIRTHDAY_MONTH,
        BUBIE_BIRTHDAY_DAY,
        0, 0, 0
    );

    if(target <= now){
        target.setFullYear(now.getFullYear() + 1);
    }

    let d = Math.max(0, target - now);
    const days = Math.floor(d / 86400000);
    d %= 86400000;

    const hours = Math.floor(d / 3600000);
    d %= 3600000;

    const mins = Math.floor(d / 60000);
    const secs = Math.floor(d / 1000) % 60;

    $("#days").textContent = String(days).padStart(2, "0");
    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#mins").textContent = String(mins).padStart(2, "0");
    $("#secs").textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
const memories = [
  [
    "😊 Senyummu",
    "Senyummu",
    "Senyummu selalu punya cara membuat hari terasa lebih ringan."
  ],
  [
    "✨ Hal kecil",
    "Hal kecil",
    "Hal-hal kecil tentangmu justru menjadi bagian yang paling aku ingat."
  ],
  [
    "❤️ Cerita kita",
    "Cerita kita",
    "Semoga masih ada banyak bab yang bisa kita tulis bersama."
  ],
  [
    "🥰 Cara kamu",
    "Cara kamu",
    "Cara kamu memperlakukan aku selalu punya tempat spesial di hatiku."
  ],
  [
    "🌷 Kamu",
    "Kamu",
    "Aku suka kamu bukan karena kamu sempurna, tapi karena kamu adalah kamu."
  ]
];

const cards = document.querySelector("#cards");

if (cards) {
  cards.innerHTML = memories.map(m => `
    <div class="card">
      <h4>${m[0]}</h4>
      <p>${m[2]}</p>
    </div>
  `).join("");
}
const c=$("#fx"),x=c.getContext("2d");let W,H,p=[];function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();onresize=rs;for(let j=0;j<45;j++)p.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+1,v:Math.random()*.5+.1});(function d(){x.clearRect(0,0,W,H);p.forEach(a=>{a.y-=a.v;if(a.y<0){a.y=H;a.x=Math.random()*W}x.globalAlpha=.18;x.fillStyle="#ff86ad";x.beginPath();x.arc(a.x,a.y,a.r,0,7);x.fill()});requestAnimationFrame(d)})();
