import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FinancialServices from "./components/FinancialServices";
import TryItNow from "./components/TryItNow";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FinancialServices />
      <TryItNow />
      <Footer />
    </>
  );
}
