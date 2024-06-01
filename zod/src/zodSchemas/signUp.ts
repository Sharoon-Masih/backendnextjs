//Now wo jo humna models bnaye hain wo basically wo toh mongoose ka liya bnaye hain takay wo unko properly jo hai mongoDb ma store krdega data or type be validate kray kay koi invalid data toh nhi aa raha let suppose password ki jaga koi number value etc..

//But abhi jo schema bnayega yeh basically on the ground check krenga jo be data user input fields ma de raha hai wo kya jo abhi yaha schemas bnayegay usna match kr rha hai ya nhi taka usse yeh faida hoga kay let suppose we need only 8 chracters password to store in DB toh yaha hum validation laga deinga kay bhai maximum 8 character hon, toh usse yeh hoga kay Data base ma  later on manipulate krna mushkil nhi hoga jab filling time pa hi info thk hogi.
import { z } from 'zod'
export const usernameValidation = z
    .string()
    .min(5, "username must be atleast of 5 characters")
    .max(20, "username can't be more than 20 character")
    .regex(/^[a-zA-Z0-9_]+$/, 'username cannot contain special characters'
    )
//here above we have to check only one field so that's why we do it like this.but if we want to validate the whole sign-up form i mean multiple fields in signup form so then we will use the syntax below:

//one more interestinfg thing is that now we can use the the above usernameValidation variable at multiple places where we want to validate userName.

export const signUpValidation = z.object({ //now when we have to validate multiple fields we have to "z.object"
    username: usernameValidation, //as i have said above that now anywhere we want userNamevalidation we can use this variable.
    email: z.string().email({ message: "invalid email address" }), //its not neccessary to give error message inside object we can directly pass it as well but sometime it does not support so for safety we put in object.
    password: z.string().min(6, { message: "password must be at least 6 chars" }).max(8)
})