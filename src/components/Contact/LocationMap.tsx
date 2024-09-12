import React from "react";
import MiddleBar from "./MiddleBar.tsx";

const LocationMap = () => {
  return (
    <>
      <div className="h-[55vh] sm:h-[67.3vh] w-full p-0 bg-white">
        <div className="">
          <MiddleBar />
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between mt-[5vh] h-[27vh] sm:justify-around sm:mt-[10vh] text-[26px]">
          <span className="">
            <b className="text-[7vw] sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Wevaha Photography
            </b>
            <p className="text-[13px] text-neutral-600 sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              Photography is a Story... We Fail to put in a Words...
            </p>
          </span>
          <span className="text-center">
            <b className="text-[7vw] sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Phone
            </b>
            <p className="text-[13px] text-neutral-600 sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              9944706585 <b className="text-black font-medium mx-[3px]">/</b>{" "}
              9080013948
            </p>
          </span>
          <span className="text-center">
            <b className="text-[7vw] sm:text-[20px] lg:text-[25px] xl:text-[30px]">
              Address
            </b>
            <p className="text-[13px] text-neutral-600 sm:text-[13px] lg:text-[15px] xl:text-[17px]">
              Salem, Tamil Nadu
            </p>
          </span>
        </div>
      </div>
      <div className="bg-black mx-auto sm:mb-[-200vh] flex justify-center w-full h-[30vh]">
        <div className="w-[90vw] sm:w-[80vw] h-[36vh] sm:h-[43vh] mt-[-8vh] sm:mt-[-15vh] rounded-t-2xl sm:rounded-t-xl rounded-b-sm saturate-0 overflow-hidden absolute">
          <iframe
            title="wevaha map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d528.1832870649705!2d78.14439868129696!3d11.6782001049507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1726163344244!5m2!1sen!2sin"
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
