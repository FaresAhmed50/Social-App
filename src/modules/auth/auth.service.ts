import { Response , Request, NextFunction} from "express";
import {signUpSchemaType} from "../../validators/auth.validator.js";
import {HydratedDocument, Model} from "mongoose";
import {UserModelInterface} from "../../interfaces/userModel.interface.js";
import UserModel from "../../DB/models/user/user.model.js";
import {UserRepository} from "../../DB/repositories/user.repository.js";



class authService  {

    private _userModel = new UserRepository(UserModel);

    signUp = async (req: Request, res: Response, next: NextFunction) => {

        const {  username , email , password , gender , role , age , phone , address } : signUpSchemaType = req.body;

        const user : HydratedDocument<UserModelInterface> = await this._userModel.createOneUser({
            username,
            email,
            password,
            phone,
            age,
            address,
            gender,
            role
        });

        return res.status(200).json({message:"success" , user});
    }


    signIn = async (req: Request, res: Response, next: NextFunction) => {

    }

}




export default new authService();



















