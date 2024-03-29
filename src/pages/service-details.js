import Header from "../components/header";
import Feature3 from "../components/feature3";
import Services1 from "../components/services1";
import Testimonial1 from "../components/testimonial1";
import CTA3 from "../components/c-t-a3";
import Footer from "../components/footer";

const ServiceDetails = () => {
  return (
    <div className="w-full relative bg-secondary-light-10 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <section className="self-stretch [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] box-border overflow-hidden flex flex-col items-center justify-center py-[100px] pr-[420px] pl-5 max-w-full text-left text-35xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold border-b-[6px] border-solid border-mediumblue mq1250:pr-[210px] mq1250:box-border mq450:pr-5 mq450:box-border mq750:pt-[65px] mq750:pr-[105px] mq750:pb-[65px] mq750:box-border">
        <div className="w-[840px] flex flex-col items-start justify-center gap-[15px] max-w-full">
          <h1 className="m-0 self-stretch h-[195px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">
            The Most Proper Marketing Actions You’ll Ever Need For Business.
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-30">
            With a relentless commitment to delivering excellence, we have
            partnered with clients from various industries, helping them achieve
            their marketing goals and elevate their brand presence.
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
      </section>
      <Feature3 />
      <Services1 />
      <Testimonial1 />
      <CTA3 />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
