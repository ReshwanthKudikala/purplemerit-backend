const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
