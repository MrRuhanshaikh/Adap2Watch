import { useMemo } from "react";
import PropTypes from "prop-types";

const Hero = ({
  className = "",
  iconBackgroundImage,
  heading,
  iconWidth,
  paragraph,
  propWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: iconBackgroundImage,
    };
  }, [iconBackgroundImage]);

  const headingStyle = useMemo(() => {
    return {
      width: iconWidth,
    };
  }, [iconWidth]);

  const paragraphStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[50px] pl-[22px] pr-5 box-border max-w-full text-center text-19xl text-absolute-white font-manrope mq450:pb-[21px] mq450:box-border mq1250:pb-8 mq1250:box-border ${className}`}
    >
      <div
        className="w-[1594px] mt-48 rounded-xl overflow-hidden shrink-0 flex flex-col items-center justify-end pt-[639px] px-[49px] pb-[18px] box-border gap-[30px] bg-[url('/container@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[270px] mq450:box-border mq825:gap-[15px] mq825:pt-[415px] mq825:box-border mq1250:pl-6 mq1250:pr-6 mq1250:box-border"
        style={containerStyle}
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-1 max-w-full">
          <h1
            className="m-0 w-[1194px] relative text-inherit leading-[150%] font-bold font-[inherit] inline-block max-w-full mq450:text-4xl mq450:leading-[34px] mq825:text-11xl mq825:leading-[46px]"
            style={headingStyle}
          >
            {heading}
          </h1>
          <div
            className="w-[1194px] relative text-lg leading-[150%] text-grey-60 inline-block max-w-full"
            style={paragraphStyle}
          >
            {paragraph}
          </div>
        </div>
        <div className="w-[365px] flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
          <button className="cursor-pointer [border:none] py-3.5 px-6 bg-red-45 rounded-lg flex flex-row items-center justify-start gap-1 whitespace-nowrap hover:bg-red-100">
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
              alt=""
              src="/icon-2.svg"
            />
            <div className="relative text-lg leading-[28px] font-semibold font-manrope text-absolute-white text-left inline-block min-w-[77px]">
              Play Now
            </div>
          </button>
          <div className="flex-1 flex flex-row items-start justify-start gap-2.5 min-w-[122px]">
            <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-3.svg"
              />
            </div>
            <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-4.svg"
              />
            </div>
            <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  iconBackgroundImage: PropTypes.any,
  iconWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Hero;
