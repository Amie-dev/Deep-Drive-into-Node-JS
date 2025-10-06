import {Router} from "express";
import { userLogIn, userLogOut, userRegister } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const userRouter=Router();

userRouter.post("/singup",userRegister);
userRouter.post("/login",userLogIn);
userRouter.get("/logout",authMiddleware,userLogOut)

export default userRouter