"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserAnalytics = () => {
  const ageData = {
    labels: ["<20 Tahun", "20-30 Tahun", ">30 Tahun"],
    datasets: [
      {
        data: [15, 45, 40],
        backgroundColor: ["#63B3ED", "#68D391", "#ECC94B"],
        hoverBackgroundColor: ["#4299E1", "#48BB78", "#D69E2E"],
      },
    ],
  };

  const regionData = {
    labels: ["Jakarta", "Surabaya", "Bandung", "Lainnya"],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ["#F6AD55", "#FC8181", "#90CDF4", "#4299E1"],
        hoverBackgroundColor: ["#DD6B20", "#E53E3E", "#3182CE", "#2B6CB0"],
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-102 hover:shadow-2xl">
        <h3 className="text-xl text-black font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Analisis Umur
        </h3>
        <Pie data={ageData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-102 hover:shadow-2xl">
        <h3 className="text-xl text-black font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Analisis Daerah
        </h3>
        <Pie data={regionData} />
      </div>
    </div>
  );
};

export default UserAnalytics;
