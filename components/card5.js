import { useMemo } from "react";
import PropTypes from "prop-types";

const Card5 = ({
  className = "",
  propFlex,
  propMinWidth,
  image,
  propHeight,
  text,
  propMinWidth1,
  propWidth,
  icon,
  text1,
  propMinWidth2,
}) => {
  const cardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const imageIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const textStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const subContainer1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const text1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] pl-5 pr-[18px] gap-5 min-w-[278px] max-w-[284px] text-left text-base text-grey-60 font-manrope ${className}`}
      style={cardStyle}
    >
      <img
        className="self-stretch h-[281px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className="self-stretch flex flex-row items-start justify-between gap-5">
        <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 pl-[5px] pr-[9px] gap-0.5 whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon3.svg"
          />
          <div
            className="relative leading-[12px] font-medium inline-block min-w-[66px]"
            style={textStyle}
          >
            {text}
          </div>
        </div>
        <div
          className="w-16 rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-1 pl-[5px] pr-[9px] gap-1"
          style={subContainer1Style}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src={icon}
          />
          <div
            className="relative leading-[12px] font-medium inline-block min-w-[20px]"
            style={text1Style}
          >
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

Card5.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Card5;
