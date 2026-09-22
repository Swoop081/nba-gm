const R=(inside,mid,three,finishing,passing,handle,perimeterD,interiorD,dreb,speed,stamina,durability)=>({inside,mid,three,freeThrow:Math.min(96,three+3),finishing,dunk:Math.max(35,finishing-3),post:Math.max(35,inside-4),passing,handle,offIQ:Math.round((inside+three+passing)/3),perimeterD,interiorD,steal:Math.max(35,perimeterD-3),block:Math.max(35,interiorD-3),oreb:Math.max(35,dreb-12),dreb,speed,acceleration:speed,strength:Math.round((interiorD+dreb)/2),vertical:Math.max(35,finishing-2),stamina,durability});
const P=(nbaId,name,pos,age,height,exp,ovr,ceiling,peakAge,curve,salary,years,ratings,stats,contractType='standard')=>({nbaId,name,team:'BOS',pos,age,height,exp,ovr,dev:{ceiling,peakAge,curve},contract:{salary,years,type:contractType},ratings,stats,line:stats?`${stats.pts} PTS • ${stats.reb} REB • ${stats.ast} AST`:''});
// Boston roster verified against NBA.com on 17 Sep 2026. nbaId values come directly from NBA.com player profile URLs.
// Salaries are 2026-27 salary figures in USD millions. Veteran ratings are game ratings derived from 2025-26 production and role; they are not official NBA ratings.
export const BOS=[
P(1628369,'Jayson Tatum','C/PF',28,'6-10',9,93,96,29,'star',58.456566,4,R(89,87,86,91,86,88,87,78,89,85,91,82),{pts:21.8,reb:10.0,ast:5.3}),
P(202331,'Paul George','SF/SG',36,'6-8',16,82,84,29,'veteran',54.12638,2,R(82,86,86,82,79,84,85,72,79,74,83,68),{pts:17.3,reb:5.3,ast:3.6}),
P(1628401,'Derrick White','SG/PG',32,'6-4',9,83,87,29,'veteran-prime',30.348,3,R(80,83,87,82,84,83,92,72,72,79,90,86),{pts:16.5,reb:4.4,ast:5.4}),
P(1629011,'Mitchell Robinson','C',28,'7-0',8,80,83,28,'prime',15.044,3,R(91,52,35,91,57,48,67,91,94,72,82,66),{pts:5.7,reb:8.8,ast:0.9,blk:1.2}),
P(1630202,'Payton Pritchard','PG/SG',28,'6-1',6,82,85,29,'prime',7.767857,2,R(78,84,86,80,84,87,76,43,64,84,90,90),{pts:17.0,reb:3.9,ast:5.2}),
P(1630573,'Sam Hauser','SF/PF',28,'6-7',5,76,80,29,'prime',10.848215,3,R(73,78,92,73,65,67,75,60,70,70,83,88),{pts:9.2,reb:3.8,ast:1.5}),
P(1629674,'Neemias Queta','C',27,'7-0',5,80,83,29,'prime',2.667944,4,R(88,59,52,89,67,55,64,86,89,69,84,86),{pts:10.2,reb:8.4,ast:1.7}),
P(201144,'Mike Conley','PG',38,'6-1',19,75,72,28,'veteran',3.876529,1,R(66,76,80,67,81,79,75,40,55,65,72,70),{pts:4.5,reb:1.7,ast:2.9}),
P(1630568,'Luka Garza','C/PF',27,'6-10',5,75,79,29,'rotation',2.801346,1,R(85,77,78,84,65,58,57,74,82,65,79,82),null),
P(1642864,'Hugo González','SF/PG',20,'6-6',1,75,86,28,'high-upside',2.92356,3,R(75,69,70,80,65,73,81,68,73,84,80,89),{pts:3.9,reb:3.3,ast:0.5}),
P(1631248,'Baylor Scheierman','SG/SF',25,'6-6',2,75,79,28,'rotation',2.74404,2,R(72,74,82,75,70,72,72,58,70,73,78,86),null),
P(1641775,'Jordan Walsh','PF/SF',22,'6-6',3,74,82,28,'developer',2.406205,4,R(73,67,68,78,62,67,84,69,74,85,79,87),null),
P(1631199,'Ron Harper Jr.','SF/SG',26,'6-5',4,71,77,28,'rotation',3.150752,3,R(74,72,77,76,65,69,75,61,69,73,78,84),null),
P(1642873,'Amari Williams','C/PF',24,'6-11',1,69,80,28,'developer',0.678882,1,R(82,58,49,84,72,62,64,82,84,72,77,84),null,'two-way'),
P(1643416,'Chris Cenac Jr.','C/PF',19,'6-11',0,71,89,28,'high-upside',2.98812,4,R(85,72,68,88,65,66,74,84,87,82,80,89),{pts:9.5,reb:7.9,ast:0.7,stl:0.8,blk:0.5,level:'NCAA'}),
P(1641759,'Dillon Mitchell','PF/SF',22,'6-8',0,68,80,28,'developer',0.678882,1,R(82,65,61,88,66,68,82,76,81,88,80,88),null,'two-way'),
];