import React, { useEffect, useState } from "react";
import Frame1 from "../../assets/013-2.webp";
import Frame2 from "../../assets/012-9.webp";
import Frame3 from "../../assets/002-4.webp";
import "./Style.css";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        style={{
          boxShadow:
            window.innerWidth <= 767
              ? "0px 0px 3px 3px rgba(0, 0, 0, 0.05)"
              : "none",
        }}
        className="w-full h-[570px] sm:h-[50vh] lg:h-screen sm:mt-[-8vh] z-[99] absolute overflow-hidden mt-[-17vh] lg:min-h-[700px] rounded-t-3xl sm:rounded-none bg-white sm:flex justify-between sm:px-[10vw] lg:px-[7vw] sm:py-[3vh] lg:py-[10vh] scroll-smooth transition-all duration-1000 ease-in-out"
      >
        <div className="flex sm:flex-row flex-col justify-between sm:block">
          <h1 className="Font-About z-50 mt-[-10px] sm:mt-[-40px] relative text-[15vw] pl-4 pt-5 sm:p-0 sm:text-[80px] lg:text-[150px] xl:text-[200px] font-bold">
            ABOUT US
          </h1>
          <div className="max-w-[90vw] mx-auto sm:mx-0 h-[25vh] flex sm:w-[130px] shadow-inner sm:shadow-none sm:h-[170px] lg:min-w-[300px] lg:h-[320px] mt-[-10px] sm:mt-[-50px] lg:mt-[-100px] xl:ml-[300px] sm:ml-[120px] lg:ml-[230px] sm:absolute bg-gray-200">
            <div className="w-full">
              <img
                loading="lazy"
                className="mr-[30px] object-cover h-full w-full"
                src={Frame1}
                alt=""
              />
            </div>
            <div className="w-full">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame2}
                alt=""
              />
            </div>
            <div className="w-full">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[40vw] max-w-[100vw] p-4 sm:p-0 h-[48vh] sm:h-[29vh] lg:h-[45vh] lg:w-[38vw] sm:w-[40vw] z-50 mt-[1vh] sm:mt-[8vh] lg:mt-[30vh] justify-between flex flex-col">
          <p className="lg:text-[14px] text-[12px] text-gray-700 sm:text-black text-justify sm:text-[10px]">
            We are incredibly blessed to have a team of talented photographers.
            We choose our clients as carefully as they choose us. We approach
            every client with intent to create Fresh, offbeat ideas while
            holding onto our timeless tradition and culture. We strive to create
            a life long client relationship built on friendship and trust. From
            our First meeting together until we bid you goodbye we will be by
            your side during your event planning adventure. Photography is meant
            to be cherished for generations to come. It is meant to be artistic,
            romantic and timeless. We are committed to making those memories
            last for you.
            <br />
            <br />
            <b className="mt-[-0px] ml-[55vw] sm:ml-[25vw]">
              {" "}
              - Wevaha Photography
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
