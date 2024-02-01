import { useMemo } from "react";

const CTA4 = ({
  heading,
  para,
  propWidth,
  propFlex,
  propTextAlign,
  propTextAlign1,
}) => {
  const cTAStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const heading1Style = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const para2Style = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div
      className="w-[1040px] flex flex-col items-center justify-start gap-[15px] min-w-[360px] max-w-full text-center text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold"
      style={cTAStyle}
    >
      <h1
        className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl"
        style={heading1Style}
      >
        {heading}
      </h1>
      <div
        className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40"
        style={para2Style}
      >
        {para}
      </div>
      <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-start box-border gap-[10px] min-w-[140px] whitespace-nowrap">
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

export default CTA4;
