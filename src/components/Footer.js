import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/SimpleFooter.css"; // Import CSS file
import Logo from "../assets/images/Logoweb.png"; // Import logo image

const SimpleFooter = () => {
  return (
    <footer className="bg-light">
      <div className="row">
        <div className="text-start col-md-6">
          <img src={Logo} alt="Logo" width="150" height="auto" />
        </div>
        <div className="text-start col-md-3">
          <div>
            <h6 className="footer-title">Customers</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="nav-link p-0 text-muted">
                  Organization
                </a>
              </li>
              <li>
                <a href="/profile" className="nav-link p-0 text-muted">
                  Individual
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-start col-md-3">
          <div>
            <h6 className="footer-title">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="bg-light py-4 mt-5">
        <div className="align-items-center">{/* Logo and Menu columns */}</div>
        <div>
          <div md={12} className="text-center mt-3">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Wealth Nest Ips
            </p>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default SimpleFooter;
