import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./dubai-hero.css";

const DubaiDiscoveryPage  = () => {
  return (
   <div className="common-styles">
      <section className="hero-dubai-discovery">
        <h1>Dazzling Dubai Discovery</h1>
        <p>4 Nights / 5 Days - Experience the Magic of Dubai</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1546412414-e1885e51cefe?auto=format&fit=crop&w=800&q=80" alt="Dubai Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival at Dubai - Dhow Cruise</h3>
            <p>Welcome to Dubai. Arrive at Dubai airport and transfer to your hotel. On arrival check in to your hotel. In the evening proceed for Dhow Cruise with buffet dinner. Experience cruising on a traditional wooden vessel surrounded by Arabic music and buffet dinner in the heart of Dubai creek. On completion of dinner, transfer to your hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Discovering Dubai's Charm</h3>
            <p>Today you will experience the historic sites and vibrant cosmopolitan life of Dubai on this comprehensive sightseeing tour of the city. Pass by Jumeirah Mosque, stop at Jumeiah Public Beach, passing by Jumeirah Beach Hotel, and stop for photo at Burj Al Arab the most luxurious and tallest standing hotel in the world. Then pass by the Sheikh's Mohamed palace. Ascend the world's tallest building with a visit to "At The Top" – Burj Khalifa during normal hours. (Tickets and transfers included)</p>
          </div>
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Burj Khalifa" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1576866206015-5c7c514c4a09?auto=format&fit=crop&w=800&q=80" alt="Dubai Desert" />
          <div className="day-content">
            <h3>Day 3: A Blend of Culture and Adventure</h3>
            <p>Morning: Visit the Dubai Frame, an architectural marvel offering panoramic views of old and modern Dubai. Transfers are included for your convenience. Evening: Embark on a thrilling Desert Safari, complete with dune bashing, cultural performances, and a sumptuous BBQ dinner under the stars.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Abu Dhabi City Tour</h3>
            <p>Visit Sheikh Zayed Grand Mosque – a masterpiece of Islamic architecture. Explore Abu Dhabi's landmarks: Emirates Palace, Corniche, and more. Stop at BAPS Hindu Mandir – a newly opened spiritual site. Return to Dubai for overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2d7?auto=format&fit=crop&w=800&q=80" alt="Abu Dhabi" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1582545380460-2a40e3c91c6f?auto=format&fit=crop&w=800&q=80" alt="Dubai Departure" />
          <div className="day-content">
            <h3>Day 5: Bye Bye Dubai</h3>
            <p>After a memorable stay, check out from your hotel. A transfer will take you to the airport for your departure, leaving you with wonderful memories of your Dubai adventure.</p>
          </div>
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>4 nights accommodation at Smana Hotel Al Raffa (Three Star)</li>
              <li>Bed & Breakfast meal plan</li>
              <li>Arrival and departure airport transfers on private basis</li>
              <li>Abu Dhabi City Tour with BAPS Mandir visit (Seat in Coach)</li>
              <li>Burj Khalifa "At The Top" - Normal Hours (Seat in Coach)</li>
              <li>Half Day Dubai City Tour (Seat in Coach)</li>
              <li>Dubai Desert Safari with BBQ Dinner (Seat in Coach)</li>
              <li>Dubai Frame visit (Seat in Coach)</li>
              <li>Marina Dhow Cruise with Dinner (Seat in Coach)</li>
              <li>Museum Of The Future - Subject to Availability (Private Transfer)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>U.A.E. Tourist Visa</li>
              <li>OK to Board charges</li>
              <li>Tourism Dirham Fee (to be paid directly at hotel)</li>
              <li>Travel Insurance</li>
              <li>Personal expenses (meals, water, laundry, telephone calls, tips)</li>
              <li>Miracle Garden tickets</li>
              <li>Any items not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Booking Policies & Terms</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>• <strong>Deposit:</strong> An initial deposit at the time of booking (typically 10–30% of the total package cost).<br />
               • <strong>Installments:</strong> Option to pay the remaining balance in one or more installments before departure.<br />
               • <strong>Full Payment:</strong> Full payment required a certain number of days before the departure date (usually 30–60 days prior).</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• All rates are dynamic and subject to availability at the time of confirmation.<br />
               • Airport transfers based on DXB airport; supplement charges apply for DWC/SHJ/AUH airports.<br />
               • Upgraded excursions and Q fast services available at additional cost.<br />
               • Many UAE hotels require a security deposit during check-in (refundable).<br />
               • Museum of the Future is subject to availability and requires 100% non-refundable payment in advance.</p>
          </div>
          <div className="policy-box">
            <h3>Optional Add-ons</h3>
            <p>• <strong>DOLPHINARIUM SHOW:</strong> Additional AED 5 per person, plus park fee to be paid at Creek Park entrance (charge by Dubai Municipality, non-negotiable).</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Dubai</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Dress Code</h3>
            <p>While Dubai is modern, it's respectful to dress modestly, especially when visiting religious sites like mosques.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-sun"></i>
            <h3>Weather</h3>
            <p>Dubai has a desert climate. Stay hydrated, use sunscreen, and wear light clothing during the day.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Local currency is UAE Dirham (AED). Credit cards are widely accepted, but carry some cash for small purchases.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-mosque"></i>
            <h3>Cultural Respect</h3>
            <p>Public displays of affection are frowned upon. Avoid drinking alcohol in public places outside licensed venues.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-camera"></i>
            <h3>Photography</h3>
            <p>Always ask for permission before photographing local people, especially women. Avoid taking pictures of government buildings.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Dubai Adventure</h2>
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

export default DubaiDiscoveryPage;