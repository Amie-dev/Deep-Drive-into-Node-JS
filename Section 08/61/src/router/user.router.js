import {Router } from 'express';
import { admin, me, userLogin, userSignUp } from '../controller/user.controller.js';
import { accessRole, userMiddleware } from '../middleware/user.middleware.js';

const userRouter=Router();

userRouter.route("/sing-up").post(userSignUp)
userRouter.route("/log-in").post(userLogin)

userRouter.get("/me",userMiddleware,me)
userRouter.get("/admin",userMiddleware,accessRole(["ADMIN"]),admin)


export default userRouter