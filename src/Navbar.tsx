import React from "react";
import Logo from "./assets/Wevaha_Logo.png";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="h-[7vh] w-full absolute z-50 mt-7 flex items-center justify-between text-black scroll-smooth transition-all duration-1000 ease-in-out">
      <div className="hover:pl-8 h-[7vh] min-w-[50px] p-1.5 items-center bg-white px-6 rounded-r-full transition-all duration-1000 ease-in-out">
        <img className="h-full w-full" src={Logo} alt="Logo" />
      </div>
      <ul className="hover:px-10 flex gap-12 h-[7vh] font-medium items-center px-8 rounded-l-full bg-white transition-all duration-1000 ease-in-out">
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
