import { useMemo } from "react";
import PropTypes from "prop-types";

const Card7 = ({
  className = "",
  image,
  info,
  propMinWidth,
  propPadding,
  text,
}) => {
  const infoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const shapeStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-5 max-w-full text-left text-base text-grey-60 font-manrope ${className}`}
    >
      <img
        className="self-stretch h-[404px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
        <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 pl-[5px] pr-[9px] gap-0.5 whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon3.svg"
          />
          <div
            className="relative leading-[12px] font-medium inline-block min-w-[65px]"
            style={infoStyle}
          >
            {info}
          </div>
        </div>
        <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 px-[9px] gap-1 text-sm">
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
            <div
              className="flex flex-row items-start justify-start"
              style={shapeStyle}
            >
              <img
                className="self-stretch w-[8.6px] relative max-h-full min-h-[16px]"
                alt=""
                src="/shape-4.svg"
              />
              <img
                className="self-stretch w-[8.6px] relative max-h-full min-h-[16px] z-[1]"
                alt=""
                src="/shape-5.svg"
              />
            </div>
          </div>
          <div className="relative leading-[150%] font-medium inline-block min-w-[26px]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

Card7.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  info: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default Card7;
