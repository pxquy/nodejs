import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
  res.send(`user`);
});

export default router;
