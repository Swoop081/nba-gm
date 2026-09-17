// Canonical player-profile presentation. Playable players are 2K27-authority matched, so legacy generated ratings must never be rendered.
function canonicalPlayerProfiles(){
 document.querySelectorAll('.playerHero').forEach(hero=>{
  const main=hero.closest('main');if(!main)return;
  main.querySelectorAll('.card').forEach(card=>{if(card.querySelector('.label')?.textContent?.trim()==='CEILING')card.remove()});
  const contract=[...main.querySelectorAll('.card')].find(card=>card.querySelector('.label')?.textContent?.includes('CONTRACT'));if(contract)contract.classList.add('contractWide');
  const sub=hero.querySelector('.sub');if(sub&&/Potential/i.test(sub.textContent)){const age=sub.textContent.match(/Age\s+\d+/i)?.[0]||'';sub.textContent=age}
  // Remove the old generated rating grids. 2k27-loader is the sole ratings renderer.
  main.querySelectorAll('.ratingGrid').forEach(grid=>{const title=grid.previousElementSibling;if(title?.classList.contains('section'))title.remove();grid.remove()});
  // Keep a minimal identity panel until richer static biography data is available.
  if(!main.querySelector('.playerFacts')){
   const parts=(hero.querySelector('.label')?.textContent||'').split('•').map(s=>s.trim());
   const age=(hero.querySelector('.sub')?.textContent||'').match(/\d+/)?.[0]||'';
   const facts=[['POSITION',parts[1]],['HEIGHT',parts[2]],['AGE',age]].filter(([,v])=>v);
   if(facts.length)hero.insertAdjacentHTML('afterend',`<section class="playerFacts"><div class="playerFactsGrid">${facts.map(([k,v])=>`<div><span>${k}</span><b>${v}</b></div>`).join('')}</div></section>`);
  }
 });
}
const root=document.querySelector('#app');if(root)new MutationObserver(()=>requestAnimationFrame(canonicalPlayerProfiles)).observe(root,{childList:true,subtree:true});canonicalPlayerProfiles();
