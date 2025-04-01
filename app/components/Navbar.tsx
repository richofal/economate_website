"use client";
import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const plusjakartasans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State untuk efek loading

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between p-4 bg-[#089BFF] w-full fixed top-0 left-0 z-50 ${plusjakartasans.className}`}
      >
        <Link
          href="/"
          className="flex items-center lg:ml-5"
          onClick={() => {
            if (isMenuOpen) toggleMenu();
            startLoading();
          }}
        >
          <Image
            alt="Logo of EconoMate"
            className="pl-5 transition-all duration-300 w-45"
            src="/logo.png"
            width={200}
            height={50}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-5 mr-5">
          <Link
            href="/"
            className="text-white text-[18px] font-semibold hover:text-blue-300 transition duration-300"
            onClick={() => {
              toggleMenu();
              startLoading();
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white text-[18px] font-semibold hover:text-blue-300 transition duration-300"
            onClick={startLoading}
          >
            Aplikasi
          </Link>
          <Link
            href="/sign-up"
            className="bg-white text-[#089BFF] text-[18px] font-semibold py-2 px-4 rounded hover:bg-blue-300 hover:text-white transition duration-300"
            onClick={startLoading}
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className="bg-white text-[#089BFF] text-[18px] font-semibold py-2 px-4 rounded hover:bg-blue-300 hover:text-white transition duration-300"
            onClick={startLoading}
          >
            Sign In
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transition-all duration-300 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden w-full bg-[#089BFF] fixed inset-0 top-16 left-0 p-4 transition-transform ${
            isMenuOpen
              ? "transform translate-y-0"
              : "transform translate-y-[-200%]"
          }`}
        >
          <div className="flex flex-col items-start space-y-4 w-full px-5 pb-5">
            <Link
              href="/"
              className="text-white text-md w-full border-b border-white pb-2 hover:border-blue-500"
              onClick={() => {
                toggleMenu();
                startLoading();
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white text-md w-full border-b border-white pb-2 hover:border-blue-500"
              onClick={() => {
                toggleMenu();
                startLoading();
              }}
            >
              Aplikasi
            </Link>
            <Link
              href="/sign-up"
              className="bg-white text-blue-500 text-md font-semibold py-2 px-4 rounded w-full text-center"
              onClick={() => {
                toggleMenu();
                startLoading();
              }}
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="bg-white text-blue-500 text-md font-semibold py-2 px-4 rounded w-full text-center"
              onClick={() => {
                toggleMenu();
                startLoading();
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
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
      </nav>
    </>
  );
};

export default Navbar;
