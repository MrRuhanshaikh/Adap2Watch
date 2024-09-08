import Card1 from "./card1";
import PropTypes from "prop-types";

const Container11 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-20 max-w-full text-left text-19xl text-absolute-white font-manrope mq450:gap-5 mq925:gap-10 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-3.5 max-w-full">
        <h1 className="m-0 w-[1297px] relative text-[28px] sm:text-inherit leading-[150%] font-bold font-[inherit] inline-block max-w-full ">
          We Provide you streaming experience across various devices.
        </h1>
        <div className="w-[1297px] relative text-lg leading-[150%] text-grey-60 inline-block max-w-full">
          With Adap2Watch, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-10 sm:gap-x-[30px] gap-y-[28.1px] min-h-[596px] max-w-full text-5xl">
        <Card1 icon="/icon-10.svg" heading="Smartphones" />
        <Card1 icon="/icon-111.svg" heading="Tablet" propMinWidth="56px" />
        <Card1 icon="/icon-121@2x.png" heading="Smart TV" propMinWidth="82px" />
        <Card1 icon="/icon-131@2x.png" heading="Laptops" propMinWidth="72px" />
        <Card1
          icon="/icon-141@2x.png"
          heading="Gaming Consoles"
          propMinWidth="159px"
        />
        <Card1
          icon="/icon-151@2x.png"
          heading="VR Headsets "
          propMinWidth="115px"
        />
      </div>
    </div>
  );
};

Container11.propTypes = {
  className: PropTypes.string,
};

export default Container11;
