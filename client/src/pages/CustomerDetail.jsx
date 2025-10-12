import React from 'react';

const ComingSoon = () => {
  return (
    <div className="coming-soon-wrapper font-roboto text-[#292929] bg-white">
      <section className="creative-template min-h-screen p-10 flex items-center bg-[url('https://imgpanda.com/upload/ib/0pOfzusR8z.png')] bg-no-repeat bg-center bg-cover overflow-x-hidden relative z-5">
        <div className="coming-soon-content max-w-[860px] mx-auto text-center">
          <h6 className="font-roboto text-base uppercase tracking-[2px] text-black mb-2">Welcome</h6>
          <h1 className="font-libre text-[80px] leading-[1.18em] py-2 text-black font-normal mb-2 max-md:text-[50px] max-sm:text-[38px]">Plan Your Journey</h1>
          <div className="flex flex-wrap">
            <div className="w-full max-w-[75%] mx-auto">
              <p className="text-[22px] leading-[1.66em] pb-9 font-roboto font-light mb-4">We're under construction. Share your travel details below and we’ll connect with you!</p>
            </div>
          </div>

          {/* Client Form */}
          <form className="client-form max-w-[700px] mx-auto text-left">
            <div className="form-group mb-4 relative">
              <i className="fas fa-user absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="text" placeholder="Name *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-city absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="text" placeholder="City of Residence *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-envelope absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="email" placeholder="Email *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-phone absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="tel" placeholder="Phone Number *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fab fa-whatsapp absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="tel" placeholder="WhatsApp Number *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-plane-departure absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="text" placeholder="Travel Destination *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-calendar-alt absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="date" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-users absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <input type="number" placeholder="No of People *" required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300" />
            </div>
            <div className="form-group mb-4 relative">
              <i className="fas fa-suitcase-rolling absolute top-1/2 left-4 -translate-y-1/2 text-lg text-[#888]"></i>
              <select required className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#F4F4F4] text-base font-roboto shadow-[0_25px_50px_rgba(0,0,0,0.05)] outline-none focus:bg-white focus:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300">
                <option value="">Vacation Type *</option>
                <option>HONEYMOON</option>
                <option>FAMILY TRIP</option>
                <option>FRIENDS TRIP</option>
                <option>SOLO TRIP</option>
                <option>GROUP TOUR</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-[#FFC107] text-black rounded-[10px] p-4 font-roboto text-lg border-none cursor-pointer hover:bg-[#FFD54F] transition-all duration-300">Submit</button>
          </form>

          {/* Social Icons */}
          <ul className="social-icon mt-6 flex justify-center gap-4 list-none p-0">
            <li>
              <a href="https://www.facebook.com/451964597997414?ref=pro_upsell_xav_ig_profile_page_web" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC107] text-black text-lg hover:bg-[#FFD54F] transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/amar_tourism/" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC107] text-black text-lg hover:bg-[#FFD54F] transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@AmarTourism" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC107] text-black text-lg hover:bg-[#FFD54F] transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/in/amar-tourism-b069a0354" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC107] text-black text-lg hover:bg-[#FFD54F] transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Shapes */}
        <img src="https://i.ibb.co/Xfkk7380/shape-46-creativesalahu.png" alt="" className="shapes shape-one absolute top-[8%] left-[45%] animate-jumpTwo z-[-1]" />
        <img src="https://i.ibb.co/W4kRJs0T/shape-47-creativesalahu.png" alt="" className="shapes shape-two absolute top-[6%] right-[45%] animate-jumpThree z-[-1]" />
        <img src="https://i.ibb.co/yFPBGfWd/shape-48-creativesalahu.png" alt="" className="shapes shape-three absolute top-[20%] right-[8%] z-[-1]" />
        <img src="https://i.ibb.co/rft2vzg0/shape-49-creativesalahu.png" alt="" className="shapes shape-four absolute bottom-[20%] left-[8%] z-[-1]" />
        <img src="https://i.ibb.co/35q6g9yS/shape-50-creativesalahu.png" alt="" className="shapes shape-five absolute top-[20%] left-[10%] animate-moveclouds z-[-1]" />
        <img src="https://i.ibb.co/35q6g9yS/shape-50-creativesalahu.png" alt="" className="shapes shape-six absolute bottom-[20%] right-[10%] animate-moveclouds2 z-[-1]" />
      </section>

      {/* Call Us Button */}
      <a href="tel:+919876543210" className="coffee-button fixed top-5 right-5 z-10 bg-[#FFC107] text-[#333] py-2 px-4 rounded-[20px] no-underline font-dancing font-semibold text-xl shadow-[0_2px_5px_rgba(0,0,0,0.2)] flex items-center gap-2 hover:bg-[#FFD54F] transition-all duration-300">
        <span className="coffee-icon text-2xl"><i className="fas fa-phone-alt"></i></span> Call Us
      </a>

      <style jsx>{`
        @keyframes jumpTwo {
          0%, 100% { transform: translate3d(0, 0, 0); }
          40% { transform: translate3d(0, 20px, 0); }
        }
        @keyframes jumpThree {
          0%, 100% { transform: translate3d(0, 0, 0); }
          40% { transform: translate3d(0, -20px, 0); }
        }
        @keyframes moveclouds {
          0% { margin-left: 200px; }
          100% { margin-left: -200px; }
        }
        @keyframes moveclouds2 {
          0% { margin-right: 200px; }
          100% { margin-right: -200px; }
        }
        .font-roboto { font-family: 'Roboto', sans-serif; }
        .font-libre { font-family: 'Libre Baskerville', serif; }
        .font-dancing { font-family: 'Dancing Script', cursive; }
        .coming-soon-wrapper * { margin: 0; padding: 0; box-sizing: border-box; }
        .coming-soon-wrapper img { max-width: 100%; display: block; vertical-align: middle; }
      `}</style>
    </div>
  );
};

export default ComingSoon;