import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const packagePlaces = [
  "andaman", "australia", "azerbaijan", "bali", "bhutan", "delhi", "dubai",
  "europe", "japan", "kazakhstan", "lakshadweep", "malaysia", "maldives",
  "manali", "munnar", "newzealand", "ooty", "scandinavia", "singapore",
  "srilanka", "thailand", "vietnam", "wayanad",
];

const groupSizeOptions = ["Group Tour", "Honeymoon"];

const AddDailyDeal = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    place: "",
    title: "",
    image: null,
    imagePreview: "",
    duration: "",
    groupSize: "",
    rating: "",
    highlights: "",
    departure: "",
    dailyDeal: true, // Default to true for Daily Deal
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const toastConfig = {
    duration: 3000,
    position: "top-center",
    style: {
      height: "60px",
      lineHeight: "60px",
      fontSize: "16px",
      padding: "0 20px",
      borderRadius: "8px",
      color: "#fff",
    },
  };

  useEffect(() => {
    return () => {
      if (formData.imagePreview) URL.revokeObjectURL(formData.imagePreview);
    };
  }, [formData.imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, image: "Please select a valid image file." }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: "Image size must be less than 5MB." }));
        return;
      }
    }
    setErrors((prev) => ({ ...prev, image: "" }));
    setFormData({
      ...formData,
      image: file || null,
      imagePreview: file ? URL.createObjectURL(file) : "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.place) newErrors.place = "Place is required.";
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.groupSize) newErrors.groupSize = "Group size is required.";
    const highlightsArray = formData.highlights
      .split(",")
      .map((h) => h.trim())
      .filter((h) => h);
    if (highlightsArray.length === 0) {
      newErrors.highlights = "At least one highlight is required (e.g., Sharjah, Abu Dhabi).";
    }
    if (!formData.departure) newErrors.departure = "Departure is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      Toastify({
        text: "Please fix the form errors.",
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
      return;
    }

    try {
      const highlightsArray = formData.highlights
        .split(",")
        .map((h) => h.trim())
        .filter((h) => h);

      const formDataToSend = new FormData();
      formDataToSend.append("place", formData.place);
      formDataToSend.append("title", formData.title);
      if (formData.image) formDataToSend.append("image", formData.image);
      formDataToSend.append("duration", formData.duration);
      formDataToSend.append("groupSize", formData.groupSize);
      formDataToSend.append("rating", formData.rating);
      highlightsArray.forEach((highlight) => formDataToSend.append("highlights[]", highlight));
      formDataToSend.append("departure", formData.departure);
      formDataToSend.append("dailyDeal", "true");
      formDataToSend.append("specialOffer", "false"); // Differentiate from special offer

      // Log FormData for debugging
      console.log("FormData entries before sending:");
      const formDataEntries = [];
      for (let [key, value] of formDataToSend.entries()) {
        formDataEntries.push([key, value instanceof File ? `File: ${value.name} (${value.size} bytes)` : value]);
      }
      console.table(formDataEntries);

      const response = await axios.post(`${API_URL}/api/tour-packages`, formDataToSend, {
        withCredentials: true,
        headers: {
          // Let browser set Content-Type for multipart/form-data
        },
      });

      console.log("Server response:", response.data);

      Toastify({
        text: "Daily deal package added successfully!",
        backgroundColor: "green",
        ...toastConfig,
      }).showToast();

      navigate("/admin/daily-deal");
    } catch (err) {
      console.error("Error creating daily deal package:", err);
      const errorMessage =
        err.response?.data?.message || "Failed to add daily deal package. Please try again.";
      setErrors({ general: errorMessage });
      Toastify({
        text: errorMessage,
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-['Inter'] text-lg">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Add Daily Deal Package</h1>
          <Link to="/admin/daily-deal" className="text-gray-500 hover:text-gray-700 text-2xl">
            <i className="fas fa-times"></i>
          </Link>
        </div>

        {errors.general && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-base">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Place</label>
            <select
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            >
              <option value="">Select a place</option>
              {packagePlaces.map((place) => (
                <option key={place} value={place}>
                  {place.charAt(0).toUpperCase() + place.slice(1)}
                </option>
              ))}
            </select>
            {errors.place && (
              <p className="mt-1 text-sm text-red-600">{errors.place}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Tour Package Title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Tour Package Image</label>
            <div className="mt-1 flex items-center gap-2">
              <label
                htmlFor="image-upload"
                className="cursor-pointer bg-white py-3 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className="fas fa-upload mr-2"></i> Choose File
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="sr-only"
              />
            </div>
            <div className="mt-2">
              {formData.imagePreview ? (
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-md border border-gray-200"
                />
              ) : (
                <span className="text-gray-500">No file chosen</span>
              )}
            </div>
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="Duration (e.g., 4 Nights or 5 Days)"
              value={formData.duration}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
            {errors.duration && (
              <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Group Size</label>
            <select
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            >
              <option value="">Select group size</option>
              {groupSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.groupSize && (
              <p className="mt-1 text-sm text-red-600">{errors.groupSize}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating (e.g., 4.9)"
              value={formData.rating}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
            {errors.rating && (
              <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Highlights (comma-separated)</label>
            <input
              type="text"
              name="highlights"
              placeholder="Highlights (e.g., Sharjah, Abu Dhabi, Dubai)"
              value={formData.highlights}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
            {errors.highlights && (
              <p className="mt-1 text-sm text-red-600">{errors.highlights}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Departure</label>
            <input
              type="text"
              name="departure"
              placeholder="Departure (e.g., Chennai)"
              value={formData.departure}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
            {errors.departure && (
              <p className="mt-1 text-sm text-red-600">{errors.departure}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-base ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i> Adding...
                </>
              ) : (
                <>
                  <i className="fas fa-plus mr-2"></i> Add Daily Deal Package
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDailyDeal;