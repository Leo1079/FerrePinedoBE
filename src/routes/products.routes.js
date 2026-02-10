import { Router } from "express";
import {
  createProductController,
  getProductController,
  getProductsController,
} from "../controllers/products.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { productoSchema } from "../schemas/products.schemas.js";

const router = Router();

router.get("/productos", getProductsController);
router.get("/productos/:id", getProductController);
router.post(
  "/productos",
  validateSchema(productoSchema),
  createProductController
);
export default router;
