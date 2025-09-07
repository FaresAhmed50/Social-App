import jwt, {SignOptions} from "jsonwebtoken";


export const generateToken = async ({payload , signature , options} : {
    payload : string,
    signature : string,
    options : SignOptions
}) => {

    return jwt.sign(
        payload,
        signature,
        options
    );

}