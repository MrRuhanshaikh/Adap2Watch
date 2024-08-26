import PropTypes from "prop-types";

const Card = ({ className = "", image, image1, image2, image3, heading }) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-7 px-[29px] min-w-[289px] max-w-[295px] text-left text-lg text-absolute-white font-manrope ${className}`}
    >
      <div className="self-stretch h-[252px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-[5px]">
        <div className="w-[235.4px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[5px]">
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
        <div className="w-[235.4px] !m-[0] absolute top-[128.5px] left-[0px] flex flex-row items-start justify-start gap-[5px]">
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
        <div className="w-full h-full absolute !m-[0] bottom-[0px] left-[calc(50%_-_118.7px)] [background:linear-gradient(180deg,_rgba(26,_26,_26,_0),_#1a1a1a)] z-[1]" />
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
          src="/icon-51.svg"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  heading: PropTypes.string,
};

export default Card;
