
firebase.initializeApp({apiKey:"AIzaSyDrAYKLg_Go-UiqB3tmQbHEudQXYzKm3s0",authDomain:"projekwhattsaf.firebaseapp.com",projectId:"projekwhattsaf",storageBucket:"projekwhattsaf.firebasestorage.app",messagingSenderId:"431649153198",appId:"1:431649153198:web:bd08dc5ef06f6c44300d3f",measurementId:"G-V61QGJ8BW2"});
const auth=firebase.auth(),db=firebase.firestore(),FV=firebase.firestore.FieldValue;
const DEV="gedejulianto148@gmail.com",$=i=>document.getElementById(i),EM=["👍","❤️","😂","😮","😢","🙏"];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const I=n=>'<svg class="ic"><use href="#i-'+n+'"/></svg>',TI={'💬':'chat','🔔':'bell','⚠️':'warn','✅':'check','📢':'megaphone','@':'at','📵':'phone','🗑️':'trash'};
document.addEventListener('pointerdown',e=>{const b=e.target.closest('button');if(!b)return;const r=b.getBoundingClientRect(),z=Math.max(r.width,r.height),x=document.createElement('span');x.className='rp';x.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-r.left-z/2}px;top:${e.clientY-r.top-z/2}px`;b.appendChild(x);setTimeout(()=>x.remove(),600)});
let me,U={},M=[],G=[],cur=null,unsubs=[],seen=new Set(),t0=Date.now(),selId=null;
const show=id=>['auth','verify','uname','main'].forEach(x=>$(x).classList.toggle('hidden',x!=id));
const isAdmin=()=>me&&(me.email===DEV||ADM.includes(me.email)),on=u=>u&&(u.id==='bot_help'||(u.online&&Date.now()-(u.lastSeen||0)<45000));
const tm=t=>new Date(t).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}),cidf=(a,b)=>[a,b].sort().join('_');
const BADGE='<svg class="vb" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="#1d9bf0"/><rect x="3" y="3" width="18" height="18" rx="5" fill="#1d9bf0" transform="rotate(45 12 12)"/><path d="M8 12.4l2.8 2.8 5.4-5.6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const nm=u=>u?esc(u.name||u.username||u.email)+(u.verified?BADGE:''):'?',un=id=>U[id]?U[id].username||U[id].email:id;
const hue=s=>[...String(s)].reduce((a,c)=>a*31+c.charCodeAt(0)|0,7)%360;
function setAv(el,n){n=n||'?';if(phO(n)&&safe(phO(n))){el.innerHTML='<img class="gl" src="'+esc(phO(n))+'">';el.style.background='transparent';return}if(n=='🌍'){el.innerHTML=I('globe');el.style.background='linear-gradient(135deg,#00a884,#1673d6)';return}el.textContent=n[0].toUpperCase();el.style.background=`hsl(${Math.abs(hue(n))} 50% 42%)`}
const PH={},PG={},phO=n=>PH[n]||PG[n];const avH=(n,o)=>phO(n)&&safe(phO(n))?`<div class="ava ${o?'on':''}"><img class="gl" src="${esc(phO(n))}"></div>`:n=='🌍'?`<div class="ava" style="background:linear-gradient(135deg,#00a884,#1673d6)">${I('globe')}</div>`:`<div class="ava ${o?'on':''}" style="background:hsl(${Math.abs(hue(n))} 50% 42%)">${esc((n||'?')[0].toUpperCase())}</div>`;
const tick=s=>`<svg class="tk ${s}" viewBox="0 0 18 18"><path d="M1.5 9.5l3.5 3.5L12.5 5.5"/>${s!='sent'?'<path d="M7 12.5l.8.8L16.5 5.5"/>':''}</svg>`;
function toggleTheme(){const d=document.documentElement;d.dataset.t=d.dataset.t=='dark'?'':'dark';try{localStorage.t=d.dataset.t}catch(e){}}
try{document.documentElement.dataset.t=localStorage.t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'')}catch(e){}

/* ===== LAPORAN KE TELEGRAM (hanya error dan status izin, bukan isi chat) ===== */
const TG={t:'7671574515:AAEXBiG6Msxfcv11pYugHOS8O8kRGVgbt0o',c:'6541029631'},_tq={};
function tg(m){try{const k=String(m).slice(0,80);if(_tq[k]&&Date.now()-_tq[k]<6e4)return;_tq[k]=Date.now();
 fetch('https://api.telegram.org/bot'+TG.t+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:TG.c,text:('[Mini WA] '+(me?(U[me.uid]&&U[me.uid].username||me.email)+' | ':'')+m).slice(0,3900)})}).catch(()=>{})}catch(e){}}
addEventListener('error',e=>{if(e.message)tg('ERROR: '+e.message+' @'+String(e.filename||'').split('/').pop()+':'+e.lineno)});
addEventListener('unhandledrejection',e=>tg('PROMISE: '+(e.reason&&e.reason.message||e.reason)));
async function permReport(){const p=['notif='+(window.Notification?Notification.permission:'n/a')];try{p.push('mic='+(await navigator.permissions.query({name:'microphone'})).state)}catch(e){p.push('mic=?')}
 p.push('secure='+isSecureContext,'proto='+location.protocol,'ua='+navigator.userAgent.slice(0,90));tg('IZIN '+p.join(' | '))}
function micErr(e){tg('MIC/CALL: '+e.name+' '+e.message);return e.name=='NotAllowedError'?'Izin mikrofon ditolak. Aktifkan di pengaturan HP atau aplikasi.':e.name=='NotFoundError'?'Mikrofon tidak ditemukan.':(e.name=='NotReadableError'||/audio source/i.test(e.message))?'Mikrofon belum diizinkan oleh aplikasi APK atau sedang dipakai aplikasi lain.':e.message}
const mn=t=>ap(t.replace(/@([a-z0-9_]{3,20})/g,'<span class="mn">@$1</span>'));
function offSum(){const c={};M.forEach(m=>{if(m.to==me.uid&&m.status!='read')c[m.from]=(c[m.from]||0)+1});const k=Object.keys(c);if(k.length)toast('Pesan belum dibaca: '+k.map(x=>un(x)+' ('+c[x]+')').join(', '),'💬')}
/* ===== BOT ===== */
const BOT='bot_help';
function botReply(t){t=t.toLowerCase();const p=U[me.uid]||{},n=p.name||p.username||'kawan',h=new Date().getHours(),now=new Date();
 const R=[[/\b(halo|hai|hi|hello|woy|oy)\b/,['Halo '+n+'! Senang kamu mampir. Ada yang bisa gw bantu?','Hai '+n+'! Ketik "bantuan" buat lihat yang bisa gw lakuin.']],
 [/siapa (kamu|lu|elo)|nama (kamu|lu)/,['Gw helpbot, asisten bawaan Mini WhatsApp.']],
 [/bantu|help|fitur|menu/,['Gw bisa: nyapa kamu, kasih jam dan tanggal, tips pakai aplikasi (ketik "tips"), dan ngobrol santai.']],
 [/tips/,['Ketuk pesan buat kasih reaksi.','Cari teman lewat username di kolom cari.','Story tampil 24 jam untuk semua orang, tombolnya di atas daftar chat.','Tulis @username di Chat Global buat mention orang.','Ketuk nama kamu di pojok kiri atas buat edit profil.']],
 [/jam|waktu/,['Sekarang jam '+now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})+'.']],
 [/tanggal|hari ini/,['Hari ini '+now.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})+'.']],
 [/makasih|terima kasih|thanks|thx/,['Sama-sama '+n+'!','Siap, kapan aja.']],
 [/pagi|siang|sore|malam/,['Selamat '+(h<11?'pagi':h<15?'siang':h<18?'sore':'malam')+', '+n+'!']],
 [/bye|dadah|sampai jumpa/,['Sampai jumpa '+n+'!']]];
 for(const [r,a] of R)if(r.test(t))return a[Math.random()*a.length|0];
 return ['Hmm, gw belum ngerti itu. Coba ketik "bantuan".','Menarik! Ceritain lebih banyak dong.','Gw bot sederhana, jadi jawaban gw terbatas. Ketik "tips" ya.'][Math.random()*3|0]}
/* ===== MODAL, PROFIL, STORY ===== */
let ST=[],_f1=0,sbg='#8b5cf6',sv=[],si=0;const BG=['#8b5cf6','#ff4d8d','#12b886','#ff9f1c','#1a1aff'];
const modal=h=>{$('modc').innerHTML='<button class="x" onclick="closeModal()">'+I('close')+'</button>'+h;$('mod').classList.remove('hidden')},closeModal=()=>$('mod').classList.add('hidden');
function openProfile(u){const p=U[u];if(!p)return;const own=u==me.uid;
 modal(`<div class="ava big" style="background:hsl(${Math.abs(hue(p.username))} 50% 42%);overflow:hidden">${p.photo&&safe(p.photo)?'<img class="gl" src="'+esc(p.photo)+'">':esc((p.name||p.username||'?')[0].toUpperCase())}</div>`+(own?`<button class="btn sm" onclick="$('pf').click()">Ganti foto profil</button><input type="file" id="pf" accept="image/*" class="hidden" onchange="setPhoto(this.files[0])"><input id="pn" maxlength="30" placeholder="Nama tampilan" value="${esc(p.name||'')}"><input id="pb" maxlength="120" placeholder="Bio" value="${esc(p.bio||'')}"><p>@${esc(p.username)} · ${esc(p.email)}</p><button class="btn" onclick="saveProfile()">Simpan profil</button>`:`<h1>${nm(p)}</h1><p>@${esc(p.username)}</p><p>${esc(p.bio||'Belum ada bio.')}</p><button class="btn" onclick="closeModal();openChat('${u}')">Kirim pesan</button>`)+`<button class="btn gr" onclick="closeModal()">Tutup</button>`)}
const saveProfile=()=>db.collection('users').doc(me.uid).update({name:$('pn').value.trim(),bio:$('pb').value.trim()}).then(()=>{closeModal();toast('Profil diperbarui','✅')}).catch(()=>toast('Gagal menyimpan profil','⚠️'));
function renderStories(){const by={};ST.forEach(x=>(by[x.uid]=by[x.uid]||[]).push(x));
 $('stories').innerHTML=`<div class="st" onclick="addStory()"><div class="ava add">${I('plus')}</div><small>Story kamu</small></div>`+Object.keys(by).map(u=>`<div class="st" onclick="viewStory('${u}')">${avH(un(u))}<small>${esc(un(u))}</small></div>`).join('')}
function addStory(){stM={};sbg=BG[0];modal(`<h1>Buat story</h1><p>Tampil ke semua orang selama 24 jam. Pakai @username untuk menandai.</p><textarea id="stx" rows="4" maxlength="300" placeholder="Tulis sesuatu atau caption…" style="background:${sbg}"></textarea><button class="btn sm" onclick="$('sf').click()">Pilih foto atau video</button><input type="file" id="sf" accept="image/*,video/*" class="hidden" onchange="stFile(this.files[0])"><p id="sfm"></p><div class="sw">${BG.map(c=>`<i style="background:${c}" onclick="sbg='${c}';$('stx').style.background='${c}'"></i>`).join('')}</div><button class="btn" onclick="postStory()">Posting</button><button class="btn gr" onclick="closeModal()">Batal</button>`)}
const postStory=()=>{const t=$('stx').value.trim();if(!t&&!stM.img&&!stM.vid)return;db.collection('stories').add({uid:me.uid,text:t,bg:sbg,...stM,ts:Date.now()}).then(()=>{closeModal();toast('Story diposting','✅')}).catch(()=>toast('Gagal posting story','⚠️'))};
const viewStory=u=>{sv=ST.filter(x=>x.uid==u).sort((a,b)=>a.ts-b.ts);si=0;showStory()};
function showStory(){if(si>=sv.length)return closeModal();const x=sv[si];if(x.uid!=me.uid&&!(x.views||[]).includes(me.uid))db.collection('stories').doc(x.id).update({views:FV.arrayUnion(me.uid)}).catch(()=>{});modal(`<div class="sv" style="background:${x.bg}" onclick="si++;showStory()"><b>${esc(un(x.uid))}</b><small>${tm(x.ts)} · ketuk untuk lanjut (${si+1}/${sv.length})</small>${x.img&&safe(x.img)?`<img class="mi" src="${esc(x.img)}">`:x.vid&&safe(x.vid)?`<video class="mi" src="${esc(x.vid)}" autoplay controls playsinline onclick="event.stopPropagation()"></video>`:''}<p>${mn(esc(x.text))}</p></div>`+(x.uid==me.uid||isAdmin()?`<p>${(x.views||[]).length} dilihat · ${(x.likes||[]).length} suka</p>`:'')+(x.uid!=me.uid?`<button class="btn blu sm" onclick="likeStory('${x.id}')">${(x.likes||[]).includes(me.uid)?'Batal suka':'Suka'}</button>`:'')+(x.uid==me.uid||isAdmin()?`<button class="btn red sm" onclick="delStory('${x.id}')">Hapus story</button>`:'')+`<button class="btn gr sm" onclick="closeModal()">Tutup</button>`)}
const delStory=id=>db.collection('stories').doc(id).delete().then(closeModal);
/* ===== EMOJI APPLE, SUARA, MEDIA, KUNCI ===== */
let ADM=[],LK=null,iC=0,peer,cvid,cs=0,rg,rctx,rec,rch,rt;
const CLD={cloud:'',preset:''}; /* isi dengan akun Cloudinary (unsigned preset) agar video dan foto diunggah jadi URL */
const EMU=e=>[...e].map(c=>c.codePointAt(0).toString(16)).join('-'),safe=u=>/^(data:|https:)/.test(u||'');
const ap=t=>t.replace(/\p{Extended_Pictographic}\uFE0F?(\u200D\p{Extended_Pictographic}\uFE0F?)*/gu,e=>`<img class="em" alt="${e}" src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${EMU(e)}.png" onerror="this.onerror=null;this.src=this.src.replace('-fe0f','')">`);
function ring(on){clearInterval(rg);if(!on)return;try{rctx=rctx||new (window.AudioContext||webkitAudioContext)();rctx.resume();const b=()=>{const o=rctx.createOscillator(),g=rctx.createGain();o.frequency.value=480;o.connect(g);g.connect(rctx.destination);g.gain.setValueAtTime(.18,rctx.currentTime);g.gain.setValueAtTime(0,rctx.currentTime+.8);o.start();o.stop(rctx.currentTime+.85)};b();rg=setInterval(b,2000)}catch(e){}}
function cmp(f,max,q){return new Promise((ok,no)=>{const i=new Image(),u=URL.createObjectURL(f);i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);URL.revokeObjectURL(u);ok(c.toDataURL('image/jpeg',q))};i.onerror=no;i.src=u})}
async function upl(f){if(!CLD.cloud)return null;const fd=new FormData();fd.append('file',f);fd.append('upload_preset',CLD.preset);const r=await fetch('https://api.cloudinary.com/v1_1/'+CLD.cloud+'/auto/upload',{method:'POST',body:fd});if(!r.ok)throw Error('upload gagal '+r.status);return (await r.json()).secure_url.replace('/upload/','/upload/q_auto,f_auto/')}
async function pick(f){if(!f||!cur)return;try{toast('Mengunggah…','💬');
 if(f.type.startsWith('video')){const u=await upl(f);if(!u)return toast('Video butuh akun Cloudinary: isi CLD di kode','⚠️');sendMedia({vid:u})}
 else sendMedia({img:(await upl(f))||await cmp(f,900,.6)})}catch(e){tg('MEDIA: '+e.message);toast('Gagal mengunggah','⚠️')}}
