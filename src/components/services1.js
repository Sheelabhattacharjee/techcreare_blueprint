import CTA4 from "./c-t-a4";
import Feature2 from "./feature2";
import Feature1 from "./feature1";

const Services1 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[60px] max-w-full text-center text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border mq750:gap-[30px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
      <CTA4
        heading="Your One-Stop Marketing Partner: A Look at Our Agency's Capabilities"
        para="With a relentless commitment to delivering excellence, we have partnered with clients from various industries, helping them achieve their marketing goals and elevate their brand presence. "
        propWidth="1040px"
        propTextAlign="center"
        propTextAlign1="center"
      />
      <div className="w-[1240px] rounded-xl [background:linear-gradient(180deg,_#fbf8ff,_#fff)] flex flex-row flex-wrap items-center justify-start p-[30px] box-border gap-[29px] max-w-full text-left text-xl mq750:pt-5 mq750:pb-5 mq750:box-border">
        <div className="w-[360px] rounded-3xs flex flex-col items-start justify-center gap-[10px] min-w-[320px] max-w-full">
          <Feature2 />
          <Feature1 heading="Account Management" />
          <Feature1 heading="Drive Traffic with SEO" />
        </div>
        <div className="h-[414px] flex-1 relative rounded-xl bg-gainsboro-200 min-w-[335px] max-w-full" />
      </div>
    </section>
  );
};

export default Services1;
