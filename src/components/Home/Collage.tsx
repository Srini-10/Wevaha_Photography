import React from "react";
import "./Style.css";
import BGImage from "../../assets/People1.jpg";
import Arrow_More from "../../assets/Arrow_More_Icon.svg";
import { Link } from "react-router-dom";

const Collage = () => {
  return (
    <>
      <div className="pt-20 max-h-screen min-h-screen scroll-smooth transition-all bg-white duration-1000 ease-in-out">
        <div className="w-[55%] mx-auto text-center">
          <h1 className="text-[55px] font-medium">Wevaha Photography</h1>
          <p className="text-[18px] text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            tempore laborum sit maiores atque et, quos, mollitia nobis aliquid
            quis dolorem dolor omnis magnam quidem suscipit facere itaque,
            voluptatibus voluptate!
          </p>
        </div>
        <div className="w-full h-[72vh] p-[6%] px-[8%] items-center mx-auto flex flex-col gap-3 justify-between">
          <div className="w-full h-[25vh] flex gap-5">
            <span className="min-w-[38%] grow rounded-3xl overflow-hidden">
              <img src={BGImage} alt="" />
            </span>
            <span className="min-w-[25.2%] h-[30vh] mb-[-0.85vh] rounded-3xl overflow-hidden"></span>
            <span className="absolute min-w-[60.63vw] h-[51.55vh] rounded-3xl overflow-hidden">
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
            <span className="min-w-[30.3%] h-[30vh] grow pl-3 rounded-2xl">
              <Link
                to={"/gallery"}
                className="hover:scale-[1.01] transition-all duration-700 ease-in-out text-[50px] flex gap-5 mt-2 font-bold"
              >
                SEE MORE <img className="w-[70px]" src={Arrow_More} alt="" />
              </Link>
              <div className="w-[244px] h-[2px] mt-[-18px] bg-black "></div>
              <div className="text-[23px] font-medium leading-[45px] mt-5 flex flex-col justify-between">
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font text-[#9a0104]">100+</b> Successful
                  Projects
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font text-[#9a0104]">150+</b> Happy
                  Clients
                </p>
                <p className="flex gap-3 text-gray-500 items-center">
                  <b className="Number_Font text-[#9a0104]">5+</b> Years of
                  Experience
                </p>
              </div>
            </span>
          </div>
          <div className="w-full h-[25vh] flex gap-5">
            <span className="min-w-[50.8%] grow rounded-3xl overflow-hidden"></span>
            <span className="min-w-[45%] h-[20vh] mt-[5vh] rounded-3xl overflow-hidden">
              <img src={BGImage} alt="" />
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
        <div className="h-[300px] mt-[-22vh] bg-gradient-to-b from-white to-transparent scroll-smooth transition-all duration-1000 ease-in-out"></div>
      </div>
    </>
  );
};

export default Collage;
