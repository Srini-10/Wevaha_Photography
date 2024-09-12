import React, { useState } from "react";
import emailjs from "emailjs-com";
import Buttons from "../../assets/Icons/Button_Controls.svg";
import Vector from "../../assets/Icons/Vector.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    to_name: "Wevaha",
    from_name: "",
    city: "",
    eventType: "",
    event: "",
    date: "",
    location: "",
    venue: "",
    crowd: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      name: formData.name,
      email: formData.email,
      message: formData.message,
      city: formData.city,
      eventType: formData.eventType,
      event: formData.event,
      date: formData.date,
      location: formData.location,
      venue: formData.venue,
      crowd: formData.crowd,
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
            message: "",
            city: "",
            eventType: "",
            event: "",
            date: "",
            location: "",
            venue: "",
            crowd: "",
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
      <div
        id="nextComponent2"
        className="w-full h-[1000px] sm:h-[1200px] bg-black flex items-center justify-center"
      >
        <div className="Form w-[86vw] mt-[-250px] h-[900px]">
          <h1 className="Font-About left-0 text-white z-50 relative text-[85px] sm:text-[91px] lg:text-[130px] xl:text-[170px] font-bold">
            Book Now
          </h1>
          <div className="w-full h-full mt-[-10px] sm:mt-[-20px] lg:mt-[-40px] bg-neutral-900 overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between">
              <img
                onClick={() => setIsFormOpen(!isFormOpen)}
                loading="lazy"
                src={Buttons}
                alt=""
                className="p-4 scale-[0.8] cursor-pointer lg:scale-[1]"
              />
              <p className="text-white font-medium text-[11px] lg:text-[13px]">
                Connect with Us
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
              className="Responsive-GT-Form-Inputs h-full overflow-y-scroll px-4 pb-3 lg:px-9 lg:pb-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 items-center ">
                <div className="my-2">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    Bride / Groom Name:
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
                <div className="my-2">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Enter your city"
                    required
                  />
                  <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
                </div>
              </div>
              <div className="xl:my-4 lg:my-2 sm:my-1">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Select Event Type:
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[13px] lg:text-[15px] w-[95%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  required
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="event1">Telugu Wedding</option>
                  <option value="event1">Tamil Wedding</option>
                  <option value="event1">Brahmin Wedding</option>
                  <option value="event1">Christian Wedding</option>
                  <option value="event1">Muslim Wedding</option>
                  <option value="event1">Kongu Wedding</option>
                  <option value="event1">Birthday</option>
                  <option value="event1">Baby Shower</option>
                  <option value="event1">Others</option>
                </select>
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <h1 className="text-[25px] mt-12 text-white font-semibold">
                Event Details
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 items-center ">
                <div className="xl:my-4 lg:my-2 sm:my-1">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    Select Event:
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="bg-transparent text-neutral-400 text-[13px] lg:text-[15px] w-[95%] ml-2 border-0 focus:ring-0 focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Select event
                    </option>
                    <option value="event1">Wedding</option>
                    <option value="event1">Reception</option>
                    <option value="event1">Pre Wedding Events</option>
                    <option value="event1">Engagement</option>
                    <option value="event1">Maapillai Alaippu</option>
                    <option value="event1">
                      Pelli Koduku or Pelli Koothuru
                    </option>
                    <option value="event1">Nalangi</option>
                    <option value="event1">Sangeeth</option>
                    <option value="event1">Mehandi</option>
                    <option value="event1">Couple Portrait Session</option>
                    <option value="event1">Others</option>
                  </select>
                  <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
                </div>
                <div className="my-2">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                    required
                  />
                  <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
                </div>
                <div className="my-2">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Enter your location"
                    required
                  />
                  <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
                </div>
                <div className="my-2">
                  <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                    Venue:
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Enter venue"
                    required
                  />
                  <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
                </div>
              </div>
              <div className="my-2">
                <label className="text-white font-medium text-[12px] lg:text-[15px] text-left flex">
                  Crowd Strength:
                </label>
                <input
                  type="num"
                  name="crowd"
                  value={formData.crowd}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[12px] lg:text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter crowd strength"
                  required
                />
                <div className="w-full h-[1px] sm:mt-1 lg:mt-3 bg-neutral-700"></div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about the Event!"
                  className="textarea text-neutral-400 text-[12px] lg:text-[14px] xl:text-[15px] p-2 lg:p-3 xl:p-4 w-full h-[14vh] sm:h-[16vh] bg-neutral-950 mt-2 lg:mt-3 xl:mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <div className="Responsive-GT-Button flex mb-16 gap-4 sm:mt-3 lg:mt-4 xl:mt-5 justify-end mr-5 items-center">
                {success && (
                  <p
                    className={`text-green-500 text-[12px] w-[30vw] sm:w-auto sm:text-[13px] lg:text-[14px] xl:text-[15px] ${
                      fadeOut ? "fade-out" : ""
                    }`}
                  >
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p
                    className={`text-red-500 text-[12px] w-[30vw] sm:w-auto sm:text-[13px] lg:text-[14px] xl:text-[15px] ${
                      fadeOut ? "fade-out" : ""
                    }`}
                  >
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

export default Form;
