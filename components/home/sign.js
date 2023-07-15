import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ImWarning } from "react-icons/im";


const Sign = () => {
  const [textColor, setTextColor] = useState("#e11d48");

  return (
    <div className="md:py-10   py-6 ">
      <div className="grid grid-cols-1  px-4 md:grid-cols-4 md:px-48 justify-items-start align-middle ">
        <div className="justify-self-start ">
          {/* <picture>
            <img src="/loan9.webp" alt="" className="h-[300px] rounded-full" />
          </picture> */}
        </div>
        <div className=" justify-self-center col-span-2 self-center  flex flex-col">
            <ImWarning className="text-white mx-auto mb-10 animate-bounce" size={60}/>
          <p className="text-purple-500 text-center pb-10 font-semibold text-3xl">
            warning signs for online loan apps
          </p>
         <div className="text-center">
         <TypeAnimation
            // preRenderFirstString={true}
            sequence={[
              500,
              "Unsolicited offers", // initially rendered starting point
              2000,
              "Upfront fees", // initially rendered starting point
              2000,
              "Lack of physical address",
              2000,
              "Unsecured website",
              2000,
              "Pressure tactics and urgency",
              2000,
              "Poor online reputation",
              2000,
              "Unclear loan terms",
              2000,
              "Unreasonable approval rates",
              2000,
              "Unprofessional customer service",
              2000,
              "Lack of licensing/regulation",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
            style={{
             
              
              fontWeight: "semibold",
              display: "inline-block",
              color: textColor,
              textShadow: "1px 2px 2px white",
            }}
            className="text-2xl md:text-4xl font-mono md:font-serif"
          />
         </div>
        </div>
        <div className="justify-self-end ">
          {/* <picture>
            <img src="/loan1.jpg" alt="" className="h-[300px] rounded-full" />
          </picture> */}
        </div>
      </div>
    </div>
  );
};

export default Sign;
