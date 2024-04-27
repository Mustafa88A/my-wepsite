import React from "react";
const larger_card =
  "flex justify-around items-center md:border-2 md:border-black w-[25%] text-4xl md:rounded-3xl md:h-24";
const medium_card =
  "flex justify-around items-center md:border md:border-black md:border-2 md:border-black w-[20%] text-4xl md:rounded-3xl md:h-24";
const small_card =
  "flex justify-around items-center md:border md:border-black md:border-2 md:border-black w-[15%] text-4xl md:rounded-3xl md:h-24";
const p = "hidden md:block";
function Skills() {
  return (
    //الرئيسي
    <div id="Skills" className="h-[100vh] bg-[#f4cf48] gap-11 flex flex-col ">
      <p className="flex items-center justify-center h-[20%]  text-5xl">
        02. Skills
      </p>
      {/* the first line  */}
      <div className="flex  h-[20%] justify-around  items-center  md:gap-24 ">
        <div className={larger_card}>
          <p className={p}>Bootstrap </p>
          <img
            className="img-skills"
            src={require("../img/bootstrap.png")}
            alt=""
          />
        </div>
        <div className={medium_card}>
          <p className={p}>Javascript</p>
          <img className="img-skills" src={require("../img/js22.png")} alt="" />
        </div>
        <div className={small_card}>
          <p className={p}>HTML5</p>
          <img
            className="img-skills"
            src={require("../img/html-5.png")}
            alt=""
          />
        </div>
      </div>
      {/* the line two */}
      <div className=" flex h-[20%] items-center justify-around gap-2 ">
        <div className={larger_card}>
          <p className={p}>TailwindCss</p>
          <img
            className="img-skills"
            src={require("../img/tailwind.png")}
            alt=""
          />
        </div>
        <div className={medium_card}>
          <p className={p}>React Js</p>
          <img
            className="img-skills"
            src={require("../img/react.png")}
            alt=""
          />
        </div>
        <div className={small_card}>
          <p className={p}>CSS</p>
          <img
            className="img-skills"
            src={require("../img/css-3.png")}
            alt=""
          />
        </div>
      </div>
      {/* the line three  */}
      <div className="flex justify-around items-center h-[20%] ">
        <div className={larger_card}>
          <p className={p}>Responsive</p>
          <img
            className="img-skills"
            src={require("../img/responsive.png")}
            alt=""
          />
        </div>
        <div className={medium_card}>
          <p className={p}>Githap</p>
          <img
            className="img-skills"
            src={require("../img/github (1).png")}
            alt=""
          />
        </div>
        <div className={small_card}>
          <p className={p}>Git</p>
          <img className="img-skills" src={require("../img/git.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
