import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation.tsx";
import "./index.css";

// Lazy loading your pages
const Home = React.lazy(() => import("./pages/Home.tsx"));
const About = React.lazy(() => import("./pages/About.tsx"));
const Gallery = React.lazy(() => import("./pages/Gallery.tsx"));
const Contact = React.lazy(() => import("./pages/Contact.tsx"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Initial page load
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleNavigationStart = () => {
      setLoading(true);
    };

    const handleNavigationComplete = () => {
      setLoading(false);
    };

    window.addEventListener("beforeunload", handleNavigationStart);
    window.addEventListener("load", handleNavigationComplete);

    return () => {
      window.removeEventListener("beforeunload", handleNavigationStart);
      window.removeEventListener("load", handleNavigationComplete);
    };
  }, [location]);

  return (
    <>
      <div className="unresponsive-view hidden select-none w-full h-screen py-[20%] justify-center items-center bg-black">
        <div className="text-center min-h-[20%] max-h-[20%]">
          <h1 className="text-[150px] font-bold text-white">Oops!</h1>
          <p className="text-[25px] text-neutral-600">
            Your device is not compatible with this website.
          </p>
        </div>
      </div>

      <div className="normal-view">
        {loading ? (
          <LoadingAnimation />
        ) : (
          <div className="scroll-smooth focus:scroll-auto">
            <Suspense fallback={<LoadingAnimation />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact_us" element={<Contact />} />
              </Routes>
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
