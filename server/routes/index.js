import { Router } from "express";
import { brandRouter } from "./brandRouter.js";
import { userRouter } from "./userRouter.js";
import { deviceRouter } from "./deviceRouter.js";
import { typeRouter } from "./typeRouter.js";

export const serverRouter = new Router()

serverRouter.use('/user', userRouter)
serverRouter.use('/brand', brandRouter)
serverRouter.use('/device', deviceRouter)
serverRouter.use('/type', typeRouter)