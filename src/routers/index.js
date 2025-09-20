import { Router } from "express";

import productsRouter from "./products";
import userRouter from "./user";
import postsRouter from "./posts";

const router = Router();

router.use("/products", productsRouter);
router.use("/user", userRouter);
router.use("/posts", postsRouter);

export default router;
