import PropTypes from "prop-types";

const Container4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-left text-lg text-grey-60 font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-1 max-w-full">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-12.svg"
        />
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_28px)]">
          Available Languages
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-[69px] box-border gap-2.5 min-h-[96px] text-absolute-white mq825:pr-[34px] mq825:box-border">
        <button className="cursor-pointer border-black-15 border-[1px] border-solid py-1.5 px-[13px] bg-black-08 w-[90px] rounded-lg box-border flex flex-row items-start justify-start hover:bg-darkslategray hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
          <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[62px]">
            English
          </div>
        </button>
        <div className="w-[72px] rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[13px]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[44px]">
            Hindi
          </div>
        </div>
        <div className="w-[73px] rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[13px]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[45px]">
            Tamil
          </div>
        </div>
        <div className="w-[85px] rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[13px]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[57px]">
            Telegu
          </div>
        </div>
        <div className="rounded-lg bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-1.5 px-[13px]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[74px]">
            Kannada
          </div>
        </div>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
