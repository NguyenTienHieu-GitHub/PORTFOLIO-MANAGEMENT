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
import VGCEPSChart from "../components/VGCEPSChart";
import VGCROEChart from "../components/VGCROEChart";
const StockAnalysis = () => {
  const [selectedTable, setSelectedTable] = useState(Stock[0].table);

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="d-flex flex-column">
            {Stock.map((data, index) => (
              <button
                key={index}
                className={`btn btn-${
                  selectedTable === data.table ? "primary" : "secondary"
                } mb-2`}
                onClick={() => setSelectedTable(data.table)}
              >
                {data.table}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          {Stock.filter((data) => data.table === selectedTable).map(
            (data, index) => {
              const keys = Object.keys(data).filter((key) => key !== "table");
              return (
                <div key={index} className="mb-4">
                  <h2 className="text-primary mb-3">{data.table}</h2>
                  <table className="table table-bordered">
                    <tbody>
                      {keys.map((key) => (
                        <tr key={key}>
                          <th className="bg-light">{key}</th>
                          {data[key].map((value, i) => (
                            <td key={i} className="text-center">
                              {value !== null ? value : ""}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
          )}
        </div>
        <KSVROEChart />
        <KSVEPSChart />
        <BCMROEChart />
        <BCMEPSChart />
        <FPTROEChart />
        <FPTEPSChart />
        <LPBROEChart />
        <LPBEPSChart />
        <VGCROEChart />
        <VGCEPSChart />
      </div>
    </div>
  );
};

export default StockAnalysis;
