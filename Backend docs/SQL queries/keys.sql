-- constraints

CREATE TABLE SWEEPER (
id INT PRIMARY KEY,
name VARCHAR(30),
phoneNo INT UNIQUE );

-- ANOTHER WAY TO CREATE ANY FIELD AS PRIMARY key
CREATE TABLE CHEF (
id INT,
name VARCHAR(50),
PRIMARY key (id)
);

-- combination of two more fields can also become as PRIMARY key. 
CREATE TABLE DESIGNER( 
	id INT,
    name VARCHAR(20),
    email VARCHAR(200),
    PRIMARY key (id,name)  -- now here we are saying that kay pehla jo just yeh tha na kay id jo hai PRIMARY key hai or wo duplicate nhi hoskti par ab yeh haka individually toh ab id be duplicate hoskti hai or name be but inka jo combination hoga na wo same hi hoga like let suppose we have 3 students: now jo first walay ki id hai wo 101 hai and uska name "shah" hai , 2nd waly "102" hai but name "shah" and 3rd waly ki "101" hai but name "ram" hai. toh ab yaha error nhi ayega teeno rows ma jo 3 students ka data hai usme chlo agr id same hai toh no issue wo name check krega or name same nhi hoga wo kahega thk hai ok , isi tarah sa agr id same nhi hogi but name same hoga toh wobi wo kahega thk hai ok , but agr id be and name be kisi dusray student ka sth milta hoga tab wo error dega.
    );
    
-- FOREIGN key 
CREATE TABLE temp_sweeper ( -- just for understanding yaha ek table create kia jisko iss tarah smjh lein kay ek temporary table hai or jo humara main table hna wo uper humna bnaya hai jisma bht sari fields hain ab hum iss table ko uss table sa link krna chahtay hain kay like jo be changes uss main table ma hon wo iss table mabi reflect hojaye.
sweep_Id INT, -- yeh simple ek field bnayi ab iss feild ko Foreign key bna kr SWEEPER table ma jo be field hai jis sa hum iska link krna cha rahay hain toh uska agay refrence dedaga.
FOREIGN key (sweep_Id) references SWEEPER(id) -- yaha foreign key ma wo field pass ki jisko foreign key bnana hai or phr agay references ka through jis be Table(field)
);

-- default constraint 
CREATE TABLE software_eng (
id int primary key,
salary int default 60000
);

insert into software_eng (id) values (1) ; -- remember jab table ma kisi specific feild ko data dena hai toh phr uss field ko define lazmi krna hai.

Select * from software_eng; -- by default salary become 60000;

-- CHECK constraint
CREATE TABLE customer (
id int unique,
name varchar(20),
age int,
city varchar(50),
constraint city_check check (age >=18 AND city= "karachi" ) -- par simply constraint likh ka agay check ka lgadia.
); -- yeh jo city_check likha hai yeh jjust constraint ka name hai iski zarorat nhi hai.

insert into customer values (1,"shah",25,"lahore") -- error bcuz we have set the condition for age and city, age wali toh true hogyi but city wali nhi hui true.

