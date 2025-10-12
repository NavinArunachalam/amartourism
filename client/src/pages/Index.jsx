import Hero from "@/components/Hero";
import PackagesSection from "@/components/PackagesSection";
import HoneymoonSection from "@/components/HoneymoonSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ExploreSection from "@/components/ExploreSection"
import HappyCustomers from "@/components/HappyCustomers"

const Index = () => {
  return (
    <div >
        <Hero />
        <PackagesSection />
        <HoneymoonSection />
        <HappyCustomers/>
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <ExploreSection/>
    </div>
  );
};

export default Index;
