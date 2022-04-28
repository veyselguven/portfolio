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
            <div className>
              <p>
                I have completed my bachelors degree as a Mechanical Engineer in
                2013, and graduated from Sakarya University located in Turkey.
                After I completed my degree, I went to England to become more
                proficient in English. It took me 9 months to complete my
                education in England. After I returned back to Turkey, I have
                started to work in a construction company for 2 years as a
                Mechanical Engineer. The project was to built a hospital from
                the scratch. After the project was completed, I was accepted by
                an ACT airlines company (located in Turkey) as a Loadmaster. I
                have trained for 6 months get certificated in Loadmasters
                degree. Between the dates of 2017-2020, I have worked with
                Boeing 747-400 freighter cargo. I moved to United States with my
                wife in 2020 (before the pandemic). I was looking for a job that
                was suitable for me. I have encountered with Software
                technologies, and started to explore opportunities for Software
                engineering. Finally, I realized that I should spend rest of my
                life as a Software Engineer. After self studying JavaScript
                basis, I got accepted to a competitive programming boot-camp,
                Fullstack Academy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
