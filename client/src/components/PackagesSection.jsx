import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Star, Users } from "lucide-react";
import mountainsImage from "@/assets/mountains.jpg";
import beachImage from "@/assets/beach.jpg";
import { Link, useNavigate } from "react-router-dom";

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
  bhutan: '/bhutan',
  delhi: '/delhi',
  japan: '/japan',
  kazakhstan: '/kazakhstan',
  lakshadweep: '/lakshadweep',
  maldives: '/maldives',
  manali: '/kullu-manali',
  munnar: '/munnar',
  newzealand: '/new-zealand',
  ooty: '/ooty-3n4d',
  scandinavia: '/scandinavia',
  srilanka: '/sri-lanka',
  wayanad: '/wayanad',
};

const PackagesSection = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Dubai Group Departure ex Chennai",
      description: "Sharjah | Abu Dhabi | Dubai",
      image: beachImage,
      duration: "4 Nights 5 Days",
      groupSize: "Group Tour",
      rating: "4.9",
      price: "₹45,000",
      highlights: ["Sharjah", "Abu Dhabi", "Dubai"],
      departure: "Chennai",
    },
    {
      id: 2,
      title: "Dubai Group Departure ex Mumbai",
      description: "Sharjah | Abu Dhabi | Dubai",
      image: beachImage,
      duration: "4 Nights 5 Days",
      groupSize: "Group Tour",
      rating: "4.9",
      price: "₹42,000",
      highlights: ["Sharjah", "Abu Dhabi", "Dubai"],
      departure: "Mumbai",
    },
    {
      id: 3,
      title: "Dubai Group Departure ex Bangalore",
      description: "Sharjah | Abu Dhabi | Dubai",
      image: beachImage,
      duration: "4 Nights 5 Days",
      groupSize: "Group Tour",
      rating: "4.9",
      price: "₹44,000",
      highlights: ["Sharjah", "Abu Dhabi", "Dubai"],
      departure: "Bangalore",
    },
    {
      id: 4,
      title: "Europe Winter Group Departure ex Chennai",
      description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome",
      image: mountainsImage,
      duration: "9 Nights 10 Days",
      groupSize: "Group Tour",
      rating: "4.8",
      price: "₹1,25,000",
      highlights: ["Paris", "Zurich", "Rome"],
      departure: "Chennai",
    },
    {
      id: 5,
      title: "Europe Winter Group Departure ex Bangalore",
      description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome",
      image: mountainsImage,
      duration: "9 Nights 10 Days",
      groupSize: "Group Tour",
      rating: "4.8",
      price: "₹1,28,000",
      highlights: ["Paris", "Zurich", "Rome"],
      departure: "Bangalore",
    },
    {
      id: 6,
      title: "Europe Summer Group Departure ex Chennai",
      description: "Paris | Zurich | Seefeld / Axams | Padova | Arezzo | Rome",
      image: mountainsImage,
      duration: "9 Nights 10 Days",
      groupSize: "Group Tour",
      rating: "4.8",
      price: "₹1,22,000",
      highlights: ["Paris", "Zurich", "Rome"],
      departure: "Chennai",
    },
  ];

  const getDestinationId = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('dubai')) return 'dubai';
    if (lowerTitle.includes('europe')) return 'europe';
    return null; // Fallback if no match
  };

  const handleLearnMore = (title) => {
    const destinationId = getDestinationId(title);
    const route = routeMap[destinationId];
    if (route) {
      navigate(route);
    }
  };

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  return (
    <section id="packages" className="py-20 bg-travel-light-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Enjoy stress free group tours with GT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Ultimate Group Tour Adventures
          </h2>
          <h3 className="text-2xl font-semibold text-accent mb-6">Winter Groups for 2025</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated group experiences designed to create unforgettable memories.
            From exotic international destinations to incredible domestic getaways.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`package-card overflow-hidden border-0 elevated-shadow bg-white hover:shadow-xl`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-accent">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Package Details */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-accent text-xs rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="package"
                    className="flex-1"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleLearnMore(pkg.title)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Packages */}
        <div className="text-center mt-12">
          <Link to="/all-packages">
            <Button variant="travel" size="lg" className="px-8">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;