import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./thailand5n-hero.css";

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
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" alt="" />
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
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="" />
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
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1585996728432-47e810cd7a3c?auto=format&fit=crop&w=800&q=80" alt="" />
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
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="" />
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
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@example.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 9876543210" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Preferred Travel Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4+ People</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Additional Message (Optional)</label>
            <textarea placeholder="Any specific requests or questions?"></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default Thailand5NPage;