import { useMemo } from "react";
import PropTypes from "prop-types";

const Container9 = ({
  className = "",
  heading,
  propOverflow,
  textPlaceholder,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 min-w-[268px] max-w-full text-left text-lg text-absolute-white font-manrope ${className}`}
    >
      <div className="self-stretch relative leading-[150%] font-semibold">
        {heading}
      </div>
      <div
        className="self-stretch rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-[18px] px-[19px] max-w-full mq450:gap-[38px]"
        style={inputFieldStyle}
      >
        <input
          className="w-full [border:none] [outline:none] font-manrope text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-60 text-left inline-block min-w-[224px] max-w-full p-0"
          placeholder={textPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

Container9.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  textPlaceholder: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Container9;
