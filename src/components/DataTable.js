import React, { useState } from "react";
import Data from "../assets/data/DataMontly.json";
import "../assets/css/ChooseOptions.css";

const DataTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredData, setFilteredData] = useState(Data);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    // Lọc dữ liệu theo năm
    if (year) {
      const filtered = Data.filter(
        (row) => new Date(row.time).getFullYear() === parseInt(year)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(Data); // Nếu không chọn năm, hiển thị toàn bộ dữ liệu
    }
  };

  // Tạo danh sách năm từ dữ liệu
  const years = [
    ...new Set(Data.map((row) => new Date(row.time).getFullYear())),
  ];

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar cho các lựa chọn */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>Choose Option</h4>
            </div>
            <div className="card-body">
              <label htmlFor="year-select" className="form-label">
                Select Year
              </label>
              <select
                id="year-select"
                className="form-select"
                value={selectedYear || ""}
                onChange={handleYearChange}
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Nội dung bảng dữ liệu */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>DATA MONTHLY</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                  {/* Tiêu đề bảng */}
                  <thead className="table-success">
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
                    {filteredData.map((row, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
