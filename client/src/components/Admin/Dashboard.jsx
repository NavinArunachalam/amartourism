import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-['Inter'] text-lg flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Admin Dashboard
        </h1>

        {/* grid-cols-1 for mobile, grid-cols-2 for larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tour Packages Box */}
          <Link
            to="/admin/tour-packages"
            className="bg-blue-100 hover:bg-blue-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-suitcase"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Tour Packages</h2>
            <p className="text-sm text-gray-600 mt-1">Manage all tour packages</p>
          </Link>

          {/* Daily Deals Box */}
          <Link
            to="/admin/daily-deal"
            className="bg-green-100 hover:bg-green-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-tags"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Daily Deals</h2>
            <p className="text-sm text-gray-600 mt-1">Manage daily deal packages</p>
          </Link>

          {/* Special Offers Box */}
          <Link
            to="/admin/special-offer"
            className="bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="text-4xl text-yellow-600 mb-4">
              <i className="fas fa-star"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Special Offers</h2>
            <p className="text-sm text-gray-600 mt-1">Manage special offer packages</p>
          </Link>

          {/* Reviews Box */}
          <Link
            to="/admin/reviews"
            className="bg-purple-100 hover:bg-purple-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="text-4xl text-purple-600 mb-4">
              <i className="fas fa-comment"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
            <p className="text-sm text-gray-600 mt-1">Manage all reviews</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
