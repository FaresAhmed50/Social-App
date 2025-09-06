import {HydratedDocument, Model} from "mongoose";


export abstract class DbRepository<TY> {

    protected constructor(protected readonly model : Model<TY>) {}

    async create(data : Partial<TY>) : Promise<HydratedDocument<TY>> {
        return this.model.create(data)
    }

}





