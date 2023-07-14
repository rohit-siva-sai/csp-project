import React from "react";

const Warning = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 font-mono  text-center pb-10 font-semibold text-3xl md:text-4xl">
        The Online Loan Menace
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="md:justify-self-start justify-self-center">
          <picture>
            <img src="/loan2.jpg" alt="" className="md:h-[450px]  w-[500px] rounded-3xl" />
          </picture>
        </div>
        <div className="justify-self-end self-center flex flex-col space-y-8 md:space-y-12">
          <div className="flex flex-col space-y-0">
            <p className="font-semibold text-xl md:text-3xl text-gray-100 ">
              Fraudulent Loan Apps
            </p>
            <p className="text-gray-400 font-medium text-base pt-5">
              The dark side of the online loan industry preying on the
              vulnerable.
            </p>
          </div>
          <div className="flex flex-col space-y-0">
            <p className="font-semibold text-xl md:text-3xl text-gray-100 ">
              Government Intervention
            </p>
            <p className="text-gray-400 font-medium text-base pt-5">
              How Indian authorities are cracking down on fraudulent activities.
            </p>
          </div>
          <div className="flex flex-col space-y-0">
            <p className="font-semibold text-xl md:text-3xl text-gray-100 ">
              Impact on Public
            </p>
            <p className="text-gray-400 font-medium text-base pt-5">
              The devastating effects on citizens caught in the midst of
              cybercrime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
