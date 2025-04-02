"use client";
import React, { useState } from "react";

const Shopping = () => {
  const [items, setItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const [budget, setBudget] = useState<number | null>(null);

  const addItem = () => {
    const name = prompt("Masukkan nama barang:");
    const price = prompt("Masukkan harga barang (contoh: 10000):");
    const quantity = prompt("Masukkan jumlah barang:");

    if (
      name &&
      price &&
      quantity &&
      !isNaN(Number(price)) &&
      !isNaN(Number(quantity))
    ) {
      setItems((prev) => [
        ...prev,
        { name, price: Number(price), quantity: Number(quantity) },
      ]);
    }
  };

  const setInitialBudget = () => {
    const inputBudget = prompt("Masukkan budget Anda (contoh: 500000):");
    if (inputBudget && !isNaN(Number(inputBudget))) {
      setBudget(Number(inputBudget));
    }
  };

  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedCurrency = (amount: number) =>
    "Rp " + amount.toLocaleString("id-ID");

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Shopping</h2>
          <p className="text-lg mt-2">
            {budget !== null
              ? `Budget: ${formattedCurrency(budget)}`
              : "Belum ada budget yang ditetapkan."}
          </p>
          <p className="text-lg mt-2">
            Total Belanja: {formattedCurrency(totalCost)}
          </p>
          {budget !== null && (
            <p
              className={`text-lg mt-2 ${
                totalCost > budget ? "text-red-500" : "text-green-500"
              }`}
            >
              {totalCost > budget
                ? "Anda telah melebihi budget!"
                : "Masih dalam budget."}
            </p>
          )}
        </div>

        {/* Budget Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Budget</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            onClick={setInitialBudget}
          >
            Tetapkan Budget
          </button>
        </div>

        {/* Items Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Daftar Belanja</h3>
          <div className="space-y-2">
            {items.length > 0 ? (
              <div>
                <div className="flex justify-between font-bold border-black border-b pb-2">
                  <span className="w-1/3 text-black">Nama Barang</span>
                  <span className="w-1/3 text-center text-black">
                    Kuantitas x Harga
                  </span>
                  <span className="w-1/3 text-right text-black">Total</span>
                </div>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-black items-center border-b py-2"
                  >
                    <span className="w-1/3 text-black">{item.name}</span>
                    <span className="w-1/3 text-center text-black">
                      {item.quantity} x {formattedCurrency(item.price)}
                    </span>
                    <span className="w-1/3 text-right text-black">
                      {formattedCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Belum ada barang yang ditambahkan.
              </p>
            )}
          </div>
          <button
            className={`px-4 py-2 rounded-lg mt-4 transition-all ${
              budget === null
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={addItem}
            disabled={budget === null}
          >
            Tambah Barang
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">
            Tips Belanja dan Manajemen Keuangan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Buat daftar belanja sebelum pergi ke toko untuk menghindari
              pembelian impulsif.
            </li>
            <li>
              Bandingkan harga barang di beberapa tempat untuk mendapatkan
              penawaran terbaik.
            </li>
            <li>Prioritaskan kebutuhan daripada keinginan saat berbelanja.</li>
            <li>
              Selalu sisihkan sebagian pendapatan untuk tabungan atau dana
              darurat.
            </li>
            <li>
              Gunakan aplikasi atau catatan untuk melacak pengeluaran Anda
              secara rutin.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
