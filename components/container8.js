import { useMemo } from "react";
import PropTypes from "prop-types";

const Container8 = ({
  className = "",
  propBorderTop,
  propBorderBottom,
  number,
  propBackgroundImage,
  heading,
  propMinWidth,
  dataLabels,
  paragraph,
}) => {
  const container1Style = useMemo(() => {
    return {
      borderTop: propBorderTop,
      borderBottom: propBorderBottom,
    };
  }, [propBorderTop, propBorderBottom]);

  const subContainerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const heading2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch border-black-15 border-t-[1px] border-solid border-black-15 border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[38px] px-0 gap-5 max-w-full text-left text-11xl text-grey-60 font-manrope mq1250:flex-wrap ${className}`}
      style={container1Style}
    >
      <div className="w-[60px] relative leading-[150%] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[27px] mq825:text-5xl mq825:leading-[36px]">
        {number}
      </div>
      <div
        className="rounded-xl overflow-hidden flex flex-row items-center justify-center py-8 px-[60px] bg-[url('/sub-container@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={subContainerStyle}
      >
        <div className="h-[50px] w-[50px] rounded-48xl bg-gray flex flex-row items-start justify-start p-2.5 box-border">
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-81.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[396px] max-w-full text-xl text-absolute-white mq825:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-center max-w-full [row-gap:20px] mq825:flex-wrap">
          <div
            className="flex-1 relative leading-[150%] font-semibold inline-block min-w-[310px] max-w-full mq450:text-base mq450:leading-[24px]"
            style={heading2Style}
          >
            {heading}
          </div>
          <div className="w-[98px] rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-1 whitespace-nowrap text-base text-grey-60">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon-9.svg"
            />
            <div className="relative leading-[150%] font-medium inline-block min-w-[50px]">
              {dataLabels}
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

Container8.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
  heading: PropTypes.string,
  dataLabels: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propBorderTop: PropTypes.any,
  propBorderBottom: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Container8;
