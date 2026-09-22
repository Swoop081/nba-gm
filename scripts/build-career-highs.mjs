import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=process.cwd(),tmp=path.join(root,'.career-highs-tmp');fs.mkdirSync(tmp,{recursive:true});
const files=[path.join(root,'data','league.js'),...fs.readdirSync(path.join(root,'data','teams')).filter(x=>x.endsWith('.js')).map(x=>path.join(root,'data','teams',x))];
const players=new Map();
for(const file of files){const s=fs.readFileSync(file,'utf8');
 for(const m of s.matchAll(/P\(\s*(\d+)\s*,\s*['"]([^'"]+)['"]\s*,\s*['"][^'"]+['"]\s*,\s*\d+\s*,\s*['"][^'"]+['"]\s*,\s*(\d+)/g))players.set(+m[1],{nbaId:+m[1],name:m[2],exp:+m[3]});
 for(const m of s.matchAll(/\{\s*nbaId\s*:\s*(\d+)\s*,\s*name\s*:\s*['"]([^'"]+)['"][\s\S]{0,180}?exp\s*:\s*(\d+)/g))players.set(+m[1],{nbaId:+m[1],name:m[2],exp:+m[3]});
}
const roster=[...players.values()],vets=roster.filter(p=>p.exp>0),rookies=roster.filter(p=>p.exp===0);
const url='https://raw.githubusercontent.com/llimllib/nba_data/main/data/player_game_logs.parquet',pq=path.join(tmp,'player_game_logs.parquet');
const res=await fetch(url);if(!res.ok)throw new Error('Dataset download failed '+res.status);fs.writeFileSync(pq,Buffer.from(await res.arrayBuffer()));
const py=path.join(tmp,'calc.py'),outPath=path.join(tmp,'out.json');
fs.writeFileSync(py,`import pandas as pd,json,sys
df=pd.read_parquet(sys.argv[1])
cols={c.lower():c for c in df.columns}
def col(*names):
 for n in names:
  if n.lower() in cols:return cols[n.lower()]
 raise KeyError(names)
pid=col('personId','PLAYER_ID','player_id')
mapping={'pts':col('points','PTS'),'reb':col('reboundsTotal','REB'),'ast':col('assists','AST'),'stl':col('steals','STL'),'blk':col('blocks','BLK'),'tpm':col('threePointersMade','FG3M')}
ids=set(json.loads(sys.stdin.read()))
d=df[df[pid].isin(ids)]
result={}
for i,g in d.groupby(pid):
 result[str(int(i))]={k:int(pd.to_numeric(g[v],errors='coerce').max()) for k,v in mapping.items()}
json.dump(result,open(sys.argv[2],'w'))
`);
try{execFileSync('python',['-m','pip','install','-q','pandas','pyarrow'],{stdio:'inherit'});execFileSync('python',[py,pq,outPath],{input:JSON.stringify(vets.map(p=>p.nbaId)),stdio:['pipe','inherit','inherit']});}
catch(e){throw new Error('Career-high calculation failed');}
const highs=JSON.parse(fs.readFileSync(outPath,'utf8')),missing=vets.filter(p=>!highs[p.nbaId]);
for(const p of rookies)highs[p.nbaId]={pts:0,reb:0,ast:0,stl:0,blk:0,tpm:0};
const audit={generatedAt:new Date().toISOString(),source:url,roster:roster.length,veterans:vets.length,rookies:rookies.length,verifiedVeterans:vets.length-missing.length,missing};
fs.writeFileSync(path.join(root,'data','career-highs.js'),'// Generated from llimllib/nba_data player game logs. Do not hand-edit.\nexport const CAREER_HIGHS='+JSON.stringify(highs,null,2)+';\n');
fs.writeFileSync(path.join(root,'data','career-highs-audit.json'),JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit,null,2));if(missing.length)process.exit(2);
