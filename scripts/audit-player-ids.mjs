import fs from 'node:fs/promises';
import path from 'node:path';

// Canonical league-wide NBA.com portrait ID audit.
const ROOT=process.cwd();
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘]/g,"'").replace(/\./g,'').replace(/\s+(jr|sr|ii|iii|iv)$/i,'').replace(/[^a-z0-9]+/gi,' ').trim().toLowerCase();

async function getOfficialPlayers(){
  const found=[];
  const urls=['https://data.nba.com/data/v2022/json/mobile_teams/nba/2026/players/00_player_info.json','https://api.nba.com/v0/api/mobilefeed/nba/2026/players/00_player_info.json'];
  let json;
  for(const url of urls){try{const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0','Accept':'application/json'}});if(r.ok){json=await r.json();break}}catch{}}
  if(json){
    const walk=v=>{if(!v||typeof v!=='object')return;if(Array.isArray(v)){for(const x of v)walk(x);return;}const id=v.playerId??v.personId??v.pid??v.PERSON_ID;const first=v.firstName??v.fn??v.FIRST_NAME;const last=v.lastName??v.ln??v.LAST_NAME;const full=v.displayName??v.fullName??v.DISPLAY_FIRST_LAST??v.name;if(id&&(full||(first&&last)))found.push({id:Number(id),name:String(full??`${first} ${last}`)});for(const x of Object.values(v))if(x&&typeof x==='object')walk(x)};walk(json);
  }
  if(found.length<400){
    const r=await fetch('https://raw.githubusercontent.com/swar/nba_api/master/src/nba_api/stats/library/data.py');
    if(!r.ok)throw new Error('Could not fetch canonical NBA player ID data');
    const src=await r.text();
    const re=/^\s*\[(\d+),\s*"(?:[^"\\]|\\.)*",\s*"(?:[^"\\]|\\.)*",\s*"((?:[^"\\]|\\.)*)",\s*(?:True|False)\],?$/gm;
    let m;while((m=re.exec(src)))found.push({id:Number(m[1]),name:m[2].replace(/\\"/g,'"')});
  }
  const byName=new Map();for(const p of found){const k=norm(p.name);if(!k)continue;const a=byName.get(k)||[];if(!a.some(x=>x.id===p.id))a.push(p);byName.set(k,a)}
  if(byName.size<400)throw new Error(`Canonical player data unexpectedly small: ${byName.size}`);
  return byName;
}

function playerMatches(text){const out=[];const re=/P\(\s*(\d+)\s*,\s*(['"])(.*?)\2\s*,/gs;let m;while((m=re.exec(text)))out.push({start:m.index,end:re.lastIndex,id:Number(m[1]),name:m[3]});const obj=/\{nbaId\s*:\s*(\d+)\s*,\s*name\s*:\s*(['"])(.*?)\2\s*,/gs;while((m=obj.exec(text)))out.push({start:m.index,end:obj.lastIndex,id:Number(m[1]),name:m[3]});return out.sort((a,b)=>a.start-b.start)}

const official=await getOfficialPlayers();
const teamDir=path.join(ROOT,'data','teams');const files=(await fs.readdir(teamDir)).filter(f=>f.endsWith('.js')).map(f=>path.join(teamDir,f));files.push(path.join(ROOT,'data','league.js'));
let corrected=0,checked=0,unresolved=[];const finalRecords=[];
for(const file of files){let text=await fs.readFile(file,'utf8');const matches=playerMatches(text);let offset=0;for(const p of matches){checked++;const candidates=official.get(norm(p.name))||[];if(candidates.length!==1){unresolved.push(`${path.relative(ROOT,file)} :: ${p.name} :: stored ${p.id} :: matches ${candidates.map(x=>x.id).join(',')||'NONE'}`);finalRecords.push({...p,file,id:p.id});continue;}const right=candidates[0].id;if(right!==p.id){const s=p.start+offset,e=p.end+offset,chunk=text.slice(s,e);const replaced=chunk.replace(/(P\(\s*|\{nbaId\s*:\s*)\d+/,`$1${right}`);text=text.slice(0,s)+replaced+text.slice(e);offset+=replaced.length-chunk.length;corrected++;}finalRecords.push({...p,file,id:right});}await fs.writeFile(file,text)}
const dup=new Map();for(const p of finalRecords){const a=dup.get(p.id)||[];a.push(p);dup.set(p.id,a)}const duplicateLines=[];for(const [id,a] of dup)if(a.length>1&&new Set(a.map(x=>norm(x.name))).size>1)duplicateLines.push(`${id}: ${a.map(x=>`${x.name} (${path.basename(x.file)})`).join(' | ')}`);
const report=[`NBA PLAYER ID AUDIT`,`checked=${checked}`,`corrected=${corrected}`,`unresolved=${unresolved.length}`,`conflictingDuplicateIds=${duplicateLines.length}`,'','UNRESOLVED',...unresolved,'','CONFLICTING DUPLICATES',...duplicateLines,''].join('\n');await fs.writeFile(path.join(ROOT,'PLAYER-ID-AUDIT.txt'),report);console.log(report);if(unresolved.length||duplicateLines.length)process.exitCode=2;
