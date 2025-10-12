import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";
import PropTypes from "prop-types";

// Define stats data
const heroStats = [
  {
    icon: MapPin,
    text: "50+ Destinations",
  },
  {
    icon: Users,
    text: "10,000+ Happy Travelers",
  },
  {
    icon: Star,
    text: "4.9/5 Rating",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleExplorePackages = () => {
    navigate('/all-packages');
  };

  const handlePlanCustomTrip = () => {
    navigate('/customer-details');
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center pt-20" // Added pt-20 for header space
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-gradient-overlay"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll", // Changed to scroll
          width: "100%",
          height: "100%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore the World with{" "}
            <span className="text-primary font-poppins">Amar Tourism</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            India's Trusted Travel Companion - Discover breathtaking
            destinations, create unforgettable memories, and embark on journeys
            that inspire.
          </p>
        </div>

        {/* Hero Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in">
          {heroStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2"
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="font-semibold">{stat.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            variant="hero"
            onClick={handleExplorePackages}
            className="text-lg px-8 py-4 h-auto"
          >
            Explore Packages
          </Button>
          <Button
            size="lg"
            variant="travel"
            onClick={handlePlanCustomTrip}
            className="text-lg px-8 py-4 h-auto"
          >
            Plan Custom Trip
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// PropTypes for type safety (optional)
Hero.propTypes = {};

export default Hero;