import z from "zod";
import { createUserDto } from "../dtos/user.dto";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";

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
}