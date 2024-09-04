import React, { useEffect, useState } from "react";
import Frame1 from "../../assets/014-21.webp";
import Frame2 from "../../assets/003-4.webp";
import Frame3 from "../../assets/012-01.webp";
import "./Style.css";

const About = () => {
  const [isParallaxActive, setIsParallaxActive] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsParallaxActive(window.innerWidth >= 768);
    };

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxElement = document.getElementById("parallax");

      if (parallaxElement && isParallaxActive) {
        parallaxElement.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isParallaxActive]);

  return (
    <>
      <div className="w-full h-[580px] lg:mt-[60px] sm:h-[450px] shadow-md lg:h-[550px] sm:mt-[150px] z-[99] absolute overflow-hidden mt-[15vh] lg:min-h-[700px] rounded-b-2xl sm:rounded-none bg-white sm:flex justify-between sm:px-[10vw] lg:px-[7vw] sm:py-[3vh] lg:py-[10vh] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="flex sm:flex-row flex-col justify-between sm:block">
          <h1 className="Font-About z-50 mt-[-30px] sm:mt-[-40px] relative text-[15vw] pl-4 pt-5 sm:p-0 sm:text-[80px] lg:text-[150px] xl:text-[200px] font-bold">
            ABOUT US
          </h1>
          <div
            id={isParallaxActive ? "parallax" : undefined}
            className="max-w-[90vw] mx-auto gap-3 sm:gap-1.5 lg:gap-2 sm:mx-0 h-[220px] flex sm:w-[180px] shadow-inner sm:shadow-none sm:h-[170px] lg:min-w-[250px] lg:h-[420px] mt-[-10px] sm:mt-[-50px] lg:mt-[-140px] xl:ml-[300px] sm:ml-[80px] lg:ml-[180px] sm:absolute"
          >
            <div className="w-full sm:mt-[50px] lg:mt-[70px] h-[250px] lg:h-[250px] sm:h-[170px]">
              <img
                loading="lazy"
                className="mr-[30px] object-cover h-full w-full"
                src={Frame1}
                alt=""
              />
            </div>
            <div className="w-full sm:mt-[80px] lg:mt-[105px] h-[250px] lg:h-[250px] sm:h-[170px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame2}
                alt=""
              />
            </div>
            <div className="w-full sm:mt-[110px] lg:mt-[140px] h-[250px] lg:h-[250px] sm:h-[170px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[40vw] max-w-[100vw] p-4 sm:p-0 h-[48vh] sm:h-[29vh] lg:h-[45vh] lg:w-[38vw] sm:w-[40vw] z-50 mt-[30px] sm:mt-[8vh] lg:mt-[30vh] justify-between flex flex-col">
          <p className="lg:text-[14px] text-[12px] sm:text-[10px] text-gray-700 sm:text-black text-justify">
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
            <b className="mt-[-0px] justify-end flex"> - Wevaha Photography</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
