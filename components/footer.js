import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-black-06 flex flex-col items-center justify-start pt-[100px] px-5 pb-[50px] box-border gap-[100px] max-w-full text-left text-xl text-absolute-white font-manrope mq450:gap-[25px] mq925:gap-[50px] mq925:pt-[65px] mq925:pb-8 mq925:box-border ${className}`}
    >
      <div className="w-[1596px] flex flex-row items-start justify-center flex-wrap content-start gap-[30px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Home
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-lg text-grey-60">
            <div className="self-stretch relative leading-[150%] font-medium">
              Categories
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Devices
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Pricing
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              FAQ
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Movies
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-lg text-grey-60">
            <div className="self-stretch relative leading-[150%] font-medium">
              Gernes
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Trending
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              New Release
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Popular
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Shows
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-lg text-grey-60">
            <div className="self-stretch relative leading-[150%] font-medium">
              Gernes
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Trending
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              New Release
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Popular
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Support
          </div>
          <div className="self-stretch relative text-lg leading-[150%] font-medium text-grey-60">
            Contact Us
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Subscription
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-lg text-grey-60">
            <div className="self-stretch relative leading-[150%] font-medium">
              Plans
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Features
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[236px] max-w-[241px]">
          <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
            Connect With Us
          </div>
          <div className="w-[196px] flex flex-row items-start justify-start gap-3.5">
            <div className="flex-1 rounded-lg bg-black-10 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3.5 px-[15px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-15.svg"
              />
            </div>
            <div className="flex-1 rounded-lg bg-black-10 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3.5 px-[15px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-16.svg"
              />
            </div>
            <div className="flex-1 rounded-lg bg-black-10 border-black-15 border-[1px] border-solid flex flex-row items-start justify-start py-3.5 px-[15px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-17.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1596px] flex flex-col items-start justify-start gap-6 max-w-full text-lg text-grey-60">
        <div className="self-stretch h-px relative border-black-15 border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 mq925:flex-wrap">
          <div className="relative leading-[150%]">
            @2023 streamvib, All Rights Reserved
          </div>
          <div className="h-[27px] w-[411px] flex flex-row items-start justify-start gap-5 max-w-full">
            <div className="flex-1 relative leading-[150%] inline-block min-w-[108px] shrink-0">
              Terms of Use
            </div>
            <div className="h-7 w-px relative border-black-15 border-r-[1px] border-solid box-border" />
            <div className="flex-1 relative leading-[150%] inline-block min-w-[112px] shrink-0">
              Privacy Policy
            </div>
            <div className="h-7 w-px relative border-black-15 border-r-[1px] border-solid box-border" />
            <div className="flex-1 relative leading-[150%] inline-block min-w-[111px] shrink-0">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
