import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./thailand5n-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const Thailand5NPage = () => {
  return (
 <div className="common-styles">
      <section className="hero-thailand5n">
        <h1>Thailand 5 Nights / 6 Days</h1>
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
            <p>Arrival at DMK Airport. Transfer to Pattaya, check-in, visit Gems Gallery. Relax at hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Coral Island & Alcazar Show</h3>
            <p>Breakfast. Speedboat ride to Coral Island with lunch. Evening Alcazar Cabaret Show. Overnight in Pattaya.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
        <div className="day">
          <img src=" /Pattaya/Floating Market.jpg" alt="" />
          <div className="day-content">
            <h3>Day 3: Nong Nooch Village & Floating Market</h3>
            <p>Breakfast. Visit Tiger Park, Elephant Show, Thai Cultural Show, tram ride, lunch at Nong Nooch. Visit Floating Market, Big Buddha Temple & Viewpoint. Overnight in Pattaya.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Sanctuary of Truth</h3>
            <p>Breakfast. Explore the all-wood Sanctuary of Truth. Cultural & spiritual experience by the sea. Return & relax.</p>
          </div>
          <img src=" /Pattaya/Gopuram_door_panels_of_Sri_Mahamariamman_Koyil_Bangkok.jpg" alt="" />
        </div>
        <div className="day">
          <img src=" /Pattaya/Temple.jpg" alt="" />
          <div className="day-content">
            <h3>Day 5: Transfer to Bangkok – Temple Tour – Dinner Cruise</h3>
            <p>Breakfast. Transfer to Bangkok. Visit Wat Arun, Wat Pho & Wat Phra Kaew. Evening Chao Phraya Dinner Cruise. Overnight in Bangkok.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Safari World & Departure</h3>
            <p>Breakfast. Visit Safari World & Marine Park (lunch included). After the tour, proceed to airport for departure.</p>
          </div>
          <img src=" /Pattaya/Marine Park.jpg" alt="" />
        </div>
      </section>

      <section className="inclusions-wrapper">
        <h2 style={{ textAlign: "center", margin: "40px 0" }}>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>5 Nights accommodation (3/4-star hotels)</li>
              <li>Private airport transfers</li>
              <li>Daily breakfast (4 breakfasts)</li>
              <li>Coral Island Tour with lunch</li>
              <li>Alcazar Show with transfers</li>
              <li>Nong Nooch Village Tour with lunch, shows & tram</li>
              <li>Floating Market with rowing boat</li>
              <li>Big Buddha & Pattaya Viewpoint</li>
              <li>Sanctuary of Truth Visit</li>
              <li>Bangkok Temple Tour</li>
              <li>Chao Phraya Dinner Cruise</li>
              <li>Safari World & Marine Park with lunch</li>
              <li>All tours private basis (unless SIC mentioned)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Airfare</li>
              <li>Visa charges & travel insurance</li>
              <li>Personal expenses (tips, laundry, mini-bar, etc.)</li>
              <li>Meals not mentioned in itinerary</li>
              <li>Tiger Park entry tickets</li>
              <li>Early check-in/late check-out</li>
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
            <p>Carry light clothing, sunscreen, hat, sunglasses, and comfortable shoes. Keep your passport, visa, and documents safe.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Money & SIM</h3>
            <p>Exchange some Thai Baht in advance. Inform your bank about international transactions. Consider a local SIM card for connectivity.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Food & Etiquette</h3>
            <p>Try street food but choose freshly cooked items. Remove shoes before temples. Respect Thai culture and monarchy.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Safety & Time</h3>
            <p>Use insect repellent, stay hydrated, and keep emergency contacts handy. Be punctual for tours and transfers.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Ready to explore Thailand? Fill out the form below and our team will contact you.</p>
       <FormFilling/>
        </section>
    </div>
  );
};

export default Thailand5NPage;