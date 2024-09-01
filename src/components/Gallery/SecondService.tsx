import React, { useEffect, useState } from "react";
import BGImage from "../../assets/3.webp";
import Maternity from "../../assets/Gallery/1019.webp";
import "./Style.css";

const SecondService = () => {
  const [animationClass, setAnimationClass] = useState("hidden");
  const [animation2Class, setAnimation2Class] = useState("hidden");
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [animation2Completed, setAnimation2Completed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("second-service");
      const element2 = document.getElementById("second-service-2");
      if (element && element2) {
        const rect = element.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (!animationCompleted) {
          if (rect.top < windowHeight / 1 && rect.bottom > windowHeight / 100) {
            setAnimationClass("reveal-animation");
            setAnimationCompleted(true); // Mark animation as completed
          } else if (rect.top >= windowHeight || rect.bottom <= 0) {
            setAnimationClass("unreveal-animation");
          } else {
            setAnimationClass("hidden");
          }
        }

        if (!animation2Completed) {
          if (
            rect2.top < windowHeight / 1 &&
            rect2.bottom > windowHeight / 100
          ) {
            setAnimation2Class("animation2Class");
            setAnimation2Completed(true);
          } else if (rect2.top >= windowHeight || rect2.bottom <= 0) {
            setAnimation2Class("animation2Class-unreveal");
          } else {
            setAnimation2Class("hidden");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationCompleted, animation2Completed]);

  return (
    <>
      <div
        id="nextComponent"
        className="h-screen sm:mt-[10vh] w-full overflow-hidden bg-black text-white flex flex-col items-center py-0 sm:py-[5vh] px-[8vw] sm:px-[11vw]"
      >
        <div
          id="second-service"
          className={`h-[45vh] mb-[-10vh] justify-end text-end flex ${animationClass}`}
        >
          <div className="w-[80vw] sm:w-[40vw] items-end justify-center gap-3 flex flex-col">
            <div className="w-[70vw] sm:w-[30vw] sm:h-[33vh] h-[25vh] rounded right-0 shadow-md overflow-hidden">
              <img
                loading="lazy"
                className="w-full h-full right-0 object-cover"
                src={BGImage}
                alt=""
              />
            </div>
            <h1 className="Font-About text-gray-400 opacity-75 text-[50px] sm:text-[65px] lg:text-[90px] font-bold mt-[-7.5vh] sm:mt-[-8.5vh] lg:mt-[-11vh]">
              OUT DOOR
            </h1>
            <p className="mt-[-3.5vh] sm:mt-[-5vh] text-[12px] lg:text-[14px] sm:text-[12px] sm:leading-4 lg:leading-6">
              An outdoor photoshoot captures natural light and scenic
              backgrounds, creating vibrant and dynamic images. It offers a
              versatile setting, from urban landscapes to nature, enhancing the
              overall aesthetic of the photos.
            </p>
          </div>
        </div>
        <div
          id="second-service-2"
          className={`h-[45vh] mt-[-10vh] justify-start text-start flex  ${animation2Class}`}
        >
          <div className="w-[80vw] sm:w-[40vw] items-start justify-center gap-3 flex flex-col">
            <div className="w-[70vw] sm:w-[30vw] sm:h-[33vh] h-[25vh] rounded right-0 shadow-md overflow-hidden">
              <img
                loading="lazy"
                className="w-full h-auto mt-[-7vh] right-0 object-cover"
                src={Maternity}
                alt=""
              />
            </div>
            <h1 className="Font-About text-gray-400 opacity-75 text-[50px] sm:text-[65px] lg:text-[90px] font-bold mt-[-7.5vh] sm:mt-[-8.5vh] lg:mt-[-11vh]">
              Maternity
            </h1>
            <p className="mt-[-3.5vh] sm:mt-[-5vh] text-[12px] lg:text-[14px] sm:text-[12px] sm:leading-4 lg:leading-6">
              Maternity photography captures the beauty of pregnancy,
              highlighting the expecting mother's glow in serene and intimate
              settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondService;
