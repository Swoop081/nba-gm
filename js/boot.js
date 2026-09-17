const VERSION='0.5.9';
const versionEl=document.querySelector('[data-version]');if(versionEl)versionEl.textContent=`VERSION ${VERSION}`;
async function forceUpdateCheck(){
 try{
  const versionUrl=new URL('./version.json',location.href);versionUrl.searchParams.set('check',Date.now());
  const res=await fetch(versionUrl.href,{cache:'no-store'});
  if(!res.ok)return false;
  const live=await res.json();
  if(live?.version&&live.version!==VERSION){
   const root=new URL('./',location.href);root.searchParams.set('v',live.version);root.searchParams.set('t',Date.now());
   location.replace(root.href);return true
  }
 }catch(e){console.warn('update check failed',e)}
 return false
}
document.querySelector('#enterGame')?.addEventListener('click',async()=>{if(await forceUpdateCheck())return;document.querySelector('#launch')?.remove();document.body.classList.remove('launching')});
addEventListener('pageshow',()=>forceUpdateCheck());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')forceUpdateCheck()});
if('serviceWorker'in navigator){addEventListener('load',async()=>{try{const regs=await navigator.serviceWorker.getRegistrations();for(const r of regs)await r.unregister();const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('nba-gm-')).map(k=>caches.delete(k)))}catch(e){console.warn('cache reset failed',e)}finally{forceUpdateCheck()}})}else addEventListener('load',forceUpdateCheck);
