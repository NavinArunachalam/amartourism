import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./new-zealand-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';
const NewZealandPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-new-zealand">
        <h1>New Zealand 10 Days / 9 Nights</h1>
        <p>Discover Auckland, Rotorua, Queenstown & Christchurch</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80" alt="Auckland Skyline" />
          <div className="day-content">
            <h3>Day 1: Arrival at Auckland - Mon, 27 Apr, 2026</h3>
            <p>Kia Ora! Welcome to New Zealand, the youngest country on Earth! Upon your arrival in Auckland, fondly known as 'The City of Sails,' our representative will extend a warm welcome and transfer you to your hotel. The remainder of the day is yours to enjoy at leisure, allowing you the opportunity to explore the city and uncover why Auckland is acclaimed as one of the finest destinations worldwide.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Auckland Highlights Luxury Tour with Sky Tower Entry - Tue, 28 Apr, 2026</h3>
            <p>Experience the best of Auckland City and the iconic Sky Tower in one fantastic half-day tour. Your knowledgeable guide will lead you to Auckland City's most iconic highlights. Marvel at beautiful beaches, panoramic views of several volcanoes, the Auckland Harbour Bridge, West haven Marina, and the Auckland Domain. The tour concludes at Auckland's iconic Sky Tower, standing at 328m, the tallest free-standing structure in the Southern Hemisphere.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1506905925340-14f5ada2c2d0?auto=format&fit=crop&w=800&q=80" alt="Auckland Sky Tower" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1578662996448-3a300e7c7d8a?auto=format&fit=crop&w=800&q=80" alt="Waitomo Caves" />
          <div className="day-content">
            <h3>Day 3: Transfer from Auckland to Rotorua with Waitomo Caves - Wed, 29 Apr, 2026</h3>
            <p>Embark on an enchanting one-day tour from Auckland to the mesmerizing Waitomo Glowworm Caves and the geothermal wonderland of Rotorua. Marvel at the intricate cave formations, including stalactites, stalagmites, and lime columns. Board a glowworm boat and embark on a serene cruise along the grotto river, where thousands of glowworms illuminate the darkness above you. Visit the Sets of Hobbiton movie before arriving in Rotorua.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Te Ra Guided tour with Agrodome Sheep Farm Tour - Thu, 30 Apr, 2026</h3>
            <p>Your knowledgeable guide will take you on an immersive journey through the heart of Māori culture at Te Pula. Explore the geothermal wonders of the Whakarewarewa Valley, with its bubbling mud pools, steaming vents, and the famous Pohutu Geyser. In the afternoon, visit the Agrodome for a unique and entertaining sheep experience featuring 19 breeds of sheep, a live shearing display, and an opportunity to hand-feed the friendly animals.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1578662996448-3a300e7c7d8a?auto=format&fit=crop&w=800&q=80" alt="Rotorua Geothermal" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Queenstown" />
          <div className="day-content">
            <h3>Day 5: Transfer from Rotorua to Queenstown - Fri, 01 May, 2026</h3>
            <p>In the morning, complete your check-out from the hotel, and our team will facilitate your transfer to the airport for your flight to Queenstown. Upon arrival in Queenstown, you will be transferred to your hotel for check-in. The remainder of the day is yours to explore Queenstown at your leisure. Whether you choose to wander along the shores of Lake Wakatipu, explore the vibrant streets, or take in the breathtaking mountain scenery.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Milford Sound Experience from Queenstown - Sat, 02 May, 2026</h3>
            <p>Embark on a truly exceptional Milford Sound day tour with our established and top-rated small group Milford Experience. Travel in comfort with our custom-made, 16-seat glass roof Mercedes touring vehicles. Upon reaching Milford Sound, embark on a breathtaking two-hour small boat nature cruise on the fjord. Witness cascading waterfalls, observe fur seals, penguins, and occasionally dolphins. The journey to Milford Sound is a full-day adventure from Queenstown.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Milford Sound" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Shotover Jet" />
          <div className="day-content">
            <h3>Day 7: Shotover Jet 60 min ride and time at Leisure - Sun, 03 May, 2026</h3>
            <p>Experience the unparalleled beauty and power of our canyons with the world's most exciting jet boat ride. Proudly owned by Ngāi Tahu, the Māori people of this land, our connection to the Kimiākau (Shotover River) dates back centuries. As the custodians of this land, we take pride in offering exclusive access to the spectacular Shotover Canyons, ensuring an experience that is deeply rooted in our cultural heritage.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Transfer from Queenstown to Christchurch (via Mount Cook) - Mon, 04 May, 2026</h3>
            <p>Embark on a breathtaking journey from Queenstown to Christchurch via Mt Cook on this small-group, fully-guided tour. This unique experience combines two of the most stunning locations in the South Island, providing ample time and options to indulge in activities that set it apart from other tours. Led by our famously passionate tour guides, this tour is an immersive exploration of the South Island's natural beauty.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Mount Cook" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Christchurch" />
          <div className="day-content">
            <h3>Day 9: Half Day Christchurch City tour with Antarctic centre - Tue, 05 May, 2026</h3>
            <p>Start your day with a 3-hour guided tour of Christchurch, exploring the city's key landmarks and attractions. Discover the vibrant culture, historic sites, and beautiful parks as you navigate through the central business district and beyond. After your city tour, visit the International Antarctic Centre, where you can experience the thrill of Antarctica without leaving Christchurch. Enjoy interactive exhibits, see the Antarctic wildlife, and feel the chill of the Antarctic storm room.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 10: Departure from Christchurch - Wed, 06 May, 2026</h3>
            <p>This morning, complete the check-out process from your hotel, and our team will arrange your transfer to the airport for your return flight home. As you board your flight, reflect on the happy memories and experiences gathered during your tour. Your journey concludes, and we hope you carry with you cherished moments and a sense of fulfillment from your travels.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1570661609810-4fba9d0c8f0e?auto=format&fit=crop&w=800&q=80" alt="Departure" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>09 Nights Accommodation in 4 Star Hotels</li>
              <li>Daily Breakfast, Lunch and Dinner (HALAL & VEG OPTIONS)</li>
              <li>Auckland Highlights Luxury Tour with Sky Tower Entry</li>
              <li>Waitomo Cave Tour</li>
              <li>Hobbiton Tour</li>
              <li>Milford Sound Experience</li>
              <li>Shotover Jet, Mt Cook & Lake Tekapo</li>
              <li>Christchurch Attractions Combo Pass (Gondola and Tram)</li>
              <li>Experienced Tour Guide</li>
              <li>Single Entry New Zealand Tourist Visa with Insurance</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Passport fees, immunization costs, city taxes at the hotel</li>
              <li>Optional enhancements like room or flight upgrades</li>
              <li>Early check-in or late check-out from hotels</li>
              <li>International and/or domestic flights</li>
              <li>Excess baggage charges</li>
              <li>Tips for services and experiences</li>
              <li>Personal expenses and optional tours</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for New Zealand</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Local currency is New Zealand Dollar (NZD). Credit cards are widely accepted. ATMs are available in all major towns.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>Variable climate with four distinct seasons. Pack layers and waterproof clothing. Weather can change quickly.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type I plugs (230V). Carry a universal adapter if needed. Outlets have switches that need to be turned on.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Respect Māori culture and traditions. Remove shoes when entering marae (Māori meeting grounds). Be environmentally conscious.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>New Zealand is very safe. Take normal precautions with belongings. Follow safety instructions for outdoor activities.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
          <FormFilling/>         </section>
    </div>
  );
};

export default NewZealandPage;