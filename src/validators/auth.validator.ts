import {z} from "zod/v4";


const signUpSchema = z.object({
    name : z.string().min(3).max(10),
    email : z.email(),
    password : z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/),
    confirmPassword : z.string()
}).required();
