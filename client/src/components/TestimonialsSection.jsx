import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rajesh Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Our honeymoon trip to Maldives organized by Amar Tourism was absolutely perfect. Every detail was taken care of, from flights to romantic dinners. We couldn't have asked for a better experience!",
    trip: "Maldives Honeymoon Package",
  },
  {
    id: 2,
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The Himalayan trek organized by Amar Tourism was life-changing. The guides were professional, accommodation was excellent, and the entire journey was well-planned. Highly recommended!",
    trip: "Himalayan Adventure",
  },
  {
    id: 3,
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Fantastic experience with our family trip to Kerala. The team understood our requirements perfectly and created an itinerary that suited all age groups. Professional service throughout!",
    trip: "Kerala Family Package",
  },
  {
    id: 4,
    name: "Deepak & Family",
    location: "Delhi",
    rating: 5,
    text: "Our corporate trip to Goa was excellently managed. All arrangements were smooth, team building activities were engaging, and the resort was top-notch. Great work by Amar Tourism!",
    trip: "Corporate Group Tour",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Pune",
    rating: 5,
    text: "Solo traveler here! Amar Tourism made my Europe trip safe and memorable. Their support throughout the journey and visa assistance was exceptional. Will definitely book again!",
    trip: "Europe Solo Adventure",
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "The heritage tour of Rajasthan was beautifully curated. We experienced authentic culture, stayed in amazing properties, and learned so much about our history. Outstanding service!",
    trip: "Rajasthan Heritage Tour",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < rating ? "text-primary fill-current" : "text-gray-300"
      }`}
    />
  ));
};

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-travel-light-blue max-w-full overflow-x-hidden pt-24"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers. Read what our customers have to
            say about their journeys with Amar Tourism.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="travel-shadow hover:elevated-shadow smooth-transition border-0 bg-white max-w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Trip Info */}
                <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-accent truncate">
                    {testimonial.trip}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-accent truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 bg-white rounded-lg px-8 py-4 travel-shadow max-w-full overflow-hidden">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="font-semibold text-accent">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="text-accent font-semibold text-center">
              10,000+ Happy Travelers
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="text-accent font-semibold text-center">
              98% Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;