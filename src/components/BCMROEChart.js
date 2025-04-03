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

const BCMROEChart = () => {
  // Data for the chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis labels (years)
    datasets: [
      // Bar dataset for ROE (%) - KSV
      {
        type: "bar",
        label: "ROE(%) - BCM",
        data: [12.06, 8.18, 9.6, 12.95, 10.54], // Approximate values from the chart
        backgroundColor: "rgba(255, 99, 71, 0.8)", // Orange color
        yAxisID: "y", // Left Y-axis
      },
      // Bar dataset for ROE (%) - Raw Materials
      {
        type: "bar",
        label: "ROE(%) - Industry",
        data: [20.6, 14.3, 12.4, 10.7, 10.6], // Approximate values from the chart
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color
        yAxisID: "y", // Left Y-axis
      },
      // Line dataset for ROA (%) - KSV
      {
        type: "line",
        label: "ROA(%) - BCM",
        data: [4.32, 2.88, 3.47, 4.76, 3.75], // Approximate values from the chart
        borderColor: "rgba(0, 0, 139, 1)", // Dark blue line
        fill: false,
        yAxisID: "y1", // Right Y-axis
      },
      // Line dataset for ROA (%) - Raw Materials
      {
        type: "line",
        label: "ROA(%) - Industry",
        data: [6, 5.8, 4.8, 4.2, 3.7], // Approximate values from the chart
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
        max: 7,
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
