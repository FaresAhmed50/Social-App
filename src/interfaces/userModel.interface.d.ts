import {Types} from 'mongoose';


export enum GenderType {
    male = 'male',
    female = 'female',
}

export enum RoleType {
    user = 'user',
    admin = 'admin',
}


export interface UserModelInterface {
    _id : Types.ObjectId;
    fName : string;
    lName : string;
    username ?: string;
    email: string;
    password: string;
    age : number;
    phone : string;
    address : string;
    gender : GenderType;
    role ?: RoleType;
    createdAt : Date;
    updatedAt : Date;
}