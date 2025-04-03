import React from "react";
import Data from "../assets/data/DataMontly.json";
import "../assets/css/ChooseOptions.css";
const DataTable = () => {
  return (
    <div className="table-responsive">
      <h2>DATA MONTHLY</h2>
      <table className="table table-striped table-hover table-bordered">
        {/* Tiêu đề bảng */}
        <thead className="table-primary">
          <th class="bg-primary text-white" colSpan={6}>
            Data Montly
          </th>
          <tr>
            <th>Time</th>
            <th>BCM</th>
            <th>FPT</th>
            <th>KSV</th>
            <th>LPB</th>
            <th>VGC</th>
          </tr>
        </thead>
        {/* Nội dung bảng */}
        <tbody>
          {Data.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.BCM}</td>
              <td>{row.FPT}</td>
              <td>{row.KSV}</td>
              <td>{row.LPB}</td>
              <td>{row.VGC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