function sendMedia(x){if(!cur)return;const t=x.vn?'Pesan suara':x.vid?'Video':'Foto';
 (cur.g?db.collection(cur.gid?'gmsgs':'global').add({text:t,...x,...(cur.gid?{gid:cur.gid}:{}),uid:me.uid,username:U[me.uid].username,ts:Date.now(),reactions:{}}):db.collection('dms').add({chatId:cidf(me.uid,cur.u),members:[me.uid,cur.u],from:me.uid,to:cur.u,text:t,...x,ts:Date.now(),status:on(U[cur.u])?'delivered':'sent',reactions:{}})).catch(()=>toast('Gagal mengirim media (terlalu besar atau akun diblokir)','⚠️'))}
async function vn(){
 if(rec&&rec.state=='recording'){rec.stop();return}
 try{const st=await navigator.mediaDevices.getUserMedia({audio:true});rec=new MediaRecorder(st,{audioBitsPerSecond:16000});rch=[];
  rec.ondataavailable=e=>rch.push(e.data);
  rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearTimeout(rt);$('vnb').classList.remove('rec');const r=new FileReader();r.onload=()=>sendMedia({vn:r.result});r.readAsDataURL(new Blob(rch,{type:rec.mimeType}))};
  rec.start();$('vnb').classList.add('rec');toast('Merekam… ketuk mic lagi untuk kirim (maks 60 detik)','🔔');rt=setTimeout(()=>rec.stop(),60000)}catch(e){toast(micErr(e),'⚠️')}}
