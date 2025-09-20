import express from "express";
import dotenv from "dotenv";

import router from "./routers/index";
import productsRouter from "./routers/products";
import userRouter from "./routers/user";
import postsRouter from "./routers/posts";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use("/api/posts", router);
app.use("/api", productsRouter);
app.use("/api", userRouter);
app.use("/api", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
