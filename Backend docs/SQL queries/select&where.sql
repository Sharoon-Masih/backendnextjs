-- Select command

SELECT * FROM student; -- this means show all columns in table
SELECT rollNo,name FROM student; -- this means now it will print on two fields name and rollNo 
SELECT DISTINCT city FROM student; -- now this means that jo city bar bar repeat ho rhi hna unka common lelega mtlb jasa 5 student hain ab 2 student ek hi city sa be hosktay hain toh iss lia wo uss city ko do dafa nhi print krega wo common lelage or rk hi dafa print krega.

-- WHERE clause (iska mtlb hota hai to put some condition while querying , means kay humna table sa data toh lana hai fetch krka but uspa kuch filteration krni hai toh then we use this WHERE clause or yeh SELECT ka sth hi hota hai use.

SELECT rollNo,name FROM student WHERE marks > 90; -- jasay yaha mena condition set ki kay srf un student ka name and rollNo return kro jinka marks greater than 90 hai
SELECT * FROM student where city = "delhi" ; -- yaha humna kaha kay sari fields ko print kro but records srf wohi jinki city wali field equal to "delhi" hi ho. (one additional thing wo yeh kay as SQL is not case sensitive language so you can see kay agr "delhi" likhein to wo be same as "Delhi" consider kregi wo means upppercase/lowercase ka difference nhi hoga)
SELECT * FROM student where grade = 'B' AND marks > 80; -- here we set two conditions.

-- there are 4 types of operator arithematic,comparison,logical,bitwise with WHERE clause that you can study from shradha notes.
-- here we will only practice Logical operator that are new for us such as Between, In

-- BETWEEN op 
 SELECT * FROM student WHERE marks between 80 AND 90 ; -- now jo yeh operator hai yeh humesha tab use krenga jab two values ka darmayain ka koi value chaiya like here we set only print those whose marks are between 80 and 90, also remember that the limits are inclusive which means that agr kisi ka marks 80 be hongay toh wo be return hojayega ya agr 90 be hongay toh wobi return hojayega

-- In op 
SELECT * FROM student where city IN ("delhi","mumbai","kashmir"); -- basic yeh jo In operator hna yeh iss tarah sa kam krta hai kay jasa we want only those students data who live in one of these  ("delhi","mumbai","kashmir") cities mtlb kay in cities me sa kisi ek ma rehtay hon humay srf un hi stident ka data chaiya, toh uska lia phr iss tarah hum list pass krtay hain un ma agr toh list ma say koi ek element be match hoja toh print ajyega warna empty table print hoga

-- NOT op
 SELECT * FROM student where city NOT IN ("delhi","mumbai","kashmir"); -- NOT op condition ko reverse krdeta hai kay like here it says that bs un student ka data return kro jo iss list of cities ma na ho.
 
 -- LIMIT clause 
  SELECT * FROM student LIMIT 3; -- its mean that only return first 3 students.
  SELECT * FROM student where marks > 70 LIMIt 4 ; -- here we make query by combining two clause Where and limit, its means that pehla un sab student ka data nikalo jinka marks > 70 hai and then un =may say first 4 return krdo.

-- ORDER BY clause
 SELECT * FROM student ORDER BY city ASC; -- Order By clause is like sort in mongoDb, it says that sara hi data return hoga but ascending order by city k A/c, mtlb kay like jo city A sa start hoti hai uska student rcords pehla ajay and then phr further.
 -- now if we want to find three top students and huma yebi nhi pta kay max marks kitnay ayein hain class ma student kay toh then phr:
  SELECT * FROM student ORDER BY marks DESC LIMIT 3; -- here we said that first sort records in descending A/c to the marks and then return the top 3 . 