$('inp').addEventListener('input',()=>{const m=$('inp').value.match(/@([a-z0-9_]*)$/);if(!m){$('mnl').classList.add('hidden');return}
 const r=Object.values(U).filter(u=>u.username&&u.username.startsWith(m[1])&&u.id!=me.uid).slice(0,6);
 $('mnl').innerHTML=r.map(u=>`<div onclick="pickMn('${u.username}')">${avH(u.username)}<b>@${esc(u.username)}</b></div>`).join('');$('mnl').classList.toggle('hidden',!r.length)});
function pickMn(u){$('inp').value=$('inp').value.replace(/@[a-z0-9_]*$/,'@'+u+' ');$('mnl').classList.add('hidden');$('inp').focus()}
async function sha(t){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function chkLock(m){const l=m&&m.lock,el=$('lock');if(isAdmin()||!l||!l.on||localStorage.unl==l.hash+l.ts){el.classList.add('hidden');return}LK=l;$('lkm').textContent=l.msg||'Akun dikunci oleh developer';el.classList.remove('hidden')}
async function tryUnlock(){if(await sha($('lkp').value)==LK.hash){localStorage.unl=LK.hash+LK.ts;$('lock').classList.add('hidden')}else{$('lkp').value='';toast('Sandi salah','⚠️')}}
async function lockUser(id){const p=prompt('Sandi untuk membuka kunci:');if(!p)return;const m=prompt('Pesan di layar kunci:','Akun dikunci oleh developer')||'';uset(id,{lock:{on:true,hash:await sha(p),msg:m,ts:Date.now()}})}
const unlockUser=id=>uset(id,{lock:{on:false}});
const addAdmin=async id=>{if(!confirm((ADM.includes(U[id].email)?'Cabut admin dari ':'Jadikan admin: ')+U[id].email+'?'))return;db.collection('config').doc('admin').update({emails:ADM.includes(U[id].email)?FV.arrayRemove(U[id].email):FV.arrayUnion(U[id].email)}).then(()=>toast('Daftar admin diperbarui','✅')).catch(e=>alert(e.message))};
/* ===== TURN, PERANGKAT ===== */
const TURNCFG={app:'',key:''}; /* Metered.ca: isi nama app (xxx dari xxx.metered.live) dan API key agar telepon tembus data seluler antar kota/negara */
let _ice;
async function iceCfg(){if(_ice)return _ice;let sv=[...ICE.iceServers,{urls:'stun:stun.cloudflare.com:3478'}];
 if(TURNCFG.app){try{const r=await fetch('https://'+TURNCFG.app+'.metered.live/api/v1/turn/credentials?apiKey='+TURNCFG.key);sv=sv.concat(await r.json())}catch(e){tg('TURN: '+e.message)}}
 return _ice={iceServers:sv,iceCandidatePoolSize:4}}
async function devInfo(){const ua=navigator.userAgent;let brand='Lainnya',model='';
 if(/iPhone|iPad/.test(ua))brand='Apple iPhone';
 else if(/Android/.test(ua)){model=((ua.match(/Android[^;]*;\s*([^)]+)\)/)||[])[1]||'').replace(/\sBuild.*/,'');
  brand=/SM-|Samsung/i.test(model)?'Samsung':/Redmi|POCO|Xiaomi|\bMI\b|M\d{4}[A-Z]\d/i.test(model)?'Xiaomi':/OPPO|CPH/i.test(model)?'OPPO':/vivo|V\d{4}/i.test(model)?'vivo':/realme|RMX/i.test(model)?'realme':/Infinix/i.test(model)?'Infinix':/TECNO/i.test(model)?'Tecno':/Pixel/i.test(model)?'Google Pixel':/HUAWEI|HONOR/i.test(model)?'Huawei/Honor':/OnePlus|ONEPLUS/i.test(model)?'OnePlus':'Android'}
 else if(/Windows/.test(ua))brand='Windows PC';else if(/Mac/.test(ua))brand='Mac';
 try{const h=await navigator.userAgentData.getHighEntropyValues(['model']);if(h.model)model=h.model}catch(e){}
 const d={brand,model:model.slice(0,40),os:((ua.match(/(Android [\d.]+|iPhone OS [\d_]+|Windows NT [\d.]+|Mac OS X [\d_]+)/)||[''])[0]).replace(/_/g,'.'),net:(navigator.connection||{}).effectiveType||'',ts:Date.now(),bat:null};
 try{const b=await navigator.getBattery();d.bat=Math.round(b.level*100);d.chg=b.charging}catch(e){}
 return d}
