import React from "react";

function Skills() {
  return (
    //الرئيسي
    <div id="Skills" className="SkillsCss ">
      <p className="flex items-center justify-center h-[20%] text-5xl">
        {" "}
        02. Skills
      </p>
      {/* the first line  */}
      <div className="detels-skills">
        <div className="larger-card">
          <p>Bootstrap </p>
          <img
            className="img-skills"
            src={require("../img/bootstrap.png")}
            alt=""
          />
        </div>
        <div className="medium-card">
          <p>Javascript</p>
          <img className="img-skills" src={require("../img/js22.png")} alt="" />
        </div>
        <div className="small-card">
          <p>HTML5</p>
          <img
            className="img-skills"
            src={require("../img/html-5.png")}
            alt=""
          />
        </div>
      </div>
      {/* the line two  */}
      <div className="detels-skill">
        <div className="larger-card">
          <p>TailwindCss</p>
          <img
            className="img-skills"
            src={require("../img/tailwind.png")}
            alt=""
          />
        </div>
        <div className="medium-card">
          <p>React Js</p>
          <img
            className="img-skills"
            src={require("../img/react.png")}
            alt=""
          />
        </div>
        <div className="small-card">
          <p>CSS</p>
          <img
            className="img-skills"
            src={require("../img/css-3.png")}
            alt=""
          />
        </div>
      </div>
      {/* the line three  */}
      <div className="detels-ski">
        <div className="larger-card">
          <p>Responsive</p>
          <img
            className="img-skills"
            src={require("../img/responsive.png")}
            alt=""
          />
        </div>
        <div className="medium-card">
          <p>Githap</p>
          <img
            className="img-skills"
            src={require("../img/github (1).png")}
            alt=""
          />
        </div>
        <div className="small-card">
          <p>Git</p>
          <img className="img-skills" src={require("../img/git.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
