
# Route Handler in NextJS
I'll explain route handlers in general and then in the context of Next.js in an easy-to-understand way:

**Route Handlers in General**

In web development, a route handler is a piece of code that's specifically designed to handle requests for a particular URL (or route) on your website or application. It acts like a traffic controller, directing the user to the appropriate content or functionality based on the requested URL.

Here's a simplified analogy: Imagine your website is a house. Different rooms (pages) have specific purposes (displaying products, processing forms, etc.). A route handler is like a doorbell for each room. When someone rings a doorbell (sends a request to a URL), the corresponding route handler (the person living in that room) takes action to fulfill the request (show the product details, process the form submission, etc.).

## What are Route Handlers in Next.js?
Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

In simple words, let suppose we have created a mock API like any static array of objects now we want to make the changes in that API from client side, like if our API is a product API so to add some product in it from client side we need a POST method so for creating that method we have to create end point first where request will be hit and then create route handler function inside.

* In NextJS route handlers are created inside app directory within the api directory like this:
![route handler](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-special-file.png&w=3840&q=75)
* According to convention, Route Handler functions are defined inside the route.js/ts file inisde the api directory as you can see above.
* Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.Its mean that we cannot create route.js file when there is already page.js file exist.

```
Good to know: Route Handlers are only available inside the app directory. They are the equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
```

**summary**
* as before we have learnt that how to do page routing which we do by creating page.ts/tsx file, as it is today we have learnt that how we can create request handler for our routes also we can say that endpoints for handling request.
* unlike page routes which reponse in html content, route handler allow you to create restfull endpoints which mean we can do all operation like GET,POST etc at the same endpoint which is known as restfull endpoint.
* route handlers are server-side, ensuring that your sensitive data will remain secure.
* we can also request to external API using route handlers.

### creating simple GET route handler and understanding some NextJS naming convention for route handlers and file-system :
* 1-go in app directory.
* 2-create folder with anyname and then create route.js/ts file within it.
* 3-now within route.ts/js(its convention) file i can create route handler function.
```
export const GET = async () => { //function name should be correct if making route handler function for GET method so name of function must be GET (its a nextJS naming convention).
    return (
        new Response("Hello from 1st route handler")
    )
}

note: remember dont export default the route handler function, only do simple export.
```
* 4-our first route handler function is created, In above code snippet you can see that , now play with some folder structure.
* 5-creating folder and file structure below:
```
app //app directory
  profile //profile route
    route.ts //route handler 
    page.ts  //page.tsx

- now here will be conflict bcuz when we access profile route so how nextJS will identify that it has to open/serve page.tsx or route.ts, so that's the issue why we can't create route.ts and page.ts/tsx at same segment level.

- But by default nextJS will give more priority to route.ts, so therefore when we access profile route we will the Response getting from route.ts.
 
```
* 6-Solving above problem:
```
app                //app directory 
  profile          //profile route
   api             //another special route inside profile route which is provided by NextJS for creating route handlers and its is named as **api** (its naming convention)
    route.ts       //route handler inisde api directory/route
  page.tsx         //page file of profile route

- now there will be no conflict when we access profile route so the page.tsx file will served.

- when we access profile/api, then route.ts inside api route will be access.
```
* 7-we can also create nested route handlers
```
app                         //app directory 
 dashboard                  //dashboard route 
         user               //nested route inside 
         route.ts           //route.ts inside user route 
 route.ts                   //route.ts inside dashboard route
```
**note: best approach is to create route handlers inisde api directory/route.** 

### Now we are going to handle request using Different route handler method, here we not focus on UI but later on you create send request from UI and receiving data :

note: remember in this article we have created fake API within our application it is stored on local storage or DB, so whenever our application is reloaded the API comes back to its initial condition all modifiation will be vanished