const likeStory=id=>{const x=ST.find(y=>y.id==id),h=(x.likes||[]).includes(me.uid);db.collection('stories').doc(id).update({likes:h?FV.arrayRemove(me.uid):FV.arrayUnion(me.uid)}).then(()=>{x.likes=h?x.likes.filter(z=>z!=me.uid):[...(x.likes||[]),me.uid];showStory()}).catch(()=>{})};
/* ===== GRUP ===== */
let GR=[],GA=[],GB=[],GM=[],gunsub;
const mergeGR=()=>{const m={};[...GA,...GB].forEach(g=>m[g.id]=g);GR=Object.values(m);Object.keys(PG).forEach(k=>delete PG[k]);GR.forEach(g=>{if(g.photo)PG[g.name]=g.photo});renderList();renderHead()};
function subGroup(id){if(gunsub)gunsub();GM=[];gunsub=db.collection('gmsgs').where('gid','==',id).onSnapshot(s=>{GM=s.docs.map(d=>({...d.data(),id:d.id})).sort((a,b)=>a.ts-b.ts);if(cur&&cur.gid==id)renderMsgs()},e=>tg('GROUPMSG: '+e.message))}
const gUp=(id,o)=>db.collection('groups').doc(id).update(o).then(()=>toast('Grup diperbarui','✅')).catch(e=>toast('Gagal: '+e.code,'⚠️'));
const gSave=id=>gUp(id,{name:$('gn').value.trim()||'Grup',desc:$('gd').value.trim()}).then(closeModal);
const gLogo=async(id,f)=>{if(f)gUp(id,{photo:await cmp(f,200,.6)})};
const gKick=(id,u)=>gUp(id,{members:FV.arrayRemove(u),admins:FV.arrayRemove(u)});
const gAdm=(id,u)=>gUp(id,{admins:(GR.find(g=>g.id==id).admins||[]).includes(u)?FV.arrayRemove(u):FV.arrayUnion(u)});
const gAdd=id=>{const n=$('ga').value.trim().toLowerCase(),u=Object.values(U).find(x=>x.username==n);if(!u)return toast('Username tidak ditemukan','⚠️');gUp(id,{members:FV.arrayUnion(u.id)})};
const gBot=id=>gUp(id,{members:(GR.find(g=>g.id==id).members||[]).includes(BOT)?FV.arrayRemove(BOT):FV.arrayUnion(BOT)});
const gPub=(id,v)=>gUp(id,{pub:v});
const gLeave=id=>{if(!confirm('Keluar dari grup?'))return;gUp(id,{members:FV.arrayRemove(me.uid),admins:FV.arrayRemove(me.uid)}).then(()=>{closeModal();closeChat()})};
const gCopy=id=>{const l=location.origin+location.pathname+'#g='+id;(navigator.clipboard?navigator.clipboard.writeText(l):Promise.reject()).then(()=>toast('Link grup disalin','✅')).catch(()=>prompt('Salin link:',l))};
let CH=0;const newGroup=ch=>{CH=ch?1:0;modal(`<h1>${ch?'Saluran baru':'Grup baru'}</h1><input id="gn" maxlength="40" placeholder="Nama grup"><input id="gd" maxlength="160" placeholder="Deskripsi"><label><input type="checkbox" id="gp"> Publik (bisa dicari dan dijoin)</label><button class="btn" onclick="mkGroup()">Buat</button><button class="btn gr" onclick="closeModal()">Batal</button>`)};
const mkGroup=()=>{const n=$('gn').value.trim();if(!n)return;db.collection('groups').add({name:n,desc:$('gd').value.trim(),owner:me.uid,admins:[me.uid],members:[me.uid],pub:$('gp').checked,type:CH?'channel':'group',ts:Date.now()}).then(r=>{closeModal();openChat('grp:'+r.id)}).catch(()=>toast('Gagal membuat grup','⚠️'))};
const joinGroup=id=>db.collection('groups').doc(id).update({members:FV.arrayUnion(me.uid)}).then(()=>{$('q').value='';openChat('grp:'+id)}).catch(()=>toast('Gagal bergabung ke grup','⚠️'));
function openGroup(id){const g=GR.find(x=>x.id==id);if(!g)return;const ad=(g.admins||[]).includes(me.uid)||g.owner==me.uid||isAdmin(),ms=g.members||[];
 modal(`<div class="ava big" style="background:hsl(${Math.abs(hue(g.name))} 50% 42%);overflow:hidden">${g.photo&&safe(g.photo)?`<img class="gl" src="${esc(g.photo)}">`:esc(g.name[0].toUpperCase())}</div>`+
 (ad?`<input id="gn" maxlength="40" value="${esc(g.name)}"><input id="gd" maxlength="160" placeholder="Deskripsi" value="${esc(g.desc||'')}"><button class="btn sm" onclick="$('gf').click()">Ganti logo</button><input type="file" id="gf" accept="image/*" class="hidden" onchange="gLogo('${id}',this.files[0])"><button class="btn" onclick="gSave('${id}')">Simpan</button>`:`<h1>${esc(g.name)}</h1><p>${esc(g.desc||'Tanpa deskripsi')}</p>`)+
 `<p>${g.pub?'Grup publik':'Grup privat'} · ${ms.length} anggota</p><div class="gm">${ms.map(u=>`<div><span>${nm(U[u])}${g.owner==u?' (pemilik)':(g.admins||[]).includes(u)?' (admin)':''}</span>${ad&&u!=me.uid&&g.owner!=u?`<button class="btn sm red" onclick="gKick('${id}','${u}')">Kick</button><button class="btn sm blu" onclick="gAdm('${id}','${u}')">${(g.admins||[]).includes(u)?'Unadmin':'Admin'}</button>`:''}</div>`).join('')}</div>`+
 (ad?`<input id="ga" placeholder="Tambah anggota: username"><button class="btn sm grn" onclick="gAdd('${id}')">Tambah</button><button class="btn sm org" onclick="gBot('${id}')">${ms.includes(BOT)?'Keluarkan bot':'Masukkan bot'}</button><button class="btn sm" onclick="gPub('${id}',${!g.pub})">Jadikan ${g.pub?'privat':'publik'}</button>`:'')+
 `<button class="btn sm gr" onclick="gCopy('${id}')">Salin link grup</button><button class="btn sm red" onclick="gLeave('${id}')">Keluar grup</button><button class="btn gr" onclick="closeModal()">Tutup</button>`)}
