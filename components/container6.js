import PropTypes from "prop-types";

const Container6 = ({ className = "", heading, image, name1, text }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-left text-lg text-grey-60 font-manrope ${className}`}
    >
      <div className="self-stretch relative leading-[150%] font-medium">
        {heading}
      </div>
      <div className="self-stretch rounded-lg bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3 px-[13px] gap-2.5 max-w-full text-absolute-white mq450:flex-wrap">
        <img
          className="h-[60px] w-[56.6px] relative rounded-lg object-cover"
          alt=""
          src={image}
        />
        <div className="flex-1 flex flex-col items-start justify-center min-w-[211px] max-w-full">
          <div className="self-stretch relative leading-[150%] font-medium">
            {name1}
          </div>
          <div className="self-stretch relative text-base leading-[150%] font-medium text-grey-60">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  name1: PropTypes.string,
  text: PropTypes.string,
};

export default Container6;
