import {Router} from "express";
import authService from "./auth.service.js";
import ValidatorMiddleware from "../../middlewares/validator.middleware.js";
import {signUpSchema} from "../../validators/auth.validator.js";

const authRouter = Router();



authRouter.route("/sighUp").post( ValidatorMiddleware(signUpSchema) , authService.signUp)





export default authRouter;













