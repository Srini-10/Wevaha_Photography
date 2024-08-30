import React, { useState } from "react";
import Logo from "./assets/Wevaha_Logo.png";
import { Link } from "react-router-dom";
import "./index.css";

const NavbarFixed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="navbar-container h-[7vh] w-full absolute z-50 mt-7 flex items-center justify-between text-black scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          className="hover:pl-8 h-[7vh] min-w-[50px] cursor-pointer p-1.5 items-center bg-white px-6 rounded-r-full transition-all duration-1000 ease-in-out"
          onClick={openModal}
        >
          <img className="h-full w-full cursor-pointer" src={Logo} alt="Logo" />
        </div>
        <ul className="hover:px-10 flex gap-7 h-[7vh] font-medium items-center px-8 rounded-l-full bg-white transition-all duration-1000 ease-in-out">
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
              AboutUs
            </Link>
          </li>
          <li className="relative link-item">
            <Link
              className="cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-rainbow"
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

export default NavbarFixed;
