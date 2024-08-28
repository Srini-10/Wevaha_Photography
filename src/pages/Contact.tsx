import React from "react";
import ContactUs from "../components/Contact/ContactUs.tsx";
import Navbar from "../Navbar.tsx";
import LocationMap from "../components/Contact/LocationMap.tsx";

const Contact = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <ContactUs />
        <LocationMap />
      </div>
    </>
  );
};

export default Contact;
