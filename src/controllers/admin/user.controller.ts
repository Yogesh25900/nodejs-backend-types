import { success } from "zod";
import { UserService } from "../../services/admin/user.service";
import { Request, Response } from "express";
let userService = new UserService();

export class AdminUserController{
    async createUser(req:Request,res:Response){

        
    }
    async getOneUser(req:Request,res:Response){
        try{
            const userId = req.params.id;
            const user = await userService.getOneUser(userId);
            return res.status(200).json(
                {success:true,
                    message:"User fetched successfully",
                    data:user});
        }
        catch(error:Error | any){
            return res.status(500).json({success:false, message:error.message || "Internal server error"});
        }
    }


    async getAllUsers(req:Request,res:Response){

        try{
            const user  = await userService.getAllUsers();
            return res.status(200).json(
            {
                success:true,
                message:"Users fetched successfully",
                data:user
            }
            )
        }
        catch(error:Error | any){
            return res.status(500).json({success:false, message:error.message || "Internal server error"
            }
            )
        }
       
    }
}


