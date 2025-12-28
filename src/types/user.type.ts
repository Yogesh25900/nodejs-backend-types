import z, { email } from "zod";

export const UserSchema = z.object({
    firstName:z.string().min(2,"first name must be at least 2 characters"),
    lastName:z.string().min(2,"last name must be at least 2 character"),
    email:z.email(),
    password:z.string().min(3),
    confirmPassword:z.string().min(3),
    username:z.string().min(3),
    role:z.enum(["user","admin"])
    
})

export type userType = z.infer<typeof UserSchema>;