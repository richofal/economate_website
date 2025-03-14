import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-screen text-black h-screen">
      <div className="w-screen bg-[#F2F9FF] h-full flex justify-center items-center">
        <div className="w-[90%] md:w-[86%] h-[80%] flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <section className="h-full flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 mt-10 md:mt-10 lg:mt-0">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold leading-tight text-[#333]">
              Teman Setia Pengelola <br />
              <span className="text-[#089BFF] font-bold">Keuangan</span> Anda
            </h1>
            <h2 className="text-[16px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-normal leading-8 lg:leading-15 text-[#555] py-4">
              Website yang siap jadi teman dalam mengelola <br />
              keuangan pribadi
            </h2>
            <a
              className="bg-[#089BFF] text-white text-[20px] sm:text-[24px] md:text-[24px] font-medium py-2 px-8 rounded-2xl w-fit mx-auto lg:mx-0 mt-5 lg:mt-5 hover:bg-[#007acc] transition duration-300"
              href="#"
            >
              Get Started
            </a>
          </section>

          {/* Right Section: Image */}
          <div className="w-full md:w-[50%] mt-10 md:mt-0 flex justify-center lg:w-1/2 md:mt-10">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
