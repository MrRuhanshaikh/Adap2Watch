import { useMemo } from "react";
import PropTypes from "prop-types";

const Container10 = ({
  className = "",
  propAlignSelf,
  propWidth,
  text,
  text1,
  text2,
  text3,
}) => {
  const container2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch border-black-15 border-b-[1px] border-solid box-border overflow-x-auto flex flex-row items-start justify-start py-0 px-0 max-w-full text-left text-lg text-grey-60 font-manrope ${className}`}
      style={container2Style}
    >
      <div className="flex-1 flex flex-row items-center justify-center p-[30px] box-border max-w-[calc(100%_-_1198px)]">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text}
        </div>
      </div>
      <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-[calc(100%_-_1198px)]">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text1}
        </div>
      </div>
      <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-[calc(100%_-_1198px)] z-[1]">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text2}
        </div>
      </div>
      <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-[calc(100%_-_1198px)]">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text3}
        </div>
      </div>
    </div>
  );
};

Container10.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Container10;
