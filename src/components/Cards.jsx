import React from "react";

function Cards() {
  return (
    <div id="Cards" className="hader">
      <h1 id="text-work">03.my work</h1>
      <div className="cards">
        <div className="card">
          <a href="https://configuration-d8.netlify.app/" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              {/* <img src={require("../img/folder.png")} alt="" /> */}
            </div>
            <h1>calculator</h1>
            <p>Initial design for an electronic calculator</p>
            <div className="language">
              <h5>html5</h5>
              <h5>css</h5>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://shoping-bike.netlify.app/" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              <img src={require("../img/folder.png")} alt="" />
            </div>
            <h1>Buy a bike</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className="language">
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://add-card-d8.netlify.app/" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              <img src={require("../img/folder.png")} alt="" />
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className="language">
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://todo-list-d8.netlify.app/" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              <img src={require("../img/folder.png")} alt="" />
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className="language">
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              <img src={require("../img/folder.png")} alt="" />
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className="language">
              <h5>html5</h5>
              <h5>css</h5>
              <h5>react js</h5>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="" target="_blank">
            <div className="icon">
              <img src={require("../img/folder.png")} />
              <img src={require("../img/folder.png")} alt="" />
            </div>
            <h1>Name the project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              recusandae!
            </p>
            <div className="language">
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
