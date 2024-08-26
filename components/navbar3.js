import PropTypes from "prop-types";
import Link from "next/link";
const Navbar3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between pt-[22px] px-[162px] pb-[23px] box-border relative min-h-[120px] gap-5 text-left text-lg text-grey-75 font-manrope mq825:flex-wrap mq825:pl-[81px] mq825:pr-[81px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <img className="h-[40px] w-[199px] relative" alt="" src="/logo.png" />
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
      <div className="!m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_296.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-x-auto flex flex-row items-center justify-start py-[5px] px-9 gap-[30px]">
        <div className="relative leading-[150%] inline-block min-w-[49px]">
        <Link className="no-underline text-current" href="/">Home</Link>
        </div>
        <div className="rounded-lg bg-black-10 border-black-10 border-[1px] border-solid flex flex-row items-center justify-start py-3 px-[23px] whitespace-nowrap text-absolute-white">
          <div className="relative leading-[150%] font-medium">{`Movies & Shows`}</div>
        </div>
        <div className="relative leading-[150%] inline-block min-w-[68px]">
        <Link className="no-underline text-current" href="support-page-desktop">Support</Link>
        </div>
        <div className="relative leading-[150%] inline-block min-w-[116px]">
        <Link className="no-underline text-current" href="subscription-page-desktop">Subscriptions</Link>
        </div>
      </div>
    </div>
  );
};

Navbar3.propTypes = {
  className: PropTypes.string,
};

export default Navbar3;
