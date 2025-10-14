import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./bhutan-hero.css";
import FormFilling from "@/components/FormFilling.jsx";
const BhutanPage = () => {
  return (
 <div className="common-styles">
      <section className="hero-bhutan">
        <h1>Bhutan - Land of the Thunder Dragon</h1>
        <p>4 Nights / 5 Days - Himalayan Kingdom Adventure</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1588666309995-63aae5a1c4c4?auto=format&fit=crop&w=800&q=80" alt="Paro Airport" />
          <div className="day-content">
            <h3>Day 1: Paro Airport Enroute Sightseeing - Thimphu</h3>
            <p>Upon arrival at Paro Airport, complete Visa/Permit formalities. Our Bhutan representative will greet you and assist with transfer to Thimphu (65 Kms, 1.5-2 Hrs). Enroute visit Tamchog Lhakhang (Iron Bridge) and Chuzom (Confluence) viewpoint. Check in at hotel in Thimphu (2320 Mts). Overnight stay in Thimphu.</p>
          </div>
        </div>

        <div className="day">
          <div className="day-content">
            <h3>Day 2: Thimphu - Excursion to Punakha - Return to Thimphu</h3>
            <p>After breakfast, proceed to Punakha (70 Kms, 3-3.5 Hrs) via Dochu La Pass (3080 Mts) with breathtaking mountain views. Sightseeing includes Punakha Dzong (Entrance Fee: INR 500), Suspension Bridge, and Chimi Lhakhang Monastery (Entrance Fee: INR 1000, 30-minute walk). Return to Thimphu for overnight stay.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884864-30ffc299f930?auto=format&fit=crop&w=800&q=80" alt="Punakha Dzong" />
        </div>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Thimphu Sightseeing" />
          <div className="day-content">
            <h3>Day 3: Thimphu Sightseeing - Transfer to Paro</h3>
            <p>After breakfast, check out and proceed for Thimphu sightseeing: Sangaygang View Point, Buddha Point, Institute for Zorig Chusum (Entrance Fee: INR 100), Textile Museum (Entrance Fee: INR 250), Handicrafts Shops (Entrance Fee: INR 100), Zangthopeiri Lhakhang, Simply Bhutan (Entrance Fee: INR 1000), and Motithang Takin Preservation Centre (Entrance Fee: INR 300). Transfer to Paro (52 Kms, 1.5-2 Hrs). Check in at hotel. Overnight stay in Paro.</p>
          </div>
        </div>

        <div className="day">
          <div className="day-content">
            <h3>Day 4: Full-Day Paro Sightseeing</h3>
            <p>After breakfast, full-day sightseeing in Paro: Dungtse Lhakhang, Bird's Eye View Point (best 10-11 AM), Ta Dzong National Museum (Entrance Fee: INR 300), Rinpung Dzong (Entrance Fee: INR 1000), and Kichu Lhakhang (Entrance Fee: INR 500). Return to hotel. Overnight stay in Paro.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1627988884988-746b153b4c3c?auto=format&fit=crop&w=800&q=80" alt="Paro Valley" />
        </div>

        <div className="day">
          <img src="https://images.unsplash.com/photo-1588666309995-63aae5a1c4c4?auto=format&fit=crop&w=800&q=80" alt="Bhutan Departure" />
          <div className="day-content">
            <h3>Day 5: Departure</h3>
            <p>Breakfast at hotel and complete check-out process. After the tour, proceed to Paro Airport for your departure with beautiful memories of the Himalayan kingdom.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>Meet & Greet upon arrival</li>
              <li>Accommodation as per itinerary on Twin Sharing Basis</li>
              <li>01 Bottle Packaged drinking water per person per day</li>
              <li>All transfers & sightseeing by specified vehicle</li>
              <li>Services of a Trip Leader (Guide) for Bhutan portion</li>
              <li>All applicable taxes and service charges</li>
              <li>Visa assistance and permit processing</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>SDF (Sustainable Development Fee) charged by government</li>
              <li>5% TCS (Tax Collected at Source) for Indian Nationals</li>
              <li>Travel Insurance (Not Mandatory)</li>
              <li>Monuments entrance fees</li>
              <li>Air-ticket costs (provided separately)</li>
              <li>Supplementary services, optional Tours, Up-gradation Charges</li>
              <li>Train fare, Travel Insurance, Rafting Charges</li>
              <li>Personal expenses (laundry, soft drinks, tips, etc.)</li>
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
            <p>
              • 25% deposit required at time of booking confirmation<br />
              • 50% payment due 30 days before travel date<br />
              • Remaining 25% to be paid 15 days before departure<br />
              • Airfare to be paid in full at time of booking
            </p>
          </div>
          <div className="policy-box">
            <h3>Cancellation Policy</h3>
            <p>
              • Cancellation 30+ days before departure: 75% refund<br />
              • Cancellation 15-29 days before: 50% refund<br />
              • Cancellation 8-14 days before: 25% refund<br />
              • Cancellation within 7 days: No refund<br />
              • No refund for unused services
            </p>
          </div>
          <div className="policy-box">
            <h3>Important Notes</h3>
            <p>
              • SDF fee: USD 100 per person per night (subject to change)<br />
              • Indian nationals require permit but no visa<br />
              • All visitors must have valid passport (6 months validity)<br />
              • Some monuments closed on weekends/holidays<br />
              • Itinerary subject to change due to weather/conditions<br />
              • Vehicle provided on point-to-point basis, not on disposal<br />
              • Guide services as per itinerary for Bhutan portion only
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Bhutan</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Documentation</h3>
            <p>Indian nationals need permit (no visa). Other nationals require visa and must pay SDF fee. Passport must have 6 months validity. Carry multiple photocopies of documents.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-mountain"></i>
            <h3>Altitude Preparation</h3>
            <p>Thimphu (2320m) and Paro (2200m) are at high altitude. Acclimatize properly, stay hydrated, and avoid strenuous activity on first day. Carry altitude sickness medication if prone.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-tshirt"></i>
            <h3>Clothing & Dress Code</h3>
            <p>Dress modestly when visiting monasteries (covered shoulders and knees). Layered clothing recommended due to temperature variations. Comfortable walking shoes essential.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency & Payments</h3>
            <p>Bhutanese Ngultrum (BTN) at par with Indian Rupee. Indian currency accepted. Credit cards accepted in major hotels. Carry cash for remote areas and small purchases.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-camera"></i>
            <h3>Photography</h3>
            <p>Photography restrictions in some monasteries and dzongs. Always ask for permission before photographing people. No photography inside temples and prayer halls.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-hands-helping"></i>
            <h3>Cultural Etiquette</h3>
            <p>Respect local customs. Circumambulate religious sites clockwise. Remove shoes before entering temples. Avoid public displays of affection. Don't point with finger.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Bhutan Adventure</h2>
        <p>Fill out the form below, and our travel experts will help customize your Himalayan kingdom experience.</p>
          <FormFilling/>   </section>

    </div>
  );
};

export default BhutanPage;