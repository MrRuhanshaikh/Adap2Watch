import { useMemo } from "react";
import PropTypes from "prop-types";

const Container7 = ({ className = "", heading, propMinWidth, text }) => {
  const heading1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-xl bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-center justify-between py-[22px] px-[50px] gap-5 text-left text-5xl text-absolute-white font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq825:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-2.5 mq450:flex-wrap">
        <div
          className="relative leading-[150%] font-semibold inline-block min-w-[116px] mq450:text-lgi mq450:leading-[29px]"
          style={heading1Style}
        >
          {heading}
        </div>
        <div className="relative text-lg leading-[150%] font-medium text-grey-60 inline-block min-w-[92px]">
          {text}
        </div>
      </div>
      <div className="h-[52px] w-[52px] rounded-81xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[13px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-61.svg"
        />
      </div>
    </div>
  );
};

Container7.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Container7;
