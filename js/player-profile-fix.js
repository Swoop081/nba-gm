// Universal player profile presentation: every player gets the same compact rating UI.
const pretty=s=>(s||'').replace(/([A-Z])/g,' $1').trim().toUpperCase();
const bar=(name,value)=>{const v=Math.max(0,Math.min(100,Number(value)||0));return `<div class="ratingBar"><div class="ratingBarHead"><span>${pretty(name)}</span><b>${v}</b></div><div class="ratingTrack"><i style="width:${v}%"></i></div></div>`};
function compactPlayerProfiles(){
 document.querySelectorAll('.playerHero').forEach(hero=>{
  const main=hero.closest('main');if(!main)return;
  main.querySelectorAll('.card').forEach(card=>{if(card.querySelector('.label')?.textContent?.trim()==='CEILING')card.remove()});
  const contract=[...main.querySelectorAll('.card')].find(card=>card.querySelector('.label')?.textContent?.includes('CONTRACT'));if(contract)contract.classList.add('contractWide');
  const sub=hero.querySelector('.sub');if(sub&&/Potential/i.test(sub.textContent)){const age=sub.textContent.match(/Age\s+\d+/i)?.[0]||'';sub.textContent=age}
  // If the expanded ratings dataset has no entry for a player, convert the base game ratings instead of leaving raw text.
  main.querySelectorAll('.ratingGrid').forEach(grid=>{
   const rows=[...grid.children].map(row=>({name:row.querySelector('span')?.textContent||'',value:row.querySelector('b')?.textContent||''})).filter(x=>x.name&&x.value);
   if(!rows.length)return;
   grid.className='ratingBars';grid.innerHTML=rows.map(x=>bar(x.name,x.value)).join('');
   const title=grid.previousElementSibling;if(title?.classList.contains('section'))title.classList.add('playerRatingTitle');
  });
  // Ensure every roster player has a compact identity panel even when no external bio record exists.
  if(!main.querySelector('.playerFacts')){
   const parts=(hero.querySelector('.label')?.textContent||'').split('•').map(s=>s.trim());
   const age=(hero.querySelector('.sub')?.textContent||'').match(/\d+/)?.[0]||'';
   const facts=[['POSITION',parts[1]],['HEIGHT',parts[2]],['AGE',age]].filter(([,v])=>v);
   if(facts.length){hero.insertAdjacentHTML('afterend',`<section class="playerFacts"><div class="playerFactsGrid">${facts.map(([k,v])=>`<div><span>${k}</span><b>${v}</b></div>`).join('')}</div></section>`)}
  }
 });
}
const root=document.querySelector('#app');if(root)new MutationObserver(()=>requestAnimationFrame(compactPlayerProfiles)).observe(root,{childList:true,subtree:true});compactPlayerProfiles();