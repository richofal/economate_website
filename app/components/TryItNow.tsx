import React from "react";

const TryItNow = () => {
  return (
    <div className="bg-[#F2F9FF] w-full p-19 flex items-center justify-center">
      <div className="bg-[#089BFF] text-white rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
        <div className="text-sm md:text-base font-semibold mb-2">
          TRY IT NOW
        </div>
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          Siap meningkatkan level manajemen keuangan mu?
        </h1>
        <p className="text-sm md:text-base mb-6">
          Membantu semua orang untuk mencatat dan memantau kondisi keuangan
          pribadi dengan mudah, cepat, dan efisien.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default TryItNow;
