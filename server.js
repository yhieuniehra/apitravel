const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Kết nối MongoDB
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());



// Routes
const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});