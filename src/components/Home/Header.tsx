import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Down_Arrow from "../../assets/Icons/Arrow_More_Icon.svg";
import BG1 from "../../assets/1.webp";
import BG2 from "../../assets/3.webp";
import BG3 from "../../assets/2.webp";
import BG4 from "../../assets/4.webp";

const Header = () => {
  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("nextComponent1");
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [gradientBlack, setGradientBlack] = useState(
    "from-black to-transparent"
  );
  const [gradientWhite, setGradientWhite] = useState(
    "from-white to-transparent"
  );

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxElement = document.getElementById("parallax");

      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }

      if (scrollPosition > window.innerHeight * 0.4) {
        setGradientBlack("from-white to-transparent");
      } else {
        setGradientBlack("from-black to-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[35vh] lg:h-screen sm:h-[60vh] scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          id="parallax"
          className="h-[30vh] sm:h-[7vh] w-full absolute z-10 text-[8vw] top-[20vh] sm:top-[35vh] lg:top-[55vh] opacity-50 font-semibold sm:text-[40px] lg:text-[90px] text-center text-white"
        >
          {/* Wevaha Photography */}
        </div>
        <div className="w-full h-[35vh] sm:h-screen transition-all duration-1000 ease-in-out">
          <div
            className={`absolute z-10 top-0 left-0 right-0 h-[30vh] opacity-70 bg-gradient-to-b ${gradientBlack} transition-all duration-1000 ease-in-out`}
          ></div>
          <Slider {...settings}>
            <div className="w-full h-[35vh] sm:h-screen relative overflow-hidden">
              <img
                className="w-full h-[35vh] sm:h-screen object-cover select-none"
                src={BG1}
                alt="Background 1"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:mb-[-12px] min-h-[10vh] from-black to-transparent opacity-75 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
            <div className="w-full h-[35vh] sm:h-screen relative overflow-hidden">
              <img
                className="w-full h-[35vh] sm:h-screen object-cover select-none"
                src={BG2}
                alt="Background 2"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:mb-[-12px] min-h-[10vh] from-black to-transparent opacity-75 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
            <div className="w-full h-[35vh] sm:h-screen relative overflow-hidden">
              <img
                className="w-full h-[35vh] sm:h-screen object-cover select-none"
                src={BG3}
                alt="Background 3"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:mb-[-12px] min-h-[10vh] from-black to-transparent opacity-75 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
            <div className="w-full h-[35vh] sm:h-screen relative overflow-hidden">
              <img
                className="w-full h-[35vh] sm:h-screen object-cover select-none"
                src={BG4}
                alt="Background 3"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:mb-[-12px] min-h-[10vh] from-black to-transparent opacity-75 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
          </Slider>
          <div
            className="scroll-arrow bg-yellow-100 absolute z-[99] rounded-full sm:mt-[-11vh] lg:mt-[-12vh] mt-[0vh] shadow-md sm:ml-[0px] sm:right-[2.1vw] lg:right-[3.5vw] right-[5vw] w-12 h-12 cursor-pointer"
            onClick={scrollToNextComponent}
          >
            <div className="arrow wave">
              <img
                className="w-8 rotate-[135deg] mt-2.5"
                src={Down_Arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
