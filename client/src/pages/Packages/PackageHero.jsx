
import React, { useState, useEffect } from 'react';
import styles from './PackageHero.module.css';
import { Link } from 'react-router-dom';

const slides = [
  {
    place: 'Thailand',
    t1: 'PHUKET',
    t2: 'PARADISE',
    desc: 'Explore the stunning beaches and vibrant culture of Phuket, a perfect blend of relaxation and adventure.',
    img: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=80',
  },
  {
    place: 'Maldives',
    t1: 'OVERWATER',
    t2: 'VILLAS',
    desc: 'Experience luxury and serenity in the Maldives, with crystal-clear waters and breathtaking overwater villas.',
    img: '',
  },
];

const PackageHero = () => {
  const [idx, setIdx] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const interval = 6000;

  const loadSlide = (i) => {
    setIdx(i);
    setProgressWidth(0);
    requestAnimationFrame(() => setProgressWidth(100));
  };

  const nextSlide = () => {
    const nextIdx = (idx + 1) % slides.length;
    loadSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (idx - 1 + slides.length) % slides.length;
    loadSlide(prevIdx);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), interval);
    return () => clearTimeout(timer);
  }, [idx]);

  const resetTimer = () => setProgressWidth(0);

  return (
    <section className={styles.packageHero}>
      <div className={styles.stage}>
        <div className={styles.stack}>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`${styles.packageCard} ${styles.animate}`}
              style={{
                backgroundImage: `url(${slides[idx].img})`,
                '--delay': `${i * 60}ms`,
              }}
              data-i={i}
            ></div>
          ))}
        </div>
        <div className={styles.vignette}></div>
      </div>

      <section className={styles.details}>
        <div className={styles.place}>
          <div className={styles.bar}></div>
          <div className={styles.txt}>{slides[idx].place}</div>
        </div>
        <div className={styles.title}>
          <div className={styles.t1}>{slides[idx].t1}</div>
          <div className={styles.t2}>{slides[idx].t2}</div>
        </div>
        <p className={styles.desc}>{slides[idx].desc}</p>
        <div className={styles.cta}>
        <Link to = "/customer-details">
          <button className={styles.btn}>BookNow</button>
         </Link> 
        </div>
      </section>

      <div className={styles.pagination}>
        <div
          className={styles.arrow}
          onClick={() => {
            prevSlide();
            resetTimer();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={styles.arrow}
          onClick={() => {
            nextSlide();
            resetTimer();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className={styles.progressSubContainer}>
          <div
            className={styles.progressSubForeground}
            style={{
              width: `${progressWidth}%`,
              transition: progressWidth === 0 ? 'none' : `width ${interval}ms linear`,
            }}
          ></div>
        </div>

        <div className={styles.slideNumbers}>
          <span>{(idx + 1).toString().padStart(2, '0')}</span>/
          <span>{slides.length.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default PackageHero;