import {simulateGame} from '../js/sim-engine.js';
import {SIM_PLAYERS} from '../js/sim-rosters.js';
import {RATINGS_2K27} from '../data/2k27-ratings.js';
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/gi,'').toLowerCase();
const idx=new Map(Object.entries(RATINGS_2K27).map(([n,v])=>[norm(n),v]));
const enrich=p=>{const x=RATINGS_2K27[p.name]||idx.get(norm(p.name));return x?{...p,rating2k:x.rating2k,ratings:x.ratings}:p};
const teams=[...new Set(SIM_PLAYERS.map(p=>p.team))].sort();const rosters=new Map(teams.map(t=>[t,SIM_PLAYERS.filter(p=>p.team===t).map(enrich)]));
const games=Number(process.argv[2]||10000);const total={games:0,teamPoss:0,pts:0,fgm:0,fga:0,tpm:0,tpa:0,ftm:0,fta:0,orb:0,drb:0,reb:0,ast:0,stl:0,blk:0,tov:0,pf:0,ot:0};
for(let i=0;i<games;i++){let a=teams[Math.floor(Math.random()*teams.length)],b=a;while(b===a)b=teams[Math.floor(Math.random()*teams.length)];const g=simulateGame(rosters.get(a),rosters.get(b));total.games++;total.teamPoss+=g.possessions*2;total.ot+=g.overtime||0;for(const s of g.box)for(const k of ['pts','fgm','fga','tpm','tpa','ftm','fta','orb','drb','reb','ast','stl','blk','tov','pf'])total[k]+=s[k]||0}
const tg=total.games*2, pct=(a,b)=>b?100*a/b:0, per=k=>total[k]/tg;const report={games:total.games,teamGames:tg,perTeamGame:{points:per('pts'),possessions:total.teamPoss/tg,fgPct:pct(total.fgm,total.fga),threePct:pct(total.tpm,total.tpa),ftPct:pct(total.ftm,total.fta),fga:per('fga'),threePA:per('tpa'),fta:per('fta'),orb:per('orb'),drb:per('drb'),reb:per('reb'),ast:per('ast'),stl:per('stl'),blk:per('blk'),tov:per('tov'),pf:per('pf')},overtimeGames:total.ot};
console.log(JSON.stringify(report,null,2));
