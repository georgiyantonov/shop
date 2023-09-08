import { Router } from "express";
import DeviceController from "../controllers/deviceController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

export const deviceRouter = new Router()
const deviceController = new DeviceController()

deviceRouter.post('/', checkRoleMiddleware('ADMIN'), deviceController.create)
deviceRouter.get('/', deviceController.getAll)
deviceRouter.get('/:id', deviceController.getDevice)
