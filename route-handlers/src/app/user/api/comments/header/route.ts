import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

//Now there are two methods for getting request headers :
//1-by creating instance of "Headers" class, then by using .get('headerName') method you can access header.
//2-by direct using the headers function provided by nextJS.


//1st method
// export function GET(req: NextRequest) {

//     const reqHeaders = new Headers(req.headers) //created new instance of Headers class, then getting the headers object by NextRequest parameter.

//     console.log(reqHeaders.get('Authorization')); //by using .get() getting Authorization header info in console.log

//     return new Response("user profile data") //its a response.

// }

// 2nd method 
// export function GET() {

//     const reqHeaders = headers() //it is more simple just import "headers" function and by using the .get() method you can access header info.

//     console.log(reqHeaders.get('Authorization')); //by using .get() getting Authorization header info in console.log

//     return new Response("user profile data") //its a response.

// }


//Now we have done for request Header, Now we are going to do for Response Headers. for sending Headers with response we have to return new response and define headers in it , headers can be take content-type, status etc.. which the client get and process the output based on those headers.

//remember browser sent the request header , server just have to get them and process response accordingly and on the other hand server send the response header which client have to handle. so iska mtlb yeh hua kay client header info ma kuch be bhejskta hai wo server ko nhi pta chalgea jab tk wo usse get na krlay bcuz client say jo request header ayega usme different info hogi depends in user device etc.. jo kay kuch conditions ka through server usko process krega or issi tarah sa server jab response header send krega toh wo client ko handle krnay honagy.

//let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is text/plain.
// export function GET() {


//     return new Response("user profile data") //its a response.

// }


// let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is still "text/plain".
// export function GET() {


//     return new Response("<h1>user profile data</h1>") 

// }


//let suppose see now when i send the response header, so inspect it and go in network tab there you will see that the info you get about header related to content-type is text/html.
export function GET() {


    return new Response("<h1>user profile data</h1>", {
        headers: {
            "Content-type": "text/html"  //here we set content-type
        }
    })

}

