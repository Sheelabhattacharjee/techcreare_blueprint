import Team1 from "./team1";

const Team = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center max-w-full text-center text-41xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold">
      <div className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border min-h-[567px] max-w-full mq450:pt-[65px] mq450:pb-[65px] mq450:box-border">
        <div className="w-[840px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-inherit inline-block mq450:text-17xl mq750:text-29xl">
            The Brilliant Minds Driving Our Marketing Agency's Success
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40 hidden">
            We believe in the power of personal stories, and here, we celebrate
            voices that often go unheard.
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
      </div>
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border min-h-[1082px] max-w-full z-[1] mt-[-150px] text-left text-sm font-paragraphs-para-18px-semibold mq750:gap-[20px]">
        <div className="w-[1240px] rounded-11xl shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row flex-wrap items-start justify-center min-h-[982px] max-w-full">
          <Team1 propBackgroundImage="url('/team-01@3x.png')" />
          <Team1 propBackgroundImage="url('/team-011@3x.png')" />
          <Team1 propBackgroundImage="url('/team-02@3x.png')" />
          <Team1 propBackgroundImage="url('/team-021@3x.png')" />
          <Team1 propBackgroundImage="url('/team-03@3x.png')" />
          <Team1 propBackgroundImage="url('/team-031@3x.png')" />
        </div>
      </div>
    </section>
  );
};

export default Team;
