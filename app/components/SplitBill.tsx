"use client";

import React, { useState } from "react";

const SplitBill = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [expenses, setExpenses] = useState<{ name: string; amount: number }[]>(
    []
  );
  const [contributions, setContributions] = useState<Record<string, number>>(
    {}
  );

  const addParticipant = () => {
    const name = prompt("Masukkan nama peserta:");
    if (name && !participants.includes(name)) {
      setParticipants((prev) => [...prev, name]);
      setContributions((prev) => ({ ...prev, [name]: 0 }));
    }
  };

  const addExpense = () => {
    const name = prompt("Masukkan nama pengeluaran:");
    const amount = prompt("Masukkan jumlah pengeluaran (contoh: 100000):");
    if (name && amount && !isNaN(Number(amount))) {
      const numericAmount = Number(amount);
      setExpenses((prev) => [...prev, { name, amount: numericAmount }]);
    }
  };

  const recordContribution = () => {
    participants.forEach((participant) => {
      const amount = prompt(
        `Berapa uang yang dikeluarkan oleh ${participant}?`
      );
      if (amount && !isNaN(Number(amount))) {
        setContributions((prev) => ({
          ...prev,
          [participant]: Number(amount),
        }));
      }
    });
  };

  const calculateDebts = () => {
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    const perPerson = totalExpenses / participants.length;

    const balances: Record<string, number> = { ...contributions };

    participants.forEach((participant) => {
      balances[participant] -= perPerson;
    });

    const debts: { from: string; to: string; amount: number }[] = [];
    const creditors = Object.entries(balances)
      .filter(([, balance]) => balance > 0)
      .map(([name, balance]) => ({ name, balance }));
    const debtors = Object.entries(balances)
      .filter(([, balance]) => balance < 0)
      .map(([name, balance]) => ({ name, balance: -balance }));

    while (creditors.length > 0 && debtors.length > 0) {
      const creditor = creditors[0];
      const debtor = debtors[0];
      const amount = Math.min(creditor.balance, debtor.balance);

      debts.push({ from: debtor.name, to: creditor.name, amount });

      creditor.balance -= amount;
      debtor.balance -= amount;

      if (creditor.balance === 0) creditors.shift();
      if (debtor.balance === 0) debtors.shift();
    }

    return debts;
  };

  const formattedCurrency = (amount: number) =>
    "Rp " + amount.toLocaleString("id-ID");

  const debts = calculateDebts();

  return (
    <div className="bg-blue-50 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#089BFF] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Split Bill</h2>
        </div>

        {/* Participants Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Peserta</h3>
          <div className="space-y-2">
            {participants.length > 0 ? (
              participants.map((participant, index) => (
                <div
                  key={index}
                  className="flex justify-between text-black items-center border-b py-2"
                >
                  <span>{participant}</span>
                  <span>
                    Kontribusi: {formattedCurrency(contributions[participant])}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Belum ada peserta.</p>
            )}
          </div>
          <button
            className="bg-[#089BFF] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            onClick={addParticipant}
          >
            Tambah Peserta
          </button>
        </div>

        {/* Expenses Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Pengeluaran</h3>
          <div className="space-y-2">
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <div
                  key={index}
                  className="flex text-black justify-between items-center border-b py-2"
                >
                  <span>{expense.name}</span>
                  <span>{formattedCurrency(expense.amount)}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Belum ada pengeluaran.</p>
            )}
          </div>
          <button
            className="bg-[#089BFF] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            onClick={addExpense}
          >
            Tambah Pengeluaran
          </button>
        </div>

        {/* Contributions Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Kontribusi</h3>
          <button
            className="bg-[#089BFF] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            onClick={recordContribution}
          >
            Catat Kontribusi
          </button>
        </div>

        {/* Debts Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Hutang</h3>
          <div className="space-y-2">
            {debts.length > 0 ? (
              debts.map((debt, index) => (
                <div
                  key={index}
                  className="flex justify-between text-black items-center border-b py-2"
                >
                  <span>
                    {debt.from} berhutang kepada {debt.to}
                  </span>
                  <span>{formattedCurrency(debt.amount)}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Tidak ada hutang.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBill;
