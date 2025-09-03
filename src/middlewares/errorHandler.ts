import {  Response , Request, NextFunction} from "express";

export const globalErrorHandler = (err : Error , req : Request, res: Response, next : NextFunction) => {
    return res.status(err["cause"] as number || 500).json({
        message: err.message,
        stack: err.stack,
        error: err,
    });
};



export class ErrorHandler extends Error {
    constructor(public statusCode : any, public message : string) {
        super(message);
        this.statusCode = parseInt(statusCode) as number || 500;
    }
}
