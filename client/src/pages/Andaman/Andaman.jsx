import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./andaman-hero.css";
import FormFilling from "@/components/FormFilling.jsx";

const AndamanPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-andaman">
        <h1>Andaman Islands</h1>
        <p>5 Nights / 6 Days - Discover Paradise in the Bay of Bengal</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1580548254596-1efd3777f8ef?auto=format&fit=crop&w=800&q=80" alt="Port Blair" />
          <div className="day-content">
            <h3>Day 1: Welcome to Andaman!</h3>
            <p>Meet our tour representative on arrival at Port Blair Airport. Transfer to hotel and check-in. After lunch, proceed for a city tour: Visit the historical monument of Cellular Jail and Carbyn's Cove Beach – one of the most picturesque beaches. Evening: Light & Sound Show at Cellular Jail depicting the heroic saga of Indian freedom struggle. Overnight stay at Port Blair.</p>
          </div>
        </div>

        <div className="day">
          <div className="day-content">
            <h3>Day 2: Port Blair to Havelock Island | Radhanagar Beach</h3>
            <p>Escorted to harbor to board a cruise to Havelock Island. Depart to one of Andaman's most amazing destinations – known for white sandy beaches, crystal clear waters, rich coral reefs, and lush green forests. Visit Radhanagar Beach, one of Asia's best beaches with white coral sand, gentle gradient, exceptionally calm and clear waters. Ideal for sunbathing and beach activities. Overnight Stay: Havelock.</p>
          </div>
          <img src="/andaman/PortBlair.jpg " />
        </div>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" alt="Elephant Beach" />
          <div className="day-content">
            <h3>Day 3: Elephant Beach Excursion</h3>
            <p>After breakfast, escorted to Havelock Jetty to take a speed boat to Elephant Beach and return back to Havelock. Elephant Beach is the most visited snorkeling destination in Havelock - a secluded beach with clear blue waters and sugary white sand. Complimentary snorkeling session with guide included. Option for glass bottom boat ride for underwater coral viewing. Overnight Stay: Havelock.</p>
          </div>
        </div>

        <div className="day">
          <div className="day-content">
            <h3>Day 4: Havelock to Neil Island | Bharatpur & Laxmanpur Beaches</h3>
            <p>Check-out from the hotel and transfer to Havelock Harbor to board a ferry to Neil Island. Neil Island is a tiny island with unexplored coral reefs, biodiversity, white sandy beaches, and tropical forests. Known as the 'vegetable bowl' of the Andaman. Explore Bharatpur Beach and Lakshmanpur Beach (Sunset Point). Relax on Laxmanpur Beach while enjoying the amazing sunset view. Overnight Stay: Neil Island.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" alt="Neil Island" />
        </div>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" alt="Natural Bridge" />
          <div className="day-content">
            <h3>Day 5: Neil Island to Port Blair | Natural Bridge, Museum & Shopping</h3>
            <p>Return journey to Port Blair enjoying scenic sights en route – often accompanied by dolphins and flying fishes. Visit Natural Bridge (Howrah Bridge) - main attraction of Neil Island with rock formation and marine life. Explore Anthropological Museum showcasing Negrito tribes and Mongoloid tribes. Visit Sagarika Emporium - government-managed fair-price emporium for wooden handicrafts and shell ornaments. Overnight Stay: Port Blair.</p>
          </div>
        </div>

        <div className="day">
          <div className="day-content">
            <h3>Day 6: Departure</h3>
            <p>Check-out from the hotel. Transfer to Port Blair Airport / Harbour for your onward journey. Back to home with wonderful and sweet memories of your Andaman adventure.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=800&q=80" alt="Andaman Departure" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Meet and Greet by our Tour Executives on arrival at Port Blair Airport</li>
              <li>Welcome drinks (non-alcoholic) upon hotel arrival</li>
              <li>All Transfers and Sightseeing as per the itinerary</li>
              <li>Private luxury A/C car for all transfers</li>
              <li>Accommodation for 2 nights at Port Blair (A/C rooms)</li>
              <li>Accommodation for 2 nights at Havelock Island (A/C cottages)</li>
              <li>Accommodation for 1 night at Neil Island (A/C cottages)</li>
              <li>Daily complimentary breakfast (CP plan)</li>
              <li>Entry permits, entry tickets, boat tickets wherever required</li>
              <li>Assistance at all arrival and departure points</li>
              <li>Private cruise for Havelock transfers</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Personal expenses (tips, laundry, telephone bills, beverages)</li>
              <li>Any meals unless specifically mentioned</li>
              <li>Domestic or International Airfare</li>
              <li>Optional, suggested, or unspecified activities</li>
              <li>Undersea Walk (Sea Walking), Scuba Diving, or similar activities</li>
              <li>Anything not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Complimentary Offerings</h2>
        <div className="addons-container">
          <div className="addon-card">
            <h4>Snorkeling at Elephant Beach</h4>
            <p>Enjoy a complimentary snorkeling session to explore the vibrant marine life with expert guides.</p>
          </div>
          <div className="addon-card">
            <h4>Candid Photoshoot</h4>
            <p>Capture beautiful moments with a complimentary candid photoshoot to remember your trip.</p>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Payment Policy & Important Information</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>
              • <strong>Advance Payment:</strong> 25% of total package cost required at booking<br />
              • <strong>Balance Payment:</strong> 75% due at least 7 days before tour start<br />
              • <strong>Payment Methods:</strong> Bank transfer, credit/debit card, or other specified methods
            </p>
          </div>
          <div className="policy-box">
            <h3>Island Information</h3>
            <p>
              • <strong>Port Blair:</strong> Capital city with historical significance and Cellular Jail<br />
              • <strong>Havelock Island:</strong> Pristine beaches including Radhanagar (Asia's best beach)<br />
              • <strong>Neil Island:</strong> Peaceful island known as 'vegetable bowl' with natural bridges<br />
              • All islands feature rich marine life, coral reefs, and tropical forests
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Andaman</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-suitcase"></i>
            <h3>Packing</h3>
            <p>Pack light, comfortable clothes for tropical climate. Bring sunscreen, swimwear, hat, and comfortable shoes for sightseeing and water activities.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-water"></i>
            <h3>Waterproof Protection</h3>
            <p>Carry waterproof bags to protect valuables during water activities. Essential for phones, cameras, and electronics.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tint"></i>
            <h3>Stay Hydrated</h3>
            <p>Hot and humid weather requires regular hydration. Carry a water bottle, especially during outdoor activities and water sports.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-calendar-check"></i>
            <h3>Advance Booking</h3>
            <p>Book popular activities like snorkeling and scuba diving in advance to secure spots, especially during peak seasons.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Respect Local Culture</h3>
            <p>Respect indigenous tribes and avoid interaction unless permitted. Follow local customs and dress modestly in certain areas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Carry Cash</h3>
            <p>ATMs available in Port Blair but scarce on smaller islands. Carry sufficient cash for Havelock and Neil Island visits.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-ship"></i>
            <h3>Sea Sickness</h3>
            <p>If prone to sea sickness, take tablets before ferry rides. Journeys can be bumpy, especially during monsoon season.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-id-card"></i>
            <h3>Permits & Documents</h3>
            <p>Carry all necessary permits and ID documents. Some areas require special permits for tribal areas or protected marine parks.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Andaman Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your island vacation.</p>
       <FormFilling/>
      </section>
    </div>
  );
};

export default AndamanPage;