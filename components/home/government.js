import React from "react";

const Government = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 font-mono  text-center pb-10 font-semibold  text-3xl md:text-4xl">
        Government actions on online loan apps in India
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10 px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="justify-self-start self-center">
          <picture>
            <img
              src="/loan12.webp"
              alt=""
              className="md:h-[350px] w-[450px] rounded-3xl"
            />
          </picture>
        </div>
        <div className="justify-self-end self-center">
          <ul className="list-disc text-white px-4 md:px-0 flex flex-col space-y-4">
            <li>
              <div className="text-gray-400 font-semibold">
                The Reserve Bank of India (RBI) issued guidelines for digital
                lending platforms in 2020. These guidelines require these
                platforms to obtain a license from the RBI before operating in
                India.
              </div>
            </li>
            <li>
              <div className="text-gray-400 font-semibold">
                The RBI has also warned borrowers about the risks associated
                with online loan apps, and has encouraged borrowers to only take
                out loans from licensed platforms.
              </div>
            </li>
            <li>
              <div className="text-gray-400 font-semibold">
                The government of India has also taken steps to crack down on
                illegal online loan apps. In 2021, the government amended the
                Information Technology Act to make it illegal for online loan
                apps to use abusive or threatening language to collect debts.
              </div>
            </li>
            <li>
              <div className="text-gray-400 font-semibold">
                The government has also set up a helpline for borrowers who have
                been harassed by online loan apps.
              </div>
            </li>
          </ul>
          <div className="text-gray-300 font-semibold pt-7 text-center text-lg">
            The helpline number is:&nbsp;{" "}
            <span className="underline-offset-4 underline decoration-white font-semibold text-2xl text-red-600">
              1800-11-1188
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Government;
