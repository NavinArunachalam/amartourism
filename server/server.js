// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const appRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS setup for frontend (Vercel)
app.use(cors({
  origin: process.env.CLIENT_URL || "https://amartourism-client.vercel.app",
  credentials: true,
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// ✅ Routes
appRoutes(app);

app.get("/", (req, res) => res.json({ message: "Backend running ✅" }));

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// ✅ Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("Failed to connect to DB:", err));

module.exports = app;
