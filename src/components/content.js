import { useMemo } from "react";

const Content = ({
  heading,
  para,
  btnIcons,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propBorder,
  propColor6,
}) => {
  const headingStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const para1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const textStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const text1Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const featureTextStarStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const frameContainerStyle = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const btnStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const btnTextStyle = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  return (
    <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[20px] min-w-[360px] max-w-full text-left text-23xl text-secondary-dark-20 font-paragraphs-para-18px-semibold">
      <h1
        className="m-0 self-stretch h-[100px] relative text-inherit font-semibold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-6xl mq750:text-15xl"
        style={headingStyle}
      >
        {heading}
      </h1>
      <div
        className="self-stretch h-[60px] relative text-xl leading-[30px] font-medium text-secondary-dark-30 inline-block mq450:text-base mq450:leading-[24px]"
        style={para1Style}
      >
        {para}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-secondary-dark-50">
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
          <img
            className="h-3.5 w-3.5 relative"
            loading="eager"
            alt=""
            src="/star.svg"
          />
          <div
            className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
            style={textStyle}
          >{`Tailor marketing strategies to meet the specific needs `}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
          <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
          <div
            className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
            style={text1Style}
          >
            Offer website design, development, and optimization services
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
          <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
          <div
            className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
            style={featureTextStarStyle}
          >
            {" "}
            Generate high-quality content, such as blog posts, articles, videos
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
          <img className="h-3.5 w-3.5 relative" alt="" src="/star.svg" />
          <div
            className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
            style={frameContainerStyle}
          >
            anage and grow social media profiles across various platforms
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80 hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100"
        style={btnStyle}
      >
        <div
          className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left"
          style={btnTextStyle}
        >
          Get Started Now
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={btnIcons}
        />
      </button>
    </div>
  );
};

export default Content;
