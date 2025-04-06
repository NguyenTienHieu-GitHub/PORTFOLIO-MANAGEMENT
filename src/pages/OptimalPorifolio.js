import React from "react";
import Average from "../assets/data/Average.json";
import Optimal from "../assets/data/Optimal.json";
import PortfolioChart from "../components/ChartComponent";
import AssetAllocationChart from "../components/AssetAllocationChart";

import Input from "../assets/data/Input.json";
import Output from "../assets/data/Output.json";
import SolverWithFunc from "../assets/data/SolverWithFunc.json";
import DataCapital from "../assets/data/DataCapital.json";
const OptionPortfolio = () => {
  return (
    <div className="">
      <h2>Optimal Portfolio</h2>
      <table className="table table-striped table-hover table-bordered">
        {/* Tiêu đề bảng */}
        <thead className="table-success">
          <tr class="bg-success text-white">
            <th></th>
            <th>BCM</th>
            <th>FPT</th>
            <th>KSV</th>
            <th>LPB</th>
            <th>VGC</th>
          </tr>
        </thead>
        {/* Nội dung bảng */}
        <tbody>
          {Average.map((row, index) => (
            <tr key={index}>
              <td>{row[""]}</td>
              <td>{row.BCM}</td>
              <td>{row.FPT}</td>
              <td>{row.KSV}</td>
              <td>{row.LPB}</td>
              <td>{row.VGC}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-success">
            <tr class="bg-success text-white">
              {Object.keys(Optimal[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Optimal.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-success">
              <tr>
                {Input.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Input.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Input.headers.map((header, colIndex) => (
                    <td key={colIndex}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-striped table-hover table-bordered">
            {/* Render the table headers */}
            <thead className="table-success">
              <tr>
                {Output.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            {/* Render the table rows */}
            <tbody>
              {Output.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.OUTPUT}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <table className="table table-striped table-hover table-bordered">
          {/* Render the table headers */}
          <thead className="table-success">
            <tr>
              <th>Assuming</th>
              <th></th>
            </tr>
          </thead>
          {/* Render the table rows */}
          <tbody>
            <tr>
              <td>A</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-striped table-hover table-bordered">
          <tbody>
            {DataCapital.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={row.highlight ? "highlight-row" : ""}
              >
                <td>{row["Assuming"]}</td>
                <td>{row["Value"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table className="table table-striped table-hover table-bordered">
        {/* Render the table headers */}
        <thead className="table-success">
          <tr>
            {SolverWithFunc.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {/* Render the table rows */}
        <tbody>
          {SolverWithFunc.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={row.highlight ? "highlight-row" : ""}>
              <td>{row["Solver with function"]}</td>
              <td>{row["Value"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PortfolioChart />
        <AssetAllocationChart />
      </div>
    </div>
  );
};

export default OptionPortfolio;
