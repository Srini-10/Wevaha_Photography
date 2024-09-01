import React, { useState } from "react";
import "./index.css";
import backgroundImage from "./assets/Loader_BG.webp";

const LoadingAnimation = () => {
  const [gradientBlack, setGradientBlack] = useState(
    "from-black to-transparent"
  );
  const [gradientWhite, setGradientWhite] = useState(
    "from-white to-transparent"
  );
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute z-10 top-0 left-0 right-0 h-[30vh] opacity-30 bg-gradient-to-b ${gradientBlack} transition-all duration-1000 ease-in-out`}
      ></div>
      <span
        className="loader"
        style={{ boxShadow: "0px 0px 20px 0px black" }}
      ></span>
      <div
        className={`absolute bottom-0 left-0 right-0 min-h-[100vh] w-[25vw] from-black to-transparent opacity-80 bg-gradient-to-r transition-all duration-1000 ease-in-out`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 right-0 sm:mb-[-12px] min-h-[10vh] from-black to-transparent opacity-60 sm:h-[60vh] lg:h-[40vh] sm:opacity-100 lg:opacity-100 bg-gradient-to-t lg:${gradientBlack} sm:${gradientWhite} transition-all duration-1000 ease-in-out`}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
