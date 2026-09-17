const VERSION='0.5.8';
const versionEl=document.querySelector('[data-version]');if(versionEl)versionEl.textContent=`VERSION ${VERSION}`;
function cleanAppUrl(){const u=new URL(location.href);u.searchParams.delete('refresh');u.searchParams.set('v',Date.now());return u.href}
async function forceUpdateCheck(){
 try{
  const res=await fetch(new URL(`version.json?check=${Date.now()}`,document.baseURI),{cache:'no-store',headers:{'Cache-Control':'no-cache'}});
  if(!res.ok)return false;
  const live=await res.json();
  if(live?.version&&live.version!==VERSION){location.replace(cleanAppUrl());return true}
 }catch(e){console.warn('update check failed',e)}
 return false
}
document.querySelector('#enterGame')?.addEventListener('click',async()=>{if(await forceUpdateCheck())return;document.querySelector('#launch')?.remove();document.body.classList.remove('launching')});
addEventListener('pageshow',()=>forceUpdateCheck());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')forceUpdateCheck()});
if('serviceWorker'in navigator){addEventListener('load',async()=>{try{const regs=await navigator.serviceWorker.getRegistrations();for(const r of regs)await r.unregister();const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('nba-gm-')).map(k=>caches.delete(k)))}catch(e){console.warn('cache reset failed',e)}finally{forceUpdateCheck()}})}else addEventListener('load',forceUpdateCheck);
