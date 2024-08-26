import PropTypes from "prop-types";

const Container5 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-left text-lg text-grey-60 font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-1 max-w-full">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-13.svg"
        />
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_28px)]">
          Ratings
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-5 text-xl text-absolute-white mq450:flex-wrap">
        <div className="flex-1 rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 pl-4 pr-[19px] gap-1 min-w-[150px]">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[49px] mq450:text-base mq450:leading-[24px]">
            IMDb
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-1">
            <div className="flex-1 flex flex-row items-start justify-start gap-0.5">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <div className="flex flex-row items-start justify-start">
                <img
                  className="self-stretch w-[13.1px] relative max-h-full min-h-[24px]"
                  alt=""
                  src="/shape-15.svg"
                />
                <img
                  className="self-stretch w-3 relative max-h-full min-h-[24px]"
                  alt=""
                  src="/shape-16.svg"
                />
              </div>
            </div>
            <div className="relative leading-[150%] font-medium inline-block min-w-[29px] mq450:text-base mq450:leading-[24px]">
              4.5
            </div>
          </div>
        </div>
        <div className="flex-[0.8892] rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3.5 pl-4 pr-[37px] gap-1 min-w-[150px] mq450:flex-1">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[110px] mq450:text-base mq450:leading-[24px]">
          Adap2Watch
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-1">
            <div className="flex-1 flex flex-row items-start justify-start gap-0.5">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-11.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/shape-21.svg"
              />
            </div>
            <div className="relative leading-[150%] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[24px]">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container5.propTypes = {
  className: PropTypes.string,
};

export default Container5;
