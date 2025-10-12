const TourPackageService = require('../services/TourPackageService');

// GET /api/tour-packages
const getTourPackages = async (req, res, next) => {
  try {
    const tourPackages = await TourPackageService.getTourPackages();
    res.json(tourPackages);
  } catch (error) {
    next(error);
  }
};

// POST /api/tour-packages
const createTourPackage = async (req, res, next) => {
  try {
    const file = req.file; // Single file for image

    const tourPackageData = {
      ...req.body,
    };

    const tourPackage = await TourPackageService.createTourPackage(tourPackageData, file);
    res.status(201).json(tourPackage);
  } catch (error) {
    next(error);
  }
};

// PUT /api/tour-packages/:id
const updateTourPackage = async (req, res, next) => {
  try {
    const file = req.file; // Single file for image
    const { image, imagePublicId } = req.body;

    const tourPackageData = {
      ...req.body,
      image: image || "", // Existing image URL if provided
      imagePublicId: imagePublicId || "", // Existing public ID if provided
    };

    const tourPackage = await TourPackageService.updateTourPackage(req.params.id, tourPackageData, file);
    if (!tourPackage) {
      return res.status(404).json({ message: "Tour package not found" });
    }
    res.json(tourPackage);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/tour-packages/:id
const deleteTourPackage = async (req, res, next) => {
  try {
    const tourPackage = await TourPackageService.deleteTourPackage(req.params.id);
    if (!tourPackage) {
      return res.status(404).json({ message: "Tour package not found" });
    }
    res.json({ message: 'Tour package deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// GET /api/tour-packages/:id
const getTourPackageById = async (req, res, next) => {
  try {
    const tourPackage = await TourPackageService.getTourPackageById(req.params.id);
    if (!tourPackage) {
      return res.status(404).json({ message: "Tour package not found" });
    }
    res.json(tourPackage);
  } catch (error) {
    next(error);
  }
}

const addReview = async (req, res, next) => {
  try {
    console.log("Controller: Add review req.body:", req.body); // Debug
    console.log("Controller: Add review req.file:", req.file); // Debug
    const file = req.file;
    const review = await TourPackageService.addReview(req.body, file);
    res.status(201).json(review);
  } catch (error) {
    console.error("Controller: Add review error:", error.message); // Debug
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res, next) => {
  try {
    console.log("Controller: Delete review req.params:", req.params); // Debug
    const result = await TourPackageService.deleteReview(req.params.reviewId);
    res.json(result);
  } catch (error) {
    console.error("Controller: Delete review error:", error.message); // Debug
    res.status(400).json({ message: error.message });
  }
};

const getReviews = async (req, res, next) => {
  try {
    console.log("Controller: Get all reviews"); // Debug
    const reviews = await TourPackageService.getAllReviews();
    res.json(reviews);
  } catch (error) {
    console.error("Controller: Get reviews error:", error.message); // Debug
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getTourPackages,
  createTourPackage,
  updateTourPackage,
  deleteTourPackage,
  getTourPackageById,
  addReview,
  deleteReview,
  getReviews
};