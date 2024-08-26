import Navbar3 from "../components/navbar3";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import BackgroundImageContainer from "../components/background-image-container";
import Footer from "../components/footer";

const MoviesShowsPageDesktop = () => {
  return (
    <div className="w-full relative bg-black-08 overflow-hidden flex flex-col items-start justify-start gap-[150px] leading-[normal] tracking-[normal] mq825:gap-[37px] mq1250:gap-[75px]">
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[30px] box-border gap-[50px] max-w-full mq825:gap-[25px]">
        <Navbar3 />
        <FrameComponent6 />
      </div>
      <FrameComponent7 />
      <FrameComponent8 />
      <BackgroundImageContainer />
      <Footer />
    </div>
  );
};

export default MoviesShowsPageDesktop;