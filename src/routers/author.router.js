import { Router } from "express";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getById,
  updateAuthor,
} from "../controllers/author.controller";
import { validateRequest } from "../middleware/validateRequest";
import {
  authorValidation,
  authorValidationUpdate,
} from "../validations/authorValidation";

const router = Router();

router.get("/", getAllAuthors);
router.get("/:id", getById);
router.post("/", validateRequest(authorValidation), createAuthor);
router.put("/:id", validateRequest(authorValidationUpdate), updateAuthor);
router.delete("/:id", deleteAuthor);

export default router;
