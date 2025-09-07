import CryptoJS from "crypto-js";


export const generateEncryption = async ({ planeText, signature }: { planeText: string , signature: string } ): Promise<string> => {
    return CryptoJS.AES.encrypt(planeText, signature).toString();
}