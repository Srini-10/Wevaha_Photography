import React, { useState, useEffect } from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Arrow_Left from "./assets/Left_Arrow.svg";
import Arrow_Right from "./assets/Right_Arrow.svg";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // Track navbar expansion

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
      if (window.scrollY === 0) {
        setIsExpanded(false); // Reset expansion when scrolled back to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbarExpansion = () => {
    if (!isAtTop) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`h-[7vh] w-full absolute z-[9999999999999999999999] mt-7 flex items-center justify-between text-black transition-all duration-1000 ease-in-out ${
        isAtTop ? "scroll-smooth" : "h-[5vh]"
      }`}
      onClick={toggleNavbarExpansion}
    >
      <div
        className={`${
          isAtTop
            ? "hover:pl-8 min-w-[50px] px-6 transition-all duration-1000 ease-in-out"
            : "max-h-[55px] min-h-[55px] shadow-md rounded-full min-w-[55px] ml-2 p-3 fixed transition-all duration-1000 ease-in-out"
        } h-full p-1.5 items-center bg-white rounded-r-full transition-all duration-1000 ease-in-out`}
      >
        <Link to={"/"}>
          <img className="h-full w-full cursor-pointer" src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul
        className={`${
          isAtTop
            ? "hover:px-10 gap-5 px-8 right-0 shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out"
            : `gap-5 cursor-pointer px-8 ${
                isExpanded ? "pl-12 right-0" : "pl-12 right-[-33vw]"
              } group cursor-auto shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out`
        } flex h-[55px] font-medium items-center rounded-l-full bg-white transition-all duration-1000 ease-in-out`}
      >
        <li
          className={`relative link-item group flex items-center ${
            isExpanded ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Link
            className="cursor-pointer flex gap-2 items-center text-black pr-4 py-2 rounded-lg hover:bg-rainbow"
            to={"/"}
          >
            {!isExpanded && (
              <img
                className="w-[18px] group-hover:mr-2 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                src={Arrow_Left}
                alt="Left Arrow"
              />
            )}
            Menu
            {isExpanded && (
              <div className="flex">
                <img
                  className="w-[18px] group-hover:-mr-1 mr-0.5 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                  src={Arrow_Right}
                  alt="Right Arrow"
                />
                <span className="ml-7 -mr-6 min-h-full min-w-[1.5px] bg-gray-300"></span>
              </div>
            )}
          </Link>
        </li>
        <li className="relative link-item">
          <Link
            className="cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-rainbow"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="relative link-item">
          <Link
            className="cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-rainbow"
            to={"/gallery"}
          >
            Gallery
          </Link>
        </li>
        <li className="relative link-item">
          <Link
            className="cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-rainbow"
            to={"/about_us"}
          >
            About Us
          </Link>
        </li>
        <li className="relative link-item">
          <Link
            className="cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-rainbow"
            to={"/contact_us"}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
