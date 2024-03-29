const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../contollers/userController");

const { protect } = require("../middleware/authMiddleware");
router.get("/me", protect, getMe);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
