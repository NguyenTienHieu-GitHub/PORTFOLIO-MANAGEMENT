import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import DataMontly from "./pages/DataMontly";
import Characteristics from "./pages/Characteristics";
import OptimalPortfolio from "./pages/OptimalPorifolio";
import EfficientFrontier from "./pages/EffcientFrontier";
import StockAnalysis from "./pages/StockAnalysis";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="content">
          <Routes>
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
    </Router>
  );
}

export default App;
