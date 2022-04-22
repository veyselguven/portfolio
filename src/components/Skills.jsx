/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import HTML from "../assests/html.png";
import Css from "../assests/css.png";
import JavaScript from "../assests/javascript.png";
import Sequelize from "../assests/sequelize-logo.png";
import Postgress from "../assests/postgress.png";
import Node from "../assests/node.png";
import ReactImg from "../assests/react.png";
import GitHub from "../assests/github.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I`ve worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HMTL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="html icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Sequelize}
              alt="Sequelize icon"
            />
            <p className="my-4">SEQUELIZE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Postgress}
              alt="Postgress icon"
            />
            <p className="my-4">POSTGRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODEJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
