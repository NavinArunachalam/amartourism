import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoOpenOutline } from 'react-icons/io5';
import axios from 'axios';
import './cards.css';

const CardSection = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        console.log('Fetching from:', `${API_URL}/api/tour-packages`);
        const response = await axios.get(`${API_URL}/api/tour-packages`);
        const allTours = response.data.filter(p => p.groupSize === 'Group Tour');
        console.log('Filtered Group Tours:', allTours);
        setTours(allTours.map(p => ({
          id: p._id,
          place: p.place?.toLowerCase() || 'unknown',
          image: p.image || 'https://via.placeholder.com/400',
          title: p.title || 'No Title'
        })));
      } catch (err) {
        setError(`Failed to fetch tours: ${err.message}`);
        console.error('Error fetching group tours:', err);
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

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="content" className="card-section">
      <h2 className="content-heading">Must Visit Places</h2>
      {tours.map((card) => (
        <div key={card.id} className="card">
          <img
            className="card-img"
            src={card.image}
            alt={`${card.title} image`}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; console.log(`Image failed to load: ${card.image}`); }}
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
        <p>No group tours available.</p>
      )}
      <div className="view-all-container">
        <Link to="/all-places">
          <button className="button explore">View All</button>
        </Link>
      </div>
    </section>
  );
};

export default CardSection;