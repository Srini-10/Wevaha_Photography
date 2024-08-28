import React from "react";

const MiddleBar = () => {
  return (
    <>
      <div className="w-full h-[70px] flex text-white items-center justify-between px-[7vw] font-semibold text-[29px] bg-black mt-5">
        <p>Available on</p>
        <p className="text-[18px] flex gap-2 font-medium">
          <p className="text-[#9c9c9c]">Monday - Sunday</p>
          <p>:</p> <p>6 AM to 10PM</p>
        </p>
      </div>
    </>
  );
};

export default MiddleBar;
