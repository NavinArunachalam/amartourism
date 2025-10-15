import { Button } from "@/components/ui/button";
import { Plane, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import PropTypes from "prop-types";

// Define data arrays
const quickLinks = [
  "About Us",
  "Travel Packages",
  "Destinations",
  "Group Tours",
  "Visa Services",
  "Contact Us",
];

const destinations = [
  "Kerala Backwaters",
  "Rajasthan Heritage",
  "Himalayan Treks",
  "Goa Beaches",
  "Kashmir Valley",
  "Golden Triangle",
];

const services = [
  "Hotel Bookings",
  "Flight Reservations",
  "Cruise Packages",
  "Honeymoon Specials",
  "Corporate Tours",
  "Educational Trips",
];

const Footer = () => {
  return (
    <footer className="bg-accent text-white mt-10" >
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className=" bg-white rounded-full">
                <img src="/amaricon-removebg-preview.png" alt="" className="h-14 w-14 " />
              </div>
              <div>
                <h3 className="text-xl font-bold">Amar Tourism</h3>
                <p className="text-sm text-white/80">Explore the World</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
             Amar Tourism is a professionally managed travel company headquartered in Chennai, with a branch office in Erode, Tamil Nadu. Founded by Mr. Amarnath Annadurai
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-white/80 hover:text-primary smooth-transition text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <button className="text-white/80 hover:text-primary smooth-transition text-left">
                    {destination}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-white/80 hover:text-primary smooth-transition text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
        <p> © 2025 Amar Tourism. All Rights Reserved. </p>     
           <p className="text-center"><span className="text-yellow-500"> Developed By Procols </span></p>   
            </div>
 
          </div>
        </div>
      </div>
    </footer>
  );
};

// PropTypes for type safety (optional)
Footer.propTypes = {};

export default Footer;