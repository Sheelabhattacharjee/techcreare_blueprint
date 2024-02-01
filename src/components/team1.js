import { useMemo } from "react";

const Team1 = ({ propBackgroundImage }) => {
  const team01Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="w-[413px] overflow-hidden flex flex-col items-start justify-end pt-[300px] px-10 pb-10 box-border gap-[20px] bg-[url('/public/team-01@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px] max-w-full text-left text-sm text-secondary-light-10 font-paragraphs-para-18px-semibold mq750:pt-[170px] mq750:pb-[26px] mq750:box-border"
      style={team01Style}
    >
      <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-7xl font-sub-headings-sub-heading-26px-semibold">
        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-2xl mq450:leading-[29px]">
          James David
        </h2>
        <div className="self-stretch relative text-base leading-[25px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-30">
          Marketing Manager
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
        <div className="self-stretch relative leading-[20px] font-medium">
          Follow Me:
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
          <div className="h-[29.9px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
            <img
              className="w-[18px] h-[17.9px] relative"
              alt=""
              src="/group-2.svg"
            />
          </div>
          <div className="h-[30px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/linkedin1.svg"
            />
          </div>
          <div className="h-[30px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/instagram1.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[173px] rounded-26xl-7 box-border hidden flex-row items-center justify-center py-2 px-[23px] gap-[5px] min-w-[140px] whitespace-nowrap border-[1px] border-solid border-secondary-light-10">
        <div className="flex-1 relative leading-[24px] font-semibold">
          LinkedIn Profile
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/btn-icons-3.svg"
        />
      </div>
    </div>
  );
};

export default Team1;
