"use client";
import React, { useState } from "react";

const MainContent = () => {
  const [accounts, setAccounts] = useState([
    ["Bank Mandiri", "Rp 10.000.000"],
    ["Bank BCA", "Rp 1.100.000"],
    ["GoPay", "Rp 200.000"],
    ["ShopeePay", "Rp 7.000.000"],
    ["Cash", "Rp 400.000"],
    ["DANA", "Rp 1.337.000"],
    ["OVO", "Rp 321.000"],
    ["Jenius", "Rp 2.500.000"],
    ["PayPal", "Rp 5.000.000"],
    ["Rekening Lain", "Rp 3.000.000"],
    ["Tabungan Emas", "Rp 1.200.000"],
    ["Investasi Saham", "Rp 15.000.000"],
    ["Reksadana", "Rp 8.000.000"],
    ["Bitcoin Wallet", "Rp 12.000.000"],
    ["Ethereum Wallet", "Rp 9.000.000"],
    ["Tabungan Pendidikan", "Rp 6.000.000"],
    ["Tabungan Liburan", "Rp 4.000.000"],
    ["Tabungan Darurat", "Rp 20.000.000"],
    ["Deposito", "Rp 25.000.000"],
    ["Asuransi Jiwa", "Rp 3.500.000"],
    ["Asuransi Kesehatan", "Rp 2.800.000"],
    ["Pinjaman Teman", "Rp 1.000.000"],
    ["Pinjaman Keluarga", "Rp 500.000"],
  ]);

  // Fungsi untuk menghapus format "Rp" dan titik, lalu mengonversi ke angka
  const parseAmount = (amount: string) =>
    parseInt(amount.replace(/[Rp.]/g, ""), 10);

  // Hitung total saldo
  const totalSaldo = accounts.reduce(
    (total, [, amount]) => total + parseAmount(amount),
    0
  );

  // Format kembali total saldo ke dalam format "Rp"
  const formatCurrency = (amount: number) =>
    "Rp " + amount.toLocaleString("id-ID");

  // Fungsi untuk menambahkan akun baru
  const addAccount = () => {
    const newAccountName = prompt("Masukkan nama akun:");
    const newAccountAmount = prompt("Masukkan nominal (contoh: Rp 1.000.000):");

    if (newAccountName && newAccountAmount) {
      setAccounts((prevAccounts) => [
        ...prevAccounts,
        [newAccountName, newAccountAmount],
      ]);
    }
  };

  return (
    <div className="flex-1 p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#089BFF] text-white p-4 rounded-lg hover:bg-[#0077CC] hover:shadow-lg transition-all duration-300">
          <div className="text-sm">Saldo</div>
          <div className="text-2xl font-bold">{formatCurrency(totalSaldo)}</div>
        </div>
        <div className="flex items-center">
          <button
            className="bg-[#089BFF] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#0077CC] transition-colors duration-200"
            onClick={addAccount}
          >
            <i className="fas fa-plus mr-2"></i> Tambah Sumber Keuangan
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-black font-bold mb-5">Dompet Saya</h2>
        <div className="bg-white text-black p-4 rounded-lg shadow-lg outline outline-1 outline-black mb-auto">
          {accounts.map(([name, amount], index) => (
            <div
              key={index}
              className={`border-b py-2 flex justify-between ${
                index === accounts.length - 1 ? "" : "border-b"
              }`}
            >
              <span>{name}</span>
              <span>{amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5"></div>
    </div>
  );
};

export default MainContent;
