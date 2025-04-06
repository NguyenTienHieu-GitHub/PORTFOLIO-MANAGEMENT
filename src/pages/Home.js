import React from "react";
import "../assets/css/Home.css"; // Import the CSS file for styling
import Banner from "../components/Banner"; // Import the Banner component
import AboutUsSection from "../components/About"; // Import the AboutUsSection component
import ContactBannerForm from "../components/ContactBannerForm"; // Import the ContactBannerForm component

const Home = () => {
  return (
    <div className="pt-3">
      <Banner /> {/* Render the Banner component */}
      <AboutUsSection /> {/* Render the AboutUsSection component */}
      <ContactBannerForm /> {/* Render the ContactBannerForm component */}
    </div>
  );
};

export default Home;
