import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getById,
  productByCategory,
  updateProduct,
} from "../controllers/products.controller";
import {
  productValidation,
  validateUpdateProduct,
} from "../validations/productValidation";
import { validateRequest } from "../middleware/validateRequest";
import { restrictTo } from "../middleware/restricTo";
import { verifyJWT } from "../middleware/verify";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getById);
router.get("/category/:id", productByCategory);

router.post(
  "/",
  verifyJWT,
  restrictTo("admin"),
  validateRequest(productValidation),
  createProduct
);
router.put(
  "/:id",
  verifyJWT,
  restrictTo("admin"),
  validateRequest(validateUpdateProduct),
  updateProduct
);
router.delete("/:id", verifyJWT, restrictTo("admin"), deleteProduct);

export default router;
