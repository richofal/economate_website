"use client";

import React from "react";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="bg-blue-50 flex items-center justify-center h-screen w-screen">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl">
        {/* Left Section */}
        <div className="p-8 w-3/4">
          <h2 className="text-2xl font-bold text-[#089BFF] mb-6 text-center">
            Daftarkan Akun
          </h2>
          <form>
            {/* Username Input */}
            <div className="mb-4 flex items-center">
              <div className="bg-white text-white rounded-full p-2 mr-2 flex items-center justify-center shadow-md">
                <Image
                  alt="Username icon"
                  className="shadow-lg"
                  src="/profile.png"
                  width={24}
                  height={24}
                />
              </div>
              <label className="block text-gray-700 flex-grow">
                <input
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#089BFF] shadow-lg"
                  placeholder="Username"
                  type="text"
                />
              </label>
            </div>

            {/* Email Input */}
            <div className="mb-4 flex items-center">
              <div className="bg-white text-white rounded-full p-2 mr-2 flex items-center justify-center shadow-md">
                <Image
                  alt="Email icon"
                  className="shadow-lg"
                  src="/email-2.png"
                  width={24}
                  height={24}
                />
              </div>
              <label className="block text-gray-700 flex-grow">
                <input
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#089BFF] shadow-lg"
                  placeholder="Email"
                  type="email"
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="mb-6 flex items-center">
              <div className="bg-white text-white rounded-full p-2 mr-2 flex items-center justify-center shadow-md">
                <Image
                  alt="Password icon"
                  className="shadow-lg"
                  src="/password.png"
                  width={24}
                  height={24}
                />
              </div>
              <label className="block text-gray-700 flex-grow">
                <input
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#089BFF] shadow-lg"
                  placeholder="Password"
                  type="password"
                />
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              className="w-full bg-[#089BFF] text-white py-2 rounded-full hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Sign up
            </button>
          </form>

          {/* Or Sign Up with */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Atau sign up dengan</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Media Sign Up Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-110">
              <Image
                alt="Google logo"
                height={30}
                src="/logo-google.png"
                width={30}
              />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-110">
              <Image
                alt="Facebook logo"
                height={30}
                src="/logo-facebook.png"
                width={30}
              />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-[#089BFF] rounded-r-lg flex flex-col items-center justify-center p-8">
          <p className="text-white text-center mb-2">
            Aplikasi yang siap jadi
            <span className="font-bold"> teman </span>
            dalam mengelola keuangan pribadi
          </p>
          <Image
            alt="EconoMate logo"
            className="mb-4 mt-10 mx-auto"
            height={100}
            src="/logo-2.png"
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
