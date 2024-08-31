import React from "react";
import Image1 from "../../assets/1.webp";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";
import Image4 from "../../assets/4.webp";
import Image5 from "../../assets/001-1.webp";
import Image6 from "../../assets/002-1.webp";
import Image7 from "../../assets/3.webp";
import Image8 from "../../assets/002-1.webp";
import Image9 from "../../assets/3.webp";
import Image10 from "../../assets/001-1.webp";
import Image11 from "../../assets/3.webp";
import Image12 from "../../assets/002-1.webp";
import Image13 from "../../assets/3.webp";
import Image14 from "../../assets/001-1.webp";
import Image15 from "../../assets/3.webp";
import Image16 from "../../assets/002-1.webp";
import Image17 from "../../assets/3.webp";
import Image18 from "../../assets/001-1.webp";
import Image19 from "../../assets/3.webp";
import Image20 from "../../assets/001-1.webp";
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
    Image9,
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
  ];

  return (
    <>
      <h1 className="Font-About mt-[8vh] mb-[-4vh] sm:mb-[-5vh] text-start px-[7vw] text-[90px] sm:text-[170px] lg:text-[200px] font-bold">
        GALLERY
      </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 px-[7vw] mb-[10vh] space-y-4 scroll-smooth transition-all duration-1000 ease-in-out">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={image}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContainerImages;
