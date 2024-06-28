use college 
-- Inner Join (returns records that have same fields in both table)
Create Table colleague (
id int primary key,
name Varchar(30)
)

Create Table courses (
id int primary key,
course Varchar(30)
)

insert into colleague values 
(101,"Adam"),
(102,"bob"),
(104,"cassey"),
(105,"devin"),
(106,"john")

insert into courses values 
(101,"time management"),
(102,"enrtrepreneurship"),
(103,"business"),
(105,"Ai")

Select * from colleague;
Select * from courses;

-- NOw in above sql command we have created two tables you can see above ab hum inner join ko use krtay huwa jo inme common data usko extract kreinga.
-- as we know that to make any join we have to use columns ab yeh humaray pa depend krta hai kay hum dono tables ma say konsay columns ko apas ma join krein or uski base pa data extract krein. 
-- also remember zarori nhi kay join krwanay ka liya dono columns ka name same hon, abhi ka liya hum dono tables ma say id column ki base pa join krenga but its not important kay name same hon. 

SELECT * FROM colleague INNER JOIN courses ON colleague.id = courses.id;
-- ab jo uper query likhi hai agr usko read krein toh basically we are saying that select kro saray hi cols colleague table say 
-- then, colleague table ko inner join krwao courses table say 
-- then, inn dono tables may jo id cols hain unki base pa inko join kro 
-- yebi yaad rakhna haka ab asa nhi haka jo id cols ma id hain wo colleague ka table ma and courses ka table ma apas ma unka koi taluq hai, nhi unka apas ma koi relation nhi 
-- likin ab jab hum  inner join kreinga toh wo basic jo ids dono tables ka id cols ma same hongi wo return hojayegi as a result or un ids ki base pa jo baki cols ki value hongi wo bi mil jayegi 

SELECT name FROM colleague INNER JOIN courses ON colleague.id = courses.id; -- yaha par ab srf colleague ka table ma jo name field hna usme jo naam ki ids common hongi dono table ma wo name return hojagay, acha abhi yaha srf name iss lia result ma ayenga kiu kay humna select ka bd jis col name likhega wohi return hoga. 
SELECT course FROM colleague INNER JOIN courses ON colleague.id = courses.id; -- yaha par course ka name return hongay kiu kay humna select ka bd course likha hai toh wo courses ka table ma say jo same ids hongay dono table may uski base pa course table ma say courses ka name return krdega.

-- ab ek cheez or hoti hai usko hum kehtay hain "alias" which means alternate name. 
-- mtlb kay agr hum chahay toh hum apnay tables ko alternate names be desktay hain , uski waja yeh hoti haka jab agr humaray pass tables kay lengthy names hotay hain toh bar bar itnay lengthy name likhna sa acha hai hum ek dafa unka koi shortname rakhlay then usko further use krein. 

SELECT * FROM colleague as champ INNER JOIN courses as books ON champ.id = books.id; -- now here very easi;y i have created aliases for both table by using "as" keyword, ab agay muja table ka name likhnay ki zarorat nhi ma uski replacment may jo mena name create kia hain wo bi rakh skta hun.

SELECT * FROM champ INNER JOIN books ON champ.id = books.id; -- but remember jo be hum alias bnayega wo just srf usi command ka lia hoga yeh nhi kay hum uss name sa agay be use krenga toh wo error dega. 