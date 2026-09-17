const VERSION='0.5.7';
const versionEl=document.querySelector('[data-version]');if(versionEl)versionEl.textContent=`VERSION ${VERSION}`;
const bust=()=>`${location.pathname}${location.search?'&':'?'}refresh=${Date.now()}`;
async function forceUpdateCheck(){
 try{
  const res=await fetch(`./version.json?check=${Date.now()}`,{cache:'no-store',headers:{'Cache-Control':'no-cache'}});
  if(!res.ok)return;
  const live=await res.json();
  if(live?.version&&live.version!==VERSION){location.replace(bust());return}
 }catch(e){console.warn('update check failed',e)}
}
document.querySelector('#enterGame')?.addEventListener('click',async()=>{await forceUpdateCheck();document.querySelector('#launch')?.remove();document.body.classList.remove('launching')});
addEventListener('pageshow',()=>forceUpdateCheck());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')forceUpdateCheck()});
if('serviceWorker'in navigator){addEventListener('load',async()=>{try{const regs=await navigator.serviceWorker.getRegistrations();for(const r of regs)await r.unregister();const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('nba-gm-')).map(k=>caches.delete(k)))}catch(e){console.warn('cache reset failed',e)}finally{forceUpdateCheck()}})}else addEventListener('load',forceUpdateCheck);
