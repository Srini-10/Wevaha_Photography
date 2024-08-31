import React from "react";
import "./Style.css";
import BGImage1 from "../../assets/011-1.webp";
import BGImage2 from "../../assets/011-1.svg";
import BGImage3 from "../../assets/012-8.webp";
import Arrow_More from "../../assets/Icons/Arrow_More_Icon.svg";
import { Link } from "react-router-dom";

const Collage = () => {
  return (
    <>
      <div
        className="pt-0 sm:pt-5 sm:h-[80vh] lg:min-h-screen scroll-smooth transition-all bg-white duration-1000 ease-in-out"
        style={{ boxShadow: "0px 0px 100px 150px rgba(255, 255, 255, 10)" }}
      >
        <div className="sm:w-[65vw] lg:w-[65vw] w-[85vw] mx-auto text-center">
          <h1 className="lg:text-[55px] sm:text-[40px] text-[8vw] font-medium">
            Wevaha Photography
          </h1>
          <p className="lg:text-[18px] sm:text-[12px] text-[10px] text-gray-500 mt-1">
            Welcome we specialize in Capturing your cherished moments for
            Weddings, Receptions, All Kind of Events & Commercial shoots and
            etc..
          </p>
        </div>
        <div className="w-full lg:h-[542px] sm:h-[400px] p-[6%] px-[8vw] items-center mx-auto flex flex-col gap-3 justify-between">
          <div className="w-full h-[17vh] lg:h-[180px] sm:h-[150px] flex gap-3 sm:gap-5">
            <span className="min-w-[40vw] h-[15vh] sm:h-auto sm:min-w-[34.5vw] grow rounded-3xl overflow-hidden">
              <img
                className="object-cover sm:mt-[-80px] w-full h-full sm:w-full sm:h-auto"
                src={BGImage1}
                alt=""
              />
            </span>
            <span className="min-w-[25.2%] lg:block hidden h-[180px] rounded-3xl overflow-hidden"></span>
            <span className="absolute lg:block sm:hidden min-w-[60.63vw] lg:h-[375px] rounded-3xl overflow-hidden">
              <img
                src={BGImage2}
                alt=""
                className="absolute top-0 left-0 w-[57.6vw] shadow-inner h-full object-cover rounded-3xl"
                style={{
                  clipPath:
                    "polygon(61.5% 51.5%, 61.5% 0%, 100% 0%, 100% 58.2%, 75% 58.2%, 75% 100%, 0 100%, 0 51.5%)",
                  boxShadow: "inset 0 0 20px 5px rgba(0, 0, 0, 80)",
                  filter: "brightness(0.75)",
                }}
              />
            </span>
            <span className="lg:min-w-[30.3vw] sm:min-w-[200px] w-auto mt-[30px] sm:mt-[10px] lg:mt-0 h-[12vh] sm:h-[145px] grow pl-3 rounded-2xl">
              <Link
                to={"/gallery"}
                className="hover:scale-[1.01] transition-all duration-700 ease-in-out lg:text-[40px] sm:text-[25px] text-[10px] flex gap-5 mt-2 font-bold"
              >
                SEE MORE{" "}
                <img
                  className="sm:w-[30px] lg:w-[60px] lg:mb-[10px] w-[15px]"
                  src={Arrow_More}
                  alt=""
                />
              </Link>
              <div className="lg:w-[195px] w-[49px] mt-[-2px] h-[0.5px] sm:w-[122.5px] sm:h-[1.5px] lg:h-[2px] sm:mt-[-6px] lg:mt-[-20px] bg-black "></div>
              <div className="lg:text-[18px] sm:text-[13px] w-[120px] sm:w-full text-[10px] font-medium sm:leading-[27px] lg:leading-[40px] sm:mt-3 lg:mt-5 flex flex-col justify-between">
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] text-[12px] lg:text-[32px] text-[#9a0104]">
                    100+
                  </b>{" "}
                  Successful Projects
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] lg:text-[32px] text-[#9a0104]">
                    150+
                  </b>{" "}
                  Happy Clients
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] lg:text-[32px] text-[#9a0104]">
                    5+
                  </b>{" "}
                  Years of Experience
                </p>
              </div>
            </span>
          </div>
          <div className="w-full sm:h-[183px] flex lg:items-start lg:mt-[40px] sm:items-center gap-5">
            <span className="min-w-[50.8%] mt-[-17px] sm:mt-0 sm:h-[155px] lg:h-[145px] sm:opacity-100 lg:opacity-0 grow rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-full sm:w-full sm:h-auto"
                src={BGImage2}
                alt=""
              />
            </span>
            <span className="min-w-[45%] h-[17vh] mt-[0px] sm:h-[135px] bg-white lg:h-[145px] sm:mt-[0px] lg:mt-[0px] rounded-3xl overflow-hidden">
              <img
                className="object-cover w-auto sm:mt-[-50px] h-full sm:w-full sm:h-auto"
                src={BGImage3}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collage;
