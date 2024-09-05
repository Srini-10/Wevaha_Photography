import React from "react";
import Frame1 from "../../assets/Gallery/1026.webp";
import Frame2 from "../../assets/012-9.webp";
import Frame3 from "../../assets/005-11.webp";
import "./Style.css";

const ContactUs = () => {
  return (
    <>
      <div className="w-full sm:min-h-screen bg-black min-h-[700px] h-[700px] overflow-hidden sm:flex justify-between px-[7%] pt-[15vh] sm:py-[6%] scroll-smooth transition-all duration-1000 ease-in-out">
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
              Hello! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro alias totam impedit culpa sapiente laborum provident
              numquam, non illum dolorum quo in eveniet animi quisquam,
              necessitatibus repellendus molestias neque minus.
            </p>
            <div className="items-end absolute sm:relative w-[86vw] sm:w-auto justify-end mt-[20px] sm:mt-[10vh] flex">
              <button
                className="shadow-inner bg-neutral-900 shadow-neutral-700 py-3 px-8 text-[12px] lg:text-[16px] sm:text-[14px] xl:text-[20px] font-semibold rounded-lg text-white"
                onClick={() => setIsFormOpen(!isFormOpen)}
              >
                Open Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
