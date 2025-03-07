import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#089BFF] text-white py-8 w-full">
      <div className="container mx-auto md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/5 flex justify-center md:justify-start md:mb-0">
            <div className="flex flex-col">
              <Image
                alt="EconoMate Logo"
                className="md:w-60"
                height={200}
                src="/logo.png"
                width={200}
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col md:flex-row justify-center md:justify-end items-center md:items-start">
            <div className="mb-4 md:mb-0 mx-4 md:mx-8">
              <h3 className="text-xl font-bold pb-2">Social Media</h3>
              <div className="flex items-center justify-center md:justify-start mt-2 pb-2">
                <Image
                  alt="Facebook"
                  src="/fb.png"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>@economate</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Image
                  alt="Instagram"
                  src="/ig.png"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>@economate</span>
              </div>
            </div>
            <div className="mx-4 md:mx-8">
              <h3 className="text-xl font-bold pb-2">Contact Us</h3>
              <div className="flex items-center justify-center md:justify-start mt-2 pb-2">
                <Image
                  alt="Phone"
                  src="/call.png"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>+62 838-3155-2049 (Richo)</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2 pb-2">
                <Image
                  alt="Phone"
                  src="/call.png"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>+62 838-5657-1010 (Taraka)</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Image
                  alt="Email"
                  src="/email.png"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>economate@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
