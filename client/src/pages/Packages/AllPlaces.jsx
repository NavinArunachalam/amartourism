import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoOpenOutline } from 'react-icons/io5';
import axios from 'axios';
import './cards.css'; // Assuming the same CSS file is used for styling

const AllPlaces = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages`);
        const allTours = response.data.map(p => ({
          id: p._id,
          place: p.place?.toLowerCase() || 'unknown',
          image: p.image || 'https://via.placeholder.com/400',
          title: p.title || 'No Title'
        }));
        setTours(allTours);
      } catch (err) {
        setError(`Failed to fetch tours: ${err.message}`);
        console.error('Error fetching tours:', err);
        if (err.response) {
          console.log('Error Response:', err.response.data);
          console.log('Error Status:', err.response.status);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [API_URL]);

  const handleNavigate = (place) => {
    console.log(`Navigating to: /details/${place}`);
    navigate(`/details/${place}`);
  };

  if (loading) return <div className="container mx-auto px-4 py-20">Loading tours...</div>;
  if (error) return <div className="container mx-auto px-4 py-20">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Amar Tourism All Packages
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of travel packages designed for unforgettable adventures across the globe.
        </p>
      </div>
      <section id="content" className="card-section">
        {tours.map((card) => (
          <div key={card.id} className="card">
            <img
              className="card-img"
              src={card.image}
              alt={`${card.title} image`}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }}
            />
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <div className="more">
              <button
                className="modal-open"
                onClick={() => handleNavigate(card.place)}
              >
                more
                <IoOpenOutline className="open-icon" />
              </button>
            </div>
          </div>
        ))}
        {tours.length === 0 && !loading && (
          <p>No tours available.</p>
        )}
      </section>
    </div>
  );
};

export const DetailPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchTour = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages/${id}`);
        setCard({
          id: response.data._id,
          image: response.data.image || 'https://via.placeholder.com/400',
          title: response.data.title || 'No Title'
        });
      } catch (err) {
        setError(`Failed to fetch tour: ${err.message}`);
        console.error('Error fetching tour:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id, API_URL]);

  if (loading) return <div className="container mx-auto px-4 py-20">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-20">Error: {error}</div>;
  if (!card) return <div className="container mx-auto px-4 py-20">Package not found</div>;

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{card.title}</h1>
      <img
        className="w-full max-w-md mx-auto rounded-lg mb-4"
        src={card.image}
        alt={`${card.title} image`}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }}
      />
      <p className="text-lg text-gray-600">Details about {card.title} go here.</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => window.history.back()}
      >
        Back to Packages
      </button>
    </div>
  );
};

export default AllPlaces;