import express from "express";
import dotenv from "dotenv";
import DBConnect from "./config/database";
import router from "./routers/index";

dotenv.config();
DBConnect();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json(`Chào mừng trở lại`);
});
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
