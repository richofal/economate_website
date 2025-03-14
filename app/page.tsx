import FinancialServices from "./components/FinancialServices";
import TryItNow from "./components/TryItNow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FinancialServices />
      <TryItNow />
      <Footer />
    </>
  );
}
