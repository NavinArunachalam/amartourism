import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./ooty-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const OotyPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-ooty">
        <h1>Ooty - Queen of Hill Stations</h1>
        <p>3 Nights / 4 Days - Scenic Escape to the Nilgiris</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1588666309995-63aae5a1c4c4?auto=format&fit=crop&w=800&q=80" alt="Ooty Arrival" />
          <div className="day-content">
            <h3>Day 1: Arrival & Ooty Local Sightseeing</h3>
            <p>6:00 AM: Pickup from Coimbatore Railway Junction. Refreshment at a Coimbatore hotel. Drive to Ooty via scenic route. Check-in at Ooty hotel. Post Lunch Sightseeing: Botanical Garden, Rose Garden, Tea Factory, Doddabetta Peak, Wax Museum (if time permits). Evening: Ooty Boat House Lake. Overnight Stay in Ooty.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Pykara & Surroundings (Full Day)</h3>
            <p>After Breakfast: Pykara Boat House, Pykara Waterfalls, Pine Forest, Kamaraj Sagar Dam, Golf Links, 9th Mile Shooting Point. Pykara Lake Boat House. Return to hotel in Ooty. Overnight Stay in Ooty.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884864-30ffc299f930?auto=format&fit=crop&w=800&q=80" alt="Pykara" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Coonoor" />
          <div className="day-content">
            <h3>Day 3: Coonoor Day Trip</h3>
            <p>After Breakfast: Drive to Coonoor. Coonoor Sightseeing: Valley View Point, Sims Park, Lambs Park, Tea Gardens, Dolphin's Nose View, MRC (Outside View), Kattery Park. Return to Ooty by evening. Overnight Stay in Ooty.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Checkout & Madumalai Wildlife Drive</h3>
            <p>Morning: Checkout from Ooty hotel. Enroute to Coimbatore: Frog Mountain (Long View), Needle Rock View Point, Eucalyptus Trees Avenue, Madumalai Wildlife Safari, 36 Hairpin Bend Scenic Drive. Drop at Coimbatore.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Madumalai" />
        </div>
      </section>

      <section >
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Private vehicle for all 4 days – pickup & drop from Coimbatore to Ooty and back</li>
              <li>3 Nights hotel accommodation in Ooty</li>
              <li>Driver Bata and fees</li>
              <li>Tamil-speaking guide along with the driver</li>
              <li>All transfers and sightseeing as per itinerary</li>
              <li>All applicable taxes</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>No breakfast, lunch, or dinner included</li>
              <li>Entry fees, parking charges</li>
              <li>Boating/safari/toy train tickets are extra</li>
              <li>Personal expenses, tips</li>
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
            <p>• 50% Advance to confirm the booking<br />
               • Remaining 50% to be paid on Day 1 before hotel check-in<br />
               • Payment accepted via UPI / Bank Transfer / Cash<br />
               • Booking confirmation with invoice sent upon advance payment</p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>• All bookings are non-refundable once confirmed<br />
               • No refund for cancellations<br />
               • No refund for unforeseen circumstances or changes during the trip</p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>• Vehicle is for point-to-point usage as per itinerary only<br />
               • Sightseeing is subject to weather and time availability<br />
               • Hotel check-in at 12:00 PM and check-out by 10:00 AM<br />
               • Entry fees/boating/safari/train to be paid directly by customers<br />
               • Any personal changes must be discussed with Amar Tourism in advance<br />
               • Current Ooty weather: Cool & pleasant (15°C to 23°C)<br />
               • Mild showers expected in evenings – carry umbrella</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Ooty</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing</h3>
            <p>Carry warm clothing – mornings and evenings are chilly. Layer your clothing for changing weather conditions throughout the day.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-umbrella"></i>
            <h3>Rain Protection</h3>
            <p>Carry a raincoat or umbrella (occasional rain showers expected). Waterproof bags for electronics are recommended.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shoe-prints"></i>
            <h3>Footwear</h3>
            <p>Wear comfortable shoes for walking in gardens/parks and during sightseeing. Avoid slippery soles for hilly areas.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-id-card"></i>
            <h3>Documentation</h3>
            <p>Keep a copy of your ID proof for hotel check-in. Carry necessary medications and prescriptions if required.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-battery-full"></i>
            <h3>Electronics</h3>
            <p>Power banks & chargers are essential – limited outlets in hotels. Camera equipment for capturing scenic landscapes.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-gift"></i>
            <h3>Souvenirs</h3>
            <p>Don't forget to try Ooty homemade chocolates & eucalyptus oil. These make excellent gifts and souvenirs.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Ooty Escape</h2>
        <p>Fill out the form below, and our travel experts will help customize your hill station getaway.</p>
         <FormFilling/>   
      </section>
    </div>
  );
};

export default OotyPage;