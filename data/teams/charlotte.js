const R=(inside,mid,three,finishing,passing,handle,perimeterD,interiorD,dreb,speed,stamina,durability)=>({inside,mid,three,freeThrow:Math.min(96,three+3),finishing,dunk:Math.max(35,finishing-3),post:Math.max(35,inside-4),passing,handle,offIQ:Math.round((inside+three+passing)/3),perimeterD,interiorD,steal:Math.max(35,perimeterD-3),block:Math.max(35,interiorD-3),oreb:Math.max(35,dreb-12),dreb,speed,acceleration:speed,strength:Math.round((interiorD+dreb)/2),vertical:Math.max(35,finishing-2),stamina,durability});
const P=(nbaId,name,pos,age,height,exp,ceiling,peakAge,salary,years,ratings,stats,type='standard')=>({nbaId,name,team:'CHA',pos,age,height,exp,dev:{ceiling,peakAge,curve:age<=22?'developer':age>=31?'veteran':'prime'},contract:{salary,years,type},ratings,stats,line:stats?`${stats.pts} PTS • ${stats.reb} REB • ${stats.ast} AST`:''});
// NBA 2K27 Charlotte roster membership/positions audited against 2KRatings 22 Sep 2026. NBA IDs retained for NBA.com headshots.
export const CHA=[
P(1641706,'Brandon Miller','SG/SF',23,'6-7',3,92,28,11.97,2,R(88,87,90,88,78,84,78,63,74,84,89,82),{pts:20.2,reb:4.9,ast:3.3}),
P(1642851,'Kon Knueppel','SF/SG',21,'6-6',1,94,28,6.65,3,R(84,86,95,84,78,80,75,57,76,79,88,91),{pts:18.5,reb:5.3,ast:3.4}),
P(1629632,'Coby White','PG/SG',26,'6-4',7,87,28,24.67,3,R(84,85,87,86,82,87,72,48,65,86,88,84),{pts:17.4,reb:3.4,ast:4.0}),
P(1629675,'Naz Reid','C/PF',27,'6-9',7,86,29,15.0,3,R(86,80,86,88,72,70,70,82,82,76,88,87),{pts:13.6,reb:6.2,ast:2.2}),
P(1628960,'Grayson Allen','SG/SF',30,'6-3',8,82,28,18.0,2,R(76,82,92,78,76,78,72,48,61,75,84,83),{pts:16.5,reb:3.0,ast:3.8}),
P(203471,'Dennis Schroder','PG/SG',33,'6-1',13,78,28,7.0,1,R(78,77,76,82,84,85,73,40,56,83,84,80),{pts:10.8,reb:2.7,ast:4.9}),
P(1626220,"Royce O'Neale",'PF/SF',33,'6-6',9,77,28,10.125,2,R(72,74,85,72,72,70,82,66,74,70,82,86),{pts:9.8,reb:4.8,ast:2.7}),
P(1627827,'Dorian Finney-Smith','PF/SF',33,'6-7',10,75,28,14.0,2,R(66,68,78,68,62,63,82,72,68,68,78,76),{pts:3.3,reb:2.5,ast:1.0}),
P(1631217,'Moussa Diabate','C/PF',24,'6-10',4,84,28,5.0,2,R(83,61,45,88,63,58,72,83,91,78,87,86),{pts:7.9,reb:8.7,ast:1.9}),
P(1641750,'Ryan Kalkbrenner','C',24,'7-1',1,83,28,2.2,3,R(87,62,55,88,55,45,58,91,84,60,84,88),{pts:7.6,reb:5.5,ast:0.8}),
P(1642275,'Tidjane Salaun','PF/SF',21,'6-10',2,86,28,7.6,2,R(73,67,72,78,57,64,71,74,75,80,82,82),{pts:6.0,reb:4.0,ast:0.7}),
P(1642883,'Sion James','SG/SF',23,'6-5',1,81,27,2.2,3,R(70,68,73,76,69,70,81,66,70,79,83,89),{pts:5.4,reb:3.5,ast:2.0}),
P(1642862,'Liam McNeeley','SF/SG',20,'6-7',1,84,28,3.0,3,R(71,72,79,74,63,66,70,62,69,76,80,85),{pts:4.3,reb:2.4,ast:0.8}),
P(1643419,'Hannes Steinbach','C/PF',20,'6-11',0,89,28,5.0,4,R(86,72,70,88,68,61,72,84,90,77,84,88),{pts:18.5,reb:11.8,ast:2.0,level:'NCAA'}),
P(1643515,'Christian Anderson','PG',20,'6-0',0,87,27,4.0,4,R(77,81,84,80,86,88,69,38,54,91,82,87),{pts:19.1,reb:3.4,ast:5.6,level:'NCAA'}),
P(1629684,'Grant Williams','PF/C',27,'6-7',7,78,28,13.645,1,R(74,72,80,75,68,65,78,77,72,67,80,74),null),
P(1626192,'Pat Connaughton','SG/SF',33,'6-5',11,72,28,9.423,1,R(67,69,76,70,63,66,68,55,64,72,76,78),null),
P(1641790,'P.J. Hall','C/PF',24,'6-8',2,76,28,2.2,1,R(79,69,69,81,60,55,65,78,77,70,79,84),null),
P(1630214,'Xavier Tillman','F',27,'6-8',6,76,28,2.2,1,R(75,65,69,77,67,60,77,82,78,66,79,83),null),
P(1642369,'Michael Ajayi','PF',23,'6-7',0,77,27,0.64,1,R(76,73,76,81,66,69,73,66,78,80,80,86),null,'two-way'),
P(1643573,'Kylan Boswell','PG',21,'6-2',0,78,27,0.64,1,R(73,76,80,77,81,83,76,43,60,85,81,86),null,'two-way'),
];