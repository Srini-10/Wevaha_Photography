import React from "react";
import Frame1 from "../../assets/Gallery/1026.webp";
import Frame2 from "../../assets/012-9.webp";
import Frame3 from "../../assets/005-11.webp";
import Down_Arrow from "../../assets/Icons/Arrow_More_Icon.svg";
import "./Style.css";

const ContactUs = () => {
  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("nextComponent2");
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="w-full sm:min-h-screen bg-black min-h-[800px] h-[800px] overflow-hidden sm:flex justify-between px-[7%] pt-[15vh] sm:py-[6%] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="">
          <p className="font-semibold absolute left-14 bottom-10 hidden sm:block sm:text-[18px] lg:text-[25px] text-white opacity-30 text-start">
            Wevaha Photography
          </p>
          <h1 className="Font-About text-white z-50 mt-[0vh] sm:mt-[6vh] relative text-[12vw] sm:text-[91px] lg:text-[130px] xl:text-[170px] font-bold">
            CONTACT US
          </h1>
          <div className="max-w-[90vw] mx-auto gap-3 sm:mx-0 h-[180px] flex sm:w-[230px] shadow-inner sm:shadow-none sm:h-[150px] lg:min-w-[270px] lg:h-[350px] mt-[-10px] sm:mt-[-50px] lg:mt-[-100px] xl:ml-[300px] sm:ml-[80px] lg:ml-[180px] sm:absolute">
            <div className="w-full border-2 border-neutral-800 sm:mt-[50px] lg:mt-[70px] h-[250px]">
              <img
                loading="lazy"
                className="mr-[30px] object-cover h-full w-full"
                src={Frame1}
                alt=""
              />
            </div>
            <div className="w-full border-2 border-neutral-800 sm:mt-[80px] lg:mt-[105px] h-[250px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame2}
                alt=""
              />
            </div>
            <div className="w-full border-2 border-neutral-800 sm:mt-[110px] lg:mt-[140px] h-[250px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="items-end flex text-neutral-500 mt-[80px] lg:w-[400px] xl:w-[500px] sm:w-[40vw]">
          <div className="">
            <p className="text-justify items-end justify-end lg:text-[14px] sm:text-[13px] xl:text-[15px]">
              We’d love to capture your special moments and turn them into
              timeless memories. Whether it’s a wedding, a family portrait, or a
              personal photoshoot, we’re here to make your vision come to life.
              Reach out to us with your ideas, questions, or to book a session.
              Your story deserves to be told through our lens, and we can’t wait
              to be a part of it. Let’s create something beautiful together!
            </p>
            <div className="items-end absolute sm:relative w-[86vw] sm:w-auto justify-end mt-[20px] sm:mt-[10vh] flex"></div>
          </div>
        </div>
      </div>
      <div
        className="scroll-arrow bg-yellow-100 absolute z-[99] hidden sm:block rounded-full sm:top-[53vh] lg:top-[90vh] mt-[0vh] shadow-md sm:ml-[0px] sm:right-[2.1vw] lg:right-[3.5vw] right-[5vw] w-11 h-11 cursor-pointer"
        onClick={scrollToNextComponent}
      >
        <div className="arrow wave">
          <img
            loading="lazy"
            className="w-6 ml-2.5 rotate-[135deg] mt-2.5"
            src={Down_Arrow}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
