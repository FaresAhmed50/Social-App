import {hash} from "bcrypt";



export const generateHash = async (planeText : string , saltRound : number = Number(process.env.SALT_ROUND)): Promise<string> => {

    return hash(planeText, saltRound);

}