const User = require("../models/user.model");

/**
 * @route   GET /api/admin/users
 * @desc    Get all users with pagination
 * @access  Admin
 */
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select("-password")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalUsers = await User.countDocuments();

    return res.status(200).json({
      success: true,
      data: users,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

/**
 * @route   PUT /api/admin/users/:id/activate
 * @desc    Activate a user account
 * @access  Admin
 */
const activateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status: "active" },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User activated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to activate user",
    });
  }
};

/**
 * @route   PUT /api/admin/users/:id/deactivate
 * @desc    Deactivate a user account
 * @access  Admin
 */
const deactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status: "inactive" },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to deactivate user",
    });
  }
};

module.exports = {
  getAllUsers,
  activateUser,
  deactivateUser,
};
