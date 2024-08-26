import Container1 from "./container1";
import Container2 from "./container2";
import PropTypes from "prop-types";

const FeatureList = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[687px] max-w-full text-left text-lg text-grey-60 font-manrope mq825:min-w-full ${className}`}
    >
      <div className="self-stretch rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 pl-[50px] pr-5 gap-3.5 max-w-full mq1250:pl-[25px] mq1250:box-border">
        <div className="w-[957px] relative leading-[150%] font-medium inline-block max-w-full">
          Description
        </div>
        <div className="w-[957px] relative leading-[150%] font-medium text-absolute-white inline-block max-w-full">
          A fiery young man clashes with an unflinching forest officer in a
          south Indian village where spirituality, fate and folklore rule the
          lands.
        </div>
      </div>
      <Container1
        image="/image@2x.png"
        image1="/image-1@2x.png"
        image2="/image-2@2x.png"
        image3="/image-3@2x.png"
        image4="/image-4@2x.png"
        image5="/image-5@2x.png"
        image6="/image-6@2x.png"
        image7="/image-7@2x.png"
      />
      <Container2 />
    </div>
  );
};

FeatureList.propTypes = {
  className: PropTypes.string,
};

export default FeatureList;
