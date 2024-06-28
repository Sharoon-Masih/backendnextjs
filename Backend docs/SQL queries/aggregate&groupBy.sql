-- Aggregate function

select count(name) from student; -- count() ka function counting ka kam krta hai toh iss lia usko jis be datatype ki values dengay wo unko count krka return krdega.
select max(marks) from student;
select min(marks) from student;
select sum(marks) from student;
select avg(marks) from student;

-- Group BY clause 
-- let look it step by step
SELECT city FROM student GROUP BY city; -- iss query may humna usse kaha kay jitni be cities hai wo sab select krlo "SELECT city FROM student" and then phr humna uska yeh define krdia by using "GROUP BY clause" kay ab jitni be actual cities ban rhi hna after taking common of same cities unko as a group bnado like ab mumbai ek alg group hai isi tarah delhi be alg group hai and pune be. 

SELECT city,count(rollNo) FROM student GROUP BY city; -- now in this query we are saying that first wohi wala kam kro jo uper wali query ma hi raha hai or phr muja har city kay A/c jitnay rollNo aye wo print krdo, like mumbai ma jitna rollNo aye wo mumbai kay smnay print krdo isi tarah delhi ma jitnay aye wo delhi kay smnay print krdo and pune may jitnay aye wo pune kay smnay print krdo.

SELECT city,count(rollNo),name FROM student GROUP BY city; -- now ab yaha mera pss error ayega wo issliya bcuz jo mena city ki field select ki hai wo toh chlo thk hai kiu ka ma uska group b bna raha hun toh thats fine by jo name wala field/column hai uska toh group nhi bnaya toh iss lia mera pass error ayega , toh remember ka jo be feild select krni hai phr uska Group be lazmi bnana hai uski waja yeh haka jab hum ek field ko select krka uski grouping krtay hain toh phr wo field koi ek individual value nhi hoti usme group ban jatay hain ab yaha be asa hi hai jab pehla city ko select kia phr uski base pa group create ab agay jo uska sth aggregate func lga kay count kro ya sum kro ya etc operation kru toh wo basic uss ek group ki base par hoga jo GROUP by clause ka through bna like here we have three cities mean three group

SELECT city,count(rollNo),name FROM student GROUP BY city,name; -- Toh yaha par ab jo group bnega wo srf ek city ki base pa nhi bnega balka city and name dono ki base pa bnaga like abi yaha par iss tarah sa group bnay hain like pune and anil (ek group), mumbai and bhumika (2nd group), mumbai and chetan (3rd group) and so on, So ab yaha par city and name ka combination bna kay ek group bna or ab sab jo count(rollNo) hai wo be 1 hi ayega kiu kay ab jitna be group bnay hain wasa dusra combination koi nhi toh iss lia count(rollNO) one hi ayega sab ma but let suppose agr asa hokay jasa ek group hai Mumbai and chetan ab same asa hi combination ek or ban jaye toh phr count(rollNo) 2 ayega Mumbai and chetan walay group ma kiu kay ek dusra same combination agya toh phr usne usko be count kia and return krdi length that is 2.alter

SELECT city,count(rollNo),max(marks) FROM student GROUP BY city; -- now here ma yeh check kr rha hun kay on the basis of individual city maximum marks kitnay rahay har city ma like result iss tarah ayega kay pune ma max mrks like 90, delhi max mrks 80 and so on.

-- Having Clause 
SELECT city,count(name) FROM student GROUP BY city HAVING  max(marks) > 90; -- ab iska mtlb hai absrf wo city group print hongay jinkay andar maximum marks > 90 hongay. like here jo delhi city hai usme kisi be students ka max marks > 90 nhi thay iss liya wo group nhi print hua