import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const SpecialOffer = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // Fetch tour packages and filter special offers
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all tour packages from the backend
        const response = await axios.get(`${API_URL}/api/tour-packages`, {
          withCredentials: true,
        });
        // Log raw response for debugging
        console.log("API Response:", response.data);
        // Client-side filter to show only specialOffer: true, limited to 4
        const specialOffers = response.data.filter(p => p.specialOffer === true).slice(0, 4);
        setTourPackages(specialOffers);
        if (specialOffers.length === 0) {
          setError("No special offer packages available. Try adding a new one.");
          Toastify({
            text: "No special offer packages available. Try adding a new one.",
            backgroundColor: "orange",
            ...toastConfig,
          }).showToast();
        }
      } catch (err) {
        console.error("Error fetching special offer packages:", err);
        const errorMessage = err.response?.data?.message || "Failed to fetch special offer packages.";
        setError(errorMessage);
        Toastify({
          text: errorMessage,
          backgroundColor: "red",
          ...toastConfig,
        }).showToast();
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  // Filter tour packages by title and departure
  const filteredTourPackages = tourPackages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.departure.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle select all
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredTourPackages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredTourPackages.map((p) => p._id));
    }
  };

  // Toggle individual selection
  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Delete selected tour packages
  const handleDeleteSelected = async () => {
    if (!selectedIds.length) {
      Toastify({
        text: "No tour packages selected",
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} tour package(s)?`)) return;

    try {
      await Promise.all(
        selectedIds.map((id) => axios.delete(`${API_URL}/api/tour-packages/${id}`, { withCredentials: true }))
      );
      setTourPackages(tourPackages.filter((p) => !selectedIds.includes(p._id)));
      setSelectedIds([]);
      Toastify({
        text: "Selected tour packages deleted successfully!",
        backgroundColor: "green",
        ...toastConfig,
      }).showToast();
    } catch (err) {
      console.error("Error deleting tour packages:", err);
      Toastify({
        text: err.response?.data?.message || "Failed to delete selected tour packages.",
        backgroundColor: "red",
        ...toastConfig,
      }).showToast();
    }
  };


  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-lg font-semibold text-gray-700 animate-pulse">Loading special offer packages...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Special Offer Packages</h1>
          <div className="flex gap-3">
            {tourPackages.length < 4 && (
              <Link
                to="/admin/special-offer/add"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                <i className="fas fa-plus"></i> Add Special Package
              </Link>
            )}
            <Link
              to="/admin"
              className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-500"></i>
            </div>
            <input
              type="text"
              placeholder="Search by title or departure..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-gray-50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Select All + Delete */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedIds.length === filteredTourPackages.length && filteredTourPackages.length > 0}
              onChange={toggleSelectAll}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
            />
            <span className="text-sm font-semibold text-gray-700">Select All</span>
          </div>
          <button
            onClick={handleDeleteSelected}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 ${
              selectedIds.length
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedIds.length}
          >
            <i className="fas fa-trash"></i> Delete Selected
          </button>
        </div>

        {/* Tour Package Cards */}
        {filteredTourPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTourPackages.map((tourPackage) => (
              <div
                key={tourPackage._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(tourPackage._id)}
                    onChange={() => toggleSelect(tourPackage._id)}
                    className="mt-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                  <div className="flex-grow">
                    {tourPackage.image ? (
                      <img
                        src={tourPackage.image}
                        className="w-full h-40 object-cover rounded-lg border border-gray-200 mb-4"
                        alt={tourPackage.title}
                      />
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-lg text-gray-400 text-xs font-medium mb-4">
                        No Image
                      </div>
                    )}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-gray-700">Title:</span>{" "}
                          <Link
                            to={`/admin/special-offer/edit/${tourPackage._id}`}
                            className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
                          >
                            {tourPackage.title}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Place:</span>{" "}
                        <span className="text-gray-600">{tourPackage.place}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Duration:</span>{" "}
                        <span className="text-gray-600">{tourPackage.duration || <span className="text-gray-400">N/A</span>}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Rating:</span>{" "}
                        <span className="text-gray-600">{tourPackage.rating || <span className="text-gray-400">N/A</span>}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Departure:</span>{" "}
                        <span className="text-gray-600">{tourPackage.departure}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Created:</span>{" "}
                        <span className="text-gray-600">{new Date(tourPackage.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Highlights:</span>{" "}
                        {tourPackage.highlights.filter((highlight) => highlight.trim() !== "").length > 0 ? (
                          <span className="text-gray-600">{tourPackage.highlights.filter((highlight) => highlight.trim() !== "").join(", ")}</span>
                        ) : (
                          <span className="text-gray-400">No highlights</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <i className="fas fa-box-open text-gray-300 text-5xl mb-3"></i>
            <p className="text-gray-500 text-base font-medium">{error || "No special offer packages found"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialOffer;