import PropTypes from "prop-types";
import Link from "next/link";
const TopContent = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-[581px] absolute !m-[0] top-[0px] left-[0px] mq1825:h-auto mq1825:min-h-[581] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-center gap-5 mq1825:flex-wrap">
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-111@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-211@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-311@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-47@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-52@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-62@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-72@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-82@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-92@2x.png"
        />
      </div>
      <div className="absolute top-[220px] left-[0px] flex flex-row items-start justify-center gap-5 mq1825:flex-wrap">
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-101@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-112@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-121@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-131@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-141@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-151@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-161@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-171@2x.png"
        />
        <img
          className="h-[200px] w-[195.6px] relative rounded-xl object-cover min-h-[200px]"
          alt=""
          src="/image-181@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#141414,_rgba(20,_20,_20,_0))] w-full h-full z-[2]" />
      <header className="absolute top-[0px] left-[-1px] w-full h-[120px] flex flex-row items-center justify-between pt-[22px] px-[162px] pb-[23px] box-border gap-5 z-[5] text-left text-lg text-grey-75 font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq925:pl-[81px] mq925:pr-[81px] mq925:box-border">
        <img className="h-[40px] w-[199px] relative" alt="" src="logo.png" />
        {/* /logo.svg */}
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            alt=""
            src="/icon.svg"
          />
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            alt=""
            src="/icon-1.svg"
          />
        </div>
        <div className="!m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_281.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-hidden flex flex-row items-center justify-start py-[5px] pl-1.5 pr-9 gap-[30px]">
          <button className="cursor-pointer border-black-10 border-[1px] border-solid py-3 px-[23px] bg-black-10 w-[98px] rounded-lg box-border flex flex-row items-center justify-start hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[50px]">
              <Link className="no-underline text-current" href="/">Home</Link>
            </div>
          </button>
          <div className="relative leading-[150%] whitespace-nowrap"><Link className="no-underline text-current" href="movies-shows-page">{`Movies & Shows`}</Link></div>
          <div className="relative leading-[150%] inline-block min-w-[68px]">
          <Link className="no-underline text-current" href="support-page-desktop">Support</Link>
          </div>
          <div className="relative leading-[150%] inline-block min-w-[116px]">
          <Link className="no-underline text-current" href="subscription-page-desktop">Subscriptions</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

TopContent.propTypes = {
  className: PropTypes.string,
};

export default TopContent;
