-- Subqueries (explain in notes)
-- step1 find avg of all students in class
-- step2 find the name of those students 

-- manuel way 
select Avg(marks) from student; -- ab yaha say hume avg marks mil gye
select full_name from student where marks > 90; -- ab yaha humna condition ka A/c wo students nikal liya jinka marks > 90, bcuz 90 class avg marks thy.

-- as we can see in above queries humna jo requirement thi wo fulfill krli but let suppose later on kisi bachay ki rechecking hui ya koi be etc issue ki waja sa class ma kisi students ka marks 
-- increase huye toh uski waja sa class ka be avg marks increase hongay so then again humay on the basis of that marks huma query krni paregi , isi lia to make it dynamic we will use 
-- subquery

select full_name from student where marks > (select avg(marks) from student); -- now again the result will be same here but now its become dynamic
-- which means agr later on class ma avg marks change be hongay toh jo parenthesis ma humna subquery lgyi hai usse humay new avg marks generate hongay or uski base pa final result ayega. 
-- or yaha par humna subquery ko where clause ka sth use kia hai. 

-- e.g 2
-- step1 find the even roll no
-- step2 find the names of students with even roll no 

-- manuel
select rollNo from student  where rollNo % 2 = 0;
select full_name from student where rollNo In (102,104,106); -- yaha par pehl humna uper rollNo find krliya then phr unki list pass krdi using IN operator 

-- using subquery
select full_name from student where rollNO IN (select rollNo from student  where rollNo % 2 = 0) ;-- ab yaha humna direct query pass krdi instead of passing state values in list, ab yaha A/c to subquery ka dynamic list ayegi or uski base pa output ajaga. 

-- e.g 3 (using subquery in FROM )
-- step1 find student in mumbai 
-- step2 find max marks of students in mumbai

select max(marks) from student where city = "mumbai"; -- it is also correct and easy way but here we are not using subquery , if you want to do without using subquery you can do like this.

select max(marks) from (select * from student where city = "mumbai") as temp ; -- yaha par basically jo from ko humna subquery di hna wo ek table return krega un students ka jo mumbai say hain, and us table ko humna ek temp aliase dadia using "as" and remember it is compulsory agr aliases nhi denga toh wo error dega bcuz aliase smjho ap table ko ek identitty dedata ho., but iska mtlb yeh nhi kay ab yeh ek proper database ma temp name ka table bn gya hai,
-- then phr jo be students ayenga us derived table ma unki base pa wo max marks find krlega.

-- e.g (using subquery with select)
select (select max(marks) from student),full_name from student; -- yaha par select ka bd jo subquery di usnay max marks return kiya as a col consider hoga and jo marks aye wo jitnay students thy unka corresponding ma agye. 
select (select marks from student),full_name from student; -- yaha error ayega kiu ka iss tarah jab hum select ka sth sub query lgatay hain toh wo srf single value return kregi toh acceptable hogi warna agr multiple row return kregi toh acceptable nhi hogi.

-- MySql Views (explain in note)
-- syntax 
CREATE VIEW view_name AS  -- View be same like table ki tarah create hoga and "AS" ka mtlb haka jo view create hoga usme agay further kon kon say columns honay chaiya or kis table say honay chaiya.
SELECT cols_names FROM table_name;

-- creating view of student table for teacher , but as we know that jo teacher usko mainly student ka rollNo,name,marks sa concern hoga baki city wagera sa nhi toh iss lia hum city ki field/attribute/col ko nhi include krenga iss view may.
CREATE VIEW view1 AS 
SELECT  rollNo,full_name,marks from student;

SELECT * FROM view1; -- iss tarah say hum jo be view ma field and record hain wo sab dekh sktay hain like jasa table ma dekhtay hain

select rollNo from view1 where marks > 78 ; -- as i asid that kay hum views par proper jasa table pa query krtay hain krsktay hain.

DROP VIEW if exists view1 -- or iss tarah jasa Db ya table ko drop krtay hain view ko be drop krsktay hain.

-- Acha agr database sa be dekhna chahay na kay humara pass kitnay views hain ya etc, toh on your left side yaha par humay Db nazar aa rhi hai phr usme agay further dropdown ma tables ka tab hai , toh wohi table ka tab ka nichay VIEWS ka tab be hai. 