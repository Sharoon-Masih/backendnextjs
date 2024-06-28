USE techverse51;
CREATE TABLE student (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL );

insert into student values(1,"waheed",40);
insert into student values(2,"tuba",20);

SELECT * FROM student;

--------------------------------------------------------------------------------
-- Database related queries

CREATE DATABASE IF NOT EXISTS student;
DROP DATABASE IF EXISTS student;

SHOW DATABASES; -- it will show all db
SHOW TABLES; -- it will show all tables

-- Table related queries

-- for inserting data into table
INSERT INTO student Values(3,"abigail",6); -- iss tarah hum table may jitni be column hain sb ma data insert krsktay hain.

INSERT INTO student (id,age) VALUES(4,7); -- iss tarah say agr hum kisi just specific columns ma data krna chahtay hain toh wobi krsktay hain

INSERT INTO student (age) VALUES(7); -- error bcuz id field and age field cannot be empty, bcuz id field primary key hai and age ko humna NOT NULL set kia hai.

INSERT INTO student (id,age,name) VALUES(5,8,"shah"); -- iss tarah sa column ka order agay pichay krkay be value insert krsktay hain but remember jo col hoga uska corresponding hi uski value be ayegi

INSERT INTO student (id,name,age) VALUES(6,"yousaf",22),(7,"hamzah",21); -- zarori nhi kay agr multiple row ma data store krna hai like multiple student ka toh humay har row kay liya alag alag query likhni paregi , hum ek hi query likh kay then by using "," multiple row ka data store krwasktay hain.