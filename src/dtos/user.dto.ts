import z from "zod";
import { UserSchema } from "../types/user.type";

export const createUserDto = UserSchema.pick(
    {
        firstName: true,
        lastName:true,
        username:true,
        email:true,
        password:true
    }
).extend(
    {
        confirmPassword:z.string().min(3)
    }
).refine(
    (data) => data.password === data.confirmPassword,
    {
        message:"Password do not match",
        path:["confirmPassword"]
    }
)

export type createUserDto = z.infer<typeof createUserDto>;


export const updateUserDto = UserSchema.partial().extend(
    {
        confirmPassword:z.string().min(3).optional()
    }
).refine(
    (data) => {
        if(data.password || data.confirmPassword){
            return data.password === data.confirmPassword;
        }
        return true;
    },
    {
        message:"Password do not match",
    }
)

export type updateUserDto = z.infer<typeof updateUserDto>;