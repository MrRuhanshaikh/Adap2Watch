import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full text-center text-19xl text-absolute-white font-manrope ${className}`}
    >
      <div className="w-[1594px] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[506px] px-[49px] pb-[18px] box-border gap-[50px] bg-[url('/container2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq825:gap-[25px] mq825:pt-[329px] mq825:box-border mq1250:pl-6 mq1250:pr-6 mq1250:box-border mq450:pt-[214px] mq450:box-border">
        <div className="self-stretch flex flex-col items-center justify-end gap-[30px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-1 max-w-full">
            <b className="w-[1194px] relative leading-[150%] inline-block max-w-full mq825:text-11xl mq825:leading-[46px] mq450:text-4xl mq450:leading-[34px]">
              Avengers : Endgame
            </b>
            <div className="w-[1194px] relative text-lg leading-[150%] font-medium text-grey-60 inline-block max-w-full">
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </div>
          </div>
          <div className="w-[365px] flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full text-left text-lg">
            <div className="rounded-lg bg-red-45 flex flex-row items-center justify-start py-3.5 px-6 gap-1 whitespace-nowrap">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                alt=""
                src="/icon-2.svg"
              />
              <div className="relative leading-[28px] font-semibold inline-block min-w-[77px]">
                Play Now
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-2.5 min-w-[122px]">
              <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-3.svg"
                />
              </div>
              <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-4.svg"
                />
              </div>
              <div className="flex-1 rounded-lg bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3 px-[13px]">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="w-14 rounded-lg bg-black-06 border-black-12 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3 px-[13px]">
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
          <div className="w-14 rounded-lg bg-black-06 border-black-12 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3 px-[13px]">
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-41.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
