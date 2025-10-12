import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heart, MapPin, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import image assets
import beachImage from "@/assets/beach.jpg";
import mountainsImage from "@/assets/mountains.jpg";
import heritageImage from "@/assets/heritage.jpg";

const HoneymoonSection = () => {
  const navigate = useNavigate();

  // Define route mapping based on cardId
  const routeMap = {
    dubai: '/dubai',
    europe: '/europe',
    andaman: '/andaman',
    thailand: '/thailand-4n',
    malaysia: '/malaysia',
    singapore: '/singapore',
    bali: '/bali-4n',
    vietnam: '/enchanting-vietnam-5n6d',
    australia: '/australia',
    azerbaijan: '/azerbaijan',
  };

  // Map image filenames to imported image modules
  const imageMap = {
    "beach.jpg": beachImage,
    "mountains.jpg": mountainsImage,
    "heritage.jpg": heritageImage
  };

  // Use the first 10 packages from the provided data
  const honeymoonDestinations = [
    { id: 1, cardId: 'dubai', title: "Dubai Group Departure ex Chennai", description: "Sharjah | Abu Dhabi | Dubai", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹45,000", highlights: ["Sharjah", "Abu Dhabi", "Dubai"], departure: "Chennai" },
    { id: 2, cardId: 'dubai', title: "Dubai Group Departure ex Mumbai", description: "Sharjah | Abu Dhabi | Dubai", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹42,000", highlights: ["Sharjah", "Abu Dhabi", "Dubai"], departure: "Mumbai" },
    { id: 3, cardId: 'dubai', title: "Dubai Group Departure ex Bangalore", description: "Sharjah | Abu Dhabi | Dubai", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹44,000", highlights: ["Sharjah", "Abu Dhabi", "Dubai"], departure: "Bangalore" },
    { id: 4, cardId: 'europe', title: "Europe Winter Group Departure ex Chennai", description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome", image: mountainsImage, duration: "9 Nights 10 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,25,000", highlights: ["Paris", "Zurich", "Rome"], departure: "Chennai" },
    { id: 5, cardId: 'europe', title: "Europe Winter Group Departure ex Bangalore", description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome", image: mountainsImage, duration: "9 Nights 10 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,28,000", highlights: ["Paris", "Zurich", "Rome"], departure: "Bangalore" },
    { id: 6, cardId: 'europe', title: "Europe Summer Group Departure ex Chennai", description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome", image: mountainsImage, duration: "9 Nights 10 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,22,000", highlights: ["Paris", "Zurich", "Rome"], departure: "Chennai" },
    { id: 7, cardId: 'andaman', title: "Andaman Group Departure ex Chennai", description: "Port Blair | Havelock | Neil Island", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.7", price: "₹28,000", highlights: ["Port Blair", "Havelock", "Neil Island"], departure: "Chennai" },
    { id: 8, cardId: 'thailand', title: "Thailand Group Departure ex Chennai", description: "Bangkok | Pattaya", image: beachImage, duration: "3 Nights 4 Days", groupSize: "Group Tour", rating: "4.8", price: "₹35,000", highlights: ["Bangkok", "Pattaya"], departure: "Chennai" },
    { id: 9, cardId: 'thailand', title: "Thailand Group Departure ex Mumbai", description: "Bangkok | Phuket", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹38,000", highlights: ["Bangkok", "Phuket"], departure: "Mumbai" },
    { id: 10, cardId: 'thailand', title: "Thailand Group Departure ex Bangalore", description: "Bangkok | Krabi", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹37,000", highlights: ["Bangkok", "Krabi"], departure: "Bangalore" },
  ].map(pkg => ({
    ...pkg,
    image: imageMap[pkg.image] || pkg.image, // Use imageMap if string, else use direct image
    destination: pkg.title // Use title as destination
  }));

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  const handleDetails = (cardId) => {
    const route = routeMap[cardId];
    if (route) {
      navigate(route);
    }
  };

  const handleBack = () => {
    navigate(-1);
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
                    onClick={() => handleDetails(destination.cardId)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Button
            variant="travel"
            size="lg"
            className="px-8"
            onClick={handleBack}
          >
            Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSection;