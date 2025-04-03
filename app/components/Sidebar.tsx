"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    // Set active menu based on the current path
    if (pathname.includes("user-dashboard")) {
      setActiveMenu("Dompet");
    } else if (pathname.includes("user-aktivitas")) {
      setActiveMenu("Aktivitas");
    } else if (pathname.includes("analisis")) {
      setActiveMenu("Analisis");
    } else if (pathname.includes("split-bill")) {
      setActiveMenu("Split Bill");
    } else if (pathname.includes("belanja")) {
      setActiveMenu("Belanja");
    } else if (pathname.includes("pengaturan")) {
      setActiveMenu("Pengaturan");
    }
  }, [pathname]);

  return (
    <div className="w-64 bg-[#089BFF] p-4 h-full">
      <Image
        alt="EconoMate Logo"
        className="mr-2 cursor-pointer"
        height={180}
        src="/logo.png"
        width={180}
        onClick={() => setActiveMenu("Dompet")}
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
              onClick={() => router.push("/user-dashboard")}
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
              onClick={() => router.push("/user-aktivitas")}
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
              onClick={() => router.push("/analisis")}
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
              onClick={() => router.push("/split-bill")}
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
              onClick={() => router.push("/belanja")}
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
              onClick={() => router.push("/pengaturan")}
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
                <li
                  className="px-4 py-1 hover:bg-gray-200 cursor-pointer border-b text-sm"
                  onClick={() => router.push("/profil")}
                >
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
