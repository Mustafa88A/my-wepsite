import React from "react";
const language =
  "md:w-auto  hidden md:block md:flex md:justify-between flex-wrap md:item-center";
const styleCard =
  "w-40 h-56 text-xs md:text-[18px] md:w-[25%] md:h-[40%] p-4  w-48 border-2 border-[#1f4c65] bg-[#f4cf48]  ";
function Cards() {
  return (
    <div
      id="Cards"
      className="bg-white   h-[100vh]  md:w-100% flex flex-col items-center  "
    >
      <h1 className="text-2xl md:text-4xl h-24 flex items-center ">
        03.my work
      </h1>
      <div className="md:w-[90%] md:h-[80%] flex gap-5  flex-wrap  justify-center items-center ">
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col gap-5"
            href="https://configuration-d8.netlify.app/"
            target="_blank"
          >
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img className="w-6" src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>calculator</h1>
            <p>Initial design for an electronic calculator</p>
            <div className={language}>
              <h5>html5</h5>
              <h5>css</h5>
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col gap-5"
            href="https://shoping-bike.netlify.app/"
            target="_blank"
          >
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>Buy a bike</h1>
            <p>A website dedicated to buying bicycles</p>
            <div className={language}>
              <h5>html5</h5>
              <h5>css</h5>
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col gap-5"
            href="https://add-card-d8.netlify.app/"
            target="_blank"
          >
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>add Employee</h1>
            <p>
              A site that allows you to add details of a new employee or modify
              a previous employee
            </p>
            <div className={language}>
              <h5>html5</h5>
              <h5>tailwind</h5>
              <h5>javascript</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col gap-5"
            href="https://todo-list-d8.netlify.app/"
            target="_blank"
          >
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>ToDo List </h1>
            <p>
              The most famous program for setting daily tasks and reminding you
              of them
            </p>
            <div className={language}>
              <h5>html5</h5>
              <h5>javascript</h5>
              <h5>react js</h5>
              <h5>tailwind</h5>
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a className="flex  flex-col gap-5" href="" target="_blank">
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className={language}>
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a className="flex  flex-col gap-5" href="" target="_blank">
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className={language}>
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
