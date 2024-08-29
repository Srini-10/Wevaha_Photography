import React from "react";
import GalleryView from "../components/Gallery/GalleryView.tsx";
import Navbar from "../Navbar.tsx";
import ImageGrid from "../components/Gallery/ImageGrid.tsx";
import ContainerImages from "../components/Gallery/ContainerImages.tsx";
import OurServices from "../components/Gallery/OurServices.tsx";
import NavbarDark from "../NavbarDark.tsx";
import SecondService from "../components/Gallery/SecondService.tsx";

const Gallery = () => {
  return (
    <>
      <div className="">
        <NavbarDark />
        {/* <GalleryView /> */}
        <OurServices />
        <SecondService />
        <ContainerImages />
        {/* <ImageGrid /> */}
      </div>
    </>
  );
};

export default Gallery;
