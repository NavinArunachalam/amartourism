import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./singapore-hero.css";

const SingaporePage = () => {
  return (
     <div className="common-styles">
      <section className="hero-singapore">
        <h1>Exciting Singapore Getaway</h1>
        <p>4 Nights / 5 Days - Discover the Lion City's Marvels</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" alt="Singapore Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Singapore and Transfer to Hotel</h3>
            <p>Meet & Greet at the Airport: Our representative will welcome you upon arrival. Private transfer to your hotel. Enjoy a Singapore Panoramic City Tour covering Clarke Quay, Bugis, Arab Street/Kampong Glam, Chinatown, Little India, Merlion Park, Esplanade, and Buddha Temple. Check-in and relax after your journey. Visit Gardens by the Bay: Supertree Grove + Cloud Forest. Experience the stunning light and music show at night. End your day with the Spectra Light & Sound Show.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Sentosa Island & Universal Studios</h3>
            <p>Enjoy breakfast at the hotel. Head to Sentosa Island for a tour including entry to Universal Studios Singapore - South Asia's first and only movie theme park featuring six themed zones with thrilling rides, shows, and attractions. End your day with the spectacular Wings of Time light and sound show on the beach.</p>
          </div>
          <img src="https://images.unsplash.com/photo-15818cca44a6c24c54cf1cbbd8079245?auto=format&fit=crop&w=800&q=80" alt="Sentosa Island" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1599640842223-50b5d426b8d9?auto=format&fit=crop&w=800&q=80" alt="Bird Paradise" />
          <div className="day-content">
            <h3>Day 3: Birds Paradise & Night Safari</h3>
            <p>Breakfast at the hotel. Visit Birds Paradise to explore exotic bird species and lush greenery. Later, experience the world's first nocturnal zoo at Night Safari with guided tram rides and walking trails.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Marine Life & Madame Tussauds</h3>
            <p>Breakfast at the hotel. Visit SEA Aquarium, home to over 800 marine species across different habitats. Then explore Madame Tussauds Singapore, which includes IOS (Images of Singapore) + Boat Ride - an interactive tour through Singapore's cultural and historical highlights.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1591152348787-477b9b201ad7?auto=format&fit=crop&w=800&q=80" alt="SEA Aquarium" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1582545380460-2a40e3c91c6f?auto=format&fit=crop&w=800&q=80" alt="Singapore Departure" />
          <div className="day-content">
            <h3>Day 5: Departure from Singapore</h3>
            <p>On your last day, enjoy a leisurely breakfast at the hotel. Depending on your flight schedule, you may have some time for last-minute shopping or sightseeing. Our representative will assist with your transfer to Singapore Changi Airport for your departure, marking the end of an unforgettable Singapore getaway.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Airport pickup and drop-off</li>
              <li>Accommodation in a 3-star or 4-star hotel on bed & breakfast basis</li>
              <li>Private English-speaking driver/guide for the entire journey</li>
              <li>All entry tickets and permits as required by the itinerary</li>
              <li>Transportation in a luxury air-conditioned vehicle for all sightseeing</li>
              <li>Singapore Panoramic City Tour</li>
              <li>Gardens by the Bay (Supertree Grove + Cloud Forest)</li>
              <li>Sentosa Island with Universal Studios entry</li>
              <li>Birds Paradise visit</li>
              <li>Night Safari experience</li>
              <li>SEA Aquarium entry</li>
              <li>Madame Tussauds with IOS and Boat Ride</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Airfare</li>
              <li>Personal expenses such as snacks, drinks, tips, laundry, and souvenirs</li>
              <li>Additional activities not mentioned in the itinerary</li>
              <li>Travel insurance (highly recommended)</li>
              <li>Visa fees (if applicable)</li>
              <li>Singapore SIM card (mandatory for all travelers)</li>
              <li>Peak season surcharges</li>
              <li>Meals not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Singapore</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>Singapore's tropical climate means it can get quite warm. Carry a bottle of water and apply sunscreen regularly.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing</h3>
            <p>Light, breathable clothing and comfortable walking shoes are a must. Don't forget an umbrella or hat for sun protection.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-landmark"></i>
            <h3>Cultural Sensitivity</h3>
            <p>Singapore is a city of diverse cultures. Dress modestly when visiting religious sites and always follow local laws.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-wifi"></i>
            <h3>Connectivity</h3>
            <p>Consider purchasing a local SIM card or renting a portable Wi-Fi device upon arrival for a smoother trip.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>While credit cards are widely accepted, having some Singapore Dollars on hand is handy for smaller purchases.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Singapore Getaway</h2>
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
            <label>Hotel Category Preference</label>
            <select>
              <option>3-Star Hotel</option>
              <option>4-Star Hotel</option>
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

export default SingaporePage;