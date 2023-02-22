import { protect } from "../middleware/authMiddleware";

const express = require("express");
const userController = require("../controllers/userController.ts")

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile:userId", protect, userController.getUserProfile);

module.exports = router;