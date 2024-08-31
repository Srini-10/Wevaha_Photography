import React, { useState, useEffect } from "react";
import Logo from "./assets/Wevaha_Logo.png";
import Arrow_Left from "./assets/Icons/Left_Arrow_white.svg";
import Arrow_Right from "./assets/Icons/Right_Arrow_white.svg";
import { Link } from "react-router-dom";
import "./index.css";

const NavbarWhite = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsAtTop(window.scrollY === 0);
        if (window.scrollY === 0) {
          setIsExpanded(false);
        }
      }
    };

    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const toggleNavbarExpansion = () => {
    if (!isAtTop || window.innerWidth < 768) {
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
        className={`Responsive-Navbar navbar-container h-[7vh] w-full absolute mt-7 flex items-center justify-between text-black transition-all duration-1000 ease-in-out ${
          isAtTop ? "scroll-smooth" : "h-[5vh]"
        }`}
        onClick={toggleNavbarExpansion}
      >
        <div
          className={`${
            isAtTop
              ? "hover:pl-8 min-w-[50px] max-h-[55px] fixed min-h-[55px] shadow-md bg-black border-[2px] border-black px-6 transition-all duration-1000 ease-in-out"
              : "max-h-[55px] min-h-[55px] bg-white border-[3.5px] border-black shadow-md rounded-full min-w-[55px] ml-2 p-3 fixed transition-all duration-1000 ease-in-out"
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

      {/* Mobile Navbar */}
      <div
        className={`sm:hidden navbar-container h-[7vh] w-full absolute mt-7 flex items-center justify-between text-white transition-all duration-1000 ease-in-out ${
          isAtTop && window.innerWidth >= 768 ? "scroll-smooth" : "h-[5vh]"
        }`}
        onClick={toggleNavbarExpansion}
      >
        <div
          className={`${
            isAtTop && window.innerWidth >= 768
              ? "hover:pl-8 min-w-[50px] max-h-[55px] min-h-[55px] px-6 transition-all duration-1000 ease-in-out"
              : "max-h-[55px] min-h-[55px] shadow-md rounded-full min-w-[55px] ml-2 p-3 fixed transition-all duration-1000 ease-in-out"
          } h-full p-1.5 items-center bg-white border-[2.5px] border-black cursor-pointer rounded-r-full transition-all duration-1000 ease-in-out`}
          onClick={openModal}
        >
          <img className="h-full w-full cursor-pointer" src={Logo} alt="Logo" />
        </div>
        <ul
          onClick={toggleNavbarExpansion}
          className={`${
            isAtTop && window.innerWidth >= 768
              ? "hover:px-6 gap-5 px-8 right-0 w-[490px] shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out"
              : `gap-5 cursor-pointer px-8 transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "pl-7 right-0 transition-all rounded-l-3xl flex-col py-[7px] overflow-hidden text-[18px] mt-[220px] pb-[270px] flex w-[130px] h-[270px] duration-500 ease-in-out"
                    : "pl-7 right-[0vw] lg:right-[0vw] w-[120px] transition-all duration-200 ease-in-out"
                } group cursor-auto shadow-md h-[55px] fixed transition-all duration-1000 ease-in-out`
          } flex h-[55px] font-medium items-center rounded-l-3xl bg-black transition-all duration-1000 ease-in-out`}
        >
          {" "}
          <li
            className={`${
              isAtTop && window.innerWidth >= 768
                ? "hidden"
                : `flex items-center ${
                    isExpanded ? "flex-row" : "flex-row-reverse"
                  }`
            }`}
          >
            <p className="cursor-pointer flex gap-3 items-center text-white pr-4 py-2 rounded-lg hover:bg-rainbow  transition-all duration-1000 ease-in-out">
              {!isExpanded && (
                <img
                  className="w-[16px] group-hover:-ml-1.5 -rotate-90 group-hover:mr-1.5 group-hover:scale-[1.05] transition-all duration-1000 ease-in-out"
                  src={Arrow_Left}
                  alt="Left Arrow"
                />
              )}
              {isExpanded && (
                <img
                  className="w-[16px] group-hover:-ml-1.5 rotate-90 group-hover:mr-1.5 group-hover:scale-[1.05] transition-all duration-1000 ease-in-out"
                  src={Arrow_Left}
                  alt="Left Arrow"
                />
              )}
              Menu
            </p>
            {isExpanded && (
              <div className="w-full h-[1px] absolute ml-[-27px] mt-[40px] opacity-80 bg-white"></div>
            )}
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow transition-all duration-1000 ease-in-out"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow transition-all duration-1000 ease-in-out"
              to={"/gallery"}
            >
              Gallery
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer justify-center items-center flex text-white px-4 py-2 flex-nowrap rounded-lg hover:bg-rainbow transition-all duration-1000 ease-in-out"
              to={"/about_us"}
            >
              AboutUs
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-rainbow transition-all duration-1000 ease-in-out"
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
            <img
              className="max-w-[75vw] h-auto sm:h-[75vh] sm:w-[75vh]"
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarWhite;
