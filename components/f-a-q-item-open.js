import PropTypes from "prop-types";

const FAQItemOpen = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start sm:p-[34px] box-border gap-5 max-w-full shrink-0 text-left text-xl text-absolute-white font-manrope mq925:flex-wrap ${className}`}
    >
      <div className="w-[62px] rounded-3xs bg-black-12 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px]">
        <div className="relative font-semibold inline-block min-w-[22px] mq450:text-base">
          01
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-5 sm:min-w-[363px] max-w-full text-3xl mq925:min-w-full">
        <div className="self-stretch relative leading-[150%] font-medium mq450:text-lg mq450:leading-[26px]">
          What is Adap2Watch?
        </div>
        <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
          Adap2Watch is a streaming service that allows you to watch movies and
          shows on demand.
        </div>
      </div>
      <img
        className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
        alt=""
        src="/icon-161.svg"
      />
    </div>
  );
};

FAQItemOpen.propTypes = {
  className: PropTypes.string,
};

export default FAQItemOpen;
