import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./singapore5n-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const Singapore5NPage = () => {
  return (
     <div className="common-styles">
      <section className="hero-singapore5n">
        <h1>Exciting Singapore Getaway</h1>
        <p>5 Nights / 6 Days - Discover the Lion City's Marvels</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src=" /Singapore/Singapore.jpg" alt="Singapore Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Singapore and Night Safari</h3>
            <p>Upon arrival at Singapore Changi Airport, you will be warmly welcomed by our representative who will assist with your transfer to your hotel. After checking in and freshening up, enjoy lunch at a local restaurant. Spend the afternoon at leisure. In the evening, head out for the famous Night Safari, the world's first nocturnal zoo. Experience the thrill of seeing animals in their natural habitat during the night and enjoy a guided tram ride that takes you across the various geographical zones of the world.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Sentosa Island Adventure</h3>
            <p>Start your day with a delicious breakfast at the hotel before heading out to Sentosa Island. Enjoy a scenic cable car ride to the island and spend the day exploring its various attractions. Visit Universal Studios Singapore for thrilling rides and shows, or relax on the beautiful beaches. Don't miss the SEA Aquarium, one of the world's largest, and the Adventure Cove Waterpark for water rides and encounters with marine life. After a full day of adventure, enjoy dinner at a local restaurant on Sentosa.</p>
          </div>
          <img src=" /Singapore/sentosa.jpg" alt="Sentosa Island" />
        </div>
        <div className="day">
          <img src=" /Singapore/Gardens by the Bay.jpg" alt="Gardens by the Bay" />
          <div className="day-content">
            <h3>Day 3: Gardens by the Bay and Marina Bay Sands</h3>
            <p>After breakfast at the hotel, head to the iconic Gardens by the Bay. Explore the stunning Flower Dome, Cloud Forest, and the towering Supertree Grove. Enjoy a light lunch at the Gardens before visiting the nearby Marina Bay Sands. Take a stroll along the Marina Bay Waterfront Promenade and visit the ArtScience Museum for interactive exhibits. In the evening, ascend to the Marina Bay Sands SkyPark Observation Deck for breathtaking views of the Singapore skyline. End your day with a delicious dinner at one of the many restaurants at Marina Bay Sands.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Cultural and Historical Exploration</h3>
            <p>Begin your day with a hearty breakfast at the hotel, followed by a cultural exploration of Singapore. Visit Chinatown to explore the bustling markets and historic temples, such as the Buddha Tooth Relic Temple. Continue to Little India, where you can experience the vibrant colors, sounds, and scents of this cultural enclave. Have lunch at a traditional Indian restaurant. In the afternoon, head to Kampong Glam, home to the Sultan Mosque and a variety of boutique shops and cafes.</p>
          </div>
          <img src=" /Singapore/Marine Life.jpg" alt="Cultural Singapore" />
        </div>
        <div className="day">
          <img src=" /Singapore/Birds Paradise.jpg" alt="Singapore Zoo" />
          <div className="day-content">
            <h3>Day 5: Adventure and Shopping Extravaganza</h3>
            <p>Enjoy breakfast at the hotel before setting out for a day of adventure and shopping. Start your day at Singapore Zoo, renowned for its 'open concept' allowing visitors to experience animals up close in naturalistic settings. Continue to the River Safari for a unique experience of wildlife along the world's iconic rivers. After lunch, head to Orchard Road, Singapore's famous shopping district, for an afternoon of shopping. Explore the wide range of malls and boutiques. In the evening, enjoy a farewell dinner at a fine dining restaurant.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Departure from Singapore</h3>
            <p>On your last day, enjoy a leisurely breakfast at the hotel. Depending on your flight schedule, you may have some time for last-minute shopping or sightseeing. Our representative will assist with your transfer to Singapore Changi Airport for your departure, marking the end of an unforgettable Singapore getaway.</p>
          </div>
          <img src=" /Singapore/Departure from Singapore.jpg" alt="Singapore Departure" />
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Airport pickup and drop-off</li>
              <li>Accommodation in a 4-star hotel on bed & breakfast basis</li>
              <li>Private English-speaking driver/guide for the entire journey</li>
              <li>All entry tickets and permits as required by the itinerary</li>
              <li>Transportation in a luxury air-conditioned vehicle for all sightseeing</li>
              <li>Breakfast, lunch, and dinner as specified in the itinerary</li>
              <li>Night Safari experience</li>
              <li>Sentosa Island with cable car ride</li>
              <li>Universal Studios Singapore entry</li>
              <li>SEA Aquarium visit</li>
              <li>Gardens by the Bay (Flower Dome, Cloud Forest, Supertree Grove)</li>
              <li>Marina Bay Sands SkyPark Observation Deck</li>
              <li>Cultural tours of Chinatown, Little India, and Kampong Glam</li>
              <li>Singapore Zoo and River Safari visits</li>
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
              <li>Singapore SIM card</li>
              <li>Peak season surcharges</li>
              <li>Meals not mentioned in inclusions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Booking Policies</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Payment Policy</h3>
            <p>• 20% deposit required upon booking confirmation.<br />
               • 80% balance due 30 days prior to the tour start date.<br />
               • All bookings are non-refundable and cannot be used with other promotions.</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• <strong>30+ Days Before Departure:</strong> 50% refund<br />
               • <strong>15–29 Days Before Departure:</strong> 25% refund<br />
               • <strong>Less Than 15 Days Before Departure:</strong> Non-refundable<br />
               • <strong>Processing Time:</strong> Refunds will be processed within 30 days of the cancellation request, minus any fees</p>
          </div>
          <div className="policy-box">
            <h3>Document Requirements</h3>
            <p>• <strong>Original Passport:</strong> Must have a minimum of 6 months validity from the date of arrival in Singapore and sufficient blank pages for visa stamps.<br />
               • <strong>Valid Tourist Visa:</strong> Ensure you have a valid tourist visa for the duration of your stay in Singapore (if required based on your nationality).</p>
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
         <FormFilling/>    </section>

        </div>
  );
};

export default Singapore5NPage;