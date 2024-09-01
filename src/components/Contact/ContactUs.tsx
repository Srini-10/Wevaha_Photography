import React, { useEffect, useState } from "react";
import Frame1 from "../../assets/Gallery/1026.webp";
import Frame2 from "../../assets/012-9.webp";
import Frame3 from "../../assets/005-11.webp";
import Buttons from "../../assets/Icons/Button_Controls.svg";
import Vector from "../../assets/Icons/Vector.svg";
import "./Style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    service: "",
    message: "",
    to_name: "Wevaha",
    from_name: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      to_name: formData.to_name,
      from_name: formData.name,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        "service_l8hwoab",
        "template_2v3ykau",
        templateParams,
        "TvGK3F0-DTgbMCHz5"
      )
      .then(
        (response) => {
          setSending(false);
          setSuccess(true);
          setFormData({
            email: "",
            name: "",
            phone: "",
            service: "",
            message: "",
            to_name: "Wevaha",
            from_name: "",
          });
          console.log("Success:", response);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setSuccess(false);
              setFadeOut(false);
            }, 1000);
          }, 4000);
        },
        (err) => {
          setSending(false);
          setError("Failed to send message. Please try again.");
          console.error("Error:", err);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setError("");
              setFadeOut(false);
            }, 1000);
          }, 4000);
        }
      );
  };
  return (
    <>
      <div className="w-full sm:min-h-[700px] bg-black min-h-[850px] h-screen overflow-hidden sm:flex justify-between px-[7%] pt-[15vh] sm:py-[6%] scroll-smooth transition-all duration-1000 ease-in-out">
        <div className="">
          <p className="font-semibold absolute left-14 bottom-10 hidden sm:block sm:text-[18px] lg:text-[25px] text-white opacity-30 text-start">
            Wevaha Photography
          </p>
          <h1 className="Font-About text-white z-50 mt-[-3vh] sm:mt-[6vh] relative text-[12vw] sm:text-[91px] lg:text-[130px] xl:text-[170px] font-bold">
            CONTACT US
          </h1>
          <div className="max-w-[90vw] mx-auto gap-3 sm:mx-0 h-[25vh] flex sm:w-[130px] shadow-inner sm:shadow-none sm:h-[170px] lg:min-w-[300px] lg:h-[420px] mt-[-10px] sm:mt-[-50px] lg:mt-[-100px] xl:ml-[300px] sm:ml-[120px] lg:ml-[230px] sm:absolute">
            <div className="w-full border-2 border-neutral-800 mt-[50px] h-[250px]">
              <img
                loading="lazy"
                className="mr-[30px] object-cover h-full w-full"
                src={Frame1}
                alt=""
              />
            </div>
            <div className="w-full border-2 border-neutral-800 mt-[90px] h-[250px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame2}
                alt=""
              />
            </div>
            <div className="w-full border-2 border-neutral-800 mt-[170px] h-[250px]">
              <img
                loading="lazy"
                className="object-cover h-full w-full"
                src={Frame3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[400px] xl:w-[500px] sm:w-[40vw] text-white z-50 mt-[30px] sm:mt-[15vh] lg:mt-[50px] justify-between flex flex-col">
          <div className="w-full bg-neutral-900 rounded-2xl sm:h-[470px] lg:h-[650px]">
            <div className="flex items-center justify-between">
              <img
                loading="lazy"
                src={Buttons}
                alt=""
                className="p-4 scale-[0.8] lg:scale-[1]"
              />
              <p className="text-white font-medium text-[11px] lg:text-[13px]">
                New message
              </p>
              <img
                loading="lazy"
                src={Buttons}
                alt=""
                className="p-4 opacity-0 -z-50 select-none"
              />
            </div>
            <div className="w-full h-[0.5px] -mt-1 bg-neutral-800"></div>
            <form
              onSubmit={handleSubmit}
              className="Responsive-GT-Form-Inputs px-4 pb-3 lg:px-9 lg:pb-4"
            >
              <div className="my-2">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Phone number"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Service:
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[13px] lg:text-[15px] w-[95%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="textarea text-neutral-400 text-[12px] lg:text-[14px] xl:text-[15px] p-2 lg:p-3 xl:p-4 w-full h-[14vh] sm:h-[16vh] bg-neutral-950 mt-2 lg:mt-3 xl:mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <div className="Responsive-GT-Button flex gap-4 sm:mt-3 lg:mt-4 xl:mt-5 justify-end mr-5 items-center">
                {success && (
                  <p className={`text-green-500 ${fadeOut ? "fade-out" : ""}`}>
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className={`text-red-500 ${fadeOut ? "fade-out" : ""}`}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="Responsive-GT-Send-Button shadow-inner flex gap-2 xl:gap-2.5 items-center text-[13px] lg:text-[14px] xl:text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-3 px-5 xl:py-4 xl:px-7 lg:py-3 lg:px-6"
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <img
                        loading="lazy"
                        src={Vector}
                        alt=""
                        className="w-[16px] lg:w-[18px] xl:w-[20px]"
                      />
                      Get in touch
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
