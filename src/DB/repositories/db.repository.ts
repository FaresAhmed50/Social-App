import {HydratedDocument, Model, ProjectionType, RootFilterQuery} from "mongoose";


export abstract class DbRepository<TY> {

    protected constructor(protected readonly model : Model<TY>) {}

    async create(data : Partial<TY>) : Promise<HydratedDocument<TY>> {
        return this.model.create(data)
    }

    async findOne(filter : RootFilterQuery<TY> , select ?: ProjectionType<TY>): Promise<HydratedDocument<TY> | null> {

        return  this.model.findOne(filter , select);
    }

}





