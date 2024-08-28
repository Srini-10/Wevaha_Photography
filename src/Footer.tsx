import React from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Facebook from "./assets/Facebook_Icon.svg";
import Instagram from "./assets/Instagram.svg";
import Youtube from "./assets/Youtube.svg";
import Pinterest from "./assets/Pinterest.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] pb-10 flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#fff7e1] scroll-smooth transition-all duration-1000 ease-in-out">
      {/* Logo */}
      <img className="w-[15vw] pt-32" src={Logo} alt="Wevaha Logo" />

      {/* Description */}
      <p className="w-[40vw] mt-[-30px] pb-4 text-center text-yellow-900 text-[13px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloribus,
        aspernatur ea perferendis reiciendis laboriosam minus repellat quibusdam
        error rem sint accusamus itaque.
      </p>

      {/* Divider Line */}
      <div className="w-[20vw] h-[0.5px] rounded-full bg-yellow-700"></div>

      {/* Social Media Icons */}
      <div className="flex justify-between pb-12 pt-4 items-center w-[13vw]">
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-7 h-7 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Facebook}
            alt="Facebook"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-7 h-7 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Instagram}
            alt="Instagram"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-7 h-7 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Youtube}
            alt="YouTube"
          />
        </Link>
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-7 h-7 rounded-full hover:scale-[1.05] transition-all duration-300 ease-in-out"
            src={Pinterest}
            alt="Pinterest"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
