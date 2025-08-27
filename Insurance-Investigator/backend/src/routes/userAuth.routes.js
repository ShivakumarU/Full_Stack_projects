import express from "express";
import { createUserAuth, loginUser, getUserAuth } from "../controllers/userAuth.controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", createUserAuth);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getUserAuth);

export default router;
