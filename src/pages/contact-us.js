import Header from "../components/header";
import Contact from "../components/contact";
import FAQ from "../components/f-a-q";
import CTA1 from "../components/c-t-a1";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#fbf8ff,_#fff)] overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <Contact />
      <FAQ />
      <CTA1 />
      <Footer />
    </div>
  );
};

export default ContactUs;
