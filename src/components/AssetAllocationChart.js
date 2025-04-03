import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title, // Nếu dùng labels dạng category
} from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(
  LineController,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title // Nếu cần trục x là category
);
const AssetAllocationChart = () => {
  // Chart data
  const chartData = {
    labels: ["The risk-free asset", "The risky portfolio"],
    datasets: [
      {
        data: [37, 63], // Percentages for each segment
        backgroundColor: ["#1E3A8A", "#F97316"], // Blue and Orange
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Place the legend at the bottom
        labels: {
          usePointStyle: true, // Use a square or circle for the legend items
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Asset Allocation Chart",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        datalabels: {
          // Configure the datalabels plugin to show both percentage and extra data
          color: "#fff", // White text for contrast
          formatter: (value, context) => {
            const extraValue = context.dataset.extraData[context.dataIndex]; // Access the extra data
            return `${value}%\n$${extraValue}M`; // Display percentage and extra data (e.g., 48%\n$480M)
          },
          font: {
            size: 14, // Slightly smaller font to fit both values
            weight: "bold", // Bold text to match the image
          },
          anchor: "center", // Center the label on the segment
          align: "center", // Align the text in the center of the segment
          textAlign: "center", // Ensure text is centered
        },
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering
      },
      datalabels: {
        color: "#fff", // White text for the labels
        formatter: (value) => `${value}%`, // Display the percentage
        font: {
          weight: "bold",
          size: 18, // Font size for the labels
        },
      },
    },
    maintainAspectRatio: false, // Allow the chart to be resized
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        margin: "0 auto",
        backgroundColor: "#f0f0f0", // Light gray background to match the image
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for
      }}
    >
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};
export default AssetAllocationChart;
