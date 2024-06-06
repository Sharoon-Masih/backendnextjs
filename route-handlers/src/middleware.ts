import { NextResponse, type NextRequest } from "next/server";

//as we know NextResponse is the extended version of Web response API whereas "type NextRequest" is the type of Request which we get from typescript. 

//by define the type it help us to know that what cann be the shape of Request object.

// NextRequest Type:
// In Next.js, NextRequest is a specific type definition.
// It describes the structure of an incoming HTTP request in the context of Next.js.
// When you create custom middleware or API routes, you’ll often use NextRequest to define the expected shape of the request object.
// It includes properties like url, headers, and methods for handling cookies.

// export function middleware(req: NextRequest) {

//     return NextResponse.redirect(new URL("/contact", req.url)) //by using the .redirect() method from NextResponse and passing it an instance of URL class where first parameter is asking for new url and second parameter is asking for base URL.
// }

// export const config = {  //this will tell the middleware that where it should be active.
//     matcher: "/profile"  //like here we set "/profile" it means that when the user request for "/profile" this middleware will activate and perform the logics defined in it.
// }


//now doing the same using conditional statements
// export function middleware(req: NextRequest) {

//     if (req.nextUrl.pathname === "/profile") { //it will check if the pathname.
//         return NextResponse.redirect(new URL("/contact", req.url))
//     }

// }

//now instead of redirecting we will do for rewrite URL
export function middleware(req: NextRequest) {

    if (req.nextUrl.pathname === "/profile") { //it will check if the pathname.
        return NextResponse.rewrite(new URL("/contact", req.url)) //rewrite means the path in the URL will rewrited by the path which we have provided to rewrite method.here is also doing same thing A/c to condition if pathname === "profile" so  rewrite the "profile" path with the "contact" page. 
    }

}

