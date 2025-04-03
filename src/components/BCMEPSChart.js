import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BCMEPSChart = () => {
  // Data for the chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis labels (years)
    datasets: [
      // Bar dataset for ROE (%) - KSV
      {
        type: "bar",
        label: "EPS(BCM)",
        data: [1918, 1357, 1628, 2341, 2034], // Approximate values from the chart
        backgroundColor: "rgba(34, 0, 144, 0.8)", // Orange color
        yAxisID: "y", // Left Y-axis
      },
      // Bar dataset for ROE (%) - Raw Materials
      {
        type: "bar",
        label: "EPS(Industry)",
        data: [2707, 2531, 2993, 2761, 3131], // Approximate values from the chart
        backgroundColor: "rgba(0, 52, 3, 0.8)", // Blue color
        yAxisID: "y", // Left Y-axis
      },
      // Line dataset for ROA (%) - KSV
      {
        type: "line",
        label: "P/E(BCM)",
        data: [21.48, 47.16, 49.51, 26.87, 34.85], // Approximate values from the chart
        borderColor: "rgb(247, 148, 0)", // Dark blue line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
      // Line dataset for ROA (%) - Raw Materials
      {
        type: "line",
        label: "P/E(Industry)",
        data: [32.1, -0.3, 38.2, 63.1, 47], // Approximate values from the chart
        borderColor: "rgb(31, 177, 255)", // Green line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Performance - BCM",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
        },
        min: 0,
        max: 3500,
        ticks: {
          stepSize: 5,
        },
      },
      y1: {
        type: "linear",
        position: "right",
        title: {
          display: true,
        },
        min: -10,
        max: 70,
        ticks: {
          stepSize: 2,
        },
        grid: {
          drawOnChartArea: false, // Only show grid lines for the left Y-axis
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default BCMEPSChart;
