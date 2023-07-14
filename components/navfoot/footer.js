import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-48 border-t border-gray-600 py-6">
      <div className="flex  justify-around space-x-12">
        <div className="flex ">
          <Link href={"/"}>
            <picture>
              <img
                src="/logo3.png"
                alt=""
                className="w-24 md:w-48 animate-spin -rotate-12 "
              />
            </picture>
          </Link>
          <Link href={"/"}>
            <picture>
              <img
                src="/logo3.png"
                alt=""
                className="w-24 md:w-48 animate-spin rotate-12 "
              />
            </picture>
          </Link>
        </div>
        <div className="flex flex-col space-y-3">
          <Link href={"/"}>
            <div className="text-white font-semibold hover:text-gray-500 transition-colors duration-300 ">
              Home
            </div>
          </Link>
          <Link href={"/project"}>
            <div className="text-white font-semibold hover:text-gray-500 transition-colors duration-300 ">
              Project
            </div>
          </Link>
          <Link href={"/team"}>
            <div className="text-white font-semibold hover:text-gray-500 transition-colors duration-300 ">
              About us
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
