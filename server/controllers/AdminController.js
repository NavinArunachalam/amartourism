const jwt = require("jsonwebtoken");
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || "supersecretadmin";

// Hardcoded admin credentials (for demo purposes; in production, use environment variables or a secure method)
const ADMIN_CREDENTIALS = {
  username: "amartourism",
  password: "amartorism1234", // In a real app, hash this password (e.g., using bcrypt)
  name: "Admin User"
};

// ------------------- LOGIN ADMIN -------------------
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the provided credentials match the hardcoded admin credentials
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { adminId: "admin-123", name: ADMIN_CREDENTIALS.name, username: ADMIN_CREDENTIALS.username },
      ADMIN_JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send token in HTTP-only cookie
    res.cookie("admin_jwt", token, {
      httpOnly: true,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years (adjust as needed)
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      message: "Admin login successful",
      admin: { name: ADMIN_CREDENTIALS.name, username: ADMIN_CREDENTIALS.username },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------- GET ADMIN PROFILE -------------------
const getAdminProfile = (req, res) => {
  const admin = req.admin; // Set by JWT middleware
  if (!admin) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json({ admin });
};

// ------------------- LOGOUT ADMIN -------------------
const logoutAdmin = (req, res) => {
  // Clear the cookie
  res.clearCookie("admin_jwt", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({ message: "Admin logged out" });
};

module.exports = {
  loginAdmin,
  logoutAdmin,
  getAdminProfile,
};