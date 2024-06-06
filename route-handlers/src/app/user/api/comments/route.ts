import { comments } from "../../data";

export async function GET() {
    //    return new Response(comments) //remember we cannot send response of array which we created bcuz the constructor of "response" require some paramter which we not define in our array.
    return Response.json(comments)  //now here we have interface of Response which have a method known as "json" we can pass any data to it.

}

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
}

