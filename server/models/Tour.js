const mongoose = require("mongoose");

const TourPackageSchema = new mongoose.Schema({
  place: { type: String, required: [true, "Place is required"] },
  title: { type: String, required: [true, "Title is required"] },
  image: { type: String },
  imagePublicId: { type: String },
  duration: { type: String, required: [true, "Duration is required"] },
  groupSize: { type: String, required: [true, "Group size is required"] },
  rating: { type: String, required: [true, "Rating is required"] },
  highlights: {
    type: [{ type: String, trim: true }],
    required: [true, "At least one highlight is required"],
    validate: {
      validator: (arr) => arr.length > 0,
      message: "At least one highlight is required",
    },
  },
  departure: { type: String, required: [true, "Departure is required"] },
  specialOffer: { type: Boolean, default: false },
  dailyDeal: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` on save
TourPackageSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const TourPackage = mongoose.models.TourPackage || mongoose.model("TourPackage", TourPackageSchema);
module.exports = TourPackage;