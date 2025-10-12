const jwt = require("jsonwebtoken");
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || "supersecretadmin";

const isAdmin = (req, res, next) => {
  try {
    const token = req.cookies?.admin_jwt; // Read from cookie
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, ADMIN_JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.admin = decoded; // Attach decoded payload to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { isAdmin };