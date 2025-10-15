import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import  "../../styles/common.css";
import "./bali-4n-hero.css";
import FormFilling from "@/components/FormFilling.jsx";
const Bali4NPage = () => {
  return (
 
       <div className="common-styles">  
      <section className="hero-bali-4n">
        <h1>Bali Bliss: Adventure</h1>
        <p>4 Nights / 5 Days - Discover the Magic of Bali</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>
      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="/bali/bali.jpg" alt="Bali Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Bali</h3>
            <p>Upon arrival at Ngurah Rai International Airport, you'll be greeted with Balinese garlands and a warm welcome. Enjoy a private car transfer to your luxurious hotel, check-in, and relax. Spend the rest of the day relaxing or exploring nearby areas. Return to your hotel to unwind and rest for the next day's adventures.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Adventure & Culture</h3>
            <p>Start your day with a delicious breakfast, blending local and international flavors. Enjoy thrilling water sports at the beach, including 1 round of Banana Boat riding. Visit the iconic Uluwatu Temple for breathtaking ocean views and a chance to watch the Kecak Fire Dance at sunset. Return to your hotel to relax and rest, ready for tomorrow's adventures.</p>
          </div>
          <img src="/bali/culture.jpg" alt="Uluwatu Temple" />
        </div>
        <div className="day">
          <img src="/bali/explore.jpg" alt="Rice Terraces" />
          <div className="day-content">
            <h3>Day 3: Scenic Bali Exploration</h3>
            <p>Start with a hearty breakfast at your hotel, then explore Bali's famous Rice Terraces. Visit Kintamani for panoramic views of Mount Batur and Lake Batur. Tour a traditional coffee plantation and sample Bali's famous Luwak coffee. Experience the spiritual atmosphere of Tampak Siring Holy Spring Temple. Return to your hotel to relax and reflect on a day of beauty and culture.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Nusa Penida Island Adventure</h3>
            <p>Start with a hearty breakfast at your hotel. Transfer to Sanur Port for your Nusa Penida Island trip by fast boat. Explore Kelingking Beach's stunning cliffs and crystal-clear waters. Visit Angel's Billabong, a natural infinity pool surrounded by dramatic cliffs. Discover Broken Beach, where the sea flows through a natural arch. If time permits, enjoy the pristine beach and clear waters of Crystal Bay. Return to your hotel to relax and reflect on a day of unforgettable sights.</p>
          </div>
          <img src="\bali\nusa.jpg" alt="Nusa Penida" />
        </div>
        <div className="day">
          <img src="\bali\Departure.jpg" alt="Bali Departure" />
          <div className="day-content">
            <h3>Day 5: Departure</h3>
            <p>Enjoy a delightful final breakfast in Bali, soaking in the island's serene atmosphere one last time, before you transfer to Ngurah Rai International Airport for your departure. Carry cherished memories of your Bali adventure as you embark on your journey home.</p>
          </div>
        </div>
      </section>
      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Welcome with Garland on arrival</li>
              <li>04 Nights stay with breakfast</li>
              <li>AC private car for transfers</li>
              <li>Entrance tickets and parking fees</li>
              <li>Sightseeing as per itinerary</li>
              <li>Return Fast Boat to Nusa Penida</li>
              <li>Mineral water on sightseeing days</li>
              <li>1 round of Banana Boat riding</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Airfare and visa charges (Visa on arrival fees approximately USD 35)</li>
              <li>Tips to the guide or driver</li>
              <li>Meals other than specified in the inclusions</li>
              <li>Any kind of taxes applicable in India</li>
              <li>TCS (Up to 7 Lakh - 5%, Above 7 Lakh - 20%)</li>
              <li>Travel insurance and other personal expenses</li>
              <li>Tourism tax of IDR 150,000</li>
              <li>Anything not mentioned in the inclusions</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="policy-section">
        <h2>Optional Add-ons</h2>
        <div className="addons-container">
          <div className="addon-card">
            <h4>English-Speaking Guide</h4>
            <p>Professional guide for enhanced cultural experience (excluding Nusa Penida)</p>
            <div className="addon-price">USD 30/day</div>
          </div>
          <div className="addon-card">
            <h4>Candlelight Dinner at Jimbaran Beach</h4>
            <p>Romantic beachfront dining experience</p>
            <div className="addon-price">USD 35/person</div>
          </div>
          <div className="addon-card">
            <h4>GWK Cultural Park</h4>
            <p>Visit to Garuda Wisnu Kencana Cultural Park</p>
            <div className="addon-price">USD 15/person</div>
          </div>
          <div className="addon-card">
            <h4>KECAK Dance</h4>
            <p>Traditional Balinese fire dance performance</p>
            <div className="addon-price">USD 15/person</div>
          </div>
        </div>
        <div className="policy-box">
          <h3>Combo Packages</h3>
          <p>
            • <strong>Combo Package 1:</strong> Risata Bali (4*) + Alam Puisi Pool Villa (3N+4N) | Superior Room + Pool Villa (Dependent on availability)<br />
            • <strong>Combo Package 2:</strong> Risata Bali (4*) + Kampung Ubud Pool Villa (3N+4N) | Superior Room + Pool Villa (Dependent on availability)
          </p>
        </div>
      </section>
      <section className="policy-section">
        <h2>Booking Policies & Important Notes</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>
              • 30% of the total cost is required to confirm the booking.<br />
              • The remaining balance must be paid 30 days before the travel date.<br />
              • For bookings within 30 days of travel, full payment is required upfront.
            </p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>
              • Complimentary Finns Beach Club Visit (subject to flight arrival schedule, Kuta/Seminyak areas only)<br />
              • Currency: All costs in USD or IDR (exchange rates may vary)<br />
              • Travel Insurance: Highly recommended for all customers<br />
              • Meals: Only breakfast included unless otherwise specified<br />
              • Visa on Arrival: Approximately USD 35 (customer's responsibility)<br />
              • Special requests should be informed at time of booking
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Essential Travel Tips for Bali</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Bali's local currency is Indonesian Rupiah (IDR). Exchange some currency in advance, but ATMs are widely available.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun"></i>
            <h3>Weather</h3>
            <p>Bali has a tropical climate. Pack light, breathable clothing, sunscreen, hat, and sunglasses. Bring a light jacket for cooler evenings.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-handshake"></i>
            <h3>Respect Local Culture</h3>
            <p>Dress modestly when visiting temples, covering your shoulders and knees. Respect local customs and traditions.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hand-holding-water"></i>
            <h3>Stay Hydrated</h3>
            <p>The tropical heat can be intense. Drink plenty of water throughout the day, especially during sightseeing.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-store"></i>
            <h3>Bargaining</h3>
            <p>Bargaining is common in markets and smaller shops. Negotiate prices with a friendly attitude.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Electricity</h3>
            <p>Bali uses 220V electricity with standard two-pin plugs. Bring a universal adapter if needed.</p>
          </div>
        </div>
      </section>
      <section className="booking" id="booking">
        <h2>Book Your Bali Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
      <FormFilling/>     </section>
   
    </div>
  );
};

export default Bali4NPage;