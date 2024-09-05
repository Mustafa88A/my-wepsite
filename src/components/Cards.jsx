import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const language =
  "md:w-52  hidden md:block md:flex md:justify-between flex-wrap md:item-center dark:text-black ";
const styleCard =
  "w-32 h-48 text-xs md:text-[18px] md:w-[25%] md:h-[41%] p-2   border-2 border-[#1f4c65] bg-[#f4cf48] dark:text-black dark:border-white pt-8 ";
function Cards() {
  return (
    <div
      id="Cards"
      className="bg-white   h-[100vh]  md:w-100% flex flex-col gap-10 items-center  dark:bg-[#0a192f] dark:border-b-2 dark:border-primary"
    >
      <h1 className="text-2xl md:text-4xl h-16   flex items-center dark:text-primary pt-14">
        03.my work
      </h1>
      <div className=" md:w-[90%]  h-[80%] flex gap-4    flex-wrap  justify-center items-center ">
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col  gap-2 md:gap-6"
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
              <FaHtml5 className="w-7 h-7" />
              <FaCss3Alt className="w-7 h-7" />
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col  gap-2 md:gap-6"
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
              <FaHtml5 className="w-7 h-7" />
              <FaCss3Alt className="w-7 h-7" />
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col  gap-2 md:gap-6"
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
              <FaHtml5 className="w-7 h-7" />
              <RiTailwindCssFill className="w-7 h-7" />
              <TbBrandJavascript className="w-7 h-7" />
              <FaReact className="w-7 h-7" />
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <a
            className="flex  flex-col  gap-2 md:gap-6"
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
              <FaHtml5 className="w-7 h-7" />
              <RiTailwindCssFill className="w-7 h-7" />
              <TbBrandJavascript className="w-7 h-7" />
              <FaReact className="w-7 h-7" />
            </div>
          </a>
        </div>
        <div id="card" className={styleCard}>
          <div className="flex  flex-col  gap-2 md:gap-6">
            <div className="icon">
              <img className="w-6" src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>mint project</h1>
            <p>
              A website for booking with doctors and pharmacies and publishing
              medical articles
            </p>
            <div className={language}>
              {/* <FaHtml5 className="w-7 h-7" />
              <RiTailwindCssFill className="w-7 h-7" />
              <TbBrandJavascript className="w-7 h-7" />
              <FaReact /> */}
              <a
                href="https://github.com/mehdi22256/mint"
                target="_blank"
                // className="border-2 h-6 border-black "
              >
                mint server
              </a>
              <a
                href="https://github.com/mehdi22256/mint-frontend"
                target="_blank"
                // className="border-2 h-6 border-black "
              >
                mint client
              </a>
            </div>
          </div>
        </div>
        <div id="card" className={styleCard}>
          <a className="flex  flex-col  gap-2 md:gap-6" href="" target="_blank">
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
              <FaHtml5 className="w-7 h-7" />
              <RiTailwindCssFill className="w-7 h-7" />
              <TbBrandJavascript className="w-7 h-7" />
              <FaReact className="w-7 h-7" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
