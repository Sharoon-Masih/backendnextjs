-- Q1
CREATE DATABASE Ibex;
USE Ibex;

-- creating table 
CREATE TABLE EMPLOYEE ( 
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT ); -- we can use FLOAT also for salary

-- INSERTING DATA INTO EMLOYEE table 
INSERT INTO EMPLOYEE VALUES (1,"adam",25000),(2,"bob",30000),(3,"casey",40000);

-- select and view all data in table
SELECT * FROM EMPLOYEE;

-- Q2 (related to aggregate and group by clause and where clause and order by clause, and limit clause)

SELECT city,avg(marks) from student group by city order by avg(marks) asc;  -- here i said that city ki jo field hai usko select krka uski group kro and then har ek city group kay liya avg nikal krdo or at the end usko asceding order ma sort krka print kro.

-- Q3 (for a given table, find the total payment A/c to each payment method. ab yeh question keh rha hai kay jo nicha table hai isme yeh ckeck kay each payment mode kathrough kitni payments hui hain like jazzcash ka through kitni hui payment hui hai , easypaise ka through kitni payments hui hain and so on.. )

insert into payments (id,cust_name,payment_mode,city) values  -- heres a table data 
(101,"Olivia","easypaisa","karachi"),
(102,"John","jazzcash","lahore"),
(103,"Sohail","easypaisa","islamabad"),
(104,"Ava","jazzcash","karachi"),
(105,"Alisha","Bank","multan"),
(106,"Jane","Nayapay","karachi"),
(107,"sharoon","Bank","karachi");

SELECT payment_mode,count(id) FROM payments GROUP BY payment_mode ; -- yaha pehlay humna payment mode ki grouping ki hai phr A/c to customer id kay check krlia kay har ek payment mode ka through kitni payments hui  hai on the basis of customer id.

-- Q4 
ALTER TABLE student CHANGE name full_name Varchar(50);
DELETE FROM STUDENT WHERE MARKS < 80;
ALTER TABLE STUDENT DROP COLUMN RESULTstudent