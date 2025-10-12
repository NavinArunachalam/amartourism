import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./munnar-hero.css";

const MunnarPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-munnar">
        <h1>Munnar - Paradise</h1>
        <p>3 Nights / 4 Days - Kerala's Hill Station Gem</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1588666309995-63aae5a1c4c4?auto=format&fit=crop&w=800&q=80" alt="Cochin Arrival" />
          <div className="day-content">
            <h3>Day 1: Cochin Arrival and Munnar Transfer (Approx. 140 km / 4 hours)</h3>
            <p>Upon your arrival at Cochin International Airport or Ernakulam Railway Station, you'll be met by our representative. Depart for Munnar, a scenic hill station in Kerala. En route, stop at Cheyappara and Valara Waterfalls for picturesque views. Arrive in Munnar and check into your hotel. Spend the evening at leisure, exploring local markets or relaxing at your hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Munnar Sightseeing</h3>
            <p>Enjoy breakfast at the hotel. Visit Eravikulam National Park, home to the endangered Nilgiri Tahr and lush greenery. Explore Mattupetty Dam and take a boat ride amidst serene surroundings. Visit Echo Point, known for its scenic views and natural echo phenomenon. Explore Kundala Lake and enjoy a scenic pedal boat ride. Return to your hotel in Munnar.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884864-30ffc299f930?auto=format&fit=crop&w=800&q=80" alt="Munnar Sightseeing" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Alleppey Houseboat" />
          <div className="day-content">
            <h3>Day 3: Munnar to Alleppey Houseboat (Approx. 180 km / 5 hours)</h3>
            <p>After breakfast, check out from your hotel in Munnar. Depart for Alleppey, renowned for its backwaters and houseboat cruises. Arrive in Alleppey and board your traditional Kerala houseboat. Cruise through serene backwaters, witnessing the beautiful landscape. Enjoy delicious lunch and relax onboard. Experience magical sunset over the backwaters. Enjoy delicious dinner on the houseboat.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Alleppey to Kochi Drop (Approx. 80 km / 2.5 hours)</h3>
            <p>After breakfast on the houseboat, disembark and check out. Depart for Kochi, approximately 80 kilometers away (about 2.5 hours). Drop off at Kochi Airport or your preferred location in Kochi for your onward journey, with beautiful memories of Kerala's paradise.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Kochi Departure" />
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Pickup and drop from airport, railway station, or bus station</li>
              <li>Continental Breakfast at all hotels and resorts</li>
              <li>Children under 6 years complimentary</li>
              <li>Certified category accommodation on twin-sharing basis</li>
              <li>Experienced English/Hindi speaking driver throughout</li>
              <li>Private vehicle for sightseeing and transfers</li>
              <li>Houseboat exclusively on private basis</li>
              <li>All meals on houseboat (welcome drinks, snacks, tea, lunch, dinner, breakfast)</li>
              <li>Driver bata, toll, parking, night halt charges, fuel, and all taxes</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Flight, train, and bus tickets unless specifically mentioned</li>
              <li>All other meals except those mentioned above</li>
              <li>Entrance fees to amusement parks and boating charges</li>
              <li>Sightseeing spots not mentioned in itinerary</li>
              <li>Mandatory Gala Dinner on Christmas and New Year's Eve</li>
              <li>Freshen up on arrival or departure day if required</li>
              <li>Travel insurance and personal expenses</li>
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
            <p>• 25% of total package cost required for hotel confirmation<br />
               • Balance 25% should be paid on or before 30 days of travel date<br />
               • Remaining amount to be settled at check-in on Day 1</p>
          </div>
          <div className="policy-box">
            <h3>Optional Add-ons</h3>
            <p>• Upgrade to premium/luxury houseboat category available<br />
               • Vehicle upgrade to higher category available<br />
               • Entrance tickets for optional activities can be arranged<br />
               • All upgrades subject to differential payment</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Itinerary subject to change due to weather, road conditions<br />
               • Rates applicable for specified passenger count and dates<br />
               • Hotels subject to availability at booking time<br />
               • Early check-ins/late check-outs subject to availability & charges<br />
               • Vehicle AC may not operate in certain hill stations<br />
               • No insurance provided for accidents, sickness, theft<br />
               • Punctuality required; no refunds for missed tour parts</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Munnar & Alleppey</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-id-card"></i>
            <h3>ID Requirements</h3>
            <p>All guests must carry photo-identity with address proof for check-in. Foreign nationals need Passport and valid visa. Indian nationals can use Passport, Driving License, Voter ID, or Aadhaar Card.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-ship"></i>
            <h3>Houseboat Information</h3>
            <p>Check-in at 12 noon, check-out at 9 AM next day. AC operational from 9 PM to 6 AM in Deluxe category, available throughout in Premium/Luxury. Houseboats cannot cruise after evening hours.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Meal Preferences</h3>
            <p>Standard houseboat menu is non-vegetarian. Inform us at least 3 days in advance for different meal preferences. Special dietary requirements can be accommodated with prior notice.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun"></i>
            <h3>Weather Preparedness</h3>
            <p>Munnar weather can be unpredictable. Carry light woolens, raincoat/umbrella. Comfortable walking shoes essential for sightseeing. Sun protection recommended for daytime activities.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-baggage"></i>
            <h3>Baggage & Insurance</h3>
            <p>All baggage and personal property at client's risk. Arrange insurance covering accidents, sickness, theft in home country. Travel light for convenience during transfers.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-clock"></i>
            <h3>Punctuality</h3>
            <p>Adhere to specified timeframes throughout tour. Account for potential delays when planning departure. No refunds for missed tour parts due to customer delays.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Munnar Paradise Getaway</h2>
        <p>Fill out the form below, and our travel experts will help customize your Kerala experience.</p>
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
            <label>Houseboat Category</label>
            <select>
              <option>Deluxe Houseboat</option>
              <option>Premium Houseboat</option>
              <option>Luxury Houseboat</option>
              <option>Customized Selection</option>
            </select>
          </div>
          <div className="form-group">
            <label>Meal Preference</label>
            <select>
              <option>Non-Vegetarian (Standard)</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>Special Dietary Requirements</option>
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

export default MunnarPage;