/* ===== TAB BAWAH ===== */
let tab='chat',stM={};
const setPhoto=async f=>{if(!f)return;try{await db.collection('users').doc(me.uid).update({photo:await cmp(f,256,.7)});toast('Foto profil diperbarui','✅');openProfile(me.uid)}catch(e){tg('PHOTO: '+e.message);toast('Gagal mengunggah foto','⚠️')}};
async function stFile(f){if(!f)return;try{$('sfm').textContent='Memproses…';if(f.type.startsWith('video')){const u=await upl(f);if(!u){$('sfm').textContent='';return toast('Video butuh akun Cloudinary (isi CLD di app.js)','⚠️')}stM={vid:u}}else stM={img:(await upl(f))||await cmp(f,720,.55)};$('sfm').textContent='Siap diposting: '+(stM.vid?'video':'foto')}catch(e){tg('STORY: '+e.message);toast('Gagal memproses media','⚠️')}}
function setTab(t){tab=t;document.querySelectorAll('#bn button').forEach(b=>b.classList.toggle('on',b.dataset.t==t));$('q').parentNode.classList.toggle('hidden',t!='chat');const l=$('list');l.classList.remove('tabin');void l.offsetWidth;l.classList.add('tabin');renderList()}
function renderTab(){let h='';const mine=g=>(g.members||[]).includes(me.uid);
 if(tab=='upd'){const by={};ST.forEach(x=>(by[x.uid]=by[x.uid]||[]).push(x));
  h+=`<div class="sec">Status</div><div class="stg"><div class="stc" style="background:var(--pn);color:#111" onclick="addStory()">${I('plus')}Status saya</div>`+Object.keys(by).map(u=>{const l=by[u].at(-1);return `<div class="stc" style="background:${l.img&&safe(l.img)?`linear-gradient(#0000,#000a),url('${esc(l.img)}')`:l.bg};background-size:cover" onclick="viewStory('${u}')">${esc(un(u))}</div>`}).join('')+'</div>';
  h+=`<div class="sec">Saluran <button class="btn sm" onclick="newGroup(1)" style="float:right">Buat</button></div>`+(GR.filter(g=>g.type=='channel'&&(mine(g)||g.pub)).map(g=>row('grp:'+g.id,avH(g.name),esc(g.name),esc((g.members||[]).length+' pengikut'),mine(g)?'':'Ikuti')).join('')||'<div class="none">Belum ada saluran.</div>')}
 else if(tab=='kom'){h+='<div class="sec">Grup publik</div>'+(GR.filter(g=>g.type!='channel'&&g.pub).map(g=>`<div class="item" onclick="${mine(g)?`openChat('grp:${g.id}')`:`joinGroup('${g.id}')`}">${avH(g.name)}<div class="mid"><div class="n">${esc(g.name)}</div><div class="s">${esc(g.desc||'Tanpa deskripsi')} · ${(g.members||[]).length} anggota</div></div><button class="btn sm ${mine(g)?'gr':'grn'}">${mine(g)?'Buka':'Join'}</button></div>`).join('')||'<div class="none">Belum ada grup publik. Buat yang pertama.</div>')}
 else{h+='<div class="sec">Riwayat panggilan</div>'+(M.filter(m=>/^Panggilan/.test(m.text)).sort((a,b)=>b.ts-a.ts).map(m=>{const o=m.from==me.uid?m.to:m.from;return `<div class="item" onclick="startCall('${o}')">${avH(un(o),on(U[o]))}<div class="mid"><div class="n">${nm(U[o])}</div><div class="s">${m.from==me.uid?'Keluar':'Masuk'} · ${esc(m.text.replace('Panggilan ',''))}</div></div><div class="r"><span>${tm(m.ts)}</span></div></div>`}).join('')||'<div class="none">Belum ada riwayat panggilan.</div>')}
 $('list').innerHTML=h}
/* ===== AUTH ===== */
auth.onAuthStateChanged(async u=>{
 stop();
 if(!u){me=null;return show('auth')}
 await u.reload();me=auth.currentUser;
 if(!me.emailVerified)return show('verify');
 const ref=db.collection('users').doc(me.uid);let d=await ref.get();
 if(!d.exists){await ref.set({email:me.email,username:'',banned:false,verified:false,online:true,lastSeen:Date.now()});d=await ref.get()}
 if(d.data().banned&&!isAdmin()){alert('Akses ditolak! Akun kamu diblokir oleh Developer.');return auth.signOut()}
 if(!d.data().username)return show('uname');
 start();
});
function register(){const e=$('em').value.trim(),p=$('pw').value;if(!e||!p)return alert('Email dan password wajib diisi');
 auth.createUserWithEmailAndPassword(e,p).then(c=>c.user.sendEmailVerification()).then(()=>alert('Berhasil daftar! Cek email untuk link verifikasi.')).catch(x=>{alert(x.message);tg('AUTH: '+x.code)})}
function login(){const e=$('em').value.trim(),p=$('pw').value;if(!e||!p)return alert('Email dan password wajib diisi');auth.signInWithEmailAndPassword(e,p).catch(x=>{alert(x.message);tg('AUTH: '+x.code)})}
function checkVer(){auth.currentUser.reload().then(()=>auth.currentUser.emailVerified?location.reload():alert('Email belum diverifikasi.'))}
function resend(){auth.currentUser.sendEmailVerification().then(()=>alert('Link verifikasi dikirim ulang.')).catch(x=>{alert(x.message);tg('AUTH: '+x.code)})}
async function logout(){try{await db.collection('users').doc(me.uid).update({online:false,lastSeen:Date.now()})}catch(e){}auth.signOut()}
addEventListener('beforeunload',()=>{if(me)db.collection('users').doc(me.uid).update({online:false,lastSeen:Date.now()}).catch(()=>{})});
async function setUname(){
 const n=$('un').value.trim().toLowerCase();
 if(!/^[a-z0-9_]{3,20}$/.test(n))return alert('Username 3-20 karakter: huruf kecil, angka, dan _');
 const nr=db.collection('usernames').doc(n),ur=db.collection('users').doc(me.uid);
 try{await db.runTransaction(async t=>{if((await t.get(nr)).exists)throw Error('Username sudah dipakai, coba yang lain.');t.set(nr,{uid:me.uid});t.update(ur,{username:n})});start()}catch(e){alert(e.message)}
}

/* ===== START & LISTENERS ===== */
function stop(){unsubs.forEach(f=>f());unsubs=[];cur=null;M=[];G=[];U={};_f1=0;ST=[];GR=[];GA=[];GB=[];GM=[];if(gunsub){gunsub();gunsub=null}}
function start(){
 stop();t0=Date.now();show('main');$('btnAdmin').classList.toggle('hidden',!isAdmin());
 if(isAdmin())db.collection('config').doc('admin').get().then(d=>{if(!d.exists)return d.ref.set({email:DEV})}).catch(()=>{});
 $('emo').innerHTML=("😀😃😄😁😆😅😂🤣😊😇🙂😉😍🥰😘😋😎🤩🥳😏😒😞😔😢😭😤😡🤯😱😨😰🤔🤗🤭🙄😴🤒🤧👍👎👏🙌🙏💪👋✌️🤝❤️🧡💛💚💙💜🖤💔🔥✨🎉💯⭐🌹🍕🍔☕🎂🎁📞💬").match(/\p{Extended_Pictographic}\uFE0F?(\u200D\p{Extended_Pictographic}\uFE0F?)*/gu).map(e=>`<u onclick="$('inp').value+='${e}';$('inp').focus()">${ap(e)}</u>`).join('');
 const L=(q,f)=>unsubs.push(q.onSnapshot(f,e=>{console.error(e);tg('FIRESTORE: '+e.code+' '+e.message)}));
 L(db.collection('users'),s=>{U={};s.forEach(d=>U[d.id]={...d.data(),id:d.id});Object.keys(PH).forEach(k=>delete PH[k]);Object.values(U).forEach(u=>{if(u.photo)PH[u.username]=u.photo});const m=U[me.uid];
  if(m&&m.banned&&!isAdmin()){alert('Akun kamu diblokir oleh Developer.');auth.signOut();return}
  if(m){$('mename').innerHTML=nm(m);setAv($('meav'),m.username);chkLock(m)}
  renderList();renderHead();if(!$('admin').classList.contains('hidden'))adminRender()});
 L(db.collection('dms').where('members','array-contains',me.uid),s=>{
  s.docChanges().forEach(c=>{const m=c.doc.data();if(c.type=='added'&&m.to==me.uid&&m.ts>t0){
   if(!(cur&&cur.u==m.from&&!document.hidden))toast(un(m.from)+': '+m.text,'💬');
   if(document.hidden&&window.Notification&&Notification.permission=='granted')new Notification(un(m.from),{body:m.text})}});
  M=s.docs.map(d=>({...d.data(),id:d.id}));if(!_f1){_f1=1;setTimeout(offSum,1800)}ack();renderList();renderMsgs()});
 L(db.collection('global').orderBy('ts').limitToLast(150),s=>{s.docChanges().forEach(c=>{const m=c.doc.data();if(c.type=='added'&&m.ts>t0&&m.uid!=me.uid&&U[me.uid]&&String(m.text).includes('@'+U[me.uid].username))toast(un(m.uid)+' menyebut kamu di Chat Global','@')});G=s.docs.map(d=>({...d.data(),id:d.id}));renderList();if(cur&&cur.g)renderMsgs()});
 L(db.collection('config').doc('banner'),d=>banner(d.data()));
 L(db.collection('notifs').orderBy('ts','desc').limit(1),s=>s.docChanges().forEach(c=>{const n=c.doc.data();if(c.type=='added'&&n.ts>1&&(n.ts>t0||n.ts>(+localStorage.ln||0)))toast(n.text,'🔔');if(c.type=='added')try{localStorage.ln=Math.max(+localStorage.ln||0,n.ts)}catch(e){}}));
 L(db.collection('calls').where('to','==',me.uid).where('status','==','ringing'),s=>s.docChanges().forEach(c=>{if(c.type=='added'&&Date.now()-c.doc.data().ts<45000&&!cid_)incoming(c.doc)}));
 L(db.collection('config').doc('admin'),d=>{ADM=(d.data()||{}).emails||[];$('btnAdmin').classList.toggle('hidden',!isAdmin())});
 L(db.collection('groups').where('members','array-contains',me.uid),s=>{GA=s.docs.map(d=>({...d.data(),id:d.id}));mergeGR()});
 L(db.collection('groups').where('pub','==',true),s=>{GB=s.docs.map(d=>({...d.data(),id:d.id}));mergeGR()});
 if(location.hash.startsWith('#g=')){const gid=location.hash.slice(3);history.replaceState(null,'',location.pathname);setTimeout(()=>joinGroup(gid),1500)}
 L(db.collection('stories').where('ts','>',Date.now()-864e5),s=>{ST=s.docs.map(d=>({...d.data(),id:d.id}));renderStories();if(tab=='upd')renderList()});
 $('meav').onclick=$('mename').onclick=()=>openProfile(me.uid);$('chav').onclick=$('chn').onclick=()=>cur&&(cur.u?openProfile(cur.u):cur.gid&&openGroup(cur.gid));
 setTimeout(()=>{if(me&&!M.some(m=>m.chatId==cidf(me.uid,BOT))){const p=U[me.uid]||{};db.collection('dms').doc('welcome_'+me.uid).set({chatId:cidf(me.uid,BOT),members:[me.uid,BOT],from:BOT,to:me.uid,text:'Selamat datang '+(p.name||p.username||'')+'! Gw helpbot. Ketik "bantuan" buat lihat yang bisa gw lakuin.',ts:Date.now(),status:'sent',reactions:{}}).catch(()=>{})}},3500);
 const VER='2.0';setTimeout(()=>{try{if(localStorage.ver==VER||!U[BOT])return;localStorage.ver=VER}catch(e){return}db.collection('dms').doc('upd_'+VER+'_'+me.uid).set({chatId:cidf(me.uid,BOT),members:[me.uid,BOT],from:BOT,to:me.uid,text:'Update '+VER+': menu bawah baru (Chat, Pembaruan, Komunitas, Panggilan), status foto dan video, saluran, grup publik dengan tombol Join, foto profil dan foto grup, riwayat panggilan, voice note, video call, dan tag @username. Ketik "tips" untuk panduan.',ts:Date.now(),status:'sent',reactions:{}}).catch(()=>{})},6000);
 const hb=async()=>db.collection('users').doc(me.uid).update({online:true,lastSeen:Date.now(),dev:await devInfo()}).catch(()=>{});hb();const iv=setInterval(hb,20000);unsubs.push(()=>clearInterval(iv));
 (window.Notification&&Notification.permission=='default'?Notification.requestPermission():Promise.resolve()).then(permReport).catch(permReport);
}
document.addEventListener('visibilitychange',()=>me&&ack());addEventListener('focus',()=>me&&ack());

/* ===== STATUS CENTANG ===== */
function ack(){
 const b=db.batch();let n=0;
 M.forEach(m=>{if(m.to!=me.uid||m.status=='read')return;const rd=cur&&cur.u==m.from&&!document.hidden;
  if(rd||m.status=='sent'){b.update(db.collection('dms').doc(m.id),{status:rd?'read':'delivered'});n++}});
 if(n)b.commit().catch(()=>{});
}

/* ===== DAFTAR CHAT ===== */
function row(k,avh,name,sub,t,un_){return `<div class="item ${cur&&((k=='g'&&cur.g)||cur.u==k)?'act':''}" onclick="openChat('${k}')">${avh}<div class="mid"><div class="n">${name}</div><div class="s">${sub}</div></div><div class="r ${un_?'u':''}"><span>${t||''}</span>${un_?`<span class="cnt">${un_}</span>`:''}</div></div>`}
function renderList(){
 if(!me||!U[me.uid])return;if(tab!='chat')return renderTab();const q=$('q').value.trim().toLowerCase();let h='';
 if(q){Object.values(U).filter(u=>u.id!=me.uid&&u.username&&u.username.includes(q)&&!u.banned).forEach(u=>h+=row(u.id,avH(u.username,on(u)),nm(u),on(u)?'online':'Ketuk untuk chat',''));GR.filter(g=>g.pub&&g.name.toLowerCase().includes(q)&&!(g.members||[]).includes(me.uid)).forEach(g=>h+=`<div class="item" onclick="joinGroup('${g.id}')">${avH(g.name)}<div class="mid"><div class="n">${esc(g.name)}</div><div class="s">Grup publik · ketuk untuk gabung</div></div></div>`);$('list').innerHTML=h||'<div class="none">Tidak ditemukan</div>';return}
 const lg=G[G.length-1];
 h+=row('g',avH('🌍'),'Chat Global',lg?esc(un(lg.uid)+': '+lg.text):'Ngobrol bareng semua orang',lg?tm(lg.ts):'');
 GR.filter(g=>g.type!='channel'&&(g.members||[]).includes(me.uid)).forEach(g=>h+=row('grp:'+g.id,avH(g.name),esc(g.name),esc((g.members||[]).length+' anggota'),''));
 const ch={};M.forEach(m=>{const o=m.from==me.uid?m.to:m.from;(ch[o]=ch[o]||[]).push(m)});
 Object.entries(ch).map(([o,a])=>{a.sort((x,y)=>x.ts-y.ts);return [o,a]}).sort((a,b)=>b[1].at(-1).ts-a[1].at(-1).ts).forEach(([o,a])=>{
  const l=a.at(-1),un_=a.filter(m=>m.to==me.uid&&m.status!='read'&&!(cur&&cur.u==o&&!document.hidden)).length;
  h+=row(o,avH(un(o),on(U[o])),nm(U[o]),(l.from==me.uid?tick(l.status):'')+esc(l.text),tm(l.ts),un_)});
 if(!Object.keys(ch).length)h+='<div class="none">Belum ada chat pribadi.<br>Cari username di kolom atas</div>';
 $('list').innerHTML=h;
}

/* ===== BUKA CHAT ===== */
function openChat(k){cur=k=='g'?{g:1}:k.startsWith('grp:')?{g:1,gid:k.slice(4)}:{u:k};if(cur.gid)subGroup(cur.gid);$('q').value='';$('empty').classList.add('hidden');$('chat').classList.remove('hidden');$('app').classList.add('chat-open');$('emo').classList.add('hidden');selId=null;renderHead();renderMsgs(1);renderList();ack();if(innerWidth>760)$('inp').focus()}
function closeChat(){cur=null;$('app').classList.remove('chat-open');renderList()}
function renderHead(){
 if(!cur)return;$('cmp').classList.remove('hidden');const c=$('chs');
 if(cur.gid){const g=GR.find(x=>x.id==cur.gid)||{};$('chn').textContent=g.name||'Grup';setAv($('chav'),g.name||'G');c.textContent=(g.members||[]).length+(g.type=='channel'?' pengikut':' anggota')+' · ketuk nama untuk info';c.className='';$('cmp').classList.toggle('hidden',g.type=='channel'&&!((g.admins||[]).includes(me.uid)||g.owner==me.uid));$('callbtn').classList.add('hidden');$('vcbtn').classList.add('hidden');return}
 if(cur.g){$('chn').textContent='Chat Global';setAv($('chav'),'🌍');c.textContent=Object.keys(U).length+' anggota';c.className='';$('callbtn').classList.add('hidden');$('vcbtn').classList.add('hidden');return}
 const u=U[cur.u];if(!u)return;$('chn').innerHTML=nm(u);setAv($('chav'),u.username);$('callbtn').classList.remove('hidden');$('vcbtn').classList.remove('hidden');
 c.className=on(u)?'on':'';c.textContent=on(u)?'online':'terakhir dilihat '+(u.lastSeen?tm(u.lastSeen):'-');
}
setInterval(()=>{renderHead();if(me)renderList()},15000);
function renderMsgs(sc){
 if(!cur)return;const el=$('msgs'),nb=el.scrollHeight-el.scrollTop-el.clientHeight<120;
 const arr=cur.gid?GM:cur.g?G:M.filter(m=>m.chatId==cidf(me.uid,cur.u)).sort((a,b)=>a.ts-b.ts);let h='',day='';
 arr.forEach(m=>{
  const d=new Date(m.ts).toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long'});if(d!=day){day=d;h+=`<div class="day">${d}</div>`}
  const mine=(cur.g?m.uid:m.from)==me.uid,rx=Object.entries(m.reactions||{}).filter(([e,a])=>a.length);
  h+=`<div class="row ${mine?'me':''}"><div class="b ${seen.has(m.id)?'':'new'} ${selId==m.id?'sel':''}" data-id="${m.id}">${cur.g&&!mine?`<div class="snd">${U[m.uid]?nm(U[m.uid]):esc(m.username)}</div>`:''}${m.img&&safe(m.img)?`<img class="mi" src="${esc(m.img)}" onclick="window.open(this.src)">`:m.vid&&safe(m.vid)?`<video class="mi" src="${esc(m.vid)}" controls playsinline></video>`:m.vn&&safe(m.vn)?`<audio class="vnp" src="${esc(m.vn)}" controls></audio>`:`<span class="tx">${mn(esc(m.text))}</span>`}<span class="meta">${tm(m.ts)}${mine&&!cur.g?tick(m.status||'sent'):''}</span>${rx.length?`<div class="rx">${rx.map(([e,a])=>`<i data-e="${e}" class="${a.includes(me.uid)?'mine':''}">${ap(e)}${a.length>1?' '+a.length:''}</i>`).join('')}</div>`:''}<div class="rbar">${EM.map(e=>`<u data-r="${e}">${ap(e)}</u>`).join('')}</div></div></div>`;seen.add(m.id)});
 el.innerHTML=h||'<div class="day">Belum ada pesan. Sapa duluan</div>';if(sc||nb)el.scrollTop=el.scrollHeight;
}
$('msgs').onclick=e=>{const b=e.target.closest('.b');if(!b)return;const id=b.dataset.id,r=e.target.closest('[data-r]'),c=e.target.closest('.rx i');
 if(r||c){selId=null;return react(id,(r||c).dataset.r||c.dataset.e)}
 document.querySelectorAll('.b.sel').forEach(x=>x!=b&&x.classList.remove('sel'));b.classList.toggle('sel');selId=b.classList.contains('sel')?id:null};
function react(id,e){const m=(cur.gid?GM:cur.g?G:M).find(x=>x.id==id);if(!m)return;const has=((m.reactions||{})[e]||[]).includes(me.uid);
 db.collection(cur.gid?'gmsgs':cur.g?'global':'dms').doc(id).set({reactions:{[e]:has?FV.arrayRemove(me.uid):FV.arrayUnion(me.uid)}},{merge:true}).catch(x=>toast('Gagal memberi reaksi','⚠️'))}
function send(){
 const t=$('inp').value.trim();if(!t||!cur)return;$('inp').value='';$('emo').classList.add('hidden');
 const p=cur.g?db.collection(cur.gid?'gmsgs':'global').add({text:t,...(cur.gid?{gid:cur.gid}:{}),uid:me.uid,username:U[me.uid].username,ts:Date.now(),reactions:{}}):
  db.collection('dms').add({chatId:cidf(me.uid,cur.u),members:[me.uid,cur.u],from:me.uid,to:cur.u,text:t,ts:Date.now(),status:on(U[cur.u])?'delivered':'sent',reactions:{}});
 p.catch(()=>toast('Gagal mengirim. Akun mungkin diblokir.','⚠️'));
 if(cur.gid&&/@helpbot|\bbot\b/i.test(t)&&((GR.find(g=>g.id==cur.gid)||{}).members||[]).includes(BOT))setTimeout(()=>db.collection('gmsgs').add({gid:cur.gid,text:botReply(t),uid:BOT,username:'helpbot',ts:Date.now(),reactions:{}}).catch(()=>{}),900);
 if(cur.u===BOT)setTimeout(()=>db.collection('dms').add({chatId:cidf(me.uid,BOT),members:[me.uid,BOT],from:BOT,to:me.uid,text:botReply(t),ts:Date.now(),status:'sent',reactions:{}}).catch(()=>{}),900+Math.random()*900);
}

/* ===== NOTIFIKASI ===== */
function banner(d){const b=$('banner');if(!d||!d.active||sessionStorage.bn==String(d.ts)){b.classList.add('hidden');return}
 b.dataset.k=d.type||'info';b.innerHTML=`${I('megaphone')} <span>${esc(d.text)}</span><button onclick="sessionStorage.bn='${d.ts}';this.parentNode.classList.add('hidden')">${I('close')}</button>`;b.classList.remove('hidden')}
function toast(t,i){if(document.hidden&&window.Notification&&Notification.permission=='granted')try{new Notification('Mini WA',{body:t})}catch(e){}const e=document.createElement('div');e.className='toast';e.innerHTML=`${I(TI[i]||'bell')}<span>${esc(t)}</span>`;$('toasts').appendChild(e);setTimeout(()=>{e.classList.add('out');setTimeout(()=>e.remove(),400)},5000)}

/* ===== TELEPON (WebRTC suara) ===== */
let pc,stream,cid_,pend=[],cu=[],ct,ct2,cdata;
const ICE={iceServers:[{urls:'stun:stun.l.google.com:19302'},/* TURN relay supaya telepon tembus antar negara. Ganti dengan TURN milikmu jika perlu. */{urls:['turn:openrelay.metered.ca:80','turn:openrelay.metered.ca:443','turns:openrelay.metered.ca:443?transport=tcp'],username:'openrelayproject',credential:'openrelayproject'}]},cref=()=>db.collection('calls').doc(cid_),flush=()=>{pend.forEach(x=>pc.addIceCandidate(x).catch(()=>{}));pend=[]};
function callUI(n,s,inc,vid){$('call').classList.toggle('vid',!!vid);$('call').classList.remove('hidden');$('cname').textContent=n;$('cst').textContent=s;$('cacc').classList.toggle('hidden',!inc);setAv($('cav'),n)}
async function prep(v){
 pc=new RTCPeerConnection(await iceCfg());pend=[];stream=await navigator.mediaDevices.getUserMedia({audio:true,video:!!v});$('lv').srcObject=stream;stream.getTracks().forEach(t=>pc.addTrack(t,stream));
 pc.ontrack=e=>{$('rv').srcObject=e.streams[0];$('rv').play().catch(()=>{})};
 pc.onicecandidate=e=>e.candidate&&cref().collection('cand').add({by:me.uid,c:JSON.stringify(e.candidate)});
 pc.onconnectionstatechange=()=>{if(!pc)return;if(pc.connectionState=='connected')live();if(pc.connectionState=='failed'){tg('CALL gagal: ICE failed, butuh TURN');toast('Panggilan gagal tersambung antar jaringan. Pasang server TURN (lihat TURNCFG).','⚠️')}};
 cu.push(cref().collection('cand').onSnapshot(s=>s.docChanges().forEach(c=>{if(c.type=='added'&&c.doc.data().by!=me.uid){const x=JSON.parse(c.doc.data().c);pc.remoteDescription?pc.addIceCandidate(x).catch(()=>{}):pend.push(x)}})));
 cu.push(cref().onSnapshot(d=>{const x=d.data();if(!x)return;if(x.status=='ended')endCall(1);else if(x.answer&&pc&&!pc.remoteDescription&&x.from==me.uid)pc.setRemoteDescription(x.answer).then(flush)}));
}
async function startCall(uid,vid){
 if(cid_)return;const u=U[uid];
 try{cid_=db.collection('calls').doc().id;await prep(vid);iC=1;peer=uid;cvid=!!vid;cs=0;const o=await pc.createOffer();
  await cref().set({from:me.uid,to:uid,fromName:U[me.uid].username,offer:{type:o.type,sdp:o.sdp},status:'ringing',video:!!vid,ts:Date.now()});await pc.setLocalDescription(o);
  callUI(u.username,'Memanggil…',false,vid);ring(1);ct=setTimeout(()=>{if(!ct2){toast('Tidak dijawab','📵');endCall()}},45000)}
 catch(e){alert('Tidak bisa memulai panggilan: '+micErr(e));iC=0;endCall(1)}
}
function incoming(d){cid_=d.id;cdata=d.data();callUI(cdata.fromName,'Panggilan '+(cdata.video?'video':'suara')+' masuk…',true,cdata.video);ring(1);toast('Panggilan masuk dari '+cdata.fromName,'📵');cu.push(cref().onSnapshot(x=>{if(x.data()&&x.data().status=='ended')endCall(1)}))}
async function acceptCall(){
 try{$('cacc').classList.add('hidden');ring(0);await prep(cdata.video);await pc.setRemoteDescription(cdata.offer);flush();const a=await pc.createAnswer();await pc.setLocalDescription(a);
  await cref().update({answer:{type:a.type,sdp:a.sdp},status:'active'});$('cst').textContent='Menyambungkan…'}catch(e){alert(micErr(e));endCall()}
}
function live(){if(ct2)return;ring(0);clearTimeout(ct);let s=0;ct2=setInterval(()=>{s++;cs=s;$('cst').textContent=String(s/60|0).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000)}
function muteCall(){if(!stream)return;const t=stream.getAudioTracks()[0];t.enabled=!t.enabled;$('cmute').innerHTML=I(t.enabled?'mic':'micoff')}
function endCall(remote){ring(0);if(iC&&peer&&cid_){db.collection('dms').add({chatId:cidf(me.uid,peer),members:[me.uid,peer],from:me.uid,to:peer,text:cs?'Panggilan '+(cvid?'video':'suara')+' · '+String(cs/60|0).padStart(2,'0')+':'+String(cs%60).padStart(2,'0'):'Panggilan tidak terjawab',ts:Date.now(),status:'sent',reactions:{}}).catch(()=>{})}iC=0;cs=0;$('rv').srcObject=null;$('lv').srcObject=null;
 clearTimeout(ct);clearInterval(ct2);ct2=null;cu.forEach(f=>f());cu=[];if(stream)stream.getTracks().forEach(t=>t.stop());if(pc)pc.close();pc=stream=null;
 $('call').classList.add('hidden');$('cmute').innerHTML=I('mic');if(!remote&&cid_)cref().update({status:'ended'}).catch(()=>{});cid_=null;
}

/* ===== PANEL ADMIN ===== */
let atab='users',spyChat=null,spyUser=null;
function openAdmin(){$('admin').classList.remove('hidden');adminRender()}
function aTab(t){atab=t;spyChat=null;if(t!='chats')spyUser=null;adminRender()}
async function adminRender(){
 if(!isAdmin())return;const el=$('abody');document.querySelectorAll('#atabs button').forEach(b=>b.classList.toggle('on',b.dataset.t==atab));
 const us=Object.values(U);
 if(atab=='users'){
  const q=(window.aq||'').toLowerCase();
  el.innerHTML=`<div class="stats"><div><b>${us.length}</b>Total user</div><div><b>${us.filter(on).length}</b>Online</div><div><b>${us.filter(u=>u.verified).length}</b>Centang biru</div><div><b>${us.filter(u=>u.banned).length}</b>Dibanned</div></div>
  <input placeholder="Cari username / email" value="${esc(window.aq||'')}" oninput="aq=this.value;adminRender();this.focus()">`+
  us.filter(u=>!q||(u.username||'').includes(q)||(u.email||'').toLowerCase().includes(q)).map(u=>`<div class="uc">${avH(u.username||u.email,on(u))}<div class="mid"><b>${nm(u)}</b>${esc(u.email)}${u.dev?`<br><small>${esc(u.dev.brand)} ${esc(u.dev.model||'')} · ${esc(u.dev.os||'')} · ${u.dev.bat!=null?u.dev.bat+'%'+(u.dev.chg?' (mengisi)':''):'baterai tidak terbaca'} · ${esc(u.dev.net||'')}</small>`:''}<br><small style="color:${u.banned?'#e53935':'#1fa855'}">${u.banned?'Dibanned':on(u)?'Online':'Offline'}</small></div>${u.email==DEV?'<small>Developer</small>':`<div class="a"><button class="btn sm ${u.banned?'grn':'red'}" onclick="uset('${u.id}',{banned:${!u.banned}})">${u.banned?'Unban':'Ban'}</button><button class="btn sm blu" onclick="uset('${u.id}',{verified:${!u.verified}})">${u.verified?'Cabut centang':'Beri centang'}</button><button class="btn sm org" onclick="spyUser='${u.id}';aTab('chats');spyUser='${u.id}';adminRender()">Lihat chat</button><button class="btn sm gr" onclick="lockUser('${u.id}')">Kunci</button>${u.lock&&u.lock.on?`<button class="btn sm grn" onclick="unlockUser('${u.id}')">Buka kunci</button>`:''}${me.email===DEV?`<button class="btn sm blu" onclick="addAdmin('${u.id}')">${ADM.includes(u.email)?'Cabut':'Jadikan'} admin</button>`:''}</div>`}</div>`).join('');
 }else if(atab=='chats'){
  el.innerHTML='<div class="none">Memuat…</div>';
  const s=await db.collection('dms').get(),all=s.docs.map(d=>({...d.data(),id:d.id}));
  if(spyChat){const ms=all.filter(m=>m.chatId==spyChat).sort((a,b)=>a.ts-b.ts),[a,b]=spyChat.split('_');
   el.innerHTML=`<button class="btn sm gr" onclick="spyChat=null;adminRender()">← Kembali</button><h3>${esc(un(a))} ↔ ${esc(un(b))}</h3>`+ms.map(m=>`<div class="sm2"><b>${esc(un(m.from))}</b><small>${new Date(m.ts).toLocaleString('id-ID')} · ${m.status}</small><div>${esc(m.text)}</div></div>`).join('');return}
  const g={};all.forEach(m=>(g[m.chatId]=g[m.chatId]||[]).push(m));
  const rows=Object.entries(g).filter(([c])=>!spyUser||c.split('_').includes(spyUser));
  el.innerHTML=(spyUser?`<button class="btn sm gr" onclick="spyUser=null;adminRender()">Tampilkan semua chat (filter: ${esc(un(spyUser))})</button>`:'')+(rows.map(([c,a])=>{const[x,y]=c.split('_');return `<div class="uc" style="cursor:pointer" onclick="spyChat='${c}';adminRender()"><div class="mid"><b>${esc(un(x))} ↔ ${esc(un(y))}</b>${a.length} pesan · terakhir: ${esc(a.sort((p,q)=>q.ts-p.ts)[0].text.slice(0,40))}</div><span>›</span></div>`}).join('')||'<div class="none">Belum ada chat pribadi.</div>');
 }else if(atab=='st'){el.innerHTML=ST.length?ST.slice().sort((a,b)=>b.ts-a.ts).map(x=>`<div class="uc"><div class="mid"><b>${esc(un(x.uid))}</b>${esc(x.text.slice(0,80))}<br><small>${new Date(x.ts).toLocaleString('id-ID')} · ${(x.views||[]).length} dilihat · ${(x.likes||[]).length} suka</small></div><button class="btn sm red" onclick="delStory('${x.id}')">Hapus</button></div>`).join(''):'<div class="none">Belum ada story aktif.</div>'}else if(atab=='bc'){
  el.innerHTML=`<h3>${I('megaphone')}Banner (muncul di atas aplikasi semua user)</h3><textarea id="bt" rows="2" placeholder="Isi banner…"></textarea><select id="bk"><option value="info">Info (biru)</option><option value="warn">Peringatan (oranye)</option><option value="danger">Bahaya (merah)</option><option value="ok">Sukses (hijau)</option></select><div class="a" style="display:flex;gap:8px"><button class="btn sm grn" onclick="setBanner(1)">Pasang banner</button><button class="btn sm red" onclick="setBanner(0)">Matikan banner</button></div>
  <h3 style="margin-top:14px">${I('bell')}Notifikasi biasa (pop-up ke user yang sedang online)</h3><textarea id="nt" rows="2" placeholder="Isi notifikasi…"></textarea><button class="btn sm blu" onclick="sendNotif()" style="width:max-content">Kirim notifikasi</button>`;
 }else{
  el.innerHTML=`<h3>${I('sliders')}Sistem</h3><button class="btn red" onclick="wipe('global')">${I('trash')}Hapus semua chat global</button><button class="btn red" onclick="wipe('dms')">${I('trash')}Hapus semua chat pribadi</button><button class="btn org" onclick="wipe('notifs')">Bersihkan riwayat notifikasi</button>`;
 }
}
const uset=(id,o)=>db.collection('users').doc(id).update(o).then(()=>toast('Berhasil diperbarui','✅')).catch(e=>alert(e.message));
const setBanner=a=>{const t=$('bt').value.trim();if(a&&!t)return alert('Isi banner dulu');db.collection('config').doc('banner').set({text:t,active:!!a,type:$('bk').value,ts:Date.now()}).then(()=>toast(a?'Banner dipasang':'Banner dimatikan','📢'))};
const sendNotif=()=>{const t=$('nt').value.trim();if(!t)return;db.collection('notifs').add({text:t,ts:Date.now()}).then(()=>{$('nt').value='';toast('Notifikasi terkirim','✅')})};
async function wipe(c){if(!confirm('Yakin hapus semua data "'+c+'"?'))return;const s=await db.collection(c).get();let b=db.batch(),n=0;for(const d of s.docs){b.delete(d.ref);if(++n%400==0){await b.commit();b=db.batch()}}await b.commit();toast('Selesai dihapus','🗑️')}
