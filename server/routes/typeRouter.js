import { Router } from "express";
import TypeController from "../controllers/typeController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

export const typeRouter = new Router()
const typeController = new TypeController()

typeRouter.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
typeRouter.get('/', typeController.getAll)