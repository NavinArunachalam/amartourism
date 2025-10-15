import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./thailand4n-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';
const Thailand4NPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-thailand4n">
        <h1>Thailand 4 Nights / 5 Days</h1>
        <p>Explore Pattaya & Bangkok – Beaches, Culture & Adventure!</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section className="itinerary">
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src=" /Pattaya/Pattaya.jpg" alt="" />
          <div className="day-content">
            <h3>Day 1: Arrival & Transfer to Pattaya</h3>
            <p>Arrival at DMK Airport. Transfer to Pattaya, visit Gems Gallery, hotel check-in and relax.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Coral Island & Alcazar Show</h3>
            <p>Breakfast. Speedboat ride to Coral Island with lunch. Evening Alcazar Cabaret Show. Overnight in Pattaya.</p>
          </div>
          <img src=" /Pattaya/Mu_Ko_Ang_Thong,_Islands_in_the_sea_2,_Thailand.jpg" alt="" />
        </div>
        <div className="day">
          <img src=" /Pattaya/Floating Market.jpg" alt="" />
          <div className="day-content">
            <h3>Day 3: Nong Nooch Village & Floating Market</h3>
            <p>Breakfast. Visit Tiger Park, Nong Nooch Village (Elephant Show, Cultural Show, Tram Ride, Lunch). Visit Floating Market, Big Buddha & Pattaya Viewpoint. Overnight in Pattaya.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Transfer to Bangkok – Safari World</h3>
            <p>Breakfast. Transfer to Bangkok. Visit Safari World & Marine Park, buffet lunch included, River Safari Ride. Return to hotel. Evening free for dinner or night market.</p>
          </div>
          <img src=" /Pattaya/Bangkok.jpg" alt="" />
        </div>
        <div className="day">
          <img src=" /Pattaya/Ao_Thong_Nai_Pan,_Koh_Phangan,_Thailand_02-2003.jpg" alt="" />
          <div className="day-content">
            <h3>Day 5: Temple Tour & Departure</h3>
            <p>Breakfast. Temple Tour: Wat Arun, Wat Pho & Wat Phra Kaew. Transfer to airport for departure.</p>
          </div>
        </div>
      </section>

      <section className="inclusions-wrapper">
        <h2 style={{ textAlign: "center", margin: "40px 0" }}>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>4 Nights accommodation (3/4-star hotels)</li>
              <li>Private airport & hotel transfers</li>
              <li>Daily breakfast (4 breakfasts)</li>
              <li>Coral Island Tour with lunch</li>
              <li>Alcazar Show with transfers</li>
              <li>Nong Nooch Village Tour with lunch, shows & tram</li>
              <li>Floating Market with rowing boat</li>
              <li>Tiger Park visit (transfers only, entry extra)</li>
              <li>Big Buddha & Pattaya Viewpoint</li>
              <li>Safari World & Marine Park with lunch</li>
              <li>Bangkok Temple Tour (Wat Arun, Wat Pho, Wat Phra Kaew)</li>
              <li>All tours private basis (unless specified as SIC)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Airfare</li>
              <li>Visa charges & travel insurance</li>
              <li>Personal expenses (tips, laundry, mini-bar, etc.)</li>
              <li>Meals not mentioned in itinerary</li>
              <li>Security deposit at hotels (1000 THB or passport)</li>
              <li>Any services not in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>Essential Travel Tips for Thailand</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-suitcase-rolling"></i>
            <h3>Packing</h3>
            <p>Carry light, breathable clothing, sunscreen, hat, sunglasses, and comfortable shoes. Keep passport & visa handy.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Money & SIM</h3>
            <p>Exchange some Thai Baht before travel. Inform bank about international use. Consider a local SIM for connectivity.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Food & Etiquette</h3>
            <p>Opt for freshly cooked street food. Remove shoes before temples. Respect Thai culture and monarchy.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Safety & Time</h3>
            <p>Use insect repellent, stay hydrated, carry ID copies, and be punctual for tours and transfers.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Ready to explore Thailand? Fill out the form below and our team will contact you.</p>
          <FormFilling/>      </section>


    </div>
  );
};

export default Thailand4NPage;