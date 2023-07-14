import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { options } from "./utils/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  if (!data || !data.included || !data.included[0].attributes.content) {
    return null;
  }

  const content = data.included[0].attributes.content;
  const labels = content.map((item) => item.type);
  const totales = content.map((item) => item.attributes.total);
  const dataset = {
    label: "Balance eléctrico",
    data: totales,
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  };

  const chartData = {
    labels,
    datasets: [dataset],
  };
  console.log(data);
  console.log(chartData);
  return <Bar options={options} data={chartData} />;
};

export default BarChart;
