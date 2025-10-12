import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DailyDeals.module.css';

const DailyDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages`, { withCredentials: true });
        const dailyDeals = response.data.filter(p => p.dailyDeal === true);
        console.log('Filtered Daily Deals:', dailyDeals);
        setDeals(dailyDeals.map(p => ({
          id: p._id,
          link: `/tours/${p._id}`,
          image: p.image || 'https://via.placeholder.com/400',
          category: p.place || 'No Place',
          heading: p.title || 'No Title'
        })));
      } catch (err) {
        setError(err.message);
        console.error('Error fetching daily deals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [API_URL]);

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
          <a
            key={deal.id || deal.link}
            className={styles.card}
            href={deal.link}
            aria-label={deal.heading}
          >
            <div
              className={styles.cardBackground}
              style={{ backgroundImage: `url(${deal.image})` }}
            />
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>{deal.category}</p>
              <h3 className={styles.cardHeading}>{deal.heading}</h3>
            </div>
          </a>
        ))}
        {deals.length === 0 && !loading && (
          <p className={styles.error}>No daily deals available.</p>
        )}
      </div>
    </section>
  );
};

export default DailyDeals;