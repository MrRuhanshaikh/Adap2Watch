import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-between max-w-full gap-5 text-left text-19xl text-absolute-white font-manrope mq1825:flex-wrap ${className}`}
    >
      <div className="w-[1320px] flex flex-col items-start justify-start gap-3.5 max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-4xl mq450:leading-[34px] mq925:text-11xl mq925:leading-[46px]">
          Frequently Asked Questions
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about Adap2Watch.
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[18px] px-6 bg-red-45 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-red-100">
        <div className="relative text-lg leading-[150%] font-semibold font-manrope text-absolute-white text-left inline-block min-w-[128px]">
          Ask a Question
        </div>
      </button>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
