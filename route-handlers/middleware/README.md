# Middleware
* Middleware is a powerful feature of Nextjs thats provide an excellent way to intercept and control the flow of requests and responses within your application.
* It does this at global level significantly enhancing features like redirection, URL rewrites, Authentication, cookies, headers etc.

What Is Middleware?:

* Imagine you’re hosting a party, and guests keep arriving at your doorstep.
* Before you let them in, you want to check if they’re on the guest list or if they need any special treatment.
* Middleware is like your friendly bouncer—it handles guests before they enter the party.
Middleware in Web Applications:
* In web apps (like Next.js), middleware sits between the incoming request and your actual page or API route.
* It intercepts the request, does some checks or modifications, and then passes it along.
* Think of it as a helpful checkpoint where you can add extra functionality.

### creating first middleware
* 1-If you have created src directory go inside it, otherwise stand at your project root level.
* 2-Now create Middleware.ts file.
* 3-The file must export a single function, either as a default export or named middleware. Note that multiple middleware function from the same file are not supported.

Middleware also allow us to specify paths where it will be active:
- custom matcher segment
- conditional statements

Imagine a senerio that when user visit the profile page he/she will automatically redirect to the contact page, we will do this by using above two ways custom matcher segment & conditional statements.

Now creating middleware function inside middleware.ts and exporting it.

```
import { NextResponse, type NextRequest } from "next/server";

//as we know NextResponse is the extended version of Web response API whereas "type NextRequest" is the type of Request which we get from typescript. 

//by define the type it help us to know that what cann be the shape of Request object.

export function middleware(req: NextRequest) {

    return NextResponse.redirect(new URL("/contact", req.url)) //by using the .redirect() method from NextResponse and passing it an instance of URL class where first parameter is asking for new url and second parameter is asking for base URL.
}

export const config = {  //this will tell the middleware that where it should be active.
    matcher: "/profile"  //like here we set "/profile" it means that when the user request for "/profile" this middleware will activate and perform the logics defined in it.
}
```
**NextRequest Type**:
* In Next.js, NextRequest is a specific type definition.
It describes the structure of an incoming HTTP request in the context of Next.js.
* When you create custom middleware or API routes, you’ll often use NextRequest to define the expected shape of the request object.
* It includes properties like url, headers, and methods for handling cookies.

**now doing the same using conditional statements**
```
export function middleware(req: NextRequest) {

    if (req.nextUrl.pathname === "/profile") { //it will check if the pathname.
        return NextResponse.redirect(new URL("/contact", req.url))
    }

}

```

**now instead of redirecting we will do for rewrite URL**
```
export function middleware(req: NextRequest) {

    if (req.nextUrl.pathname === "/profile") { //it will check if the pathname.
        return NextResponse.rewrite(new URL("/contact", req.url)) //rewrite means the path in the URL will rewrited by the path which we have provided to rewrite method.here is also doing same thing A/c to condition if pathname === "profile" so  rewrite the "profile" path with the "contact" page. 
    }

}

```

When Not to Use Middleware:
* Complex Data Fetching and Manipulation:
Middleware isn’t for heavy data fetching or complex calculations.
* Heavy Computational Tasks:
Keep middleware lightweight; save heavy tasks for dedicated route handlers.
* Extensive Session Management:
Basic session tasks are fine, but complex session management needs dedicated services.
* Direct Database Operations:
Avoid doing this in middleware; use route handlers or server-side utilities.

summary, middleware is like your party bouncer—it ensures a smooth flow of guests (requests) into your web app! 🎉🚀