**GET Handler Request**
```
app/user/api/comments              //folder structure
 
import { comments } from "../../data"; //this is constant or we can say fake API of comments.

export function GET() {
//    return new Response(comments) //remember we cannot send response of array which we created bcuz the constructor of "response" require some paramter which we not define in our array.
   return Response.json(comments)  //now here we have interface of Response which have a method known as "json" we can pass any data to it.
   
}
```
**POST Handler Request**
```
export async function POST(req: Request) { //as it the POST method so we need a request body for making data mutations/changes in our comments API,Therefore set the type of "req" as Request interface which give us the body of request.

    const commentBody = await req.json()  //it will return the body of request.

    let newComment = {             //here created new object which we push to comments array.
        id: comments.length + 1,  //id will be generated automatically A/c length of array.
        text: commentBody.text  //this is property getting from request body
    }

    comments.push(newComment) //pushed to comments array.

    //it is the response when request is successful.
    return new Response(JSON.stringify(newComment), 
    {                                                  //this header and status is not needed yet.
        headers: {                               
            "Content-Type": "application/json"
        },
        status: 201
    }
) 
```
**Dynamic Route Handler**
#### there are several usecases where we need to use dynamic route handler:
* let suppose for handling PATCH request we filter element in array through "id", So for getting the id we have to dynamic route handler bcuz id's are dynamic and i cant create a single route handler for every id so in that case we create Dynamic route handlers.
* they works same like page dynamic route segment.
* another usecase if i only want single comment so how i filter it ? here comes dynamic route handler that there will be dynamic route segment after comments endpoint where any dynamic id can be write and we will get it as params from here.

**GET dynamic request Handler** 
```
export async function GET(_req: Request, { params }: { params: { id: string } }) {   //remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (later on we will understand why it neccessary)

    const requiredComment = comments.find((comment) => comment.id === parseInt(params.id))

    return Response.json(requiredComment)
}
```
**PATCH Handler**
```
export async function PATCH(req: Request, { params }: { params: { id: string } }) {   //remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (later on we will understand why it neccessary)

    const commentBody = await req.json();

    const commentToBeEdit = comments.find((comment) => comment.id === parseInt(params.id)) //finding the element to be edit by id.

    if (commentToBeEdit) { //here i set the condition for response.

        const indexOf: number = comments.indexOf(commentToBeEdit) //getting index of element to be edit.
        comments[indexOf].text = commentBody.text; //assigning new value to that element 
        return new Response(JSON.stringify(comments[indexOf])) //sending response
    }
    else { //if element not found so this else will be executed.

        return new Response("Id not found", {
            headers: {
                "Content-type": "application/json"
            },
            status: 404
        })
    }


}
```
**DELETE Handler**
```
export async function DELETE(req: Request,{ params }: { params: { id: string } }) { //remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (later on we will understand why it neccessary)



    const commentToBeDelete = comments.find((comment) => comment.id === parseInt(params.id)) //finding the element to be edit by id.

    if (commentToBeDelete) { //here i set the condition for response.

        const indexOf: number = comments.indexOf(commentToBeDelete) //getting index of element to be delete.
        comments.splice(indexOf, 1) //removing element from comments array.
        return new Response(JSON.stringify(comments)) //sending response
    }
    else { //if element not found so this else will be executed.

        return new Response("Id not found", {
            headers: {
                "Content-type": "application/json"
            },
            status: 404
        })
    }


}



```

Here is the Reason why to must declare request parameter in any function defined in dynamic route handler:

The internal server error you’re encountering when you remove the req parameter is related to how AWS Lambda functions handle responses. Let me explain why this happens:

Lambda Function Execution:
* When your Lambda function is invoked (in this case, by the API Gateway), it receives an event object (which includes the request details) and a context object.
* The req parameter in your function represents this event object.
Response Format:
* To return a response from your Lambda function, you need to provide a specific format.
* This format includes a statusCode, headers, and a body.
* If you omit the statusCode, the API Gateway defaults to a 502 Bad Gateway error.
Why Removing req Causes an Error:
* When you remove the req parameter, your function no longer receives the event object.
* Without the event object, you can’t set the statusCode or other necessary response properties.
* As a result, the API Gateway interprets this as an error and returns an internal server error.
Solution:
* Even if you’re not using the req parameter directly, it’s essential for the Lambda function to work correctly.
* You can keep the req parameter in your function, and it won’t impact your logic.
* Just make sure to structure your response correctly, including the statusCode.

