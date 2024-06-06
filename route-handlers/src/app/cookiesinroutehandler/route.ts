//Now we will learn about Cookies in route handler:

import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// there are two methods for cookies:
// 1- set and get cookies by using nextjS "cookies" function.
// 2- set cookies in Response Header and then get it from NextRequest by using its cookies object .get() method.

//getting cookies in route handler
export function GET(req: NextRequest) {


    const logInCookie = cookies().set('logIn',"true") //(1st method by nextJs func)
  console.log(logInCookie.get('logIn'));//(1st method by nextJs func)
      
    //getting cookie by using NextRequest cookies. 2nd method)
    const reqThemeCookie = req.cookies.get('theme')

    console.log(reqThemeCookie); //it prints undefined bcuz cookies will set when the client receive the response Header, and as we can see first console.log is executing then response is giong to client therefore its undefined.

    return new Response("user theme",{
       headers:{       //simply setting cookies in Response header. (1st method)
        "Set-cookies":"theme=dark"
       }
    })
   
}

 //must remember client get the cookies from server and then after store for a while client return back cookies to server which means that it is neccessary to first send cookies from server in response header, then get cookies from client in request header for more see the example below:
 
 //go and check readme