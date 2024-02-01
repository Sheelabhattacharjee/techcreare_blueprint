const CTA = () => {
  return (
    <div className="w-[468px] flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full text-left text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold">
      <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq750:text-24xl mq450:text-13xl">
        Frequently Asked Questions
      </h1>
      <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
        Let's explore how we can help your business thrive in the ever-evolving
        marketing landscape.
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
  );
};

export default CTA;
