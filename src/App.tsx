import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import LoadingAnimation from "./LoadingAnimation.tsx";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handlePageLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    };

    window.addEventListener("load", handlePageLoad);

    return () => window.removeEventListener("load", handlePageLoad);
  }, [location]);

  return (
    <>
      <div className="Tab-View hidden w-full h-screen py-[20%] justify-center items-center bg-black">
        <div className="text-center min-h-[20%] max-h-[20%]">
          <h1 className="text-[150px] font-bold text-white">Oops!</h1>
          <p className="text-[25px] text-neutral-600">
            Your device is not compatible with this website.
          </p>
        </div>
      </div>

      <div className="Normal-View">
        {loading ? (
          <LoadingAnimation />
        ) : (
          <div className="scroll-smooth focus:scroll-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact_us" element={<Contact />} />
            </Routes>
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
