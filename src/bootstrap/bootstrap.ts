import {BootstrapArgs} from "../interfaces/app.interface.js";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import {Request , Response , NextFunction} from "express";
import {ErrorHandler, globalErrorHandler} from "../middlewares/errorHandler.js";
import authRouter from "../modules/auth/auth.controller.js";
import dbConnection from "../DB/dbConnection.js";

const bootstrap = ({app , express} : BootstrapArgs ) => {

    const limiter = rateLimit({
        windowMs: 60*1000,
        max: 5,
        skipSuccessfulRequests: true
    });


    app.use(cors());
    app.use(helmet());
    app.use(limiter);
    app.use(express.json());

    dbConnection();


    app.get("/", (req : Request , res : Response) => {
        return res.status(200).json({massage : "welcome from social media app..."});
    })

    app.use("/auth" , authRouter);






    app.use("{/*demo}" , (req : Request, res : Response , next: NextFunction) => {
         throw new ErrorHandler(404 , "url not found");
    });


    app.use(globalErrorHandler);

}


export default bootstrap;