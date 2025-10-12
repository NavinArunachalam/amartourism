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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent text-white mt-10" >
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Plane className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Amar Tourism</h3>
                <p className="text-sm text-white/80">Explore the World</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted travel companion for over 15 years. We create
              extraordinary journeys and unforgettable memories across India and
              around the world.
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 Amar Tourism. All Rights Reserved. | Backed by Sangam Hotels
              Group
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/80 hover:text-primary smooth-transition">
                Privacy Policy
              </button>
              <button className="text-white/80 hover:text-primary smooth-transition">
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="text-white/80 hover:text-primary smooth-transition"
              >
                Back to Top
              </button>
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