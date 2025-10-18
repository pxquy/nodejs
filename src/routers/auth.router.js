import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller";
import { verifyJWT } from "../middleware/verify";
import { restrictTo } from "../middleware/restricTo";
import { getAllUser, profile } from "../controllers/user.controller";
import { validateRequest } from "../middleware/validateRequest";
import {
  signinValidation,
  signupValidation,
} from "../validations/userValidation";

const router = Router();

router.post("/signup", validateRequest(signupValidation), signup);
router.post("/login", validateRequest(signinValidation), signin);

router.get("/profile", verifyJWT, restrictTo("admin", "user"), profile);

router.get("/users", verifyJWT, restrictTo("admin"), getAllUser);
export default router;
