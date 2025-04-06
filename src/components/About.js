import React from "react";
import "../assets/css/About.css"; // Import CSS file

const AboutUsSection = () => {
  return (
    <div className="about-us-container">
      <div className="left-section">
        <div className="image-wrapper">
          <img
            src="https://www.dragoncapital.com.vn/vi/sfsites/c/cms/delivery/media/MC3HEOO3N3BNFPNKDMIVC4VV2DPI?version=4.3&channelId=0apJ2000000fxi1"
            // Replace with the actual path to your image
            alt="Man in Suit"
            className="real-image"
          />
          {/* <img
            src="https://www.dragoncapital.com.vn/vi/sfsites/c/cms/delivery/media/MCO4XKWSZ4NRHCTEBZVDDVDJBHMM?version=4.2&channelId=0apJ2000000fxi1" // Replace with the actual path to your abstract image
            alt="Abstract Portrait"
            className="abstract-image"
          /> */}
        </div>
      </div>
      <div className="right-section">
        <div className="top-right">
          <h3>About</h3>
          <h1>History, Vision, and Mission of the Company</h1>
        </div>
        <div className="bottom-right">
          <p>
            WealthNest IPS was established with the goal of providing
            professional and effective investment advisory services, helping
            individual and institutional clients achieve long-term financial
            goals and asset protection. Our vision is to become a trusted
            strategic partner, delivering sustainable financial solutions. The
            company's mission is to provide the most optimal and tailored
            investment strategies for clients, ensuring long-term financial
            prosperity.
          </p>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
