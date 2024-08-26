import FrameComponent5 from "./frame-component5";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card6 from "./card6";
import Card7 from "./card7";
import Card8 from "./card8";
import Card9 from "./card9";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full text-center text-xl text-absolute-white font-manrope ${className}`}
    >
      <div className="h-[3184px] w-[1598px] relative max-w-full mq1575:h-auto mq1575:min-h-[3184]">
        <div className="absolute top-[0px] left-[50px] rounded-lg bg-red-45 flex flex-row items-start justify-start py-2.5 px-6">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[68px] mq450:text-base mq450:leading-[24px]">
            Movies
          </div>
        </div>
        <div className="absolute top-[20px] left-[0px] rounded-xl border-black-15 border-[1px] border-solid box-border w-full flex flex-col items-start justify-start py-12 px-[49px] gap-[100px] max-w-full z-[1] text-left text-base text-grey-60 mq825:gap-[50px] mq1250:pl-6 mq1250:pr-6 mq1250:box-border mq450:gap-[25px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-19xl text-absolute-white mq825:gap-[25px]">
            <FrameComponent5 heading="Our Genres" />
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] text-lg">
              <Card3
                image="/image3@2x.png"
                image1="/image4@2x.png"
                image2="/image5@2x.png"
                image3="/image6@2x.png"
                heading="Action"
                icon="/icon1.svg"
              />
              <Card3
                image="/image7@2x.png"
                image1="/image8@2x.png"
                image2="/image9@2x.png"
                image3="/image10@2x.png"
                heading="Adventure"
                icon="/icon1.svg"
              />
              <Card3
                image="/image11@2x.png"
                image1="/image12@2x.png"
                image2="/image13@2x.png"
                image3="/image14@2x.png"
                heading="Comedy"
                icon="/icon1.svg"
              />
              <Card3
                image="/image15@2x.png"
                image1="/image16@2x.png"
                image2="/image17@2x.png"
                image3="/image18@2x.png"
                heading="Drama"
                icon="/icon1.svg"
              />
              <Card3
                image="/image19@2x.png"
                image1="/image20@2x.png"
                image2="/image22@2x.png"
                image3="/image23@2x.png"
                heading="Horror"
                icon="/icon1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-19xl text-absolute-white mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1575:flex-wrap">
              <div className="w-[1141px] flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 box-border max-w-full">
                <b className="self-stretch relative leading-[150%] mq825:text-11xl mq825:leading-[46px] mq450:text-4xl mq450:leading-[34px]">
                  Popular Top 10 In Genres
                </b>
              </div>
              <div className="rounded-xl bg-black-06 border-black-12 border-[1px] border-solid overflow-x-auto flex flex-row items-start justify-start py-3.5 px-[15px] gap-4">
                <div className="w-14 rounded-lg bg-black-10 border-black-12 border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-3 px-[13px]">
                  <img
                    className="h-7 w-7 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-31.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[3px]">
                    <div className="h-1 w-[23px] relative rounded-81xl bg-red-45" />
                    <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
                    <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
                    <div className="h-1 w-[16.3px] relative rounded-81xl bg-black-20" />
                  </div>
                </div>
                <div className="w-14 rounded-lg bg-black-10 border-black-12 border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-start py-3 px-[13px]">
                  <img
                    className="h-7 w-7 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-41.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] max-w-full text-base">
              <Card4
                image="/image24@2x.png"
                image1="/image25@2x.png"
                image2="/image26@2x.png"
                image3="/image27@2x.png"
                heading="Action"
                icon="/icon2.svg"
              />
              <Card4
                image="/image28@2x.png"
                image1="/image29@2x.png"
                image2="/image30@2x.png"
                image3="/image31@2x.png"
                heading="Adventure"
                icon="/icon2.svg"
              />
              <Card4
                image="/image32@2x.png"
                image1="/image33@2x.png"
                image2="/image34@2x.png"
                image3="/image35@2x.png"
                heading="Comedy"
                icon="/icon2.svg"
              />
              <Card4
                image="/image36@2x.png"
                image1="/image37@2x.png"
                image2="/image38@2x.png"
                image3="/image39@2x.png"
                heading="Drama"
                icon="/icon2.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="Trending Now" />
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
              <Card5
                image="/image40@2x.png"
                text="1h 30min"
                icon="/icon4.svg"
                text1="2K"
              />
              <Card5
                propFlex="1"
                propMinWidth="278px"
                image="/image41@2x.png"
                propHeight="281px"
                text="1h 57min"
                propMinWidth1="65px"
                propWidth="74px"
                icon="/icon4.svg"
                text1="1.5K"
                propMinWidth2="30px"
              />
              <Card5
                propFlex="1"
                propMinWidth="278px"
                image="/image42@2x.png"
                propHeight="281px"
                text="2h 10min"
                propMinWidth1="67px"
                propWidth="74px"
                icon="/icon4.svg"
                text1="1.8K"
                propMinWidth2="30px"
              />
              <Card5
                propFlex="1"
                propMinWidth="278px"
                image="/image43@2x.png"
                propHeight="281px"
                text="2h 20min"
                propMinWidth1="69px"
                propWidth="63px"
                icon="/icon4.svg"
                text1="3K"
                propMinWidth2="19px"
              />
              <Card5
                propFlex="1"
                propMinWidth="278px"
                image="/image44@2x.png"
                propHeight="281px"
                text="1h 42min"
                propMinWidth1="66px"
                propWidth="64px"
                icon="/icon4.svg"
                text1="5K"
                propMinWidth2="20px"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-center mq825:gap-[25px]">
            <FrameComponent5 heading="New Releases" />
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
              <Card6 image="/image45@2x.png" april2023="14 April 2023" />
              <Card6 image="/image46@2x.png" april2023="22 April 2023" />
              <Card6 image="/image47@2x.png" april2023="13 April 2023" />
              <Card6 image="/image48@2x.png" april2023="19 April 2023" />
              <Card6 image="/image49@2x.png" april2023="11 April 2023" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="Must - Watch Movies" />
            <div className="self-stretch grid flex-row items-start justify-start gap-5 max-w-full grid-cols-[repeat(4,_minmax(270px,_1fr))] mq825:grid-cols-[minmax(270px,_1fr)] mq1250:justify-center mq1250:grid-cols-[repeat(2,_minmax(270px,_467px))]">
              <Card7 image="/image50@2x.png" info="1h 57min" text="20K" />
              <Card8 image="/image51@2x.png" text="1h 30min" text1="20K" />
              <Card7
                image="/image52@2x.png"
                info="1h 42min"
                propMinWidth="66px"
                propPadding="unset"
                text="20K"
              />
              <Card9
                image="/image53@2x.png"
                text="2h 10min"
                shape="/shape1.svg"
                text1="20K"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
