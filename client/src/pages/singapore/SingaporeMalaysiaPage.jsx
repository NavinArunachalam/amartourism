import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./singapore-malaysia-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';
const SingaporeMalaysiaPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-singapore-malaysia">
        <h1>Singapore-Malaysia Escape</h1>
        <p>6 Nights / 7 Days - A Journey of Wonders</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" alt="Singapore Arrival" />
          <div className="day-content">
            <h3><span className="country-flag singapore-flag">SG</span> Day 1: Arrival in Singapore</h3>
            <p>Upon arrival at Changi Airport, you will be warmly welcomed by our representative, who will assist with your transfer to the hotel. Once you arrive, check in at your designated hotel and take some time to freshen up. In the afternoon, visit the iconic Gardens by the Bay, where you can explore the stunning Flower Dome and Cloud Forest. As evening approaches, experience the mesmerizing light show at the Supertree Grove, a highlight of the Gardens. Afterward, enjoy a delightful dinner at a local restaurant before returning to your hotel for a restful night.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3><span className="country-flag singapore-flag">SG</span> Day 2: Singapore City Tour</h3>
            <p>After a hearty breakfast at the hotel, embark on a comprehensive city tour of Singapore. Begin with a visit to Marina Bay Sands SkyPark, offering breathtaking views of the city skyline. Continue to Merlion Park, where you can see the famous Merlion statue, a symbol of Singapore. Explore the bustling Chinatown, known for its vibrant markets and historic temples, including the Buddha Tooth Relic Temple. After lunch at a local restaurant, head to Little India, a colorful district filled with shops, eateries, and the iconic Sri Veeramakalianman Temple. Spend the evening exploring Clarke Quay, a lively riverside area with various dining and entertainment options.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80" alt="Singapore City" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1582578492419-50ad2e3b53c3?auto=format&fit=crop&w=800&q=80" alt="Sentosa Island" />
          <div className="day-content">
            <h3><span className="country-flag singapore-flag">SG</span> Day 3: Sentosa Island Adventure</h3>
            <p>Start your day with breakfast at the hotel, then proceed to Sentosa Island for a day filled with adventure and fun. Enjoy a cable car ride to the island, offering panoramic views of Singapore's cityscape and the surrounding sea. Once on the island, visit the S.E.A. Aquarium, home to thousands of marine species. Next, experience the thrill of Universal Studios Singapore, where you can enjoy various rides and shows themed around popular movies and TV shows. In the late afternoon, relax at Siloso Beach or take part in beach activities. As evening falls, witness the spectacular Wings of Time show, a multimedia performance of water, laser, and fire effects.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3><span className="country-flag malaysia-flag">MY</span> Day 4: Transfer to Kuala Lumpur</h3>
            <p>After breakfast at the hotel, check out and transfer to Kuala Lumpur by flight. Upon arrival in Kuala Lumpur, the capital city of Malaysia, you will be transferred to your hotel for check-in. After freshening up, spend the afternoon exploring the Kuala Lumpur City Centre (KLCC). Visit the Petronas Twin Towers, the tallest twin towers in the world, and enjoy the breathtaking views from the observation deck. In the evening, explore the vibrant Bukit Bintang area, known for its shopping malls, street food, and nightlife. Enjoy dinner at a local restaurant before returning to your hotel for the night.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80" alt="Kuala Lumpur" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1593085512506-7165b5d10c9e?auto=format&fit=crop&w=800&q=80" alt="Kuala Lumpur City Tour" />
          <div className="day-content">
            <h3><span className="country-flag malaysia-flag">MY</span> Day 5: Kuala Lumpur City Tour</h3>
            <p>Begin your day with breakfast at the hotel. Today's city tour includes visits to some of Kuala Lumpur's most famous landmarks. Start with the Batu Caves, a limestone hill featuring a series of caves and cave temples, which is a popular Hindu shrine. Continue to the National Mosque and Independence Square, where you can learn about Malaysia's rich history and cultural heritage. After lunch, visit the Kuala Lumpur Tower, one of the tallest towers in the world, offering panoramic views of the city. End the day with a relaxing stroll through the Perdana Botanical Gardens before enjoying dinner at a traditional Malaysian restaurant.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3><span className="country-flag malaysia-flag">MY</span> Day 6: Genting Highlands</h3>
            <p>After breakfast, check out of your hotel in Kuala Lumpur and set out for a full-day excursion to Genting Highlands, a popular hill resort and entertainment destination. Enjoy a scenic drive to the highlands, and upon arrival, take the Genting Skyway cable car to the top. Visit the famous Genting Casino, explore the indoor theme park, and enjoy various attractions such as shopping, dining, and entertainment.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1622460241695-dde4c243a28e?auto=format&fit=crop&w=800&q=80" alt="Genting Highlands" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1558199141-3914e5f51c3a?auto=format&fit=crop&w=800&q=80" alt="Departure" />
          <div className="day-content">
            <h3><span className="country-flag malaysia-flag">MY</span> Day 7: Departure</h3>
            <p>On your final day, enjoy breakfast at your hotel. Take the morning to enjoy the beautiful scenery or explore any remaining attractions at your leisure. Depending on your flight schedule, you will be transferred back to Kuala Lumpur International Airport for your departure, marking the end of a memorable journey through Singapore and Malaysia.</p>
          </div>
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Airport pickup and drop-off in Singapore and Malaysia</li>
              <li>All transfers and sightseeing tours by air-conditioned private vehicle</li>
              <li>Entrance fees to attractions mentioned in the itinerary</li>
              <li>Gardens by the Bay, Marina Bay Sands SkyPark, Universal Studios Singapore</li>
              <li>Petronas Twin Towers, Batu Caves, and Genting Highlands</li>
              <li>English-speaking tour guide for all sightseeing tours</li>
              <li>3-star or 4-star accommodation in Singapore, Kuala Lumpur, and Genting Highlands</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Malaysia Visa fee (currently free for Indian tourists until Dec 2026)</li>
              <li>Any upgrade in hotel room category</li>
              <li>Optional activities and excursions not listed in the itinerary</li>
              <li>Additional costs due to flight cancellations or unforeseen circumstances</li>
              <li>Early check-in or late check-out at hotels</li>
              <li>Travel insurance beyond basic medical emergencies</li>
              <li>Personal expenses, tips, and souvenirs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="policy-section">
        <h2>Booking Policies</h2>
        <div className="policy-container">
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• <strong>30+ days before departure:</strong> 25% cancellation fee<br />
               • <strong>15-29 days before departure:</strong> 50% cancellation fee<br />
               • <strong>7-14 days before departure:</strong> 75% cancellation fee<br />
               • <strong>Less than 7 days or no-show:</strong> No refund<br />
               • In case of cancellation due to natural disasters or unforeseen circumstances, partial refund may be provided at the discretion of the travel agency.</p>
          </div>
          <div className="policy-box">
            <h3>Document Requirements</h3>
            <p>• <strong>Original Passport:</strong> Must have a minimum of 6 months validity from the date of tour arrival along with sufficient blank pages for the stamping of visa.<br />
               • <strong>Valid Tourist Visa:</strong> Required for the duration of the tour.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-suitcase"></i>
            <h3>Luggage</h3>
            <p>Carry less and light luggage, use a four-wheel small or medium suitcase (one per person). This ensures smart travel without inconveniences.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-bag-shopping"></i>
            <h3>Day Bag</h3>
            <p>Carry a cross-shoulder bag or haversack for your handy needs. This ensures comfort during sightseeing and makes photography easier.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-umbrella-beach"></i>
            <h3>Accessories</h3>
            <p>A smart cap/hat and sunglasses are essential items for your travel kit to protect from the sun.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Snacks</h3>
            <p>Though meals are provided, carry dry snacks in small sealed packets for munching during air travel or road journeys.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing</h3>
            <p>Ensure that your clothing and footwear is suitable for the destinations you are travelling to.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Singapore-Malaysia Escape</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
         <FormFilling/>   </section>

    
    </div>
  );
};

export default SingaporeMalaysiaPage;