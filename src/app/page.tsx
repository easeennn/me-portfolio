import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Page() {
  return (<>
    <ScrollProgress />
    <div id="home" className="mx-auto md:mt-10 my-[clamp(8px,1.2vw,80px)] w-[calc(100%-clamp(16px,2.4vw,40px))] max-w-[1840px] rounded-[clamp(20px,2.4vw,36px)] bg-panel p-[clamp(10px,1.2vw,18px)] "><Navbar /><Hero /></div>
    <main className="mx-auto w-[calc(100%-clamp(16px,2.4vw,40px))] max-w-[1840px] px-[clamp(6px,1vw,16px)]"><Projects /><Skills /><Process /><About /><Contact /></main>
    <Footer />
  </>);
}
