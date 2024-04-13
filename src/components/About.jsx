import React from "react";
import Mustafa from "../img/2.jpg";

const container =
  "flex  flex-col justify-center items-center md:flex-row-reverse w-full md:px-12";

function About() {
  return (
    <div id="About" className=" h-[100vh] bg-white text-center">
      <h1 className="text-5xl  flex items-center justify-center h-32 mb-6">
        01. About
      </h1>
      <div className="flex  flex-col justify-center items-center md:flex-row-reverse w-full md:px-12 ">
        <div className="img-my w-1/2  md:w-3/12 2xl:w-3/12">
          <img src={Mustafa} alt="img" />
        </div>
        <div className="SectionAbout">
          <div>
            <p className="md:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              iusto, voluptates veritatis similique, voluptas possimus, maiores
              deserunt aspernatur corrupti nisi a et voluptatibus omnis quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
