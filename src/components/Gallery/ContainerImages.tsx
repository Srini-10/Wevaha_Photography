import React, { useState, useRef } from "react";
import Arrow_Down from "../../assets/Icons/Right_Arrow.svg";
import Arrow_Up from "../../assets/Icons/Left_Arrow.svg";
import Image1 from "../../assets/Gallery/001.webp";
import Image2 from "../../assets/Gallery/002.webp";
import Image3 from "../../assets/Gallery/003.webp";
import Image4 from "../../assets/Gallery/004.webp";
import Image5 from "../../assets/Gallery/005.webp";
import Image6 from "../../assets/Gallery/006.webp";
import Image7 from "../../assets/Gallery/007.webp";
import Image8 from "../../assets/Gallery/008.webp";
// import Image9 from "../../assets/Gallery/009.webp";
import Image10 from "../../assets/Gallery/010.webp";
import Image11 from "../../assets/Gallery/011.webp";
import Image12 from "../../assets/Gallery/012.webp";
import Image13 from "../../assets/Gallery/013.webp";
import Image14 from "../../assets/Gallery/014.webp";
import Image15 from "../../assets/Gallery/015.webp";
import Image16 from "../../assets/Gallery/016.webp";
import Image17 from "../../assets/Gallery/017.webp";
import Image18 from "../../assets/Gallery/018.webp";
import Image19 from "../../assets/Gallery/019.webp";
import Image20 from "../../assets/Gallery/020.webp";
import Image21 from "../../assets/Gallery/009.webp";
import "./Style.css";

const ContainerImages = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    // Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const endRef = useRef(null);
  const twelfthImageRef = useRef(null);

  const handleToggleImages = () => {
    if (!showAllImages) {
      setShowAllImages(true);
      setTimeout(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      setShowAllImages(false);
      setTimeout(() => {
        twelfthImageRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  const displayedImages = showAllImages ? images : images.slice(0, 12);

  return (
    <>
      <h1 className="Font-About mt-[8vh] mb-[-4vh] sm:mb-[-5vh] text-start px-[7vw] text-[90px] sm:text-[170px] lg:text-[200px] font-bold">
        GALLERY
      </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 px-[7vw] mb-[4vh] space-y-4 scroll-smooth transition-all duration-100 ease-in-out">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            ref={index === 11 ? twelfthImageRef : null}
            className={`image-container transition-all duration-100 ease-in-out ${
              showAllImages || index < 12
                ? "visible transition-all duration-1000 ease-in-out"
                : "transition-all duration-1000 ease-in-out"
            }`}
          >
            <img
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg"
              src={image}
              alt={`Gallery Img ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="text-center z-10 justify-center flex mb-10 transition-all duration-1000 ease-in-out">
        <div className="absolute sm:mt-[-18vh] mt-[-12vh] lg:mt-[-25vh] w-full h-[16vh] sm:h-[25vh] lg:h-[35vh] bg-gradient-to-t from-white to-transparent"></div>
        {!showAllImages && (
          <button
            onClick={handleToggleImages}
            className="text-[14px] sm:text-[18px] z-10 flex gap-2 items-center bg-white rounded-3xl shadow-md py-2 px-5 text-black hover:text-neutral-600"
          >
            Show More
            <img
              loading="lazy"
              className="w-[13px] sm:w-[16px] mt-0.5 rotate-90"
              src={Arrow_Down}
              alt="Show More"
            />
          </button>
        )}
        {showAllImages && (
          <button
            onClick={handleToggleImages}
            className="text-[14px] sm:text-[18px] z-10 flex gap-2  items-center bg-white rounded-3xl shadow-md py-2 px-5 text-black hover:text-neutral-600"
          >
            Show Less
            <img
              loading="lazy"
              className="w-[13px] sm:w-[16px] mt-0.5 rotate-90"
              src={Arrow_Up}
              alt="Show Less"
            />
          </button>
        )}
      </div>
      <div ref={endRef}></div>
    </>
  );
};

export default ContainerImages;
