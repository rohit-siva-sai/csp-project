import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiListDashesBold } from "react-icons/pi";
import { FiMail,FiPhone,FiMic } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";

const Data = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 text-center pb-12 font-mono font-semibold text-3xl md:text-4xl">
        The data various loan apps are accessing in India
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="self-center flex flex-col">
          <div className="grid grid-cols-3  gap-x-5 gap-y-4 ">
            <div className="flex flex-col border p-2 rounded-lg space-y-3 items-center">
              <HiOutlineLocationMarker className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
                precise location
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <PiListDashesBold className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
                user's name
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <FiMail className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               email address
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <FaRegUser className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               user id
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <GiSmartphone className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               device id
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <FiPhone className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               phone number
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <RiContactsBookLine className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               contacts
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <LuPhoneCall className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
               call logs
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <BsChatText className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
              sms / mms
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <BiPhotoAlbum className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
              photos
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <AiOutlineAppstoreAdd className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
              installed apps
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <FiMic className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
              voice recording
              </p>
            </div>
            <div className="flex flex-col  border p-2 rounded-lg  space-y-3 items-center">
              <VscFileSubmodule className="text-white " size={45} />
              <p className="text-gray-400 text-lg font-medium uppercase">
                files / docs
              </p>
            </div>
          </div>
        </div>
        <div className="justify-self-end self-center">
          <picture>
            <img
              src="/loan6.jpg"
              alt=""
              className="md:h-[500px] w-[500px] rounded-3xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Data;
