import React from "react";
import DataReturn from "../assets/data/DataReturn.json";
import DataRiMean from "../assets/data/DataRIMean.json";
import DataRiMean2 from "../assets/data/DataRIMean2.json";
import MeanVarSD from "../assets/data/MeanVarSD.json";
import Cov from "../assets/data/Cov.json";
import Cor from "../assets/data/Cor.json";
import "../assets/css/Characteristics.css";

const Characteristics = () => {
  return (
    <div>
      <h2>Characteristics</h2>
      <div className="container justify-center mx-auto">
        <table className="table table-striped table-hover table-bordered">
          {/* Tiêu đề bảng */}
          <thead className="table-success">
            <th class="bg-success text-white" colSpan={5}>
              Return
            </th>
            <tr>
              <th>BCM</th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>VGC</th>
            </tr>
          </thead>
          {/* Nội dung bảng */}
          <tbody>
            {DataReturn.map((row, index) => (
              <tr key={index}>
                <td>{row.BCM}</td>
                <td>{row.FPT}</td>
                <td>{row.KSV}</td>
                <td>{row.LPB}</td>
                <td>{row.VGC}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped table-hover table-bordered">
          {/* Tiêu đề bảng */}
          <thead className="table-success">
            <th class="bg-success text-white" colSpan={5}>
              (Ri-mean)
            </th>
            <tr>
              <th>BCM</th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>VGC</th>
            </tr>
          </thead>
          {/* Nội dung bảng */}
          <tbody>
            {DataRiMean.map((row, index) => (
              <tr key={index}>
                <td>{row.BCM}</td>
                <td>{row.FPT}</td>
                <td>{row.KSV}</td>
                <td>{row.LPB}</td>
                <td>{row.VGC}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped table-hover table-bordered">
          {/* Tiêu đề bảng */}
          <thead className="table-success">
            <tr>
              <th class="bg-success text-white" colSpan={5}>
                (Ri-mean)^2
              </th>
            </tr>
            <tr>
              <th>BCM</th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>VGC</th>
            </tr>
          </thead>
          {/* Nội dung bảng */}
          <tbody>
            {DataRiMean2.map((row, index) => (
              <tr key={index}>
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

      <div>
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-success">
            <tr className="bg-success text-white">
              {Object.keys(MeanVarSD[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MeanVarSD.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped table-hover table-bordered">
          {/* Tiêu đề bảng */}
          <thead className="table-success">
            <tr class="bg-success text-white">
              <th>Cov</th>
              <th>BCM</th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>VGC</th>
            </tr>
          </thead>
          {/* Nội dung bảng */}
          <tbody>
            {Cov.map((row, index) => (
              <tr key={index}>
                <td>{row.Cov}</td>
                <td>{row.BCM}</td>
                <td>{row.FPT}</td>
                <td>{row.KSV}</td>
                <td>{row.LPB}</td>
                <td>{row.VGC}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped table-hover table-bordered">
          {/* Tiêu đề bảng */}
          <thead className="table-success">
            <tr class="bg-success text-white">
              <th>Cor.</th>
              <th>BCM</th>
              <th>FPT</th>
              <th>KSV</th>
              <th>LPB</th>
              <th>VGC</th>
            </tr>
          </thead>
          {/* Nội dung bảng */}
          <tbody>
            {Cor.map((row, index) => (
              <tr key={index}>
                <td>{row.Cor}</td>
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
  );
};

export default Characteristics;
