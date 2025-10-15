import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Heart, MapPin, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PackageHero from "@/pages/Packages/PackageHero";
const HoneymoonSection = () => {
  const navigate = useNavigate();
  const [honeymoonDestinations, setHoneymoonDestinations] = useState([]);
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
  };

  useEffect(() => {
    const fetchHoneymoonPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/tour-packages`);
        const honeymoonPackages = response.data
          .filter(p => p.groupSize === 'Honeymoon') // Adjust filter based on API
          .map(p => ({
            id: p._id,
            place: p.place?.toLowerCase() || (p.title ? Object.keys(routeMap).find(key => p.title.toLowerCase().includes(key)) : 'unknown'),
            title: p.title || 'No Title',
            description: p.place || 'No Description',
            image: p.image || 'https://via.placeholder.com/400',
            duration: p.duration || 'Unknown Duration',
            groupSize: p.groupSize || 'Group Tour',
            rating: p.rating || '4.0',

            highlights: p.highlights || [],
            departure: p.departure || 'Unknown Departure',
            destination: p.title || 'Unknown Destination'
          }));
        setHoneymoonDestinations(honeymoonPackages);
      } catch (err) {
        setError(`Failed to fetch honeymoon packages: ${err.message}`);
        console.error('Error fetching honeymoon packages:', err);
        if (err.response) {
          console.log('Error Response:', err.response.data);
          console.log('Error Status:', err.response.status);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHoneymoonPackages();
  }, [API_URL]);

  const handleBookNow = () => {
    navigate('/customer-details');
  };

  const handleDetails = (place) => {
    const route = routeMap[place];
    if (route) {
      navigate(route);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <div className="container mx-auto px-4 py-20">Loading honeymoon packages...</div>;
  if (error) return <div className="container mx-auto px-4 py-20">Error: {error}</div>;

  return (
    <section id="honeymoon" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <PackageHero />
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
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-primary fill-current" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-sm rounded-full p-1">
                  <Heart className="h-4 w-4 text-white fill-current" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-accent flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{destination.destination}</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  {destination.place}
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
                    onClick={() => handleDetails(destination.place)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {honeymoonDestinations.length === 0 && !loading && (
            <p className="text-center col-span-full">No honeymoon packages available.</p>
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

export default HoneymoonSection;