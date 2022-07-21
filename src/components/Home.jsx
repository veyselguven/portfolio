/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
//import Veyselpic from "../assests/veyselpic.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-wrap justify-center"></div>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600"> Hi my name is </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Veysel BASBAYDAR
        </h1>
        <h2 className="text-2xl sm:text-2xl font-bold text-[#8892b0]">
          FullStack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer with experience managing large datasets and
          collaborating with other developers to create responsive web
          applications.
        </p>
        <div>
          {/* <Link to="work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
               View Work 
              <span className="group-hover:rotate-45 duration-300">
                <HiArrowNarrowRight className="ml-5" />
              </span>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
