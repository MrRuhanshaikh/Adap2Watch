import TopContent from "../components/top-content";
import FrameComponent1 from "../components/frame-component1";
import Container11 from "../components/container11";
import Container from "../components/container";
import FAQItemOpen from "../components/f-a-q-item-open";
import FAQItem from "../components/f-a-q-item";
import Card2 from "../components/card2";
import Footer from "../components/footer";

const HomePageDesktop = () => {
  return (
    <div className="overflow-x-hidden w-full relative bg-black-08 flex flex-col items-start justify-start gap-3.5 leading-[normal] tracking-[normal] text-center text-[58px] text-absolute-white font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch h-[780px] sm:h-[880px] flex flex-col items-start justify-start relative gap-5">
          <img
            className="w-full h-full absolute !m-[0] top-[calc(50%_-_430px)] left-[0px] rounded-xl object-cover mix-blend-overlay z-[1]"
            alt=""
            src="/image2@2x.png"
          />
          <TopContent />
          <img
            className="hidden sm:block animate-pulse w-[200px] h-[200px] above-350px:w-[300px] above-350px:h-[300px] sm:w-[400px] sm:h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[4]"
            alt=""
            src="/abstract-design.svg"
          />
          <img
            className="sm:hidden w-[200px] h-[200px] above-350px:w-[300px] above-350px:h-[300px] sm:w-[400px] sm:h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[4]"
            alt=""
            src="/abstract-design.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ">
          <h1 className="mt-10 w-[1096px] relative text-[28px] sm:text-inherit leading-[150%] font-bold font-[inherit] inline-block shrink-0 max-w-full z-[5] ">
            The Best Streaming Experience
          </h1>
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-center pt-0 pb-[136px] pl-5 pr-[21px] box-border max-w-full mq925:pb-6 mq925:box-border mq1350:pb-[37px] mq1350:box-border">
        <section className="w-[1597px] flex flex-col items-end justify-start gap-[50px] max-w-full text-left text-lg text-absolute-white font-manrope ">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[50px] pl-[21px] pr-5 box-border max-w-full text-center text-grey-60">
            <div className="w-[1096px] flex flex-col items-start justify-start gap-[50px] max-w-full ">
              <div className="self-stretch relative leading-[150%]">
                Adap2Watch is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                Adap2Watch, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] py-[18px] px-6 bg-red-45 rounded-lg flex flex-row items-start justify-start gap-1 whitespace-nowrap hover:bg-red-100">
                  <img
                    className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                    alt=""
                    src="/icon-2.svg"
                  />
                  <div className="relative text-lg leading-[150%] font-semibold font-manrope text-absolute-white text-left">
                    Start Watching Now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <FrameComponent1 />
          <Container11 />
          <div className="self-stretch flex flex-col items-center justify-start gap-10 sm:gap-20 max-w-full mq450:gap-5 mq925:gap-10">
            <Container />
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start sm:gap-20 max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start sm:min-w-[493px] max-w-full mq925:min-w-full">
                <FAQItemOpen />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
                <FAQItem number="02" heading="How much does Adap2Watch cost?" />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border " />
                <FAQItem
                  number="03"
                  heading="What content is available on Adap2Watch?"
                  // propMinWidth="339px"
                />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
                <FAQItem
                  number="04"
                  heading="How can I watch Adap2Watch?"
                  // propMinWidth="239px"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start sm:min-w-[493px] max-w-full mq925:min-w-full">
                <FAQItem
                  number="05"
                  heading="How do I sign up for Adap2Watch?"
                  // propMinWidth="265px"
                />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
                <FAQItem
                  number="06"
                  heading="What is the Adap2Watch free trial?"
                  // propMinWidth="274px"
                />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
                <FAQItem
                  number="07"
                  heading="How do I contact Adap2Watch customer support?"
                  // propMinWidth="356px"
                />
                <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
                <FAQItem
                  number="08"
                  heading="What are the Adap2Watch payment methods?"
                  // propMinWidth="356px"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-10 sm:gap-20 max-w-full text-19xl mq450:gap-5 mq925:gap-10">
            <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 :flex-wrap">
              <div className="w-[1259px] flex flex-col items-start justify-start gap-3.5 max-w-full">
                <h1 className="m-0 self-stretch relative text-[28px] sm:text-inherit leading-[150%] font-bold font-[inherit] ">
                  Choose the plan that's right for you
                </h1>
                <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
                  Join Adap2Watch and select from our flexible subscription
                  options tailored to suit your viewing preferences. Get ready
                  for non-stop entertainment!
                </div>
                <div className="sm:hidden rounded-3xs bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px] text-lg text-grey-60">
                  <button className="cursor-pointer [border:none] py-3.5 px-6 bg-black-12 rounded-3xs flex flex-row items-center justify-center hover:bg-dimgray-200">
                    <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[70px]">
                      Monthly
                    </div>
                  </button>
                  <div className="rounded-81xl flex flex-row items-center justify-center py-3.5 px-6">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[51px]">
                      Yearly
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hidden sm:block rounded-3xs bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px] text-lg text-grey-60">
                <button className="cursor-pointer [border:none] py-3.5 px-6 bg-black-12 rounded-3xs flex flex-row items-center justify-center hover:bg-dimgray-200">
                  <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[70px]">
                    Monthly
                  </div>
                </button>
                <div className="rounded-81xl flex flex-row items-center justify-center py-3.5 px-6">
                  <div className="relative leading-[150%] font-medium inline-block min-w-[51px]">
                    Yearly
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full">
              <Card2
                heading="Basic Plan"
                paragraph="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
                number="$9.99"
              />
              <Card2
                heading="Standard Plan"
                paragraph="Access to a wider selection of movies and shows, including most new releases and exclusive content"
                number="$12.99"
                propMinWidth="127px"
              />
              <Card2
                heading="Premium Plan"
                paragraph="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
                number="$14.99"
                propMinWidth="126px"
              />
            </div>
          </div>
          <div className="self-stretch h-[313px] rounded-xl bg-black-06 border-black-15 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-29xl :h-auto">
            <div className="mt-[-41px] w-[1646px] flex flex-row items-start justify-start py-[141px] px-20 box-border relative gap-[100px] shrink-0 max-w-[104%] mq450:gap-[25px] mq450:pt-[92px] mq450:pb-[92px] mq450:box-border mq925:gap-[50px] mq1350:pl-10 mq1350:pr-10 mq1350:box-border :flex-wrap">
              <div className="flex-1 !m-[0] absolute w-[calc(100%_-_50px)] top-[0px] right-[50px] left-[0px] flex flex-row items-start justify-center gap-5 :flex-wrap">
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-10@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-11@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-12@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-13@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-14@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-15@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-16@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-17@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
              <div className="flex-1 !m-[0] absolute w-[calc(100%_-_50px)] top-[103.8px] right-[50px] left-[0px] flex flex-row items-start justify-center gap-5 :flex-wrap">
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-19@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-20@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-21@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-23@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-24@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-25@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-26@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-27@2x.png"
                />
              </div>
              <div className="flex-1 !m-[0] absolute w-[calc(100%_-_50px)] right-[50px] bottom-[103.7px] left-[0px] flex flex-row items-start justify-center gap-5 :flex-wrap">
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-28@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-29@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-30@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-31@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-32@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-33@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-34@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-35@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-36@2x.png"
                />
              </div>
              <div className="flex-1 !m-[0] absolute w-[calc(100%_-_50px)] right-[50px] bottom-[-0.1px] left-[0px] flex flex-row items-start justify-center gap-5 :flex-wrap">
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-37@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-38@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-39@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-40@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-41@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-42@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-43@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-44@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-[165px] overflow-hidden max-h-full object-cover min-w-[162px] min-h-[84px]"
                  alt=""
                  src="/image-45@2x.png"
                />
              </div>
              <div className="h-[344px] w-full absolute !m-[0] right-[0px] bottom-[25px] left-[0px] [background:linear-gradient(89.97deg,_#0f0f0f_2.08%,_rgba(20,_15,_15,_0.97)_15.63%,_rgba(34,_14,_14,_0.91)_28.13%,_rgba(229,_0,_0,_0))] mix-blend-normal z-[1]" />
              <div className="w-[1148px] flex flex-col items-start justify-start gap-3.5 max-w-full hidden sm:block">
                <h1 className="m-0 self-stretch relative text-[28px] sm:text-inherit leading-[150%] font-bold font-[inherit] z-[2]">
                  Start your free trial today!
                </h1>
                <div className="self-stretch relative text-lg leading-[150%] text-grey-60 z-[2]">
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of Adap2Watch.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                <button className="cursor-pointer [border:none] py-[18px] px-6 bg-red-45 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-red-100">
                  <div className="relative text-lg leading-[150%] font-semibold font-manrope text-absolute-white text-left">
                    Start a Free Trail
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePageDesktop;
