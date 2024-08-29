import Card from "./card";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-20 max-w-full text-left text-19xl text-absolute-white font-manrope mq450:gap-5 mq925:gap-10 ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1825:flex-wrap mq1825:justify-center">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-3.5 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-4xl mq450:leading-[34px] mq925:text-11xl mq925:leading-[46px]">
            Explore our wide variety of categories
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </div>
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
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] text-lg">
        <Card
          image="/image-371@2x.png"
          image1="/image-381@2x.png"
          image2="/image-391@2x.png"
          image3="/image-401@2x.png"
          heading="Action"
        />
        <Card
          image="/image-411@2x.png"
          image1="/image-421@2x.png"
          image2="/image-431@2x.png"
          image3="/image-441@2x.png"
          heading="Adventure"
        />
        <Card
          image="/image-451@2x.png"
          image1="/image-461@2x.png"
          image2="/image-471@2x.png"
          image3="/image-48@2x.png"
          heading="Comedy"
        />
        <Card
          image="/image-49@2x.png"
          image1="/image-50@2x.png"
          image2="/image-511@2x.png"
          image3="/image-521@2x.png"
          heading="Drama"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
