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
          <p className="font-semibold absolute left-14 bottom-10 text-[25px] text-[#393939] text-start">
            Wevaha Photography
          </p>
          <h1 className="Font-About text-white z-50 relative text-[170px] font-bold">
            CONTACT US
          </h1>
          <div className="w-[250px] h-[350px] mt-[-100px] ml-[336px] absolute bg-blue-400">
            <img className="object-cover h-full w-full" src={Frame} alt="" />
          </div>
        </div>
        <div className="w-[500px] text-white z-50 mt-[50px] justify-between flex flex-col">
          <div className="w-full bg-neutral-900 rounded-2xl h-[650px]">
            <div className="flex items-center justify-between">
              <img src={Buttons} alt="" className="p-4" />
              <p className="text-white font-medium text-[13px]">New message</p>
              <img
                src={Buttons}
                alt=""
                className="p-4 opacity-0 -z-50 select-none"
              />
            </div>
            <div className="w-full h-[0.5px] -mt-1 bg-neutral-800"></div>
            <form
              onSubmit={handleSubmit}
              className="Responsive-GT-Form-Inputs px-9 pb-4"
            >
              <div className="my-1">
                <label className="text-white font-medium text-[15px]">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Phone number"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Service:
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[95%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="textarea text-neutral-400 p-4 w-full h-[18vh] bg-neutral-950 mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <div className="Responsive-GT-Button flex gap-4 mt-5 justify-end mr-5 items-center">
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
                  className="Responsive-GT-Send-Button shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7"
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <img src={Vector} alt="" className="w-[20px]" />
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