**Filtering API results through URL Query Parameter**

```
import { comments } from "@/app/user/data";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {  //before we are using simple "web Request" API for getting request but now we are using "NextRquest" API which is provided by NextJs, basically NextJs extends the web Request API and added some additional features in it, we can also say it is the updated version of REquest API with convenient methods.

    //we ar using NextRequest API because we want searchParams.
    const searchParams = req.nextUrl.searchParams   //here we have simply getted URL search params object.
    const query = searchParams.get('q') //here we are getting query
    const filteredComment = query ? comments.filter((comment) => comment.text.includes(query)) : comments //here we are filtering by using includes() method of array which return true even if single character matches in the string, it will not consider spaces.
    return Response.json(filteredComment)   

}
```
**Redirects**
Simply creatin PATCH handler where i will be going to use **redirect** function on the condition when Id not found,at that point **redirect** function will redirect user to route passed in **redirect** function:
```
import {redirect} from 'next/navigation';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {//remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (Go and check in readme file)

    const commentBody = await req.json();

    const commentToBeEdit = comments.find((comment) => comment.id === parseInt(params.id)) //finding the element to be edit by id.

    if (commentToBeEdit) { //here i set the condition for response.

        const indexOf: number = comments.indexOf(commentToBeEdit) //getting index of element to be edit.
        comments[indexOf].text = commentBody.text; //assigning new value to that element 
        return new Response(JSON.stringify(comments[indexOf])) //sending response
    }
    else { //if element not found so this else will be executed.

        redirect("/user/api/comments")

}
```
**Headers in Route Handler**
* Headers are like special notes that the guide (route handler) carries.
* When visitors arrive at a specific URL, the route handler checks these notes (headers).
These notes might say things like:
* “Show them the ‘about’ page.”
* “Set the language to English.” 
* “Make sure they’re logged in.”
* Headers help customize the experience for each visitor.

HTTP Header represents  the metadata associated with an API response and request.
**Request Header**
These are sent by the client to the server, it contains the essential information which server process and produce response based on that request header info.
e.g 
* "User-agent" : this header represents that which browser is user using and which operating system he/she using.so this proofs that headers info is not same for every request it depends on the User device etc.
* "Accept" : this tells the content type like image,video etc that the client can process, basically it says the server that please send only this type of content.
* "Authentication" : This will authenticate the user on client itself.

**Response Header**
These are sent back to client by server, they provide information about the server and data being sent in the response.
e.g 
* "Content-type" : It tell the client that which type of content is return such as text/html (for HTML documents) or application/json (for JSONDATA) etc.

#### Now there are two methods for getting request headers :
* 1-by creating instance of "Headers" class, then by using .get('headerName') method you can access header.
* 2-by direct using the headers function provided by nextJS.

```
//1st method
export function GET(req: NextRequest) {

    const reqHeaders = new Headers(req.headers) //created new instance of Headers class, then getting the headers object by NextRequest parameter.

    console.log(reqHeaders.get('Authorization')); //by using .get() getting Authorization header info in console.log

    return new Response("user profile data") //its a response.

}
```
```
//2nd method 
export function GET() {

    const reqHeaders = headers() //it is more simple just import "headers" function and by using the .get() method you can access header info.

    console.log(reqHeaders.get('Authorization')); //by using .get() getting Authorization header info in console.log

    return new Response("user profile data") //its a response.

}
```

Now we have done for request Header, Now we are going to do for Response Headers. for sending Headers with response we have to return new response and define headers in it , headers can be take content-type, status etc.. which the client get and process the output based on those headers.

remember browser sent the request header , server just have to get them and process response accordingly and on the other hand server send the response header which client have to handle.

```
//let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is text/plain.

export function GET() {


    return new Response("user profile data") //its a response.

}
```
```
let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is still "text/plain".
export function GET() {


    return new Response("<h1>user profile data</h1>") 

}
```
```
//let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is text/html.
export function GET() {


    return new Response("<h1>user profile data</h1>", {
        headers: {
            "Content-type": "text/html"  //here we set content-type
        }
    })

}
```