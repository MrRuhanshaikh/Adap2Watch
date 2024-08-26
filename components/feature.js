import Container7 from "./container7";
import Container8 from "./container8";
import Container1 from "./container1";
import Container2 from "./container2";
import PropTypes from "prop-types";

const Feature = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[690px] max-w-full text-left text-5xl text-absolute-white font-manrope mq825:min-w-full ${className}`}
    >
      <div className="self-stretch rounded-xl bg-black-10 flex flex-col items-start justify-start p-10 box-border gap-10 max-w-full mq825:gap-5 mq825:pt-5 mq825:pb-5 mq825:box-border mq1250:pt-[26px] mq1250:pb-[26px] mq1250:box-border">
        <div className="self-stretch relative leading-[150%] font-semibold mq450:text-lgi mq450:leading-[29px]">
          Seasons and Episodes
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <Container7 heading="Season 01" text="9 Episodes" />
          <div className="self-stretch rounded-xl bg-black-06 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 px-[49px] gap-[30px] max-w-full mq825:gap-[15px] mq825:pt-5 mq825:pb-5 mq825:box-border mq1250:py-[31px] mq1250:px-6 mq1250:box-border">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 mq825:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-2.5 mq450:flex-wrap">
                <div className="relative leading-[150%] font-semibold inline-block min-w-[120px] mq450:text-lgi mq450:leading-[29px]">
                  Season 02
                </div>
                <div className="relative text-lg leading-[150%] font-medium text-grey-60 inline-block min-w-[92px]">
                  5 Episodes
                </div>
              </div>
              <div className="h-[52px] w-[52px] rounded-81xl bg-black-08 border-black-15 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[13px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-71.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-11xl text-grey-60">
              <Container8
                number="01"
                heading="Chapter One : The Vanishing of Will Byers"
                dataLabels="49 min"
                paragraph="On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab."
              />
              <Container8
                propBorderTop="unset"
                propBorderBottom="1px solid #262626"
                number="02"
                propBackgroundImage="url('/sub-container1@3x.png')"
                heading="Chapter Two: The Weirdo on Maple Street"
                propMinWidth="314px"
                dataLabels="56 min"
                paragraph="Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call."
              />
              <Container8
                propBorderTop="unset"
                propBorderBottom="1px solid #262626"
                number="03"
                propBackgroundImage="url('/sub-container2@3x.png')"
                heading="Chapter Three: Holly, Jolly"
                propMinWidth="198px"
                dataLabels="52 min"
                paragraph="An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her."
              />
              <Container8
                propBorderTop="unset"
                propBorderBottom="1px solid #262626"
                number="04"
                propBackgroundImage="url('/sub-container3@3x.png')"
                heading="Chapter Four: The Body"
                propMinWidth="178px"
                dataLabels="51 min"
                paragraph="Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.."
              />
              <Container8
                propBorderTop="unset"
                propBorderBottom="unset"
                number="05"
                propBackgroundImage="url('/sub-container4@3x.png')"
                heading="Chapter Five: The Flea and the Acrobat"
                propMinWidth="292px"
                dataLabels="53 min"
                paragraph="Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension."
              />
            </div>
          </div>
          <Container7
            heading="Season 03"
            propMinWidth="120px"
            text="7 Episodes"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-black-10 border-black-15 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 pl-[50px] pr-5 gap-3.5 max-w-full text-lg text-grey-60 mq1250:pl-[25px] mq1250:box-border">
        <div className="w-[962px] relative leading-[150%] font-medium inline-block max-w-full">
          Description
        </div>
        <div className="w-[962px] relative leading-[150%] font-medium text-absolute-white inline-block max-w-full">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and one strange
          little girl.
        </div>
      </div>
      <Container1
        propPadding="0px 0px 0px 0px"
        image="/image1@2x.png"
        image1="/image-110@2x.png"
        image2="/image-210@2x.png"
        image3="/image-310@2x.png"
        image4="/image-46@2x.png"
        image5="/image-51@2x.png"
        image6="/image-61@2x.png"
        image7="/image-71@2x.png"
      />
      <Container2 propMinWidth="484px" />
    </div>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
};

export default Feature;
