import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heart, MapPin, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PackageHero from "@/pages/Packages/PackageHero";
import axios from 'axios';

const AllPackages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

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

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages`);
        const groupPackages = response.data
          .filter(p => p.groupSize === 'Group Tour')
          .map(p => ({
            id: p._id,
            place: p.place?.toLowerCase() || (p.title ? Object.keys(routeMap).find(key => p.title.toLowerCase().includes(key)) : 'unknown'),
            title: p.title || 'No Title',
            description: p.description || 'No Description',
            image: p.image || 'https://via.placeholder.com/400',
            duration: p.duration || 'Unknown Duration',
            groupSize: p.groupSize || 'Group Tour',
            rating: p.rating || '4.0',
            price: p.price || 'Contact for Price',
            highlights: p.highlights || [],
            departure: p.departure || 'Unknown Departure'
          }));
        setPackages(groupPackages);
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
  }, [API_URL]);

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  const handleLearnMore = (place) => {
    const route = routeMap[place];
    if (route) {
      navigate(route);
    } else {
      console.warn(`No route found for place: ${place}`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <div className="container mx-auto px-4 py-20 text-center text-gray-600">Loading packages...</div>;
  if (error) return <div className="container mx-auto px-4 py-20 text-center text-red-500">Error: {error}</div>;

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <PackageHero />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-rose-500" />
            <p className="text-primary font-semibold">Group Adventures</p>
            <Heart className="h-8 w-8 text-rose-500" />
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="honeymoon-card overflow-hidden border-0 elevated-shadow bg-white hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-primary fill-current" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-sm rounded-full p-1">
                  <Heart className="h-4 w-4 text-white fill-current" />
                </div>
                <div className="absolute bottom-3 left-3 bg-accent/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-white font-semibold">{pkg.price}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-accent flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{pkg.title}</span>
                </CardTitle>
                <CardDescription className="text-sm">{pkg.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Duration */}
                <div className="flex items-center space-x-1 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, idx) => (
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
                    onClick={() => handleLearnMore(pkg.place)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {packages.length === 0 && !loading && (
            <p className="text-center col-span-full text-muted-foreground">No group tours available.</p>
          )}
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