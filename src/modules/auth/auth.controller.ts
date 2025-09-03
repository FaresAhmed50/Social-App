import {Router} from "express";
import authService from "./auth.service.js";

const authRouter = Router();



authRouter.route("/sighUp").post(authService.signUp)





export default authRouter;













