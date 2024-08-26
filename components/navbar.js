import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Navbar = ({ className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className={`self-stretch h-[120px] flex flex-row items-center justify-between pt-[22px] px-[162px] pb-[23px] box-border relative gap-5 text-left text-lg text-grey-75 font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[81px] mq825:pr-[81px] mq825:box-border ${className}`}
    >
      <img
        className="h-[40px] w-[199px] relative"
        loading="lazy"
        alt="Logo"
        src="/logo.png"
      />
      <div className="flex flex-row items-center justify-start gap-[30px]">
        <img
          className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
          loading="lazy"
          alt="Icon"
          src="/icon.svg"
        />
        <img
          className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
          alt="Icon 1"
          src="/icon-1.svg"
        />
      </div>
      <div className="!m-[0] absolute top-[calc(50%_-_42px)] left-[calc(50%_-_296.5px)] rounded-xl bg-black-06 border-black-12 border-[4px] border-solid overflow-hidden flex flex-row items-center justify-start py-[5px] px-9 gap-[30px]">
        <div className="relative leading-[150%] inline-block min-w-[49px]">
          <Link className="no-underline text-current" href="/">
            Home
          </Link>
        </div>

        {/* Dropdown Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="cursor-pointer border-black-10 border-[1px] border-solid py-3 px-[23px] bg-black-10 rounded-lg flex flex-row items-center justify-start whitespace-nowrap hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-lg leading-[150%] font-medium font-manrope text-absolute-white text-left">
              Movies & Shows
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-[150px] bg-black-06 text-white rounded shadow-lg">
              <Link
                href="/movies-page-open-desktop"
                className="block px-4 py-2 hover:bg-black-12"
              >
                Movies
              </Link>
              <Link
                href="/shows-page-open-desktop"
                className="block px-4 py-2 hover:bg-black-12"
              >
                Shows
              </Link>
            </div>
          )}
        </div>

        <div className="relative leading-[150%] inline-block min-w-[68px]">
          <Link className="no-underline text-current" href="support-page-desktop">
            Support
          </Link>
        </div>
        <div className="relative leading-[150%] inline-block min-w-[116px]">
          <Link
            className="no-underline text-current"
            href="subscription-page-desktop"
          >
            Subscriptions
          </Link>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
