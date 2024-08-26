import { useMemo } from "react";
import PropTypes from "prop-types";

const Card8 = ({
  className = "",
  image,
  propWidth,
  text,
  propMinWidth,
  text1,
  propMinWidth1,
}) => {
  const subContainer2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const text2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-5 max-w-full text-left text-sm text-grey-60 font-manrope ${className}`}
    >
      <img
        className="self-stretch h-[404px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
        <div
          className="w-[100px] rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-1 pl-[5px] pr-[9px] gap-0.5 whitespace-nowrap"
          style={subContainer2Style}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon3.svg"
          />
          <div
            className="h-2.5 relative leading-[150%] font-medium inline-block min-w-[58px]"
            style={text2Style}
          >
            {text}
          </div>
        </div>
        <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 px-[9px] gap-1">
          <div className="flex flex-row items-start justify-start gap-0.5">
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              alt=""
              src="/shape.svg"
            />
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              alt=""
              src="/shape.svg"
            />
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              alt=""
              src="/shape.svg"
            />
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              alt=""
              src="/shape.svg"
            />
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              alt=""
              src="/shape1.svg"
            />
          </div>
          <div
            className="relative leading-[150%] font-medium inline-block min-w-[26px]"
            style={text3Style}
          >
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

Card8.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Card8;
