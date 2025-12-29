const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MongoDB URI is missing");
    }

    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);// 
  }
};

module.exports = connectDB;
