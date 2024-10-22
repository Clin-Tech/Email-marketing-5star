import "./chart.scss";
// import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import barData from "./barData.json";
import pieData from "./pieData.json";
// Import the necessary Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

function Chart() {
  //for bar chart
  const data = {
    labels: barData.map((data) => data.label),
    datasets: [
      {
        label: "Subscribers growth chart",
        data: barData.map((data) => data.value),
        backgroundColor: "#79B078",
        borderColor: "#79B078",
      },
    ],
  };

  const options = {
    responsive: true,

    scales: {
      y: {
        ticks: {
          stepSize: 70,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const, // Explicitly define the position type as one of the allowed values
        labels: {
          boxWidth: 7, // Controls the size of the colored boxes (legend icons)
          boxHeight: 7, // Controls the size of the colored boxes (legend icons)
          font: {
            size: 12, // Font size of the labels
          },
        },
      },
    },
  };

  //for pie chart
  const pieChartData = {
    labels: pieData.map((data) => data.label), // Your labels for the chart
    datasets: [
      {
        // label: "My Pie Chart",
        data: pieData.map((data) => data.value), // The 4 data points
        backgroundColor: [
          "#79B078", // Color for Data 1
          "#FEC53D", // Color for Data 2
          "#4AD991", // Color for Data 3
          "#FF9871", // Color for Data 4
        ],
        borderColor: ["#79B078", "#FEC53D", "#4AD991", "#FF9871"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
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
      },
    },
  };

  return (
    <div className="chart">
      <div className="bar shadow-sm p-3 bg-body">
        <Bar
          data={data}
          options={options}
          height={230}
          //    width={160}
        />
      </div>
      <div className="pie shadow-sm p-3 bg-body">
        <Pie data={pieChartData} options={pieOptions} />
      </div>
    </div>
  );
}

export default Chart;
