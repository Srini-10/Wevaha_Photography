import React from "react";
import Frame from "../../assets/People1.jpg";
import "./Style.css";
import Navbar from "../../Navbar.tsx";

const AboutUs = () => {
  return (
    <>
      <div className="w-full min-h-[700px] bg-white h-screen flex justify-between px-[7%] py-[6%] scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-10 bg-gradient-to-b from-black to-transparent transition-all duration-1000 ease-in-out`}
        ></div>
        <div className="">
          <h1 className="Font-About z-50 mt-[-40px] relative text-[200px] font-bold">
            ABOUT US
          </h1>
          <div className="w-[250px] h-[350px] mt-[-100px] ml-[336px] absolute bg-blue-400">
            <img className="object-cover h-full w-full" src={Frame} alt="" />
          </div>
        </div>
        <div className="w-[500px] z-50 mt-[20%] justify-between flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            magnam praesentium. Rem corrupti, omnis quos eius animi quia aut
            molestias delectus doloremque minus, hic velit nesciunt, sunt
            aspernatur ipsa odit!, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore magni nemo, quam consectetur possimus
            maiores natus illum delectus dignissimos labore odit modi ipsam ipsa
            veniam et sed id? Expedita, vitae.
          </p>

          <p className="font-semibold text-[25px] text-[#8d8d8d] text-end">
            Our Quote
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
