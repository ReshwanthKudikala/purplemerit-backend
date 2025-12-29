const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const {
  getProfile,
  updateProfile,
  changePassword,
} = require("../controllers/user.controller");

// Protected user routes
router.get("/me", authMiddleware, getProfile);
router.put("/me", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
