const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  imagePublicId: {
    type: String,
    required: false,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdminReview", reviewSchema);