import React from "react";
import "./Style.css";
import BGImage from "../../assets/People1.jpg";
import Arrow_More from "../../assets/Arrow_More_Icon.svg";
import { Link } from "react-router-dom";

const Collage = () => {
  return (
    <>
      <div
        className="sm:h-[80vh] lg:min-h-screen scroll-smooth transition-all bg-white duration-1000 ease-in-out"
        style={{ boxShadow: "0px 0px 100px 150px rgba(255, 255, 255, 10)" }}
      >
        <div className="sm:w-[65vw] lg:w-[65vw] mx-auto text-center">
          <h1 className="lg:text-[55px] sm:text-[40px] font-medium">
            Wevaha Photography
          </h1>
          <p className="lg:text-[18px] sm:text-[12px] text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            tempore laborum sit maiores atque et, quos, mollitia nobis aliquid
            quis dolorem dolor omnis magnam quidem suscipit facere itaque,
            voluptatibus voluptate!
          </p>
        </div>
        <div className="w-full lg:h-[542px] sm:h-[400px] p-[6%] px-[8vw] items-center mx-auto flex flex-col gap-3 justify-between">
          <div className="w-full lg:h-[180px] sm:h-[150px] flex gap-5">
            <span className="min-w-[34.5vw] grow rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-auto"
                src={BGImage}
                alt=""
              />
            </span>
            <span className="min-w-[25.2%] lg:block sm:hidden h-[180px] rounded-3xl overflow-hidden"></span>
            <span className="absolute lg:block sm:hidden min-w-[60.63vw] lg:h-[375px] rounded-3xl overflow-hidden">
              <img
                src={BGImage}
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
            <span className="lg:min-w-[30.3vw] sm:min-w-[200px] sm:mt-[10px] lg:mt-0 h-[145px] grow pl-3 rounded-2xl">
              <Link
                to={"/gallery"}
                className="hover:scale-[1.01] transition-all duration-700 ease-in-out lg:text-[40px] sm:text-[25px] flex gap-5 mt-2 font-bold"
              >
                SEE MORE{" "}
                <img
                  className="sm:w-[30px] lg:w-[70px]"
                  src={Arrow_More}
                  alt=""
                />
              </Link>
              <div className="lg:w-[244px] sm:w-[122.5px] sm:h-[1.5px] lg:h-[2px] sm:mt-[-6px] lg:mt-[-20px] bg-black "></div>
              <div className="lg:text-[20px] sm:text-[13px] font-medium sm:leading-[27px] lg:leading-[40px] sm:mt-3 lg:mt-5 flex flex-col justify-between">
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] lg:text-[35px] text-[#9a0104]">
                    100+
                  </b>{" "}
                  Successful Projects
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] lg:text-[35px] text-[#9a0104]">
                    150+
                  </b>{" "}
                  Happy Clients
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font sm:text-[28px] lg:text-[35px] text-[#9a0104]">
                    5+
                  </b>{" "}
                  Years of Experience
                </p>
              </div>
            </span>
          </div>
          <div className="w-full sm:h-[183px] flex lg:items-start lg:mt-[40px] sm:items-center gap-5">
            <span className="min-w-[50.8%] sm:h-[155px] lg:h-[145px] sm:opacity-100 lg:opacity-0 grow rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-auto"
                src={BGImage}
                alt=""
              />
            </span>
            <span className="min-w-[45%] sm:h-[135px] lg:h-[145px] sm:mt-[0px] lg:mt-[0px] rounded-3xl overflow-hidden">
              <img
                className="object-cover w-full h-auto"
                src={BGImage}
                alt=""
              />
            </span>
          </div>
          {/* <div className="w-full h-[25vh] grid grid-cols-2 gap-5">
      <span className="min-w-[47.5%] bg-green-400 rounded-3xl overflow-hidden">
        <img src={BGImage} alt="" />
      </span>
      <span className="min-w-[47.5%] bg-blue-400 rounded-3xl overflow-hidden">
        <img src={BGImage} alt="" />
      </span>
    </div> */}
        </div>
      </div>
    </>
  );
};

export default Collage;
