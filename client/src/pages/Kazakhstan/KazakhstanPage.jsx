import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./kazakhstan-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const KazakhstanPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-kazakhstan">
        <h1>Kazakhstan Adventure</h1>
        <p>5 Nights / 6 Days - Explore the Heart of Central Asia</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src=" /kaz/Almaty.jpg" alt="Almaty Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival in Almaty & Kok Tobe</h3>
            <p>Arrive in Almaty and transfer to the hotel. Freshen up and relax. Visit Kok Tobe, a famous hilltop attraction offering panoramic city views. Enjoy the cable car ride to Kok Tobe. Overnight stay at the hotel in Almaty.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Shymbulak Mountains, Zenkov Cathedral & Walking Street</h3>
            <p>Breakfast at the hotel. Visit Shymbulak Ski Resort, known for its stunning mountain scenery. Take a cable car ride to explore the high-altitude resort. Explore Zenkov Cathedral, a historic wooden church. Stroll through Walking Street, experiencing local culture and shopping. Return to the hotel and overnight stay in Almaty.</p>
          </div>
          <img src=" /kaz/Shimbulak1.JPG" alt="Shymbulak Mountains" />
        </div>
        <div className="day">
          <img src=" /kaz/KolsaiLake.jpg" alt="Charyn Canyon" />
          <div className="day-content">
            <h3>Day 3: Kolsai Lake & Charyn Canyon</h3>
            <p>Breakfast at the hotel. Full-day tour to Kolsai Lake, famous for its breathtaking mountain landscapes. Visit Charyn Canyon, often called the "Grand Canyon of Kazakhstan." Enjoy an off-road vehicle experience at Charyn Canyon. Return to Almaty and overnight stay at the hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Almarasan Mountain OR Gorilla Energy Park</h3>
            <p>Breakfast at the hotel. Choose between visiting Almarasan Mountain, a scenic natural area for relaxation, or Gorilla Energy Park, an adventure park with fun activities. Return to the hotel and overnight stay in Almaty.</p>
          </div>
          <img src=" /kaz/Alma-Arasan.jpg" alt="Almarasan Mountain" />
        </div>
        <div className="day">
          <img src=" /kaz/Oi-Qaragai Mountain Resort.jpg" alt="Oi-Qaragai Mountain Resort" />
          <div className="day-content">
            <h3>Day 5: Oi-Qaragai Mountain Resort</h3>
            <p>Breakfast at the hotel. Day trip to Oi-Qaragai Mountain Resort, a picturesque retreat in the mountains. Enjoy the serene environment and optional activities. Return to Almaty and overnight stay at the hotel.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Shopping & Departure</h3>
            <p>Breakfast at the hotel. Enjoy shopping in Almaty, exploring local markets and malls. Transfer to the airport for departure with memories of Kazakhstan's stunning landscapes and rich culture.</p>
          </div>
          <img src="G:\Procols\amartourism\client\public\kaz\dispature.jpg" alt="Oi-Qaragai Mountain Resort" />
        
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>5 Nights Accommodation with Breakfast</li>
              <li>Private Transportation Throughout the Tour</li>
              <li>Entry Tickets: Almarasan, Kolsai Lake, Charyn Canyon</li>
              <li>Cable Car Rides: Shymbulak & Kok Tobe</li>
              <li>Off-road Vehicle Experience at Charyn Canyon</li>
              <li>All transfers and sightseeing as per itinerary</li>
              <li>Driver allowances, parking charges, and toll taxes</li>
              <li>All applicable taxes</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Flight Tickets</li>
              <li>Travel Insurance Coverage</li>
              <li>Additional snacks, drinks, or meals not mentioned</li>
              <li>Activities not included in the inclusions</li>
              <li>Transport beyond the specified itinerary</li>
              <li>Cultural experiences or shows requiring extra fees</li>
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
            <p>• 50% advance should be deposited, if booking is made before 60 days of departure<br />
               • 75% advance should be deposited, if booking is made before 30 days of departure<br />
               • 100% advance should be deposited, if booking is made before 15 days of departure</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• Cancellation 30 days or more before departure: Full refund minus processing fee<br />
               • Cancellation between 29 to 15 days before departure: 50% refund of total package cost<br />
               • Cancellation 14 days or less before departure: No refund<br />
               • No refund for unforeseen circumstances or changes during the trip</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Rooms & Vehicles are subject to availability at the time of confirmation<br />
               • Rates are dynamic & can change until confirmation<br />
               • Check-in/Check-out as per standard hotel timings<br />
               • Early check-in/Late checkout subject to availability & additional cost<br />
               • Weather conditions may affect excursion schedules<br />
               • Itinerary may be adjusted based on local conditions and accessibility</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Kazakhstan</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency Exchange</h3>
            <p>Kazakhstan's currency is the Kazakhstani Tenge (KZT). Exchange money at the airport or local exchange centers for small expenses.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun"></i>
            <h3>Weather & Clothing</h3>
            <p>May in Kazakhstan can be unpredictable. Pack light jackets, comfortable walking shoes, and warm clothes for mountain trips.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-sim-card"></i>
            <h3>SIM Card & Connectivity</h3>
            <p>Purchase a local SIM card (Beeline, Kcell, or Tele2) for better internet access and communication during your stay.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-language"></i>
            <h3>Language Barrier</h3>
            <p>While Russian and Kazakh are the main languages, English is not widely spoken. Learning basic Russian phrases can be helpful.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Food & Drinks</h3>
            <p>Try local dishes like Beshbarmak (meat and noodle dish) and Shashlik (grilled skewers). Use bottled water as tap water is not recommended.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Local Etiquette</h3>
            <p>Greet people with a handshake and maintain respect when visiting religious sites. Tipping 5-10% in restaurants is appreciated.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Kazakhstan Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your Central Asian journey.</p>
          <FormFilling/>   </section>

    
    </div>
  );
};

export default KazakhstanPage;