import React, { useEffect } from "react";
import { members } from "../../data/members";
import AOS from "aos";

import "aos/dist/aos.css";
import styles from "../../styles/Home.module.css";

const Member = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div className="flex flex-col items-center space-y-2 pt-6 justify-center text-white">
        <p className={` ${styles.meet} text-4xl md:text-5xl `}>Meet Our</p>
        <p className="md:text-3xl text-2xl uppercase  font-semibold tracking-wider ">
          Team
        </p>
      </div>
      <div className="container px-5 pb-10 md:pt-6 mx-auto">
        <div className="flex flex-wrap   ">
          {members.map((item) => {
            return (
              <div
                className="p-4 lg:w-1/3 relative mt-20 md:mt-24 "
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <picture className="absolute md:-top-16 left-[50%] -top-8 md:left-[50%] -translate-x-[50%]  z-30 mx-auto   ">
                  <img
                    src={item.photo}
                    alt=""
                    className="object-cover md:w-48 w-40 md:h-48 h-40  object-center rounded-full "
                  />
                </picture>
                <div className="h-full bg-gray-800 shadow-sm shadow-white bg-opacity-40 px-8 pt-36 pb-12 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-2">
                    {item.post}
                  </h2>
                  <h1 className="title-font sm:text-2xl  text-xl font-medium text-white mb-2">
                    {item.name}
                  </h1>
                  <h1 className="title-font sm:text-2xl tracking-wide text-xl font-medium text-teal-500 mb-4">
                    {item.roll}
                  </h1>
                  <p className="leading-relaxed text-gray-300 mb-3">
                    {item.branch}
                  </p>
                  <p className="text-red-200 font-semibold text-md inline-flex items-center">
                    {item.college}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.meet} text-3xl md:text-5xl text-center underline underline-offset-4 decoration-white decoration-2`}>
        Under the Guidence of
      </div>
      <div
        className=" lg:w-1/3 mx-auto md:px-2 md:py-2 px-7 py-2  relative mt-28 mb-12 "
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <picture className="absolute md:-top-16 left-[50%]   -top-8 md:left-[50%] -translate-x-[50%]  z-30 mx-auto   ">
          <img
            src={"/logo1.png"}
            alt=""
            className="object-cover md:w-52 w-40 h-40 md:h-52  object-center rounded-full "
          />
        </picture>
        <div className="h-full bg-gray-800 shadow-sm shadow-white bg-opacity-40 px-8 pt-36 pb-12 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-2">
            Asst. Professor
          </h2>
          <h1 className="title-font sm:text-2xl  text-xl font-medium text-white mb-2">
            Mr. B. Chakradhar
          </h1>
          <h1 className="title-font sm:text-2xl tracking-wide text-xl font-medium text-teal-500 mb-4">
        
          </h1>
          <p className="leading-relaxed text-gray-300 mb-3">  Computer Science and Engineering (CSE)</p>
          <p className="text-red-200 font-semibold text-md inline-flex items-center">
            Raghu Institute of Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
