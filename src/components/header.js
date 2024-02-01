const Header = () => {
  return (
    <header className="self-stretch bg-primary-dark-80 box-border flex flex-col items-center justify-center py-[30px] px-5 top-[0] z-[99] sticky max-w-full text-left text-22xl-5 text-secondary-light-30 font-sub-headings-sub-heading-26px-semibold border-b-[2px] border-solid border-mediumblue">
      <div className="w-[1240px] overflow-hidden flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
        <div className="flex flex-row items-center justify-start gap-[9.22px]">
          <img
            className="h-[27.6px] w-[27.7px] relative"
            loading="eager"
            alt=""
            src="/stars.svg"
          />
          <div className="relative leading-[47.4px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(140.99deg,_#f8efff,_#6b27ef)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Agencify
          </div>
        </div>
        <div className="w-[1038.1px] flex flex-row items-center justify-end gap-[30px] max-w-full text-lg font-paragraphs-para-18px-semibold mq1250:w-[198.9999999999999px]">
          <div className="flex-1 flex flex-row items-center justify-end gap-[30px] max-w-full mq1250:hidden">
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[27px] font-medium">Home</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[27px] font-medium">About</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[6px]">
              <div className="relative leading-[27px] font-medium">
                Services
              </div>
              <img className="h-1.5 w-2 relative" alt="" src="/icon.svg" />
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[27px] font-medium">
                Projects
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[6px]">
              <div className="relative leading-[27px] font-medium">Other</div>
              <img className="h-1.5 w-2 relative" alt="" src="/icon.svg" />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-6 bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[6px] min-w-[140px] whitespace-nowrap">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-2.svg"
            />
            <div className="relative text-sm leading-[24px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Contact Sales
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
