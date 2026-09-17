// Player profile policy: real-world sources provide identity/bio data only.
// Performance statistics shown by NBA GM must come from the simulated NBA GM season.
function enforceSimulationStatsOnly(){
  document.querySelectorAll('.playerFactStats').forEach(el=>el.remove());
}
const app=document.querySelector('#app');
if(app)new MutationObserver(enforceSimulationStatsOnly).observe(app,{childList:true,subtree:true});
enforceSimulationStatsOnly();
