import React, { useRef, useState, useEffect } from "react";
import Demo1 from "../../assets/demo1.jpg";
import Demo2 from "../../assets/demo2.jpg";
import Demo3 from "../../assets/demo3.jpg";
import Demo4 from "../../assets/demo4.jpg";
import Arrow_Left from "../../assets/Arrow_Left.svg";
import Arrow_Right from "../../assets/Arrow_Right.svg";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const galleryRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images] = useState([
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
  ]);

  useEffect(() => {
    const handlePageScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleCarouselScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const isAtEnd =
          carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnimation(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    const repeatAnimation = () => {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 6000); // Hide the animation after 6 seconds
    };

    // Start the initial animation loop
    const animationInterval = setInterval(() => {
      repeatAnimation();
    }, 16000); // Repeat every 16 seconds (10s delay + 6s animation duration)

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
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
      clearInterval(animationInterval); // Clear the interval on unmount
    };
  }, [navigate]);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 15;
    const moveY = (y - rect.height / 2) / 15;

    container.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleIframeClick = () => {
    navigate("/gallery");
  };

  const nextImage = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const imageWidth = carousel.children[0].clientWidth;
      carousel.scrollTo({ left: nextIndex * imageWidth, behavior: "smooth" });
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      const imageWidth = carousel.children[0].clientWidth;
      carousel.scrollTo({ left: prevIndex * imageWidth, behavior: "smooth" });
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <>
      <div
        className="flex justify-between items-center w-full bg-white h-screen px-[8vw] scroll-smooth transition-all duration-1000 ease-in-out"
        ref={galleryRef}
      >
        <div className="w-full h-screen bg-white items-center justify-center">
          <h1 className="Font-About z-50 mt-[0px] relative text-[200px] font-bold">
            GALLERY
          </h1>
          <div
            className="w-full h-[60vh] mt-[-40px] flex overflow-x-scroll overflow-y-scroll gap-5"
            ref={carouselRef}
            style={{
              scrollSnapType: "x mandatory", // Ensure snapping behavior
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="parallax-container w-[20vw] min-w-[300px] h-full bg-gray-200 flex items-center justify-center rounded"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  scrollSnapAlign: "start", // Align each image at the start
                }}
              >
                <img
                  src={src}
                  alt={`Placeholder ${index + 1}`}
                  className="w-full h-full object-cover shadow-md border-[1.5px] border-gray-200 rounded"
                />
              </div>
            ))}
            <div className="Animation-Pop">
              <p
                onClick={handleIframeClick}
                className="absolute cursor-pointer text-black flex gap-1 right-[6vw] mt-[-15vh] z-[99999] font-semibold text-[20px]"
              >
                Click to See Our <span className="bg-rainbow">Magics!</span>
              </p>
              <iframe
                title="animation"
                className="absolute opacity-30 h-[19vh] right-[0vw] z-50 mt-[-5vh] transform rotate-[110deg] scale-x-[+1] Animated_Button"
                src="https://lottie.host/embed/9fef1aea-b2ef-4885-b3f0-f55357930ecd/IH0aYoUIOf.json"
              ></iframe>
            </div>

            <p
              onClick={handleIframeClick}
              className="cursor-pointer absolute right-[5.2vw] mt-[25.4vh] z-[9999] text-black rounded-full w-20 h-20"
            ></p>
            <iframe
              title="animation"
              className="absolute scale-[1.2] right-[3.5vw] w-[9vw] z-50 mt-[21vh] Animated_Button"
              src="https://lottie.host/embed/bda50e50-7c17-4a38-941a-1708b955a4df/bPhWC8UGtn.json"
              onClick={handleIframeClick}
            ></iframe>
          </div>
          <div className="flex justify-center ml-[-79vw] mt-[10px] gap-3 z-[999999999999]">
            <img
              className="w-7 h-7 border-[1px] shadow-xl cursor-pointer rounded-full"
              src={Arrow_Left}
              onClick={prevImage}
              alt=""
            />
            <img
              className="w-7 h-7 border-[1px] shadow-xl cursor-pointer rounded-full"
              src={Arrow_Right}
              onClick={nextImage}
              alt=""
            />
          </div>
        </div>
        <div className="min-w-[300px] absolute right-20 mt-40 min-h-full bg-gradient-to-l from-white to-transparent flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Gallery;