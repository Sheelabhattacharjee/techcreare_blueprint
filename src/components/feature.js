import Content from "./content";

const Feature = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] overflow-hidden flex flex-row items-end justify-center min-h-[560px] max-w-full text-left text-mini-4 text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold">
      <div className="w-[1280px] flex flex-row flex-wrap items-center justify-center py-0 px-5 box-border gap-[70px] max-w-full mq450:gap-[17px] mq750:gap-[35px]">
        <div className="flex-[0.8974] rounded-t-6xl rounded-b-none flex flex-row items-end justify-end p-[30px] box-border bg-[url('/public/image2@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px] min-h-[480px] max-w-full">
          <div className="w-[300px] rounded-[15.25px] bg-gray-400 [backdrop-filter:blur(24px)] flex flex-col items-center justify-start pt-7 px-[27px] pb-[27px] box-border gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[20px] mq450:flex-wrap">
              <div className="flex-1 flex flex-row items-center justify-center min-w-[120px]">
                <div className="flex-1 relative tracking-[-0.03em] leading-[20.34px] font-semibold">
                  Sales Summary
                </div>
              </div>
              <div className="flex flex-row items-start justify-start text-xs font-paragraphs-para-18px-semibold">
                <img
                  className="h-[13.6px] w-[13.6px] relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/fillsystemarrowupsfill.svg"
                />
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <div className="relative tracking-[0.01em] leading-[13.56px] font-semibold">
                    32%
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[75.4px] relative text-2xs-2 text-secondary-light-60 font-inter">
              <div className="absolute top-[0px] left-[0px] w-[27px] flex flex-col items-start justify-start gap-[17px]">
                <div className="relative leading-[13.56px]">40K$</div>
                <div className="relative leading-[13.56px]">20K$</div>
                <div className="self-stretch relative leading-[13.56px] whitespace-nowrap">
                  0$
                </div>
              </div>
              <img
                className="absolute top-[6.2px] left-[40.8px] w-[205.1px] h-[0.8px]"
                alt=""
                src="/link-text.svg"
              />
              <img
                className="absolute top-[37.6px] left-[40.8px] w-[205.1px] h-[0.8px]"
                alt=""
                src="/link-text.svg"
              />
              <img
                className="absolute top-[-0.5px] left-[41.2px] rounded-[847.46px] w-[205.1px] h-[49.3px] z-[1]"
                alt=""
                src="/link-text.svg"
              />
              <img
                className="absolute top-[-0.5px] left-[41.2px] w-[204.2px] h-[69.5px] z-[2]"
                alt=""
                src="/vector-15.svg"
              />
              <div className="absolute top-[-25px] left-[41px] w-[205px] flex flex-col items-center justify-start gap-[26px] text-secondary-dark-10 font-paragraphs-para-18px-semibold">
                <div className="w-[108px] flex flex-row items-start justify-start py-0 pr-0 pl-[33px] box-border">
                  <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[13px] relative">
                    <img
                      className="w-[10.2px] h-[10.2px] absolute my-0 mx-[!important] bottom-[0.3px] left-[28.5px] z-[3]"
                      loading="eager"
                      alt=""
                      src="/dot.svg"
                    />
                    <div className="self-stretch rounded-[5.08px] bg-primary-40 flex flex-col items-center justify-start pt-[11px] pb-2.5 pr-[11px] pl-3.5 gap-[6px] z-[3]">
                      <b className="relative tracking-[0.01em] leading-[13.56px] whitespace-nowrap">
                        22,321$
                      </b>
                      <input
                        className="w-full [border:none] [outline:none] font-semibold font-paragraphs-para-18px-semibold text-2xs-2 bg-[transparent] self-stretch h-3.5 relative leading-[13.56px] text-secondary-dark-50 text-left inline-block min-w-[30px]"
                        placeholder="262 Sales"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch h-[0.8px] relative max-w-full overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Content
          heading="Partner with Us for Strategic Marketing Excellence"
          para="Provide a wide array of digital marketing services, including SEO, content marketing, social media."
          btnIcons="/btn-icons-1.svg"
          propColor="#fff"
          propColor1="#f8f8f8"
          propColor2="#f4f4f4"
          propColor3="#f4f4f4"
          propColor4="#f4f4f4"
          propColor5="#f4f4f4"
          propBorder="2px solid #f8f8f8"
          propColor6="#f8f8f8"
        />
      </div>
    </section>
  );
};

export default Feature;
