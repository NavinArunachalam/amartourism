import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./thailand6n7d-hero.css";

const Thailand6N7DPage = () => {


  const handleFeatureHover = (text) => {
    console.log("Hovered:", text);
  };

  return (
 <div className="common-styles">
    

      <section className="hero-thailand6n7d">
        <h1>Thailand 6 Nights / 7 Days – <br /> Explore the Land of Smiles</h1>
        <p>Discover pristine beaches, vibrant culture, and unforgettable adventures.</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section className="package-section">
        <h2>Your Dream Thailand Tour Package</h2>
        <p>
          Embark on an enchanting 6-day journey through Thailand, experiencing the best of bustling Bangkok and serene Pattaya. This package offers a perfect blend of cultural immersion, thrilling adventures, and relaxing beach days, ensuring memories that last a lifetime.
        </p>
        <div className="features">
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Experience the vibrant culture of Bangkok, from ancient temples to bustling markets.")}
          >
            <i className="fas fa-landmark"></i>
            <p>Experience the vibrant culture of Bangkok, from ancient temples to bustling markets.</p>
          </div>
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Relax on pristine beaches and explore the underwater world of Coral Island.")}
          >
            <i className="fas fa-umbrella-beach"></i>
            <p>Relax on pristine beaches and explore the underwater world of Coral Island.</p>
          </div>
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Discover the breathtaking beauty of Nong Nooch Tropical Garden.")}
          >
            <i className="fas fa-seedling"></i>
            <p>Discover the breathtaking beauty of Nong Nooch Tropical Garden.</p>
          </div>
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Embark on an exciting safari adventure at Bangkok Safari World.")}
          >
            <i className="fas fa-paw"></i>
            <p>Embark on an exciting safari adventure at Bangkok Safari World.</p>
          </div>
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Seamless transfers and expert-guided tours for a worry-free journey.")}
          >
            <i className="fas fa-bus"></i>
            <p>Seamless transfers and expert-guided tours for a worry-free journey.</p>
          </div>
          <div
            className="feature-box"
            onMouseEnter={() => handleFeatureHover("Customizable options available for families and groups of all sizes.")}
          >
            <i className="fas fa-users"></i>
            <p>Customizable options available for families and groups of all sizes.</p>
          </div>
        </div>
      </section>

      <section className="itinerary">
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" alt="Bangkok Airport" />
          <div className="day-content">
            <h3>Day 1: Arrival at Phuket Airport - Transfer to krabi Hotel</h3>
            <p>
              Arrival at Phuket International Airport (HKT). Private transfer to Krabi Hotel. Check-in and freshen up, Explore nearby beaches at leisure. Evening Krabi City Tour, Overnight stay in Krabi.
            </p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: 04 Island Tour – Transfer to Phuket</h3>
            <p>
              Breakfast at hotel, Check-out from Krabi Hotel (luggage stored at lobby). 04 Island Tour by Longtail Boat with Lunch – SIC Basis (National Park Fee Included). Return to hotel, collect luggage. Private transfer to Phuket Hotel Check-in and overnight stay in Phuket.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Coral Island" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="Nong Nooch Garden" />
          <div className="day-content">
            <h3>Day 3: Phi Phi Island Tour</h3>
            <p>Breakfast at hotel. Phi Phi Island Tour by Speed Boat – SIC Basis. Includes Lunch, National Park Fee & Snorkeling. Return to hotel. Overnight stay in Phuke.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Phuket City Tour – Transfer to Pattaya </h3>
            <p>
              Breakfast at hotel. Check-out from hotel. 06-Hour Phuket City Tour – Private Basis: Karon View Point, Tiger Park, Wat Chalong Temple, Phuket Old Town, Gems Gallery, Transfer to Phuket Airport (HKT), Flight to Don Mueang Airport (DMK), Bangkok. Private transfer to Pattaya Hotel. Check-in and overnight stay in Pattaya.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Safari World" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="Nong Nooch Garden" />
          <div className="day-content">
            <h3>Day 5: Pattaya City Tour</h3>
            <p>
              Breakfast at hotel. Nong Nooch Village with Lunch – Private Basis Elephant Show Thai Cultural Show Tram Ride. Floating Market Pattaya with Rowing Boat – Private Basis. Big Buddha Pattaya – Private Basis. View Point Pattaya – Private Basis. Alcazar Show – Private Basis. Return and overnight stay in Pattaya.
            </p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Safari World & Transfer to Bangkok </h3>
            <p>
              Breakfast at hotel. Check-out from Pattaya Hotel. Transfer to Bangkok Hotel Safari World & Marine Park with Lunch – Private Basis (Note: Marine Park is closed on Mondays). Transfer to Bangkok Hotel. Check-in and overnight stay in Bangkok.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1611171719487-dcfca186f2fa?auto=format&fit=crop&w=800&q=80" alt="Safari World" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=800&q=80" alt="Nong Nooch Garden" />
          <div className="day-content">
            <h3>Day 7: Bangkok Temple Tour – Departure</h3>
            <p>Breakfast at hotel. Check-out from hotel. Bangkok Temple Tour – Private Basis: Marble Buddha, Golden Buddha, Transfer to Don Mueang Airport (DMK) for Departure.</p>
          </div>
        </div>
      </section>

      <section className="inclusions-wrapper">
        <h2 style={{ textAlign: "center", marginTop: "60px" }}>
          Package Inclusions & Exclusions
        </h2>
        <br />
        <br />
        <section className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>06 Nights Accommodation at Selected Hotels</li>
              <li>06 Breakfasts at Hotels</li>
              <li>04 Island Tour by Longtail Boat with Lunch – SIC Basis (National Park Fee Included)</li>
              <li>Krabi to Phuket Hotel Transfer – Private Basis</li>
              <li>Phi Phi Island Tour by Speed Boat with Lunch – SIC Basis (National Park Fee & Snorkeling Included)</li>
              <li>Phuket City Tour (06 Hours) – Private Basis</li>
              <li>Nong Nooch Village Tour with Lunch, Shows & Tram – Private Basis</li>
              <li>Floating Market with Rowing Boat – Private Basis</li>
              <li>Big Buddha, View Point, Alcazar Show – Private Basis</li>
              <li>Safari World & Marine Park with Lunch – Private Basis</li>
              <li>All Airport Transfers – Private Basis</li>
              <li>Bangkok Temple Tour (Marble & Golden Buddha) – Private Basis</li>
              <li>All Tours – Private Basis (unless specified as SIC)</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Flight tickets (domestic/international)</li>
              <li>Thailand Visa charges</li>
              <li>Travel insurance</li>
              <li>Personal expenses (laundry, tips, telephone, mini-bar, etc.)</li>
              <li>Meals not mentioned in the itinerary</li>
              <li>Entrance tickets to Tiger Park (to be paid directly by guests)</li>
              <li>Any items of a personal nature</li>
              <li>Optional tours & activities not mentioned in inclusions</li>
              <li>Early check-in or late check-out at hotels</li>
              <li>Anything not in inclusions is exclude</li>
            </ul>
          </div>
        </section>
      </section>

      <section className="tips-section" style={{ padding: "60px 10%", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "40px", color: "#222" }}>Essential Travel Tips for Thailand</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-suitcase-rolling"></i>
            <h3>Packing Essentials</h3>
            <p>Lightweight clothing, swimwear, sunscreen, hat, comfortable walking shoes, and insect repellent are a must. Don't forget your camera!</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-passport"></i>
            <h3>Visa & Passport</h3>
            <p>Ensure your passport is valid for at least 6 months beyond your travel date. Check visa requirements for your nationality in advance.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Local Currency (THB)</h3>
            <p>The local currency is the Thai Baht (THB). ATMs are widely available, and credit cards are accepted in major establishments.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Dress modestly when visiting temples, remove your shoes before entering homes, and always show respect for the Thai monarchy.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Ready to explore the Land of Smiles? Fill out the form below, and our travel experts will get in touch to customize your dream vacation.</p>
        <form id="bookingForm">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@example.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 (555) 123-4567" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Preferred Travel Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4+ People</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Additional Message (Optional)</label>
            <textarea placeholder="Any specific requests or questions?"></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

    </div>
  );
};

export default Thailand6N7DPage;