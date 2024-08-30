import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BG1 from "../../assets/People1.jpg";
import BG2 from "../../assets/People2.jpg";
import BG3 from "../../assets/People3.jpg";
import Navbar from "../../Navbar.tsx";

const Header = () => {
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

      // Change gradient color based on scroll position
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
      <div className="w-full lg:h-screen sm:h-[60vh] scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          id="parallax"
          className="h-[7vh] w-full absolute z-10 sm:top-[35vh] lg:top-[55vh] opacity-50 font-semibold sm:text-[40px] lg:text-[90px] text-center text-white"
        >
          Wevaha Photography
        </div>
        <div id="parallax" className="w-full h-screen">
          <div
            className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-70 bg-gradient-to-b ${gradientBlack} transition-all duration-1000 ease-in-out`}
          ></div>
          <Slider {...settings}>
            <div className="w-full h-screen relative overflow-hidden">
              <img
                className="w-full h-screen object-cover select-none"
                src={BG1}
                alt="Background 1"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
            <div className="w-full h-screen relative overflow-hidden">
              <img
                className="w-full h-screen object-cover select-none"
                src={BG2}
                alt="Background 2"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
            <div className="w-full h-screen relative overflow-hidden">
              <img
                className="w-full h-screen object-cover select-none"
                src={BG3}
                alt="Background 3"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-70 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
              ></div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Header;
