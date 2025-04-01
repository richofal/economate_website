import Image from "next/image";

const FinancialServices = () => {
  return (
    <div className="bg-[#F2F9FF] flex items-center justify-center">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 md:pt-25">
        <div className="text-center">
          <h1 className="text-2xl mt-10 sm:mt-25 md:mt-10 sm:text-3xl md:text-4xl px-14 text-center font-bold font-semibold text-gray-800 mb-10">
            Cari Layanan Yang Kamu Inginkan
          </h1>
          <div className="grid grid-cols-1 px-15 md:px-10 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/total.png"
                  alt="Icon of total wealth"
                  width={35}
                  height={35}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Total Kekayaan
              </h2>
              <p className="text-gray-600">
                Lihat total kekayaan dari berbagai akun dengan mudah
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/pencatatan.png"
                  alt="Icon of financial recording"
                  width={35}
                  height={35}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Pencatatan keuangan
              </h2>
              <p className="text-gray-600">
                Kelola pemasukan dan pengeluaran dengan praktis
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/analisis.png"
                  alt="Icon of financial analysis"
                  width={35}
                  height={35}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Analisis Keuangan
              </h2>
              <p className="text-gray-600">
                Visualisasikan pengeluaran dan pemasukan bulanan
              </p>
            </div>
          </div>
          <div className="grid px-15 md:px-10 grid-cols-1 md:grid-cols-2 gap-6 mt-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/split.png"
                  alt="Icon of bill splitting"
                  width={35}
                  height={35}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Split Bill & Hutang
              </h2>
              <p className="text-gray-600">
                Bagi tagihan dengan teman tanpa ribet. Catat dan pantau hutang
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/modal.png"
                  alt="Icon of investment"
                  width={35}
                  height={35}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Manajemen Modal
              </h2>
              <p className="text-gray-600">
                Visualisasikan pengeluaran dan pemasukan bulanan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
