import React, { useState } from 'react'
import { TypeAnimation } from "react-type-animation";

const TextAnime = () => {
  const [textColor, setTextColor] = useState("#e11d48");

  return (
    <div style={{
        backgroundImage: `url(csp1.jpg)`,
      }}
      className="group relative bg-contain md:bg-cover w-full h-[200px] md:h-[500px]   bg-center bg-no-repeat " >
      <div className="bg-gray-800/60 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]  w-full flex justify-center py-12" >
      <TypeAnimation
        // preRenderFirstString={true}
        sequence={[
          500,
          "Team DRONACHARYA", // initially rendered starting point
          2000,
          "Our Team Member Pradeep", // initially rendered starting point
          2000,
          "Our Team Member Rohit",
          2000,
          "Our Team Member Pavan",
          2000,
          "Our Team Member Sudheer",
          2000,
          "Our Team Member Kowshik",
          2000,
          "Our Team Member Suhail",
          2000,
          "Our Team Member Aditya",
          2000,
          "Our Team Member Atchuth",
          2000,
          "Our Team Member Likith",
          2000,
          "Our Team Member Thrilochan",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
        cursor={true}
        style={{fontWeight: "semibold", display: "inline-block", color: textColor,textShadow: "1px 2px 2px white"}}
        className='md:text-7xl text-2xl md:font-serif font-mono '
      />
      </div>
    </div>
  )
}

export default TextAnime
