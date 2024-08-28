import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BGImage from "../../assets/People1.jpg";
import Scroll1 from "../../assets/People2.jpg";
import Scroll2 from "../../assets/People3.jpg";
import "./Style.css";
import Collage from "./Collage.tsx";
import Gallery from "./Gallery.tsx";

const AnimationImages: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

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
      <div className="relative w-full h-screen overflow-hidden scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          className="absolute top-[-600px] left-0 w-full h-[120vh] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${BGImage})`,
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <div className="w-full h-full p-12">
            <div className="relative w-full h-full border-2 border-transparent">
              <div className="w-[320px] h-[200px] mt-[25vh] rounded">
                <img className="rounded" src={Scroll1} alt="Scroll 1" />
              </div>
              <h1 className="absolute inset-0 flex items-center justify-center font-medium text-[60px] text-white">
                Wevaha
              </h1>
              <div className="w-[230px] h-[320px] absolute bottom-0 right-0 rounded">
                <img className="rounded" src={Scroll2} alt="Scroll 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Collage />
    </>
  );
};

export default AnimationImages;
