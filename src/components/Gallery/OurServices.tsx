import React, { useEffect, useState } from "react";
import "./Style.css";
import AllTypeOfEvents from "../../assets/001-1.webp";
import Down_Arrow from "../../assets/Icons/Arrow_More_Icon.svg";
import ModelShoot from "../../assets/008-1.svg";
import Slider from "react-slick";
import BG1 from "../../assets/002-3.webp";
import BG2 from "../../assets/007-9.webp";
import BG3 from "../../assets/018-5.webp";
import BG4 from "../../assets/012-7.webp";
import BG5 from "../../assets/012-8.webp";
import BG6 from "../../assets/017-4.webp";
import BG7 from "../../assets/004-9.webp";

const OurServices = () => {
  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("nextComponent");
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [gradientColor, setGradientColor] = useState(
    "from-black to-transparent"
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

  const slides = [
    { image: BG1, alt: "Background 1" },
    { image: BG2, alt: "Background 2" },
    { image: BG3, alt: "Background 3" },
    { image: BG4, alt: "Background 4" },
    { image: BG5, alt: "Background 5" },
    { image: BG6, alt: "Background 6" },
    { image: BG7, alt: "Background 7" },
  ];

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
      if (scrollPosition > window.innerHeight * 0.5) {
        setGradientColor("from-white to-transparent");
      } else {
        setGradientColor("from-black to-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen pt-[15vh] flex justify-center items-center bg-white scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          className={`absolute top-0 left-0 right-0 h-[30vh] opacity-0 bg-gradient-to-b ${gradientColor} transition-all duration-1000 ease-in-out`}
        ></div>
        <div className="w-[90vw] h-full flex justify-center items-center">
          <div className="w-[80px] sm:w-[100px] h-full flex items-start text-start justify-start">
            <h1 className="Font-About -rotate-90 text-[100px] sm:text-[130px] font-bold ml-[-90px] sm:ml-[-124px] mt-[79px]">
              WEDDING
            </h1>
          </div>
          <div className="w-[87vw] h-full items-start text-start justify-start">
            <h1 className="Font-About sm:ml-4 ml-2 -mb-1 sm:-mt-2.5 lg:-mb-1 sm:-mb-2 text-neutral-500 text-[23px] sm:text-[30px] font-bold">
              Photography
            </h1>
            <div className="rounded overflow-hidden w-[40vw] sm:w-[51vw] lg:w-[53vw] xl:w-[55vw] h-[55vh] sm:h-[62vh]">
              <div
                id="parallax"
                className="w-full h-screen overflow-hidden shadow-inner"
              >
                <Slider {...settings}>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full h-screen relative overflow-hidden"
                    >
                      <img
                        className="object-cover select-none h-[62vh] w-[55vw]"
                        src={slide.image}
                        alt={slide.alt}
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
                      ></div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="ml-[3vw] mt-[-32vh] sm:mt-[-28.5vh]">
            <h1 className="Font-About ml-4 mt-[-100px] sm:mt-[-50px] -mb-0.5 sm:-mb-2 sm:mr-1.5 lg:mr-2.5 text-neutral-500 opacity-75 text-end text-[12px] sm:text-[22px] lg:text-[32px] font-bold">
              All Type of Events
            </h1>
            <div className="overflow-hidden w-full h-auto">
              <div className="h-[22vh] sm:h-[28vh] rounded mb-1 sm:mb-3 overflow-hidden">
                <img
                  src={AllTypeOfEvents}
                  alt=""
                  className="w-full h-full brightness-75 object-cover"
                />
              </div>
            </div>
            <p className="sm:text-[10px] text-[7.5px] lg:text-[13px] text-neutral-700 leading-[9px] sm:leading-3.5 lg:leading-5 text-justify">
              <b className="font-bold text-black">Hi,</b> Welcome we specialize
              in Capturing your cherished moments for Weddings, Receptions, All
              Kind of Events &Commercial shoots
            </p>
            <div
              className="scroll-arrow bg-yellow-100 absolute z-[99] rounded-full sm:mt-[20vh] lg:mt-[24vh] mt-[27vh] shadow-md sm:ml-[0px] sm:right-[2.1vw] lg:right-[3.5vw] right-[5vw] w-12 h-12 cursor-pointer"
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
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[70vw] sm:w-[90vw] absolute h-[29vh] flex justify-center mt-[-54vh] sm:mt-[-40vh] items-center ">
          <div className="min-w-[80px] sm:min-w-[100px]"></div>
          <img
            src={ModelShoot}
            alt=""
            className="shadow-inner w-[87vw] h-full brightness-50 object-cover rounded-3xl"
            style={{
              clipPath:
                "polygon(68.8% 60.5%, 68.8% 0%, 100% 0%, 100% 100%, 75% 100%, 75% 100%, 0 100%, 0 60.5%)",
              boxShadow: "inset 0 0 20px 5px rgba(0, 0, 0, 80)",
              filter: "brightness(0.75)",
            }}
          />
          <h1 className="Font-About absolute flex gap-2 right-[2.3vw] bottom-[-2vh] text-white opacity-85 text-end sm:text-[20px] lg:text-[25px] font-bold">
            <p className="lg:text-[100px] sm:text-[70px] sm:-mr-5 opacity-45">
              Model
            </p>{" "}
            Shoot
          </h1>
        </div>
      </div>
    </>
  );
};

export default OurServices;
