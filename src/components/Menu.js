import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Menu = () => {
  return (
    <nav className="navbar text-white navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/home">
        GROUP6
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/data-montly">
              DATA MONTLY
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/characteristics">
              CHARACTERISTICS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/option-porifolio">
              OPTIMAL PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/effcient-frontierportfolio">
              EFFICIENT FRONTIER & CAL
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stock-analysis">
              STOCK ANALYSIS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
