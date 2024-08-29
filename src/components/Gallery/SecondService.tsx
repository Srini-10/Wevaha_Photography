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
      <div className="h-screen w-full flex flex-col items-center bg-blue-200">
        <div
          id="second-service"
          className={`h-[50vh] bg-green-500 justify-end text-end flex ${animationClass}`}
        >
          <div className="">
            <div className="w-[22vw] h-[25vh] bg-yellow-500 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={BGImage}
                alt=""
              />
            </div>
            <p className="font-medium w-[20vw] text-[20px]">
              Details about the second service will be revealed from right to
              left and unrevealed from center to left when scrolling.
            </p>
          </div>
        </div>
        <div
          id="second-service-2"
          className={`h-[50vh] bg-red-500 ${animation2Class}`}
        >
          <h2>Second Service Component 2</h2>
          <p>
            Details about the second service will be revealed from left to right
            and unrevealed from center to right when scrolling.
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondService;
