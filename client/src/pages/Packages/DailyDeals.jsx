import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './DailyDeals.module.css';

const routeMap = {
  dubai: '/dubai',
    europe: '/europe',
    andaman: '/andaman',
    thailand: '/thailand-4n',
    malaysia: '/malaysia',
    singapore: '/singapore',
    bali: '/bali-4n',
    vietnam: '/enchanting-vietnam-5n6d',
    australia: '/australia',
    azerbaijan: '/azerbaijan',
    bhutan: '/bhutan',
    delhi: '/delhi',
    japan: '/japan',
    kazakhstan: '/kazakhstan',
    lakshadweep: '/lakshadweep',
    maldives: '/maldives',
    manali: '/kullu-manali',
    munnar: '/munnar',
    newzealand: '/new-zealand',
    ooty: '/ooty-3n4d',
    scandinavia: '/scandinavia',
    srilanka: '/sri-lanka',
    wayanad: '/wayanad'
};

const DailyDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages`, { withCredentials: true });
        const dailyDeals = response.data
          .filter(p => p.dailyDeal === true)
          .map(p => ({
            id: p._id,
            place: p.place?.toLowerCase() || (p.title ? Object.keys(routeMap).find(key => p.title.toLowerCase().includes(key)) : 'unknown'),
            image: p.image || 'https://via.placeholder.com/400',
            heading: p.title || 'No Title'
          }));
        console.log('Filtered Daily Deals:', dailyDeals);
        setDeals(dailyDeals);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching daily deals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [API_URL]);

  const handleCardClick = (place) => {
    const route = routeMap[place];
    if (route) {
      navigate(route);
    } else {
      console.warn(`No route found for place: ${place}`);
    }
  };

  if (loading) return <p className={styles.loading}>Loading deals...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <section className={styles.heroSection}>
      <div className={styles.bubbles}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={styles.bubble}></div>
        ))}
      </div>

      <div className={styles.glowDots}>
        <div className={styles.glowDot}></div>
        <div className={styles.glowDot}></div>
      </div>

      <h2 className={styles.sectionHeading}>Daily Travel Deals</h2>

      <div className={styles.cardGrid}>
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={styles.card}
            onClick={() => handleCardClick(deal.place)}
            role="button"
            tabIndex={0}
            aria-label={deal.heading}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(deal.place)}
          >
            <div
              className={styles.cardBackground}
              style={{ backgroundImage: `url(${deal.image})` }}
            />
            <div className={styles.cardContent}>

              <h3 className={styles.cardHeading}>{deal.heading}</h3>
            </div>
          </div>
        ))}
        {deals.length === 0 && !loading && (
          <p className={styles.error}>No daily deals available.</p>
        )}
      </div>
    </section>
  );
};

export default DailyDeals;