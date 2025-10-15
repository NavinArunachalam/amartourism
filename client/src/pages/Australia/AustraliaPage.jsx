import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styles/common.css";
import "./australia-hero.css";
import FormFilling from "@/components/FormFilling.jsx";

const AustraliaPage = () => {
  return (
    <div className="common-styles">
      <section className="hero-australia">
        <h1>Majestic Australia Road Trip 8 Days / 7 Nights</h1>
        <p>Discover Melbourne, Canberra, Sydney & the Great Ocean Road</p>
        <ScrollLink to="booking" smooth={true} duration={1000} className="btn">
          Book Now
        </ScrollLink>
      </section>
      <section>
        <h2>Detailed Day-by-Day Itinerary</h2>
        <div className="day">
          <img src="/australia/melburn.jpg" alt="Melbourne" />
          <div className="day-content">
            <h3>Day 1: Arrival in Melbourne - Tue, 25 Nov, 2025</h3>
            <p>Welcome to Melbourne, renowned as Australia's Sports Capital! Upon your arrival, you'll be transferred to your hotel. Please note that the standard check-in time is from 3:00 PM onwards. After checking in, you'll have the rest of the day to relax and settle in. Overnight stay at the hotel in Melbourne.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 2: Melbourne City Tour with Philip Island - Wed, 26 Nov, 2025</h3>
            <p>After enjoying a delicious breakfast, embark on a captivating orientation city tour of Melbourne. Start with a photo stop at the iconic Melbourne Cricket Ground (MCG). Continue your journey with a scenic drive past several notable landmarks including St. Patrick's Cathedral, Town Hall, Parliament House, and Fitzroy Gardens. Following the city tour, travel to Phillip Island for an unforgettable natural spectacle - witness the enchanting parade of the world's smallest penguins as they make their way to the shores.</p>
          </div>
          <img src="/australia/Philip.jpg"/>
        </div>
        <div className="day">
          <img src="/australia/GreatOcean.jpg" />
          <div className="day-content">
            <h3>Day 3: Full Day Great Ocean Road Tour - Thu, 27 Nov, 2025</h3>
            <p>After a hearty breakfast, set off on a journey along one of the world's most stunning and well-preserved coastal routes – the Great Ocean Road. As you drive, you'll be treated to breathtaking views of the famous Twelve Apostles, a series of majestic limestone stacks rising dramatically from the ocean. Marvel at the rugged beauty of the Shipwreck Coast and explore the scenic landscapes of Port Campbell National Park.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 4: Transfer from Melbourne to Canberra via Albury - Fri, 28 Nov, 2025</h3>
            <p>After a delicious breakfast, check out from your hotel and embark on a drive to Canberra, the capital of Australia. Along the way, make a stop in Albury to explore and stretch your legs. Continue your journey to Canberra, which was chosen as the site for the nation's capital in 1908 as a neutral compromise between Sydney and Melbourne, Australia's two largest cities.</p>
          </div>
          <img src="australia/Canberra.jpg" alt="Canberra" />
        </div>
        <div className="day">
          <img src="australia/parlimant.jpg" alt="Parliament House" />
          <div className="day-content">
            <h3>Day 5: Full Day City Tour of Canberra - Sat, 29 Nov, 2025</h3>
            <p>After a delightful breakfast, embark on an informative orientation city tour of Canberra. Begin your day with a visit to Mount Ainslie, offering panoramic views of the city. Next, explore some of Canberra's key landmarks, including the New Parliament House, where you can learn about the nation's political heart. Continue to the Royal Australian Mint to discover the intricate art of coin minting and visit the Australian National University.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 6: Transfer from Canberra to Sydney with Orientation Tour - Sun, 30 Nov, 2025</h3>
            <p>After breakfast, check out from your hotel and get ready for an exciting journey as you embark on the Grand Pacific Drive towards Sydney. Upon arrival, make a memorable photo stop at the Sydney Opera House, one of the world's most iconic landmarks. Next, visit Bondi Beach, famous for its golden sands and vibrant atmosphere. Your day continues with an orientation tour of Sydney, where you'll see the impressive Harbour Bridge and explore Darling Harbour.</p>
          </div>
          <img src="australia/sydney.jpg" />
        </div>
        <div className="day">
          <img src="australia/BlueMountain.jpg"/>
          <div className="day-content">
            <h3>Day 7: Full Day Blue Mountain Excursion - Mon, 01 Dec, 2025</h3>
            <p>After breakfast, set out for an exhilarating day trip to the Blue Mountains. Your journey will take you through the charming Katoomba village, leading to the stunning Blue Mountains, home to the renowned Three Sisters rock formation. Experience breathtaking views of the dense eucalyptus forest and explore the Scenic World, where you'll enjoy a thrilling 52-degree inclined train ride down into the valley. Take advantage of the cable car and Skywalk for spectacular vistas.</p>
          </div>
        </div>
        <div className="day">
          <div className="day-content">
            <h3>Day 8: Departure from Sydney - Tue, 02 Dec, 2025</h3>
            <p>After enjoying breakfast at the hotel, check out and transfer to the airport for your departure. As your tour comes to a close, take a moment to reflect on the memorable experiences and discoveries you've made through Australia's vibrant cities and stunning landscapes.</p>
          </div>
          <img src=" /australia/depart.jpg" alt="Departure" />
        </div>
      </section>
      <section>
        <h2>Package Inclusions & Exclusions</h2>
        <div className="inclusions">
          <div className="included">
            <h3>What's Included</h3>
            <ul>
              <li>7 Nights Accommodation in Standard 3-Star Hotels</li>
              <li>Daily Continental Breakfast, Lunch and Dinner</li>
              <li>Melbourne City Tour with MCG Photo Stop</li>
              <li>Phillip Island Penguin Parade Excursion</li>
              <li>Full-Day Great Ocean Road Tour with Twelve Apostles</li>
              <li>Canberra City Tour including Mount Ainslie & Parliament House</li>
              <li>Royal Australian Mint and Australian National University Visit</li>
              <li>Sydney Orientation Tour with Opera House Photo Stop</li>
              <li>Bondi Beach Visit and Harbour Bridge Views</li>
              <li>Full Day Blue Mountains Tour with Scenic World Rides</li>
              <li>Experienced English-Speaking Tour Manager</li>
              <li>Australian Tourist Visa with Travel Insurance</li>
            </ul>
          </div>
          <div className="excluded">
            <h3>What's Excluded</h3>
            <ul>
              <li>Porterage, laundry, wines, and mineral water</li>
              <li>Telephone charges and all items of personal nature</li>
              <li>Optional tours and activities not mentioned in itinerary</li>
              <li>Anything not specifically mentioned in inclusions</li>
              <li>Early check-in or late check-out charges</li>
              <li>Travel insurance beyond basic coverage</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Essential Travel Tips for Australia</h2>
        <div className="tips-container">
          <div className="tip-box">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Currency</h3>
            <p>Australian Dollar (AUD). Credit cards widely accepted. Have some cash for small purchases and markets.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-cloud-sun-rain"></i>
            <h3>Weather</h3>
            <p>November offers pleasant spring weather. Pack layers - warm clothing for evenings, lighter options for daytime. Sun protection essential.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-plug"></i>
            <h3>Power Plugs</h3>
            <p>Type I plugs (230V). Carry a universal adapter for your electronic devices. Outlets have switches that need to be turned on.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-users"></i>
            <h3>Cultural Etiquette</h3>
            <p>Australians are generally casual and friendly. Tipping is appreciated but not mandatory. Service charges usually included.</p>
          </div>
          <div className="tip-box">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety</h3>
            <p>Australia is very safe. Follow normal precautions with belongings. Be sun-smart and stay hydrated during outdoor activities.</p>
          </div>
        </div>
      </section>
      <section className="booking" id="booking">
        <h2>Book Your Unforgettable Journey</h2>
        <p>Fill out the form below, and our travel experts will help customize your vacation.</p>
        <FormFilling />
      </section>
    </div>
  );
};

export default AustraliaPage;