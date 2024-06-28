
-- understanding forreign key and relation b/w table through foreing key

create table department ( -- you can say its a parent table , and we will use the primary key of this table to make link with teacher table.
id int primary key, -- this is primary ky.
name varchar(50)
);

create table teacher (  -- now we can consider it as child table bcuz here we creating foreign key and linking it with the primary key in department table and yeh krnay sa yeh faida hoga like later on hum chahtay hain jo yeh teacher table hai isme department ki b sari infomation ajay toh hum simply by using this dept_id query krenga reference pass krka or wo har specific id ka A/c teacher table ma department ki info be store krdega
id int primary key,
name varchar(50),
dept_id int ,
foreign key (dept_id) references department(id)
);

-- cascading for Fk
Drop table teacher;
create table teacher (  -- purana teacher table delete kia hai taka error na aye bcuz already be hna teacher table
id int primary key,
name varchar(50),
dept_id int ,
foreign key (dept_id) references department(id) on delete cascade on update cascade
);

insert into department values(101,"eng"),(102,"It"),(103,"science");
insert into teacher values(1,"bob",101),(2,"adam",101),(3,"john",103),(4,"stanley",102);

select * from teacher;

update department set id = 111 where id=101;  -- now ap jasa yaha 101 id ko change krka 111 krdia toh wo automatically teacher table mabi change hojaygi.

update teacher set dept_id = 110 where id=111; -- remember agr iss tarah sa hum dept_id ma koi update kreinga toh wo na toh teacher table ma hogi or na hi department table, kiu kay teacher child table hai na kay parent table hai, department parent table hai kiu kay usme jo primary key hai wo teacher table ma foreign key hai, so thats why remember it kay jis table ki primary key hogi wo parent hoga or jis be table sa wo link hoga wo child hoga kiu kay waha wo foreign key hogi. 