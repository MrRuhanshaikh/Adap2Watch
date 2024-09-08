import { useMemo } from "react";
import PropTypes from "prop-types";

const FAQItem = ({ className = "", number, heading, propMinWidth }) => {
  const heading4Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-[15px] sm:py-[30px] sm:px-[34px] box-border gap-6 max-w-full shrink-0 text-left text-xl text-absolute-white font-manrope mq925:flex-wrap ${className}`}
    >
      <div className="w-[65px] rounded-3xs bg-black-12 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px]">
        <div className="relative font-semibold inline-block sm:min-w-[25px] mq450:text-base">
          {number}
        </div>
      </div>
      <div
        className="flex-1 relative text-3xl leading-[150%] font-medium inline-block sm:min-w-[277px] max-w-full mq450:text-lg mq450:leading-[26px]"
        style={heading4Style}
      >
        {heading}
      </div>
      <img
        className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
        alt=""
        src="/icon-171.svg"
      />
    </div>
  );
};

FAQItem.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FAQItem;
