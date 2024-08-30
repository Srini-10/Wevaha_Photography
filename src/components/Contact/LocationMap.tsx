import React from "react";
import MiddleBar from "./MiddleBar.tsx";

const LocationMap = () => {
  return (
    <>
      <div className="h-[67.3vh] w-full p-0 bg-white">
        <div className="">
          <MiddleBar />
        </div>
        <div className="flex justify-around mt-[20vh] text-[26px]">
          <span className="">
            <b className="sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Wevaha Photography
            </b>
            <p className="sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              Memories, Straight from your Hearts!
            </p>
          </span>
          <span className="text-center">
            <b className="sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Phone
            </b>
            <p className="sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              +91 98945 98945
            </p>
          </span>
          <span className="text-center">
            <b className="sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Address
            </b>
            <p className="sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              Salem, Tamil Nadu
            </p>
          </span>
        </div>
      </div>
      <div className="bg-black mx-auto mb-[-200vh] flex justify-center w-full h-[30vh]">
        <div className="w-[80vw] h-[43vh] mt-[-15vh] rounded-t-xl rounded-b-sm saturate-0 overflow-hidden absolute bg-red-600">
          <iframe
            title="wevaha map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.27043261344!2d78.05589537109506!3d11.653891509092347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1724872855770!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
