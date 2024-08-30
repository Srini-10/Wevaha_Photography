import React, { useState } from "react";
import Frame from "../../assets/People1.jpg";
import Buttons from "../../assets/Button_Controls.svg";
import Vector from "../../assets/Vector.svg";
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
      <div className="w-full min-h-[700px] bg-black h-screen overflow-hidden flex justify-between px-[7%] py-[6%] scroll-smooth transition-all duration-1000 ease-in-out">
        {/* <div
          className={`absolute z-30 top-0 left-0 right-0 h-[30vh] opacity-10 bg-gradient-to-b from-black to-transparent transition-all duration-1000 ease-in-out`}
        ></div> */}
        <div className="">
          <p className="font-semibold absolute left-14 bottom-10 sm:text-[18px] lg:text-[25px] text-white opacity-30 text-start">
            Wevaha Photography
          </p>
          <h1 className="Font-About text-white z-50 sm:mt-[10vh] relative sm:text-[91px] lg:text-[130px] xl:text-[170px] font-bold">
            CONTACT US
          </h1>
          <div className="sm:w-[200px] sm:h-[300px] lg:w-[225px] xl:w-[250px] lg:h-[300px] xl:h-[350px] sm:mt-[-55px] lg:mt-[-75px] xl:mt-[-100px] sm:ml-[110px] lg:ml-[200px] xl:ml-[336px] absolute bg-blue-400">
            <img className="object-cover h-full w-full" src={Frame} alt="" />
          </div>
        </div>
        <div className="lg:w-[400px] xl:w-[500px] sm:w-[40vw] text-white z-50 sm:mt-[15vh] lg:mt-[50px] justify-between flex flex-col">
          <div className="w-full bg-neutral-900 rounded-2xl sm:h-[470px] lg:h-[650px]">
            <div className="flex items-center justify-between">
              <img
                src={Buttons}
                alt=""
                className="p-4 sm:scale-[0.8] lg:scale-[1]"
              />
              <p className="text-white font-medium sm:text-[11px] lg:text-[13px]">
                New message
              </p>
              <img
                src={Buttons}
                alt=""
                className="p-4 opacity-0 -z-50 select-none"
              />
            </div>
            <div className="w-full h-[0.5px] -mt-1 bg-neutral-800"></div>
            <form
              onSubmit={handleSubmit}
              className="Responsive-GT-Form-Inputs sm:px-4 sm:pb-3 lg:px-9 lg:pb-4"
            >
              <div className="my-2">
                <label className="text-white font-medium sm:text-[12px] lg:text-[15px] text-left flex">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 sm:text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium sm:text-[12px] lg:text-[15px] text-left flex">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 sm:text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium sm:text-[12px] lg:text-[15px] text-left flex">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 sm:text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Phone number"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium sm:text-[12px] lg:text-[15px] text-left flex">
                  Service:
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 sm:text-[13px] lg:text-[15px] w-[95%] ml-2 border-0 focus:ring-0 focus:outline-none"
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
                  className="textarea text-neutral-400 sm:text-[13px] lg:text-[14px] xl:text-[15px] sm:p-2 lg:p-3 xl:p-4 w-full h-[16vh] bg-neutral-950 sm:mt-2 lg:mt-3 xl:mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
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
                  className="Responsive-GT-Send-Button shadow-inner flex sm:gap-2 xl:gap-2.5 items-center sm:text-[13px] lg:text-[14px] xl:text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white sm:py-3 sm:px-5 xl:py-4 xl:px-7 lg:py-3 lg:px-6"
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <img
                        src={Vector}
                        alt=""
                        className="sm:w-[16px] lg:w-[18px] xl:w-[20px]"
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
