import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getById,
  updateProduct,
} from "../controllers/products.controller";
import { productValidation } from "../validations/productValidation";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getById);
router.post("/", validateRequest(productValidation), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
