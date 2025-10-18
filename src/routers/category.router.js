import { Router } from "express";
import {
  createCategories,
  deleteCategories,
  getAllCategories,
  getById,
  updateCategories,
} from "../controllers/category.controller";
import { validateRequest } from "../middleware/validateRequest";
import { categoryValidation } from "../validations/categoryValidation";
import { restrictTo } from "../middleware/restricTo";
import { verifyJWT } from "../middleware/verify";

const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getById);

router.post(
  "/",
  verifyJWT,
  restrictTo("admin"),
  validateRequest(categoryValidation),
  createCategories
);
router.put("/:id", verifyJWT, restrictTo("admin"), updateCategories);
router.delete("/:id", verifyJWT, restrictTo("admin"), deleteCategories);
export default router;
