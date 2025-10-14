import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./delhi-hero.css";
import FormFilling from "@/components/FormFilling.jsx";

const GoldenTrianglePage = () => {
  return (
     <div className="common-styles">
      <section className="hero-golden-triangle">
        <h1>Golden Triangle</h1>
        <p>4 Nights / 5 Days - Delhi Agra Jaipur</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" alt="Delhi Arrival" />
          <div className="day-content">
            <h3>Day 1: Arriving at Delhi Airport & Proceed for Sightseeing</h3>
            <p>Meet our representatives at Delhi Airport and get transferred to the Hotel. In the afternoon you will be taken to Rajghat and Jantar Mantar. Post that, in the evening visit Parliament House, Rashtrapati Bhavan, and India Gate. Return back to Hotel for overnight stay.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Delhi to Agra - Transfer & Sightseeing</h3>
            <p>Early morning pick-up from Delhi to transfer to Agra (approx. 230 km, 4-hour drive). Visit the Taj Mahal, one of the Seven Wonders of the World. Explore the Agra Fort, a UNESCO World Heritage Site. Visit the Itmad-Ud-Daulah's Tomb (Baby Taj). Drop-off at your hotel for overnight stay in Agra.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" alt="Taj Mahal" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596383523217-4dd011266d34?auto=format&fit=crop&w=800&q=80" alt="Jaipur" />
          <div className="day-content">
            <h3>Day 3: Agra to Jaipur - Transfer & Sightseeing</h3>
            <p>Start early, take your breakfast and check out from the hotel. Head on to Jaipur city (4-5 hours drive). Arrive in Jaipur, check in the hotel and take some rest. Begin your Jaipur tour with a short stopover at the iconic Hawa Mahal. Next, explore the Jantar Mantar observatory, a UNESCO World Heritage Site. In the evening, go to Govind Dev Ji Temple. Later stroll through the local markets for souvenirs.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Jaipur - Local Sightseeing</h3>
            <p>After breakfast, begin your day with local sightseeing. Visit Amer Fort, which has the 3rd largest wall in the World. Next, visit Jaigarh Fort and Nahargarh Fort to experience panoramic views of the city. Later visit City Palace, the residence of the current Maharana. Come back to the hotel for an overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1477587458880-447c0c034691?auto=format&fit=crop&w=800&q=80" alt="Amer Fort" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1601327020796-3654c595e32d?auto=format&fit=crop&w=800&q=80" alt="Jaipur Departure" />
          <div className="day-content">
            <h3>Day 5: Jaipur - Departure</h3>
            <p>After breakfast, check out from the hotel and head to the nearest airport for your departure. Your Golden Triangle tour concludes with beautiful memories of India's rich cultural heritage.</p>
          </div>
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Accommodations at mentioned Hotels</li>
              <li>Transportation in Innova Crysta</li>
              <li>Breakfast & Dinner</li>
              <li>All transfers and sightseeing as per itinerary</li>
              <li>Driver allowances, parking charges, and toll taxes</li>
              <li>All applicable taxes</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Air fare/train fare</li>
              <li>Entrance tickets for all sightseeing</li>
              <li>Lunch and any other meals not mentioned</li>
              <li>Any other personal expenses</li>
              <li>Guide charges</li>
              <li>Travel insurance</li>
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
            <p>• 25% of the total package cost at the time of booking to confirm your reservation<br />
               • 50% of the total package cost 30 days prior to the start of the tour<br />
               • 25% of the total package cost on arrival before the start of the tour</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• Cancellation 30 days or more before departure: Full refund minus processing fee (approx. 10%)<br />
               • Cancellation between 29 to 15 days before departure: 50% refund of total package cost<br />
               • Cancellation 14 days or less before departure: No refund<br />
               • No refund for 5-star hotel bookings as per policy</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Rooms & Vehicles are subject to availability at the time of confirmation<br />
               • Rates are dynamic & can change until confirmation<br />
               • Check-in/Check-out as per standard hotel timings<br />
               • Early check-in/Late checkout subject to availability & additional cost<br />
               • Extra hours & kilometers applicable for additional vehicle usage<br />
               • Vehicle confirmed as per itinerary & not at personal disposal<br />
               • Vehicle access limited to safe, movable roads (Google Maps not always accurate)</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Golden Triangle Tour</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-suitcase"></i>
            <h3>Pack Light & Smart</h3>
            <p>Carry light luggage with one four-wheel suitcase per person. This ensures smart travel without inconveniences during multiple transfers between cities.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-sun"></i>
            <h3>Sun Protection</h3>
            <p>A smart cap/hat and sunglasses are essential for sightseeing in the sunny climate of North India. Sunscreen is also recommended.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-briefcase"></i>
            <h3>Travel Accessories Kit</h3>
            <p>Create your own travel accessories kit for a stress-free holiday. Include essentials like power bank, water bottle, and basic medications.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-bag-shopping"></i>
            <h3>Comfortable Bag</h3>
            <p>Carry a cross shoulder bag or haversack for handy needs during sightseeing. This ensures comfort and ease for photography during your tour.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-umbrella"></i>
            <h3>Weather Preparedness</h3>
            <p>If travelling during monsoon, carry a small umbrella or poncho. Ensure clothing and footwear is suitable for the destination and season.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cookie-bite"></i>
            <h3>Snacks & Hydration</h3>
            <p>Carry dry snacks in small sealed packets for munching during road journeys. Stay hydrated, especially during summer months.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Golden Triangle Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your cultural journey through India's heritage.</p>
        <FormFilling/>      </section>

      
    </div>
  );
};

export default GoldenTrianglePage;