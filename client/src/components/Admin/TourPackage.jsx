import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const TourPackages = () => {
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

  // Fetch all tour packages and filter client-side
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/tour-packages`, {
          withCredentials: true,
        });
        const filteredPackages = response.data.filter(
          p =>
            ["Group Tour", "Honeymoon"].includes(p.groupSize) &&
            p.specialOffer !== true &&
            p.dailyDeal !== true
        );
        setTourPackages(filteredPackages);
      } catch (err) {
        console.error("Error fetching tour packages:", err);
        const errorMessage = err.response?.data?.message || "Failed to fetch group tours and honeymoon packages.";
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
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.place.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle select all
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredTourPackages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredTourPackages.map(p => p._id));
    }
  };

  // Toggle individual selection
  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
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
        selectedIds.map(id =>
          axios.delete(`${API_URL}/api/tour-packages/${id}`, { withCredentials: true })
        )
      );
      setTourPackages(tourPackages.filter(p => !selectedIds.includes(p._id)));
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

  if (loading) return <div className="p-8 text-center text-lg font-['Inter'] text-gray-700">Loading group tours and honeymoon packages...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-['Inter'] text-lg">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Group Tours & Honeymoon Packages</h1>
          <div className="flex gap-4">
            <Link
              to="/admin/tour-packages/add"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-base font-medium transition-colors flex items-center"
            >
              <i className="fas fa-plus mr-2"></i> Add Tour Package
            </Link>
            <Link
              to="/admin/dashboard"
              className="bg-gray-600 hover:bg-grey-700 text-white px-5 py-3 rounded-md text-base font-medium transition-colors flex items-center"
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Search by title or place..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>
        </div>

        {/* Select All + Delete */}
        <div className="flex items-center justify-between mb-4 text-base">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedIds.length === filteredTourPackages.length && filteredTourPackages.length > 0}
              onChange={toggleSelectAll}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 font-medium text-gray-700">Select All</span>
          </div>
          <button
            onClick={handleDeleteSelected}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium ${
              selectedIds.length
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedIds.length}
          >
            <i className="fas fa-trash"></i> Delete Selected
          </button>
        </div>

        {/* Tour Package Table */}
        <div className="border border-gray-200 rounded-md overflow-hidden text-base">
          {filteredTourPackages.length > 0 ? (
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4 border-b text-left">Select</th>
                  <th className="p-4 border-b text-left">Place</th>
                  <th className="p-4 border-b text-left">Image</th>
                  <th className="p-4 border-b text-left">Title</th>
                  <th className="p-4 border-b text-left">Group Type</th>
                  <th className="p-4 border-b text-left">Duration</th>
                  <th className="p-4 border-b text-left">Rating</th>
                  <th className="p-4 border-b text-left">Departure</th>
                  <th className="p-4 border-b text-left">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTourPackages.map(tourPackage => (
                  <tr key={tourPackage._id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(tourPackage._id)}
                        onChange={() => toggleSelect(tourPackage._id)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="p-4">{tourPackage.place}</td>
                    <td className="p-4">
                      {tourPackage.image ? (
                        <img
                          src={tourPackage.image}
                          className="w-16 h-16 object-cover rounded-md border border-gray-200"
                          alt={tourPackage.title}
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/admin/tour-packages/edit/${tourPackage._id}`}
                        className="text-blue-600 font-medium hover:text-blue-800 capitalize"
                      >
                        {tourPackage.title}
                      </Link>
                    </td>
                    <td className="p-4">{tourPackage.groupSize}</td>
                    <td className="p-4">{tourPackage.duration || <span className="text-gray-400">N/A</span>}</td>
                    <td className="p-4">{tourPackage.rating || <span className="text-gray-400">N/A</span>}</td>
                    <td className="p-4">{tourPackage.departure}</td>
                    <td className="p-4">
                      {tourPackage.highlights && tourPackage.highlights.filter((highlight) => highlight.trim() !== "").length > 0 ? (
                        tourPackage.highlights.filter((highlight) => highlight.trim() !== "").join(", ")
                      ) : (
                        <span className="text-gray-400">No highlights</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center">
              <i className="fas fa-box-open text-gray-300 text-5xl mb-2"></i>
              <p className="text-gray-500 text-lg">{error || "No group tours or honeymoon packages found"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;