import * as base from './season-engine.js?v=0.6.234';
import {NBA_CUP_2026_GROUP_PLAY} from '../data/nba-cup-2026-group-play.js';
export * from './season-engine.js?v=0.6.234';
const CUP_DATES=new Set(['2026-10-30','2026-11-06','2026-11-13','2026-11-20','2026-11-24','2026-11-25','2026-11-27']);
const GROUP_KEY={'East A':'EA','East B':'EB','East C':'EC','West A':'WA','West B':'WB','West C':'WC'};
const pairKey=(a,b)=>[a,b].sort().join('|');
function isoTip(date,timeEt){const [clock,ap]=timeEt.split(' '),[hh,mm]=clock.split(':').map(Number);let h=hh%12+(ap==='PM'?12:0);const etUtc=h+5;const d=new Date(`${date}T00:00:00Z`);d.setUTCHours(etUtc,mm,0,0);return d.toISOString()}
function occupied(schedule,date,skip=null){const s=new Set();for(const g of schedule)if(g!==skip&&g.date===date){s.add(g.home);s.add(g.away)}return s}
function nearestOpenDate(schedule,g){const start=new Date(`${g.date}T12:00:00Z`);for(let delta=1;delta<=14;delta++)for(const dir of [1,-1]){const d=new Date(start);d.setUTCDate(d.getUTCDate()+delta*dir);const ds=d.toISOString().slice(0,10);if(ds<'2026-10-20'||ds>'2027-04-11'||CUP_DATES.has(ds))continue;const used=occupied(schedule,ds,g);if(!used.has(g.home)&&!used.has(g.away)&&used.size<20)return ds}return null}
export function applyOfficialCupGroupSchedule(season){if(!season?.schedule?.length||season.cup?.officialGroupScheduleApplied)return season;for(const g of season.schedule){if(g.cupStage==='GROUP'){delete g.cup;delete g.cupStage;delete g.cupGroup}delete g.officialCupGroup}
const pools=new Map();for(const g of season.schedule){const k=pairKey(g.home,g.away);if(!pools.has(k))pools.set(k,[]);pools.get(k).push(g)}
for(const og of NBA_CUP_2026_GROUP_PLAY){const pool=pools.get(pairKey(og.home,og.away))||[];let g=pool.find(x=>!x.officialCupGroup);if(!g)continue;g.date=og.date;g.tipUtc=isoTip(og.date,og.timeEt);g.home=og.home;g.away=og.away;g.cup=true;g.cupStage='GROUP';g.cupGroup=GROUP_KEY[og.group];g.officialCupGroup=true;g.provisional=false;g.broadcastTimeEt=og.timeEt}
for(const g of season.schedule){if(CUP_DATES.has(g.date)&&!g.officialCupGroup){const d=nearestOpenDate(season.schedule,g);if(d){g.date=d;g.tipUtc=`${d}T23:00:00Z`}}}
season.schedule.sort((a,b)=>a.date.localeCompare(b.date)||(a.tipUtc||'').localeCompare(b.tipUtc||''));season.cup=season.cup||{};season.cup.officialGroupScheduleApplied=true;season.cup.groupScheduleGames=NBA_CUP_2026_GROUP_PLAY.length;season.scheduleSource=season.scheduleSource.includes('PROVISIONAL')?'82-GAME PROVISIONAL + OFFICIAL NBA CUP GROUP PLAY':'NBA 2026-27 OFFICIAL + NBA CUP GROUP PLAY';base.saveSeason(season);return season}
export function loadSeason(){return base.loadSeason()}
export async function createSeason(){return base.createSeason()}

export const advanceOneDay=base.advanceOneDay;
