"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  };

  return (
    <>
      <div className="w-[100%] text-black mt-19">
        <div className="w-[100%] lg:pt-15 bg-[#F2F9FF] flex justify-center items-center">
          <div className="w-[80%] sm:w-[85%] h-[80%] lg:mt-20 xl:mt-0 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}
            <section className="h-full w-full flex flex-col justify-center text-center lg:text-left lg:w-1/2 mt-8 md:mt-10 lg:mt-0 lg:ml-20">
              <h1 className="text-[#333] text-[35px] sm:text-[43px] md:text-[46px] lg:text-[60px] xl:text-[65px] font-semibold leading-tight">
                Teman Setia Pengelola <br />
                <span className="text-[#089BFF] font-bold">Keuangan</span> Anda
              </h1>
              <h2 className="text-[#555] text-[17px] sm:text-[20px] md:text-[23px] font-normal leading-8 lg:leading-11 py-4 lg:w-[80%]">
                Website yang siap jadi teman <br className="lg:hidden" /> dalam
                mengelola keuangan pribadi
              </h2>
              <Link
                href="/sign-in"
                onClick={startLoading} // Tambahkan efek loading
                className="bg-[#089BFF] text-white text-[18px] mt-3 py-2 px-4 sm:py-2 sm:px-5 sm:text-[21px] md:text-[24px] font-medium md:py-2 md:px-6 rounded w-fit mx-auto lg:mx-0 lg:mt-5 hover:bg-[#007acc] transition duration-300"
              >
                Get Started
              </Link>
            </section>
            {/* Right Section: Image */}
            <div className="w-[80%] mt-10 flex justify-center lg:w-1/2 lg:ml-10">
              <Image
                src="/hero.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
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

export default Hero;
