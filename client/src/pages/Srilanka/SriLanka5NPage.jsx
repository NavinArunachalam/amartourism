import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./srilanka5n-hero.css";

const SriLanka5NPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-srilanka5n">
        <h1>Sri Lanka</h1>
        <p>5 Nights / 6 Days - Discover the Pearl of the Indian Ocean</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1592386956895-279b27a64173?auto=format&fit=crop&w=800&q=80" alt="Kandy" />
          <div className="day-content">
            <h3>Day 1: Airport Pickup – Travel to Kandy (152 Km | 3 hrs 50 mins)</h3>
            <p>Pick up from Airport and travel to Kandy. En route stop at Pinnawala Millennium Elephant Foundation. Attractions include Spice Garden, Gem Museum, Temple of the Tooth, Kandy Lake, Peradeniya Botanical Garden, Batik Factory, Wood Carving Center, and Cultural Dancing Show. Kandy is a major city in the Central Province, the last capital of the Sinhalese monarchy, and home to the sacred Temple of the Tooth Relic (UNESCO World Heritage Site).</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Kandy to Nuwara Eliya (94 Km | 3 hrs 8 mins)</h3>
            <p>Breakfast at the hotel. Travel from Kandy to Nuwara Eliya. Attractions include Tea Factory, Gregory Lake, Victoria Park, Ramboda Falls, Race Course, and Hanuman Temple. Nuwara Eliya is a city in the hill country at an altitude of 1,868 m, known as "Little England" for its temperate climate and tea plantations. It's the most important location for tea production in Sri Lanka.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1582044013945-acea55a01f08?auto=format&fit=crop&w=800&q=80" alt="Nuwara Eliya" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596017040014-7b93ff13d1e9?auto=format&fit=crop&w=800&q=80" alt="Ella" />
          <div className="day-content">
            <h3>Day 3: Nuwara Eliya – Ella (Day Excursion)</h3>
            <p>Breakfast at the hotel. Day excursion to Ella. Attractions include Seeta Amman Kovil, Nine Arches Bridge, Waterfalls, and Little Adam's Peak. Ella is a small town in the Badulla District at an elevation of 1,041 meters, surrounded by hills covered with cloud forests and tea plantations. The area has rich biodiversity and offers spectacular views through the Ella Gap. Stay overnight in Nuwara Eliya.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Nuwara Eliya – Bentota</h3>
            <p>Breakfast at the hotel. Travel from Nuwara Eliya to Bentota. Stay at Bentota for 2 nights. Attractions include Madu River Boat Safari, Sea Turtle hatchery, Bentota Lake, and Bentota Beach. Bentota is a coastal town in southern Sri Lanka known for its beautiful beaches, water sports, and Ayurvedic treatments. It's located in the Galle District and is a popular tourist destination.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1564419434660-6a0ace6a1f36?auto=format&fit=crop&w=800&q=80" alt="Bentota" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596526131083-e8e7ba6ba302?auto=format&fit=crop&w=800&q=80" alt="Bentota Beach" />
          <div className="day-content">
            <h3>Day 5: Bentota Sightseeing</h3>
            <p>Breakfast at the hotel. Full day to explore Bentota's attractions. Enjoy the beautiful beaches, water sports activities, and Ayurvedic treatments. Bentota is known for its pristine coastline and the Bentota River. Overnight stay at Bentota.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Bentota to Airport with Colombo City Tour</h3>
            <p>Depending on flight time: Colombo City Tour. Attractions include Beira Lake, Gangarama Temple, Independence Square, Galle Face Green, Viharamahadevi Park, Diyatha Park, Shopping Malls (Marino Mall, One Galle Face, Colombo City Center), and Lotus Tower. Colombo is the executive and judicial capital and largest city of Sri Lanka, a busy and vibrant city with a mixture of modern life and colonial buildings.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1582044013945-acea55a01f08?auto=format&fit=crop&w=800&q=80" alt="Colombo" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Meet & Greet on arrival + Airport transfers</li>
              <li>Air-conditioned vehicle with English-speaking driver</li>
              <li>Government taxes and handling charges</li>
              <li>Expressway charges</li>
              <li>Water bottle per person on arrival</li>
              <li>Breakfast and dinner included with Indian menu options (both vegetarian and non-vegetarian)</li>
              <li>Accommodation for 5 nights</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Entrance tickets to sites</li>
              <li>Personal expenses (snacks, meals while travelling)</li>
              <li>Camera/video permits</li>
              <li>Visa fees</li>
              <li>Tips and health insurance</li>
              <li>Any other items not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Booking Policies & Important Information</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>• <strong>Booking Confirmation:</strong> 30% advance payment required<br />
               • <strong>Balance Payment:</strong> Due 15 days prior to arrival (by 15 Sept 2025)<br />
               • <strong>Payment Modes:</strong> Bank Transfer / Online Payment / Credit Card (surcharge may apply)<br />
               • <strong>Refunds:</strong> Processed at prevailing exchange rate of the bank on date of transaction</p>
          </div>
          <div className="policy-box">
            <h3>Destination Information</h3>
            <p>• <strong>Kandy:</strong> Last capital of Sinhalese monarchy, UNESCO World Heritage Site<br />
               • <strong>Nuwara Eliya:</strong> Hill station at 1,868m altitude, tea plantation heartland<br />
               • <strong>Ella:</strong> Mountain town with stunning views and biodiversity<br />
               • <strong>Bentota:</strong> Coastal paradise with beaches and water sports<br />
               • <strong>Colombo:</strong> Capital city blending modern life with colonial heritage</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Sri Lanka</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>October is inter-monsoon season – expect occasional rain showers, especially in the southwest. Carry an umbrella or rain jacket.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing</h3>
            <p>Pack light cotton clothing, a sweater for the hill country, and appropriate beachwear. Dress modestly for temple visits.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shoe-prints"></i>
            <h3>Footwear</h3>
            <p>Comfortable walking shoes for sightseeing and sandals for beach activities. Remove shoes before entering temples.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-sim-card"></i>
            <h3>Connectivity</h3>
            <p>SIM cards with data available at the airport. Wi-Fi is widely available in hotels and tourist areas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Money</h3>
            <p>ATMs are common; carry some cash for local markets. Currency: Sri Lankan Rupee (LKR). Tipping is appreciated.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-first-aid"></i>
            <h3>Health & Safety</h3>
            <p>Bring sunscreen, insect repellent, and basic medication. Emergency number: 119.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Local Etiquette</h3>
            <p>Respect local customs. Dress modestly at temples (cover shoulders and knees). Remove shoes and hats before entering.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-store"></i>
            <h3>Shopping</h3>
            <p>Bargain politely in street markets. Branded stores have fixed prices. Look for gems, spices, tea, and handicrafts.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Sri Lanka Adventure</h2>
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
            <label>Dietary Preference</label>
            <select>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Mixed (Both)</option>
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

export default SriLanka5NPage;