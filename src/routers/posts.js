import { Router } from "express";
import { getAllPosts } from "../controllers/posts.controller";

const router = Router();

router.get("/", getAllPosts);

export default router;
