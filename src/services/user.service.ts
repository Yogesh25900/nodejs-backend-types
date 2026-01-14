import { createUserDto, loginUserDto } from "../dtos/user.dto";
import { HttpError } from "../errors/http-error";
import { UserRepository } from "../repositories/user.repository";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs";

let userRepository = new UserRepository();

export class UserService{
    async registerUser(userData : createUserDto){
        const checkEmail = await userRepository.getUserByEmail(userData.email);
        if(checkEmail){
            throw new HttpError(409,"Email already in use");
        }
        const checkUsername = await userRepository.getUserByUsername(userData.username);
        if(checkUsername){
            throw new HttpError(403,"Username already in use");
        }

        const hashedPassword = await bcryptjs.hash(userData.password, 10);
        userData.password = hashedPassword;
        const newUser = await userRepository.createUser(
           userData
        );
        return newUser;
    }

    async loginUser(loginData: loginUserDto){
        const checkLogin = await userRepository.getUserByEmail(loginData.email);
        if(!checkLogin){
            throw new HttpError(404,"User not found");

        }
        const validPassword = await bcryptjs.compare(loginData.password,checkLogin.password);
        if(!validPassword){
            throw new HttpError(401,"Invalid crednetials");
        }
        const payload ={
            id:checkLogin._id,
            email:checkLogin.email,
            username:checkLogin.username
        };
        const token = jwt.sign(payload,JWT_SECRET as string,{expiresIn:"1h"}); //1 hr session
        return {token,checkLogin};

        
    }
}