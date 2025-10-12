import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const AddReview = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    image: null,
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  // Toastify configuration
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.comment.trim()) {
      setFormError("Comment is required.");
      Toastify({
        text: "Comment is required.",
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
      return;
    }

    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("comment", formData.comment);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      await axios.post(`${API_URL}/api/reviews`, formDataToSend, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData({ name: "", comment: "", image: null });
      setFormError("");
      Toastify({
        text: "Review added successfully!",
        backgroundColor: "green",
        ...toastConfig,
      }).showToast();
      navigate("/admin/reviews");
    } catch (err) {
      console.error(err);
      setFormError("Failed to add review.");
      Toastify({
        text: "Failed to add review.",
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-['Inter'] text-lg">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Add New Review</h1>
          <Link
            to="/admin/reviews"
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-md text-base font-medium transition-colors flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Reviews
          </Link>
        </div>

        {/* Add Review Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="Enter name"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment (Required)
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="Enter comment"
              rows="4"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              disabled={loading}
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className={`w-full md:w-auto px-5 py-3 rounded-md text-base font-medium transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Review"}
            </button>
          </div>
        </form>
        {formError && <p className="mt-2 text-red-600 text-sm">{formError}</p>}
      </div>
    </div>
  );
};

export default AddReview;