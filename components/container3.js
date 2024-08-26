import PropTypes from "prop-types";

const Container3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-left text-lg text-grey-60 font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-1 max-w-full">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-11.svg"
        />
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_28px)]">
          Released Year
        </div>
      </div>
      <div className="self-stretch relative text-xl leading-[150%] font-semibold text-absolute-white mq450:text-base mq450:leading-[24px]">
        2022
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
