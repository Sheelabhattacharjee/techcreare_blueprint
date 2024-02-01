import Header from "../components/header";
import Hero from "../components/hero";
import Project1 from "../components/project1";
import Feature from "../components/feature";
import Process from "../components/process";
import CTA2 from "../components/c-t-a2";
import Footer from "../components/footer";

const Services = () => {
  return (
    <div className="w-full relative bg-secondary-light-10 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <Hero />
      <Project1 />
      <Feature />
      <Process />
      <CTA2 />
      <Footer />
    </div>
  );
};

export default Services;
