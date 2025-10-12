import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./maldives-hero.css";

const MaldivesPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-maldives">
        <h1>Maldives Paradise</h1>
        <p>4 Nights / 5 Days - Tropical Island Escape</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" alt="Maldives Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival & Fishing Trip</h3>
            <p>Welcome to the Maldives! Arrival at Velana International Airport. Transfer to Maafushi Island. Enjoy a Sunset Fishing Trip & BBQ Dinner (5:00 PM – 7:30 PM). Overnight stay at the hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Snorkeling Excursion</h3>
            <p>Breakfast at the hotel. Half-Day Snorkeling Trip (9:00 AM – 2:30 PM) including: Two Snorkeling Points, Dolphin Watching, and Sandbank or Gulhi Island Visit. Dinner at the hotel. Overnight stay at the hotel.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80" alt="Snorkeling" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" alt="Island Relaxation" />
          <div className="day-content">
            <h3>Day 3: Leisure & Relaxation</h3>
            <p>Breakfast at the hotel. Leisure time to explore the island at your own pace. Complimentary Safari Boat Visit. Lunch at the hotel. Dinner at the hotel. Overnight stay at the hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Leisure & Relaxation</h3>
            <p>Breakfast at the hotel. Another day of leisure to explore the island at your own pace. Complimentary Safari Boat Visit. Lunch at the hotel. Dinner at the hotel. Overnight stay at the hotel.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" alt="Beach Relaxation" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" alt="Maldives Departure" />
          <div className="day-content">
            <h3>Day 5: Departure</h3>
            <p>Breakfast at the hotel. Checkout from the hotel. Transfer to Velana International Airport for departure with unforgettable memories of your Maldivian paradise getaway.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Accommodation in the selected hotel category</li>
              <li>Daily breakfast, lunch, and dinner as per itinerary</li>
              <li>Return airport transfers</li>
              <li>Sunset Fishing Trip with BBQ Dinner</li>
              <li>Half-Day Snorkeling Excursion</li>
              <li>Free Safari Boat Visit</li>
              <li>All taxes and service charges</li>
              <li>All tickets for excursions & sightseeing as per itinerary</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
            <li>Airfare and visa charges (Visa on arrival is free)</li>
            <li>Personal expenses</li>
            <li>Any additional activities not mentioned in the itinerary</li>
            <li>Alcohol and beverages (restricted on local islands)</li>
            <li>Travel insurance</li>
            <li>Tips and gratuities</li>
            <li>Anything not mentioned in inclusions</li>
          </ul>
          </div>
        </div>
      </section>
      <section className=" policy-section">
        <h2>Booking Policies & Important Information</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>• 25% of the total package cost at the time of booking to confirm your reservation<br />
               • 50% of the total package cost 30 days prior to the start of the tour<br />
               • 25% of the total package cost on arrival before the start of the tour</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• Cancellation 30 days or more before departure: Full refund minus processing fee<br />
               • Cancellation between 29 to 15 days before departure: 50% refund of total package cost<br />
               • Cancellation 14 days or less before departure: No refund<br />
               • No refund for resort island bookings as per policy</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Rooms are subject to availability at the time of confirmation<br />
               • Rates are dynamic & can change until confirmation<br />
               • Check-in/Check-out as per standard hotel timings<br />
               • Early check-in/Late checkout subject to availability & additional cost<br />
               • Maldives is a Muslim country; dress modestly in public areas<br />
               • Alcohol is restricted on local islands like Maafushi<br />
               • Weather conditions may affect excursion schedules</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Maldives</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather & Packing</h3>
            <p>May is part of the low season with warm temperatures (25-31°C) and occasional rain. Pack light cotton clothes, rainproof jackets, waterproof bags, and flip-flops.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-water"></i>
            <h3>Water Activities</h3>
            <p>Scuba diving and snorkeling are excellent in May with abundant marine life. Be prepared for occasional monsoon showers, usually short-lived.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Health & Safety</h3>
            <p>Use reef-safe sunscreen to protect your skin and the marine ecosystem. Carry mosquito repellent for outdoor evenings.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency & Payment</h3>
            <p>The local currency is Maldivian Rufiyaa (MVR), but USD is widely accepted. Carry small cash for local purchases as not all places accept cards.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-mosque"></i>
            <h3>Cultural Considerations</h3>
            <p>Maldives is a Muslim country; dress modestly in public areas and local islands. Alcohol is available only in resort islands & floating bars.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-camera"></i>
            <h3>Photography</h3>
            <p>Bring waterproof camera equipment for underwater photography. Respect local customs regarding photography, especially of people without permission.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Maldives Paradise</h2>
        <p>Fill out the form below, and our travel experts will help customize your tropical island escape.</p>
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
                <option>2 People (Couple)</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Accommodation Preference</label>
            <select>
              <option>Local Island Hotel (Maafushi)</option>
              <option>Resort Island</option>
              <option>Water Villa</option>
              <option>Beach Villa</option>
            </select>
          </div>
          <div className="form-group">
            <label>Special Interests</label>
            <select>
              <option>Relaxation & Beach Time</option>
              <option>Snorkeling & Diving</option>
              <option>Water Sports & Activities</option>
              <option>Romantic Getaway</option>
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

export default MaldivesPage;