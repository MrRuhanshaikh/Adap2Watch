import { useMemo } from "react";
import PropTypes from "prop-types";

const Card2 = ({
  className = "",
  heading,
  paragraph,
  number,
  propMinWidth,
}) => {
  const numberStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 px-[49px] gap-[50px] min-w-[384px] max-w-full text-left text-5xl text-absolute-white font-manrope mq450:pt-[31px] mq450:pb-[31px] mq450:box-border mq450:min-w-full mq925:gap-[25px] mq925:pl-6 mq925:pr-6 mq925:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
          {heading}
        </b>
        <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
          {paragraph}
        </div>
      </div>
      <div className="flex flex-row items-end justify-center gap-1 text-21xl">
        <div
          className="relative leading-[73%] font-semibold inline-block min-w-[111px] whitespace-nowrap mq450:text-5xl mq450:leading-[18px] mq925:text-13xl mq925:leading-[23px]"
          style={numberStyle}
        >
          {number}
        </div>
        <div className="relative text-lg leading-[73%] font-medium text-grey-60 inline-block min-w-[63px]">
          /month
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-5 mq925:flex-wrap">
        <button className="cursor-pointer border-black-15 border-[1px] border-solid py-4 px-[34px] bg-black-08 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
          <div className="relative text-lg leading-[150%] font-semibold font-manrope text-absolute-white text-left inline-block min-w-[126px]">
            Start Free Trial
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[18px] px-11 bg-red-45 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-red-100">
          <div className="relative text-lg leading-[150%] font-semibold font-manrope text-absolute-white text-left inline-block min-w-[108px]">
            Choose Plan
          </div>
        </button>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  number: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Card2;
