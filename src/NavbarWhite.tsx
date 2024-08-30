import React, { useState, useEffect } from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Arrow_Left from "./assets/Left_Arrow_white.svg";
import Arrow_Right from "./assets/Right_Arrow_white.svg";
import { Link } from "react-router-dom";
import "./index.css";

const NavbarWhite = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`navbar-container h-[7vh] w-full absolute mt-7 flex items-center justify-between text-black transition-all duration-1000 ease-in-out ${
          isAtTop ? "scroll-smooth" : "h-[5vh]"
        }`}
        onClick={toggleNavbarExpansion}
      >
        <div
          className={`${
            isAtTop
              ? "hover:pl-8 min-w-[50px] shadow-md bg-black border-[2px] border-black px-6 transition-all duration-1000 ease-in-out"
              : "max-h-[55px] min-h-[55px] bg-white border-[4px] border-black shadow-md rounded-full min-w-[55px] ml-2 p-3 fixed transition-all duration-1000 ease-in-out"
          } h-full p-[8px] cursor-pointer items-center rounded-r-full transition-all duration-1000 ease-in-out`}
          onClick={openModal}
        >
          <img className="h-full w-full cursor-pointer" src={Logo} alt="Logo" />
        </div>
        <ul
          className={`${
            isAtTop
              ? "hover:px-6 gap-5 px-8 right-0 w-[490px] shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out"
              : `gap-5 cursor-pointer px-8 transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "pl-7 right-0 transition-all w-[600px] duration-1000 ease-in-out"
                    : "pl-7 right-[0vw] lg:right-[0vw] w-[120px] transition-all duration-1000 ease-in-out"
                } group cursor-auto shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out`
          } flex h-[55px] font-medium items-center rounded-l-full bg-black transition-all duration-1000 ease-in-out`}
        >
          <li
            className={`${
              isAtTop
                ? "hidden"
                : `flex items-center ${
                    isExpanded ? "flex-row" : "flex-row-reverse"
                  }`
            }`}
          >
            <p className="cursor-pointer flex gap-2 items-center text-white pr-4 py-2 rounded-lg hover:bg-rainbow">
              {!isExpanded && (
                <img
                  className="w-[18px] group-hover:-ml-1.5 group-hover:mr-1.5 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                  src={Arrow_Left}
                  alt="Left Arrow"
                />
              )}
              Menu
              {isExpanded && (
                <div className="flex">
                  <img
                    className="w-[18px] group-hover:ml-1 group-hover:-mr-1 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                    src={Arrow_Right}
                    alt="Right Arrow"
                  />
                  <span className="ml-7 -mr-6 min-h-full min-w-[1.5px] bg-gray-300"></span>
                </div>
              )}
            </p>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow"
              to={"/gallery"}
            >
              Gallery
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow"
              to={"/about_us"}
            >
              AboutUs
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow"
              to={"/contact_us"}
            >
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
      {/* Modal for displaying the logo */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999999999999999]">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <img className="h-[75vh] w-[75vh]" src={Logo} alt="Logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarWhite;
