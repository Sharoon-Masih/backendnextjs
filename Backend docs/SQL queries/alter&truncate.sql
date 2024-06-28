-- ALter table (it is used to change the design of schema which means the column/field name , or if we want to add or subtract any col so we can do it by using this, in simple to make modifications in the design of table. )

-- Add col 
ALTER TABLE student ADD COLUMN age INT ;  -- age column is added to student table.

select * from adults;

-- Drop col
Alter table student drop column age; -- wohi jo uper age column bnaya tha usko delete krdia by using drop column.

-- rename table
Alter table student rename to adults; -- iska through table ka name change krdia

-- change column (it will change the column name datatype like agr huma char datatype sa varchar pa jana hai and also like pehla humna srf ek constraint lgya tha UNIQUE ab hum uski jaga ya usme new constraint add krna chahtay hain toh wobi krsktay hain
-- syntax ( ALTER TABLE table_name CHANGE COLUMN old_col_name new_col_name new_datatype new_constraints )
alter table adults change column grade result varchar(50);

-- modify column (modify datatype/constraint)
-- syntax ( ALTER TABLE table_name MODIFY col_name new_datatype new_constraint )
 alter table adults modify city char(20) ;

alter table adults rename student; -- back rename it to student;

-- Truncate table 

Truncate table teacher; -- this table data is deleted not the whole table is deleted whereas when we use DROP command it will delete the whole table. 

Truncate table department; -- also remember that jo table ki primary key kisi dusra table ma as a foreign key hogi ya in simple word agr ek table dusra table sa link hoga toh uska data nhi delete krsktay. likin agr uss table ko delete kreinga jo child table toh wo delete hojayega bcuz wo child hai but parent tab tk nhi delete hoga jab tak child table delete nhi hoga.
 