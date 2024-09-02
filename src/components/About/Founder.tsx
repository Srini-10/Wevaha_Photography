import React from "react";
import FounderImage from "../../assets/Founder.jpg";
import Facebook from "../../assets/Icons/FacebookDark.svg";
import Instagram from "../../assets/Icons/InstagramDark.svg";
import Youtube from "../../assets/Icons/YoutubeDark.svg";
import Pinterest from "../../assets/Icons/PinterestDark.svg";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <>
      <div className="w-full bg-neutral-50 mt-[-78vh] sm:shadow-inner sm:mt-0 scroll-smooth">
        <div className="h-[420px] mx-auto w-[90vw] shadow-lg sm:shadow-none sm:w-[85vw] sm:flex gap-[2vw] justify-between items-end mt-[80vh]">
          <div className=" sm:w-[35vw] lg:w-[25vw] bg-blue-100 shadow-md flex flex-col justify-between items-center rounded-t-xl max-h-[370px]">
            <div className="overflow-hidden rounded-t-xl">
              <img className="object-cover" src={FounderImage} alt="" />
            </div>
            <h1 className="text-center w-full pt-1 text-white font-medium h-[44px] bg-black text-[25px]">
              Founder and CEO
            </h1>
          </div>
          <div className="w-[90vw] sm:w-[65vw] bg-white shadow-lg px-5 pt-4 sm:rounded-t-xl h-[350px] sm:h-[275px] lg:h-[300px] xl:h-[320px]">
            <h1 className="flex sm:text-[17px] lg:text-[19.5px] xl:text-[22px] text-[#e22121] font-medium">
              Hello!
            </h1>
            <hr />
            <br />
            <h1 className="flex items-end lg:mb-[-3px] sm:mb-[-6px] mb-[-5px] mt-[-24px] font-normal sm:text-[12px] lg:text-[14px] xl:text-[16px] text-neutral-400">
              This is{" "}
              <p className="text-[25px] mb-[-3.5px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-medium ml-1 sm:-mb-[8.5px] text-black">
                Harish
              </p>
              ,
            </h1>
            <u className="text-[10px] text-blue-400 sm:text-[10px] lg:text-[13px] xl:text-[16px]">
              B.Sc.Film & Television production, M.A Journalism,
            </u>
            <p className="text-[8px] sm:text-[8.5px] lg:text-[11px] xl:text-[13px] text-neutral-600 text-justify pb-[7px] mt-1.5">
              <span className="ml-[1vw]"></span>We have yet to introduce
              ourselves, have we? Welcome to '
              <b className="font-medium text-black">Wevaha Photography</b>'. It
              was founded in 2021 in{" "}
              <b className="font-medium text-black">Salem</b>, India by
              incredibly passionate photographers. The{" "}
              <b className="font-medium text-black">Wevaha Photography</b>{" "}
              offers all types of photography services and Wedding Photography
              is our forte. The scope of '
              <b className="font-medium text-black">Wevaha Photography</b>' is
              the genuineness and artistry we inlay into every piece of
              photography and cinematography we perform. We offer a full
              spectrum of creative photography and cinematography services from
              the initial concept idea to the full unraveling media. Our Vision
              Seizing the moments, and flaunting your stories through
              high-resolution photography that will be here for years to come.
              Our Mission Our mission is to unClick the limitations on creative
              grounds by offering custom-build photography to be in line with
              the wishes of our customers in a comfortable setting capturing
              your charisma and natural expressions while accentuating your
              looks.
            </p>
            <div className="w-full h-[35px] sm:flex justify-between items-end mt-[15px] sm:mt-[-10px] lg:mt-[-12px] xl:mt-[-5px]">
              <div className="flex gap-1 text-[11px] sm:text-[11.5px] lg:text-[14px] xl:text-[16px] font-medium">
                Email:{" "}
                <p className="font-light text-[10px] sm:text-[10.5px] lg:text-[13px] xl:text-[15px] mt-[1px] text-neutral-600">
                  harishviscom1998@gmail.com
                </p>
              </div>
              <div className="flex mt-2 sm:mt-0 sm:justify-end gap-1 sm:gap-1 lg:gap-1.5 xl:gap-2">
                <Link to={""}>
                  <img
                    src={Facebook}
                    alt=""
                    className="w-[20px] h-[20px] sm:w-[15px] sm:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px] hover:scale-[1.1] transition-all duration-500 cursor-pointer ease-in-out"
                  />
                </Link>
                <Link to={""}>
                  <img
                    src={Instagram}
                    alt=""
                    className="w-[20px] h-[20px] sm:w-[15px] sm:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px] hover:scale-[1.1] transition-all duration-500 cursor-pointer ease-in-out"
                  />
                </Link>
                <Link to={""}>
                  <img
                    src={Youtube}
                    alt=""
                    className="w-[20px] h-[20px] sm:w-[15px] sm:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px] hover:scale-[1.1] transition-all duration-500 cursor-pointer ease-in-out"
                  />
                </Link>
                <Link to={""}>
                  <img
                    src={Pinterest}
                    alt=""
                    className="w-[20px] h-[20px] sm:w-[15px] sm:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px] hover:scale-[1.1] transition-all duration-500 cursor-pointer ease-in-out"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
