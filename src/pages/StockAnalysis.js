import React, { useState } from "react";
import Stock from "../assets/data/Stock.json";
import KSVROEChart from "../components/KSVROEChart";
import KSVEPSChart from "../components/KSVEPSChart";
import BCMROEChart from "../components/BCMROEChart";
import BCMEPSChart from "../components/BCMEPSChart";
import FPTROEChart from "../components/FPTROEChart";
import FPTEPSChart from "../components/FPTEPSChart";
import LPBROEChart from "../components/LPBROEChart";
import LPBEPSChart from "../components/LPBEPSChart";
import VGCROEChart from "../components/VGCROEChart";
import VGCEPSChart from "../components/VGCEPSChart";

const DataTables = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Function to render a single table
  const renderTable = (tableData, group) => {
    const metrics = Object.keys(tableData).filter(
      (key) => key !== "table" && key !== "Year"
    );
    const years = tableData.Year;

    return (
      <div key={`${group}-${tableData.table}`} style={{ marginBottom: "40px" }}>
        <h2>{tableData.table}</h2>
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-success">
            <tr>
              <th>Year</th>
              {years.map((year) => (
                <th key={year} style={{ padding: "10px" }}>
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric}>
                <td style={{ padding: "10px", fontWeight: "bold" }}>
                  {metric}
                </td>
                {tableData[metric].map((value, index) => (
                  <td key={`${metric}-${index}`} style={{ padding: "10px" }}>
                    {value !== null
                      ? typeof value === "number"
                        ? Number.isInteger(value)
                          ? value
                          : value.toFixed(3)
                        : value
                      : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Function to render all tables for a group
  const renderGroup = (group, tables) => {
    return (
      <div key={group} style={{ marginBottom: "60px" }}>
        {tables.map((tableData) => renderTable(tableData, group))}
      </div>
    );
  };

  // Function to handle button click
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  // Function to render charts based on the selected group
  const renderCharts = (group) => {
    switch (group) {
      case "KSV":
        return (
          <div>
            <KSVROEChart />
            <KSVEPSChart />
          </div>
        );
      case "BCM":
        return (
          <div>
            <BCMROEChart />
            <BCMEPSChart />
          </div>
        );
      case "FPT":
        return (
          <div>
            <FPTROEChart />
            <FPTEPSChart />
          </div>
        );
      case "LPB":
        return (
          <div>
            <LPBROEChart />
            <LPBEPSChart />
          </div>
        );
      case "VGC":
        return (
          <div>
            <VGCROEChart />
            <VGCEPSChart />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Financial Data Tables</h1>
      <div style={{ marginBottom: "20px" }}>
        {Object.keys(Stock).map((group) => (
          <button
            key={group}
            onClick={() => handleGroupClick(group)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: selectedGroup === group ? "#009320" : "#ccc",
              color: selectedGroup === group ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {group}
          </button>
        ))}
      </div>
      {selectedGroup ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mb-4">
                  {renderGroup(selectedGroup, Stock[selectedGroup])}
                </div>
                <div className="col-md-6 mb-4">
                  {renderCharts(selectedGroup)}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Please select a group to view the tables and charts.</p>
      )}
    </div>
  );
};

const StockAnalysis = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <DataTables />
      </div>
    </div>
  );
};

export default StockAnalysis;
