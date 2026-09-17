// Player profile bio renderer. Always renders locally available static identity data.
// Optional enriched fields may be layered in later; real-world performance stats are never read here.
import {PLAYERS} from '../data/league.js?v=0.6.24';
const clean=s=>(s||'').replace(/\s+/g,' ').trim();
const norm=s=>clean(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/gi,'').toLowerCase();
const byName=new Map(PLAYERS.map(p=>[norm(p.name),p]));
const STATIC={
 'anthonydavis':{jersey:'23',weight:'253 lb',birthdate:'March 11, 1993',country:'USA',school:'Kentucky',draft:'2012 R1 Pick 1',experience:'14 Years'}
};
function factsFor(name){const p=byName.get(norm(name));if(!p)return null;const extra=STATIC[norm(name)]||{};return {position:p.pos,height:p.height,age:p.age,experience:extra.experience||(Number.isFinite(p.exp)?`${p.exp} Year${p.exp===1?'':'s'}`:''),...extra}}
function render(hero,b){if(!b)return;const main=hero.closest('main');if(!main)return;let box=main.querySelector('.playerFacts');if(!box){box=document.createElement('section');box.className='playerFacts';hero.insertAdjacentElement('afterend',box)}const facts=[['POSITION',b.position],['HEIGHT',b.height],['AGE',Number.isFinite(b.age)?String(b.age):''],['JERSEY',b.jersey?`#${b.jersey}`:''],['WEIGHT',b.weight],['BIRTHDATE',b.birthdate],['COUNTRY',b.country],['LAST ATTENDED',b.school],['EXPERIENCE',b.experience],['DRAFT',b.draft]].filter(([,v])=>v);box.innerHTML=`<div class="playerFactsGrid">${facts.map(([k,v])=>`<div${k==='DRAFT'?' class="wideFact"':''}><span>${k}</span><b>${v}</b></div>`).join('')}</div>`}
function enrich(){const hero=document.querySelector('.playerHero');if(!hero)return;const name=clean(hero.querySelector('h1')?.textContent);if(!name)return;render(hero,factsFor(name))}
const root=document.querySelector('#app');if(root)new MutationObserver(()=>requestAnimationFrame(enrich)).observe(root,{childList:true,subtree:true});enrich();