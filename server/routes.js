// routes/index.js

const tourPackageUpload = require("../config/multer");
const tourPackageController = require("../controllers/TourPackageController");
const { loginAdmin, logoutAdmin, getAdminProfile } = require("../controllers/AdminController");
const { isAdmin } = require("./AdminAuth"); 

module.exports = (app) => {
  // ------------------- ADMIN AUTH ROUTES -------------------
  app.post("/api/admin/login", loginAdmin);
  app.get("/api/admin/profile", isAdmin, getAdminProfile);
  app.post("/api/admin/logout", isAdmin, logoutAdmin);

  // ------------------- TOUR PACKAGE ROUTES -------------------
  app.get("/api/tour-packages", tourPackageController.getTourPackages);
  app.get("/api/tour-packages/:id", tourPackageController.getTourPackageById);
  app.post(
    "/api/tour-packages",
    isAdmin,
    tourPackageUpload.single("image"),
    tourPackageController.createTourPackage
  );
  app.put(
    "/api/tour-packages/:id",
    isAdmin,
    tourPackageUpload.single("image"),
    tourPackageController.updateTourPackage
  );
  app.delete("/api/tour-packages/:id", isAdmin, tourPackageController.deleteTourPackage);

  // ------------------- REVIEW ROUTES -------------------
  app.get("/api/reviews", tourPackageController.getReviews);
  app.post("/api/reviews", tourPackageUpload.single("image"), tourPackageController.addReview);
  app.delete("/api/reviews/:reviewId", isAdmin, tourPackageController.deleteReview);
};
