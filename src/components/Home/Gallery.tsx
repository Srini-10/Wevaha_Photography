import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../../assets/demo1.jpg";
import Demo2 from "../../assets/demo2.jpg";
import Demo3 from "../../assets/demo3.jpg";
import Demo4 from "../../assets/demo4.jpg";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

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

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element

    const moveX = (x - rect.width / 2) / 15; // Adjusted for smoother effect
    const moveY = (y - rect.height / 2) / 15;

    container.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const images = [Demo1, Demo2, Demo3, Demo4, Demo1, Demo2, Demo3, Demo4];
  return (
    <>
      <div className="flex justify-between items-center w-full bg-white h-screen px-[8vw] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="w-full h-screen bg-white items-center justify-center">
          <h1 className="Font-About z-50 mt-[0px] relative text-[200px] font-bold">
            GALLERY
          </h1>
          <div
            className="w-full h-[60vh] mt-[-40px] flex overflow-x-scroll overflow-y-scroll gap-5"
            ref={carouselRef}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="parallax-container w-[20vw] min-w-[300px] h-full bg-gray-200 flex items-center justify-center rounded"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={src}
                  alt={`Placeholder ${index + 1}`}
                  className="w-full h-full object-cover shadow-md border-[1.5px] border-gray-200 rounded"
                />
              </div>
            ))}
            <iframe
              title="animation"
              className="absolute right-[50px] w-[130px] z-50 mt-[165px]"
              src="https://lottie.host/embed/bda50e50-7c17-4a38-941a-1708b955a4df/bPhWC8UGtn.json"
            ></iframe>
          </div>
        </div>
        <div className="min-w-[300px] absolute right-20 mt-40 min-h-full bg-gradient-to-l from-white to-transparent flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Gallery;
