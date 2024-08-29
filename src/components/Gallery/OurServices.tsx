import React, { useEffect, useState } from "react";
import "./Style.css";
import Image1 from "../../assets/People1.jpg";
import Down_Arrow from "../../assets/Arrow_More_Icon.svg";
import BGImage from "../../assets/People1.jpg";
import Slider from "react-slick";
import BG1 from "../../assets/People1.jpg";
import BG2 from "../../assets/People2.jpg";
import BG3 from "../../assets/People3.jpg";

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
          <div className="w-[100px] h-full flex items-start text-start justify-start">
            <h1 className="Font-About -rotate-90 text-[130px] font-bold ml-[-124px] mt-[79px]">
              WEDDING
            </h1>
          </div>
          <div className="w-[87vw] h-full items-start text-start justify-start">
            <h1 className="Font-About ml-4 -mt-2.5 -mb-1 text-neutral-500 text-[30px] font-bold">
              Photography
            </h1>
            <div className="rounded overflow-hidden w-[55vw] h-[62vh]">
              <div id="parallax" className="w-full h-screen overflow-hidden">
                {/* <div
                  className={`absolute top-0 left-0 right-0 h-[30vh] opacity-70 bg-gradient-to-b ${gradientColor} transition-all duration-1000 ease-in-out`}
                ></div> */}
                <Slider {...settings}>
                  <div className="w-full h-screen relative overflow-hidden">
                    <img
                      className="object-cover select-none h-[62vh] w-[55vw]"
                      src={BG1}
                      alt="Background 1"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
                    ></div>
                  </div>
                  <div className="w-full h-screen relative overflow-hidden">
                    <img
                      className="object-cover select-none h-[62vh] w-[55vw]"
                      src={BG2}
                      alt="Background 2"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
                    ></div>
                  </div>
                  <div className="w-full h-screen relative overflow-hidden">
                    <img
                      className="object-cover select-none h-[62vh] w-[55vw]"
                      src={BG3}
                      alt="Background 3"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
                    ></div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="ml-[3vw] mt-[-28.5vh]">
            <h1 className="Font-About ml-4 mt-[-50px] -mb-2 mr-2.5 text-neutral-500 opacity-75 text-end text-[32px] font-bold">
              All Type of Events
            </h1>
            <div className="overflow-hidden w-full h-auto">
              <div className="h-[28vh] rounded mb-3 overflow-hidden">
                <img
                  src={Image1}
                  alt=""
                  className="w-full h-full brightness-75 object-cover"
                />
              </div>
            </div>
            <p className="text-[13px] leading-5 text-justify">
              Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam, voluptatum perspiciatis? Dolorum temporibus, nesciunt,
              mollitia aut odio illo repellat fugiat vero ad unde praesentium
              Quis.
            </p>
            <div
              className="scroll-arrow bg-yellow-100 absolute z-[99] rounded-full mt-[24vh] shadow-md ml-[23.4vw] w-12 h-12 cursor-pointer"
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
        <div className="w-[90vw] absolute h-[29vh] flex justify-center mt-[-40vh] items-center ">
          <div className="min-w-[100px]"></div>
          <img
            src={BGImage}
            alt=""
            className="shadow-inner w-[87vw] h-full brightness-50 object-cover rounded-3xl"
            style={{
              clipPath:
                "polygon(68.8% 60.5%, 68.8% 0%, 100% 0%, 100% 100%, 75% 100%, 75% 100%, 0 100%, 0 60.5%)",
              boxShadow: "inset 0 0 20px 5px rgba(0, 0, 0, 80)",
              filter: "brightness(0.75)",
            }}
          />
          <h1 className="Font-About absolute flex gap-2 right-[2.3vw] bottom-[-2vh] text-white opacity-85 text-end text-[25px] font-bold">
            <p className="text-[100px] opacity-45">Baby</p> Shower
          </h1>
        </div>
      </div>
    </>
  );
};

export default OurServices;
