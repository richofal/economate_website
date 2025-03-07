import FinancialServices from "./components/FinancialServices";
import Navbar from "./components/Navbar";
import Image from "next/image";
import TryItNow from "./components/TryItNow";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center w-screen min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <Navbar />
      <div className="hero-container w-screen text-black h-screen pt-5">
        <div className="hero-box w-screen bg-[#F2F9FF] h-full flex justify-center items-center">
          <div className="w-[89%] h-[70%] flex flex-col md:flex-row items-center justify-between">
            <section className="h-[68%] flex flex-col justify-between">
              <h1 className="text-[60px] font-semibold leading-24">
                Teman Setia Pengelola <br></br>
                <span className="text-[#089BFF] font-bold">Keuangan</span> Anda
              </h1>
              <h2 className="text-3xl font-normal leading-12 py-10">
                Website yang siap jadi teman dalam mengelola <br></br>
                keuangan pribadi.
              </h2>
              <a
                className="bg-[#089BFF] text-white text-3xl font-medium py-4 px-10 rounded-2xl w-fit"
                href="#"
              >
                Get Started
              </a>
            </section>
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-[35%] mt-10 md:mt-0"
            />
          </div>
        </div>
      </div>
      <FinancialServices />
      <TryItNow />
      <Footer />
    </div>
  );
}
