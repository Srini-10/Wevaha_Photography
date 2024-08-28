import React from "react";
import GalleryView from "../components/Gallery/GalleryView.tsx";
import Navbar from "../Navbar.tsx";

const Gallery = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <GalleryView />
      </div>
    </>
  );
};

export default Gallery;
