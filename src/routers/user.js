import { Router } from "express";
import { getAllUser } from "../controllers/user.controller";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.get("/", getAllUser);

export default router;
