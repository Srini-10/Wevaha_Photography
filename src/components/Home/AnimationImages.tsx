import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BGImage from "../../assets/1.webp";
import Logo from "../../assets/Wevaha_Logo.png";
import "./Style.css";

const AnimationImages: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const [gradientColor, setGradientColor] = useState(
    "from-black to-transparent"
  );

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
      <div className="relative w-full h-[40vh] mb-[10vh] mt-[0vh] bg-white sm:mt-[40vh] lg:mt-[10vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden scroll-smooth transition-all duration-1000 ease-in-out">
        {/* <div
          className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-70 bg-gradient-to-b ${gradientColor} transition-all duration-1000 ease-in-out`}
        ></div> */}
        <div
          className="absolute sm:top-[-300px] left-0 w-full opacity-0 sm:h-[120vh] top-[-200px] h-[60vh] bg-no-repeat bg-cover bg-center"
          // style={{
          //   backgroundImage: `url(${BGImage})`,
          //   transform: `translateY(${scrollY * 0.3}px)`,
          //   willChange: "transform",
          // }}
        >
          {/* <div
            className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
          ></div> */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative w-full mt-[-5vh] sm:mt-0 h-full flex items-center justify-center z-10">
          <div className="w-full h-full sm:p-12">
            <div className="relative w-full h-full border-2 border-transparent">
              {/* <div className="scale-[0.7] ml-[-10vw] mt-[30vh] rounded">
                <ComponentImages1 />
              </div> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center ">
                {" "}
                <img
                  className="w-[40vw] sm:w-[20vw] hover:scale-[1.02] transition-all duration-1000 ease-in-out"
                  src={Logo}
                  alt=""
                />
                <h1 className="Font-Animation font-bold text-[4vw] opacity-100 text-yellow-700">
                  Memories, Straight to your hearts!
                </h1>
              </div>
              {/* <div className="scale-[0.7] absolute bottom-0 right-10 rounded">
                <ComponentImages2 />
              </div>
              <div className="scale-[0.4] absolute top-[-30px] right-72 rounded">
                <ComponentImages3 />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationImages;
