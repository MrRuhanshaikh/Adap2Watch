import PropTypes from "prop-types";

const Card3 = ({
  className = "",
  image,
  image1,
  image2,
  image3,
  heading,
  icon,
}) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-7 px-[29px] min-w-[270px] max-w-[276px] text-left text-lg text-absolute-white font-manrope ${className}`}
    >
      <div className="self-stretch h-[252px] relative overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[215.6px] flex flex-row items-start justify-start gap-[5px]">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[124px]"
            alt=""
            src={image}
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[124px]"
            alt=""
            src={image1}
          />
        </div>
        <div className="absolute top-[128.5px] left-[0px] w-[215.6px] flex flex-row items-start justify-start gap-[5px]">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[124px]"
            alt=""
            src={image2}
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[124px]"
            alt=""
            src={image3}
          />
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[-11px] [background:linear-gradient(180deg,_rgba(26,_26,_26,_0),_#1a1a1a)] w-[237px] z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
          <div className="self-stretch relative leading-[150%] font-semibold">
            {heading}
          </div>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
          alt=""
          src={icon}
        />
      </div>
    </div>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  heading: PropTypes.string,
  icon: PropTypes.string,
};

export default Card3;
