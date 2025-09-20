import { Router } from "express";

const router = Router();

router.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`Xin chào ${name}`);
});

router.get("/sum", (req, res) => {
  const a = parseInt(req.query.a, 10) || 0;
  const b = parseInt(req.query.b, 10) || 0;
  const c = a + b;
  return res.send(`tổng của: ${a} + ${b} là ${c}`);
});

export default router;
