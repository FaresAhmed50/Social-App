import {compare} from "bcrypt";



export const compareHash = async (planeText : string , cipherText : string) : Promise<boolean> => {

    return compare(planeText, cipherText);

}