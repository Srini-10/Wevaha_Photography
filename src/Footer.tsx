import React from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Facebook from "./assets/Icons/Facebook_Icon.svg";
import Instagram from "./assets/Icons/Instagram.svg";
import Youtube from "./assets/Icons/Youtube.svg";
import Pinterest from "./assets/Icons/Pinterest.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full\ sm:h-[60vh] lg:mt-0 mt-[5vh] sm:mt-[5vh] lg:h-[70vh] pb-10 flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#fff7e4] scroll-smooth transition-all duration-1000 ease-in-out">
      <img
        loading="lazy"
        className="sm:w-[25vw] w-[40vw] lg:w-[15vw] pt-32"
        src={Logo}
        alt="Wevaha Logo"
      />

      <p className="lg:w-[40vw] w-[80vw] sm:w-[60vw] sm:mt-[-20px] lg:mt-[-30px] pb-2 sm:pb-2 lg:pb-4 text-center text-yellow-900 text-[10px] sm:text-[10.5px] lg:text-[13px]">
        Welcome we specialize in Capturing your cherished moments for Weddings,
        Receptions, All Kind of Events & Commercial shoots and etc..
      </p>

      <div className="w-[20vw] h-[0.5px] rounded-full bg-yellow-700"></div>

      <div className="flex justify-between pb-12 pt-4 items-center sm:w-[20vw] w-[33vw] lg:w-[13vw]">
        <Link to={"/"} className="cursor-pointer">
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Facebook}
            alt="Facebook"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Instagram}
            alt="Instagram"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Youtube}
            alt="YouTube"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            loading="lazy"
            className="lg:w-7 lg:h-7 sm:w-6 sm:h-6 w-6 h-6 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Pinterest}
            alt="Pinterest"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
