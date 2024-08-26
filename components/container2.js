import { useMemo } from "react";
import PropTypes from "prop-types";

const Container2 = ({ className = "", propMinWidth }) => {
  const quoteContentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 px-[49px] gap-10 max-w-full text-left text-lg text-grey-60 font-manrope mq825:gap-5 mq825:pt-[31px] mq825:pb-[31px] mq825:box-border mq1250:pl-6 mq1250:pr-6 mq1250:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-3.5 max-w-full mq825:flex-wrap">
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 box-border min-w-[480px] max-w-full mq825:min-w-full"
          style={quoteContentStyle}
        >
          <div className="self-stretch relative leading-[150%] font-medium">
            Reviews
          </div>
        </div>
        <button className="cursor-pointer border-black-15 border-[1px] border-solid py-3 px-[15px] bg-black-08 rounded-lg flex flex-row items-start justify-start gap-1">
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
            alt=""
            src="/icon-8.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative text-lg leading-[28px] font-medium font-manrope text-absolute-white text-left">
              Add Your Review
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full text-xl text-absolute-white mq825:flex-wrap">
        <div className="flex-1 rounded-xl bg-black-06 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-5 min-w-[351px] max-w-full mq825:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[41px] mq450:gap-5 mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[130px]">
              <div className="self-stretch relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                Aniket Roy
              </div>
              <div className="self-stretch relative text-lg leading-[150%] font-medium text-grey-60">
                From India
              </div>
            </div>
            <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 px-[9px] gap-1 text-lg text-grey-60">
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
                <div className="flex flex-row items-start justify-start">
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
                4.5
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-black-06 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-5 min-w-[351px] max-w-full mq825:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[41px] mq450:gap-5 mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[139px]">
              <div className="self-stretch relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                Swaraj
              </div>
              <div className="self-stretch relative text-lg leading-[150%] font-medium text-grey-60">
                From India
              </div>
            </div>
            <div className="rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-1 px-[9px] gap-1 text-lg text-grey-60">
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
                  src="/shape.svg"
                />
              </div>
              <div className="relative leading-[150%] font-medium inline-block min-w-[11px]">
                5
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
            A restless king promises his lands to the local tribals in exchange
            of a stone (Panjurli, a deity of Keradi Village) wherein he finds
            solace and peace of mind.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="flex flex-row items-start justify-start gap-2.5">
          <div className="h-[52px] w-[52px] rounded-81xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[13px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-6.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <div className="h-1 w-[23px] relative rounded-81xl bg-red-45" />
              <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
              <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
              <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
            </div>
          </div>
          <div className="h-[52px] w-[52px] rounded-81xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[13px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-7.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Container2;
