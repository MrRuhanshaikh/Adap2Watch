import { useMemo } from "react";
import PropTypes from "prop-types";

const Card1 = ({ className = "", icon, heading, propMinWidth }) => {
  const heading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-xl [background:linear-gradient(221.52deg,_rgba(229,_0,_0,_0.5),_rgba(229,_0,_0,_0)_81.37%),_#0f0f0f] border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-6 sm:py-12 px-[25px] sm:px-[49px] gap-[15px] sm:gap-[30px] sm:min-w-[486px] max-w-full text-left text-xl sm:text-5xl text-absolute-white font-manrope  ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-4 max-w-full ">
        <div className="w-[72px] rounded-xl bg-black-08 border-black-12 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 px-[15px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            alt=""
            src={icon}
          />
        </div>
        <div
          className="flex-1 relative leading-[150%] font-semibold inline-block min-w-[123px] max-w-full mq450:text-lgi"
          style={heading3Style}
        >
          {heading}
        </div>
      </div>
      <div className="self-stretch relative text-lg leading-[150%] text-pretty text-grey-60">
       Adap2Watch is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Card1;
