import { Router } from "express";

import productsRouter from "./products.router";
import userRouter from "./user";
import postsRouter from "./posts";

const router = Router();

const logRequestTime = (req, res, next) => {
  console.log(`Request received at: ${new Date().toLocaleTimeString()}`);
  next();
};

router.use("/products", logRequestTime, productsRouter);
router.use("/user", userRouter);
router.use("/posts", postsRouter);

export default router;
