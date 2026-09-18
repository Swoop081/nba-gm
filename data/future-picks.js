// Future draft-rights ledger audited 18 Sep 2026. Complex protections/swaps are preserved in labels.
const own=(team,year,round=1,label='Own')=>({id:`${team}-${year}-${round}-own`,holder:team,origin:team,year,round,label});
const x=(holder,origin,year,round,label)=>({id:`${holder}-${origin}-${year}-${round}-${label.replace(/\W+/g,'-')}`,holder,origin,year,round,label});
const ownYears={
ATL:[2029,2030,2031,2032,2033],BOS:[2027,2028,2030,2031,2033],BKN:[2027,2029,2030,2031,2032,2033],CHA:[2027,2028,2029,2030,2031,2032,2033],
CHI:[2027,2028,2029,2030,2031,2032,2033],CLE:[2030,2032],DAL:[2027,2028,2030,2031,2032,2033],DEN:[2027,2028,2029,2030,2031,2033],
DET:[2027,2028,2029,2030,2031,2032,2033],GSW:[2027,2028,2029,2030,2031,2032,2033],HOU:[2027,2028,2029,2030,2031,2032,2033],IND:[2027,2028,2030,2031,2032,2033],
LAC:[2027,2029],LAL:[2027,2028,2030,2032],MEM:[2027,2028,2029,2030,2031,2032,2033],MIA:[2027,2029,2030,2032],MIL:[2028,2030,2031,2032,2033],
MIN:[2028,2029,2030,2032],NOP:[2027,2028,2029,2030,2031,2032,2033],NYK:[2028,2030,2032,2033],OKC:[2027,2028,2029,2030,2031,2032,2033],
ORL:[2027,2029,2031,2032,2033],PHI:[2027,2028,2029,2030,2032,2033],PHX:[2027,2028,2029,2030,2032],POR:[2027,2028,2029,2030,2031,2032,2033],
SAC:[2027,2028,2029,2030,2031,2032,2033],SAS:[2028,2029,2030,2031,2032,2033],TOR:[2027,2028,2029,2030,2032],UTA:[2027,2028,2029,2030,2031,2032,2033],
WAS:[2027,2028,2029,2030,2031,2032,2033]
};
export const FUTURE_PICK_RIGHTS=[];
for(const [team,years] of Object.entries(ownYears))for(const year of years)FUTURE_PICK_RIGHTS.push(own(team,year,1));
for(const team of Object.keys(ownYears))for(let year=2027;year<=2033;year++)FUTURE_PICK_RIGHTS.push(own(team,year,2));
FUTURE_PICK_RIGHTS.push(
x('ATL','MIL/NOP',2027,1,'Less favorable MIL/NOP if 5-30'),x('ATL','CLE',2029,2,'Cleveland 2nd'),x('ATL','NYK',2030,2,'New York 2nd'),
x('BOS','LAC',2028,1,'Clippers/Boston/Philadelphia/San Antonio swap rights'),x('BOS','GSW/MIL/OKC',2028,2,'Most favorable GSW/MIL/OKC'),x('BOS','PHI',2031,1,'Philadelphia 1st'),
x('BKN','NYK',2027,1,'New York 1st'),x('BKN','HOU',2027,1,'Houston swap right'),x('BKN','DAL/PHX/HOU',2029,1,'Least favorable DAL/PHX/HOU'),x('BKN','NYK',2029,1,'New York 1st'),x('BKN','DEN',2032,1,'Denver 1st'),
x('CHA','DAL',2027,1,'Dallas 3-30'),x('CHA','MIA',2027,1,'Miami 15-30'),x('CHA','MIA',2028,1,'Miami if not conveyed'),x('CHA','UTA/CLE/MIN',2029,1,'Least/less favorable Utah/Cleveland/Minnesota'),x('CHA','MIN',2033,1,'Minnesota 1st'),x('CHA','PHX',2033,1,'Phoenix 1st'),
x('CHI','CLE',2027,2,'Cleveland 2nd'),x('CHI','MIN/GSW',2031,2,'More favorable Minnesota/Golden State'),
x('DAL','LAL',2029,1,'Lakers 1st'),x('DEN','CLE',2031,1,'Cleveland 1st'),
x('HOU','PHX',2027,1,'Phoenix 1st'),x('HOU','DAL/PHX',2029,1,'Top-two of Houston/Dallas/Phoenix pool'),
x('LAC','TOR',2027,1,'Toronto/Clippers/OKC/Denver swap right'),x('LAC','TOR',2031,1,'Toronto unprotected 1st'),x('LAC','TOR',2033,1,'Toronto unprotected 1st'),x('LAC','TOR',2030,2,'Toronto 2nd'),x('LAC','TOR',2033,2,'Toronto 2nd'),
x('MEM','LAL',2027,1,'Lakers 5-30'),x('MEM','UTA/CLE/MIN',2027,1,'Most favorable Utah/Cleveland/Minnesota'),x('MEM','GSW',2030,1,'Golden State 21-30'),x('MEM','ORL',2030,1,'Orlando 1st'),x('MEM','PHX',2031,1,'Phoenix 1st'),
x('MIL','MIA',2031,1,'Miami 1st'),x('MIL','MIA',2033,1,'Miami 1st'),
x('NOP','MIL',2027,1,'More favorable New Orleans/Milwaukee'),x('NYK','WAS',2027,2,'Washington 2nd'),
x('OKC','DEN',2027,1,'Denver 6-30 / OKC-LAC swap pool'),x('OKC','LAC',2027,1,'Clippers swap right'),x('OKC','SAS',2027,1,'San Antonio 17-30'),x('OKC','DAL',2028,1,'Dallas swap right'),x('OKC','DEN',2028,1,'Denver 6-30 if not settled'),x('OKC','DEN',2029,1,'Denver 6-30 conditional'),x('OKC','DEN',2030,1,'Denver 6-30 conditional'),x('OKC','CHI',2027,2,'Chicago 2nd'),x('OKC','UTA',2028,2,'Utah 2nd'),x('OKC','BOS',2029,2,'Boston 2nd'),x('OKC','ATL/MIA',2029,2,'Less favorable Atlanta/Miami'),x('OKC','ATL',2030,2,'Atlanta 2nd'),x('OKC','MIN',2030,2,'Minnesota 2nd'),
x('POR','ORL',2028,1,'Orlando 1st'),x('POR','MIL',2028,1,'Milwaukee swap right'),x('POR','BOS/MIL',2029,1,'Boston/Milwaukee pick pool'),
x('SAC','SAS',2027,1,'San Antonio 1-16'),x('SAC','MIN',2031,1,'Minnesota 1st'),
x('SAS','ATL',2027,1,'Atlanta 1st'),x('SAS','BOS',2028,1,'Boston swap right'),x('SAS','DAL/MIN',2030,1,'Dallas/Minnesota swap rights'),
x('UTA','CLE/MIN',2027,1,'Second-most favorable Utah/Cleveland/Minnesota'),x('UTA','LAL',2030,1,'Lakers swap right'),x('UTA','LAL',2031,1,'Lakers 1st'),x('UTA','LAL',2033,1,'Lakers 1st'),
x('WAS','BOS/POR/MIL',2029,1,'Second-most favorable Portland/Boston/Milwaukee')
);
export function startingPickRights(teamId){return FUTURE_PICK_RIGHTS.filter(p=>p.holder===teamId)}
