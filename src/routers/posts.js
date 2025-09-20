import { Router } from "express";

const router = Router();

router.get("/posts", (req, res) => {
  res.send(`posts`);
});

export default router;
