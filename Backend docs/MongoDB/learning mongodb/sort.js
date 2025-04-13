//data on which we will sort.
db.inventory.insertMany( [
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
 ] );

 //sort 
 db.inventory.find().sort() //agar iss tarah sa sort kreinga toh wo by default jo id hogi har doc uska A/c ascending order ma sort krega.
 db.inventory.find().sort({qty:1}) //agar iss tarah krega toh wo jo document ma "qty" field hai uski jo value hogi unka A/c ascending order ma krdega, but sort() ma jo be value denga wo "1" sa greater nahi hogi like ".sort({qty:2})" bcuz uska kam hai srf sort krna wo ya toh ascending order ma ya phr descending order.
 
 //result 
 [    
    {
      _id: ObjectId('661455d0b09256c98816c9b5'),
      item: 'journal',
      qty: 25,
      size: { h: 14, w: 21, uom: 'cm' },
      status: 'A'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b9'),
      item: 'postcard',
      qty: 45,
      size: { h: 10, w: 15.25, uom: 'cm' },
      status: 'A'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b6'),
      item: 'notebook',
      qty: 50,
      size: { h: 8.5, w: 11, uom: 'in' },
      status: 'P'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b8'),
      item: 'planner',
      qty: 75,
      size: { h: 22.85, w: 30, uom: 'cm' },
      status: 'D'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b7'),
      item: 'paper',
      qty: 100,
      size: { h: 8.5, w: 11, uom: 'in' },
      status: 'D'
    }
  ]
 db.inventory.find().sort({qty:-1}) //now it will sort in descending order bcuz "-1" indicate the descending order.

 //now skip
 db.inventory.find().skip(1); //it will skip first document and return the rest doc

 //result ,total are 5 but it return 4 bcuz first is skipped.
[  
  {
    _id: ObjectId('661455d0b09256c98816c9b6'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'P'
  },
  {
    _id: ObjectId('661455d0b09256c98816c9b7'),
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  },
  {
    _id: ObjectId('661455d0b09256c98816c9b8'),
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    _id: ObjectId('661455d0b09256c98816c9b9'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
]

db.inventory.find().sort({"size.h":1}).skip(2) //now we are sorting it A/c to "h" property of field "size" and skip first 2 document. remember if we have a field which is a object itself so than if we want to access property of that object we have to use it inside " " like : "size.h".
//result
[
    {
      _id: ObjectId('661455d0b09256c98816c9b9'),
      item: 'postcard',
      qty: 45,
      size: { h: 10, w: 15.25, uom: 'cm' },
      status: 'A'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b5'),
      item: 'journal',
      qty: 25,
      size: { h: 14, w: 21, uom: 'cm' },
      status: 'A'
    },
    {
      _id: ObjectId('661455d0b09256c98816c9b8'),
      item: 'planner',
      qty: 75,
      size: { h: 22.85, w: 30, uom: 'cm' },
      status: 'D'
    }
  ]

//limit
db.inventory.find().limit(2) //it means that it will return first 2 doc

db.inventory.find().skip(1-1*1).limit(2) //now here it will skip 0 doc and return first 2 doc bcuz "limit(2)".

db.inventory.find().skip(2-1*1).limit(2) //here it will skip 1 doc and then return first 2 doc after skipping first doc.mtlb agar dekha jaye toh smjho agar total doc 5 hna toh first skip hogya toh pichat reh gye 4 , so ab un 4 ma say jo first 2 hongay wo return krega.

db.inventory.find().skip(3-1*1).limit(2) //now it will skip 2 , then return first 2 doc.basic yaha hum yeh kr rhay hain ka first time 0 , then 1 , 2 , and so on . it means har dafa one ka increment ho rha hai.