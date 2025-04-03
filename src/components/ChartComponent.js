import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title, // Nếu dùng labels dạng category
} from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(
  LineController,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title // Nếu cần trục x là category
);

const PortfolioChart = () => {
  // Data for the pie chart
  const data = {
    labels: ["FPT", "KSV", "LPB"],
    datasets: [
      {
        label: "Portfolio Weight",
        data: [48, 16, 36], // Percentages from the chart
        backgroundColor: [
          "#1E90FF", // Blue for FPT
          "#FF8C00", // Orange for KSV
          "#228B22", // Green for LPB
        ],
        borderColor: ["#1E90FF", "#FF8C00", "#228B22"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right", // Position the legend on the right
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Portfolio Weight Chart",
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
    },
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
      <Pie data={data} options={options} />
    </div>
  );
};
export default PortfolioChart;
