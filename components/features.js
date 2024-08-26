import Container10 from "./container10";
import PropTypes from "prop-types";

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full text-left text-29xl text-absolute-white font-manrope ${className}`}
    >
      <div className="w-[1597px] flex flex-col items-end justify-start gap-20 max-w-full mq450:gap-5 mq900:gap-10">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-3.5 max-w-full">
          <h1 className="m-0 w-[1297px] relative text-inherit leading-[150%] font-bold font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[43px] mq900:text-19xl mq900:leading-[58px]">
            Compare our plans and find the right one for you
          </h1>
          <div className="w-[1297px] relative text-lg leading-[150%] text-grey-60 inline-block max-w-full">
            Adap2Watch offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </div>
        </div>
        <div className="self-stretch rounded-xl border-black-15 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-lg text-grey-60">
          <div className="w-[1597px] bg-black-06 border-black-15 border-b-[1px] border-solid box-border overflow-x-auto flex flex-row items-start justify-start py-0 px-0 max-w-full text-xl text-absolute-white">
            <div className="flex-1 flex flex-row items-center justify-center p-[30px] box-border max-w-full">
              <div className="flex-1 relative leading-[150%] font-semibold inline-block max-w-full mq450:text-base mq450:leading-[24px]">
                Features
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] font-semibold font-manrope text-xl bg-[transparent] h-[30px] flex-1 relative leading-[150%] text-absolute-white text-left inline-block min-w-[204px] max-w-full p-0 mq450:text-base mq450:leading-[24px]"
                placeholder="Basic"
                type="text"
              />
            </div>
            <div className="border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] pl-[30px] pr-[200px] gap-2 max-w-full z-[1] mq450:flex-wrap mq450:pr-5 mq450:box-border">
              <div className="relative leading-[150%] font-semibold inline-block min-w-[89px] mq450:text-base mq450:leading-[24px]">
                Standard
              </div>
              <div className="rounded-sm bg-red-45 flex flex-row items-start justify-start py-1.5 px-2.5 text-sm">
                <div className="relative leading-[10px] font-medium inline-block min-w-[51px]">
                  Popular
                </div>
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] font-semibold font-manrope text-xl bg-[transparent] h-[30px] flex-1 relative leading-[150%] text-absolute-white text-left inline-block min-w-[204px] max-w-full p-0 mq450:text-base mq450:leading-[24px]"
                placeholder="Premium"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch border-black-15 border-b-[1px] border-solid box-border flex flex-row items-start justify-start flex-wrap content-start py-0 px-0 max-w-full [row-gap:20px]">
            <div className="flex-1 flex flex-row items-center justify-center p-[30px] box-border min-w-[340px] max-w-full mq450:min-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Price
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] min-w-[340px] max-w-full mq450:min-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-manrope text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-60 text-left inline-block min-w-[204px] max-w-full p-0"
                placeholder="$9.99/Month"
                type="text"
              />
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] min-w-[340px] max-w-full z-[1] mq450:min-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-manrope text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-60 text-left inline-block min-w-[204px] max-w-full p-0"
                placeholder="$12.99/Month"
                type="text"
              />
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] min-w-[340px] max-w-full mq450:min-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-manrope text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-60 text-left inline-block min-w-[204px] max-w-full p-0"
                placeholder="$14.99/Month"
                type="text"
              />
            </div>
          </div>
          <div className="w-[1597px] border-black-15 border-b-[1px] border-solid box-border overflow-x-auto flex flex-row items-start justify-start py-0 px-0 max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[57px] px-[30px] box-border max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Content
              </div>
            </div>
            <textarea
              className="[border:none] bg-[transparent] h-[141px] w-auto [outline:none] flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-start justify-start p-[30px] font-manrope font-medium text-lg text-grey-60 max-w-full"
              placeholder="Access to a wide selection of movies and shows, including some new releases."
              rows={7}
              cols={20}
            />
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full z-[1]">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </div>
            </div>
          </div>
          <Container10
            text="Devices"
            text1="Watch on one device simultaneously"
            text2="Watch on Two device simultaneously"
            text3="Watch on Four device simultaneously"
          />
          <Container10
            propAlignSelf="unset"
            propWidth="1597px"
            text="Free Trail"
            text1="7 Days"
            text2="7 Days"
            text3="7 Days"
          />
          <Container10
            propAlignSelf="stretch"
            propWidth="unset"
            text="Cancel Anytime"
            text1="Yes"
            text2="Yes"
            text3="Yes"
          />
          <Container10
            propAlignSelf="unset"
            propWidth="1597px"
            text="HDR"
            text1="No"
            text2="Yes"
            text3="Yes"
          />
          <Container10
            propAlignSelf="stretch"
            propWidth="unset"
            text="Dolby Atmos"
            text1="No"
            text2="Yes"
            text3="Yes"
          />
          <Container10
            propAlignSelf="unset"
            propWidth="1597px"
            text="Ad - Free"
            text1="No"
            text2="Yes"
            text3="Yes"
          />
          <Container10
            propAlignSelf="stretch"
            propWidth="unset"
            text="Offline Viewing"
            text1="No"
            text2="Yes, for select titles."
            text3="Yes, for all titles."
          />
          <div className="w-[1597px] border-black-15 border-[1px] border-solid box-border overflow-x-auto flex flex-row items-start justify-start py-0 px-0 max-w-full">
            <div className="flex-1 flex flex-row items-center justify-center p-[30px] box-border max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Family Sharing
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                No
              </div>
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full z-[1]">
              <input
                className="w-full [border:none] [outline:none] font-medium font-manrope text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-60 text-left inline-block min-w-[204px] max-w-full p-0"
                placeholder="Yes, up to 5 family members."
                type="text"
              />
            </div>
            <div className="flex-1 border-black-15 border-l-[1px] border-solid box-border flex flex-row items-center justify-center py-[30px] px-[29px] max-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                Yes, up to 6 family members.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
