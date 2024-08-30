import React from "react";
import Frame from "../../assets/People1.jpg";
import "./Style.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full sm:h-[50vh] lg:min-h-[700px] sm:mt-[20vh] lg:mt-[12vh] xl:mt-[10vh] bg-white h-screen flex justify-between sm:px-[10vw] lg:px-[7vw] sm:py-[3vh] lg:py-[10vh] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="">
          <h1 className="Font-About z-50 mt-[-40px] relative sm:text-[80px] lg:text-[150px] xl:text-[200px] font-bold">
            ABOUT US
          </h1>
          <div className="sm:w-[130px] sm:h-[170px] lg:w-[230px] lg:h-[320px] sm:mt-[-50px] lg:mt-[-100px] xl:ml-[336px] sm:ml-[120px] lg:ml-[230px] absolute bg-blue-400">
            <img className="object-cover h-full w-full" src={Frame} alt="" />
          </div>
        </div>
        <div className="xl:w-[40vw] sm:h-[29vh] lg:h-[30vh] lg:w-[38vw] sm:w-[40vw] z-50 sm:mt-[8vh] lg:mt-[30vh] justify-between flex flex-col">
          <p className="lg:text-[14px] sm:text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            magnam praesentium. Rem corrupti, omnis quos eius animi quia aut
            molestias delectus doloremque minus, hic velit nesciunt, sunt
            aspernatur ipsa odit!, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore magni nemo, quam consectetur possimus
            maiores natus illum delectus dignissimos labore odit modi ipsam ipsa
            veniam et sed id? Expedita, vitae.
          </p>

          <Link
            to={"/about_us"}
            className="font-semibold sm:text-[17px] mt-[14vh] lg:text-[25px] text-[#8d8d8d] hover:text-[#9a0104] text-end transition-all duration-500 ease-in-out"
          >
            Visit more ...
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
