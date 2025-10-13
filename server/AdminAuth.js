// AdminAuth.js
const jwt = require("jsonwebtoken");
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || "supersecretadmin";

exports.isAdmin = (req, res, next) => {
  try {
    const token = req.cookies.admin_jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const decoded = jwt.verify(token, ADMIN_JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};
