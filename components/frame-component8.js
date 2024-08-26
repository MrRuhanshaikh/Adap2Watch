import FrameComponent5 from "./frame-component5";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card7 from "./card7";
import Card9 from "./card9";
import Card8 from "./card8";
import PropTypes from "prop-types";
const FrameComponent8 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full text-center text-xl text-absolute-white font-manrope ${className}`}
    >
      <div className="h-[3318px] w-[1597px] relative max-w-full mq1575:h-auto mq1575:min-h-[3318]">
        <div className="absolute top-[0px] left-[50px] rounded-lg bg-red-45 flex flex-row items-start justify-start py-2.5 px-6">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[64px] mq450:text-base mq450:leading-[24px]">
            Shows
          </div>
        </div>
        <div className="absolute top-[20px] left-[0px] rounded-xl border-black-15 border-[1px] border-solid box-border w-full flex flex-col items-start justify-start py-12 px-[49px] gap-[100px] max-w-full z-[1] text-left text-19xl mq825:gap-[50px] mq1250:pl-6 mq1250:pr-6 mq1250:box-border mq450:gap-[25px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="Our Genres" />
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] mq825:gap-[15px]">
              <Card3
                image="/image54@2x.png"
                image1="/image55@2x.png"
                image2="/image56@2x.png"
                image3="/image57@2x.png"
                heading="Action"
                icon="/icon-51.svg"
              />
              <Card3
                image="/image58@2x.png"
                image1="/image59@2x.png"
                image2="/image60@2x.png"
                image3="/image61@2x.png"
                heading="Adventure"
                icon="/icon-51.svg"
              />
              <Card3
                image="/image62@2x.png"
                image1="/image63@2x.png"
                image2="/image64@2x.png"
                image3="/image65@2x.png"
                heading="Comedy"
                icon="/icon-51.svg"
              />
              <Card3
                image="/image66@2x.png"
                image1="/image67@2x.png"
                image2="/image68@2x.png"
                image3="/image69@2x.png"
                heading="Drama"
                icon="/icon-51.svg"
              />
              <Card3
                image="/image70@2x.png"
                image1="/image71@2x.png"
                image2="/image72@2x.png"
                image3="/image73@2x.png"
                heading="Horror"
                icon="/icon-51.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1575:flex-wrap">
              <div className="w-[1140px] flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 box-border max-w-full">
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
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] max-w-full">
              <Card4
                image="/image74@2x.png"
                image1="/image75@2x.png"
                image2="/image76@2x.png"
                image3="/image77@2x.png"
                heading="Action"
                icon="/icon5.svg"
              />
              <Card4
                image="/image78@2x.png"
                image1="/image79@2x.png"
                image2="/image80@2x.png"
                image3="/image81@2x.png"
                heading="Adventure"
                icon="/icon5.svg"
              />
              <Card4
                image="/image82@2x.png"
                image1="/image83@2x.png"
                image2="/image84@2x.png"
                image3="/image85@2x.png"
                heading="Comedy"
                icon="/icon5.svg"
              />
              <Card4
                image="/image86@2x.png"
                image1="/image87@2x.png"
                image2="/image88@2x.png"
                image3="/image89@2x.png"
                heading="Drama"
                icon="/icon5.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="Trending Shows Now" />
            <div className="self-stretch grid flex-row items-start justify-start py-0 px-0 box-border gap-5 max-w-full grid-cols-[repeat(4,_minmax(269px,_1fr))] mq825:grid-cols-[minmax(269px,_1fr)] mq1250:justify-center mq1250:grid-cols-[repeat(2,_minmax(269px,_467px))]">
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image90@2x.png"
                propHeight="348px"
                text="8h 20min"
                propMinWidth1="70px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="4 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image91@2x.png"
                propHeight="348px"
                text="12h 23min"
                propMinWidth1="75px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="5 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image92@2x.png"
                propHeight="348px"
                text="14h 30min"
                propMinWidth1="76px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="3 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image93@2x.png"
                propHeight="348px"
                text="7h 40min"
                propMinWidth1="69px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="2 Season"
                propMinWidth2="69px"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="New Released Shows" />
            <div className="self-stretch grid flex-row items-start justify-start py-0 px-0 box-border gap-5 max-w-full grid-cols-[repeat(4,_minmax(269px,_1fr))] mq825:grid-cols-[minmax(269px,_1fr)] mq1250:justify-center mq1250:grid-cols-[repeat(2,_minmax(269px,_467px))]">
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image94@2x.png"
                propHeight="348px"
                text="12h 23min"
                propMinWidth1="75px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="5 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image95@2x.png"
                propHeight="348px"
                text="7h 40min"
                propMinWidth1="69px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="2 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image96@2x.png"
                propHeight="348px"
                text="8h 20min"
                propMinWidth1="70px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="4 Season"
                propMinWidth2="69px"
              />
              <Card5
                propFlex="unset"
                propMinWidth="unset"
                image="/image97@2x.png"
                propHeight="348px"
                text="10h 30min"
                propMinWidth1="76px"
                propWidth="unset"
                icon="/icon6.svg"
                text1="3 Season"
                propMinWidth2="69px"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <FrameComponent5 heading="Must - Watch Shows" />
            <div className="self-stretch grid flex-row items-start justify-start py-0 px-0 box-border gap-5 max-w-full grid-cols-[repeat(4,_minmax(269px,_1fr))] mq825:grid-cols-[minmax(269px,_1fr)] mq1250:justify-center mq1250:grid-cols-[repeat(2,_minmax(269px,_467px))]">
              <Card7
                image="/image98@2x.png"
                info="7h 40min"
                propMinWidth="69px"
                propPadding="0px 0px 0px 0px"
                text="12K"
              />
              <Card9
                image="/image99@2x.png"
                text="12h 23min"
                propMinWidth="75px"
                shape="/shape.svg"
                text1="28K"
              />
              <Card8
                image="/image100@2x.png"
                propWidth="unset"
                text="10h 30min"
                propMinWidth="67px"
                text1="2K"
                propMinWidth1="17px"
              />
              <Card7
                image="/image101@2x.png"
                info="8h 20min"
                propMinWidth="70px"
                propPadding="unset"
                text="32K"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
