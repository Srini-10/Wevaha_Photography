import React, { useState, useEffect } from "react";
import Header from "../components/Home/Header.tsx";
import About from "../components/Home/About.tsx";
import AnimationImages from "../components/Home/AnimationImages.tsx";
import Footer from "../Footer.tsx";
import ArrowUp from "../assets/Up_Arrow.svg";
import Navbar from "../Navbar.tsx";
import Gallery from "../components/Home/Gallery.tsx";
import Collage from "../components/Home/Collage.tsx";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(true);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
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
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow z-50 scroll-smooth transition-all duration-1000 ease-in-out bg-white">
        <Navbar />
        <Header />
        <AnimationImages />
        <About />
        <Gallery />
        <Collage />
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed bottom-4 right-0 z-[1000] flex items-center">
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full mr-4 flex items-center bg-white text-white shadow-md hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 ${
              showText ? "w-38 rounded-r mr-[-1px]" : "w-12 rounded-full"
            }`}
          >
            <img className="w-6 h-6" src={ArrowUp} alt="Scroll to top" />
            {showText && (
              <span className="ml-3 text-sm text-gray-600 animate-textReveal transition-all duration-1000 transform">
                Click to go Top!
              </span>
            )}
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
