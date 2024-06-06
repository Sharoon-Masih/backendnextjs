//Dynamic Route Handler 

import { comments } from "@/app/user/data";
import { redirect } from "next/navigation";

//there are several usecases where we need to use dynamic route handler:
//let suppose for handling PATCH request we filter element in array through "id", So for getting the id we have to dynamic route handler bcuz id's are dynamic and i cant create a single route handler for every id so in that case we create Dynaimc route handlers.

//they works same like page dynamic route segment

//another usecase if i only want single comment so how i filter it ? here comes dynamic route handler that there will be dynamic route segment after comments endpoint where any dynamic id can be write and we will get it as params from here. 

export async function GET(req: Request, { params }: { params: { id: string } }) {  //remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (Go and check in readme file)

    const requiredComment = comments.find((comment) => comment.id === parseInt(params.id))

    return Response.json(requiredComment)
}



export async function PATCH(req: Request, { params }: { params: { id: string } }) {//remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (Go and check in readme file)

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


export async function DELETE(req: Request,{ params }: { params: { id: string } }) { //remember always declare request parameter in function in dynamic route handler whether you are using that request in function or not. (Go and check in readme file) 



    const commentToBeDelete = comments.findIndex((comment) => comment.id === parseInt(params.id)) //finding the index number of element to be delete by using id.

    if (commentToBeDelete) { //here i set the condition for response.

        comments.splice(commentToBeDelete, 1) //removing element from comments array.
        return new Response(JSON.stringify(comments)) //sending response
    }
    else { //if element not found so this else will be executed.

        // return new Response("Id not found", {
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     status: 404

        redirect("/user/api/comments")
        }
    }




