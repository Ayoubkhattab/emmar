import React from "react";

import Navbar from "../../../components/navbar/header";
import HeroSectionPage from "./HeroSection/page";
import ContactPage from "./contactSection/contactPage";
import FeaturedSectionpage from "./FeaturedProjectsSection/page";
import Footer from "../../../components/footer/footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSectionPage />
      <FeaturedSectionpage />
      <ContactPage />
      <Footer />
    </div>
  );
}
