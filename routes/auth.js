import express from "express";
import {
  registerUser,
  loginUser,
  getUserDetails,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/user", authMiddleware, getUserDetails);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
