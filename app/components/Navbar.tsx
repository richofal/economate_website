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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between p-4 bg-[#089BFF] w-full fixed top-0 left-0 z-50 ${plusjakartasans.className}`}
      >
        <Link href="/" className="flex items-center lg:ml-5">
          <Image
            alt="Logo of EconoMate"
            className="w-45 pl-5"
            src="/logo.png"
            width={200}
            height={50}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 mr-5">
          <Link
            className="text-white text-lg font-semibold hover:text-blue-300 transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-lg font-semibold hover:text-blue-300 transition duration-300"
            href="#"
          >
            Dashboard
          </Link>
          <Link
            className="text-white text-lg font-semibold hover:text-blue-300 transition duration-300"
            href="#"
          >
            Aplikasi
          </Link>
          <Link
            className="text-white text-lg font-semibold hover:text-blue-300 transition duration-300"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="bg-white text-[#089BFF] text-lg font-semibold py-2 px-4 rounded hover:bg-blue-300 hover:text-white transition duration-300"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-11"
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
          className={`md:hidden w-full bg-[#089BFF] absolute top-16 left-0 p-4 transition-transform ${
            isMenuOpen
              ? "transform translate-y-0"
              : "transform translate-y-[-200%]"
          }`}
        >
          <div className="flex flex-col items-start space-y-4 w-full">
            <Link
              className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
              href="#"
            >
              Dashboard
            </Link>
            <Link
              className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
              href="#"
            >
              Aplikasi
            </Link>
            <Link
              className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
              href="/sign-in"
            >
              Sign in
            </Link>
            <Link
              className="bg-white text-blue-500 text-lg font-semibold py-2 px-4 rounded w-full text-center"
              href="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
