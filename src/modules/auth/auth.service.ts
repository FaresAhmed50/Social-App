import { Response , Request, NextFunction} from "express";
import {signUpSchemaType} from "../../validators/auth.validator.js";


class authService  {


    signUp = async (req: Request, res: Response, next: NextFunction) => {

        const {  name , email , password , confirmPassword , gender } : signUpSchemaType = req.body;

    }


    signIn = async (req: Request, res: Response, next: NextFunction) => {

    }

}




export default new authService();



















