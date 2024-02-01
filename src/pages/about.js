import Header from "../components/header";
import Team1 from "../components/team1";
import History2 from "../components/history2";
import History1 from "../components/history1";
import Team from "../components/team";
import Feature4 from "../components/feature4";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="w-full relative bg-secondary-light-10 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <section className="self-stretch bg-primary-20 overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border max-w-full text-center text-41xl text-secondary-dark-20 font-paragraphs-para-18px-semibold mq1250:gap-[30px] mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
      <div className="w-[1140px] rounded-11xl flex flex-col items-center justify-center gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="w-[850px] flex flex-col items-center justify-center gap-[25px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-17xl mq750:text-29xl">
            Our Expertise: Navigating the Marketing Landscape
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
            With a mission focused on strategic marketing, we're here to be your
            trusted partner, helping you navigate the complex marketing
            landscape. Choose us for our expertise, experience, and unwavering
            dedication to your success.
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
        <img
          className="self-stretch h-[580px] relative rounded-31xl max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/image5@2x.png"
        />
        <div className="self-stretch hidden flex-row items-center justify-between gap-[20px] mq1050:flex-wrap">
          <img
            className="h-[36.7px] w-[150px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/pinterest@2x.png"
          />
          <div className="h-[70.1px] w-[150px] relative overflow-hidden shrink-0">
            <div className="absolute h-[35.66%] w-[73%] top-[31.95%] right-[12.93%] bottom-[32.38%] left-[14.07%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-[90.8%] w-[65.3%] top-[7.2%] right-[0.09%] bottom-[2%] left-[34.61%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group1.svg"
                />
                <img
                  className="absolute h-full w-[25.57%] top-[0%] right-[74.43%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/spacing-guides.svg"
            />
          </div>
          <img
            className="h-[45px] w-[150px] relative overflow-hidden shrink-0"
            alt=""
            src="/spotify.svg"
          />
          <img
            className="h-[46.8px] w-[150px] relative overflow-hidden shrink-0"
            alt=""
            src="/airbnb.svg"
          />
          <img
            className="h-[71.3px] w-[150px] relative overflow-hidden shrink-0"
            alt=""
            src="/stripe.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 gap-[22px] text-29xl font-sub-headings-sub-heading-26px-semibold">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-10xl mq750:text-19xl">
              84+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Expert Members
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-10xl mq750:text-19xl">
              30+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Marketing Tactics
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-10xl mq750:text-19xl">
              15yr+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Industry Experience
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-10xl mq750:text-19xl">
              99%
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Client Satisfaction
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-10xl mq750:text-19xl">
              145+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Global Companies
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="self-stretch bg-secondary-light-10 box-border overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 max-w-full text-left text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold border-t-[1px] border-solid border-secondary-light-10 mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border mq750:gap-[30px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border">
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[60px] max-w-full mq750:gap-[30px]">
        <div className=" lg:gap-6 flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[65px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">{`Our History & Expertise`}</h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
            It's our commitment to innovation, data-driven strategies, and a
            customer-centric approach.
          </div>
          <button className="cursor-pointer py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80 hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left">
              Get Started Now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons-2.svg"
            />
          </button>
          <img
            className="self-stretch h-[700px] w-[550px] relative rounded-31xl max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-11@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[20px] min-w-[335px] max-w-full text-17xl text-secondary-dark-30">
          <History2
            heading="2020 - Beginning"
            heading1="In 2020, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
          />
          <History2
            heading="2021 - Dedication"
            heading1="In 2021, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
            propHeight="43px"
            propMargin="unset"
          />
          <History2
            heading="2022 - Adaptation "
            heading1="In 2022, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
            propHeight="unset"
            propMargin="unset"
          />
          <History2
            heading="2023 - Trusted Agency"
            heading1="In 2023, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
            propHeight="unset"
            propMargin="0"
          />
        </div>
      </div>
    </section>
     {/* <History1 /> */}
    <section className="self-stretch flex flex-col items-center justify-center max-w-full text-center text-41xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold">
      <div className="  self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border min-h-[567px] max-w-full mq450:pt-[65px] mq450:pb-[65px] mq450:box-border">
        <div className="  w-[840px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-inherit inline-block mq450:text-17xl mq750:text-29xl">
            The Brilliant Minds Driving Our Marketing Agency's Success
          </h1>
          {/* <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40 hidden">
            We believe in the power of personal stories, and here, we celebrate
            voices that often go unheard.
          </div> */}
          <button className="group rounded-full [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] text-left text-base text-secondary-light-10">
              <b className="relative leading-[28px]">Get Started Now</b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                alt=""
                src="/btn-icons@2x.png"
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
      {/* <Team /> */}
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[1.5rem] px-[1.5rem] lg:py-[120px] lg:px-[100px] text-secondary-light-10 font-h4-desktop-h4-bold">
        <div
          className="self-stretch rounded-xl [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-col items-center justify-center px-[4rem]  py-[60px] lg:px-20 gap-[50px]"
          data-aos="fade-up"
        >
          <b className="self-stretch relative text-[1.5rem]">
            Elevate Your Brand with Expert Content Marketing Services
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px] text-left text-xl">
            <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
              <div className="group cursor-pointer self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Strategic Planning
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Customer Journey Mapping
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Competitive Analysis
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Creative Campaigns
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Reputation Management
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className=" group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Community Building
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Marketing Automation
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Brand Development
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/divider-01@2x.png"
              />
              <div className="group cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/star-9@2x.png"
                />
                <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative leading-[30px] font-semibold">
                  Customer Retention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Feature4 /> */}
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
          
          <button className="group rounded-full [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] text-left text-base text-secondary-light-10 hover:translate-x-1 transition-transform duration-300 ease-in-out transform">
              <b className="relative leading-[28px]">Get Marketing Tips</b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover transition-transform duration-300 ease-in-out transform"
                alt=""
                src="/btn-icons@2x.png"
              />
            </button>
        </div>
        <div className=" self-stretch flex flex-row flex-wrap items-center justify-center lg:justify-start py-2.5 px-0 gap-[15px] text-base text-secondary-light-40"
              data-aos-delay="500">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4px] hover:scale-110 cursor-pointer transition-all-ease duration-500">
                <img
                  className="relative w-3.5 h-3.5 object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <div className="relative leading-[25px] font-medium">
                  Diverse Voice Talent
                </div>
              </div>
          <div className="shrink-0 flex flex-row items-center justify-start gap-[4px] hover:scale-110 cursor-pointer transition-all-ease duration-500">
                <img
                  className="relative w-3.5 h-3.5 object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <div className="relative leading-[25px] font-medium">
                  Custom Scripting
                </div>
              </div>
          <div className="shrink-0 flex flex-row items-center justify-start gap-[4px] hover:scale-110 cursor-pointer transition-all-ease duration-500">
                <img
                  className="relative w-3.5 h-3.5 object-cover"
                  alt=""
                  src="/star@2x.png"
                />
                <div className="relative leading-[25px] font-medium">
                  Improved Branding
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
     
      <Footer />
    </div>
  );
};

export default About;
