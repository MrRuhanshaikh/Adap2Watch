import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";

const TopContent = ({ className = "" }) => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <div className={`w-full h-[600px] absolute !m-[0] top-[0px] left-[0px] ${className}`}>
      <div className="scroll-wrapper">
        <div className="animate-scroll">
          {/* Duplicate images for a seamless scroll */}
          <div className="h-[880px] overflow-y-hidden flex flex-row items-start flex-wrap justify-center gap-5">
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
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-191@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-201@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-212@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-221@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-231@2x.png"
        />
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
           <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-321@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-331@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-341@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-351@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-361@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-191@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-201@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-212@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-221@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-231@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-241@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-251@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-261@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-271@2x.png"
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
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-281@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-291@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-301@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-312@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-321@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-331@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-341@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-351@2x.png"
        />
        <img
          className="h-[200px] w-[195px] relative rounded-xl object-cover min-w-[185px]"
          alt=""
          src="/image-361@2x.png"
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
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#141414,_rgba(20,_20,_20,_0))] w-full h-full z-[2]" />
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
        <div className="hidden lg:flex !m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_281.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-hidden flex-row items-center justify-start py-[5px] pl-1.5 pr-9 gap-[30px]">
          <button className="cursor-pointer border-black-10 border-[1px] border-solid py-3 px-[23px] bg-black-10 w-[98px] rounded-lg box-border flex flex-row items-center justify-start hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left inline-block min-w-[50px]">
              <Link className="no-underline text-current" href="/">Home</Link>
            </div>
          </button>
          <div className="relative leading-[150%] whitespace-nowrap">
            <Link className="no-underline text-current" href="movies-shows-page">{`Movies & Shows`}</Link>
          </div>
          <div className="relative leading-[150%] inline-block min-w-[68px]">
            <Link className="no-underline text-current" href="support-page-desktop">Support</Link>
          </div>
          <div className="relative leading-[150%] inline-block min-w-[116px]">
            <Link className="no-underline text-current" href="subscription-page-desktop">Subscriptions</Link>
          </div>
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
    </div>
  );
};

TopContent.propTypes = {
  className: PropTypes.string,
};

export default TopContent;
