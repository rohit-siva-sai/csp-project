import React from "react";

const Scam = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 font-mono  text-center pb-10 font-semibold text-3xl md:text-4xl">
        The Rising Threat
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10 px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="justify-self-start ">
          <picture>
            <img
              src="/loan8.jpg"
              alt=""
              className="md:h-[400px] w-[450px] rounded-3xl"
            />
          </picture>
        </div>
        <div className="justify-self-end self-center">
          <div className="text-white text-3xl md:text-5xl pb-8">
            Don&#39;t get swindled by online loan scams lurking in the shadows.
          </div>
          <div className="text-gray-400 text-2xl md:text-3xl ">
            Discover how fraudulent loan apps prey on unsuspecting victims.
            Don&#39;t fall for their traps!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scam;
