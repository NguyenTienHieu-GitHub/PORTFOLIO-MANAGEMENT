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

const VGCROEChart = () => {
  // Data for the chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis labels (years)
    datasets: [
      // Bar dataset for ROE (%) - KSV
      {
        type: "bar",
        label: "ROE(%) - VGC",
        data: [8.53, 15.91, 19.82, 13.09, 11.34], // Approximate values from the chart
        backgroundColor: "rgba(255, 99, 71, 0.8)", // Orange color
        yAxisID: "y", // Left Y-axis
      },
      // Bar dataset for ROE (%) - Raw Materials
      {
        type: "bar",
        label: "ROE(%) - Construction and materials",
        data: [12.9, 14.3, 11.4, 8.6, 13.5], // Approximate values from the chart
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color
        yAxisID: "y", // Left Y-axis
      },
      // Line dataset for ROA (%) - KSV
      {
        type: "line",
        label: "ROA(%) - VGC",
        data: [2.92, 5.65, 7.69, 5.18, 4.52], // Approximate values from the chart
        borderColor: "rgba(0, 0, 139, 1)", // Dark blue line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
      // Line dataset for ROA (%) - Raw Materials
      {
        type: "line",
        label: "ROA(%) - Construction and materials",
        data: [6.1, 5.4, 4.5, 4.6, 5.3], // Approximate values from the chart
        borderColor: "rgba(34, 139, 34, 1)", // Green line
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
        text: "Performance - VGC",
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
        max: 25,
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
        max: 8,
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

export default VGCROEChart;
