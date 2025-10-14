import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./japan-hero.css";
import FormFilling  from '@/components/FormFilling.jsx';

const SakuraMomentsPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-sakura-moments">
        <h1>Sakura Moments - Japan Cherry Blossom Tour</h1>
        <p>8 Days / 7 Nights - Discover Tokyo, Hakone, Hiroshima & Osaka</p>
        <ScrollLink to="booking" smooth={true} duration={500} className="btn">
          Book Now
        </ScrollLink>
      </section>

      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80" alt="Tokyo" />
          <div className="day-content">
            <h3>Day 1: Welcome to Tokyo - The Land of Rising Sun - Fri, 08 May, 2026</h3>
            <p>As you step off the plane and breathe in the energy of Tokyo, you'll immediately sense the perfect harmony between ancient traditions and futuristic wonders. At Narita Airport, you're welcomed with warmth. A smooth transfer will take you straight to your hotel, ideally nestled in the bustling heart of the city. After checking in, unwind with the comfort of a rich, Indian buffet dinner, carefully curated for your enjoyment.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Full Day Tokyo Sightseeing – Imperial Palace, Asakusa, Sky Tree & Shibuya - Sat, 09 May, 2026</h3>
            <p>Your first stop is the Imperial Palace, the residence of Japan's royal family. Next, visit the Asakusa Temple, Tokyo's oldest temple and one of the most significant Buddhist structures in Japan. A short ride takes you to the awe-inspiring Tokyo Sky Tree, standing tall at 350 meters as the tallest structure in Japan. After lunch, head to Odaiba, home to the Statue of Liberty replica and the Rainbow Bridge. A peaceful Sumida River Cruise offers serene views before reaching the iconic Shibuya Crossing.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" alt="Tokyo Sky Tree" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80" alt="Cherry Blossoms" />
          <div className="day-content">
            <h3>Day 3: Tokyo's Best - Experience Sakura at Ueno Park & Shinjuku Gyoen - Sun, 10 May, 2026</h3>
            <p>Start your day by visiting the Meiji Shrine, dedicated to the deified spirits of Emperor Meiji and Empress Shoken. Visit Ueno Park, where cherry blossoms shower you with soft pink petals, creating a serene atmosphere. Wander through Shinjuku Gyoen National Garden, where over 400 cherry trees bloom. After lunch, head to 3D TeamLab Planets in Toyosu, a mesmerizing 3D digital art museum where you become part of the art. End with shopping at Akihabara.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: A Day of Majestic Beauty - Mt. Fuji, Hakone, and Lake Ashi - Mon, 11 May, 2026</h3>
            <p>Journey to the iconic Mt. Fuji, Japan's highest and most sacred peak. As you ascend to the 5th station (weather permitting), the majesty of the mountain will take your breath away. Continue to Hakone, known for its hot springs and stunning vistas. Soar above the valley on the Hakone Ropeway offering panoramic views of Mt. Fuji. The day concludes with a tranquil Lake Ashi cruise surrounded by serene waters and breathtaking scenery.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80" alt="Mt. Fuji" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80" alt="Hiroshima" />
          <div className="day-content">
            <h3>Day 5: Transfer to Hiroshima by Bullet Train – Miyajima Island & Itsukushima Shrine - Tue, 12 May, 2026</h3>
            <p>Embark on an unforgettable journey to Hiroshima aboard one of Japan's fastest Shinkansen (bullet trains). Upon arrival, proceed to Miyajima Island via ferry. Explore the centuries-old Itsukushima Shrine, a UNESCO World Heritage Site. Stand before the legendary Floating Torii Gate, seemingly suspended above the water, especially during high tide when the gate appears to float, offering a moment of reflection and wonder.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Transfer to Osaka - Hiroshima Sightseeing & Umeda Sky Tower - Wed, 13 May, 2026</h3>
            <p>After breakfast, explore Hiroshima's most significant historical landmarks. Visit the Hiroshima Peace Memorial Park, dedicated to promoting peace and commemorating the victims of the atomic bomb. Witness the Atomic Bomb Dome, a UNESCO World Heritage Site. Upon arrival in Osaka, explore the Umeda Sky Tower and its Sky Garden Observatory, offering panoramic views of Osaka's vibrant energy.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1593705114312-a0ee03d80c8f?auto=format&fit=crop&w=800&q=80" alt="Osaka" />
        </div>
        <div className="day">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80" alt="Kyoto" />
          <div className="day-content">
            <h3>Day 7: Kyoto & Nara Tour - Full Day of Japan's Heartfelt Tradition - Thu, 14 May, 2026</h3>
            <p>Experience the heartfelt traditions of Japan, starting with Nara. Wander through Nara Deer Park, where gentle deer roam freely. Visit Todaiji Temple, home to the awe-inspiring Daibutsu, the world's largest bronze Buddha statue. Journey to Kyoto, Japan's ancient capital. Be mesmerized by the Golden Pavilion (Kinkaku-ji), gleaming like a jewel. Conclude at Arashiyama Bamboo Forest, where towering bamboo stalks create a magical, otherworldly atmosphere.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Departure from Osaka - The End of a Journey, The Beginning of Memories - Fri, 15 May, 2026</h3>
            <p>Today marks the end of your unforgettable journey through Japan. After breakfast at your hotel, check out and prepare for your transfer to the airport. If time permits, enjoy some free time for shopping at Shinsaibashi, Osaka's most famous shopping street. As you board your flight, take a moment to reflect on the experiences that have shaped your journey through this beautiful country.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80" alt="Departure" />
        </div>
      </section>

      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>7 Nights accommodation in comfortable 4-Star hotels</li>
              <li>Daily Breakfast, 6 Indian Lunches & 7 Indian Dinners</li>
              <li>Tokyo City Tour with Imperial Palace, Asakusa Temple & Tokyo Sky Tree</li>
              <li>Cherry Blossom Experience at Ueno Park and Shinjuku Gyoen</li>
              <li>Sumida River Cruise for panoramic Tokyo views</li>
              <li>Mt. Fuji 5th Station visit (weather permitting)</li>
              <li>Hakone Ropeway, Lake Ashi Cruise & Owakudani Valley</li>
              <li>Shinkansen Bullet Train ride from Hakone to Hiroshima</li>
              <li>Miyajima Island visit with Itsukushima Shrine and Floating Torii Gate</li>
              <li>Hiroshima Peace Memorial Park and Atomic Bomb Dome</li>
              <li>Umeda Sky Tower with Sky Garden Observatory in Osaka</li>
              <li>Kyoto & Nara Tour with Golden Pavilion and Bamboo Forest</li>
              <li>Experienced English/Hindi speaking Tour Manager</li>
              <li>All transfers in luxury air-conditioned coaches</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Mandatory Tips: Japanese Yen 800 per person per day</li>
              <li>Porterage, laundry, wines, mineral water, telephone charges</li>
              <li>Any items of a personal nature</li>
              <li>Optional tours or activities not included in the itinerary</li>
              <li>Meals and beverages not specifically mentioned</li>
              <li>Anything not explicitly listed under inclusions</li>
              <li>Extra costs due to illness, accident, or personal emergency</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Essential Travel Tips for Japan</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Japanese Yen (JPY). Cash is still widely preferred, especially in smaller towns. Carry enough yen for local shops and vending machines.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>May offers pleasant spring weather perfect for cherry blossom viewing. Pack layers and a light jacket for cooler evenings.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type A and B plugs (100V). Bring a universal adapter. Many hotels have limited outlets, so a power strip can be useful.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Punctuality is highly valued. Remove shoes when entering temples and traditional establishments. Queue orderly everywhere.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Japan is extremely safe. Emergency numbers: 110 for police, 119 for fire/medical. Tap water is safe to drink throughout the country.</p>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
          <FormFilling/>   </section>

    
    </div>
  );
};

export default SakuraMomentsPage;