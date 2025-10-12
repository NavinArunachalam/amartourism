import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, Pagination, EffectCoverflow, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./HappyCustomers.module.css";

const CustomerReviewSection = () => {
  const [swiperThumbs, setSwiperThumbs] = useState(null);
  const [swiperTestimonial, setSwiperTestimonial] = useState(null);

  const testimonials = [
    {
      quote:
        "This is the best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.",
      name: "Ramkishor Verma",
      designation: "University Student",
      image: "https://md-aqil.github.io/images/2091127763_1_1_1.jpg",
    },
    {
      quote:
        "Amazing interface and easy-to-use platform. Great for students and institutes alike.",
      name: "Suresh Kumar",
      designation: "IT Professional",
      image: "https://md-aqil.github.io/images/attractive-beautiful-beauty-1986684.jpg",
    },
    {
      quote:
        "The most convenient way to manage admissions online. Highly recommended.",
      name: "Ananya Patel",
      designation: "College Student",
      image: "https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg",
    },
  ];

  const quoteIcon = "https://md-aqil.github.io/images/quote.png";

  // Preload images
  useEffect(() => {
    testimonials.forEach((t) => new Image().src = t.image);
    new Image().src = quoteIcon;
  }, []);

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
                <SwiperSlide key={i} className={styles.swiperSlide}>
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
                <SwiperSlide key={i}>
                  <div className={styles.quote}>
                    <img
                      className={styles.quoteIcon}
                      src={quoteIcon}
                      alt="Quote"
                      loading="lazy"
                    />
                    <p className={styles.testimonialText}>
                      "{t.quote}"
                    </p>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.designation}>{t.designation}</div>
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
