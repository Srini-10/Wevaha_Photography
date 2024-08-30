import React, { useEffect, useState } from "react";
import Frame from "../../assets/People1.jpg";
import "./Style.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxElement = document.getElementById("parallax");

      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[100vh] sm:h-[50vh] shadow-md lg:h-screen sm:mt-0 z-[99] absolute overflow-hidden mt-[0vh] lg:min-h-[700px] rounded-b-2xl sm:rounded-none bg-white sm:flex justify-between sm:px-[10vw] lg:px-[7vw] sm:py-[3vh] lg:py-[10vh] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="flex justify-between sm:block">
          <h1 className="Font-About z-50 leading-[11.5vh] sm:flex sm:gap-8 sm:leading-none mt-[22vh] sm:mt-[-40px] lg:mt-[5vh] relative text-start text-[29vw] pl-4 pt-5 sm:p-0 sm:text-[80px] lg:text-[150px] xl:text-[200px] font-bold">
            <p className="text-neutral-500 sm:text-black">ABOUT</p> US
          </h1>
          <div className="w-[20vw] h-[100vh] sm:w-[130px] shadow-inner sm:shadow-none sm:h-[170px] lg:w-[230px] lg:h-[320px] sm:mt-[-50px] lg:mt-[-100px] xl:ml-[336px] sm:ml-[120px] lg:ml-[230px] sm:absolute bg-gray-200">
            <img className="object-cover h-full w-full" src={Frame} alt="" />
          </div>
        </div>
        <div className="xl:w-[40vw] max-w-[78vw] p-4 sm:p-0 h-[44vh] sm:h-[29vh] lg:h-[30vh] lg:w-[38vw] sm:w-[40vw] z-50 mt-[-54vh] sm:mt-[8vh] lg:mt-[30vh] justify-between flex flex-col">
          <p className="lg:text-[14px] text-[12px] text-gray-700 sm:text-black text-justify sm:text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            magnam praesentium. Rem corrupti, omnis quos eius animi quia aut
            molestias delectus doloremque minus, hic velit nesciunt, sunt
            aspernatur ipsa odit!, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore magni nemo, quam consectetur possimus
            maiores natus illum delectus dignissimos labore odit modi ipsam ipsa
            veniam et sed id? Expedita, vitae.
          </p>

          <Link
            id="parallax"
            to={"/about_us"}
            className="font-semibold sm:text-[17px] lg:text-[25px] text-[#8d8d8d] hover:text-[#9a0104] text-end transition-all duration-100 ease-in-out"
          >
            Visit more ...
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
