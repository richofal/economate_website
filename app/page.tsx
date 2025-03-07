import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center w-screen min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <Navbar />
      <div className="hero-container bg-amber-200 w-screen text-black h-screen pt-19">
        <div className="hero-box w-screen bg-[#F2F9FF] h-full flex justify-center items-center">
          <div className=" w-[89%] h-[70%] flex flex-row items-center justify-between">
            <section className="h-[68%] flex flex-col justify-between">
              <h1 className="text-[80px] font-semibold leading-24">
                Teman setia mengelola <br></br>
                <span className="text-[#089BFF]">keuangan</span> anda
              </h1>
              <h2 className="text-3xl font-normal leading-12">
                Website yang siap jadi teman dalam mengelola <br></br>
                keuangan pribadi
              </h2>
              <a className="bg-[#089BFF] text-white text-4xl font-medium py-4 px-10 rounded-2xl w-fit" href="#">
                Get Started
              </a>
            </section>
            <img src="/hero.png" className="w-[35%]"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
