import {Types} from 'mongoose';





export interface UserModelInterface {
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