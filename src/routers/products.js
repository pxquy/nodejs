import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller";

const router = Router();

router.get("/", getAllProducts);

export default router;
