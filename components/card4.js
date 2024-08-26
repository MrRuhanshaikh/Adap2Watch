import PropTypes from "prop-types";

const Card4 = ({
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
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-7 px-[29px] min-w-[312px] max-w-full text-left text-base text-absolute-white font-manrope ${className}`}
    >
      <div className="self-stretch h-[252px] [background:linear-gradient(180deg,_rgba(26,_26,_26,_0),_#1a1a1a),_linear-gradient(180deg,_rgba(26,_26,_26,_0),_#1a1a1a)] flex flex-col items-start justify-start relative gap-2.5 mq450:h-auto mq450:min-h-[252]">
        <div className="w-[292px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
          <img
            className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[92px] min-h-[121px]"
            alt=""
            src={image}
          />
          <img
            className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[92px] min-h-[121px]"
            alt=""
            src={image1}
          />
        </div>
        <div className="w-[292px] !m-[0] absolute top-[131px] left-[0px] flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
          <img
            className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[92px] min-h-[121px]"
            alt=""
            src={image2}
          />
          <img
            className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[92px] min-h-[121px]"
            alt=""
            src={image3}
          />
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(26,_26,_26,_0),_#1a1a1a)] z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-5 mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[157px]">
          <div className="rounded-8xs bg-red-45 flex flex-row items-start justify-start p-2.5 whitespace-nowrap">
            <div className="relative leading-[12px] font-semibold inline-block min-w-[66px]">
              Top 10 In
            </div>
          </div>
          <div className="self-stretch relative text-xl leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            {heading}
          </div>
        </div>
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
          alt=""
          src={icon}
        />
      </div>
    </div>
  );
};

Card4.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  heading: PropTypes.string,
  icon: PropTypes.string,
};

export default Card4;
