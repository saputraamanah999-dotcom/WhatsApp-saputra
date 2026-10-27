// Simpan file ini sebagai functions/index.js lalu jalankan: firebase deploy --only functions
const {onDocumentCreated}=require('firebase-functions/v2/firestore');
const admin=require('firebase-admin');admin.initializeApp();const db=admin.firestore();
async function push(uid,data){const ref=db.doc('users/'+uid),t=((await ref.get()).data()||{}).fcm||[];if(!t.length)return;
 const r=await admin.messaging().sendEachForMulticast({tokens:t,data,android:{priority:'high'},webpush:{headers:{Urgency:'high'}}});
 const bad=[];r.responses.forEach((x,i)=>{if(!x.success&&/registration-token|not-registered/.test(x.error.code))bad.push(t[i])});
 if(bad.length)await ref.update({fcm:admin.firestore.FieldValue.arrayRemove(...bad)})}
const nm=async id=>{const x=((await db.doc('users/'+id).get()).data())||{};return x.name||x.username||'Seseorang'};
const tags=t=>(String(t||'').match(/@([a-z0-9_]{3,20})/g)||[]).map(s=>s.slice(1)).slice(0,10);
const byNames=async n=>n.length?(await db.collection('users').where('username','in',n).get()).docs.map(d=>d.id):[];
exports.onDm=onDocumentCreated('dms/{id}',async e=>{const m=e.data.data();if(m.from===m.to||m.from==='bot_help'||/^Panggilan/.test(m.text||''))return;
 await push(m.to,{type:'chat',title:await nm(m.from),body:m.vn?'Pesan suara':m.img?'Foto':m.vid?'Video':String(m.text||'').slice(0,100),tag:'dm_'+m.from})});
exports.onCall=onDocumentCreated('calls/{id}',async e=>{const c=e.data.data();if(c.status!=='ringing')return;
 await push(c.to,{type:'call',title:'Panggilan '+(c.video?'video':'suara')+' masuk',body:c.fromName+' sedang menelepon',tag:'call'})});
exports.onGroup=onDocumentCreated('gmsgs/{id}',async e=>{const m=e.data.data(),g=(await db.doc('groups/'+m.gid).get()).data();if(!g||m.uid==='bot_help')return;
 let to=(g.members||[]).filter(u=>u!==m.uid);if(g.type!=='channel'){const tg=await byNames(tags(m.text));to=to.filter(u=>tg.includes(u))}
 await Promise.all(to.map(u=>push(u,{type:'chat',title:g.name,body:String(m.text||'').slice(0,100),tag:'g_'+m.gid})))});
exports.onGlobal=onDocumentCreated('global/{id}',async e=>{const m=e.data.data(),ids=(await byNames(tags(m.text))).filter(u=>u!==m.uid);
 await Promise.all(ids.map(u=>push(u,{type:'chat',title:'Kamu di-tag di Chat Global',body:String(m.text||'').slice(0,100),tag:'glob'})))});
