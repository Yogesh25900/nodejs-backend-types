import { createUserDto } from "../dtos/user.dto";
import { HttpError } from "../errros/http-error";
import { UserRepository } from "../repositories/user.repository";
import bcryptjs from "bcryptjs";

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
}