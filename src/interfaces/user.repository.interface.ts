import {z} from 'zod';
import {userDocument,User} from "../types/user.type";

export interface UserRepositoryINterface{
    createUser(user:User): Promise<userDocument>;
    getUsers():Promise<userDocument[]>;
}