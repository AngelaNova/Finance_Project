import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const piChart = ({ totalIncomes, totalExpanses }) => {
  const pieData = {
    labels: ["Expenses", "Incomes"],
    datasets: [
      {
        data: [totalExpanses, totalIncomes],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-12 col-md-8 col-lg-6">
        <h4 className="text-center">Expenses and Incomes</h4>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default piChart;
