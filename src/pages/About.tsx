import React, { useEffect, useState } from "react";
import AboutUs from "../components/About/AboutUs.tsx";
import Collage from "../components/About/Collage.tsx";
import NavbarWhite from "../NavbarWhite.tsx";
import ArrowUp from "../assets/Icons/Up_Arrow.svg";
import Founder from "../components/About/Founder.tsx";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(true);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowText(false);
    }, 3000);

    const interval = setInterval(() => {
      setShowText(true);
      clearTimeout(textTimeout);
      setTimeout(() => {
        setShowText(false);
      }, 3000);
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimeout);
    };
  }, []);
  return (
    <>
      <div className="">
        <NavbarWhite />
        <AboutUs />
        <Collage />
        <Founder />
        {/* Scroll to Top Button */}
        {isVisible && (
          <div className="fixed bottom-4 right-0 z-[1000] flex items-center">
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full mr-4 flex items-center bg-white text-white shadow-md hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 ${
                showText ? "w-38 rounded-r mr-[-1px]" : "w-12 rounded-full"
              }`}
            >
              <img
                loading="lazy"
                className="w-6 h-6"
                src={ArrowUp}
                alt="Scroll to top"
              />
              {showText && (
                <span className="ml-3 text-sm text-gray-600 animate-textReveal transition-all duration-1000 transform">
                  Click to go Top!
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
