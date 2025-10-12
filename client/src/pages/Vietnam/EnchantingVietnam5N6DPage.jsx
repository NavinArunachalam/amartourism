import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css"
import "./enchanting-vietnam5n6d-hero.css";

const EnchantingVietnam5N6DPage = () => {
  return (
 <div className="common-styles">
      <section className="hero-enchanting-vietnam5n6d">
        <h1>Enchanting Vietnam</h1>
        <p>5 Nights / 6 Days - Discover the Beauty of Vietnam</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80" alt="Hanoi Arrival" />
          <div className="day-content">
            <h3>Day 1: Hanoi Arrival</h3>
            <p>
              Arrival at Noi Bai Airport in Hanoi, we will be welcomed by our friendly local guide and transferred to our hotel. After check-in, enjoy a half-day city tour visiting the famous Train Street and the iconic One Pillar Pagoda, an important Buddhist temple in Hanoi.
            </p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Hanoi – Halong Bay Overnight Cruise</h3>
            <p>
              Morning departure for a 180 km drive to Halong Bay (UNESCO World Heritage Site). On arrival, we will board our private boat and start 4-hour cruising while having lunch. Our cruise will pass through the Islet of Rocky Dog, Incense Burner, and Fighting Cock. Dock at Heavenly Palace Cave, one of the most beautiful caves for 45-minute visit before returning to our cruise and heading back to the pier. Overnight in Halong Bay Cruise.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1575381812281-e2986e35bfc7?auto=format&fit=crop&w=800&q=80" alt="Halong Bay" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596466131083-e8e7ba6ba302?auto=format&fit=crop&w=800&q=80" alt="Halong Bay Cruise" />
          <div className="day-content">
            <h3>Day 3: Halong Bay Cruise</h3>
            <p>
              In the morning, refresh your body and mind with a Tai Chi exercise on the sundeck at the break of dawn. Have tea and coffee onboard, continue exploring Ha Long Bay sailing across its 2000 islets and visiting some of its major highlights. Normally, check out at 09:30, have a buffet brunch while cruising back to shore. Overnight in Hanoi.
            </p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Hanoi Departure – Danang Arrival</h3>
            <p>
              Breakfast at Hotel then check out and transfer to airport. Arrival in Danang; meet your guide and transfer to the hotel for check-in. City Tour: Visit Son Tra Peninsula and Linh Ung Pagoda. Admire the Lady Buddha Statue, the tallest in Vietnam. Enjoy views of the city, mountains, and ocean. Evening free to explore Danang's beach on your own. Overnight: Danang.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1596526131083-e8e7ba6ba302?auto=format&fit=crop&w=800&q=80" alt="Danang" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1549482199-b6c4d5a1c48a?auto=format&fit=crop&w=800&q=80" alt="Golden Bridge" />
          <div className="day-content">
            <h3>Day 5: Danang – Ba Na Hills – Golden Bridge</h3>
            <p>Breakfast at the hotel. Drive to Sun World Ba Na Hills for a full day of entertainment. Take a cable car up the Truong Son Mountains. Visit the iconic Golden Bridge. Explore Le Jardin Garden and French Village. Overnight: Danang.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Danang – Departure</h3>
            <p>After breakfast, we will be free until your driver arrives to take you to the airport for your departure, carrying with you wonderful memories of your Vietnam adventure.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" alt="Vietnam Departure" />
        </div>
      </section>

      <section style={{ background: "#f9f9f9" }}>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Private airport transfers</li>
              <li>Tour excursion transfers</li>
              <li>Shuttle bus (Hanoi – Halong – Hanoi)</li>
              <li>Accommodation 4 star (Double Room)</li>
              <li>Day Cruise in Halong (V Dream Cruise)</li>
              <li>Meals as mentioned (6 breakfasts)</li>
              <li>English-speaking guide</li>
              <li>Entrance fees</li>
              <li>1 bottle of mineral water (500ml) per person per day</li>
              <li>VAT</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Tipping (refer to policy)</li>
              <li>Personal expenses (drinks, travel insurance, COVID-19 treatment)</li>
              <li>International/Domestic air tickets</li>
              <li>Visa fees, bank transfer charges</li>
              <li>Halal food (if not specified)</li>
              <li>Any other items not mentioned in the itinerary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Important Notes & Surcharge Periods</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Essential Items to Carry</h3>
            <p>
              • Original passport, swimming suit, sunglasses, and insect repellent<br />
              • Special dietary requests (e.g., vegetarian, halal) must be advised before departure<br />
              • Prices may change due to variations in entrance fees or transportation costs<br />
              • The itinerary is subject to change based on weather conditions
            </p>
          </div>
          <div className="policy-box">
            <h3>Surcharge Periods</h3>
            <p>
              • <strong>Lunar New Year:</strong> January 14 – February 5, 2025<br />
              • <strong>Reunification & Labor Day:</strong> April 29 – May 2, 2025<br />
              • <strong>National Independence Day:</strong> August 31 – September 3, 2025<br />
              • <strong>Christmas & New Year:</strong> December 24, 2025 – January 5, 2026<br />
              • Rooms are not blocked/booked. Prices are subject to availability and confirmation at the time of booking.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Vietnam</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Documents</h3>
            <p>Carry your original passport and keep a copy as backup. Ensure you have your visa and required travel documents.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing</h3>
            <p>Pack lightweight clothing for warm weather, but bring a jacket for cooler mornings or evenings, especially during cruises.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shoe-prints"></i>
            <h3>Footwear</h3>
            <p>Wear comfortable walking shoes for city tours and excursions.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-first-aid"></i>
            <h3>Health & Safety</h3>
            <p>Bring essential medications, sunscreen, and insect repellent. Stay hydrated and be cautious with street food.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Money</h3>
            <p>Use local currency (Vietnamese Dong) for small purchases. Credit cards accepted in hotels but carry cash for markets.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Technology</h3>
            <p>Bring a universal power adapter. Check with your mobile provider for international roaming or buy a local SIM card.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands"></i>
            <h3>Etiquette</h3>
            <p>Respect local customs and dress modestly when visiting temples or pagodas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-phone-alt"></i>
            <h3>Emergency Contacts</h3>
            <p>Keep emergency numbers handy, including the contact details of your guide and hotel.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Vietnam Adventure</h2>
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
            <label>Dietary Requirements</label>
            <select>
              <option>No special requirements</option>
              <option>Vegetarian</option>
              <option>Halal</option>
              <option>Other (please specify in message)</option>
            </select>
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

export default EnchantingVietnam5N6DPage;