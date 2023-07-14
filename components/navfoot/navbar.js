import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("home");
  return (
    <div className="flex justify-center md:justify-end md:space-x-8 space-x-4 md:mr-12 py-3 z-50 sticky top-0 ">
      <Link href={"/"}>
        <div
          onClick={() => {
            setName("home");
          }}
          className={`text-white font-semibold ${
            name == "home" ? "bg-rose-500" : "bg-transparent"
          }  text-lg hover:bg-rose-600 w-20 flex justify-center items-center rounded`}
        >
          Home
        </div>
      </Link>
      <Link href={"/project"}>
        <div onClick={()=>{setName("project")}} className={`text-white font-semibold ${
            name == "project" ? "bg-rose-500" : "bg-transparent"
          }  text-lg hover:bg-rose-600 w-24 flex justify-center items-center rounded`}>
          Project
        </div>
      </Link>
      <Link href={"/team"}>
        <div onClick={()=>{setName("about")}} className={`text-white font-semibold ${
            name == "about" ? "bg-rose-500" : "bg-transparent"
          }  text-lg hover:bg-rose-600 w-24 flex justify-center items-center rounded`}>
          About Us
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
