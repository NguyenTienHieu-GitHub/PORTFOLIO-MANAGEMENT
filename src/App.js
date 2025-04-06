import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Import the AboutUs component
import Contact from "./pages/Contact"; // Import the Contact component
import DataMontly from "./pages/DataMontly";
import Characteristics from "./pages/Characteristics";
import OptimalPortfolio from "./pages/OptimalPorifolio";
import EfficientFrontier from "./pages/EffcientFrontier";
import StockAnalysis from "./pages/StockAnalysis";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { UserProvider } from "./components/UseContext";
import PrivateRoute from "./Router/PrivateRoute"; // Import component PrivateRoute

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Nếu người dùng đã đăng nhập, điều hướng tới trang Home nếu họ đang ở trang Login
      if (window.location.pathname === "/login") {
        navigate("/home");
      }
    }
  }, [navigate]);

  return (
    <UserProvider>
      <div>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />{" "}
            {/* Trang Home không yêu cầu đăng nhập */}
            <Route path="/login" element={<Login />} />{" "}
            {/* Trang đăng nhập không yêu cầu đăng nhập */}
            <Route path="/about-us" element={<AboutUs />} />{" "}
            <Route path="/contact" element={<Contact />} />{" "}
            <Route
              path="/profile"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route
              path="/data-montly"
              element={<PrivateRoute element={<DataMontly />} />}
            />
            <Route
              path="/characteristics"
              element={<PrivateRoute element={<Characteristics />} />}
            />
            <Route
              path="/option-porifolio"
              element={<PrivateRoute element={<OptimalPortfolio />} />}
            />
            <Route
              path="/effcient-frontierportfolio"
              element={<PrivateRoute element={<EfficientFrontier />} />}
            />
            <Route
              path="/stock-analysis"
              element={<PrivateRoute element={<StockAnalysis />} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
