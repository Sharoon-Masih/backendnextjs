//for deleting 
db.programmers.deleteOne({skill:"tailwindcss"}) //it will delete one doc A/c to given condition.

//result
// { acknowledged: true, 
//   deletedCount: 1 
// }

db.programmers.remove({skill:"tailwindcss"}) //it also for removing but it will not remove one doc it will remove all doc that are A/c to condition.

//result
// { acknowledged: true, 
//   deletedCount: 2 }

db.programmers.deleteMany({age:{$gt:20}}) //deleteMany will delete all the doc that lie on the given condition //deleteMany({}) , it will delete all docs.
//result
// { acknowledged: true, deletedCount: 1 }