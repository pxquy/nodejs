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
import { restrectTo } from "../middleware/restricTo";
import { verifyJWT } from "../middleware/verify";

const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getById);

router.use(verifyJWT);
router.use(restrectTo("admin"));

router.post("/", validateRequest(categoryValidation), createCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);
export default router;
