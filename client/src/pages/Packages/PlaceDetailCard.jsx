import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Clock, Star, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import mountainsImage from "@/assets/mountains.jpg";
import beachImage from "@/assets/beach.jpg";
import heritageImage from "@/assets/heritage.jpg";

const PackageDetails = () => {
  const { place } = useParams();
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // Map place to image (fallback for API data)
  const imageMap = {
    dubai: beachImage,
    europe: mountainsImage,
    andaman: beachImage,
    thailand: beachImage,
    malaysia: beachImage,
    singapore: beachImage,
    bali: beachImage,
    vietnam: beachImage,
    australia: beachImage,
    azerbaijan: mountainsImage,
    bhutan: mountainsImage,
    delhi: heritageImage,
    japan: heritageImage,
    kazakhstan: mountainsImage,
    lakshadweep: beachImage,
    maldives: beachImage,
    manali: mountainsImage,
    munnar: mountainsImage,
    newzealand: mountainsImage,
    ooty: mountainsImage,
    scandinavia: mountainsImage,
    srilanka: mountainsImage,
    wayanad: mountainsImage,
    unknown: 'https://via.placeholder.com/400'
  };

  // Route map for handleLearnMore
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
    unknown: '/all-places'
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        console.log('Fetching from:', `${API_URL}/api/tour-packages`);
        const response = await axios.get(`${API_URL}/api/tour-packages`);
        console.log('API Response:', response.data);
        console.log('URL Place:', place?.toLowerCase());
        const filteredPackages = response.data.filter(p => {
          const matches = p.place?.toLowerCase() === place?.toLowerCase();
          console.log(`Checking package: ${p.title}, Place: ${p.place}, Matches: ${matches}`);
          return matches;
        });
        console.log('Filtered Packages:', filteredPackages);
        if (filteredPackages.length === 0) {
          console.log(`No packages found for place: ${place}`);
        }
        setPackages(filteredPackages.map(p => {
          const pkg = {
            id: p._id,
            place: p.place?.toLowerCase() || 'unknown',
            title: p.title || 'No Title',
            description: p.description || p.place || 'No Description',
            image: p.image || imageMap[p.place?.toLowerCase()] || imageMap.unknown,
            duration: p.duration || 'N/A',
            groupSize: p.groupSize || 'Group Tour',
            rating: isNaN(parseFloat(p.rating)) ? '4.0' : parseFloat(p.rating).toFixed(1),
            price: p.price || 'Contact for Price',
            highlights: p.highlights || [],
            departure: p.departure || 'N/A'
          };
          console.log(`Package: ${pkg.title}, Image: ${pkg.image}, Rating: ${pkg.rating}`);
          return pkg;
        }));
      } catch (err) {
        setError(`Failed to fetch packages: ${err.message}`);
        console.error('Error fetching packages:', err);
        if (err.response) {
          console.log('Error Response:', err.response.data);
          console.log('Error Status:', err.response.status);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [place]);

  const handleLearnMore = (place) => {
    const route = routeMap[place.toLowerCase()] || routeMap.unknown;
    console.log(`Navigating to: ${route} for place: ${place}`);
    navigate(route);
  };

  if (loading) return <p>Loading packages...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="packages" className="py-20 bg-travel-light-blue min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            {place ? place.charAt(0).toUpperCase() + place.slice(1) : 'Packages'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated travel experiences for {place ? place.charAt(0).toUpperCase() + place.slice(1) : 'this destination'}.
          </p>
        </div>

        {packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`package-card overflow-hidden border-0 elevated-shadow bg-white hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => { e.target.src = imageMap.unknown; console.log(`Image failed to load: ${pkg.image}`); }}
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

                  <div className="flex gap-2">
                    <Link to="/customer-details">
                      <Button variant="package" className="flex-1">
                        Book Now
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleLearnMore(pkg.place)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-accent">
              No Packages Found
            </h3>
            <p className="text-muted-foreground">
              Sorry, no packages are available for this destination.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/all-places">
            <Button variant="travel" size="lg" className="px-8">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;