
# Cacheing in Route Handler
Certainly! Let’s talk about caching in route handlers with an easy example:

What Is Caching?:
* Imagine you’re a librarian, and people keep asking for the same book over and over.
* Instead of running to the shelves every time, you decide to keep a copy of that book at your desk.
* This way, when someone asks for it, you can quickly hand it over without searching.

Caching in Web Applications:
* In web applications, caching works similarly.
* When users visit a page, the server (route handler) can store a copy of the page’s content.
* The next time someone asks for the same page, the server can quickly provide the cached version instead of recalculating everything.

Remember Route Handlers are cached by default when using the GET method, because the other methods such as PATCH,POST, DELETE are invoked on user demand, therefore GET method is cached. 

#### first we will experiment it using the time example:
```
//now you will see that at every reload i will get new current time in response which means Route Handler is not cached yet.
export function GET() {
    
  return Response.json({
    "time":new Date().toLocaleTimeString()   
  })

}
```
But at the moment when we create the build route handler will be cached automatically which means then we get that time which is cached at the build time.for experiencing it let's create build and see its behaviour in production environment.

* 1- create build using:
```
npm run build
```
* 2- after this run the below command:
```
npm run start
```
Now you will not get the current time, that's NextJS caching works with route handlers.

#### Now how to opt out of cacheing
```
export const dynamic = "force-dynamic"; //in this way we said to nextJs that we dont want to cached route handler,

//by default the value of "dynamic" is auto which means it will try to do cacheing as much as possible.

//but here we set its value to force-dynamic which means now route handler become fully dynamic it will run on each user request. 

export function GET() {
    
  return Response.json({
    "time":new Date().toLocaleTimeString()   
  })

}
```