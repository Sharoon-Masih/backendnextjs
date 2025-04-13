//update single docs.
//now here 1st parameter will take the field A/c to which doc is filtered
//2nd parameter is used to set that what fields we want to set in the doc.
//3rd parameter is used for some other options.

db.programmers.updateOne( {job:"python"},{$set:{salary:"70000"}}) //now in 1st parameter we set that doc in which "job = python",update that doc and remember for updating we will use "$set" operator to set the values and then i set the field inside it named as "salary" , now we can see that as salary is not included in doc but when we use operator like "$set","$currentDate" will automatically add field inside it.

//result
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

//updated docs which we have done above

// db.programmers.findOne({job:"python"}) //here is the object which is modified above.

// {
//   _id: ObjectId('6613dc3d3be1de85649ee24a'),
//   name: 'p2',
//   job: 'python',
//   skill: [ 'django', 'node', 'nextJs', 'html' ],
//   salary: '70000'  //we can see that salary is added automatically.
// }

//another e.g
db.programmers.updateOne({name:"p3"},{$set:{skill:"NodeJs",job:"TS dev"},$currentDate:{timing:true}}) //now here we set condition that jis doc ki field name="p3" hai usme "$set" operator ka through skill and job ko update kreinga and "update" walay parameter ma hi "$currentDate" operator ka through ek "timing" add hogi or usko jo "true" value di hai it means that kay current date uski value set krdo.remember agar hum "$currentDate" ko "$set" ma use krenga like this " db.programmers.updateOne( {job:"python"},{$set:{salary:"70000",$currentDate:{timing:true}}}) " toh error ayega. 
 

//result
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

//updated doc
 db.programmers.findOne({name:"p3"})
// {
//   _id: ObjectId('6613dc3d3be1de85649ee24b'),
//   name: 'p3',
//   job: 'TS dev',
//   skill: 'NodeJs',
//   timing: ISODate('2024-04-08T16:02:59.079Z'),
// }

//now using updatemany
employees> db.programmers.updateMany({skill:"css"},{$set:{ skill:"tailwindcss"}}) //remember if you have a field that accept an array SO while you are updating that field you want to push new element in array you can use "$push" operator.

//now here jis jis ki skill=css thi wo update hogye.

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0
// }

//
db.inventory.updateOne({qty:{$lte:80}},{$set:{"size.uom":"inch"}}) //here it will  update the One doc which is smaller than 80 and whole collection like here we hai the first doc whose qty is 25.if i use updateMany() so then it update all doc lie on this condition.

//result

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

//$push e.g
db.programmers.updateMany({skill:"html"},{$push:{skill:"tailwindcss"}}) //now here i have query that those who have html in their skill array add tailwindcss in it as well by using $push , remember $set is used for setting value of field but when we have to use other operator like $push,$pop etc we dont use $set we will just directly use that operator bcuz agar pehla set lgye phr usma $push lgyge toh error  ayega bcuz ek operator ma dusra operator nhi use krsktay.

