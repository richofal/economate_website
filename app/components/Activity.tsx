import React from "react";

const Activity = () => {
  const transactions = [
    {
      type: "Pemasukan",
      title: "Saku bulanan",
      amount: "+470.000",
      date: "27 April 2025",
      icon: "fas fa-wallet",
      color: "text-green-500",
    },
    {
      type: "Pengeluaran",
      title: "Ramen",
      amount: "-35.000",
      date: "27 April 2025",
      icon: "fas fa-utensils",
      color: "text-red-500",
    },
    {
      type: "Pemasukan",
      title: "Bonus kerja",
      amount: "+1.000.000",
      date: "25 April 2025",
      icon: "fas fa-briefcase",
      color: "text-green-500",
    },
    {
      type: "Pengeluaran",
      title: "Belanja bulanan",
      amount: "-250.000",
      date: "24 April 2025",
      icon: "fas fa-shopping-cart",
      color: "text-red-500",
    },
    {
      type: "Pemasukan",
      title: "Hadiah",
      amount: "+300.000",
      date: "23 April 2025",
      icon: "fas fa-gift",
      color: "text-green-500",
    },
    {
      type: "Pengeluaran",
      title: "Transportasi",
      amount: "-50.000",
      date: "22 April 2025",
      icon: "fas fa-bus",
      color: "text-red-500",
    },
    {
      type: "Pemasukan",
      title: "Investasi",
      amount: "+2.000.000",
      date: "21 April 2025",
      icon: "fas fa-chart-line",
      color: "text-green-500",
    },
    {
      type: "Pengeluaran",
      title: "Makan malam",
      amount: "-120.000",
      date: "20 April 2025",
      icon: "fas fa-utensils",
      color: "text-red-500",
    },
    // Tambahkan lebih banyak data sesuai kebutuhan
  ];

  return (
    <div className="bg-blue-50 p-6 h-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#089BFF] text-white p-4 rounded-lg hover:bg-[#0077CC] hover:shadow-lg transition-all duration-300">
          <div className="text-sm">Saldo</div>
          <div className="text-2xl font-bold">Rp 20.274.714</div>
        </div>
        <div className="flex items-center">
          <button className="bg-[#089BFF] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#0077CC] transition-colors duration-200">
            <i className="fas fa-plus mr-2"></i> Tambah Transaksi
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Semua Transaksi */}
        <div>
          <h2 className="text-2xl text-black font-bold mb-4">
            Semua Transaksi
          </h2>
          <div className="flex space-x-2 mb-4">
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>Alat tulis kantor</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>September</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>2025</option>
            </select>
          </div>
          <div className="bg-white outline outline-1 outline-black rounded-lg shadow p-4 space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`flex justify-between items-center text-black border-b py-4 ${
                  index === transactions.length - 1 ? "" : "border-b"
                }`}
              >
                <div className="flex items-center">
                  <i
                    className={`${transaction.icon} ${transaction.color} text-2xl mr-2`}
                  ></i>
                  <div>
                    <div>{transaction.title}</div>
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <div className={transaction.color}>{transaction.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pemasukan */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Pemasukan</h2>
          <div className="flex space-x-2 mb-4">
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>Alat tulis kantor</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>September</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>2025</option>
            </select>
          </div>
          <div className="bg-white outline outline-1 outline-black rounded-lg shadow p-4 space-y-4">
            {transactions
              .filter((transaction) => transaction.type === "Pemasukan")
              .map((transaction, index) => (
                <div
                  key={index}
                  className="flex justify-between text-black items-center border-b py-4"
                >
                  <div className="flex items-center">
                    <i
                      className={`${transaction.icon} ${transaction.color} text-2xl mr-2`}
                    ></i>
                    <div>
                      <div>{transaction.title}</div>
                      <div className="text-sm text-gray-500">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className={transaction.color}>{transaction.amount}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Pengeluaran */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Pengeluaran</h2>
          <div className="flex space-x-2 mb-4">
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>Alat tulis kantor</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>September</option>
            </select>
            <select className="border border-black text-black rounded-lg px-2 py-1">
              <option>2025</option>
            </select>
          </div>
          <div className="bg-white outline outline-1 outline-black rounded-lg shadow p-4 space-y-4">
            {transactions
              .filter((transaction) => transaction.type === "Pengeluaran")
              .map((transaction, index) => (
                <div
                  key={index}
                  className="flex justify-between text-black items-center border-b py-4"
                >
                  <div className="flex items-center">
                    <i
                      className={`${transaction.icon} ${transaction.color} text-2xl mr-2`}
                    ></i>
                    <div>
                      <div>{transaction.title}</div>
                      <div className="text-sm text-gray-500">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className={transaction.color}>{transaction.amount}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
