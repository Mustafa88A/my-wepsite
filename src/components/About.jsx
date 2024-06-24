import React from "react";
import Mustafa from "../img/2.jpg";

// const container =
//   "flex  flex-col justify-center items-center md:flex-row-reverse w-full md:px-12";

function About() {
  return (
    <div className="dark:border-b-2 dark:border-primary">
      <div
        id="About"
        className=" h-[100vh] bg-white  text-center dark:bg-secondary "
      >
        <h1 className=" text-5xl  flex items-center justify-center h-32 pt-14  dark:text-primary">
          01. About
        </h1>
        <div className="flex justify-center">
          <div className="flex  flex-col md:justify-evenly  md:w-[80%] md:h-[70vh] items-center md:flex-row-reverse w-full  pt-10">
            <div className="img-my w-3/4  md:w-3/12 2xl:w-3/12 border-4 border-primary ">
              <img className="md:h-[60vh]" src={Mustafa} alt="img" />
            </div>
            <div className="SectionAbout">
              <div>
                <p className="text-[15px] leading-[60px] md:text-[27px] md:w-8/12 dark:text-white">
                  I am Mustafa I am a web developer excited, I live in Iraq,
                  born in 2000, and hold a bachelor’s degree in computer
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
