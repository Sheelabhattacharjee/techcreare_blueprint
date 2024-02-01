import Header from "../components/header";
import Hero from "../components/hero";
import Project from "../components/project";
import Feature4 from "../components/feature4";
import Testimonial from "../components/testimonial";
import CTA1 from "../components/c-t-a1";
import Footer from "../components/footer";

const CaseStudy = () => {
  return (
    <div className="w-full relative bg-secondary-light-10 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[70px] box-border tracking-[normal]">
      <Header />
      <Hero />
      <Project />
      <Feature4 />
      <Testimonial />
      <CTA1 />
      <Footer />
    </div>
  );
};

export default CaseStudy;
