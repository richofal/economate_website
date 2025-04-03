"use client";

import React from "react";
import { FaUsers, FaUserCheck, FaUserShield, FaUserTie } from "react-icons/fa";

const DashboardStats = () => {
  const stats = [
    { key: "Total Users", value: 1500, icon: <FaUsers /> },
    { key: "Active Users", value: 1200, icon: <FaUserCheck /> },
    { key: "Moderators", value: 50, icon: <FaUserShield /> },
    { key: "Admins", value: 10, icon: <FaUserTie /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{stat.key}</h3>
            <div className="text-3xl">{stat.icon}</div>
          </div>
          <p className="text-4xl font-extrabold mt-4">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
