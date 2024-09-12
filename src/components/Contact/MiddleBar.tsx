import React from "react";
import "./Style.css";

const MiddleBar = () => {
  return (
    <>
      <div className="w-full h-[60px] sm:h-[70px] flex text-white items-center justify-between px-[4vw] sm:px-[7vw] font-semibold text-[19px] sm:text-[29px] bg-black mt-5">
        <p>Available on</p>
        <p className="text-[13px] sm:text-[18px] flex gap-2 font-medium">
          <p className="text-[#9c9c9c]">Monday - Sunday</p>
          <p>:</p> <p>9 AM to 7PM</p>
        </p>
      </div>
    </>
  );
};

export default MiddleBar;
