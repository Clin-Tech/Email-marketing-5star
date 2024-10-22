import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
  ChartDataset,
} from "chart.js";
import { useRef } from "react";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Enable background fill
);

const LineChartWithBackground = () => {
  const chartRef = useRef(null); // To reference the chart's canvas

  // Create your dataset with explicit typing for the line chart
  const dataset: ChartDataset<"line", number[]> = {
    label: "Email marketing metrics of your campaign",
    data: [20, 60, 140, 200, 300, 320, 380], // Data points
    borderColor: "#365F36", // Line color
    backgroundColor: (context: ScriptableContext<"line">) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;

      if (!chartArea) {
        return null;
      }

      // Create a linear gradient (from top to bottom)
      const gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );

      // Add color stops
      gradient.addColorStop(0.7, "#365F364D"); // 30%
      gradient.addColorStop(0.05, "#365F360D"); // 5%

      return gradient;
    },
    fill: true, // Enable background fill
    tension: 0.4, // Smooth the line (adjust this for more or less curve)
    pointBackgroundColor: "white",
    pointBorderColor: "#365F36",
    pointBorderWidth: 1,
    pointRadius: 3,
    pointHoverRadius: 7,
    borderWidth: 1,
  };

  const data = {
    labels: [
      "Recipients",
      "Delivered",
      "Failed",
      "Open",
      "Click",
      "Report",
      "Unsubcribed",
    ],
    datasets: [dataset],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Ensure the position is typed correctly
        labels: {
          boxWidth: 5, // Controls the size of the colored boxes (legend icons)
          boxHeight: 5, // Controls the size of the colored boxes (legend icons)
          font: {
            size: 12, // Font size of the labels
          },
        },
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          size: 10, // Set the font size for tooltip body
        },
        titleFont: {
          size: 12, // Set the font size for tooltip title
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10, // Set the font size for X-axis ticks (dataset labels)
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 80,
          font: {
            size: 10, // Set the font size for Y-axis ticks
          },
        },
      },
    },
    // elements: {
    //   point: {
    //     borderDash: [5, 5], // Dotted line effect for points
    //   },
    // },
  };

  return (
    // <div style={{ width: "510px" }}>
    <Line ref={chartRef} height={190} data={data} options={options} />
    // </div>
  );
};

export default LineChartWithBackground;
