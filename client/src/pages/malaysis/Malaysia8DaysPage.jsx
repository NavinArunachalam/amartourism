import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./malaysia-8days-hero.css";

const Malaysia8DaysPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-malaysia-8days">
        <h1>Malaysia 7 Nights / 8 Days</h1>
        <p>Discover Langkawi, Kuala Lumpur, Genting Highlands & Malacca</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1549887534-1541e9326641?auto=format&fit=crop&w=800&q=80" alt="Langkawi Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Langkawi</h3>
            <p>Arrive at Langkawi International Airport. Transfer to hotel and check-in. Evening free for leisure. Overnight stay in Langkawi.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Langkawi Island Hopping Tour</h3>
            <p>Breakfast at hotel. Enjoy Island Hopping Tour covering Pulau Dayang Bunting (Lake of the Pregnant Maiden), Pulau Beras Basah, and eagle feeding at Pulau Singa Besar. Overnight stay in Langkawi.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1602055793171-5f86cbb6a421?auto=format&fit=crop&w=800&q=80" alt="Langkawi Islands" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Langkawi Tour" />
          <div className="day-content">
            <h3>Day 3: Langkawi City Tour – Transfer to Kuala Lumpur</h3>
            <p>Breakfast at hotel. Half-day Langkawi City Tour including Langkawi Sky Bridge, Eagle Square, and duty-free shopping. Transfer to airport for flight to Kuala Lumpur. Check-in at hotel. Overnight stay in KL.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Kuala Lumpur City Tour</h3>
            <p>Breakfast at hotel. Visit major attractions: National Monument, National Mosque, King’s Palace, Independence Square, Twin Towers (photo stop), KL Tower (observation deck). Overnight stay in Kuala Lumpur.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80" alt="KL City" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1593085512230-2fc90a3ed0f5?auto=format&fit=crop&w=800&q=80" alt="Batu Caves" />
          <div className="day-content">
            <h3>Day 5: Batu Caves & Genting Highlands</h3>
            <p>Breakfast at hotel. Visit Batu Caves Temple. Continue to Genting Highlands by private vehicle. Experience the famous cable car ride. Free time at leisure in Genting. Return to Kuala Lumpur for overnight stay.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Kuala Lumpur Leisure Day</h3>
            <p>Breakfast at hotel. Free day for shopping or optional activities. Suggested visits: KLCC Aquarium, Sunway Lagoon Theme Park, Pavilion Mall. Overnight stay in Kuala Lumpur.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1567007882970-64e320b7c19b?auto=format&fit=crop&w=800&q=80" alt="Shopping in KL" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1598965402089-d8280b4a7ea3?auto=format&fit=crop&w=800&q=80" alt="Malacca" />
          <div className="day-content">
            <h3>Day 7: Malacca Tour</h3>
            <p>Breakfast at hotel. Full-day excursion to Malacca – a UNESCO World Heritage site. Visit St. Paul’s Hill, Dutch Square, Christ Church, Jonker Street, and enjoy Malacca River Cruise. Return to Kuala Lumpur for overnight stay.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Departure</h3>
            <p>Breakfast at hotel. Check-out and transfer to Kuala Lumpur International Airport for your departure flight.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Departure" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>7 Nights accommodation with breakfast</li>
              <li>All airport transfers and sightseeing tours on private basis</li>
              <li>Langkawi Island Hopping Tour</li>
              <li>Langkawi City Tour</li>
              <li>Kuala Lumpur City Tour</li>
              <li>Batu Caves & Genting Highlands with cable car ride</li>
              <li>Malacca Day Tour with River Cruise</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>International and domestic flight tickets</li>
              <li>Malaysia visa charges</li>
              <li>Travel insurance</li>
              <li>Lunches & dinners unless mentioned</li>
              <li>Hotel security deposit (refundable)</li>
              <li>Optional tours & personal expenses</li>
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
            <p>Local currency is Malaysian Ringgit (MYR). ATMs are widely available and cards are accepted at major outlets.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>Tropical climate. Carry light clothing, umbrella, or raincoat. Stay hydrated during outdoor tours.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type G plugs (UK style, 230V). Carry a universal adapter if needed.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Dress modestly at temples & mosques. Remove shoes before entering. Respect local customs and traditions.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Malaysia is safe for tourists. Take normal precautions, safeguard belongings, and use licensed taxis or Grab.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
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
            <input type="tel" placeholder="+1 (555) 123-4567" required />
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
            <label>Additional Message</label>
            <textarea placeholder="Any special requests?"></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

         </div>
  );
};

export default Malaysia8DaysPage;