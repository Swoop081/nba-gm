// Brooklyn Nets — verified against NBA.com roster/profile pages, 2026-09-17.
// nbaId values are verified NBA.com player IDs. Ratings are game-derived from recent production/profile inputs.
const r=(inside,mid,three,finishing,dunking,post,passing,handle,offIQ,perimeterD,interiorD,steal,block,oreb,dreb,speed,acceleration,strength,vertical,stamina,durability,ft)=>({inside,mid,three,finishing,dunking,post,passing,handle,offIQ,perimeterD,interiorD,steal,block,oreb,dreb,speed,acceleration,strength,vertical,stamina,durability,ft});
const p=(nbaId,name,pos,height,age,salary,years,ceiling,peakAge,ratings,line,contract={})=>({nbaId,name,team:'BKN',pos,height,age,experience:contract.experience??0,contract:{salary,years,...contract},dev:{ceiling,peakAge},ratings,line});
export const BKN=[
p(1643414,'Mikel Brown Jr.','G',"6'5\"",20,6.5,4,74,27,r(67,75,80,80,73,45,82,86,78,68,45,69,43,44,55,88,89,55,79,76,80,82),'2026 No. 6 pick • Rookie',{type:'Rookie Scale'}),
p(1631169,'Josh Minott','F',"6'8\"",23,4.5,2,74,27,r(72,65,66,78,83,61,57,61,67,75,72,73,70,70,72,82,80,72,85,73,72,67),'7.4 PTS • 3.2 REB • 0.9 AST',{total:9}),
p(1642874,'Danny Wolf','F',"6'11\"",22,3.5,3,75,27,r(75,70,69,74,68,72,72,66,74,64,73,57,70,72,77,67,65,75,69,72,76,71),'8.9 PTS • 4.9 REB • 2.2 AST'),
p(1642962,'Drake Powell','G-F',"6'5\"",21,3.3,3,72,27,r(68,69,70,76,82,48,62,69,68,77,60,75,58,52,58,84,83,68,86,72,78,72),'6.5 PTS • 1.8 REB • 1.4 AST'),
p(1642856,'Egor Dëmin','G',"6'8\"",20,6.8,3,76,27,r(68,71,77,74,68,55,81,82,77,69,55,65,52,50,60,78,76,66,70,74,79,78),'10.3 PTS • 3.2 REB • 3.3 AST'),
p(1643538,'Joshua Jefferson','F',"6'9\"",22,2.8,4,70,27,r(76,69,66,76,73,73,65,62,70,69,74,66,71,76,78,69,67,79,75,74,80,73),'2026 No. 28 pick • Rookie',{type:'Rookie Scale'}),
p(1642849,'Nolan Traore','G',"6'3\"",20,3.2,3,76,27,r(67,73,76,78,67,42,83,86,76,67,43,68,38,38,48,90,91,53,74,74,78,77),'8.9 PTS • 1.8 REB • 3.8 AST'),
p(1631165,'Keon Ellis','G',"6'4\"",26,9,2,76,27,r(65,68,82,70,74,42,60,66,70,84,53,83,50,45,53,80,79,61,76,78,80,77),'6.7 PTS • 1.9 REB • 1.0 AST',{total:18,option:'Mutual option in Year 2'}),
p(1629611,'Terance Mann','G-F',"6'6\"",29,15.5,1,74,27,r(70,72,75,75,75,55,70,71,75,76,60,70,55,60,66,75,73,72,75,76,77,79),'7.2 PTS • 3.2 REB • 3.0 AST'),
p(1641761,'Grant Nelson','F',"7'0\"",24,0.6,1,70,27,r(70,62,55,73,76,65,57,55,62,61,72,61,76,78,72,70,68,70,78,67,70,70),'4.3 PTS • 1.5 REB • 1.3 AST',{type:'Two-Way'}),
p(1629008,'Michael Porter Jr.','F',"6'10\"",28,40.8,1,85,27,r(83,86,89,83,78,72,70,71,85,68,64,66,55,70,81,73,70,73,75,82,68,86),'24.2 PTS • 7.1 REB • 3.0 AST'),
p(1630549,"Day'Ron Sharpe",'C',"6'10\"",24,10,2,83,28,r(82,58,45,80,79,78,67,53,73,57,80,61,78,90,87,64,61,86,76,75,70,65),'8.7 PTS • 6.7 REB • 2.3 AST',{total:20}),
p(1641730,'Noah Clowney','F-C',"6'10\"",22,3.4,2,86,28,r(74,67,74,75,76,68,60,57,70,65,78,63,78,73,76,70,67,75,79,73,69,80),'12.3 PTS • 4.1 REB • 1.6 AST'),
p(1629021,'Moritz Wagner','F-C',"6'11\"",29,6.0,2,74,27,r(79,70,72,78,72,75,63,58,74,55,70,58,61,73,74,64,61,78,70,71,62,82),'6.9 PTS • 3.2 REB • 0.8 AST'),
p(203944,'Julius Randle','F-C',"6'9\"",31,33.1,2,87,28,r(87,81,76,85,78,88,82,78,86,66,72,61,55,75,83,72,69,89,73,83,72,78),'21.1 PTS • 6.7 REB • 5.0 AST'),
p(1643052,'Chaney Johnson','G-F',"6'7\"",24,0.6,1,71,27,r(74,67,63,77,79,62,64,63,67,70,69,72,68,79,76,76,74,75,82,70,72,80),'8.2 PTS • 4.6 REB • 2.1 AST',{type:'Two-Way'}),
p(1643548,'Tyler Bilodeau','F',"6'9\"",22,0.6,1,69,27,r(73,78,85,74,66,69,59,58,72,61,67,58,60,67,71,66,64,74,68,70,78,87),'2026 No. 43 pick • Rookie',{type:'Two-Way'}),
p(1642879,'Ben Saraf','G',"6'6\"",20,3.0,3,73,27,r(67,72,78,76,65,48,82,81,74,67,48,72,50,45,53,79,78,60,69,72,77,76),'7.5 PTS • 2.1 REB • 3.3 AST')
];