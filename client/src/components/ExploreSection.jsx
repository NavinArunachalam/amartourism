import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExploreSection.module.css";

const ExploreSection = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: "https://www.regent-holidays.co.uk/upload-files/blog-sections/section-214_1975.jpg",
      title: "Discover the magic of Packages",
      subtitle: "From ancient temples to neon-lit cities",
    },
    {
      image: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1674030135/blog/bnbtltnp5nqbdevfcbmn.jpg",
      title: "Discover the magic of Packages",
      subtitle: "From ancient temples to neon-lit cities",
    },
    {
      image: "https://www.nippon.com/en/ncommon/contents/guide-to-japan/133214/133214.jpg",
      title: "Discover the magic of Packages",
      subtitle: "From ancient temples to neon-lit cities",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleExploreTour = () => {
    navigate('/all-packages');
  };

  const handleEnquiry = () => {
    navigate('/customer-details');
  };

  return (
    <div className={styles.reviewSection}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.bottomCenter}>
        <h3 className={styles.luxuryHeading}>{slides[currentSlide].title}</h3>
        <p className={styles.luxurySubtitle}>{slides[currentSlide].subtitle}</p>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={handleExploreTour}
          >
            Explore Tour
          </button>
          <button
            className={`${styles.btn} ${styles.secondary}`}
            onClick={handleEnquiry}
          >
            Enquiry
          </button>
        </div>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;