const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const {
  getAllUsers,
  activateUser,
  deactivateUser,
} = require("../controllers/admin.controller");

// Admin-only routes
router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  getAllUsers
);

router.put(
  "/users/:id/activate",
  authMiddleware,
  roleMiddleware("admin"),
  activateUser
);

router.put(
  "/users/:id/deactivate",
  authMiddleware,
  roleMiddleware("admin"),
  deactivateUser
);

module.exports = router;
