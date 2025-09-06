import * as z from "zod";
import {GenderType, RoleType} from "../interfaces/genaricTypes.interface.js";

export const signUpSchema  = {
    body: z.object({
        username: z.string().min(3).max(15),
        email: z.email(),
        password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/),
        confirmPassword: z.string(),
        age : z.number(),
        phone : z.string(),
        gender : z.enum([GenderType.male , GenderType.female]),
        role : z.enum([RoleType.user , RoleType.admin]),
        address : z.string(),

    }).required().refine((data) => {
        const {password, confirmPassword} = data;

        return password === confirmPassword;

    },{
        error: "Password and confirm password must match",
        path: ["confirmPassword"]
    })
};


export type signUpSchemaType = z.infer<typeof signUpSchema.body>;