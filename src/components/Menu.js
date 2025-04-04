import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../assets/images/Logoweb.png";

import { useUser } from "../components/UseContext";
import "../assets/css/Menu.css"; // Import your CSS file for custom styles

const Menu = () => {
  const { user, setUser } = useUser(); // Lấy thông tin người dùng từ context
  const navigate = useNavigate();
  const location = useLocation();

  // Kiểm tra người dùng đã đăng nhập khi component được mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Cập nhật thông tin người dùng từ localStorage
    }
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi localStorage
    setUser(null); // Xóa thông tin người dùng khỏi context
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar text-white navbar-expand-lg navbar-dark custom-navbar">
      <a className="navbar-brand" href="/home">
        <img src={Logo} alt="LOGO" className="logo" />
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
          <li className={`nav-item ${isActive("/home") ? "active" : ""}`}>
            <Link className="nav-link" to="/home">
              HOME
            </Link>
          </li>
          <li
            className={`nav-item ${isActive("/data-montly") ? "active" : ""}`}
          >
            <Link className="nav-link" to="/data-montly">
              DATA MONTLY
            </Link>
          </li>
          <li
            className={`nav-item ${
              isActive("/characteristics") ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/characteristics">
              CHARACTERISTICS
            </Link>
          </li>
          <li
            className={`nav-item ${
              isActive("/option-porifolio") ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/option-porifolio">
              OPTIMAL PORTFOLIO
            </Link>
          </li>
          <li
            className={`nav-item ${
              isActive("/effcient-frontierportfolio") ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/effcient-frontierportfolio">
              EFFICIENT FRONTIER & CAL
            </Link>
          </li>
          <li
            className={`nav-item ${
              isActive("/stock-analysis") ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/stock-analysis">
              STOCK ANALYSIS
            </Link>
          </li>
          <li className="nav-item dropdown ms-3">
            {user && (
              <div className="dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome {user.name}
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
