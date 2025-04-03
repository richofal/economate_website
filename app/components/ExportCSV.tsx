"use client";

import React from "react";
import { FaFileCsv } from "react-icons/fa"; // Import ikon dari react-icons
import { Tooltip } from "react-tooltip"; // Tooltip untuk ikon (gunakan library seperti react-tooltip)

const ExportCSV = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
    { id: 3, name: "Alice Johnson", email: "alice.j@example.com", age: 35 },
  ];

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Nama,Email,Usia"]
        .concat(
          users.map(
            (user) => `${user.id},${user.name},${user.email},${user.age}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data_pengguna.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <button
        onClick={exportToCSV}
        className="flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transition transform hover:scale-105 focus:ring-4 focus:ring-green-300 focus:outline-none"
        title="Download data pengguna dalam format CSV"
      >
        <FaFileCsv
          className="mr-2 text-xl animate-bounce"
          data-tooltip-id="csv-tooltip"
        />{" "}
        {/* Ikon CSV dengan animasi */}
        Export Data ke CSV
      </button>
      <p className="mt-2 text-sm text-gray-500">
        Klik tombol untuk mengunduh data pengguna dalam format CSV.
      </p>
      <Tooltip id="csv-tooltip" place="top">
        Klik untuk mengunduh file CSV
      </Tooltip>
    </div>
  );
};

export default ExportCSV;
