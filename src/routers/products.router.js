import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getById,
  updateProduct,
} from "../controllers/products.controller";
import {
  productValidation,
  validateUpdateProduct,
} from "../validations/productValidation";
import { validateRequest } from "../middleware/validateRequest";
import { restrectTo } from "../middleware/restricTo";
import { verifyJWT } from "../middleware/verify";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getById);

router.use(verifyJWT);
router.use(restrectTo("admin"));

router.post("/", validateRequest(productValidation), createProduct);
router.put("/:id", validateRequest(validateUpdateProduct), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
