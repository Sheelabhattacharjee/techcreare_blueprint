const Accordion = ({ questions }) => {
  return (
    <div className="w-[702px] rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center pt-[25px] pb-7 pr-[41px] pl-[39px] text-left text-5xl text-secondary-dark-40 font-sub-headings-sub-heading-26px-semibold border-[1px] border-solid border-secondary-light-70">
      <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full">
        <div className="flex-1 relative leading-[30px] font-semibold inline-block max-w-[calc(100%_-_47px)] mq450:text-lgi mq450:leading-[24px]">
          {questions}
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/acc-icon-1.svg"
        />
      </div>
    </div>
  );
};

export default Accordion;
