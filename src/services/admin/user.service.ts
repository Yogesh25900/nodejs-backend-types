
import bcryptjs from "bcryptjs";
import { UserRepository } from "../../repositories/user.repository";
import { createUserDto } from "../../dtos/user.dto";
import { HttpError } from "../../errors/http-error";

let userRepository = new UserRepository();

export class UserService{
    async createUser(userData : createUserDto){
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

    async getOneUser(id: string) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new HttpError(404, "User not found");
        }
        return user;
    }
    async deleteOneUser(id: string) {
        const isDeleted = await userRepository.deleteUser(id);
        if (!isDeleted) {
            throw new HttpError(404, "User not found");
        }
        return isDeleted;
    };

    async updateOneUser(id: string, updateData: Partial<createUserDto>) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new HttpError(404, "User not found");
        }
    
        const updatedUser = await userRepository.updateUser(id, updateData);
        if (!updatedUser) {
            throw new HttpError(404, "User not found");
        }
        return updatedUser;

    

}


        async getAllUsers(){
            const users = await userRepository.getAllUsers();
            if(!users){
                throw new HttpError(404,"No users found");
            }
            return users;
        }

}