import Container3 from "./container3";
import Container4 from "./container4";
import Container5 from "./container5";
import Container6 from "./container6";
import PropTypes from "prop-types";

const SubContainer1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[519px] rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 px-[49px] gap-[30px] min-w-[519px] max-w-full text-left text-lg text-grey-60 font-manrope mq825:gap-[15px] mq825:py-5 mq825:px-6 mq825:box-border mq825:min-w-full mq1250:pt-[31px] mq1250:pb-[31px] mq1250:box-border mq1575:flex-1 ${className}`}
    >
      <Container3 />
      <Container4 />
      <Container5 />
      <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-1 max-w-full">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-14.svg"
          />
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-[calc(100%_-_28px)]">
            Gernes
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5 text-absolute-white mq825:flex-wrap">
          <div className="rounded-md bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-1.5 px-[13px] whitespace-nowrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[73px]">
              Sci-Fi TV
            </div>
          </div>
          <div className="rounded-md bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-1.5 px-[13px] whitespace-nowrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[127px]">
              Teen TV Shows
            </div>
          </div>
          <div className="rounded-md bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-1.5 px-[13px] whitespace-nowrap">
            <div className="relative leading-[150%] font-medium inline-block min-w-[109px]">
              US TV Shows
            </div>
          </div>
        </div>
      </div>
      <Container6
        heading="Director"
        image="/image-81@2x.png"
        name1="The Duffer Brothers"
        text="From USA"
      />
      <Container6
        heading="Music"
        image="/image-91@2x.png"
        name1="Kyle Dixon"
        text="From USA"
      />
    </div>
  );
};

SubContainer1.propTypes = {
  className: PropTypes.string,
};

export default SubContainer1;
