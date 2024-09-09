import Card2 from "./card2";
import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
const FrameComponent4 = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 pl-[161px] pr-0 box-border gap-[100px] max-w-full text-left text-29xl text-absolute-white font-manrope mq450:gap-[25px] mq900:gap-[50px] mq900:pl-10 mq900:box-border mq1325:pl-20 mq1325:box-border ${className}`}
    >
      <header className="absolute top-[0px] left-[-1px] w-full h-[120px] flex flex-row items-center justify-between px-[20px] lg:px-[162px] pt-[22px] pb-[23px] box-border gap-5 z-[5] text-left text-lg text-grey-75 font-manrope">
        {/* Logo */}
        <div className="flex items-center">
        <Link className="no-underline text-current" href="/"><img className="hidden sm:block h-[40px] w-[199px] relative" alt="" src="logo.png" /></Link>
        <Link className="no-underline text-current" href="/"><img className="sm:hidden h-[40px] w-[40px] relative" alt="" src="favicon.ico" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row items-center justify-start gap-[30px]">
          <img className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]" alt="" src="/icon.svg" />
          <img className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]" alt="" src="/icon-1.svg" />
        </div>

        {/* Desktop Center Menu */}
        <div className="hidden lg:flex !m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_281.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-hidden flex-row items-center justify-start py-[5px] pl-1.5 pr-1 gap-[30px]">
         <div className="relative leading-[150%] inline-block ml-5">
              <Link className="no-underline text-current" href="/">Home</Link>
            </div>
          <div className="relative leading-[150%] whitespace-nowrap">
            <Link className="no-underline text-current" href="movies-shows-page">{`Movies & Shows`}</Link>
          </div>
          <div className="relative leading-[150%] inline-block min-w-[68px]">
            <Link className="no-underline text-current" href="support-page-desktop">Support</Link>
          </div>
          <button className="cursor-pointer border-black-10 border-[1px] border-solid py-3 px-[23px] bg-black-10 w-[170px] rounded-lg box-border flex flex-row items-center justify-start hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border">
          <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[50px]">
            <Link className="no-underline text-current" href="subscription-page-desktop">Subscriptions</Link>
          </div>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden relative z-[10]">
          <button
            id="hamburger-menu"
            className="flex items-center justify-center p-2 bg-transparent"
            onClick={toggleMobileMenu} // Toggle the menu on click
          >
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#D70040" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          {/* Mobile Menu Dropdown with Slide Effect */}
          <div
            id="mobile-menu"
            className={`fixed top-0 right-0 h-full bg-black-06  w-64 bg-blackshadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {/* Menu Links */}
            <div className="mt-16">
              <Link className="block px-4 py-2 text-white no-underline " href="/">Home</Link>
              <Link className="block px-4 py-2 text-white no-underline " href="movies-shows-page">{`Movies & Shows`}</Link>
              <Link className="block px-4 py-2 text-white no-underline " href="support-page-desktop">Support</Link>
              <Link className="block px-4 py-2 text-white no-underline " href="subscription-page-desktop">Subscriptions</Link>
              <Link className="block px-4 py-2 text-white no-underline " href="movies-page-open-desktop">Play Movie</Link>
              <Link className="block px-4 py-2 text-white no-underline " href="shows-page-open-desktop">Play Show</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[1616px] mt-48 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-20 max-w-full mq450:gap-5 mq900:gap-10">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1700:flex-wrap">
          <div className="w-[1259px] flex flex-col items-start justify-start gap-3.5 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[43px] mq900:text-19xl mq900:leading-[58px]">
              Choose the plan that's right for you
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] text-grey-60">
              Join Adap2Watch and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </div>
          </div>
          <div className="rounded-3xs bg-black-06 border-black-15 border-[1px] border-solid flex flex-row items-center justify-start py-2 px-[9px] text-lg text-grey-60">
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
            propMinWidth="111px"
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
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
