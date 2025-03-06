"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[#089BFF] w-full fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <img
          alt="Logo of EconoMate"
          className="w-45 pl-5"
          src="/logo-navbar.png"
        />
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a className="text-white text-lg" href="#">
          Home
        </a>
        <a className="text-white text-lg" href="#">
          Dashboard
        </a>
        <a className="text-white text-lg" href="#">
          Aplikasi
        </a>
        <a className="text-white text-lg" href="#">
          Sign in
        </a>
        <a
          className="bg-white text-blue-500 text-lg font-semibold py-2 px-4 rounded"
          href="#"
        >
          Sign up
        </a>
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
          <a
            className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
            href="#"
          >
            Home
          </a>
          <a
            className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
            href="#"
          >
            Aplikasi
          </a>
          <a
            className="text-white text-lg w-full border-b border-white pb-2 hover:border-blue-500"
            href="#"
          >
            Sign in
          </a>
          <a
            className="bg-white text-blue-500 text-lg font-semibold py-2 px-4 rounded w-full text-center"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
