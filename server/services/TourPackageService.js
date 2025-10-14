const TourPackage = require("../models/Tour");
const Review = require("../models/AdminReview");
const {
  uploadSingleFile,
  formatSingleResponse,
  deleteFile,
} = require("../services/UploadService");

const getTourPackages = async () => {
  try {
    return await TourPackage.find().sort({ createdAt: -1 });
  } catch (error) {
    throw new Error("Failed to fetch tour packages: " + error.message);
  }
};

const createTourPackage = async (data, file) => {
  try {
    console.log("Service: Incoming data:", JSON.stringify(data, null, 2)); // Debug
    let imageData = { url: "", public_id: "" };

    if (file) {
      console.log("Service: File received:", file.originalname); // Debug
      const uploadedFile = await uploadSingleFile(file.buffer);
      imageData = formatSingleResponse(uploadedFile);
    }

    // Parse highlights from data.highlights
    const highlights = data.highlights
      ? Array.isArray(data.highlights)
        ? data.highlights.map((h) => h.trim()).filter((h) => h)
        : [data.highlights].map((h) => h.trim()).filter((h) => h)
      : [];

    console.log("Service: Parsed highlights:", highlights); // Debug

    if (highlights.length === 0) {
      throw new Error("At least one highlight is required.");
    }

    if (data.specialOffer === "true" || data.specialOffer === true) {
      const specialOfferCount = await TourPackage.countDocuments({ specialOffer: true });
      if (specialOfferCount >= 4) {
        throw new Error("Cannot add more than 4 special offer packages.");
      }
    }

    const tourPackage = new TourPackage({
      place: data.place || "",
      title: data.title || "",
      image: imageData.url || data.image || "",
      imagePublicId: imageData.public_id || "",
      duration: data.duration || "",
      groupSize: data.groupSize || "",
      rating: data.rating || "",
      highlights,
      departure: data.departure || "",
      specialOffer: data.specialOffer === "true" || data.specialOffer === true,
      dailyDeal: data.dailyDeal === "true" || data.dailyDeal === true,
    });

    return await tourPackage.save();
  } catch (error) {
    console.error("Service: Create error:", error.message); // Debug
    throw new Error("Failed to create tour package: " + error.message);
  }
};

const updateTourPackage = async (id, data, file) => {
  try {
    console.log("Service: Update data:", JSON.stringify(data, null, 2)); // Debug
    let imageData = { url: data.image || "", public_id: data.imagePublicId || "" };

    if (file) {
      console.log("Service: File received:", file.originalname); // Debug
      if (data.imagePublicId) {
        await deleteFile(data.imagePublicId);
      }
      const uploadedFile = await uploadSingleFile(file.buffer);
      imageData = formatSingleResponse(uploadedFile);
    }

    // Parse highlights from data.highlights
    const highlights = data.highlights
      ? Array.isArray(data.highlights)
        ? data.highlights.map((h) => h.trim()).filter((h) => h)
        : [data.highlights].map((h) => h.trim()).filter((h) => h)
      : [];

    console.log("Service: Parsed highlights (update):", highlights); // Debug

    if (highlights.length === 0) {
      throw new Error("At least one highlight is required.");
    }

    const updatedData = {
      place: data.place || "",
      title: data.title || "",
      image: imageData.url || data.image || "",
      imagePublicId: imageData.public_id || "",
      duration: data.duration || "",
      groupSize: data.groupSize || "",
      rating: data.rating || "",
      highlights,
      departure: data.departure || "",
      specialOffer: data.specialOffer === "true" || data.specialOffer === true,
      dailyDeal: data.dailyDeal === "true" || data.dailyDeal === true,
    };

    const tourPackage = await TourPackage.findByIdAndUpdate(id, updatedData, { new: true });
    if (!tourPackage) {
      throw new Error("Tour package not found");
    }
    return tourPackage;
  } catch (error) {
    console.error("Service: Update error:", error.message); // Debug
    throw new Error("Failed to update tour package: " + error.message);
  }
};

const deleteTourPackage = async (id) => {
  try {
    const tourPackage = await TourPackage.findById(id);
    if (!tourPackage) {
      throw new Error("Tour package not found");
    }
    if (tourPackage.imagePublicId) {
      await deleteFile(tourPackage.imagePublicId);
    }
    return await TourPackage.findByIdAndDelete(id);
  } catch (error) {
    console.error("Service: Delete error:", error.message); // Debug
    throw new Error("Failed to delete tour package: " + error.message);
  }
};

const getTourPackageById = async (id) => {
  try {
    const tourPackage = await TourPackage.findById(id);
    if (!tourPackage) {
      throw new Error("Tour package not found");
    }
    return tourPackage;
  } catch (error) {
    console.error("Service: Get by ID error:", error.message); // Debug
    throw new Error("Failed to fetch tour package: " + error.message);
  }
};

const toggleSpecialOffer = async (id) => {
  try {
    const tourPackage = await TourPackage.findById(id);
    if (!tourPackage) {
      throw new Error("Tour package not found");
    }
    tourPackage.specialOffer = !tourPackage.specialOffer;
    return await tourPackage.save();
  } catch (error) {
    console.error("Service: Toggle special offer error:", error.message); // Debug
    throw new Error("Failed to toggle special offer: " + error.message);
  }
};

const toggleDailyDeal = async (id) => {
  try {
    const tourPackage = await TourPackage.findById(id);
    if (!tourPackage) {
      throw new Error("Tour package not found");
    }
    tourPackage.dailyDeal = !tourPackage.dailyDeal;
    return await tourPackage.save();
  } catch (error) {
    console.error("Service: Toggle daily deal error:", error.message); // Debug
    throw new Error("Failed to toggle daily deal: " + error.message);
  }
};

const addReview = async (reviewData, file) => {
  try {
    console.log("Service: Adding review:", JSON.stringify(reviewData, null, 2)); // Debug
    // Validate review data
    if (!reviewData.comment || reviewData.comment.trim() === "") {
      throw new Error("Comment is required for a review.");
    }

    let imageData = { url: "", public_id: "" };
    if (file) {
      console.log("Service: Review file received:", file.originalname); // Debug
      const uploadedFile = await uploadSingleFile(file.buffer);
      imageData = formatSingleResponse(uploadedFile);
    }

    const review = new Review({
      name: reviewData.name ? reviewData.name.trim() : "",
      comment: reviewData.comment.trim(),
      image: imageData.url || "",
      imagePublicId: imageData.public_id || "",
    });

    return await review.save();
  } catch (error) {
    console.error("Service: Add review error:", error.message); // Debug
    throw new Error("Failed to add review: " + error.message);
  }
};

const deleteReview = async (reviewId) => {
  try {
    console.log("Service: Deleting review:", reviewId); // Debug
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error("Review not found");
    }

    // Delete review image if it exists
    if (review.imagePublicId) {
      await deleteFile(review.imagePublicId);
    }

    await Review.findByIdAndDelete(reviewId);
    return { message: "Review deleted successfully" };
  } catch (error) {
    console.error("Service: Delete review error:", error.message); // Debug
    throw new Error("Failed to delete review: " + error.message);
  }
};

const getAllReviews = async () => {
  try {
 
    return await Review.find().sort({ createdAt: -1 });
  } catch (error) {
    throw new Error("Failed to fetch reviews: " + error.message);
  }
};

module.exports = {
  getTourPackages,
  createTourPackage,
  updateTourPackage,
  deleteTourPackage,
  getTourPackageById,
  toggleSpecialOffer,
  toggleDailyDeal,
  addReview,
  deleteReview,
  getAllReviews,
};