import express from "express";
import dotenv from "dotenv";

import router from "./routers/index";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("Chào mừng trở lại");
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
