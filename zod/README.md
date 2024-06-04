
# ZOD

Certainly! In simple terms, **Zod** is a powerful **TypeScript** library for **data validation**. It helps ensure that the data your application receives is valid and conforms to specific rules. Here's a quick summary:

1. **When to Use Zod**:
   - When your app deals with inputs that you don't fully trust, use Zod for validation.
   - If your app receives inputs that you trust but don't control (e.g., user input), validate them with Zod.
   - For inputs you trust and control, you may not need to validate them using Zod.

2. **How Zod Works**:
   - Zod provides a set of functions and types to define validation rules.
   - You can create schemas that describe the expected shape of data.
   - If the data doesn't match the schema, Zod throws an error.

In simple words, when we are filling any form so if we put simple text in the field of email so it will generate error that it is not valid, So this is beacause of these validation libraries.

To Start 
#### 1-create model directory inside src directory, where our models will be place.
#### 2-first install mongoose , beacause we cannot use ZOD directly.
```
npm i mongoose
```
You can't directly use ZOD for data modeling in a MongoDB database. Here's why:

* **ZOD's purpose:** ZOD is for validating data, ensuring it's in the right format. It doesn't handle storing or retrieving data from a database like MongoDB.
* **Mongoose's role:** Mongoose is an object modeling tool specifically built for MongoDB. It lets you define data models (blueprints) for your documents in the database.

**Think of it like this:**

* ZOD is the inspector checking IDs at a club (ensuring they're valid).
* Mongoose is the club's guest list manager (storing and managing who's on the list).

#### 3-import mongoose,schema and document from 'mongoose'
where,
* mongoose (it is a ORM that allow you to communicate with MongoDB)
* schema (with the help of this we will create schemas and it is in the replacement of writing mongoose.schema everytime we want to create schema)
* document (it is beacause we are using TS, therefore we have to use it for type-safety feature)

## Now you are ready to use:
* while working with TS first create interface for your schema.example:
```
import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    username: string;
    email: string;
    password: string;

}
``` 

* then create schema on the basis of above interface like this:
```
const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"], //username is required this msg will appear if field is empty.
        unique: true, //by this user can't use that username which already exist.
        trim: true //it will remove spaces from ends.
    },
    email: {
        type: String,
        required: [true, "email is required"], 
        unique: true, 
        trim: true,

        //Now for email verification there are regex(regular expression) patterns, for using purpose we can copy them from chatgpt or "regexr" website.
    
        match: [/.+\@.+\..+/, 'please enter valid email'] //this will match input string with the regExp if it matches it will validate otherwise raise error msg
    },
    password: {
        type: String,
        required: [true, "password is required"],
        unique: true,
        trim: true 
    },
})
```
Now we have created the schema but now we have to export it as well.

* but here a issue and issue is that NextJS application is run on edge time, which means that it only run on user request.
* So when we run NextJs app it does not know that it has run before or it is first run , therefore for exporting first we have to check by using conditions that is Model for that schema is already exist or we have to create new Model.
```
const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', userSchema)
```
Now finally we created the schema and export it also, But this schema is only used by mongoose to store information of user into MongoDB, But if we want to validate all fields while user is signing-up or signing-in then here comes the ZOD library which allow to us to validate the field on the ground when user is inputting some data. like most of the time we saw when we are signing-up on different apps one message appears that password should be of 8 characters and if we put less than it, we saw an error that is because of these valildation libraries.

## Let move to ZOD setup:
* 1- install zod. 
```
npm i zod
```
* 2- create folder for Zod schemas.
* 3- inside that we will create two files signUpSchema.ts and signInSchema.ts. 
* 4- creating signUpSchema inside signUpSchema.ts:
```
import { z } from 'zod'  //must do it for using zod structure.

export const signUpValidation = z.object({ //now when we have to validate multiple fields so we have to use "z.object" method
    username: z.string().min(5, "username must be atleast of 5 characters").max(20, "username can't be more than 20 character").regex(/^[a-zA-Z0-9_]+$/, 'username cannot contain special characters') 
    email: z.string().email({ message: "invalid email address" }), //its not neccessary to give error message inside object we can directly pass it as well but sometime it does not support so for safety we put in object.
    password: z.string().min(6, { message: "password must be at least 6 chars" }).max(8)
})
```
In above schema you can this how easily we handle the validation using ZOD. 

* 5- creating signInSchema inside signInSchema.ts:
```
import {z} from 'zod'

export const signInValidation=z.object({
    identifier:z.string(), //basically identifier is nothing its simply you can say username or email, but in production at signin time we call it identifier we can simply set it to username or email no problem.
    password:z.string()
})
```
## Summary:
* By using ZOD library you can simply validate forms,sign-up,sign-in etc at the inputting time and then that fully validated data will be store inside your database.
* if you want to validate multiple fields or even single field, simply invoke the **z.object()** method and pass the fields in key:value format.
* where **key** is your field name and **value** is the validation methods which you are going to apply on each granular/specific field.  