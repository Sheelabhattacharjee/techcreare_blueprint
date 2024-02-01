import TestimonialCard from "./testimonial-card";

const Testimonial = () => {
  return (
    <section className="self-stretch bg-primary-20 overflow-hidden flex flex-row items-center justify-center py-[120px] px-5 box-border max-w-full text-center text-35xl text-secondary-dark-20 font-paragraphs-para-18px-semibold mq450:pt-[33px] mq450:pb-[33px] mq450:box-border mq1050:pt-[51px] mq1050:pb-[51px] mq1050:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
      <div className="w-[1240px] flex flex-col items-center justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="w-[850px] flex flex-col items-start justify-start gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq750:text-24xl mq450:text-13xl">
            Read Success Stories from Our Ever-Growing 800+ Client Family
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
            That's the essence of our approach. We're more than just a service
            provider; we're a team of passionate professionals who are committed
            to helping you unlock your brand's full potential.
          </div>
          <div className="w-[225px] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10">
            <b className="flex-1 relative leading-[28px]">Get Started Now</b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-23xl text-secondary-dark-30 font-sub-headings-sub-heading-26px-semibold">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1050:flex-wrap">
            <img
              className="h-[555px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[393px] min-h-[555px] mq750:min-w-full mq1050:flex-1"
              loading="eager"
              alt=""
              src="/image1@2x.png"
            />
            <div className="flex-[0.8975] rounded-6xl bg-secondary-light-10 shadow-[4px_4px_30px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-center justify-start p-[30px] gap-[20px] min-w-[393px] max-w-full border-[1px] border-solid border-secondary-light-70 mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1050:flex-1">
              <h1 className="m-0 self-stretch h-[250px] relative text-inherit font-semibold font-inherit inline-block mq750:text-15xl mq450:text-6xl">
                "Outstanding service! Our business has seen a significant boost
                in online visibility since partnering with them."
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-[9px] gap-[10px] text-3xl text-secondary-dark-40 font-paragraphs-para-18px-semibold">
                <img
                  className="w-[75px] h-[75px] relative rounded-[50%] object-cover"
                  alt=""
                  src="/image-1@2x.png"
                />
                <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-sub-headings-sub-heading-26px-semibold mq450:text-lg mq450:leading-[29px]">
                  Steven Franklin
                </h3>
                <div className="self-stretch relative text-lg leading-[27px] font-semibold text-secondary-dark-50">
                  Global Head of Customer Service
                </div>
                <div className="self-stretch relative text-sm [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60">{`View Customer Story >`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-3 w-3 relative rounded-[50%] bg-primary-80" />
                  <div className="h-3 w-3 relative rounded-[50%] bg-primary-40" />
                  <div className="h-3 w-3 relative rounded-[50%] bg-primary-40" />
                  <div className="h-3 w-3 relative rounded-[50%] bg-primary-40" />
                  <div className="h-3 w-3 relative rounded-[50%] bg-primary-40" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <TestimonialCard
              image="/client-images@2x.png"
              clientName="Ethan Anderson"
              propHeight="125px"
            />
            <TestimonialCard
              image="/image-2@2x.png"
              clientName="William Johnson"
              propHeight="125px"
            />
            <TestimonialCard
              image="/client-images-1@2x.png"
              clientName="James Martin"
              propHeight="125px"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[30px] max-w-full">
            <TestimonialCard
              image="/image-3@2x.png"
              clientName="Benjamin Davis"
              propHeight="unset"
            />
            <TestimonialCard
              image="/client-images-2@2x.png"
              clientName="Jackson Smith"
              propHeight="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
