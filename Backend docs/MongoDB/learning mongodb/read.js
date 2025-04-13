//Now to fetch/query/read data
db.programmers.find() //query,its mean when we just simply put ".find()" method it will fetch all the document inside the "programmers" collection 
db.programmers.find({}) //it also mean same as above.
//result will be in array.
[
  {
    _id: ObjectId('6613dc3d3be1de85649ee249'),
    name: 'p1',
    job: 'JS',
    skill: [ 'html', 'css', 'Reactjs' ]       
  },
  {
    _id: ObjectId('6613dc3d3be1de85649ee24a'),
    name: 'p2',
    job: 'python',
    skill: [ 'django', 'node' ]
  },
  {
    _id: ObjectId('6613dc3d3be1de85649ee24b'),
    name: 'p3',
    job: 'TS',
    skill: [ 'html', 'css', 'nextJs' ]        
  }
]

//now for finding document A/C to any specific field we can use query parameter in ".find()" method 
employees> db.programmers.find({job:"JS"}) //here we set that we want that docs whose "job" field is equal to "JS".this query is also known as "specify equality condition".
//result
[
  {
    _id: ObjectId('6613dc3d3be1de85649ee249'),
    name: 'p1',
    job: 'JS',
    skill: [ 'html', 'css', 'Reactjs' ]
  }
]

//Specify Conditions Using Query Operators 
db.programmers.find({job:{$in:["JS","TS"]}}) //now here "$in" is query operator which accept array, and in array we set value whose docs/object we want.yani ho iss tarah sa raha hai haka hum keh rahay hain programmers collection ma "job" ki field ma, wo docs return kro jinki value "JS" ho ya phr "TS" . it is bcuz of "$in" query operator , there are other query operator as well for different functionality.
//result
[
  {
    _id: ObjectId('6613dc3d3be1de85649ee249'),
    name: 'p1',
    job: 'JS',
    skill: [ 'html', 'css', 'Reactjs' ]       
  },
  {
    _id: ObjectId('6613dc3d3be1de85649ee24b'),
    name: 'p3',
    job: 'TS',
    skill: [ 'html', 'css', 'nextJs' ]        
  }
]

//Specify "AND" Conditions
db.programmers.find({skill:"nextJs",name:{$in:["p1","p2","p3"]}}) //yaha query parameter ma humna two conditions lgyi hai basic jo "," wo "AND" ki tarah work kr rha hai, now condition is that return those docs whose "skill" is = "nextJs" and name = p1 or p2 or p3. So in result jab usne check kia toh jo docs condition ka A/c thay wo return hogye.
//result
[  
  {
    _id: ObjectId('6613dc3d3be1de85649ee24a'),
    name: 'p2',
    job: 'python',
    skill: [ 'django', 'node', 'nextJs', 'html' ]        
  },
  {
    _id: ObjectId('6613dc3d3be1de85649ee24b'),
    name: 'p3',
    job: 'TS',
    skill: [ 'html', 'css', 'nextJs' ]
  }
]

//Specify "OR" Conditions
db.programmers.find({$or:[{job:"python"},{age:{$gt:20}}]}) //now here we are using "$or" query operator , which accept an array of condition, like here we set agar "job = python" ka ho ya phr "age > 20" ho. ab dono ma sa jo be condition jis docs/object pa set hongi wo return hoja ga. 

//result
[
  {
    _id: ObjectId('6613dc3d3be1de85649ee24a'),   
    name: 'p2',
    job: 'python',
    skill: [ 'django', 'node', 'nextJs', 'html' ]
  },
  {
    _id: ObjectId('6613f34a3be1de85649ee24d'),   
    name: 'p5',
    job: 'python',
    skill: [ 'django', 'node' ],
    age: 25
  },
  {
    _id: ObjectId('6613f34a3be1de85649ee24e'),
    name: 'p6',
    job: 'TS',
    skill: [ 'html', 'css', 'nextJs' ],
    age: 22
  }
]
// Specify AND as well as OR Conditions
db.programmers.find({skill:"html",$or:[{job:"python"},{age:{$gte:20}}]}) //now here we set condition that "skill=html" and "job = python" or "age>=20" 
//result
[
  {
    _id: ObjectId('6613dc3d3be1de85649ee24a'),   
    name: 'p2',
    job: 'python',
    skill: [ 'django', 'node', 'nextJs', 'html' ]
  },
  {
    _id: ObjectId('6613f34a3be1de85649ee24c'),
    name: 'p4',
    job: 'JS',
    skill: [ 'html', 'css', 'Reactjs' ],
    age: 20
  },
  {
    _id: ObjectId('6613f34a3be1de85649ee24e'),
    name: 'p6',
    job: 'TS',
    skill: [ 'html', 'css', 'nextJs' ],
    age: 22
  }
]

//findOne method, we use this method if we want that output just ek document not an array.
db.programmers.findOne({skill:"css"}) //now we can see that its return only one docs not array.its same like in JS ".find()" method in array that return the most first value in array which meets the condition.

//result
// {
//   _id: ObjectId('6613dc3d3be1de85649ee249'),
//   name: 'p1',
//   job: 'JS',
//   skill: [ 'html', 'css', 'Reactjs' ]
// }

