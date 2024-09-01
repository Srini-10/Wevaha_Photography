import React, { useState } from "react";
import Background from "../../assets/1.webp";

const GalleryView = () => {
  const [gradientColor, setGradientColor] = useState(
    "from-black to-transparent"
  );

  return (
    <>
      <div className="placeholder"></div>
      <div className="w-full h-screen scroll-smooth text-center flex justify-center transition-all duration-1000 ease-in-out">
        <div id="parallax" className="w-full h-screen">
          <div
            className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-100 bg-gradient-to-b ${gradientColor} transition-all duration-1000 ease-in-out`}
          ></div>
          <div className="w-full h-[100vh] relative flex justify-center overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-screen object-cover contrast-[110%] saturate-[130%] select-none"
              src={Background}
              alt="Background"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 h-[40vh] opacity-70 bg-gradient-to-t ${gradientColor} transition-all duration-1000 ease-in-out`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryView;
