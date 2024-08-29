import React, { useEffect, useState } from "react";
import BGImage from "../../assets/People1.jpg";
import "./Style.css"; // Import the CSS file

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

        // Handle animation for the first element
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

        // Handle animation for the second element
        if (!animation2Completed) {
          if (
            rect2.top < windowHeight / 1 &&
            rect2.bottom > windowHeight / 100
          ) {
            setAnimation2Class("animation2Class");
            setAnimation2Completed(true); // Mark animation as completed
          } else if (rect2.top >= windowHeight || rect2.bottom <= 0) {
            setAnimation2Class("animation2Class-unreveal");
          } else {
            setAnimation2Class("hidden");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationCompleted, animation2Completed]);

  return (
    <>
      <div className="h-screen mt-[10vh] w-full bg-black text-white flex flex-col items-center py-[5vh] px-[11vw]">
        <div
          id="second-service"
          className={`h-[45vh] mb-[-10vh] justify-end text-end flex ${animationClass}`}
        >
          <div className="w-[40vw] items-end justify-center gap-3 flex flex-col">
            <div className="w-[30vw] h-[25vh rounded right-0 shadow-md overflow-hidden">
              <img
                className="w-full h-full right-0 object-cover"
                src={BGImage}
                alt=""
              />
            </div>
            <h1 className="Font-About text-gray-400 opacity-75 text-[90px] font-bold mt-[-11vh]">
              WEDDING
            </h1>
            <p className="mt-[-5vh] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              odit quos dolores! Est alias, architecto laborum animi illo odit
              dignissimos saepe quae, veniam at distinctio ratione culpa vero,
              temporibus earum!
            </p>
          </div>
        </div>
        <div
          id="second-service-2"
          className={`h-[45vh] mt-[-10vh] justify-start text-start flex  ${animation2Class}`}
        >
          <div className="w-[40vw] items-start justify-center gap-3 flex flex-col">
            <div className="w-[30vw] h-[25vh rounded right-0 shadow-md overflow-hidden">
              <img
                className="w-full h-full right-0 object-cover"
                src={BGImage}
                alt=""
              />
            </div>
            <h1 className="Font-About text-gray-400 opacity-75 text-[90px] font-bold mt-[-11vh]">
              Baby Shower
            </h1>
            <p className="mt-[-5vh] leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              odit quos dolores! Est alias, architecto laborum animi illo odit
              dignissimos saepe quae, veniam at distinctio ratione culpa vero,
              temporibus earum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondService;
