import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, Pagination, EffectCoverflow, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import axios from "axios";

import styles from "./HappyCustomers.module.css";

const CustomerReviewSection = () => {
  const [swiperThumbs, setSwiperThumbs] = useState(null);
  const [swiperTestimonial, setSwiperTestimonial] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  const quoteIcon = "https://md-aqil.github.io/images/quote.png";
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"; 

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reviews`,{withCredentials:true}); // Replace with actual API endpoint
        const data = await response.data;
        setTestimonials(data); 
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Preload images
  useEffect(() => {
    testimonials.forEach((t) => new Image().src = t.image);
    new Image().src = quoteIcon;
  }, [testimonials]);

  return (
    <div className={styles.customerReviewSection}>
      <div className={styles.container}>
        <div className={styles.customerReview}>
          {/* Left - Image Swiper */}
          <div className={styles.testiUserImg}>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              modules={[EffectCoverflow, Controller]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 6,
                slideShadows: false,
              }}
              observer={true}
              observeParents={true}
              className={styles.galleryThumbs}
              onSwiper={setSwiperThumbs}
              controller={{ control: swiperTestimonial }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={t._id} className={styles.swiperSlide}>
                  <img
                    src={t.image}
                    alt={t.name}
                    className={styles.swiperSlideImg}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right - Testimonials */}
          <div className={styles.userSaying}>
            <Swiper
              speed={400}
              spaceBetween={50}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              direction="vertical"
              centeredSlides={true}
              pagination={{ clickable: true, type: "bullets", dynamicBullets: true }}
              modules={[Autoplay, Pagination, Controller]}
              observer={true}
              observeParents={true}
              className={styles.testimonial}
              onSwiper={setSwiperTestimonial}
              controller={{ control: swiperThumbs }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={t._id}>
                  <div className={styles.quote}>
                    <img
                      className={styles.quoteIcon}
                      src={quoteIcon}
                      alt="Quote"
                      loading="lazy"
                    />
                    <p className={styles.testimonialText}>
                      "{t.comment}"
                    </p>
                    <div className={styles.name}>{t.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewSection;