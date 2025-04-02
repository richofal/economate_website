"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dompet"); // Menyimpan menu aktif

  return (
    <div className="w-64 bg-[#089BFF] p-4 h-full">
      <Image
        alt="EconoMate Logo"
        className="mr-2 cursor-pointer"
        height={180}
        src="/logo.png"
        width={180}
        onClick={() => setActiveMenu("Dompet")} // Tambahkan onClick di sini
      />
      <nav>
        <ul>
          <li className="mb-4 mt-5">
            <a
              className={`flex items-center text-xl font-semibold text-white pointer-events-none`}
            >
              <i className=""></i> Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Dompet" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Dompet")}
            >
              <i className="fas fa-wallet mr-2"></i> Dompet
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Aktivitas" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Aktivitas")}
            >
              <i className="fas fa-list-alt mr-2"></i> Aktivitas
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center text-xl font-semibold text-white pointer-events-none`}
            >
              <i className=""></i> Fitur
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Analisis" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Analisis")}
            >
              <i className="fas fa-chart-line mr-2"></i> Analisis
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Split Bill" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Split Bill")}
            >
              <i className="fas fa-user-friends mr-2"></i> Split Bill
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Belanja" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Belanja")}
            >
              <i className="fas fa-shopping-cart mr-2"></i> Belanja
            </a>
          </li>
          <li className="mb-4">
            <a
              className={`flex items-center ${
                activeMenu === "Pengaturan" ? "text-yellow-400" : "text-white"
              }`}
              href="#"
              onClick={() => setActiveMenu("Pengaturan")}
            >
              <i className="fas fa-cog mr-2"></i> Pengaturan
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="flex items-center ml-2 relative cursor-pointer"
        onClick={() => setShowLogout(!showLogout)}
      >
        <Image
          alt="User Avatar"
          className="rounded-full mr-2"
          height={40}
          src="https://storage.googleapis.com/a1aa/image/zep9ggfz9On9ho5NmstfL0JqVyfSltYb9obDKYLVhZg.jpg"
          width={40}
        />
        <span>Richo Febrian</span>
        <div className="relative">
          <i
            className={`fas ml-2 ${
              showLogout ? "fa-chevron-down" : "fa-chevron-up"
            }`}
          ></i>
          {showLogout && (
            <div className="absolute bg-white text-black rounded shadow-lg mt-5 right-0 w-35">
              <ul>
                <li className="px-4 py-1 hover:bg-gray-200 cursor-pointer border-b text-sm">
                  Profil
                </li>
                <li
                  className="px-4 py-1 hover:bg-gray-200 cursor-pointer text-sm"
                  onClick={() => (window.location.href = "/")}
                >
                  Keluar
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
