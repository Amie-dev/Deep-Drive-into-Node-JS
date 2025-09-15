import {Router} from "express"
import { user, userLogin, userSignUp } from "../controller/user.controller.js"

const userRouter=Router()

userRouter.post("/signup",userSignUp)
userRouter.post("/login",userLogin)
userRouter.get("/me",user)



export default userRouter