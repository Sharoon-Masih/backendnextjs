-- Update Query (it is used to update existing row data)
USE college;

SET SQL_SAFE_UPDATES = 0; -- yeh wali statement iss lia execute ki hai kiu kay by default mySql pa safe mode on hota hai taka by mistake kahin kuch bara change na hojaye iss lia pehla safe mode ko off kreinga than update hogi. off krnay kay liya value = 0 krdo and on ka liya value = 1 ; 

-- update table_name set col_name; -- update query basic syntax 

update student set marks = marks + 1;-- here we are increasing one marks in the previous marks of all students.and

update student set grade = "B" where marks >=75 ; -- setting grade to B where marks are >= 75

update student set marks = 30 where rollNo = 105 ; -- updating marks of specific roll number ;
 
SELECT * FROM STUDENT; -- printing  table 

-- Delete query (to delete data from existing row, remember do the delete operation carefully in Db bcuz once deleted you cant find the data anywhere);

-- DELETE FROM table_name  WHERE condition ; -- basic syntax 

Delete from student; -- remember if we dont use any condition it will remove the whole table

Delete from student where marks < 33 