const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Định nghĩa hàm connectDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};
// Xuất hàm connectDB
module.exports = connectDB;
