import { Response , Request, NextFunction} from "express";
import {SignUp} from "../../interfaces/auth.interface";


class authService  {


    signUp = async (req: Request, res: Response, next: NextFunction) => {

        const {  name , email , password , confirmPassword } : SignUp = req.body;

    }


    signIn = async (req: Request, res: Response, next: NextFunction) => {

    }

}




export default new authService();



















