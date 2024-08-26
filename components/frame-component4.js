import Card2 from "./card2";
import PropTypes from "prop-types";
import Link from "next/link";
const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 pl-[161px] pr-0 box-border gap-[100px] max-w-full text-left text-29xl text-absolute-white font-manrope mq450:gap-[25px] mq900:gap-[50px] mq900:pl-10 mq900:box-border mq1325:pl-20 mq1325:box-border ${className}`}
    >
      <header className="ml-[-162px] w-[1921px] h-[120px] flex flex-row items-center justify-between pt-[22px] px-[162px] pb-[23px] box-border relative max-w-[110%] shrink-0 gap-5 text-left text-lg text-grey-75 font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[81px] mq900:pr-[81px] mq900:box-border">
        <img
          className="h-[40px] w-[199px] relative"
          loading="lazy"
          alt=""
          src="/logo.png"
          // /logo.svg
        />
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            alt=""
            src="/icon-1.svg"
          />
        </div>
        <div className="!m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_281.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-hidden flex flex-row items-center justify-start py-[5px] pl-9 pr-1.5 gap-[30px]">
          <div className="relative leading-[150%] inline-block min-w-[49px]">
          <Link className="no-underline text-current" href="/">Home</Link>
          </div>
          <div className="relative leading-[150%] whitespace-nowrap"><Link className="no-underline text-current" href="support-page-desktop">{`Movies & Shows`}</Link></div>
          <div className="relative leading-[150%] inline-block min-w-[68px]">
          <Link className="no-underline text-current" href="support-page-desktop">Support</Link>
          </div>
          <button className="cursor-pointer border-black-10 border-[1px] border-solid py-3 px-[23px] bg-black-10 rounded-lg flex flex-row items-center justify-start hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[118px]">
            <Link className="no-underline text-current" href="subscription-page-desktop">Subscriptions</Link>
            </div>
          </button>
        </div>
      </header>
      <div className="w-[1616px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-20 max-w-full mq450:gap-5 mq900:gap-10">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1700:flex-wrap">
          <div className="w-[1259px] flex flex-col items-start justify-start gap-3.5 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[43px] mq900:text-19xl mq900:leading-[58px]">
              Choose the plan that's right for you
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
              Join Adap2Watch and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </div>
          </div>
          <div className="rounded-3xs bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px] text-lg text-grey-60">
            <button className="cursor-pointer [border:none] py-3.5 px-6 bg-black-12 rounded-3xs flex flex-row items-center justify-center hover:bg-dimgray-200">
              <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[70px]">
                Monthly
              </div>
            </button>
            <div className="rounded-81xl flex flex-row items-center justify-center py-3.5 px-6">
              <div className="relative leading-[150%] font-medium inline-block min-w-[51px]">
                Yearly
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full">
          <Card2
            heading="Basic Plan"
            paragraph="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
            number="$9.99"
            propMinWidth="111px"
          />
          <Card2
            heading="Standard Plan"
            paragraph="Access to a wider selection of movies and shows, including most new releases and exclusive content"
            number="$12.99"
            propMinWidth="127px"
          />
          <Card2
            heading="Premium Plan"
            paragraph="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
            number="$14.99"
            propMinWidth="126px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
