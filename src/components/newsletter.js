const Newsletter = () => {
  return (
    <section className="self-stretch bg-primary-dark-80 box-border overflow-hidden flex flex-row items-center justify-center py-20 px-[260px] relative gap-[10px] max-w-full text-center text-23xl text-secondary-light-10 font-paragraphs-para-18px-semibold border-t-[4px] border-solid border-mediumblue mq1250:pl-[130px] mq1250:pr-[130px] mq1250:box-border mq450:py-[52px] mq450:px-5 mq450:box-border mq750:pl-[65px] mq750:pr-[65px] mq750:box-border">
      <div className="w-[650px] flex flex-col items-center justify-center gap-[20px] min-w-[360px] max-w-full">
        <h1 className="m-0 self-stretch h-[100px] relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-6xl mq750:text-15xl">
          Don't Miss Out: Subscribe to Our Newsletter Today!
        </h1>
        <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-light-30">
          We believe in the power of personal stories, and here, we celebrate
          voices that often go unheard.
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-secondary-light-10 h-[62px] flex-1 rounded-26xl-7 shadow-[4px_4px_30px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-start py-[18.281879425048828px] px-[27.422819137573242px] box-border font-paragraphs-para-18px-semibold font-medium text-base text-secondary-dark-40 min-w-[140px] max-w-full"
            placeholder="Type Your Email"
            type="text"
          />
          <button className="cursor-pointer [border:none] py-[15px] px-[25px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] shadow-[4px_4px_30px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-center box-border gap-[9.14px] min-w-[140px] whitespace-nowrap">
            <div className="relative text-lg leading-[32px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Marketing Tips
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons-9.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px] text-left text-base text-secondary-light-40">
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
            <div className="relative leading-[25px] font-medium">
              Diverse Voice Talent
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
            <div className="relative leading-[25px] font-medium">
              Custom Scripting
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
            <div className="relative leading-[25px] font-medium">
              Industry Specialization
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[653.3px] w-[calc(100%_-_24.7px)] absolute my-0 mx-[!important] top-[calc(50%_-_325.5px)] right-[12.7px] left-[12px] max-w-full overflow-hidden z-[1]"
        alt=""
        src="/vextor.svg"
      />
    </section>
  );
};

export default Newsletter;
