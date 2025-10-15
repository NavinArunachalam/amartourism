
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Intro.module.css';

const OktoberfestIntro = () => {
  return (
    <section className={styles.oktoberfestIntro} id="intro">
      <div className={styles.oktoberfestIntroInfo}>
        <h1>Oktoberfest</h1>
        <p>Join us for Oktoberfest, the world's most famous beer festival! Four days of fun, food, and German beer await.</p>
        <Link to="/all-places" className={styles.oktoberfestIntroButtonExplore}>
          Explore
        </Link>
      </div>
      <div className={styles.oktoberfestIntroSplitBeer}>
        <img
          className={styles.oktoberfestIntroBeer}
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/81c84fb8-55aa-4b2b-95d9-b4ff217b3aa4"
          alt="Beer 1"
        />
        <img
          className={`${styles.oktoberfestIntroBeer} ${styles.oktoberfestIntroBeerSecond}`}
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3a1385a8-2ce1-49ec-a8a7-99e0b6a5aca9"
          alt="Beer 2"
        />
        <img
          className={styles.oktoberfestIntroBeer}
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9efc9dd0-9036-419b-bf16-619164b94095"
          alt="Beer 3"
        />
      </div>
    </section>
  );
};

export default OktoberfestIntro;
