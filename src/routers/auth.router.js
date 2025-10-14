import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller";
import { verifyJWT } from "../middleware/verify";
import { restrectTo } from "../middleware/restricTo";
import { getAllUser, profile } from "../controllers/user.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", signin);

router.get("/profile", verifyJWT, restrectTo("admin", "user"), profile);

router.get("/users", verifyJWT, restrectTo("admin"), getAllUser);
export default router;
