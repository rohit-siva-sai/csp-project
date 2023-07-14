import React from "react";

const Video = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 font-mono  text-center pb-10 font-semibold text-4xl">
        Video Content
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10 px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="md:justify-self-start  justify-self-center">
          <iframe
           
            src="https://www.youtube.com/embed/5iy4p_bYu5Q"
            title="YouTube video player"
          
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
            className="rounded-3xl w-[350px] h-[250px md:w-[530px] md:h-[350px]  border border-gray-600"
          ></iframe>
        </div>
        <div className="justify-self-end  md:pl-10 self-center">
          <div className="text-white text-3xl md:text-5xl pb-8">
            Empowering the Public: Fight Fraud with Awareness
          </div>
          <div className="text-gray-400 text-2xl md:text-3xl ">
            Let&#39;s combat the epidemic of digital disgust by educating
            ourselves and protecting the community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
