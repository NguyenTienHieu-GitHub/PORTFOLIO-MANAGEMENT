import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
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
  BarController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const FPTEPSChart = () => {
  // Data for the chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis labels (years)
    datasets: [
      // Bar dataset for ROE (%) - KSV
      {
        type: "bar",
        label: "EPS(FPT)",
        data: [4744, 5065, 5252, 5471, 5704], // Approximate values from the chart
        backgroundColor: "rgba(34, 0, 144, 0.8)", // Orange color
        yAxisID: "y", // Left Y-axis
      },
      // Bar dataset for ROE (%) - Raw Materials
      {
        type: "bar",
        label: "EPS(Information Technology)",
        data: [2827, 2991, 3248, 4013, 4940], // Approximate values from the chart
        backgroundColor: "rgba(0, 52, 3, 0.8)", // Blue color
        yAxisID: "y", // Left Y-axis
      },
      // Line dataset for ROA (%) - KSV
      {
        type: "line",
        label: "P/E(FPT)",
        data: [12.44, 18.36, 14.64, 17.56, 26.74], // Approximate values from the chart
        borderColor: "rgb(247, 148, 0)", // Dark blue line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
      // Line dataset for ROA (%) - Raw Materials
      {
        type: "line",
        label: "P/E(Information Technology)",
        data: [16.3, 40.1, 34.8, 21.8, 24.5], // Approximate values from the chart
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
        text: "Performance - FPT",
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
        max: 6000,
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
        min: 0,
        max: 45,
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

export default FPTEPSChart;
