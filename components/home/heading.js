import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import MovingText from "react-moving-text";

const Heading = () => {
  useEffect(() => {
    // const img1 = document.getElementById("img1");
    // document.addEventListener("mousemove", parallax);
    // function parallax(event) {
    //   this.querySelectorAll(".mouse").forEach((shift) => {
    //     const position = shift.getAttribute("value");
    //     const x = (window.innerWidth - event.pageX * position) / 90;
    //     const y = (window.innerHeight - event.pageY * position) / 90;
    //     // console.log(window.innerHeight,"innerheight")
    //     // console.log(window.innerWidth,"innerwidth")
    //     // console.log(event.pageX,"pagex");
    //     // console.log(event.pageY,"pagey");
    //     console.log(x, y, "rohit");

    //     shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    //   });
    // }
    document.addEventListener("mousemove", orgo);
    function orgo(event) {
        
        document.querySelectorAll(".orgo-wrap span").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
  });
  return (
    <div className="relative md:h-[600px] h-[350px]  cursor-default">
      <div className="flex flex-col justify-center absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] items-center z-40">
        <MovingText
          type="shakeMix"
          duration="1000ms"
          delay="0.5s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
          className={`${styles.beware}  text-center tracking-wide`}
        >
          BEWARE!
        </MovingText>
        <MovingText
          type="jelly"
          duration="1000ms"
          delay="5s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
          className="text-rose-600 font-semibold text-2xl md:text-7xl font-mono "
        >
          of Online Loan Frauds
        </MovingText>
      </div>
      <div className={` orgo-wrap ${styles.orgoWrap}`}>
      <span value="-15"></span>
        <span value="5"></span>
        <span value="30"></span>
        <span value="-5"></span>
        <span value="15"></span>
        <span value="15"></span>
        <span value="5"></span>
        <span value="5"></span>
        <span value="10"></span>
      
    </div>

      {/* <div className="absolute top-12 left-[80px]">
        <picture>
          <img
            id="img1"
            src="./logo1.jpg"
            class="mouse"
            value="5"
            width="100"
            height="100"
          />
        </picture>
      </div>
      <div className="absolute bottom-12 right-[80px]">
        <picture>
          <img
            id="img2"
            src="./logo3.jpg"
            value="-5"
            width="200"
            height="200"
            class="mouse"
          />
        </picture>
      </div> */}
    </div>
  );
};

export default Heading;
