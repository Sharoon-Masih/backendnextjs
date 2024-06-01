import mongoose, { Schema, Document } from "mongoose";

//as we are working in TS so first create interface
export interface Message extends Document { //basically yeh jo message interface bnaya yeh jaka toh mongoDb ka hi model hoga for creating document so iss liya we have 'extends' it with document taka jo Message interface ma jo Document ki property hain wobi rahay or jo new properties Message ma bnaye wo be hon isilia Document ko import be ki hai.basically yebi ek schema ki tarah hi work kr rha hai.
    content: string,
    createdAt: Date
}

const messageSchema: Schema<Message> = new Schema({ //ab yaha hum ek schema bna rahay hain but zahir hai Schema ka be ek type structure hota hai kay kon kon si properties usme ayeingi toh iss lia jo humna uper interface bnaya hna usko use kreinga for telling the Schema class that schema structure should be like the Message interface.

    content: { //this is property that we define in above interface.

        type: String, //remember in mongoose string is written with 'S' capital
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

//now creating schema model for user

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifycode: string; //yeh verification code hai jo user ki milega
    verifycodeexpiry: Date; //or yaha par uss code ki expiry date/time set hogi.
    isVerified: boolean //for confirmation of verifvation.
    isAcceptingMsg: boolean; //its mean kay agr user ko msg jata hai toh wo accept kr rha hai ya nhi.
    messages: Message[] //or yha par hum chahatay hain kay jo be messages user create kray wo user ka pss be hon toh iss lia humna jo uper Messages ka interface bnaya wohi yaha be as a array rakh dia. 

}

const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"], //username is required this msg will apear if field is empty.
        unique: true, //by this user cant use that username which already exist
        trim: true //it will remove spaces from ends.
    },
    email: {
        type: String,
        required: [true, "email is required"], //username is required this msg will apear if field is empty.
        unique: true, //by this user cant use that username which already exist
        trim: true, //it will remove spaces from ends.
        //Now for email verification there are regex(regular expression) patterns, for using purpose we can copy them from chatgpt or "regexr" website.
        match: [/.+\@.+\..+/, 'please enter valid email'] //this will match input string with the regExp if it matches it will validate otherwise raise error msg
    },
    password: {
        type: String,
        required: [true, "password is required"], //username is required this msg will apear if field is empty.
        unique: true, //by this user cant use that username which already exist
        trim: true //it will remove spaces from ends.
    },
    verifycode: {
        type: String,
        required: true
    },
    verifycodeexpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    isAcceptingMsg: {
        type: Boolean,
        required: true
    },
    // messages:{ //acha messages ko iss tarah sa nhi use krenga bcuz uski type array toh iss lia just simply write name of field and look below
    //     type:Messages[]
    // }
    messages: [messageSchema] //acha remember jab uper humna interface bnaya toh usme messages ki type simply jo custom Message[] wohi rakha bt jab abhi User ka schema bnaya toh messages ki type "messageSchema" rakha toh its mean kay jab interface bnana hoga toh usme direct custom Interface ko as a type dey sktay hain but in Schema jo uss nterface sa schema bnaya hoga wohi dena hoga. 
})

//Now almost we have created the schema but now we have to export them as well.

//but here a issue and issue is that NextJS application is run on edge time, iska mtlb yeh kay asa nhi hota kay NextJS ki app jab chlti hai toh wo puri ek sath run hojati hai , Nahi asa nhi hota wo jo user ki request hoti hai uski base pa work krti hai.otherwise jo simply apps hotay hain build on express wo ek dafa server run hojaye toh wo phr chltay rehtay hain. 

//toh ab isse yeh hota hai kay NextJs ki app ko nhi pta hota kay wo pehli dafa load hui hai ya pehla be run hui hai,therefore ab isse cheez ko check krnay kay liya kay let suppose jo UserSchema hai wo pehla be ban chuka hai ya nhi toh uska lia ek condition lgani paregi.

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', userSchema)

export { UserModel } //finally after putting conditions you can export it.

//Now here are two conditions
// mongoose.models.User as mongoose.Model<User> //iss condition ka mtlb hai kay agr already "models" array ma "User" model store hai toh "mongoose.Model<User>" yeh syntax yeh define krta hai kay usma sa koi ek return hojaye kiu kay "models" toh array hai and usme bht saray model ho sktay hain toh iss lia liya yaha humna usko explicitly by using generic yeh kaha hai kay srf ek User model return hoga.(first condition)

//Ab second condition yeh kehti hai kay agr first condition nhi true hoti toh its mean kay pehla 'models' array ma User model koi bna hi nhi hai which means kay application is not run before so at that time by using this statemet "mongoose.model<User>('User',userSchema)" User type ka model bnado isme simly .model() method two arg lega "modelName and schema" so wo dadiya or baki jo uski return type rakhi wo "User" rakhdi taka jo be return hoga  wo as User interface ki form ma hoga.