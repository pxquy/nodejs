import { Router } from "express";
import {
  getAllUser,
  profile,
  signin,
  signup,
} from "../controllers/auth.controller";
import { verifyJWT } from "../middleware/verify";
import { restrectTo } from "../middleware/restricTo";

const router = Router();

router.post("/signup", signup);
router.post("/login", signin);
router.get("/profile", profile);

router.use(verifyJWT);
router.use(restrectTo("admin"));

router.get("/users", getAllUser);
export default router;
