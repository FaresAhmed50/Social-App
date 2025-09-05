import * as z from "zod";

export const signUpSchema  = {
    body: z.object({
        name: z.string().min(3).max(10),
        email: z.email(),
        password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/),
        confirmPassword: z.string(),
        gender : z.string()
    }).required().refine((data) => {
        const {password, confirmPassword} = data;

        return password === confirmPassword;

    },{
        error: "Password and confirm password must match",
        path: ["confirmPassword"]
    })
}


export type signUpSchemaType = z.infer<typeof signUpSchema.body>;