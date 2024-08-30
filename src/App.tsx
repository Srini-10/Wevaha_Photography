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
    // Display loading animation on location change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div className="">
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
