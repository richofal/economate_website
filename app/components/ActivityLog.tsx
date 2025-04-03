"use client";

import React, { useState } from "react";
import { FaPlus, FaClipboardList } from "react-icons/fa";

const ActivityLog = () => {
  const [logs, setLogs] = useState<string[]>([
    "Admin menambahkan pengguna 'John Doe' pada 04 April 2025, pukul 14:32.",
    "Admin menghapus pengguna 'Jane Smith' pada 03 April 2025, pukul 13:15.",
    "Admin memperbarui detail pengguna 'Alice Johnson' pada 02 April 2025, pukul 10:45.",
  ]);

  const addLog = (message: string) => {
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    setLogs((prevLogs) => [`${message} pada ${timestamp}.`, ...prevLogs]);
  };

  const handleAddLog = () => {
    addLog("Admin melakukan tindakan baru");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <FaClipboardList /> Log Aktivitas
        </h3>
        <button
          onClick={handleAddLog}
          className="flex items-center gap-2 px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition"
        >
          <FaPlus /> Tambahkan Log
        </button>
      </div>
      {logs.length > 0 ? (
        <ul className="space-y-3">
          {logs.map((log, index) => (
            <li
              key={index}
              className="bg-white text-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-101"
            >
              {log}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-200 italic">
          Belum ada aktivitas yang tercatat.
        </p>
      )}
    </div>
  );
};

export default ActivityLog;
