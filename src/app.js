import express from "express";
import dotenv from "dotenv";

import router from "./routers/index";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use("/api/posts", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
