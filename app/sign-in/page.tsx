"use client";

import React from "react";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="bg-[#F2F9FF] flex items-center justify-center h-screen w-screen">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl">
        {/* EconoMate Logo */}
        <div className="bg-[#089BFF] text-white p-8 rounded-l-lg flex flex-col items-center justify-center w-1/2">
          <div className="text-center">
            <p className="mb-4">
              Aplikasi yang siap jadi
              <span className="font-bold"> teman </span>
              dalam mengelola keuangan pribadi
            </p>
            <Image
              alt="EconoMate logo"
              className="mb-4 mx-auto mt-10"
              src="/logo-2.png"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Sign In Form */}
        <div className="p-8 w-3/4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#089BFF] mb-6 text-center">
            Masuk ke EconoMate
          </h2>
          <form>
            <div className="mb-4 flex items-center">
              <div className="bg-white text-white rounded-full p-2 mr-2 flex items-center justify-center shadow-lg">
                <Image
                  alt="Profile icon"
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
            <div className="mb-6 flex items-center">
              <div className="bg-white text-white rounded-full p-2 mr-2 flex items-center justify-center shadow-lg">
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
            <button
              className="w-full bg-[#089BFF] text-white py-2 rounded-full hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Sign in
            </button>
          </form>

          {/* Or Sign In with */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Atau sign in dengan</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Media Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition duration-300 transform hover:scale-110">
              <Image
                alt="Google logo"
                height={30}
                src="/logo-google.png"
                width={30}
              />
            </button>
            <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition duration-300 transform hover:scale-110">
              <Image
                alt="Facebook logo"
                height={30}
                src="/logo-facebook.png"
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
