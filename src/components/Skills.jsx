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
    <div name="skils" className="bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">// These are the technologies I`ve worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p>HMTL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
