import {DbRepository} from "./db.repository.js";
import {UserModelInterface} from "../../interfaces/userModel.interface.js";
import {HydratedDocument, Model} from "mongoose";
import {ErrorHandler} from "../../middlewares/errorHandler.js";


export class UserRepository extends DbRepository<UserModelInterface> {

    constructor(protected readonly model : Model<UserModelInterface>) {
        super(model);
    }


    async createOneUser(data : Partial<UserModelInterface>) : Promise<HydratedDocument<UserModelInterface>> {

        const user : HydratedDocument<UserModelInterface> = await this.model.create(data);

        if(!user){
            throw new ErrorHandler(400, "failed to create user");
        }

        return user;
    }

}








