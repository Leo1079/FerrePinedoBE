import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductsController,
  updateProductController,
} from "../controllers/products.controllers.js";
import { validateProductExists } from "../middlewares/validateProduct.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { productoSchema } from "../schemas/products.schemas.js";
import { updateProductSchema } from "../schemas/updateProduct.schemas.js";

const router = Router();

router.get("/productos", getProductsController);
router.get("/productos/:id", getProductController);
router.post(
  "/productos",
  validateSchema(productoSchema),
  createProductController
);

router.patch(
  "/productos/:id",
  validateSchema(updateProductSchema),
  validateProductExists,
  updateProductController
);

router.delete("/productos/:id", validateProductExists, deleteProductController);
export default router;
