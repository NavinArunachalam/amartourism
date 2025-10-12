import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./malaysia-5days-hero.css";

const Malaysia5DaysPage = () => {
  return (
 <div className="common-styles">
      <section className="hero-malaysia-5days">
        <h1>Discover the Wonders of Malaysia – 4 Nights / 5 Days</h1>
        <p>Experience Kuala Lumpur, Genting Highlands, Malacca & more.</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Kuala Lumpur Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Kuala Lumpur</h3>
            <p>Meet & greet at the airport by our representative. Visit Putrajaya, known for its stunning architecture and serene environment. Evening tour of Bukit Bintang for shopping & dining. Photo stop at Petronas Twin Towers. Hotel check-in.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Batu Caves & Genting Highlands</h3>
            <p>Breakfast at hotel. Morning visit to Batu Caves – iconic Hindu shrine. Continue to Genting Highlands with included two-way cable car ride. Enjoy entertainment, shopping, and attractions. Return to Kuala Lumpur. Overnight stay in KL.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1593085512230-2fc90a3ed0f5?auto=format&fit=crop&w=800&q=80" alt="Batu Caves" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1567007882970-64e320b7c19b?auto=format&fit=crop&w=800&q=80" alt="Kuala Lumpur City" />
          <div className="day-content">
            <h3>Day 3: Full-Day Kuala Lumpur City Tour</h3>
            <p>Breakfast at hotel. Visit KL highlights: Butterfly Park, National Museum, KLCC Aquarium (tickets included). Explore the cultural and modern attractions of the city. Overnight stay in Kuala Lumpur.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Malacca Tour with River Cruise</h3>
            <p>Breakfast at hotel. Full-day excursion to Malacca – a UNESCO World Heritage site. Visit historic landmarks and enjoy a relaxing river cruise. Return to Kuala Lumpur for overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1598965402089-d8280b4a7ea3?auto=format&fit=crop&w=800&q=80" alt="Malacca River Cruise" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Departure" />
          <div className="day-content">
            <h3>Day 5: Departure</h3>
            <p>Breakfast at hotel. Check-out and transfer to airport. Free time for last-minute shopping at Little India before departure.</p>
          </div>
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>4 nights hotel accommodation with breakfast</li>
              <li>Daily breakfast (4 meals)</li>
              <li>Private vehicle for transfers & tours</li>
              <li>Putrajaya Tour</li>
              <li>Bukit Bintang & Petronas Twin Towers (photo stop)</li>
              <li>Batu Caves & Genting Highlands with cable car tickets</li>
              <li>Kuala Lumpur City Tour with Butterfly Park, National Museum & KLCC Aquarium</li>
              <li>Malacca Tour with River Cruise</li>
              <li>Tourism tax (10 MYR/room/night at selected hotels)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Air tickets & visa</li>
              <li>Arrival breakfast, lunch & dinner on Day 1</li>
              <li>Hotel security deposit (refundable)</li>
              <li>Peak season surcharges (Christmas, Chinese New Year, etc.)</li>
              <li>Personal expenses (laundry, tips, mini-bar, etc.)</li>
              <li>Anything not in inclusions</li>
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
            <p>Malaysia uses the Ringgit (MYR). Carry sufficient cash or a travel card for convenience. Keep receipts for tax refunds.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>Malaysia has a tropical climate. Carry light clothes, an umbrella, or a raincoat during the rainy season.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Uses Type G plugs (UK style, 230V). Carry a universal adapter if required.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Dress modestly at temples & mosques. Remove shoes before entering. Bargaining is common in local markets.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Malaysia is generally safe. Stay cautious in crowded areas, secure your belongings, and use Grab or registered taxis.</p>
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

export default Malaysia5DaysPage;