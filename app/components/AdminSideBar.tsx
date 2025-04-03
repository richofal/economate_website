"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaChartBar,
  FaCog,
  FaClipboardList,
  FaHome,
  FaBell,
  FaDownload,
} from "react-icons/fa"; // Import lebih banyak ikon

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#089BFF] text-white h-screen p-4">
      <h2 className="text-2xl font-extrabold mb-8">Admin Dashboard</h2>
      <nav>
        <ul>
          {/* Dashboard */}
          <li className="mb-4 flex items-center">
            <FaHome className="mr-2" />
            <Link
              href="/admin-dashboard"
              className={`${
                pathname === "/admin-dashboard"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Dashboard Statistik
            </Link>
          </li>

          {/* Data Pengguna */}
          <li className="mb-4 flex items-center">
            <FaUser className="mr-2" />
            <Link
              href="/admin"
              className={`${
                pathname === "/admin" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Data Pengguna
            </Link>
          </li>

          {/* Analisis Pengguna */}
          <li className="mb-4 flex items-center">
            <FaChartBar className="mr-2" />
            <Link
              href="/admin-analisis"
              className={`${
                pathname === "/admin-analisis"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Analisis Pengguna
            </Link>
          </li>

          {/* Log Aktivitas */}
          <li className="mb-4 flex items-center">
            <FaClipboardList className="mr-2" />
            <Link
              href="/admin-activity-log"
              className={`${
                pathname === "/admin-activity-log"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Log Aktivitas
            </Link>
          </li>

          {/* Manajemen Role */}
          <li className="mb-4 flex items-center">
            <FaCog className="mr-2" />
            <Link
              href="/admin-role-management"
              className={`${
                pathname === "/admin-role-management"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Manajemen Role
            </Link>
          </li>

          {/* Notifikasi */}
          <li className="mb-4 flex items-center">
            <FaBell className="mr-2" />
            <Link
              href="/admin-notifikasi"
              className={`${
                pathname === "/admin-notifikasi"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Notifikasi
            </Link>
          </li>

          {/* Export Data */}
          <li className="mb-4 flex items-center">
            <FaDownload className="mr-2" />
            <Link
              href="/admin-export"
              className={`${
                pathname === "/admin-export" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition`}
            >
              Export Data
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-1 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
