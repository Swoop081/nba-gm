// Global player-profile presentation fixes.
function compactPlayerProfiles(){
  document.querySelectorAll('.playerHero').forEach(hero=>{
    const main=hero.closest('main');
    if(!main)return;
    // Ceiling/potential projections are internal development data, not profile facts.
    main.querySelectorAll('.card').forEach(card=>{
      const label=card.querySelector('.label')?.textContent?.trim();
      if(label==='CEILING')card.remove();
    });
    const contract=[...main.querySelectorAll('.card')].find(card=>card.querySelector('.label')?.textContent?.includes('CONTRACT'));
    if(contract)contract.classList.add('contractWide');
  });
}
const root=document.querySelector('#app');
if(root)new MutationObserver(()=>requestAnimationFrame(compactPlayerProfiles)).observe(root,{childList:true,subtree:true});
compactPlayerProfiles();
