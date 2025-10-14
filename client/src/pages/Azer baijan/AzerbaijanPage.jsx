import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./azerbaijan-hero.css";
import FormFilling from "@/components/FormFilling.jsx";

const AzerbaijanPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-azerbaijan">
        <h1>Explore Azerbaijan</h1>
        <p>4 Nights / 5 Days - Discover the Land of Fire</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>
      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" alt="Baku Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival at Baku</h3>
            <p>Arrive at Heydar Aliyev International Airport, Baku. Meet and greet by our representative. Private transfer to the hotel and check-in. Enjoy the evening at leisure to explore nearby attractions or relax.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Baku City Tour</h3>
            <p>Enjoy breakfast at the hotel. Explore the historic heart of Baku at Icherisheher (Old City), including the iconic Maiden Tower and Palace of the Shirvanshahs. Visit Juma Mosque, Heydar Aliyev Centre, Flame Towers, Baku Boulevard, Carpet Museum, Little Venice, Fountain Square & Nizami Street. Evening transfer back to the hotel.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1624444006689-1c5bd4b6fb3e?auto=format&fit=crop&w=800&q=80" alt="Baku City" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1646817196192-30f3a4d0c433?auto=format&fit=crop&w=800&q=80" alt="Gabala" />
          <div className="day-content">
            <h3>Day 3: Gabala Day Tour</h3>
            <p>Enjoy breakfast at the hotel. Transfer to Gabala, a scenic town surrounded by the Caucasus Mountains. Experience the cable car ride at Tufandag Mountain Resort with panoramic views (2 stops included). Visit Nohur Lake and Gabala Waterfalls. Return to Baku in the evening.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Gobustan & Absheron Tour</h3>
            <p>After breakfast, visit Gobustan National Park to discover ancient rock carvings (UNESCO World Heritage Site). Explore the Gobustan Museum, witness the unique Mud Volcanoes, visit the Fire Temple (Ateshgah), and see the Burning Mountain (Yanar Dag). Return to the hotel after the tour.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1580548254596-1efd3777a2d3?auto=format&fit=crop&w=800&q=80" alt="Gobustan" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" alt="Baku Departure" />
          <div className="day-content">
            <h3>Day 5: Departure from Baku</h3>
            <p>Enjoy breakfast at the hotel. Enjoy a shopping tour before checking out. Transfer to Heydar Aliyev International Airport for your departure flight. Bid farewell to Azerbaijan with wonderful memories!</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Visa assistance</li>
              <li>English-speaking driver and guide</li>
              <li>Private transportation throughout the trip</li>
              <li>4-night stay with breakfast</li>
              <li>Entry tickets for Fire Temple</li>
              <li>Entry tickets for Burning Mountain</li>
              <li>Entry tickets for Gobustan Museum</li>
              <li>Gabala Cable Car (2 stops)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Flight tickets</li>
              <li>Travel insurance</li>
              <li>Lada car for Mud Volcano (off-road vehicle)</li>
              <li>Meals, snacks, drinks, and activities not mentioned</li>
              <li>Additional cultural experiences or shows</li>
              <li>Any transport outside the specified itinerary</li>
              <li>Anything not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="policy-section">
        <h2>Booking Policies & Important Information</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>
              • <strong>Booking Confirmation:</strong> 20% deposit required after confirmation<br />
              • <strong>Balance Payment:</strong> Remaining amount due 7 days before tour<br />
              • <strong>Instant Bookings:</strong> 100% payment required upfront<br />
              • <strong>4-star & 5-star Packages:</strong> 40% confirmation amount required<br />
              • <strong>Invoice:</strong> Issued only after full payment received<br />
              • No booking held without confirmation amount
            </p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>
              • Once package is confirmed, quoted cost is final and non-negotiable<br />
              • No TAC (Travel Agent Commission) or TDS applicable<br />
              • Package modifications require new quotation and may alter cost<br />
              • Off-road Lada car for Mud Volcanoes is not included in package<br />
              • Additional cultural experiences can be arranged at extra cost
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Essential Travel Tips for Azerbaijan</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Azerbaijani Manat (AZN) is the official currency. Credit cards are widely accepted in cities, but carry cash for rural areas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-language"></i>
            <h3>Language</h3>
            <p>Azerbaijani is the official language. English is spoken in tourist areas and by younger generations in cities.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun"></i>
            <h3>Weather</h3>
            <p>April has pleasant spring weather. Pack light layers and a jacket for cooler evenings. Comfortable walking shoes are essential.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Local Etiquette</h3>
            <p>Dress modestly when visiting religious sites. Respect local customs and traditions. Azerbaijanis are known for their hospitality.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Azerbaijan is generally safe, but keep valuables secure. Be aware of your surroundings, especially in crowded areas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power & Connectivity</h3>
            <p>Power plugs are Type C and F, 220V. Carry a universal adapter. SIM cards are readily available at the airport and in cities.</p>
          </div>
        </div>
      </section>
      <section className="booking" id="booking">
        <h2>Book Your Azerbaijan Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your Azerbaijan vacation.</p>
              <FormFilling />
        </section>
      </div>
  );
};

export default AzerbaijanPage;