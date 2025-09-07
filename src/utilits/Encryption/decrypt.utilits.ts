import CryptoJS from "crypto-js";


export const decryptUtilits = async ({cipherText , signature} : {cipherText : string , signature : string }) : Promise<string> => {
    return CryptoJS.AES.decrypt(cipherText, signature).toString(CryptoJS.enc.Utf8);
}