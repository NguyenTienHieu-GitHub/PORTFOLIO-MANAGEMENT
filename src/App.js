import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import DataMontly from "./pages/DataMontly";
import Characteristics from "./pages/Characteristics";
import OptimalPortfolio from "./pages/OptimalPorifolio";
import EfficientFrontier from "./pages/EffcientFrontier";
import StockAnalysis from "./pages/StockAnalysis";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { UserProvider } from "./components/UseContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu người dùng đã đăng nhập và có thông tin trong localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Nếu có, điều hướng tới trang Home và không làm gì thêm
      if (window.location.pathname === "/login") {
        navigate("/home");
      }
    } else {
      // Nếu không, điều hướng tới trang Login
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <UserProvider>
      <div>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/data-montly" element={<DataMontly />} />
            <Route path="/characteristics" element={<Characteristics />} />
            <Route path="/option-porifolio" element={<OptimalPortfolio />} />
            <Route
              path="/effcient-frontierportfolio"
              element={<EfficientFrontier />}
            />
            <Route path="/stock-analysis" element={<StockAnalysis />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
