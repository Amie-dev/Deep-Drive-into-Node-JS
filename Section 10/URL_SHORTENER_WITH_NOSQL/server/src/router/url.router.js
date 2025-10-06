import express, { Router } from 'express'
import { createShortURL, getShortURL } from '../controller/urlShortner.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


const urlRouter=Router();

urlRouter.route("/create").post(authMiddleware,createShortURL);
urlRouter.get("/:code",getShortURL)

export default urlRouter