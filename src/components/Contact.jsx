import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div
      id="Contact"
      className="h-[100vh] text-black bg-[#febf00] flex justify-center items-center flex-col "
    >
      <div className="head-contact ">
        <h1 className="text-3xl md:text-5xl">04. Contact</h1>
        <div className="text-2xl text-center flex flex-col gap-5 md:w-[65%] md:text-4xl">
          <h1>Send me a message! </h1>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <button className="btn">
          <a href="mailto:mustafa0780500@gmail.com">send</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
