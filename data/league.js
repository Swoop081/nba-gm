export const TEAMS=[['ATL','Atlanta','Hawks','#e03a3e'],['BOS','Boston','Celtics','#007a33'],['BKN','Brooklyn','Nets','#222'],['CHA','Charlotte','Hornets','#00788c'],['CHI','Chicago','Bulls','#ce1141'],['CLE','Cleveland','Cavaliers','#860038'],['DAL','Dallas','Mavericks','#00538c'],['DEN','Denver','Nuggets','#0e2240'],['DET','Detroit','Pistons','#c8102e'],['GSW','Golden State','Warriors','#1d428a'],['HOU','Houston','Rockets','#ce1141'],['IND','Indiana','Pacers','#002d62'],['LAC','LA','Clippers','#c8102e'],['LAL','Los Angeles','Lakers','#552583'],['MEM','Memphis','Grizzlies','#5d76a9'],['MIA','Miami','Heat','#98002e'],['MIL','Milwaukee','Bucks','#00471b'],['MIN','Minnesota','Timberwolves','#0c2340'],['NOP','New Orleans','Pelicans','#0c2340'],['NYK','New York','Knicks','#006bb6'],['OKC','Oklahoma City','Thunder','#007ac1'],['ORL','Orlando','Magic','#0077c0'],['PHI','Philadelphia','76ers','#006bb6'],['PHX','Phoenix','Suns','#1d1160'],['POR','Portland','Trail Blazers','#e03a3e'],['SAC','Sacramento','Kings','#5a2d81'],['SAS','San Antonio','Spurs','#444'],['TOR','Toronto','Raptors','#ce1141'],['UTA','Utah','Jazz','#4b0082'],['WAS','Washington','Wizards','#002b5c']].map(([id,city,name,color])=>({id,abbr:id,city,name,color}));
const R=(inside,mid,three,finishing,passing,handle,perimeterD,interiorD,dreb,speed,stamina,durability)=>({inside,mid,three,freeThrow:Math.min(96,three+3),finishing,dunk:Math.max(35,finishing-3),post:Math.max(35,inside-4),passing,handle,offIQ:Math.round((inside+three+passing)/3),perimeterD,interiorD,steal:Math.max(35,perimeterD-3),block:Math.max(35,interiorD-3),oreb:Math.max(35,dreb-12),dreb,speed,acceleration:speed,strength:Math.round((interiorD+dreb)/2),vertical:Math.max(35,finishing-2),stamina,durability});
const P=(nbaId,name,pos,age,height,exp,ovr,ceiling,peakAge,curve,salary,years,ratings,stats,contractType='standard')=>({nbaId,name,team:'ATL',pos,age,height,exp,ovr,dev:{ceiling,peakAge,curve},contract:{salary,years,type:contractType},ratings,stats,line:stats?`${stats.pts} PTS • ${stats.reb} REB • ${stats.ast} AST`:''});
// Atlanta roster corrected 17 Sep 2026. NBA IDs are the canonical NBA.com player IDs used by profile URLs and headshots.
const ATL=[
P(1630552,'Jalen Johnson','PF/SF',24,'6-8',5,87,94,28,'star',30,4,R(91,80,80,92,91,87,79,76,94,86,94,88),{pts:22.5,reb:10.3,ast:7.9,stl:1.2,blk:0.4,fg:.489,three:.352}),
P(1629638,'Nickeil Alexander-Walker','SG/PG',28,'6-5',7,83,88,29,'late-bloom',14.404,3,R(82,84,91,84,79,82,88,61,68,84,92,90),{pts:20.8,reb:3.4,ast:3.7,stl:1.3,blk:0.5,fg:.459,three:.399}),
P(1630700,'Dyson Daniels','SF/SG',23,'6-7',4,81,91,28,'two-way-star',25,4,R(88,69,55,91,87,86,97,76,83,90,94,91),{pts:11.9,reb:6.8,ast:5.9,stl:2.0,blk:0.4,fg:.517,three:.188}),
P(203468,'CJ McCollum','PG/SG',34,'6-3',13,83,82,27,'veteran',21,1,R(82,87,84,82,82,87,70,48,61,75,86,84),{pts:18.7,reb:3.1,ast:4.1,stl:1.0,blk:0.6,fg:.456,three:.357}),
P(1630168,'Onyeka Okongwu','C',25,'6-10',6,81,87,28,'prime',16.1,2,R(88,74,83,89,75,66,76,87,86,79,90,88),{pts:15.2,reb:7.6,ast:3.1,stl:1.1,blk:1.1,fg:.480,three:.376}),
P(1629652,'Luguentz Dort','SG/SF',27,'6-4',7,78,84,28,'prime',17.722,1,R(76,75,80,78,68,75,95,72,69,83,91,90),null),
P(1629111,'Jock Landale','C',30,'6-11',5,75,79,28,'veteran',14.1,1,R(84,70,75,84,67,55,61,79,82,67,83,84),{pts:10.6,reb:5.7,ast:1.7}),
P(1630598,'Aaron Wiggins','SF/PF',27,'6-5',5,76,82,29,'prime',9.028,2,R(78,77,82,81,70,76,80,62,67,82,85,89),{pts:9.4,reb:3.1,ast:1.7}),
P(1630557,'Corey Kispert','SF/SG',27,'6-6',5,73,80,28,'prime',13.975,3,R(78,78,87,80,67,70,68,57,65,76,83,86),null),
P(1627741,'Buddy Hield','SG/SF',33,'6-4',10,74,76,28,'veteran',9.659,2,R(73,77,88,73,67,72,62,45,58,73,82,87),null),
P(1642948,'Ryan Nembhard','PG/SG',23,'5-11',1,72,83,27,'developer',2.151,1,R(72,76,74,74,89,86,67,38,55,83,82,86),{pts:6.6,reb:2.2,ast:5.3}),
P(1643412,'Kingston Flemings','PG/SG',19,'6-4',0,74,91,27,'high-upside',7.349,4,R(82,79,84,86,84,86,76,55,70,90,84,88),{pts:16.1,reb:4.1,ast:5.2,stl:1.5,fg:.48,three:.39,level:'NCAA'}),
P(1643544,'Zuby Ejiofor','PF/C',22,'6-9',0,71,84,27,'developer',3.453,4,R(88,70,72,88,76,64,77,88,86,78,84,90),{pts:16.4,reb:7.3,ast:3.6,stl:1.3,blk:2.2,fg:.54,three:.31,level:'NCAA'}),
P(1631243,'Mouhamed Gueye','PF/C',23,'6-11',3,72,82,27,'developer',2.406,1,R(80,68,69,84,66,64,72,80,79,80,79,72),null),
P(1642854,'Asa Newell','PF/C',20,'6-10',1,73,86,27,'high-upside',3.399,3,R(85,68,70,88,62,62,73,81,82,82,82,87),null),
P(1643539,'Henri Veesaar','C/PF',22,'7-0',0,70,83,27,'developer',1.358,4,R(88,74,88,86,70,56,62,82,86,70,82,80),{pts:17.0,reb:8.7,ast:2.1,blk:1.2,fg:.61,three:.43,level:'NCAA'}),
P(1630592,'Jalen Wilson','SF/PF',25,'6-6',3,71,78,27,'rotation',0,1,R(75,72,74,77,65,69,72,62,70,75,80,84),{pts:6.4,reb:2.1,ast:0.9},'two-way')
P(1641991,'RayJ Dennis','PG/SG',25,'6-1',2,69,73,27,'rotation',0,1,R(70,72,75,72,78,78,72,45,55,82,80,80),null,'two-way'),
P(1641992,'Keshon Gilbert','SG/SF',22,'6-4',0,68,78,27,'developer',0,1,R(72,70,73,75,68,70,75,60,65,80,80,82),null,'two-way')
];
export const PLAYERS=[
{nbaId:1629029,name:'Luka Dončić',team:'LAL',pos:'G',age:27,height:'6-6',exp:8,ovr:96,line:'',dev:{ceiling:98,peakAge:29,curve:'elite'},contract:{salary:48.9,years:3},ratings:R(91,92,90,90,97,96,78,60,84,78,94,86)},
{nbaId:1628369,name:'Jayson Tatum',team:'BOS',pos:'F',age:28,height:'6-8',exp:9,ovr:94,line:'',dev:{ceiling:96,peakAge:29,curve:'star'},contract:{salary:54.1,years:5},ratings:R(88,88,88,91,84,87,88,80,86,87,93,82)},
{nbaId:1628983,name:'Shai Gilgeous-Alexander',team:'OKC',pos:'G',age:28,height:'6-6',exp:8,ovr:97,line:'',dev:{ceiling:98,peakAge:29,curve:'elite'},contract:{salary:40.8,years:2},ratings:R(96,94,86,97,91,95,88,67,76,92,96,88)},
{nbaId:203507,name:'Giannis Antetokounmpo',team:'MIA',pos:'F',age:31,height:'6-11',exp:13,ovr:97,line:'',dev:{ceiling:97,peakAge:29,curve:'elite'},contract:{salary:58.5,years:2},ratings:R(98,75,70,98,87,86,88,94,96,94,96,83)},
...ATL
];