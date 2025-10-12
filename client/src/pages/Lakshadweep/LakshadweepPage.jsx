import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./lakshadweep-hero.css";

const LakshadweepPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-lakshadweep">
        <h1>Lakshadweep Paradise Explorer</h1>
        <p>4 Nights / 5 Days - Tropical Island Paradise</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" alt="Agatti Arrival" />
          <div className="day-content">
            <h3>Day 1: Arriving at Agatti & Transfer to Kavaratti</h3>
            <p>On arrival at Agatti airport, our representative will receive you and transfer to Boat jetty point for vessel transfer to Kavaratti Island. On arrival at Kavaratti disembarkation point, our representative will escort you to the Resort. Kavaratti is the Headquarters of the Administration. The beautiful and calm lagoon offers an ideal spot for water sports. Enjoy your day at leisure in the beach resort.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Kavaratti Island Exploration</h3>
            <p>Morning after breakfast proceed for Village Tour for Kavaratti sightseeing which includes Marine Aquarium, Desalination Plant, Dolphin Dive Center etc. (Own Cost). Later visit Kavaratti beach then back to room and relax. Overnight stay at Kavaratti.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" alt="Kavaratti Island" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" alt="Bangaram Island" />
          <div className="day-content">
            <h3>Day 3: Kavaratti to Bangaram Island</h3>
            <p>After breakfast we will transfer you to the Boat jetty for vessel transfer to Bangaram island. On arrival at Bangaram island walk on the enrapturing sand of Bangaram. Mesmerizing blue sea, silver beaches, crystal clear water, a stretching canopy of palms, glittering coral reefs - everything you expect from a perfect holiday gateway. Enjoy water sports activities, beach games, or simply sunbathe under warm sunrays. Dinner will be served at 8:30 PM.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Bangaram Island - Thinnakkara Day Trip (Own Cost)</h3>
            <p>Today after breakfast, you can take optional tour to Thinnakkara day visit (Own Cost) or enjoy your day on the beach. Spend time with turtles and enjoy water activities. Return to Bangaram island for overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Thinnakkara Island" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80" alt="Agatti Departure" />
          <div className="day-content">
            <h3>Day 5: Departing to Agatti Airport with Memories</h3>
            <p>As your final hours approach, it's time to head to the airport. Enjoy the scenic ride through the island, passing by swaying palms, lush greenery, and glimpses of the glistening ocean. Arrive at Agatti Airport with a heart full of memories. As your plane takes off, gaze out the window for one last view of the island's sparkling waters and lush greenery.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Cost based on 02 Adults</li>
              <li>02 Nights Accommodation at Bangaram Island</li>
              <li>02 Nights accommodation at Kavaratti Island</li>
              <li>Boat/Ferry/Speed boat charges</li>
              <li>All meals (Breakfast + Lunch + Dinner)</li>
              <li>Rooms on Double/Twin sharing (OI Rooms)</li>
              <li>Permit Fee</li>
              <li>Vessel transfer charges (Agatti-Kavaratti-Agatti-Bangaram-Agatti)</li>
              <li>All Taxes</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Flight Fare/Train fare/Helicopter fare</li>
              <li>Additional Meal & En route Meal</li>
              <li>Covid Negative Certificate (48 Hrs before) if required</li>
              <li>Personal Expenses (Room Heater, Laundry, Telephone, Tips, etc.)</li>
              <li>Additional sightseeing or extra vehicle usage</li>
              <li>Camera Fees, Guide & Entry Fees</li>
              <li>Water Sports activities & Sightseeing charges</li>
              <li>X-Mas & New Year Surcharge & Gala dinner supplements</li>
              <li>Any fuel price or tax increases</li>
              <li>Anything not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Booking Policies & Important Information</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>• 25% deposit required at time of booking to confirm<br />
               • Remaining balance must be paid in full at least 30 days before tour start<br />
               • Airfare/Transport fare to be paid full in advance<br />
               • Proof of travel insurance required 15 days before tour</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• Cancellation before 30 days: 20% of total package charged<br />
               • Cancellation 16-30 days before: 35% of tour cost charged<br />
               • Cancellation 10-15 days before: 50% of tour cost charged<br />
               • No refund for cancellations within 10 days of departure</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Travel insurance is mandatory for all customers<br />
               • Insurance must cover trip cancellation, medical expenses, and personal liability<br />
               • Proof of insurance must be provided at least 15 days before tour start<br />
               • All bookings subject to availability at time of confirmation<br />
               • Itinerary may change due to weather or operational conditions<br />
               • Additional permits may be required for certain activities</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Lakshadweep</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-swimming-pool"></i>
            <h3>Water Activities</h3>
            <p>Carry appropriate swimwear and water shoes. Reef-safe sunscreen is recommended to protect marine life. Snorkeling gear can be rented locally.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Permits & Documentation</h3>
            <p>All visitors need permits to visit Lakshadweep. Carry original ID proof and permit documents at all times during your stay.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-umbrella-beach"></i>
            <h3>Beach Essentials</h3>
            <p>Pack light cotton clothing, sunglasses, hats, and beachwear. Evenings can be breezy, so carry light jackets or wraps.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-camera"></i>
            <h3>Photography</h3>
            <p>Underwater cameras are recommended for capturing marine life. Drones may require special permissions - check regulations beforehand.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-heartbeat"></i>
            <h3>Health & Safety</h3>
            <p>Carry basic medications, motion sickness pills for boat rides, and reef-safe insect repellent. Stay hydrated in the tropical climate.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tree"></i>
            <h3>Eco-Conscious Travel</h3>
            <p>Respect the fragile ecosystem. Avoid touching corals, don't litter, and use eco-friendly products. Follow guidelines for responsible tourism.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Lakshadweep Paradise</h2>
        <p>Fill out the form below, and our travel experts will help customize your island paradise experience.</p>
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
            <label>Island Preference</label>
            <select>
              <option>Standard Package (Kavaratti + Bangaram)</option>
              <option>Extended Stay Kavaratti</option>
              <option>Extended Stay Bangaram</option>
              <option>Custom Island Combination</option>
            </select>
          </div>
          <div className="form-group">
            <label>Water Sports Interest</label>
            <select>
              <option>Basic Snorkeling</option>
              <option>Advanced Diving</option>
              <option>All Water Activities</option>
              <option>Relaxed Beach Time Only</option>
            </select>
          </div>
          <div className="form-group">
            <label>Additional Message</label>
            <textarea placeholder="Any special requests or questions?"></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

      </div>
  );
};

export default LakshadweepPage;