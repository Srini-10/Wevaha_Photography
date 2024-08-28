import React, { useEffect, useState } from "react";
import Background from "../../assets/Background.png";

const GalleryView = () => {
  const [gradientColor, setGradientColor] = useState(
    "from-black to-transparent"
  );

  return (
    <>
      <div className="w-full h-screen scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="h-[7vh] w-full absolute z-50 top-[55vh] opacity-50 font-semibold text-[90px] text-center text-white">
          Wevaha Photography
        </div>
        <div id="parallax" className="w-full h-screen">
          <div
            className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-70 bg-gradient-to-b ${gradientColor} transition-all duration-1000 ease-in-out`}
          ></div>
          <div className="w-full h-screen relative overflow-hidden">
            <img
              className="w-full h-screen object-cover select-none"
              src={Background}
              alt="Background 1"
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
