import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Clock, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PackageHero from "@/pages/Packages/PackageHero";
import axios from 'axios';

const AllPackages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // Define route mapping based on place
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
    wayanad: '/wayanad'
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

  if (loading) return <div className="container mx-auto px-4 py-20">Loading packages...</div>;
  if (error) return <div className="container mx-auto px-4 py-20">Error: {error}</div>;

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
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }}
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
                  {pkg.place}
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
                    onClick={() => handleLearnMore(pkg.place)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {packages.length === 0 && !loading && (
            <p className="text-center col-span-full">No group tours available.</p>
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