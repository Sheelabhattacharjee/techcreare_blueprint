import React from 'react'

const hero = () => {
  return (
    <div>
       <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[100px] pr-[420px] pl-5 box-border bg-[url('/public/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-41xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold mq1250:pr-[210px] mq1250:box-border mq450:pr-5 mq450:box-border mq750:pt-[65px] mq750:pr-[105px] mq750:pb-[65px] mq750:box-border">
      <div className="w-[840px] flex flex-col items-start justify-center gap-[15px] max-w-full">
        <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-inherit inline-block mq450:text-17xl mq750:text-29xl">
          Your Path to Marketing Excellence Begins Here
        </h1>
        <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40">
          We understand that each business is unique, and our tailor-made
          strategies are designed to amplify your individuality and propel your
          success.
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
    </section>
    </div>
  )
}

export default hero



