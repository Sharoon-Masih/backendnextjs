//Q1-Suppose you have a MongoDB collection named employees that stores documents,Write a MongoDB query to find all employees who are younger than 40 years old and earn a salary greater than $50,000.

//collection
[
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f34"),
    "name": "John Doe",
    "age": 35,
    "department": "IT",
    "salary": 60000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f35"),
    "name": "Jane Smith",
    "age": 28,
    "department": "Sales",
    "salary": 55000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f36"),
    "name": "Michael Johnson",
    "age": 42,
    "department": "HR",
    "salary": 65000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f37"),
    "name": "Sarah Lee",
    "age": 30,
    "department": "Marketing",
    "salary": 58000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f38"),
    "name": "David Brown",
    "age": 38,
    "department": "IT",
    "salary": 62000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f39"),
    "name": "Emily Clark",
    "age": 25,
    "department": "Sales",
    "salary": 52000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f3a"),
    "name": "Chris Anderson",
    "age": 45,
    "department": "Finance",
    "salary": 70000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f3b"),
    "name": "Anna Martinez",
    "age": 32,
    "department": "IT",
    "salary": 59000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f3c"),
    "name": "Peter Wilson",
    "age": 36,
    "department": "Sales",
    "salary": 56000
  },
  {
    "_id": ObjectId("5fe8bce806d6b51f847e4f3d"),
    "name": "Laura Taylor",
    "age": 29,
    "department": "HR",
    "salary": 63000
  }
]

//query
db.employees.find({ age: { $lt: 40 }, salary: { $gt: 50000 } })
//result
[
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f34'),
    name: 'John Doe',
    age: 35,
    department: 'IT',
    salary: 60000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f35'),
    name: 'Jane Smith',
    age: 28,
    department: 'Sales',
    salary: 55000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f37'),
    name: 'Sarah Lee',
    age: 30,
    department: 'Marketing',
    salary: 58000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f38'),
    name: 'David Brown',
    age: 38,
    department: 'IT',
    salary: 62000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f39'),
    name: 'Emily Clark',
    age: 25,
    department: 'Sales',
    salary: 52000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f3b'),
    name: 'Anna Martinez',
    age: 32,
    department: 'IT',
    salary: 59000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f3c'),
    name: 'Peter Wilson',
    age: 36,
    department: 'Sales',
    salary: 56000
  },
  {
    _id: ObjectId('5fe8bce806d6b51f847e4f3d'),
    name: 'Laura Taylor',
    age: 29,
    department: 'HR',
    salary: 63000
  }
]

//Q2-Updating Documents

//   Consider the same employees collection. You want to give a 5% salary raise to all employees in the "Sales" department.

//   Write a MongoDB update operation to increase the salary of all employees in the "Sales" department by 5%.

//query
db.employees.updateMany({ department: "Sales" }, { $inc: { salary: 2500 } }) //here by using increment operator , first we manually find 5% of 50000 bcuz basic requirement is to filter out those whose salary is > 50000,therefore we find 5% of 50000 and then increase it by using $inc.

//above query is my own logic , but best approach is that if we want that jasa ka har employee ki different salary ho or hum chahatay hain ka jiski jitni salary ho uska 5% increase hojaye.so simply we use "$mul (multiply)" operator and multiply the salary by "1.05" which is equal to 5%. like:

db.employees.updateMany({ department: "Sales" }, { $mul: { salary: 1.05 } }) //this means salary ki jo be value ayegi usko multiply by "1.05" krka update krdo.

//result
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0
// }

//Q3-Write a MongoDB aggregation query to find the total sales (sum of total_amount) for each customer during the month of March 2023. Return the result as a list of documents containing customer_id and total_sales for each customer.
db.Products.insertMany([
  {
    "_id": "P001",
    "name": "Laptop",
    "category": "Electronics",
    "price": 1200.0,
    "date": ISODate("2023-01-15T08:00:00Z")
  },
  {
    "_id": "P002",
    "name": "Smartphone",
    "category": "Electronics",
    "price": 800.0,
    "date": ISODate("2023-01-20T10:30:00Z")
  },
  {
    "_id": "P003",
    "name": "Headphones",
    "category": "Electronics",
    "price": 100.0,
    "date": ISODate("2023-02-05T12:45:00Z")
  },
  {
    "_id": "P004",
    "name": "Backpack",
    "category": "Fashion",
    "price": 50.0,
    "date": ISODate("2023-02-10T14:00:00Z")
  },
  {
    "_id": "P005",
    "name": "T-shirt",
    "category": "Fashion",
    "price": 25.0,
    "date": ISODate("2023-02-15T09:30:00Z")
  },
  {
    "_id": "P006",
    "name": "Running Shoes",
    "category": "Sports",
    "price": 80.0,
    "date": ISODate("2023-03-01T11:15:00Z")
  },
  {
    "_id": "P007",
    "name": "Basketball",
    "category": "Sports",
    "price": 30.0,
    "date": ISODate("2023-03-05T13:00:00Z")
  },
  {
    "_id": "P008",
    "name": "Cookware Set",
    "category": "Home & Kitchen",
    "price": 200.0,
    "date": ISODate("2023-03-10T15:45:00Z")
  },
  {
    "_id": "P009",
    "name": "Coffee Maker",
    "category": "Home & Kitchen",
    "price": 150.0,
    "date": ISODate("2023-03-15T08:30:00Z")
  },
  {
    "_id": "P010",
    "name": "Gaming Console",
    "category": "Electronics",
    "price": 400.0,
    "date": ISODate("2023-03-20T10:00:00Z")
  }
])

