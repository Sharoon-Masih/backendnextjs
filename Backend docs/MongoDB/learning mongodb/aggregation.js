//first read its theory in ms-word docs in "NextJs own docs"

db.inventory.aggregate([
    //stage1  
    {
        $match:{qty:{$gt:10},qty:{$lt:80}} //now in stage1 its asking that return those docs whose "qty > 10 and qty < 80"."$match" is used for matching its jo docs condition sa match kreinga wohi return hongay.
    },
    //stage2
    {
        $group:{_id:"$status",totalqty:{$sum:"$qty"}} //Now in second stage we are asking that "group" those docs whose "_id" is same and then group in them into one doc and also sum their quantities.actually its working like kay for suppose jab 1st stage done hua toh humara pss 4 docs return huye ab un 4  docs may jo 2 docs thay unka 'status' same tha toh usne yeh kiya ka un dono ko merge krka or we can say ka group krka ek doc bnadia or unki "qty" property ko sum krka return krdia.or remember yaha jo humna "_id : $status" kiya hai its mean that kay doc ka jo status hoga wo "_id" hoja ga or phr "_id" ki base pa wo group bnadega kiu "id" will always be unique agar for suppose 2 doc same status ka hongay toh wo yeh nhi ka alg alg 2 doc return krega with same "id", NO it will make one "id" and A/c to condition jasa yaha hum yeh set kiya hai ka "totalquantity" sum hojaye.or yaha jab hum "_id" ko "$status" dey rahay hain as a value toh "$" ka mmtlb yeh haka wo dynamically status assign krega like agr 4 docs hai toh sbka status different hoga or usma kuch same status walay be hongay.toh isi lia dynamically diya hai taka har status ka A/c id ban jaye or phr ID ka A/C qty total hoka return hoja. And $sum ko be isi lia $qty dynamic qty diya hai bcuz every qty is different so wo A/C to doc ka and id kay qty sum krdega.    
    }
])

//result
// {
//   _id: 'D',  //now yaha yehi ho rha hai ka "D" status ka ek hi doc hai toh iss lia uski id:D hogyi or quantity "75" remain same kiu koi or doc toh nhi same "Status" jissa ka sth sum hojaye.
//   totalqty: 75
// }
// {
//   _id: 'A', //now here two doc have same "Status" so it sums the quantity of both doc.
//   totalqty: 70
// }
// {
//     _id: 'P', //here it single doc of "P" status , therefore quantity remain same.
//     totalqty: 50
// }

//note that it will not make changes in database, it basically return data A/C to query , that we create.

// Calculate the Average Age of Users by Gender:

// Suppose you have a collection named users with documents containing fields name, age, and gender. You can use MongoDB aggregation to calculate the average age of users grouped by gender. Here's an example aggregation query:

db.users.aggregate([{$group:{_id:"$gender",avgAge:{$avg:"$age"}}}]) //now yaha humna yeh kia ka gender ka A/c average age calculate krli, like iss tarah sa ka agar gender "Male" hon toh ab jitnay be docs hon jinki gender field equal to "Male" hon toh unki jo be ages ho unka average nikal lo.or remember when using aggregate $group operator toh usse yeh haka usma jo bhi field denga wo accumulator object ho, like jasa yaha jo "_id" field hai wo hume pta hai ka mongoDb jab doc bnata hai toh by default jo id bnata hai wo object hi hoti hai , and isi tarah jab hummna avgAge field bnayi toh usko be ek object bnaya phr usma humna average calculate ki, agr just simply avgAge:$age likh deta toh wo error deta.
//result
[
  { _id: 'Female', avgAge: 27.333333333333332 },
  { _id: 'Male', avgAge: 28 }
]

// Find the Total Sales Amount per Category:

// Assume you have a collection named sales with documents containing category and amount. You can use aggregation to find the total sales amount for each category. 
db.sales.aggregate([
    {
        $group:{_id:"$category",totalPrice:{$sum:"$price"}}
    }
])
//result
[
    { _id: 'Sports', totalPrice: 149.99 },
    { _id: 'Electronics', totalPrice: 3399.96 },
    { _id: 'Clothing', totalPrice: 79.98 },
    { _id: 'Books', totalPrice: 24.98 },
    { _id: 'Home & Kitchen', totalPrice: 279.98 }
  ]

//Filter and Count Documents Matching Specific Criteria:
//Let's say you want to count the number of users who are active (where isActive field is true). You can use aggregation to filter and count documents based on certain criteria.

  db.users.aggregate(
    //stage 1 //here first we filter out those user whose isActive field is true
    {
        $match:{isActive:true}
    },
    //stage 2
    {
        $group:{_id:"isActive",online:{$count:{}}} //here we set that jo docs filter out hoka aye hai unko count krka show krdo , ab yaha humna "_id" field ma dynamically "isActive" nahi dia kiu ka humna already uper filter krlia hai ka jis "isActive" field ki value true hogi wohi return hogi stage2 ko toh now its obvious ka "_id" ma srf wohi "isActive" field hongi jo true hongi iss lia humna usko dynamically nahi liya agar dynamically krtay toh _id ko isActive ki value assign hojati like "_id:true" baki answer phr be same hi rehta. or usse agay yeh kia ka ek online field add ki or usme humna "$count" operator ka use kia ka jitna "isActive" ayenga utna hi wo count krlega.or "$count" ka syntax simply yehi haka just ek empty object likhdo like : $count:{{}}.
        }
) 

//result  
[ { _id: 'isActive', online: 4 } ]  //now here we have 4 doc whose isActive field is true therfore they return 4.