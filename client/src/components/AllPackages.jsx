import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Clock, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PackageHero from "@/pages/Packages/PackageHero";
import beachImage from "@/assets/beach.jpg";
import mountainsImage from "@/assets/mountains.jpg";
import heritageImage from "@/assets/heritage.jpg";

const AllPackages = () => {
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

  // Map image filenames to imported image modules
  const imageMap = {
    "beach.jpg": beachImage,
    "mountains.jpg": mountainsImage,
    "heritage.jpg": heritageImage
  };

  // Use all provided package data
  const packages = [
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
    { id: 11, cardId: 'malaysia', title: "Malaysia Group Departure ex Chennai", description: "Kuala Lumpur | Penang", image: beachImage, duration: "5 Nights 6 Days", groupSize: "Group Tour", rating: "4.8", price: "₹50,000", highlights: ["Kuala Lumpur", "Penang"], departure: "Chennai" },
    { id: 12, cardId: 'malaysia', title: "Malaysia Group Departure ex Mumbai", description: "Kuala Lumpur | Langkawi", image: beachImage, duration: "5 Nights 6 Days", groupSize: "Group Tour", rating: "4.8", price: "₹52,000", highlights: ["Kuala Lumpur", "Langkawi"], departure: "Mumbai" },
    { id: 13, cardId: 'malaysia', title: "Malaysia and Singapore Group Departure ex Chennai", description: "Singapore | Kuala Lumpur", image: beachImage, duration: "6 Nights 7 Days", groupSize: "Group Tour", rating: "4.8", price: "₹55,000", highlights: ["Singapore", "Kuala Lumpur"], departure: "Chennai" },
    { id: 14, cardId: 'singapore', title: "Singapore Group Departure ex Chennai", description: "Marina Bay | Sentosa Island", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹48,000", highlights: ["Marina Bay", "Sentosa Island"], departure: "Chennai" },
    { id: 15, cardId: 'singapore', title: "Singapore Group Departure ex Mumbai", description: "Marina Bay | Gardens by the Bay", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹46,000", highlights: ["Marina Bay", "Gardens by the Bay"], departure: "Mumbai" },
    { id: 16, cardId: 'singapore', title: "Singapore Group Departure ex Bangalore", description: "Sentosa Island | Universal Studios", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹47,000", highlights: ["Sentosa Island", "Universal Studios"], departure: "Bangalore" },
    { id: 17, cardId: 'bali', title: "Bali Group Departure ex Chennai", description: "Ubud | Kuta Beach", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹48,000", highlights: ["Ubud", "Kuta Beach"], departure: "Chennai" },
    { id: 18, cardId: 'bali', title: "Bali Group Departure ex Mumbai", description: "Tanah Lot | Seminyak", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹49,000", highlights: ["Tanah Lot", "Seminyak"], departure: "Mumbai" },
    { id: 19, cardId: 'vietnam', title: "Vietnam Group Departure ex Chennai", description: "Hanoi | Ha Long Bay", image: beachImage, duration: "5 Nights 6 Days", groupSize: "Group Tour", rating: "4.7", price: "₹45,000", highlights: ["Hanoi", "Ha Long Bay"], departure: "Chennai" },
    { id: 20, cardId: 'australia', title: "Fantastic Australia Group Tour ex Chennai", description: "Sydney | Melbourne | Gold Coast", image: beachImage, duration: "10 Nights 11 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,85,000", highlights: ["Sydney", "Melbourne", "Gold Coast"], departure: "Chennai" },
    { id: 21, cardId: 'azerbaijan', title: "Blissful Baku Group Tour ex Chennai", description: "Baku", image: mountainsImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.6", price: "₹42,000", highlights: ["Baku", "Cultural Sites", "Caspian Sea"], departure: "Chennai" },
    { id: 22, cardId: 'bhutan', title: "Bhutan Group Tour ex Chennai", description: "Paro | Thimphu", image: mountainsImage, duration: "5 Nights 6 Days", groupSize: "Group Tour", rating: "4.7", price: "₹40,000", highlights: ["Paro", "Thimphu"], departure: "Chennai" },
    { id: 23, cardId: 'delhi', title: "Golden Triangle Group Tour ex Chennai", description: "New Delhi | Agra | Jaipur", image: heritageImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹25,000", highlights: ["New Delhi", "Agra", "Jaipur"], departure: "Chennai" },
    { id: 24, cardId: 'japan', title: "Japan Group Tour ex Chennai", description: "Tokyo | Hiroshima | Kyoto", image: heritageImage, duration: "8 Nights 9 Days", groupSize: "Group Tour", rating: "4.9", price: "₹1,15,000", highlights: ["Tokyo", "Hiroshima", "Kyoto"], departure: "Chennai" },
    { id: 25, cardId: 'kazakhstan', title: "Kazakhstan Group Tour ex Chennai", description: "Almaty | Astana", image: mountainsImage, duration: "5 Nights 6 Days", groupSize: "Group Tour", rating: "4.6", price: "₹50,000", highlights: ["Almaty", "Astana"], departure: "Chennai" },
    { id: 26, cardId: 'lakshadweep', title: "Lakshadweep Group Tour ex Chennai", description: "Agatti | Bangaram", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.7", price: "₹35,000", highlights: ["Agatti", "Bangaram"], departure: "Chennai" },
    { id: 27, cardId: 'maldives', title: "Maldives Group Tour ex Chennai", description: "Malé | Overwater Villas", image: beachImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.9", price: "₹60,000", highlights: ["Malé", "Overwater Villas"], departure: "Chennai" },
    { id: 28, cardId: 'manali', title: "Kullu-Manali Group Tour ex Chennai", description: "Manali | Solang Valley", image: mountainsImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.8", price: "₹30,000", highlights: ["Manali", "Solang Valley"], departure: "Chennai" },
    { id: 29, cardId: 'munnar', title: "Munnar Group Tour ex Chennai", description: "Munnar | Tea Gardens", image: mountainsImage, duration: "3 Nights 4 Days", groupSize: "Group Tour", rating: "4.7", price: "₹25,000", highlights: ["Munnar", "Tea Gardens"], departure: "Chennai" },
    { id: 30, cardId: 'newzealand', title: "New Zealand Group Tour ex Chennai", description: "Auckland | Queenstown", image: mountainsImage, duration: "10 Nights 11 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,90,000", highlights: ["Auckland", "Queenstown"], departure: "Chennai" },
    { id: 31, cardId: 'ooty', title: "Ooty Group Tour ex Chennai", description: "Ooty | Coonoor", image: mountainsImage, duration: "3 Nights 4 Days", groupSize: "Group Tour", rating: "4.7", price: "₹22,000", highlights: ["Ooty", "Coonoor"], departure: "Chennai" },
    { id: 32, cardId: 'scandinavia', title: "Scandinavia Group Tour ex Chennai", description: "Oslo | Stockholm | Helsinki", image: mountainsImage, duration: "8 Nights 9 Days", groupSize: "Group Tour", rating: "4.8", price: "₹1,30,000", highlights: ["Oslo", "Stockholm", "Helsinki"], departure: "Chennai" },
    { id: 33, cardId: 'srilanka', title: "Sri Lanka Group Tour ex Chennai", description: "Kandy | Nuwara Eliya | Colombo", image: mountainsImage, duration: "4 Nights 5 Days", groupSize: "Group Tour", rating: "4.7", price: "₹32,000", highlights: ["Kandy", "Nuwara Eliya", "Colombo"], departure: "Chennai" },
    { id: 34, cardId: 'wayanad', title: "Wayanad Group Tour ex Chennai", description: "Wayanad | Chembra Peak", image: mountainsImage, duration: "3 Nights 4 Days", groupSize: "Group Tour", rating: "4.7", price: "₹24,000", highlights: ["Wayanad", "Chembra Peak"], departure: "Chennai" },
  ].map(pkg => ({
    ...pkg,
    image: imageMap[pkg.image] || pkg.image, // Use imageMap if string, else use direct image
  }));

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  const handleLearnMore = (cardId) => {
    const route = routeMap[cardId];
    if (route) {
      navigate(route);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section id="packages" className="py-20 bg-travel-light-blue">
      <PackageHero />
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
                <div className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur-sm rounded-lg px-3 py-2">
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
                    onClick={() => handleLearnMore(pkg.cardId)}
                  >
                    Learn More
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

export default AllPackages;