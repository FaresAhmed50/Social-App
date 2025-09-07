import jwt, {JwtPayload} from "jsonwebtoken";


export const verifyToken = async ({ token , signature}:  {
    token : string ,
    signature : string
}) : Promise<string | JwtPayload> => {
    return jwt.verify(
        token,
        signature,
    );
}