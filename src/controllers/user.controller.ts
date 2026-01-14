import z from "zod";
import { createUserDto, loginUserDto } from "../dtos/user.dto";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";
import { HttpError } from "../errors/http-error";

let userService = new UserService();
 
export class AuthController{
    async createUser(req:Request,res:Response){
    
        try{
            const parsedData = createUserDto.safeParse(req.body);
            if(!parsedData.success){
                return res.status(400).json(
                    {success:false,
                        message:z.prettifyError(parsedData.error)});
            }
            const newUser = await userService.registerUser(parsedData.data);
            return res.status(201).json(
                {success:true,
                    message:"User created successfully",
                    data:newUser});
        } catch(error:Error | any){ {
            return res.status(500).json({success:false, message:error.message || "Internal server error"});
        }
    }
}

async loginUser(req:Request,res:Response){
   try{
    const parsedData = loginUserDto.safeParse(req.body);
    if(!parsedData.success){
        throw new HttpError(400,"Invalid credentials");

    }
    const user = await userService.loginUser(parsedData.data);
    return res.status(200).json({success:true, message:"Login successful",});
}
catch(error:HttpError | any){
 return res.status(error.statusCode || 500).json({success:false,message:error.message|| "Internal"});



}
}

}
