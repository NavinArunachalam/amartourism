import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./malaysia-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const MalaysiaPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-malaysia">
        <h1>Discover the Wonders of Malaysia – 3 Nights / 4 Days</h1>
        <p>Explore Kuala Lumpur, Batu Caves, Genting Highlands, and more.</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c2?auto=format&fit=crop&w=800&q=80" alt="Putrajaya" />
          <div className="day-content">
            <h3>Day 1: Arrival – Putrajaya Tour – Kuala Lumpur</h3>
            <p>Meet & greet at Kuala Lumpur Airport. Visit Putrajaya for a panoramic city tour. Transfer to Kuala Lumpur, hotel check-in, and relax. Overnight stay in KL.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Batu Caves – Genting Highlands</h3>
            <p>After breakfast, proceed to Batu Caves, famous Hindu shrine. Continue to Genting Highlands via cable car. Explore casinos, theme park, and attractions. Return to Kuala Lumpur. Overnight stay in KL.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1593085512230-2fc90a3ed0f5?auto=format&fit=crop&w=800&q=80" alt="Batu Caves" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" alt="KL Tower" />
          <div className="day-content">
            <h3>Day 3: Kuala Lumpur City Tour & Shopping</h3>
            <p>Breakfast at hotel. Visit KL Tower, King’s Palace, Independence Square, National Mosque, and Petronas Twin Towers (photo stop). Shopping at Times Square. Overnight stay in KL.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Departure</h3>
            <p>Breakfast & check-out. Free time for shopping at Little India. Transfer to airport for departure flight with unforgettable memories.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Malaysia Departure" />
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>3 Nights Accommodation in Kuala Lumpur</li>
              <li>Daily Breakfast</li>
              <li>Return Airport Transfers (Private)</li>
              <li>Putrajaya Tour (Private)</li>
              <li>Batu Caves & Genting Highlands Tour with cable car</li>
              <li>Kuala Lumpur City Tour & KL Tower</li>
              <li>Shopping Tour at Times Square & Little India</li>
              <li>All tours & transfers on private basis (unless specified)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>International flight tickets</li>
              <li>Visa charges & travel insurance</li>
              <li>Meals other than mentioned</li>
              <li>Personal expenses (laundry, tips, mini-bar, etc.)</li>
              <li>Optional tours & activities</li>
              <li>Early check-in / late check-out</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Malaysia</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>The local currency is Malaysian Ringgit (MYR). Carry some cash for small purchases, though cards are widely accepted.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Malaysia uses Type G plugs (UK style). Voltage is 230V, so carry a universal adapter if needed.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Dress modestly when visiting religious sites. Remove shoes before entering temples and mosques. Respect local traditions.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Malaysia is generally safe, but stay alert in crowded areas. Keep your belongings secure and use registered taxis.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
         <FormFilling/>    </section>
    </div>
  );
};

export default MalaysiaPage;