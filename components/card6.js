import PropTypes from "prop-types";

const Card6 = ({ className = "", image, april2023 }) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] pl-5 pr-[18px] gap-5 min-w-[278px] max-w-[284px] text-center text-base text-grey-60 font-manrope ${className}`}
    >
      <img
        className="self-stretch h-[281px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch rounded-32xl bg-black-08 border-black-15 border-[1px] border-solid flex flex-row items-center justify-center py-1 pl-[5px] pr-[9px] whitespace-nowrap">
        <div className="flex-1 relative leading-[150%] font-medium">
          <span>{`Released at `}</span>
          <span className="text-grey-75">{april2023}</span>
        </div>
      </div>
    </div>
  );
};

Card6.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  april2023: PropTypes.string,
};

export default Card6;
