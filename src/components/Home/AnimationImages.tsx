import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Wevaha_Logo.png";
import "./Style.css";

const AnimationImages: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

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

  useEffect(() => {
    const handlePageScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleCarouselScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const isAtEnd =
          carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;

        if (isAtEnd) {
          console.log("End of carousel reached. Navigating to new page...");
          navigate("/gallery");
        }
      }
    };

    window.addEventListener("scroll", handlePageScroll);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleCarouselScroll);
    }

    return () => {
      window.removeEventListener("scroll", handlePageScroll);

      if (carousel) {
        carousel.removeEventListener("scroll", handleCarouselScroll);
      }
    };
  }, [navigate]);

  return (
    <>
      <div
        id="nextComponent1"
        className="relative w-full h-[43vh] mb-[10vh] z-50 mt-[0vh] bg-white sm:mt-[0vh] lg:mt-[0vh] lg:pt-[10vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden scroll-smooth transition-all duration-1000 ease-in-out"
      >
        <div className="absolute sm:top-[-300px] left-0 w-full opacity-0 sm:h-[120vh] top-[-200px] h-[60vh] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative w-full mt-[-5vh] sm:mt-0 h-full flex items-center justify-center z-10">
          <div className="w-full h-full sm:p-12">
            <div
              id="parallax"
              className="relative w-full h-full  border-2 border-transparent"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center ">
                <img
                  loading="lazy"
                  className="w-[40vw] sm:w-[20vw] hover:scale-[1.02] transition-all duration-1000 ease-in-out"
                  src={Logo}
                  alt=""
                />
                <h1 className="font-sans font-semibold lg:text-[25px] text-[3.6vw] leading-[10px]  sm:text-[2.4vw] justify-between sm:leading-4 lg:leading-[18px] opacity-100 text-yellow-800">
                  <p className="mr-[17vw] sm:mr-[14vw]">
                    Photography is a Story...
                  </p>{" "}
                  <br />
                  <p className="ml-[17vw] sm:ml-[14vw]">
                    We Fail to put in a Words...
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationImages;
