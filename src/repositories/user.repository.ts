import { Iuser, UserModel, } from "../models/user_model";

export interface IUserRepository{
    createUser(userData:Partial<Iuser>):Promise<Iuser>;
    getUserByEmail(email:string):Promise<Iuser | null>;
    getUserByUsername(username:string):Promise<Iuser | null>;
}

export class UserRepository implements IUserRepository{
    async createUser(userData: Partial<Iuser>): Promise<Iuser> {
        const user = new UserModel(userData);
        await user.save();
        return user;
    }
    async getUserByEmail(email: string): Promise<Iuser | null> {
        const user = await UserModel.findOne({email});
        return user;

    }
    async getUserByUsername(username: string): Promise<Iuser | null> {
        const user = await UserModel.findOne({username});
        return user;
    }

}

