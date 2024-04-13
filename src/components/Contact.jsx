import React from "react";

function Contact() {
  return (
    <div
      id="Contact"
      className=" h-[100vh] text-black bg-[#febf00] flex justify-center items-center"
    >
      {/* <div className="mylink">
        <h6>1</h6>
        <h6>2</h6>
        <h6>3</h6>
      </div> */}
      <div className="head-contact">
        <h1 className="text-5xl">04. Contact</h1>
        <div className="text-contact">
          <h1>Send me a message! </h1>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div className="text-input">
          <label htmlFor="full-name">
            <input type="text" placeholder="Enter your Name" />
          </label>
          <label htmlFor="full-name">
            <input type="text" placeholder="Enter your E-mali" />
          </label>
        </div>
        <div className="  w-[50%] flex flex-col gap-5 justify-center items-center">
          <textarea
            className="w-[100%]"
            placeholder="Hi Enter your message"
            required=""
            name=""
            id=""
            rows="5"
          ></textarea>
          <button className="btn">send</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
