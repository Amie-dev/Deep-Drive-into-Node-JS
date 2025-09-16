import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { deleteShortCode, getAllShortCode, getUrlByCode, shorten } from "../controller/url.controller.js";

const urlRouter=Router();

urlRouter.post("/shorten",authMiddleware,shorten)
urlRouter.get("/redirect/:code",getUrlByCode)
urlRouter.get("/urls",authMiddleware,getAllShortCode);
urlRouter.delete("/url/:id",authMiddleware,deleteShortCode)


export default urlRouter