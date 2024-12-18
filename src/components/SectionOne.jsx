import React, { useState } from "react";

import ThemeToggle from "./ThemeToggle";
function SectionOne() {
  // ضفت الدارك مود بهاي الصفحه
  return (
    <div
      // id="container"
      className="bg-primary dark:text-white h-[90vh]  dark:bg-secondary dark:border-b-2 dark:border-primary"
    >
      {/* md:w-7/12 */}
      <>
        <div className=" w-[85%] h-[70%] flex gap-2 justify-end flex-col ml-[8%] md:justify-center md:w-[70%] md:h-[80%] md:gap-5 ">
          <h4 className="text-sm md:text-2xl">Hi , my name is </h4>
          <h1 className=" md:text-6xl dark:text-primary ">Mustafa Ahmed</h1>
          <h3 className="text-sm  md:text-4xl">I build things for the web.</h3>
          <p id="text" className=" text-2xl">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at
          </p>
        </div>
      </>
      <ThemeToggle />
    </div>
  );
}
export default SectionOne;
