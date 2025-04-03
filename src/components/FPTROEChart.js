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

const BCMROEChart = () => {
  // Data for the chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis labels (years)
    datasets: [
      // Bar dataset for ROE (%) - KSV
      {
        type: "bar",
        label: "ROE(%) - FPT",
        data: [19.99, 21.67, 22.71, 23.39, 23.93], // Approximate values from the chart
        backgroundColor: "rgba(255, 99, 71, 0.8)", // Orange color
        yAxisID: "y", // Left Y-axis
      },
      // Bar dataset for ROE (%) - Raw Materials
      {
        type: "bar",
        label: "ROE(%) - Information Technology",
        data: [20.9, 22.8, 24.7, 25.9, 26.8], // Approximate values from the chart
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color
        yAxisID: "y", // Left Y-axis
      },
      // Line dataset for ROA (%) - KSV
      {
        type: "line",
        label: "ROA(%) - FPT",
        data: [9.42, 9.09, 10.08, 11.55, 11.88], // Approximate values from the chart
        borderColor: "rgba(0, 0, 139, 1)", // Dark blue line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
      // Line dataset for ROA (%) - Raw Materials
      {
        type: "line",
        label: "ROA(%) - Information Technology",
        data: [8.3, 8.1, 9.3, 10.6, 11.1], // Approximate values from the chart
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
        max: 30,
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
        max: 14,
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

export default BCMROEChart;
