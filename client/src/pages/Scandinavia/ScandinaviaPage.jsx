import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./scandinavia-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const ScandinaviaPage = () => {
  return (
   <div className="common-styles">
      <section className="hero-scandinavia">
        <h1>Scandinavia with Northern Lights 9 Days / 8 Nights</h1>
        <p>Discover Oslo, Stockholm, Helsinki, Tallinn & Rovaniemi</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src=" /scandinavia/oslo.jpg" alt="Oslo" />
          <div className="day-content">
            <h3>Day 1: Arrival in Oslo – Gateway to the Fjords - Fri, 20 Feb, 2026</h3>
            <p>Welcome to Norway! Upon arrival at Oslo Airport, meet your tour manager and transfer to your hotel. Oslo, the vibrant capital of Norway, combines Scandinavian charm with modern design and Viking heritage. Relax after your flight or explore the surroundings. In the evening, enjoy dinner and a short briefing about the exciting days ahead.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Glide Through Oslo's Fjord & Holmenkollen Ski Jump - Sat, 21 Feb, 2026</h3>
            <p>Today begins with one of Oslo's most iconic experiences – a tranquil sightseeing cruise on the Oslo Fjord aboard a traditional sailing ship. As you glide along the water, enjoy panoramic views of small islands, picturesque harbors, and the city skyline. After disembarking, proceed to the Holmenkollen Ski Jump, one of Oslo's most famous landmarks. Perched on a hilltop, this historic ski jump offers insight into Norway's skiing heritage and sweeping views over Oslo and the surrounding fjord.</p>
          </div>
          <img src="/scandinavia/Raffles_Place.jpg" alt="Oslo Fjord" />
        </div>
        <div className="day">
          <img src=" /scandinavia/Stockholm.jpg" alt="Stockholm" />
          <div className="day-content">
            <h3>Day 3: Explore Oslo & Enjoy a Scenic Drive to Stockholm - Sun, 22 Feb, 2026</h3>
            <p>Start your day with a comprehensive orientation tour of Oslo, passing by the Royal Palace, Karl Johans gate, Oslo City Hall, Parliament House, and the striking Oslo Opera House. After the tour, depart by luxury coach for Stockholm, travelling through beautiful Nordic landscapes dotted with forests, lakes, and quaint villages. Upon arriving in Stockholm, check into your hotel and unwind after the journey.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Stockholm City Tour & Overnight Baltic Cruise to Helsinki - Mon, 23 Feb, 2026</h3>
            <p>Begin your day with a guided city tour of Stockholm, visiting its most celebrated sights. Wander through Gamla Stan (Old Town) with its cobblestone streets and colorful buildings. Pass by the majestic Royal Palace and the Stockholm Cathedral. Stop at City Hall, famous for hosting the Nobel Prize banquet. After some free time, transfer to the port in the evening to board your overnight ferry to Helsinki.</p>
          </div>
          <img src=" /scandinavia/Helsinki.jpg" alt="Stockholm Old Town" />
        </div>
        <div className="day">
          <img src=" /scandinavia/960px-Porvoo_in_January.jpg" alt="Helsinki" />
          <div className="day-content">
            <h3>Day 5: Helsinki Highlights, Porvoo Old Town & Rock Church Visit - Tue, 24 Feb, 2026</h3>
            <p>Arrive in Helsinki, the capital of Finland, and begin with a guided city tour. Explore Senate Square, with its neoclassical buildings and Helsinki Cathedral. Visit the impressive Rock Church (Temppeliaukio), a modern architectural marvel built directly into granite rock. Next, take a short drive to the charming town of Porvoo, one of Finland's oldest towns. Stroll through its cobbled streets lined with red wooden houses, artisan shops, and quaint cafes.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Explore Tallinn & Ride the Santa Claus Express - Wed, 25 Feb, 2026</h3>
            <p>After breakfast, embark on a high-speed ferry to Tallinn, Estonia's fairy-tale capital. Upon arrival, take a guided walking tour of the beautifully preserved Tallinn Old Town, a UNESCO World Heritage site. Visit Toompea Castle, Alexander Nevsky Cathedral, Town Hall Square, and explore narrow medieval lanes. Enjoy leisure time to try Estonian delicacies or shop for amber. In the late afternoon, return by ferry to Helsinki. After dinner, board the magical Santa Claus Express, an overnight train to Rovaniemi.</p>
          </div>
          <img src=" /scandinavia/Tallinn.jpg" alt="Tallinn" />
        </div>
        <div className="day">
          <img src="  /scandinavia/Northern Lights Chase.jpg" alt="Northern Lights" />
          <div className="day-content">
            <h3>Day 7: Arctic Wildlife at Ranua Zoo & Northern Lights Chase - Thu, 26 Feb, 2026</h3>
            <p>Begin your Arctic adventure with a morning departure from Rovaniemi as you journey to Ranua Wildlife Park, Finland's northernmost zoo. Embark on a guided walk through the 2.8 km trail, home to around 50 species of Arctic and northern wildlife. Encounter majestic polar bears, Arctic foxes, lynx, wolves, moose, and owls. As darkness descends over the Arctic Circle, set out on a guided Northern Lights chase. On clear nights, the sky may erupt in waves of green, pink, and violet light dancing above snow-covered trees.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Excursion to Santa Claus Village with Husky Farm & Safari - Fri, 27 Feb, 2026</h3>
            <p>Begin your day at the Santa Claus Village, a whimsical destination where Christmas lives year-round. Cross the Arctic Circle, visit Santa in his office, and send postcards from Santa's official post office. Later, visit a traditional Husky Farm, where you'll meet friendly Siberian huskies and enjoy a sled ride through snow-covered forests (season permitting). Learn about the huskies' training and role in Arctic culture.</p>
          </div>
          <img src=" /scandinavia/Santa_Land_Rovaniemi_Arctic_Circle1.jpg" alt="Santa Claus Village" />
        </div>
        <div className="day">
          <img src=" /scandinavia/Departure.jpg" alt="Departure" />
          <div className="day-content">
            <h3>Day 9: Departure - Sat, 28 Feb, 2026</h3>
            <p>After breakfast, check out from your hotel and transfer to Rovaniemi Airport for your return flight. Carry back memories of Nordic cities, snowy adventures, magical lights, and a fairytale Arctic experience.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>8 Nights accommodation in good 4-star hotels</li>
              <li>8 Continental Breakfasts, 6 Indian Dinners & 2 Western Dinners</li>
              <li>Oslo Fjord cruise & Holmenkollen Ski Jump visit</li>
              <li>Guided city tours of Oslo, Stockholm & Helsinki</li>
              <li>Overnight Baltic cruise from Stockholm to Helsinki</li>
              <li>Day trip to Tallinn, Estonia with guided walking tour</li>
              <li>Santa Claus Express overnight train to Rovaniemi</li>
              <li>Ranua Wildlife Park visit with Arctic species</li>
              <li>Northern Lights hunting experience</li>
              <li>Santa Claus Village excursion & Husky sled ride</li>
              <li>All transfers and tours by luxury AC coach</li>
              <li>Services of an English/Hindi experienced Tour Manager</li>
              <li>All driver and tour manager tips included</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Any increase in airfare, visa fees, airport taxes, or fuel surcharges</li>
              <li>Upgradation in airline class or hotel room category</li>
              <li>Cost of pre or post tour hotel accommodation</li>
              <li>Porterage, laundry, telephone charges, shopping</li>
              <li>Wines & alcoholic beverages, items of personal nature</li>
              <li>Any extra cost incurred due to illness or personal emergency</li>
              <li>Any services or activity charges outside the group tour itinerary</li>
              <li>Direct joining guests must arrange their own airport transfers</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Scandinavia</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Norway: Norwegian Krone (NOK), Sweden: Swedish Krona (SEK), Finland: Euro (EUR). Credit cards widely accepted.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>Cold winters with temperatures well below freezing. Pack thermal layers, waterproof boots, hats, gloves, and scarves.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type C and F plugs (230V). Carry a universal adapter. Outlets may differ slightly between countries.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Scandinavians value personal space and punctuality. Tipping is included in services but small amounts appreciated.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Scandinavia is very safe. Take normal precautions with belongings. Follow safety instructions for winter activities.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
       <FormFilling/>   
      </section>

       </div>
  );
};

export default ScandinaviaPage;