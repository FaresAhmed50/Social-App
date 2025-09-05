import {Request,Response,NextFunction} from "express";
import {requestType, SchemaInterface} from "../interfaces/Schema.interface.js";
import {ErrorHandler} from "./errorHandler.js";
import {ZodError} from "zod";


const ValidatorMiddleware = (schema: SchemaInterface) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const validationErrors: ZodError[] = [];
        for (const key of Object.keys(schema) as requestType[]) {

            if (!schema[key]) continue;

            const res = schema[key].safeParse(req[key]);

            if (!res?.success) {
                validationErrors.push(res.error);
            }
        }

        if (validationErrors.length > 0) {
            throw new ErrorHandler(400, JSON.parse(validationErrors as unknown as string));
        }

        next();
    }
}

export default ValidatorMiddleware;