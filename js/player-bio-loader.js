// NBA profile enrichment. Static identity/bio only; never imports real-world performance stats.
const bioCache=new Map();
const clean=s=>(s||'').replace(/\s+/g,' ').trim();
const slug=s=>clean(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const field=(text,label,nextLabels)=>{const tail=text.split(label)[1];if(!tail)return'';let v=tail;for(const n of nextLabels){const i=v.indexOf(n);if(i>=0)v=v.slice(0,i)}return clean(v).replace(/^[:\s]+/,'')};
function nbaId(hero){const src=hero.querySelector('img')?.src||'';return src.match(/\/(\d+)\.png(?:\?|$)/)?.[1]||null}
function render(hero,b){if(!b)return;const main=hero.closest('main');if(!main)return;let box=main.querySelector('.playerFacts');if(!box){box=document.createElement('section');box.className='playerFacts';hero.insertAdjacentElement('afterend',box)}
 const facts=[['JERSEY',b.jersey?`#${b.jersey}`:''],['WEIGHT',b.weight],['BIRTHDATE',b.birthdate],['COUNTRY',b.country],['LAST ATTENDED',b.school],['EXPERIENCE',b.experience],['DRAFT',b.draft]].filter(x=>x[1]);
 box.innerHTML=`<div class="playerFactsGrid">${facts.map(([k,v],i)=>`<div${k==='DRAFT'?' class="wideFact"':''}><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
}
async function getBio(id,name){const key=String(id);if(bioCache.has(key))return bioCache.get(key);const stored=sessionStorage.getItem(`nbaBio:${key}`);if(stored){try{const b=JSON.parse(stored);bioCache.set(key,b);return b}catch{}}
 try{const url=`https://api-hub.nba.com/player/${encodeURIComponent(id)}/${slug(name)}/bio`;const res=await fetch(url,{mode:'cors'});if(!res.ok)throw new Error(String(res.status));const html=await res.text();const doc=new DOMParser().parseFromString(html,'text/html');const text=clean(doc.body?.textContent||html);
  const labels=['HEIGHT','WEIGHT','COUNTRY','LAST ATTENDED','AGE','BIRTHDATE','DRAFT','EXPERIENCE','Latest Videos','Player Bio'];
  const weight=field(text,'WEIGHT',labels.filter(x=>x!=='WEIGHT')).match(/\d+\s*lb/i)?.[0]||'';
  const country=field(text,'COUNTRY',['LAST ATTENDED','AGE','BIRTHDATE','DRAFT','EXPERIENCE']).replace(/^[-–—]+/,'').trim();
  const school=field(text,'LAST ATTENDED',['AGE','BIRTHDATE','DRAFT','EXPERIENCE']);
  const birthdate=field(text,'BIRTHDATE',['DRAFT','EXPERIENCE']).match(/[A-Z][a-z]+\s+\d{1,2},\s+\d{4}/)?.[0]||'';
  const draft=field(text,'DRAFT',['EXPERIENCE','BIRTHDATE']).match(/\d{4}\s+R\d\s+Pick\s+\d+/i)?.[0]||'';
  const experience=field(text,'EXPERIENCE',['Latest Videos','Player Bio']).match(/\d+\s+Years?/i)?.[0]||'';
  const jersey=(text.match(/#(\d{1,2})\s*[|•]/)||[])[1]||'';
  const b={jersey,weight,birthdate,country:country&&country.length<40?country:'',school:school&&school.length<60?school:'',draft,experience};
  if(Object.values(b).some(Boolean)){bioCache.set(key,b);sessionStorage.setItem(`nbaBio:${key}`,JSON.stringify(b));return b}
 }catch(e){console.warn('NBA bio unavailable',name,e)}
 return null;
}
let active='';async function enrich(){const hero=document.querySelector('.playerHero');if(!hero)return;const name=clean(hero.querySelector('h1')?.textContent);const id=nbaId(hero);if(!name||!id)return;const key=id+':'+name;if(active===key)return;active=key;const b=await getBio(id,name);if(document.querySelector('.playerHero')===hero)render(hero,b)}
const root=document.querySelector('#app');if(root)new MutationObserver(()=>requestAnimationFrame(enrich)).observe(root,{childList:true,subtree:true});enrich();
