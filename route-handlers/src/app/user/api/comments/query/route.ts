//now getting URL query parameter and filtering result on the basis of query

import { comments } from "@/app/user/data";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {  //before we are using simple "web Request" API for getting request but now we are using "NextRquest" API which is provided by NextJs, basically NextJs extends the web Request API and added some additional features in it, we can also say it is the updated version of REquest API with convenient methods.

    //we ar using NextRequest API because we want searchParams.
    const searchParams = req.nextUrl.searchParams   //here we have simply getted URL search params object.
    const query = searchParams.get('q') //here we are getting query
    const filteredComment = query ? comments.filter((comment) => comment.text.includes(query)) : comments //here we are filtering by using includes() method of array which return true even if single character matches in the string, it will not consider spaces.
    return Response.json(filteredComment)   

}