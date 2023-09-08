import { Router } from "express";
import BrandController from "../controllers/brandController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";

export const brandRouter = new Router()
const brandController = new BrandController()

brandRouter.post('/', checkRoleMiddleware('ADMIN'), brandController.create)
brandRouter.get('/', brandController.getAll)