//testing queries

db.Products.find().map((val) => (val.date.toString().splice(0, 7))) //this is also correct but result is not coming as expected bcuz when we convert date to string so it become in words like sun mar 2023.

db.Products.aggregate([
  {
    $match: {
      $expr: {
        $gte: ISODate("2023-03-01T00:00:00Z"),
        $lt: ISODate("2023-04-01T00:00:00Z"),
      }
    }
  }
])

db.Products.aggregate([
  {
    $match: {

      date: { $in: [{ date: { $gte: ISODate("2023-03-01T00:00:00Z") } }, { date: { $lt: ISODate("2023-03-01T00:00:00Z") } }] }
    }
  }
])
db.Products.find({ $or: [{ date: { $gte: ISODate("2023-03-01T00:00:00Z") } }, { date: { $lt: ISODate("2023-04-01T00:00:00Z") } }] }).aggregate([
  {
    $group: {_id:"$name",totalOrders:{$sum:"$price"}}

  }])



  db.Products.find({ date: { $gte: ISODate("2023-03-01T00:00:00Z") }, date: { $lt: ISODate("2023-04-01T00:00:00Z") 
} })
//

//correct query
db.Products.aggregate([
  {
    $match: {
      $expr: {  //basically jo ($expr)expression hai wo hum tab use krtay jab humay kisi be operator ko use krtay huwa 2 cheezon ko compare krna hota hai.like here humna $eq(equal) operator ma 2 cheezain compare ki like in this expression  {$eq: [{ $month:"$date" }, 3]} humna kaha ka jo be "month" ayy wo "3" ka equal ho and isi tarah yaha {$eq: [{ $year:"$date" }, 2023]} year ka liya be use kiya,but agr hum $expr ko use na krtay toh $eq toh srf ek hi field leta hai or wo basically compare nhi krta wo toh just jo $eq ma field hoti hai jab wo ati hai toh return krdeta hai.so this is all due to $expr
       
        $and:[  //now in aggregation pipeline we use $and for specifying AND condition its saying that agr dono condition true ho toh hi return ho.
        {$eq: [{ $month:"$date" }, 3]}, 
        {$eq: [{ $year:"$date" }, 2023]} 
      ]
      }
    }
  },
  {
    $group:{_id:"$category",totalPrice:{$sum:"$price"}}
  }
]);

//result
[
  { _id: 'Home & Kitchen', totalPrice: 350 },
  { _id: 'Sports', totalPrice: 110 },
  { _id: 'Electronics', totalPrice: 400 }
]

//Q4-You have a MongoDB collection named sales that contains documents representing sales transactions. Each document has the following structure:
// {
//   "_id": ObjectId("5fe8bce806d6b51f847e4f34"),
//   "timestamp": ISODate("2023-03-15T10:30:00Z"),
//   "customer_id": "C001",
//   "items": [
//     { "product_id": "P001", "quantity": 2, "unit_price": 50.0 },
//     { "product_id": "P002", "quantity": 1, "unit_price": 40.0 }
//   ]
// }
// Write a MongoDB aggregation query to calculate the total revenue generated from each product across all sales transactions. Return the result as a list of documents containing product_id and total_revenue for each product, sorted in descending order based on total_revenue.

db.Sales.aggregate([
  
  //stage 1
  {
    $unwind:{path:"$items"} //in first stage we use $unwind method which means jo humara document ma array field hna usko destructure krka alag alag docs bnadega like: {
      //   "_id": ObjectId("5fe8bce806d6b51f847e4f34"),
      //   "timestamp": ISODate("2023-03-15T10:30:00Z"),
      //   "customer_id": "C001",
      //   "items": [
      //     { "product_id": "P001", "quantity": 2, "unit_price": 50.0 },
      //     { "product_id": "P002", "quantity": 1, "unit_price": 40.0 }
      //   ]
      // }  here we have two element in "items" array it will make it like this:
      
      //1st element doc
        // {
        //   "_id": ObjectId("5fe8bce806d6b51f847e4f34"),
        //   "timestamp": ISODate("2023-03-15T10:30:00Z"),
        //   "customer_id": "C001",
        //   "items": { "product_id": "P001", "quantity": 2, "unit_price": 50.0 },
        // }
      //2nd element doc
        // {
        //   "_id": ObjectId("5fe8bce806d6b51f847e4f34"),
        //   "timestamp": ISODate("2023-03-15T10:30:00Z"),
        //   "customer_id": "C001",
        //   "items": { "product_id": "P002", "quantity": 1, "unit_price": 40.0 },
        // }
  },
  //stage 2
  {
    $group:{_id:"$items.product_id",totalRevenue:{$sum:{$multiply:["$items.quantity" , "$items.unit_price"]}}} //in this stage hum yeh kr rhay hain kay A/c tp product_id ka totalRevenue generate kro wo iss tarah ka pehla, jis product ki id ho uski quantity and unit_price ko multiply kro by using $muliply and then jo same id product hon unko $sum krdo toh iss tarah har inidividual product ki id ka A/c total revenue ajaga.
  },
  //stage3
  {
    $sort:{totalRevenue:-1} //yaha par phr jo sab product ka totalRevenue ki list ayy usko decensending order ma show kro, toh yaha humna "totalRevenue" ki base pa show kia, "-1" means show in descending order.
  }
])

//result
[
  { _id: 'P001', totalRevenue: 450 },
  { _id: 'P002', totalRevenue: 400 },
  { _id: 'P003', totalRevenue: 160 },
  { _id: 'P004', totalRevenue: 125 },
  { _id: 'P005', totalRevenue: 85 }
]