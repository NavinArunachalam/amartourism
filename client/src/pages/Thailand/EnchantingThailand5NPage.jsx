import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./enchanting-thailand5n-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const EnchantingThailand5NPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-enchanting-thailand5n">
        <h1>Enchanting Thailand – 5 Nights / 6 Days</h1>
        <p>Experience Phuket & Bangkok with beaches, temples, and unforgettable adventures.</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" alt="Phuket Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Phuket & City Tour</h3>
            <p>Meet & greet at Phuket Airport. Private transfer to hotel and check-in. Evening leisure. Visit Karon View Point, Tiger Park (transfer only), Wat Chalong Temple, Phuket Old Town, Gems Gallery. Return to hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Phuket City Tour (Private – 6 Hours)</h3>
            <p>Enjoy breakfast at hotel. Full Phuket City Tour on a private basis with scenic viewpoints, temples, and cultural highlights. Evening free for leisure.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="Phuket City" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Phi Phi Island" />
          <div className="day-content">
            <h3>Day 3: Phi Phi Island Tour by Speed Boat</h3>
            <p>Full-day Phi Phi Island tour by speed boat (SIC). Includes snorkeling, national park fees, and lunch. Return to hotel and overnight stay in Phuket.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Phuket to Bangkok + En Route Temple Tour</h3>
            <p>Breakfast & checkout from hotel. Private transfer to Phuket Airport. Flight to Bangkok. En-route visit to Mini Reclining Buddha Temple & Golden Buddha Temple. Check-in at Bangkok hotel. Evening leisure.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Bangkok Temple" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Safari World" />
          <div className="day-content">
            <h3>Day 5: Safari World & Marine Park</h3>
            <p>Breakfast at hotel. Visit Safari World & Marine Park (SIC). Includes wildlife safari, marine shows, and buffet lunch. Evening free in Bangkok.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Departure</h3>
            <p>Breakfast at hotel. Day free at leisure until transfer to Bangkok Airport for departure.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="Departure" />
        </div>
      </section>

      <section style={{ background: "#f9f9f9" }}>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>5 Nights Accommodation at hotels</li>
              <li>5 Breakfasts</li>
              <li>Phuket City Tour (Private)</li>
              <li>Phi Phi Island Tour with lunch (SIC)</li>
              <li>Bangkok Temple Tour – Marble & Golden Buddha (Private)</li>
              <li>Safari World & Marine Park with lunch</li>
              <li>Private airport transfers in luxury vehicles</li>
              <li>Transfer to Tiger Park (tickets extra)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Visa & flight tickets</li>
              <li>Travel insurance</li>
              <li>Personal expenses (laundry, tips, etc.)</li>
              <li>Meals not mentioned in itinerary</li>
              <li>Activities not in inclusions</li>
              <li>Security deposit at hotels</li>
              <li>Optional shows & cultural experiences</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Documents</h3>
            <p>Ensure passport validity (6+ months), carry visas, tickets, and travel insurance documents.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-suitcase-rolling"></i>
            <h3>Packing</h3>
            <p>Pack light clothes, comfortable shoes, chargers, adapters, toiletries, and sunscreen.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-heartbeat"></i>
            <h3>Health & Safety</h3>
            <p>Stay hydrated, carry medications, and check vaccination requirements before travel.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Carry Thai Baht and internationally accepted cards. Notify bank before traveling.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Culture</h3>
            <p>Respect Thai customs, dress modestly at temples, and avoid offensive gestures.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
         <FormFilling/></section>

     
    </div>
  );
};

export default EnchantingThailand5NPage;