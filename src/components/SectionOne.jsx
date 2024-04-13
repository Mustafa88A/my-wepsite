import React from "react";

import Navbar from "./Navbar";
function SectionOne() {
  return (
    <div id="container" className="divConte">
      <Navbar />

      <div className="texts md:w-1/2">
        <h4 className="text-sm md:text-2xl">Hi , my name is </h4>
        <h1 className="text-sm md:text-4xl">Mustafa Ahmed</h1>
        <h3 className="text-sm  md:text-6xl">I build things for the web.</h3>
        <p id="text" className=" text-2xl">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
        </p>
      </div>
    </div>
  );
}
export default SectionOne;
