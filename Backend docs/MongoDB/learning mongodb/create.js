//now to insert one document  
db.manager.insertOne({  //here "db" means jis be database ma hongay yeh usko refer krega, "manager" its mean ka jo database hai uski "manager" collection ma ek document insert krdo by using ".insertOne()" method  
    name:"shah",
   job:"manager2"  
})
//
db.manager.insertOne(     //now agr hum iss tarah sa two object/document be deinga toh wo error nhi dega, but insert ek hi krega jo first wala hoga.
    { name:"ali", age:"10" }, 
    { name:"jal", age:12 } 
)

//remember jab be document bnaga usme ek unique id ki field "_id" automatically generate hogi.but agr hum document bnatay huwa khud sa "_id" yeh field add kerdeinga toh phr wo ussi id ko as a "_id" accept krega. like :
db.manager.insertOne({
    name:"aslam",
    _id:"1234"
})

//now to insert many document
db.programmer.insertMany([  //now to insert more than one document we use ".insertMany()" method which accept an array of objects.
    {
        name:"p1",
        job:"JS",
        skill:["html","css","Reactjs"]
    },
    {
        name:"p2",
        job:"python",
        skill:["django","node"]
    },
    {
        name:"p3",
        job:"TS",
        skill:["html","css","nextJs"]
    }
]) 

//there are some more advanced methods for insert operation, but that you can understand later on.
