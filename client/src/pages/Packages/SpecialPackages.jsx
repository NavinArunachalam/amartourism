import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SpecialPackages.module.css';

const SpecialPackages = () => {
  const [apiPackages, setApiPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const Card = ({ dataImage, header, content }) => {
    const cardRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

    useEffect(() => {
      if (cardRef.current) {
        const updateDimensions = () => {
          setWidth(cardRef.current.offsetWidth);
          setHeight(cardRef.current.offsetHeight);
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
      }
    }, []);

    const mousePX = width ? mouseX / width : 0;
    const mousePY = height ? mouseY / height : 0;

    const cardStyle = {
      transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
      transformStyle: 'preserve-3d',
    };

    const cardBgTransform = {
      transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    };

    const cardBgImage = {
      backgroundImage: `url(${dataImage})`,
    };

    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMouseX(e.clientX - rect.left - width / 2);
        setMouseY(e.clientY - rect.top - height / 2);
      }
    };

    const handleMouseEnter = () => {
      clearTimeout(mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000);
      setMouseLeaveDelay(timeout);
    };

    return (
      <div
        className={styles.specialOffersCardWrap}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className={styles.specialOffersCard} style={cardStyle}>
          <div
            className={styles.specialOffersCardBg}
            style={{ ...cardBgTransform, ...cardBgImage }}
          ></div>
          <div className={styles.specialOffersCardInfo}>
            <h1>{header}</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/tour-packages`, { withCredentials: true });
        const specialOffers = response.data.filter(p => p.specialOffer === true);
        setApiPackages(specialOffers.map(p => ({
          header: p.title,
          content: p.description || p.place || 'No description available',
          image: p.image || 'https://via.placeholder.com/400'
        })));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching special offers:', err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const dotsContainer = document.getElementById('specialOffersDots');
    const dotsCount = 20;

    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add(styles.specialOffersDot);

      const size = Math.random() * 10 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 15 + 10;

      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${posX}%`;
      dot.style.top = `${posY}%`;
      dot.style.animationDelay = `${delay}s`;
      dot.style.animationDuration = `${duration}s`;

      dotsContainer.appendChild(dot);
    }

    return () => {
      while (dotsContainer.firstChild) {
        dotsContainer.removeChild(dotsContainer.firstChild);
      }
    };
  }, []);

  return (
    <div className={styles.specialOffers}>
      <div className={styles.specialOffersDots} id="specialOffersDots"></div>
      <div className={styles.specialOffersFloatingElement}></div>
      <div className={styles.specialOffersFloatingElement}></div>
      <div className={styles.specialOffersFloatingElement}></div>
      <h1 className={styles.specialOffersTitle}>Special Packages</h1>
      <div className={styles.specialOffersContainer}>
        {loading ? (
          <div>Loading special offers...</div>
        ) : (
          apiPackages.map((pkg, index) => (
            <Card
              key={index}
              dataImage={pkg.image}
              header={pkg.header}
              content={pkg.content}
            />
          ))
        )}
      </div>
      {apiPackages.length === 0 && !loading && (
        <div className={styles.specialOffersEmpty}>No special offers available.</div>
      )}
      <div className={styles.specialOffersViewAllBtnContainer}>
        <a href="#" className={styles.specialOffersViewAllBtn}>
          View All Packages
        </a>
      </div>
    </div>
  );
};

export default SpecialPackages;