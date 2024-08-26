import { useMemo } from "react";
import PropTypes from "prop-types";

const Container1 = ({
  className = "",
  propPadding,
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 px-[49px] gap-[30px] max-w-full text-left text-lg text-grey-60 font-archivo mq825:gap-[15px] mq1250:pl-6 mq1250:pr-6 mq1250:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[30px] max-w-full mq825:flex-wrap">
        <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[29px] max-w-full">
          Cast
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5">
          <div className="h-[52px] w-[52px] rounded-81xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[13px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-6.svg"
            />
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
      <div
        className="self-stretch flex flex-row items-start justify-center gap-5 mq825:flex-wrap"
        style={imageContainerStyle}
      >
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          loading="lazy"
          alt=""
          src={image}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image1}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image2}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image3}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image4}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image5}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image6}
        />
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-[102px] overflow-hidden max-h-full object-cover min-w-[100px] min-h-[109px]"
          alt=""
          src={image7}
        />
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  image6: PropTypes.string,
  image7: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Container1;
