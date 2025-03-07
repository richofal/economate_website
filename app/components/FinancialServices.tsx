import Image from "next/image";

const FinancialServices = () => {
  return (
    <div className="py-25 flex items-center justify-center">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-3xl font-semibold text-gray-800 mb-8">
            Cari Layanan Yang Kamu Inginkan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/total.png"
                  alt="Icon of total wealth"
                  width={50}
                  height={50}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Total Kekayaan
              </h2>
              <p className="text-gray-600">
                Lihat total kekayaan dari berbagai akun dengan mudah.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/pencatatan.png"
                  alt="Icon of financial recording"
                  width={50}
                  height={50}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Pencatatan keuangan
              </h2>
              <p className="text-gray-600">
                Kelola pemasukan dan pengeluaran dengan praktis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/analisis.png"
                  alt="Icon of financial analysis"
                  width={50}
                  height={50}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Analisis Keuangan
              </h2>
              <p className="text-gray-600">
                Visualisasikan pengeluaran dan pemasukan bulanan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/split.png"
                  alt="Icon of bill splitting"
                  width={50}
                  height={50}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Split Bill & Hutang
              </h2>
              <p className="text-gray-600">
                Bagi tagihan dengan teman tanpa ribet. Catat dan pantau hutang.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[#C5BAFFB2]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/modal.png"
                  alt="Icon of investment"
                  width={50}
                  height={50}
                  className="text-blue-500"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Manajemen Modal
              </h2>
              <p className="text-gray-600">
                Visualisasikan pengeluaran dan pemasukan bulanan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
