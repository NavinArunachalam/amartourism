import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heart, MapPin, Star, Calendar } from "lucide-react";
import beachImage from "@/assets/beach.jpg";
import mountainsImage from "@/assets/mountains.jpg";
import heritageImage from "@/assets/heritage.jpg";
import { Link, useNavigate } from 'react-router-dom';

const routeMap = {
  Maldives: '/maldives',
  Bali: '/bali-6n', // Maps to /bali-6n based on 6N/7D duration
  Phuket: '/thailand-4n', // Maps to /thailand-4n based on 4N/5D duration
  Switzerland: '/europe', // Maps to /europe as Switzerland is part of Europe
  Seychelles: '/seychelles', // Not in provided routes, handled as null
  Langkawi: '/malaysia', // Maps to /malaysia as Langkawi is part of Malaysia
  Paris: '/europe', // Maps to /europe as Paris is part of Europe
  Manali: '/kullu-manali', // Added to handle Mauritius
};

const HoneymoonSection = () => {
  const navigate = useNavigate();

  const honeymoonDestinations = [
    {
      id: 1,
      destination: "Maldives",
      description: "Overwater villas and pristine beaches",
      image: beachImage,
      duration: "5 Nights 6 Days",
      rating: "4.9",
      price: "₹85,000",
      highlights: ["Private Villa", "Water Sports", "Romantic Dining"]
    },
    {
      id: 2,
      destination: "Bali",
      description: "Tropical paradise with cultural charm",
      image: beachImage,
      duration: "6 Nights 7 Days",
      rating: "4.8",
      price: "₹65,000",
      highlights: ["Beach Resort", "Temple Tours", "Spa Treatments"]
    },
    {
      id: 3,
      destination: "Manali",
      description: "Island paradise in the Indian Ocean",
      image: beachImage,
      duration: "5 Nights 6 Days",
      rating: "4.8",
      price: "₹75,000",
      highlights: ["Luxury Resort", "Coral Reefs", "Romantic Cruises"]
    },
    {
      id: 4,
      destination: "Phuket",
      description: "Thailand's jewel with stunning beaches",
      image: beachImage,
      duration: "4 Nights 5 Days",
      rating: "4.7",
      price: "₹55,000",
      highlights: ["Beach Villa", "Island Hopping", "Thai Cuisine"]
    },
    {
      id: 5,
      destination: "Switzerland",
      description: "Alpine romance in scenic mountains",
      image: mountainsImage,
      duration: "7 Nights 8 Days",
      rating: "4.9",
      price: "₹1,25,000",
      highlights: ["Mountain Views", "Scenic Trains", "Luxury Hotels"]
    },
    {
      id: 6,
      destination: "Seychelles",
      description: "Pristine beaches and luxury resorts",
      image: beachImage,
      duration: "6 Nights 7 Days",
      rating: "4.9",
      price: "₹95,000",
      highlights: ["Private Beach", "Marine Life", "Sunset Views"]
    },
    {
      id: 7,
      destination: "Langkawi",
      description: "Malaysian paradise with duty-free shopping",
      image: beachImage,
      duration: "4 Nights 5 Days",
      rating: "4.6",
      price: "₹45,000",
      highlights: ["Cable Car", "Beaches", "Mangrove Tours"]
    },
    {
      id: 8,
      destination: "Paris",
      description: "City of love and romance",
      image: heritageImage,
      duration: "5 Nights 6 Days",
      rating: "4.8",
      price: "₹85,000",
      highlights: ["Eiffel Tower", "Seine Cruise", "Romantic Cafes"]
    },
  ];

  const handleDetails = (destination, duration) => {
    let route = routeMap[destination];
    if (destination === 'Bali' && duration === '6 Nights 7 Days') {
      route = '/bali-6n'; // Ensure Bali 6N/7D maps to /bali-6n
    } else if (destination === 'Bali') {
      route = '/bali-4n'; // Default to /bali-4n for other durations
    }
    if (route) {
      navigate(route);
    }
  };

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  return (
    <section id="honeymoon" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-rose-500" />
            <p className="text-primary font-semibold">Romantic Getaways</p>
            <Heart className="h-8 w-8 text-rose-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            International Honeymoon Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey of love with our carefully curated honeymoon destinations. 
            Create memories that will last a lifetime in the world's most romantic locations.
          </p>
        </div>

        {/* Honeymoon Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {honeymoonDestinations.map((destination, index) => (
            <Card
              key={destination.id}
              className={`honeymoon-card overflow-hidden border-0 elevated-shadow bg-white hover:shadow-xl group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Destination Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.destination}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-primary fill-current" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-sm rounded-full p-1">
                  <Heart className="h-4 w-4 text-white fill-current" />
                </div>
                <div className="absolute bottom-3 left-3 bg-accent/90 backdrop-blur-sm rounded-lg px-2 py-1">
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-accent flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{destination.destination}</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Duration */}
                <div className="flex items-center space-x-1 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{destination.duration}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="honeymoon"
                    className="flex-1 text-xs"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-xs"
                    onClick={() => handleDetails(destination.destination, destination.duration)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Packages */}
        <div className="text-center mt-12">
          <Link to="/all-honeymoon">
            <Button variant="travel" size="lg" className="px-8">
              <Heart className="h-4 w-4 mr-2" />
              View All Honeymoon Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSection;