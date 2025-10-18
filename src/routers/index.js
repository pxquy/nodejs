import { Router } from "express";

import productsRouter from "./products.router";
import userRouter from "./user";
import postsRouter from "./posts";
import authorRouter from "./author.router";
import authRouter from "./auth.router";
import authCategory from "./category.router";
import commentRouter from "./comment.router";

const router = Router();

const logRequestTime = (req, res, next) => {
  console.log(`Request received at: ${new Date().toLocaleTimeString()}`);
  next();
};

router.use("/products", logRequestTime, productsRouter);
router.use("/user", userRouter);
router.use("/posts", postsRouter);
router.use("/author", authorRouter);
router.use("/auth", authRouter);
router.use("/category", authCategory);
router.use("/comments", commentRouter);

export default router;
