// Verified 2026-27 contract audit batch: CHI.
// USD millions. Basketball-Reference payroll snapshot, Sep 2026.
const C=(team,salary,years,guaranteed=null)=>({team,salary,years,guaranteed});
export const CONTRACTS_BATCH_CHI={
'Josh Giddey':C('CHI',25,3,75),'Nic Claxton':C('CHI',23.147727,2,44.090911),'Norman Powell':C('CHI',21.5,2,21.5),'Patrick Williams':C('CHI',18,3,36),'Isaac Okoro':C('CHI',11.814814,1,11.814814),'Caleb Wilson':C('CHI',10.68372,4,21.90168),'Jalen Smith':C('CHI',9.428571,1,9.428571),'Zach Collins':C('CHI',8.292683,2,17),'Tre Jones':C('CHI',8,2,8),'Rob Dillingham':C('CHI',6.88932,2,6.88932),'Matas Buzelis':C('CHI',5.71536,2,5.71536),'Noa Essengue':C('CHI',5.7012,3,5.7012),'Dailyn Swain':C('CHI',4.96548,4,10.17924),'Leonard Miller':C('CHI',2.406205,1,2.406205)
};
export function applyAuditedBatchChi(p){const c=CONTRACTS_BATCH_CHI[p.name];if(!c||c.team!==p.team)return p;return{...p,contract:{...(p.contract||{}),salary:c.salary,years:c.years,guaranteed:c.guaranteed,type:p.contract?.type||'standard',verified:true}}}
