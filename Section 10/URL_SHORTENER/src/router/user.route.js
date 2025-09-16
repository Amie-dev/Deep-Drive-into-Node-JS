import {Router} from 'express';
import { me, userLogIn, userSignUp } from '../controller/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const userRouter=Router();

userRouter.post("/singup",userSignUp)
userRouter.post("/login",userLogIn)
userRouter.get("/me",authMiddleware,me)


export default userRouter