import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./kullu-manali-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const KulluManaliPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-kullu-manali">
        <h1>Amazing Kullu-Manali</h1>
        <p>5 Nights / 6 Days - Experience the Magic of the Himalayas</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src=" /manali/Manali.jpg" alt="Delhi to Manali" />
          <div className="day-content">
            <h3>Day 1: Depart For Manali From Delhi On Volvo Bus</h3>
            <p>Take a flight or train to reach Delhi. On arrival at Delhi Airport or Railway Station, proceed to your next adventure. At 4:30 PM, report at the Delhi Volvo Pickup Point: R.K. Ashram or Majnu Ka Tilla. Board the Volvo AC Bus to Manali, beginning an overnight journey of around 12 to 14 hours. Immerse yourself in the breathtaking beauty of the Himalayan ranges and their stunning landscapes. Relax and enjoy a smooth ride under the starry sky.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Arrival At Manali | Manali Local Sightseeing</h3>
            <p>Arrive in Manali in the morning. Warm welcome by our representative who will be your tour guide throughout your Manali trip. Transfer to hotel for check-in and refresh. Visit various places in Manali: Hidimba temple, Club house, Tibetan Monastery, Van Vihar, Manu Temple, Shiva Temple, Vashisht Hot springs, Jogini waterfalls. In the evening, take a romantic stroll through Mall Road and IBEX Market for unique souvenirs. Cozy dinner and overnight stay in Manali. Meal Included: Dinner Only.</p>
          </div>
          <img src=" /manali/local.jpg" alt="Manali" />
        </div>
        <div className="day">
          <img src=" /manali/Solang Valley.JPG" alt="Solang Valley" />
          <div className="day-content">
            <h3>Day 3: Excursion To Solang Valley</h3>
            <p>Start your morning with delicious breakfast at the hotel. Explore the beauty and adventure of Nehru Kund and Solang Valley. Marvel at breathtaking views of majestic mountains rising above the clouds. In Solang Valley, embrace thrilling activities: zorbing, paragliding, parachuting, and horse riding (during summer months). Experience the newly opened Ski Himalayas Ropeway for panoramic views. Return to hotel to relax and spend a cozy evening. Meals Included: Breakfast & Dinner.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Excursion To Kullu Kasol Manikaran Full Day Tour</h3>
            <p>After breakfast, proceed to cover Kullu (River Rafting at own cost), explore Kasol River View Cafe, visit Gurudwara Sahib Manikaran. Return to Manali in the evening. Meals Included: Breakfast & Dinner.</p>
          </div>
          <img src=" /manali/Kullu Kasol.jpg" alt="Kasol" />
        </div>
        <div className="day">
          <img src=" /manali/Naggar Castle.jpg" alt="Naggar Castle" />
          <div className="day-content">
            <h3>Day 5: Excursion To Naggar Castle - Manali to Delhi by Volvo</h3>
            <p>After breakfast, check out from the hotel. Visit Naggar Castle (former residence of Raja of Kullu, popular for movie shootings) and Roerich Art Gallery (displays art of famous Russian Painter Nikolai Roerich). Enjoy shopping at Manali Market. In the evening at 4:30 PM, drop at Manali Volvo Bus Stand & board Volvo Bus for Delhi. Overnight journey by Volvo Bus. Meal Included: Breakfast Only.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Reach Delhi | End of Trip With Beautiful Memories</h3>
            <p>Arrive in Delhi around 8 AM, and head towards your home destination. Your amazing Kullu-Manali trip ends here with a bag full of lifetime memories.</p>
          </div>
          <img src=" /manali/memroy.jpg" alt="Himalayan Memories" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>AC Volvo Tickets: Round-trip from Delhi to Manali and back</li>
              <li>Welcome Drink: Non-alcoholic beverages upon arrival at hotel</li>
              <li>Accommodation: 3 nights in Deluxe Room on double-sharing basis</li>
              <li>Meals: MAP Meal Plan (3 breakfasts and 3 dinners)</li>
              <li>Cab Services: Individual Sedan Cab for all transfers and sightseeing</li>
              <li>Taxes & Expenses: Parking, toll tax, luxury tax, green tax, fuel, driver charges</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Transportation: Airfare or train fare to and from Delhi</li>
              <li>Monument Fees: Entrance fees for monuments and camera charges</li>
              <li>Adventure Activities: River rafting, skiing, paragliding, etc.</li>
              <li>Personal Expenses: Laundry, shopping, tips, extra meals</li>
              <li>Rohtang Pass: Sightseeing to Rohtang Pass not included</li>
              <li>Heater Charges: For room heaters (contact hotel directly)</li>
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
            <p>• <strong>Booking Confirmation:</strong> 20% deposit required after confirmation<br />
               • <strong>Balance Payment:</strong> Remaining amount due 7 days before tour<br />
               • <strong>Instant Bookings:</strong> 100% payment required upfront<br />
               • <strong>4-star & 5-star Packages:</strong> 40% confirmation amount required<br />
               • <strong>Invoice:</strong> Issued only after full payment received<br />
               • No booking held without confirmation amount</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Once package is confirmed, quoted cost is final and non-negotiable<br />
               • No TAC (Travel Agent Commission) or TDS applicable<br />
               • Package modifications require new quotation and may alter cost<br />
               • A/C will not operate in hilly areas during cab services<br />
               • Rohtang Pass sightseeing can be arranged through Manali Taxi Union</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Kullu-Manali</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Respect Local Culture</h3>
            <p>Be aware of local customs and dress codes, especially when visiting religious sites. Respect local traditions and avoid behavior that may offend local sentiments.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-first-aid"></i>
            <h3>Safety and Health</h3>
            <p>Stay aware of surroundings, especially in remote areas. Carry basic first-aid kit and necessary medications. Use sunscreen and protective gear to prevent sunburn or altitude sickness.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-bus"></i>
            <h3>Transportation</h3>
            <p>Use trusted transportation services and negotiate fares beforehand if using local transport. Have maps or navigation apps handy for exploring.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-mountain"></i>
            <h3>Altitude Considerations</h3>
            <p>Take time to acclimatize to higher altitudes. Stay hydrated and avoid strenuous activities on first day. Be prepared for temperature variations.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-utensils"></i>
            <h3>Food & Water</h3>
            <p>Enjoy local cuisine but be cautious with street food. Drink bottled or purified water. Carry snacks for long journeys.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-snowflake"></i>
            <h3>Weather Preparedness</h3>
            <p>Check weather forecasts regularly. Carry layered clothing for changing mountain weather. Be prepared for possible road closures due to weather conditions.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Kullu-Manali Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your mountain vacation.</p>
          <FormFilling/>         </section>

     </div>
  );
};

export default KulluManaliPage;