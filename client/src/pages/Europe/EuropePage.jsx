import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./europe-hero.css";

const EuropeGlimpsesPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-europe-glimpses">
        <h1>Glimpses of Europe 9 Days / 8 Nights</h1>
        <p>Discover Paris, Amsterdam, Frankfurt & Zurich</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" alt="Paris" />
          <div className="day-content">
            <h3>Day 1: Arrival in Paris, the City of Romance, Lights and Glamour - Fri, 24 Oct, 2025</h3>
            <p>We can't wait to welcome your arrival in Paris, the city of romance and glamour. After going through the immigration process, your guide will be waiting to escort you to the hotel and help with check-in. After check-in, spend your day at your own pace before your overnight in Paris.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Paris City Tour – Eiffel Tower 2nd Level and Romantic River Seine Cruise - Sat, 25 Oct, 2025</h3>
            <p>Today we proceed for a guided city tour of Paris. Marvel at the finest Parisian tourist attractions, Place Vendôme, Place de l'Opéra Garnier, Musée d'Orsay, Place de la Concorde, Champs Elysées, one of the most recognised fashionable avenues in the world, Arc de Triomphe, and many others. Next we visit the iconic Eiffel Tower – 2nd Level, and get a stunning view of the city from the top. Then we take a romantic cruise down the river Seine, flanked by exquisite monuments like Notre Dame, Eiffel Tower, Louvre, and many more.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=80" alt="Eiffel Tower" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1592229505725-c5F54e0D7F5A?auto=format&fit=crop&w=800&q=80" alt="Disneyland Paris" />
          <div className="day-content">
            <h3>Day 3: Full-Day Disneyland® Paris (Optional at extra cost) - Sun, 26 Oct, 2025</h3>
            <p>This day experience a day full of excitement at the world famous Disneyland Paris (available at extra cost). The destination to relax and enjoy different kind of thrill rides and studio movies with your loved ones. You may choose between Disney Parks, where fairy tales take flight across five incredible lands filled with classic attractions, shows and street parades with Disney Characters OR you may visit the Walt Disney Studios Park.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Transfer from Paris to Amsterdam via Brussels - Mon, 27 Oct, 2025</h3>
            <p>Enjoy your breakfast today before we head out. We're going to Brussels today, the capital of Belgium best known for the waffles and French Fries! We're going to visit one of Europe's most beautiful squares, the Grand Place which is where you can find the historic medieval Town Hall. Not far is where you can find the Manneken Pis statue which is another iconic landmark. We continue driving and past by St. Michael's Church before temporarily stopping at the Atomium for pictures.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80" alt="Amsterdam" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" alt="Keukenhof Gardens" />
          <div className="day-content">
            <h3>Day 5: Explore Amsterdam With Canal Cruise – Visit Keukenhof Gardens or Zaanse Schans - Tue, 28 Oct, 2025</h3>
            <p>We'll go check out the Keukenhof Gardens which is where you can see gorgeous blooming tulips, daffodils, and hyacinths. From 13th May onwards we will venture out to the famous little village of Zaanse Schans. Explore this unique historical town with its majestic windmills and wooden houses. Visit a clog maker and observe how the famous Dutch wooden shoe is made. Board a glass-topped boat to experience the best of this historical city. We then drive towards Cologne to visit the Cologne Cathedral.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Travel To The Black Forest And Visit Rhine Falls - Wed, 29 Oct, 2025</h3>
            <p>After a delightful breakfast at the hotel, we're going to check-out and head into the Black Forest, a truly breathtaking forest of pines and firs. Watch the local craftsmen working on their cuckoo clocks. We'll continue driving to Switzerland with a stop at Schaffhausen that's best known as where you can see Europe's biggest falls, the Rhine Falls. The sheer size and powerful current will make this an unforgettable sight as you make your way to the hotel for check-in.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1594736797936-d0b9f50f7f4d?auto=format&fit=crop&w=800&q=80" alt="Rhine Falls" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1598880799703-eb8c92a4691f?auto=format&fit=crop&w=800&q=80" alt="Jungfraujoch" />
          <div className="day-content">
            <h3>Day 7: Magical Alpine Excursion to Jungfraujoch – The Top of Europe (Extra Cost) - Thu, 30 Oct, 2025</h3>
            <p>Get set for a memorable magical alpine excursion to Jungfraujoch – The Top of Europe, a high-point of your tour (available at extra cost). First we proceed to Grindelwald Terminal. The new 3S-Bahn Eiger Express takes you to the Eigergletscher station in just 15 minutes. There you board a cogwheel train to reach the highest railway station in Europe at 11,333 feet – a world of eternal ice and snow. Visit the Ice Palace and the Sphinx observatory deck for breath-taking panoramic views.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Mt. Titlis with Rotating Cable Car & Lucerne Orientation Tour - Fri, 31 Oct, 2025</h3>
            <p>Today our day starts by heading to the small and beautiful town of Engelberg. Enjoy amazing scenery with an exhilarating trip to the top of Mt Titlis at 3020 meters on various cable cars including Rotair, the world's first revolving cable car. Get a breath taking unrestricted 360 degrees stunning view of the dazzling snow caped peaks. Visit the "Cliff Walk" the highest suspension bridge in Europe. Later proceed on an orientation tour of Lucerne one of most beautiful cities in Switzerland.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1578662996448-3a300e7c7d8a?auto=format&fit=crop&w=800&q=80" alt="Mt. Titlis" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" alt="Departure" />
          <div className="day-content">
            <h3>Day 9: Departure - Sat, 01 Nov, 2025</h3>
            <p>Enjoy your breakfast at the hotel before we check-out. Then we'll drop you at the airport for your scheduled departure back home with wonderful memories of your European adventure.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>8 Nights accommodation in good 3-star hotels</li>
              <li>08 Continental Breakfasts and 08 Indian Dinners</li>
              <li>To and Fro Economy Class Flights</li>
              <li>Paris City Tour with Eiffel Tower 2nd Level entry</li>
              <li>Romantic Seine River Cruise in Paris</li>
              <li>Brussels visit with Grand Place and Atomium photo stop</li>
              <li>Amsterdam Canal Cruise</li>
              <li>Keukenhof Gardens (till 12th May) or Zaanse Schans (from 13th May)</li>
              <li>Cologne Cathedral visit</li>
              <li>Black Forest experience with cuckoo clock demonstration</li>
              <li>Rhine Falls visit in Switzerland</li>
              <li>Mt. Titlis excursion with rotating cable car</li>
              <li>Lucerne orientation tour</li>
              <li>Services of English/Hindi speaking Tour Manager</li>
              <li>All transfers in luxury air-conditioned coaches</li>
              <li>All Tour Manager and Driver Tips Included</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Any increase in Airfare, Visa fees, Airport taxes</li>
              <li>Upgradation in Airline class or hotel room category</li>
              <li>Cost of pre or post tour hotel accommodation</li>
              <li>Porterage, laundry, telephone charges, shopping</li>
              <li>Wines & alcoholic beverages, items of personal nature</li>
              <li>Optional Disneyland Paris excursion</li>
              <li>Optional Jungfraujoch excursion</li>
              <li>Any services not included in the group tour itinerary</li>
              <li>Direct joining guests must arrange own airport transfers</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Europe</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>France: Euro (EUR), Netherlands: Euro (EUR), Germany: Euro (EUR), Switzerland: Swiss Franc (CHF). Credit cards widely accepted but carry some cash.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>October offers pleasant autumn weather. Pack layers - warm clothing for cooler evenings, lighter options for daytime. Rain jacket recommended.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type C, E, F plugs (230V). Carry a universal adapter. Outlets may differ slightly between countries.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Punctuality is valued. Tipping is expected - €3 per person per day for tour manager and driver. Respect local customs and queue orderly.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Europe is generally safe but be vigilant in tourist areas for pickpockets. Keep valuables secure and be aware of your surroundings.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
        <form>
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
            <label>Additional Message</label>
            <textarea placeholder="Any special requests?"></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

     
    </div>
  );
};

export default EuropeGlimpsesPage;