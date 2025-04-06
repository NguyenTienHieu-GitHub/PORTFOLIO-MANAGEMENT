import React, { useState } from "react";
import "../assets/css/ContacBannerForm.css"; // Import CSS file

const ContactBannerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to a server
    console.log({ name, email, phone, agree });
    setSubmissionMessage(
      "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
    );
    setName("");
    setEmail("");
    setPhone("");
    setAgree(false);
  };

  return (
    <div className="contact-banner-container">
      <div className="banner-left d-0">
        <div className="image-container">
          <img
            src="https://www.dragoncapital.com.vn/vi/sfsites/c/cms/delivery/media/MC5WVACV3EHNGPTLI7N65ZKUDWKI?version=4.1&channelId=0apJ2000000fxi1" // Replace with your actual banner image URL
            alt=""
            className="banner-image"
          />
        </div>
      </div>
      <div className="form-right">
        <div className="form-header">
          <p className="form-title">Consultation Registration</p>
          <h2>Contact Us Now</h2>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="agree"
              className="form-check-input"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="agree">
              I would like to receive product and market updates from Wealth
              Nest Ips.
            </label>
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
          {submissionMessage && (
            <p className="submission-message">{submissionMessage}</p>
          )}
          <p className="form-policy">
            By registering, I confirm that the information provided is accurate
            and agree that Wealth Nest Ips may use this data for purposes
            aligned with the privacy policy{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactBannerForm;
