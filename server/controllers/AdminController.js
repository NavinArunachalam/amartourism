const jwt = require("jsonwebtoken");
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || "supersecretadmin";

// Hardcoded admin credentials (use env vars in production)
const ADMIN_CREDENTIALS = {
  username: "amartourism",
  password: "amartorism1234",
  name: "Admin User",
};

// ------------------- LOGIN ADMIN -------------------
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        adminId: "admin-123",
        name: ADMIN_CREDENTIALS.name,
        username: ADMIN_CREDENTIALS.username,
      },
      ADMIN_JWT_SECRET,
      { expiresIn: "10y" }
    );

    // ✅ Cookie settings for Vercel cross-origin
    res.cookie("admin_jwt", token, {
      httpOnly: true,
      secure: true, // ✅ required for HTTPS (Vercel)
      sameSite: "none", // ✅ required for cross-site cookies
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
    });

    res.status(200).json({
      message: "Admin login successful",
      admin: {
        name: ADMIN_CREDENTIALS.name,
        username: ADMIN_CREDENTIALS.username,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------- VERIFY TOKEN (Middleware) -------------------
const verifyAdmin = (req, res, next) => {
  const token = req.cookies.admin_jwt;
  if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

  try {
    const decoded = jwt.verify(token, ADMIN_JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// ------------------- GET ADMIN PROFILE -------------------
const getAdminProfile = (req, res) => {
  const admin = req.admin;
  if (!admin) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ admin });
};

// ------------------- LOGOUT ADMIN -------------------
const logoutAdmin = (req, res) => {
  res.clearCookie("admin_jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.status(200).json({ message: "Admin logged out" });
};

module.exports = {
  loginAdmin,
  logoutAdmin,
  getAdminProfile,
  verifyAdmin,
};
