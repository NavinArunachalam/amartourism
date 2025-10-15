import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handlePackagesClick = () => {
    navigate("/package-details");
    setIsMobileMenuOpen(false);
  };

  const handlePlanYourJourneyClick = () => {
    navigate("/customer-details");
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Packages", id: "packages" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-full overflow-x-hidden ${isScrolled
        ? "bg-background/95 backdrop-blur-md travel-shadow"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className=" bg-white rounded-full">
                <img src="/amaricon-removebg-preview.png" alt="" className="h-12 w-12 " />
              </div>
            <div>
              <h1 className="text-xl font-bold text-accent">Amar Tourism</h1>
              <p className="text-xs text-muted-foreground">Explore the World</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={
                  item.label === "Packages"
                    ? handlePackagesClick
                    : () => scrollToSection(item.id)
                }
                className="text-accent hover:text-primary smooth-transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              onClick={handlePlanYourJourneyClick}
            >
              Plan Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-accent" />
            ) : (
              <Menu className="h-6 w-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 max-w-full overflow-x-hidden">
            <div className="flex flex-col space-y-4 bg-background/95 backdrop-blur-md rounded-lg p-4 travel-shadow">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={
                    item.label === "Packages"
                      ? handlePackagesClick
                      : () => scrollToSection(item.id)
                  }
                  className="text-accent hover:text-primary smooth-transition font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                className="mt-4"
                onClick={handlePlanYourJourneyClick}
              >
                Plan Your Journey
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;