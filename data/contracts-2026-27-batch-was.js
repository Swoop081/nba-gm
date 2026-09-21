// Verified 2026-27 contract audit batch: WAS.
// USD millions. Basketball-Reference payroll snapshot, 18 Sep 2026.
// Players with no salary listed on the payroll table remain unverified rather than receiving invented values.
const C=(team,salary,years,guaranteed=null)=>({team,salary,years,guaranteed});
export const CONTRACTS_BATCH_WAS={
'Anthony Davis':C('WAS',58.456566,2,58.456566),
'Trae Young':C('WAS',49.4883,4,154.403496),
'AJ Dybantsa':C('WAS',14.748,4,30.23376),
'Alex Sarr':C('WAS',12.37068,2,12.37068),
'Bilal Coulibaly':C('WAS',9.240012,1,9.240012),
'Tre Johnson':C('WAS',8.6496,3,8.6496),
'Deandre Ayton':C('WAS',8.104,1,8.104),
'Tre Mann':C('WAS',8,2,8),
'Khris Middleton':C('WAS',5.591122,3,6.499),
'Bub Carrington':C('WAS',4.90056,2,4.90056),
'Will Riley':C('WAS',3.68832,3,3.68832),
'Kyshawn George':C('WAS',3.108,2,3.108),
'Justin Champagnie':C('WAS',2.667944,2,2.667944),'Tristan Vukcevic':C('WAS',2.449421,1,2.449421),'Sharife Cooper':C('WAS',2.449421,1,2.449421),'Anthony Gill':C('WAS',2.449421,1,2.449421),'Jamir Watkins':C('WAS',2.150917,3,2.150917),'Felix Okpara':C('WAS',0.678882,1,0.091)
};
export function applyAuditedBatchWas(p){const c=CONTRACTS_BATCH_WAS[p.name];if(!c||c.team!==p.team)return p;return{...p,contract:{...(p.contract||{}),salary:c.salary,years:c.years,guaranteed:c.guaranteed,type:p.contract?.type||'standard',verified:true}}}
