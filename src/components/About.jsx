import React from "react";
import Veyselpic from "../assests/veyselpic.jpg";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
            <div className="sm:text-right text-4xl font-bold ">
              <p>Hi I`m Veysel , nice to meet you.Please take a look around</p>
              <div className="w-10/12 sm:w-10/12 px-4 py-14">
                <img
                  src={Veyselpic}
                  alt="veyselbasbaydar"
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
            <div>
              <p>
                I have graduated from Sakarya University located in Turkey.I
                have received my bachelors degree in Mechanical Engineering in
                2013.After i graduated from I went to England to learn English
                for 9 months, After my language education.I started to work in
                Construction company which called Hak Yapi for 2 years as a
                Mechanical Engineer.During this time we built hospital from the
                scratch.After this project, I was accepted by Airlines Company
                which is called ACT airlines. I have been trained for 6 months
                to get a certificate of Loadmaster degree in Airline Cargo
                company. I have an experience in Aircraft Loadmaster. Started
                2017-2020, I have worked with Boeing 747-400 freighter cargo. I
                moved USA with my wife in 2020 (before pandemic). i was looking
                for which job is good for me. I've encountered Software
                technologies, I started to search, finally i wanted to spend my
                rest of life as a Software Engineer. I've taken the course from
                FullStack Academy. 17-week immersive software engineering remote
                program, centered on full-stack JavaScript development,
                including: Node.js, Express, Sequelize ORM for PostgreSQL
                databases, React and Redux; along with HTML & CSS, and CS
                fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
