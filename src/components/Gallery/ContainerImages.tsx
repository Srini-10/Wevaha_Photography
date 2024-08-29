import React from "react";
import Image1 from "../../assets/image.png";
import Image2 from "../../assets/People3.jpg";
import Image3 from "../../assets/People1.jpg";
import "./Style.css";

const ContainerImages = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 px-[7vw] my-[10vh] space-y-4  scroll-smooth transition-all duration-1000 ease-in-out">
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image3}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image2}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image3}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image3}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image2}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image3}
          alt=""
        />
      </div>
      <div className="break-inside-avoid">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={Image1}
          alt=""
        />
      </div>
    </div>
  );
};

export default ContainerImages;
