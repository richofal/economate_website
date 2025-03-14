import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#089BFF] text-white py-10 lg:pt-15 w-full">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <Image
                alt="EconoMate Logo"
                className="w-50 sm:55 md:w-65 pt-5 lg:py-0"
                height={200}
                src="/logo.png"
                width={200}
              />
            </div>
            {/* Social Media and Contact Section */}
            <div className="w-full md:w-3/5 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
              {/* Social Media */}
              <div className="mb-6 lg:mb-0 mx-4 md:mx-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold pb-2 sm:text-2xl">
                  Social Media
                </h3>
                <div className="flex items-center justify-center lg:justify-start mt-2 lg:py-2">
                  <Image
                    alt="Facebook"
                    src="/fb.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm sm:text-lg">@economate</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2 lg:py-2">
                  <Image
                    alt="Instagram"
                    src="/ig.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm sm:text-lg">@economate</span>
                </div>
              </div>

              {/* Contact Us */}
              <div className="mx-4 md:mx-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold pb-2 sm:text-2xl">
                  Contact Us
                </h3>
                <div className="flex items-center justify-center lg:justify-start mt-2 pb-2">
                  <Image
                    alt="Phone"
                    src="/call.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm sm:text-lg">
                    0838-3155-2049 (Richo)
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2 pb-2">
                  <Image
                    alt="Phone"
                    src="/call.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm sm:text-lg">
                    0838-5657-1010 (Taraka)
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-2">
                  <Image
                    alt="Email"
                    src="/email.png"
                    width={20}
                    height={20}
                    className="mr-2 md:w-6"
                  />
                  <span className="text-sm sm:text-lg">
                    economate@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 text-center text-sm pt-5 md:text-lg lg:pt-10">
            <p>&copy; 2025 EconoMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
