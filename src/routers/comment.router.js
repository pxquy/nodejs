import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComment,
  getById,
  getByIdProductComment,
  updateComment,
} from "../controllers/comment.controller";
import { validateRequest } from "../middleware/validateRequest";
import {
  commentUpdateValidate,
  commentValidation,
} from "../validations/commentValidation";

const router = Router();
router.get("/", getAllComment);
router.get("/:id", getById);

router.get(
  "/product/:id",
  validateRequest(commentValidation),
  getByIdProductComment
);
router.post("/", validateRequest(commentUpdateValidate), createComment);
router.put("/:id", validateRequest(commentUpdateValidate), updateComment);
router.delete("/:id", deleteComment);
export default router;
