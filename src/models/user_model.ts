import mongoose, { Schema } from "mongoose";
import { userType } from "../types/user.type";

const userMongoSchema :Schema = new Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        username:{type:String,required:true,unique:true},
        role:{type:String,enum:["user","admin"],default:"user"}
    },
    {
        timestamps:true
    }
)

export interface Iuser extends userType, Document{
    _id:mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;


}

export const UserModel = mongoose.model<Iuser>("User",userMongoSchema);