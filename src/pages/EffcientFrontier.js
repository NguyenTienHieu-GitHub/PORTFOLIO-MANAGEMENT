import React, { useState } from "react";
import DataEfficient from "../assets/data/DataEffcient.json";
import AssetMetrics from "../assets/data/AssetMetrics.json";
import "../assets/css/AssetMetrics.css";
import EfficientFrontierChart from "../components/EfficientFrontierChart";
import EfficientFrontierChart2 from "../components/EfficientFrontierChart2";
import EfficientFrontierChart3 from "../components/EfficientFrontierChart3";

const PortfolioTable = ({ title, data }) => {
  if (!data) {
    return (
      <div className="table-container">
        <h2>{title}</h2>
        <p>Error: No data available for this portfolio.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>{title}</th>
              <th></th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="7">1000000000</td>
              <td>Weights</td>
              <td>{data.weights?.FPT || "-"}</td>
              <td>{data.weights?.KSV || "-"}</td>
              <td>{data.weights?.LPB || "-"}</td>
              <td>{data.weights?.TOTAL || "-"}</td>
            </tr>
            <tr>
              <td>Invested</td>
              <td>{data.invested?.FPT?.toLocaleString() || "-"}</td>
              <td>{data.invested?.KSV?.toLocaleString() || "-"}</td>
              <td>{data.invested?.LPB?.toLocaleString() || "-"}</td>
              <td>{data.invested?.TOTAL?.toLocaleString() || "-"}</td>
            </tr>
            <tr>
              <td>Number of Shares</td>
              <td>{data.number_of_shares?.FPT?.toLocaleString() || "-"}</td>
              <td>{data.number_of_shares?.KSV?.toLocaleString() || "-"}</td>
              <td>{data.number_of_shares?.LPB?.toLocaleString() || "-"}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Port Expected Return</td>
              <td>{data.port_expected_return || "-"}</td>
            </tr>
            <tr>
              <td>Port Std Dev</td>
              <td>{data.port_std_dev || "-"}</td>
            </tr>
            <tr>
              <td>Sharpe Ratio</td>
              <td>{data.Sharpe_Ratio || "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
const PortfolioTable2 = ({ title, data }) => {
  if (!data) {
    return (
      <div className="table-container">
        <h2>{title}</h2>
        <p>Error: No data available for this portfolio.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>{title}</th>
              <th></th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="7">1000000000</td>
              <td>Weights</td>
              <td>{data.weights?.FPT || "-"}</td>
              <td>{data.weights?.KSV || "-"}</td>
              <td>{data.weights?.LPB || "-"}</td>
              <td>{data.weights?.TOTAL || "-"}</td>
            </tr>
            <tr>
              <td>Invested</td>
              <td>{data.invested?.FPT?.toLocaleString() || "-"}</td>
              <td>{data.invested?.KSV?.toLocaleString() || "-"}</td>
              <td>{data.invested?.LPB?.toLocaleString() || "-"}</td>
              <td>{data.invested?.TOTAL?.toLocaleString() || "-"}</td>
            </tr>
            <tr>
              <td>Number of Shares</td>
              <td>{data.number_of_shares?.FPT?.toLocaleString() || "-"}</td>
              <td>{data.number_of_shares?.KSV?.toLocaleString() || "-"}</td>
              <td>{data.number_of_shares?.LPB?.toLocaleString() || "-"}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>{data.trong?.FPT?.toLocaleString() || "-"}</td>
              <td>{data.trong?.KSV?.toLocaleString() || "-"}</td>
              <td>{data.trong?.LPB?.toLocaleString() || "-"}</td>
              <td>{data.trong?.TOTAL?.toLocaleString() || "-"}</td>
            </tr>
            <tr>
              <td>Port Expected Return</td>
              <td>{data.port_expected_return || "-"}</td>
            </tr>
            <tr>
              <td>Port Std Dev</td>
              <td>{data.port_std_dev || "-"}</td>
            </tr>
            <tr>
              <td>Sharpe Ratio</td>
              <td>{data.Sharpe_Ratio || "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
const EfficientFrontier = () => {
  const [selectedOption, setSelectedOption] = useState("Equally Weighted");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Equally Weighted":
        return (
          <PortfolioTable
            title="Equally Weighted"
            data={DataEfficient.equally_weighted}
          />
        );
      case "Maximum Sharpe Ratio":
        return (
          <PortfolioTable
            title="Maximum Sharpe Ratio"
            data={DataEfficient.Maximum_Sharpe_Ratio}
          />
        );
      case "Minimum Variance Portfolio":
        return (
          <PortfolioTable
            title="Minimum Variance Portfolio"
            data={DataEfficient.Minimum_Variance_Portfolio}
          />
        );
      case "Random":
        return <PortfolioTable2 title="Random" data={DataEfficient.Random} />;
      default:
        return null;
    }
  };

  const renderChart = () => {
    switch (selectedOption) {
      case "Chart 1":
        return <EfficientFrontierChart />;
      case "Chart 2":
        return <EfficientFrontierChart2 />;
      case "Chart 3":
        return <EfficientFrontierChart3 />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Bên trái: Options */}
        <div className="col-md-4">
          <div className="options-section">
            <h2>Risk Free: {AssetMetrics.risk_free}</h2>

            <table className="table table-striped table-hover table-bordered">
              <thead className="table-success">
                <tr>
                  <th></th>
                  <th>FPT</th>
                  <th>KSV</th>
                  <th>LPB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average Return</td>
                  <td>{AssetMetrics.assets.FPT.average_return}</td>
                  <td>{AssetMetrics.assets.KSV.average_return}</td>
                  <td>{AssetMetrics.assets.LPB.average_return}</td>
                </tr>
                <tr>
                  <td>Std Dev</td>
                  <td>{AssetMetrics.assets.FPT.std_dev}</td>
                  <td>{AssetMetrics.assets.KSV.std_dev}</td>
                  <td>{AssetMetrics.assets.LPB.std_dev}</td>
                </tr>
                <tr>
                  <td>Sharpe Ratio</td>
                  <td>{AssetMetrics.assets.FPT.sharpe_ratio}</td>
                  <td>{AssetMetrics.assets.KSV.sharpe_ratio}</td>
                  <td>{AssetMetrics.assets.LPB.sharpe_ratio}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>Choose Table</h4>
            </div>
            <div className="list-group list-group-flush">
              <button
                className={`list-group-item list-group-item-action btn btn-outline-success ${
                  selectedOption === "Equally Weighted" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Equally Weighted")}
              >
                Equally Weighted
              </button>
              <button
                className={`list-group-item list-group-item-action btn btn-outline-success ${
                  selectedOption === "Maximum Sharpe Ratio" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Maximum Sharpe Ratio")}
              >
                Maximum Sharpe Ratio
              </button>
              <button
                className={`list-group-item list-group-item-action btn btn-outline-success ${
                  selectedOption === "Minimum Variance Portfolio"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleOptionClick("Minimum Variance Portfolio")}
              >
                Minimum Variance Portfolio
              </button>
              {/* <button
                className={`list-group-item list-group-item-action btn btn-outline-success ${
                  selectedOption === "Random" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Random")}
              >
                Random
              </button> */}
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header bg-success text-white">
              <h4>Choose Chart</h4>
            </div>
            <div className="list-group list-group-flush">
              <button
                className={`list-group-item list-group-item-action table-success ${
                  selectedOption === "Chart 1" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Chart 1")}
              >
                Efficient Frontier
              </button>
              <button
                className={`list-group-item list-group-item-action btn btn-outline-success ${
                  selectedOption === "Chart 2" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Chart 2")}
              >
                Cal
              </button>
              <button
                className={`list-group-item list-group-item-action btn ${
                  selectedOption === "Chart 3" ? "active" : ""
                }`}
                onClick={() => handleOptionClick("Chart 3")}
              >
                Efficient Frontier & Cal
              </button>
            </div>
          </div>
        </div>

        {/* Nội dung bên phải */}
        <div className="col-md-8">
          {renderContent()}
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default EfficientFrontier;
