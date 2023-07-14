import React from "react";
const array = [
  "Research app reputation and user reviews.",
  "Verify legitimacy and licensing.",
  "Look for a secure website connection (https://).",
  "Read and understand the terms and conditions.",
  "Protect personal information and check privacy policies.",
  "Be cautious of upfront fees.",
  "Verify reliable contact information.",
  "Test customer support responsiveness.",
  "Trust your instincts if something seems suspicious.",
  "Compare multiple options before making a decision.",
  "Don't be afraid to ask for help if you are struggling to repay the loan.",

];

const Safe = () => {
  return (
    <div className="md:py-10  px-4  py-6 ">
      <p className="text-blue-500 text-center pb-10 font-semibold text-3xl md:text-4xl">
      Tips for avoiding the negative effects of online loan apps
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="self-center flex flex-col">
          <ul className="list-disc flex  text-white flex-col space-y-3">
            {array.map((item)=>{
                return (
                    <li key={item}>
                      <div  className="text-gray-400 font-semibold  text-lg">
                      {item}
                      </div>
                    </li>
                )
            })}
          </ul>
        </div>
        <div className="justify-self-end ">
          <picture>
            <img
              src="/loan11.webp"
              alt=""
              className="md:h-[400px]    rounded-3xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Safe;
