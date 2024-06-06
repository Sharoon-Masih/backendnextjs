
//first we will experiment it using the time example:

//now you will see that at every reload i will get new current time in response which means Route Handler is not cached yet.
// export function GET() {
    
//   return Response.json({
//     "time":new Date().toLocaleTimeString()   
//   })

// }


//But at the moment when we create the build route handler will be cached automatically which means then we get that time which is cached at the build time.for experiencing it let's create build and see its behaviour in production environment.

//Now how to opt out of cacheing

export const dynamic = "force-dynamic"; //in this way we said to nextJs that we dont want to cached route handler,

//by default the value of "dynamic" is auto which means it will try to do cacheing as much as possible.

//but here we set its value to force-dynamic which means now route handler become fully dynamic it will run on each user request. 

export function GET() {
    
  return Response.json({
    "time":new Date().toLocaleTimeString()   
  })

}