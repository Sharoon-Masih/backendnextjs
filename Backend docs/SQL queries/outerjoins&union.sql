-- left join 
-- isme yeh yaad rakhna hai kay jasay inner join may toh hum table_A ko pehla likhdein ya table_B ko pehla likhdein toh koi issue nhi tha,bcuz un dono ma say toh srf common nikalna hai hna. 
-- but left ya right join ma yeh cheez matter krti haka konsa table pehlay likha hai bcuz agr huma table_A ka pura data chaiya and table_B may say srf wohi chaiya jo table_A mabi ho toh hum. 
-- table_A ko pehla likhega and then table_B using left join takay table_A ka pura data aye but table_B ma sa srf jo match ho rha hai table_A ma wohi aye.

select * from colleague left join courses on colleague.id = courses.id;

-- Now ab agar result dekhay toh usme table_A kay toh saray records aye hi aye, but table_B may say srf wohi jo match ho rhay thy. 
-- or jo ids table_B ma nhi hai unkay against null ajaga.

-- right join 
-- its only opposite of left join, otherwise everything is similar

select * from courses right join colleague on colleague.id = courses.id; -- now it will send the whole course table but only send those records from colleague which are in course also. 

-- full join (isme table_A be pura ayega and Table_B be but remember asa nhi hoga kay agr ek record table_A mabi hai and table_B mabi hai toh wo 2 dafa same record ayega,)
-- wo iss liya same record nhi ayega kiu kay UNION ka through apas may dono tables ko join kreinga and union ma record toh saray ayenga but jo record dono may same hoga uska just wo common lelaga.) 
-- also remember mySql ma fulljoin ya full outer join ki koi specifc command nhi like LEFT JOIN YA RIGHT JOIN KA liya hai , toh issi lia hum yaha par left,right join and union ka through fulljoin kreinga. 
-- But in Oracle or postgresql you will find full join keyword.alter

select * from colleague left join courses on colleague.id = courses.id union select * from colleague right join courses on colleague.id = courses.id

-- NOw ab result ma ek table milega jo dono tables ka union hoga let say ek name bob colleague table ma hai but courses walay ma nhi hai uski id toh uska courses walay column may null likha ajega. 
-- isi tarah agr course name toh hain but agr uss course ma koi nhi toh uska samnay name walay column may null likha ajega.

-- Left exclusive join 
select * from colleague as a left join courses as b on a.id = b.id where b.id is null
-- Right exclusive join
select * from colleague as a right join courses as b on a.id = b.id where a.id is null
-- Full exclusive join 
select * from colleague as a left join courses as b on a.id = b.id where b.id is null 
union 
select * from colleague as a right join courses as b on a.id = b.id where a.id is null
-- in above query mena yeh kiya kay pehlay left exclusive join laliya mtlb ka srf wo data o srf table__A ma hoga and isi tarah phr right exclusive join laliya mtlb wo data jo srf table_B ma hoga.
-- and at the end dono ko by using union join krdia and that becomes Full exclusive join

-- self join (apnay notes ma isko detail ma explain kia hai)
select * from employee as a join employee as b on a.id = b.manager_id -- explained in notes
select a.name as manager_name,b.name from employee as a join employee as b on a.id = b.manager_id

-- Union (explain in notes)
select name from employee  -- yaha par ma ek hi table ka same cols ko union le rha hun toh wo simply jo name table ma hain wo return krdega like wo duplicate name nhi return krega bcuz we are doing union.
union 
select name from employee

select name from employee  -- but yaha paer wo duplicate be return krdega union krka kiu kay humna "union all" ki command use ki hai toh union all sab return krdeti hai chahay duplicate values hon ya single. 
union all
select name from employee

select name from employee  -- yaha par ques haka dono cols ki datatype different hai toh phr be yeh error kiu nhi de rha, iska answer yeh haka jab yun different datatype ka cols ko union krwaty hain toh jo SQL server hota hai un datatype ko convert krnay ki koshish krta hai like integer ko verchar ma convert krnay koshish krega agr toh wo sucessful hojaye toh run hojati hai query otherwise error ajata hai, but good practice is to union cols with same datatype😃.
union 
select id from employee  