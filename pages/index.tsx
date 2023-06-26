import Header from "@/layout/Header";
import Hero from "@/layout/Hero";
import Skills from "@/layout/Skills";
import Projects from "@/layout/Projects";
import Contact from "@/layout/Contact";
import Footer from "@/layout/Footer";
import PortfolioImage from "@/components/PortfolioImage";
import RingsPattern from "@/icons/pattern-rings.svg";
export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between  font-spaceGrotesk bg-black text-white`}
    >
      <RingsPattern className="absolute -left-28 top-40 z-20" />
      <div className="relative w-full  mx-auto max-w-[2000px] pt-7 lg:pt-11 px-4 sm:px-8 lg:px-44">
        <PortfolioImage />
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </div>
      <div className=" w-full  bg-black1 relative z-0 ">
        <div className=" mx-auto max-w-[2000px] px-4 sm:px-8 lg:px-44">
          <Contact />
          <Footer />
        </div>
      </div>
      <RingsPattern className="absolute z-20 bottom-64 -left-32" />
    </main>
  );
}
