import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./jammu-kashmir-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const JammuKashmirPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-jammu-kashmir">
        <h1>Jammu and Kashmir</h1>
        <p>5 Nights / 6 Days - Paradise on Earth</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1591085686350-798fe0f1222b?auto=format&fit=crop&w=800&q=80" alt="Srinagar Arrival" />
          <div className="day-content">
            <h3>Day 1: Srinagar - Arrival and Sightseeing</h3>
            <p>Welcome to Srinagar. Pick up from airport and transfer to hotel. After freshening up, we will visit Mughal Garden - Chashme Shahi, one of the Mughal gardens built in 1632 AD around a spring. Drive along the Lake side on Boulevard. Visit a local Handicrafts Emporium for hand-knotted specialty Silken carpets, shawls, and jewelry ornaments. Overnight stay at Hotel/houseboat.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Srinagar to Pahalgam - Day Trip</h3>
            <p>After breakfast, embark on a tour to Pahalgam. Enjoy sightseeing at Avantipora ruins and saffron fields along the way. In Pahalgam, explore places such as Aru, Betaab Valley, and Chandanwari using union cabs at your own expense. Indulge in activities like skiing, golfing, visiting the Lidder Amusement Park, trekking, or whitewater rafting at your own cost. Return to the hotel in Srinagar for an overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1580234811494-675e5a4ee7a5?auto=format&fit=crop&w=800&q=80" alt="Pahalgam" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1588880332079-9c8fea738a47?auto=format&fit=crop&w=800&q=80" alt="Gulmarg" />
          <div className="day-content">
            <h3>Day 3: Srinagar to Gulmarg - Day Trip</h3>
            <p>After breakfast, drive to Gulmarg (Meadow of Flowers). Enjoy the attractive sceneries of Khilammarg via Gondola ride (Phase I & II) at your own cost. The Gulmarg Gondola is the highest and longest cable car rope-way in the world. Try adventure activities like rock climbing, skiing, and trekking. You can also try golfing at one of the world's largest golf courses, the Royal Spring Golf Course. Return to your hotel by evening and stay overnight in Srinagar.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Srinagar to Sonamarg - Day Trip</h3>
            <p>After breakfast, depart for Sonamarg (Meadows of Gold), a hill station situated 90 km north-east of Srinagar. Hire a horse, pony, or union cab at an additional cost to reach Thajiwas Glacier, which is carpeted with snow all year round. Enjoy a pony ride to explore Baltal Valley or Zero Point. Capture memorable photographs of the mesmerizing scenery. Return to Srinagar and stay overnight at the hotel.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1631537565146-14b6e71bdb7f?auto=format&fit=crop&w=800&q=80" alt="Sonamarg" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1625047509247-4887bb3b77d6?auto=format&fit=crop&w=800&q=80" alt="Doodhpathri" />
          <div className="day-content">
            <h3>Day 5: Srinagar to Doodhpathri - Day Trip</h3>
            <p>After breakfast, proceed towards Doodhpathri (Valley of Milk), one of Kashmir's peaceful and lesser popular places. Enjoy eye-catching meadows spread over a massive land and explore the place on a pony. This place is favorable for older people and children as it's not at high altitude and just 42 km from Srinagar. After spending quality time, head back towards Srinagar for overnight stay.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Srinagar - Departure</h3>
            <p>Tour Conclusion: We ensure a punctual transfer for your convenience. Our driver will escort you to the airport, railway station, or bus station for your onward journey to your next destination.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1580234811494-675e5a4ee7a5?auto=format&fit=crop&w=800&q=80" alt="Kashmir Memories" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Accommodation as per the itinerary</li>
              <li>Meal Plan Mentioned In the hotel Section</li>
              <li>Pick up and drop from Srinagar Airport by a private Non AC Car</li>
              <li>All sightseeing by private Non AC cars as per itinerary</li>
              <li>State tax, hotel tax, and driver charge</li>
              <li>All toll taxes, driver's allowance, parking charges</li>
              <li>Shikara ride for 60 mins</li>
              <li>1-Union cab from Gulmarg taxi stand to Gondola Cable car & back</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Items of personal nature- tips, laundry, room service, telephone, beverages</li>
              <li>Room heaters, boat rides, pony/horse rides, safaris, rafting, skiing, skating</li>
              <li>Cable car / ropeway rides, helicopter rides, additional sightseeing</li>
              <li>Any kind of insurance, Air, Train or Bus fare</li>
              <li>Garden entrance fee and guide charges</li>
              <li>Personal meals and personal expenses</li>
              <li>Thajwas Glacier and Zero Point in Sonmarg</li>
              <li>Gondola cable car ride for both the phases</li>
              <li>Chain snow vehicle from Tanmarg to Gulmarg and back</li>
              <li>Pahalgam union cab - 3 hrs</li>
              <li>Guide in Gulmarg</li>
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
            <p>• For definite confirmation, a 50% advance will be required within 24 Hours of the Package Confirmation<br />
               • Remaining balance due 15 days before the trip starts<br />
               • Without advance, bookings will not be processed</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• 0% retention before 26 days from the date of departure<br />
               • No Refund in less than 26 days from the date of departure (Except for medical emergencies with certificate)<br />
               • No Refund or Compensation for any changes on ongoing trip<br />
               • The above policy is not valid for 5-star hotels</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Permits for restricted areas must be arranged in advance<br />
               • Weather conditions in Kashmir can change rapidly<br />
               • All adventure activities are at the traveler's risk<br />
               • Adhere to the itinerary timings shared by Amar Tourism<br />
               • Alternate arrangements will be provided for unforeseen circumstances<br />
               • Travel insurance is not included but recommended<br />
               • Photography restrictions may apply in some areas<br />
               • Amar Tourism reserves the right to modify itineraries for safety</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Jammu and Kashmir</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-snowflake"></i>
            <h3>Weather Readiness</h3>
            <p>Pack warm clothing, especially during winter. Thermals, woolens, gloves, and caps are essential for Pahalgam, Gulmarg, and Sonamarg.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-id-card"></i>
            <h3>Permits and ID Proof</h3>
            <p>Keep a valid ID proof handy, as it is required at checkpoints and hotels. For visiting restricted areas, permits may be needed.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Local Cuisine</h3>
            <p>Try Kashmiri Wazwan dishes like Rogan Josh, Yakhni, and Dum Aloo. Don't miss Kahwa tea, a traditional saffron-infused beverage.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-first-aid"></i>
            <h3>Health Precautions</h3>
            <p>Stay hydrated and use sunscreen to avoid dryness and sunburn at higher altitudes. Carry basic medications for altitude sickness.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Cash and Connectivity</h3>
            <p>ATMs are limited in remote areas, so carry sufficient cash. Internet and mobile connectivity can be patchy in mountainous regions.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-camera"></i>
            <h3>Photography Essentials</h3>
            <p>Keep your camera or smartphone charged for capturing stunning landscapes. A power bank can be handy during day trips.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Kashmir Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your paradise vacation.</p>
          <FormFilling/>   </section>

      
    </div>
  );
};

export default JammuKashmirPage;