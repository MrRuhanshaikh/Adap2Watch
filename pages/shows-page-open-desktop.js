import Navbar1 from "../components/navbar1";
import Hero from "../components/hero";
import Feature from "../components/feature";
import SubContainer1 from "../components/sub-container1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const ShowsPageOpenDesktop = () => {
  return (
    <div className="w-full relative bg-black-08 overflow-hidden flex flex-col items-start justify-start gap-[50px] leading-[normal] tracking-[normal] mq825:gap-[25px]">
      <Navbar1 />
      <Hero
        iconBackgroundImage="url('/container1@3x.png')"
        heading="Stranger Things"
        iconWidth="1254px"
        paragraph="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        propWidth="1254px"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[100px] pl-5 pr-[25px] box-border max-w-full mq825:pb-[27px] mq825:box-border mq1250:pb-[42px] mq1250:box-border">
        <div className="w-[1601px] flex flex-row items-start justify-center gap-5 max-w-full mq1575:flex-wrap">
          <Feature />
          <SubContainer1 />
        </div>
      </section>
      <FrameComponent
        image="/image-10@2x.png"
        image1="/image-11@2x.png"
        image2="/image-12@2x.png"
        image3="/image-13@2x.png"
        image4="/image-14@2x.png"
        image5="/image-15@2x.png"
        image6="/image-16@2x.png"
        image7="/image-17@2x.png"
        image8="/image-18@2x.png"
        image9="/image-19@2x.png"
        image10="/image-20@2x.png"
        image11="/image-21@2x.png"
        image12="/image-22@2x.png"
        image13="/image-23@2x.png"
        image14="/image-24@2x.png"
        image15="/image-25@2x.png"
        image16="/image-26@2x.png"
        image17="/image-27@2x.png"
        image18="/image-28@2x.png"
        image19="/image-29@2x.png"
        image20="/image-30@2x.png"
        image21="/image-31@2x.png"
        image22="/image-32@2x.png"
        image23="/image-33@2x.png"
        image24="/image-34@2x.png"
        image25="/image-35@2x.png"
        image26="/image-36@2x.png"
        image27="/image-37@2x.png"
        image28="/image-38@2x.png"
        image29="/image-39@2x.png"
        image30="/image-40@2x.png"
        image31="/image-41@2x.png"
        image32="/image-42@2x.png"
        image33="/image-43@2x.png"
        image34="/image-44@2x.png"
        image35="/image-45@2x.png"
      />
      <Footer />
    </div>
  );
};

export default ShowsPageOpenDesktop;
