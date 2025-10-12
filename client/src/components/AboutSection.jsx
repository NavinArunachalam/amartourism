import { Card, CardContent } from "@/components/ui/Card";
import { Plane, Hotel, Users, Shield, Briefcase, Ticket, Truck, Handshake, Camera, Award } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Destinations" },
  { number: "10,000+", label: "Happy Travelers" },
  { number: "98%", label: "Satisfaction Rate" },
];

const services = [
  { icon: Plane, title: "International & Domestic Tour Packages", description: "Explore global and local destinations with our tailored packages." },
  { icon: Hotel, title: "Hotel & Resort Bookings", description: "Book comfortable and premium accommodations worldwide." },
  { icon: Users, title: "Group Tours & Honeymoon Packages", description: "Perfect for friends, families, and couples seeking memorable journeys." },
  { icon: Shield, title: "Visa Assistance & Travel Insurance", description: "Get complete support for visas and travel insurance." },
  { icon: Briefcase, title: "Corporate & Business Travel Management", description: "Comprehensive travel management for B2B and corporate clients." },
  { icon: Ticket, title: "Flight, Train & Bus Ticketing", description: "Convenient ticket booking for multiple modes of transport." },
  { icon: Truck, title: "Airport Transfers & Ground Transportation", description: "Safe and timely transfers from airport to hotel and around the city." },
  { icon: Handshake, title: "Customized Itineraries for B2B Partners", description: "Tailored travel plans for corporate clients and partners." },
  { icon: Camera, title: "Luxury, Adventure & Cultural Tours", description: "Experience premium, adventurous, and cultural travel packages." },
];

const awards = [
  "Kerala Business Excellence Award 2024",
  "Best Service Award in Thailand",
  "Bharatiya Seva Ratna Award 2024",
  "International Achiever Award 2024",
  "Achiever of the Year 2024 (Golden Entertainment)",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header (Heading stays centered) */}
        <div className="text-start mb-5">
          <h2 className="text-4xl  md:text-5xl font-bold text-accent mb-6">
            About Amar Tourism
          </h2>
        </div>

        {/* About + Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ">
          {/* About Text Section on LEFT */}
          <div className="space-y-6 mt-5">
            <p className="text-md text-muted-foreground leading-relaxed">
              Amar Tourism is a professionally managed travel company headquartered in Chennai, with a branch office in Erode, Tamil Nadu. Founded by Mr. Amarnath Annadurai, Amar Tourism was built on a passion for travel, cultural exchange, and creating memorable experiences for travelers across the globe.
            </p>
            <p className="text-md text-muted-foreground leading-relaxed">
              We operate in both B2B and B2C sectors, offering comprehensive travel solutions including international and domestic tour packages, hotel and flight bookings, group tours, visa assistance, and customized itineraries. Amar Tourism is known for delivering quality service, competitive pricing, and personalized attention to every traveler.
            </p>
            <p className="text-md text-muted-foreground leading-relaxed">
              Our international destinations include Thailand, Malaysia, Singapore, Vietnam, Cambodia, Dubai, Turkey, and the Philippines, among others. With a strong global network and deep destination knowledge, Amar Tourism provides the best B2B prices, ensuring that everyone can explore their dream destinations within their budget.
            </p>
                 </div>

          {/* Story Section on RIGHT */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Amar Tourism was born from a simple belief: travel has the power to
              transform lives. What started as a small travel agency has grown into
              a comprehensive tourism company, backed by the prestigious Sangam Hotels
              group, ensuring quality and reliability in every journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced travel professionals understands that every
              traveler is unique. We craft personalized experiences that go beyond
              the ordinary, creating memories that last a lifetime.
            </p>
                 <div className="bg-gradient-hero rounded-lg p-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-white/90">
                To make world-class travel experiences accessible to everyone while
                maintaining the highest standards of service, safety, and sustainability.
              </p>
            </div>

          </div>
          
        </div>

        {/* Awards/Trophy Section BELOW */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent text-center mb-8">Recognitions & Awards</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="flex items-center p-4 travel-shadow hover:elevated-shadow smooth-transition">
                <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{award}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center travel-shadow hover:elevated-shadow smooth-transition">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-3xl font-bold text-accent text-center mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="travel-shadow hover:elevated-shadow smooth-transition border-0 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-package rounded-lg">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-accent">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
