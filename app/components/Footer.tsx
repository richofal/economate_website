"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); // State untuk efek loading

  const startLoading = () => {
    setIsLoading(true); // Memulai efek loading
    setTimeout(() => setIsLoading(false), 2500); // Simulasi waktu loading selesai
  };

  return (
    <>
      <footer className="bg-[#089BFF] text-white py-5 lg:pt-10 w-full">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <Link href="/" onClick={startLoading}>
                <Image
                  alt="EconoMate Logo"
                  className="w-50 sm:55 md:w-65 pt-5 lg:py-0"
                  height={200}
                  src="/logo.png"
                  width={200}
                />
              </Link>
            </div>
            {/* Social Media and Contact Section */}
            <div className="w-full md:w-3/5 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
              {/* Social Media */}
              <div className="mb-6 lg:mb-0 mx-4 md:mx-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold pb-2 md:text-2xl">
                  Social Media
                </h3>
                <div className="flex items-center justify-center lg:justify-start mt-2 lg:py-2">
                  <Link
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Image
                      alt="Facebook"
                      src="/fb.png"
                      width={20}
                      height={20}
                      className="mr-2 md:w-6"
                    />
                    <span className="text-sm md:text-lg">@economate</span>
                  </Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2 lg:py-2">
                  <Link
                    href="https://instagram.com/economate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Image
                      alt="Instagram"
                      src="/ig.png"
                      width={20}
                      height={20}
                      className="mr-2 md:w-6"
                    />
                    <span className="text-sm md:text-lg">@economate</span>
                  </Link>
                </div>
              </div>
              {/* Contact Us */}
              <div className="mx-4 md:mx-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold pb-2 md:text-2xl">
                  Contact Us
                </h3>
                <div className="flex items-center justify-center lg:justify-start mt-2 pb-2">
                  <Link
                    href="https://wa.me/6283831552049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Image
                      alt="Phone"
                      src="/call.png"
                      width={20}
                      height={20}
                      className="mr-2 md:w-6"
                    />
                    <span className="text-sm md:text-lg">
                      0838-3155-2049 (Richo)
                    </span>
                  </Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2 pb-2">
                  <Link
                    href="https://wa.me/6283856571010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Image
                      alt="Phone"
                      src="/call.png"
                      width={20}
                      height={20}
                      className="mr-2 md:w-6"
                    />
                    <span className="text-sm md:text-lg">
                      0838-5657-1010 (Taraka)
                    </span>
                  </Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2">
                  <Image
                    alt="Email"
                    src="/email.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm md:text-lg">
                    economate@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5 text-center text-sm pt-5 md:text-lg">
            <p>&copy; 2025 EconoMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
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

export default Footer;
