import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const formatNumber = (number: number) => {
  return number.toLocaleString("id-ID");
};

const Analisis = () => {
  const kategoriData = {
    labels: ["Pemasukan", "Pengeluaran"],
    datasets: [
      {
        data: [53, 47],
        backgroundColor: ["#4299E1", "#F56565"],
      },
    ],
  };

  const pemasukanData = {
    labels: ["Uang saku", "Investasi", "Lainnya"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#63B3ED", "#68D391", "#ECC94B"],
      },
    ],
  };

  const pengeluaranData = {
    labels: ["Transportasi", "Makanan", "Lainnya"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#F6AD55", "#FC8181", "#90CDF4"],
      },
    ],
  };

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Saldo Section */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Saldo</h2>
          <p className="text-4xl font-bold mt-2">Rp {formatNumber(20274714)}</p>
        </div>

        {/* Kategori Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
          <div className="w-28 h-28">
            <Pie data={kategoriData} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Kategori</h3>
            <div className="flex items-center space-x-3 mt-2">
              <i className="fas fa-arrow-up text-blue-500"></i>
              <span className="text-black">Pemasukan 53%</span>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <i className="fas fa-arrow-down text-red-500"></i>
              <span className="text-black">Pengeluaran 47%</span>
            </div>
          </div>
        </div>

        {/* Pemasukan and Pengeluaran Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pemasukan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-blue-500 font-semibold">Pemasukan</h3>
            <p className="text-4xl font-bold text-blue-500 mt-2">
              Rp {formatNumber(14700000)}
            </p>
            <div className="w-28 h-28 my-4">
              <Pie data={pemasukanData} />
            </div>
            <h4 className="text-lg font-bold text-black">Kategori</h4>
            {["Uang saku 45%", "Investasi 35%", "Lainnya 20%"].map(
              (item, index) => (
                <div key={index} className="flex items-center space-x-3 my-2">
                  <i className="fas fa-wallet text-blue-500"></i>
                  <span className="text-black">{item}</span>
                  <span className="ml-auto text-black">
                    Rp {formatNumber(680000 * (index + 1))}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Pengeluaran */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-blue-500 font-semibold">Pengeluaran</h3>
            <p className="text-4xl font-bold text-blue-500 mt-2">
              Rp {formatNumber(14700000)}
            </p>
            <div className="w-28 h-28 my-4">
              <Pie data={pengeluaranData} />
            </div>
            <h4 className="text-lg font-bold text-black">Kategori</h4>
            {["Transportasi 40%", "Makanan 30%", "Lainnya 30%"].map(
              (item, index) => (
                <div key={index} className="flex items-center space-x-3 my-2">
                  <i className="fas fa-wallet text-blue-500"></i>
                  <span className="text-black">{item}</span>
                  <span className="ml-auto text-black">
                    Rp {formatNumber(680000 * (index + 1))}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Tips Keuangan Section */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-xl font-bold text-green-700">Tips Keuangan</h3>
          <ul className="list-disc list-inside mt-4 text-green-800">
            <li>Selalu sisihkan minimal 20% dari pemasukan untuk tabungan.</li>
            <li>
              Catat semua pengeluaran untuk mengetahui pola pengeluaran Anda.
            </li>
            <li>
              Hindari pengeluaran impulsif dengan membuat anggaran bulanan.
            </li>
            <li>Investasikan sebagian uang Anda untuk masa depan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analisis;
