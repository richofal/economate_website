"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TryItNow: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); // State untuk efek loading

  const startLoading = () => {
    setIsLoading(true); // Memulai efek loading
    setTimeout(() => setIsLoading(false), 2500); // Simulasi waktu loading selesai
  };

  return (
    <>
      <div className="bg-[#F2F9FF] w-full py-20 px-18 flex items-center justify-center">
        <div className="bg-[#089BFF] text-white rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
          <div className="text-sm sm:text-[15px] md:text-[18px] mb-2">
            Try it now!
          </div>
          <h1 className="text-xl sm:text-[23px] md:text-[26px] font-bold mb-4">
            Siap tingkatkan manajemen keuanganmu?
          </h1>
          <p className="text-sm sm:text-[15px] md:text-[18px] mb-6">
            EconoMate siap membantu untuk mencatat dan memantau kondisi keuangan
            pribadi dengan mudah dan efisien.
          </p>
          <Link
            href="/sign-up"
            onClick={startLoading} // Memicu efek loading saat diklik
            className="text-[#089bff] bg-white text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] font-bold py-2 px-3 sm:px-4 md:px-5 lg:px-6 rounded hover:bg-[#007acc] hover:text-white transition duration-300"
          >
            Klik di sini
          </Link>
        </div>
      </div>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#089BFF] bg-opacity-80 z-50">
          <div className="flex flex-col items-center space-y-4">
            <Image
              alt="Logo EconoMate"
              src="/logo.png"
              width={window.innerWidth >= 1024 ? 250 : 200}
              height={window.innerWidth >= 1024 ? 250 : 200}
              className=""
            />
            <div className="spinner border-t-4 border-white rounded-full w-6 h-6 md:w-12 md:h-12 animate-spin py-3"></div>
            <p className="text-white text-sm lg:text-lg font-semibold">
              Loading...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TryItNow;
