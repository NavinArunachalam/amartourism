import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import CustomerDetails from "@/components/CustomerDetails";
import AboutSection from "@/components/AboutSection";
import UserLayout from "@/components/Admin/UserLayout";
import DashBoard from "@/components/Admin/Dashboard";
// Import all pages
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import AndamanPage from "@/pages/Andaman/Andaman";
import Bali4NPage from "@/pages/Bali-bliss/Bali4NPage";
import Bali6NPage from "@/pages/Bali-bliss/Bali6NPage";
import AustraliaPage from "@/pages/Australia/AustraliaPage";
import AzerbaijanPage from "@/pages/Azer baijan/AzerbaijanPage";
import BhutanPage from "@/pages/Bhutan-land/BhutanPage";
import Delhi from "@/pages/Delhi/DelhiPage";
import Dubai from "@/pages/Dubai/DubaiPage";
import Europe from "@/pages/Europe/EuropePage";
import JammuKashmirPage from "@/pages/JammuKashmir/JammuKashmirPage";
import Japan from "@/pages/Japan/JapanPage";
import KazakhstanPage from "@/pages/Kazakhstan/KazakhstanPage";
import LakshadweepPage from "@/pages/Lakshadweep/LakshadweepPage";
import MalaysiaPage from "@/pages/malaysis/MalaysiaPage";
import Malaysia8DaysPage from "@/pages/malaysis/Malaysia8DaysPage";
import Malaysia5DaysPage from "@/pages/malaysis/Malaysia5DaysPage";
import MaldivesPage from "@/pages/Maldives/MaldivesPage";
import KulluManaliPage from "@/pages/manali/KulluManaliPage";
import MunnarPage from "@/pages/munnar/MunnarPage";
import NewZealandPage from "@/pages/New Zealand/NewZealandPage";
import OotyPage from "@/pages/ooty/OotyPage";
import ScandinaviaPage from "@/pages/Scandinavia/ScandinaviaPage";
import SingaporePage from "@/pages/Singapore/SingaporePage";
import Singapore5NPage from "@/pages/singapore/Singapore5NPage";
import SingaporeMalaysiaPage from "@/pages/singapore/SingaporeMalaysiaPage";
import SriLankaPage from "@/pages/Srilanka/SriLanka5NPage";
import Thailand4NPage from "@/pages/Thailand/Thailand4NPage";
import Thailand6N7DPage from "@/pages/Thailand/Thailand6N7DPage";
import Thailand5NPage from "@/pages/Thailand/Thailand5NPage";
import EnchantingThailand5NPage from "@/pages/Thailand/EnchantingThailand5NPage";
import Ooty3N4DPage from "@/pages/Wayanad/Ooty3N4DPage";
import EnchantingVietnam5N6DPage from "@/pages/Vietnam/EnchantingVietnam5N6DPage";

import AllPackages from "@/components/AllPackages";
import AllPlaces from "@/pages/Packages/AllPlaces";
import AllHoneymoon from "@/components/AllHoneymoon";
import PackageDetails from "@/pages/Packages/PackageDetails"
import PlaceDetailCard from "@/pages/Packages/PlaceDetailCard";
import AdminLayout from "@/components/Admin/AdminLayout";
//admin
import TourPackages from "@/components/Admin/TourPackage";
import AddTourPackage from "@/components/Admin/AddTourPackage";
import SpecialOffer from "@/components/Admin/Specialoffer/SpecialOffer";
import AdminReview from "@/components/Admin/AdminReview";
import AddSpecialOffer from "@/components/Admin/Specialoffer/AddSpecialOffer";
import EditSpecialOffer from "@/components/Admin/Specialoffer/EditSpecialOffer";
import AddDailyDeals from "@/components/Admin/DailyDeals/AddDailyDeals";
import EditDailyDeals from "@/components/Admin/DailyDeals/EditDailyDeals";
import DailyDeals from '@/components/Admin/DailyDeals/DailyDeals';
import EditTourPackage from "@/components/Admin/EditTourPackage";
import AddAdminReview from "@/components/Admin/AddAdminReview";
// Create QueryClient instance

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<UserLayout />}>
          <Route path="/" element={<Index />} />

          {/* Travel pages */}
          <Route path="/australia" element={<AustraliaPage />} />
          <Route path="/andaman" element={<AndamanPage />} />
          <Route path="/azerbaijan" element={<AzerbaijanPage />} />
          <Route path="/bali-4n" element={<Bali4NPage />} />
          <Route path="/bali-6n" element={<Bali6NPage />} />
          <Route path="/bhutan" element={<BhutanPage />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/jammu-kashmir" element={<JammuKashmirPage />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/kazakhstan" element={<KazakhstanPage />} />
          <Route path="/lakshadweep" element={<LakshadweepPage />} />
          <Route path="/malaysia" element={<MalaysiaPage />} />  
          <Route path="/malaysia-5days" element={<Malaysia5DaysPage />} />
          <Route path="/malaysia-8days" element={<Malaysia8DaysPage />} />
          <Route path="/maldives" element={<MaldivesPage />} />
          <Route path="/kullu-manali" element={<KulluManaliPage />} />   
          <Route path="/munnar" element={<MunnarPage />} />
          <Route path="/new-zealand" element={<NewZealandPage />} />
          <Route path="/ooty" element={<OotyPage />} />
          <Route path="/scandinavia" element={<ScandinaviaPage />} />
          <Route path="/singapore" element={<SingaporePage />} />
          <Route path="/singapore-5n" element={<Singapore5NPage />} />
          <Route path="/singapore-malaysia" element={<SingaporeMalaysiaPage />} />
          <Route path="/sri-lanka" element={<SriLankaPage />} />
          <Route path="/thailand-4n" element={<Thailand4NPage />} />
          <Route path="/thailand-5n" element={<Thailand5NPage />} />
          <Route path="/thailand-6n7d" element={<Thailand6N7DPage />} />
          <Route path="/enchanting-thailand-5n" element={<EnchantingThailand5NPage />} />
          <Route path="/ooty-3n4d" element={<Ooty3N4DPage />} />
          <Route path="/enchanting-vietnam-5n6d" element={<EnchantingVietnam5N6DPage />} />

          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/all-honeymoon" element={<AllHoneymoon/>}/>
          <Route path="/all-places" element={<AllPlaces/>}/>
          <Route path="/package-details" element={<PackageDetails/>}/>
          <Route path="/customer-details" element={<CustomerDetails/>}/>
          <Route path="/about-section" element={<AboutSection/>}/>
          <Route path="/details/:place" element={<PlaceDetailCard/>}/>
          </Route>
               <Route path="/admin">
                 <Route element={<AdminLayout />}>
                  <Route index element={<DashBoard />} />
                     <Route path="dashboard" element={<DashBoard />} />
                     <Route path="tour-packages" element={<TourPackages />} />
                     <Route path="special-offer" element={<SpecialOffer />} />
                     <Route path="daily-deal" element={<DailyDeals />} />
                     <Route path="reviews" element={<AdminReview />} />
                     <Route path="add-review" element={<AddAdminReview />} />
              <Route path="tour-packages/add" element={<AddTourPackage />} />
              <Route path="tour-packages/edit/:id" element={<EditTourPackage />} />
              <Route path="special-offer/add" element={<AddSpecialOffer />} />
              <Route path="special-offer/edit/:id" element={<EditSpecialOffer />} />
              <Route path="tour-packages/add" element={<AddTourPackage />} />
              <Route path="daily-deal/add" element={<AddDailyDeals/>} />
              <Route path="daily-deal/edit/:id" element={<EditDailyDeals />} />
              </Route>

                  </Route>


          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;