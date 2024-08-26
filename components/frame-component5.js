import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "", heading }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-19xl text-absolute-white font-manrope mq1575:flex-wrap ${className}`}
    >
      <div className="w-[1141px] flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 box-border max-w-full">
        <b className="self-stretch relative leading-[150%] mq825:text-11xl mq825:leading-[46px] mq450:text-4xl mq450:leading-[34px]">
          {heading}
        </b>
      </div>
      <div className="rounded-xl bg-black-06 border-black-12 border-[1px] border-solid overflow-x-auto flex flex-row items-start justify-start py-3.5 px-[15px] gap-4">
        <div className="w-14 rounded-lg bg-black-10 border-black-12 border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-3 px-[13px]">
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-31.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <div className="h-1 w-[23px] relative rounded-81xl bg-red-45" />
            <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
            <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
            <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
          </div>
        </div>
        <div className="w-14 rounded-lg bg-black-10 border-black-12 border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-3 px-[13px]">
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-41.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

export default FrameComponent5;
