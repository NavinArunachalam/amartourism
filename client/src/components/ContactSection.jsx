import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    whatsapp: "",
    destination: "",
    date: "",
    people: "",
    vacationType: "",
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Google Apps Script Web App URL
    const WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbzQu3v4ZDvEEMATRjVP9xxhWbuRzSe-o0a8gvrNBE6htSI4B2ErmgSm57Z02i5OOI61/exec";

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send all form data
      });

      // no-cors prevents reading response, assume success if no error thrown
      setStatus("success");
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        city: "",
        email: "",
        phone: "",
        whatsapp: "",
        destination: "",
        date: "",
        people: "",
        vacationType: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        "Failed to submit the form. Please check your internet connection or contact support."
      );
      console.error("Submission error:", error.message);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      subContent: "Mon-Sat, 9:00 AM - 8:00 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@amartourism.com",
      subContent: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Travel Street, Mumbai",
      subContent: "Maharashtra, India - 400001",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday",
      subContent: "9:00 AM - 8:00 PM IST",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Plan Your Next Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to explore the world? Get in touch with our travel experts to
            create your perfect journey. We're here to make your travel dreams
            come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="travel-shadow border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-accent flex items-center space-x-2">
                <Send className="h-6 w-6 text-primary" />
                <span>Send Us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <p className="text-green-600">
                    Thank you! Your inquiry has been submitted successfully. We'll
                    contact you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600">{errorMsg}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City of Residence *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Enter your WhatsApp number"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Travel Destination *</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="Where would you like to go?"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Travel Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="people">Number of People *</Label>
                    <Input
                      id="people"
                      name="people"
                      type="number"
                      value={formData.people}
                      onChange={handleInputChange}
                      placeholder="Enter number of people"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vacationType">Vacation Type *</Label>
                  <select
                    id="vacationType"
                    name="vacationType"
                    value={formData.vacationType}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Vacation Type</option>
                    <option value="HONEYMOON">Honeymoon</option>
                    <option value="FAMILY TRIP">Family Trip</option>
                    <option value="FRIENDS TRIP">Friends Trip</option>
                    <option value="SOLO TRIP">Solo Trip</option>
                    <option value="GROUP TOUR">Group Tour</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full"
                >
                  {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="travel-shadow border-0 hover:elevated-shadow smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-package rounded-lg">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-accent mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="travel-shadow border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                    <p className="text-white/80">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;