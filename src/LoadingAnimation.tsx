import React from "react";
import "./index.css";

const LoadingAnimation = () => {
  return (
    <div className="flex h-screen items-center bg-black backdrop-blur-3xl justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingAnimation;
