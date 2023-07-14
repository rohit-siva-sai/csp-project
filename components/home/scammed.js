import Link from "next/link";
import React from "react";

const Scammed = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 text-center pb-10 font-semibold text-3xl md:text-4xl">
        What should I do if scammed ?
      </p>
      <div className="md:grid flex flex-col-reverse grid-cols-1 md:gap-y-0 gap-y-10  px-4 md:grid-cols-3 md:px-48 justify-items-start align-middle ">
        <div className="self-center col-span-2 md:pr-8 flex flex-col">
          <div className="text-gray-200 font-semibold  pb-5">
            If you have been a victim of fraud or harassment by an online loan
            app, you can file a complaint with the Reserve Bank of India (RBI).
            The RBI has a dedicated portal called Sachet, which allows you to
            file complaints online. You can also file a complaint by post or by
            email.
          </div>
          <div className="text-gray-200 font-semibold  pb-5">
            Here are the details of the RBI consumer care for online loan apps
            frauds and not repay of loan in online app:
          </div>
          <ul className="list-disc text-white pl-10">
            <li className="pb-5">
              <div className="text-gray-400  font-semibold pb-3">
                <span className="text-orange-600 text-lg">Online :</span> You
                can file a complaint online through the Sachet portal. The link
                to the portal is
              </div>
              <Link href={"https://sachet.rbi.org.in"} target="_blank">
                <div className="border text-red-600 ml-20 p-2 rounded-lg  font-semibold hover:scale-110 transition-transform duration-500 w-fit hover:shadow-sm shadow-white bg-gray-900">
                  File a complaint
                </div>
              </Link>
            </li>
            <li className="pb-5">
              <div className="text-gray-400  font-semibold pb-2">
                <span className="text-orange-600 text-lg"> By post :</span> You
                can also file a complaint by post by sending a letter to the
                following address:
              </div>
              <div className="font-serif font-semibold text-xs pl-20 text-gray-600">
                Chief General Manager
                <br />
                Consumer Education and Financial Literacy Department
                <br />
                Reserve Bank of India
                <br />
                Central Office
                <br />
                Mumbai 400 001
                <br />
              </div>
            </li>
            <li className="pb-5">
              <div className="text-gray-400  font-semibold pb-2">
                <span className="text-orange-600 text-lg">By email :</span> You
                can also file a complaint by email by sending an email to the
                following address:
              </div>
              <Link href="mailto: sachet@rbi.org.in" mailto="sachet@rbi.org.in">
                <div className="border text-red-600 ml-20 p-2 rounded-lg  font-semibold hover:scale-110 transition-transform duration-500 w-fit hover:shadow-sm shadow-white bg-gray-900">
                  File a complaint
                </div>
              </Link>
            </li>
          </ul>
          <div>
            <p className="text-white text-lg font-semibold pb-5">
              When you file a complaint, you will need to provide the following
              information :
            </p>
            <ul className="flex flex-col text-white list-disc space-y-3 pl-10">
              <li>
                <div className="text-gray-400 font-semibold ">
                  Your name and contact details
                </div>
              </li>
              <li>
                <div className="text-gray-400 font-semibold ">
                  The name of the online loan app you were defrauded by
                </div>
              </li>
              <li>
                <div className="text-gray-400 font-semibold ">
                  The details of the fraud or harassment
                </div>
              </li>
              <li>
                <div className="text-gray-400 font-semibold ">
                  Any other relevant information
                </div>
              </li>
            </ul>
          </div>
          <div className="text-white font-semibold pt-5">
          The RBI will investigate your complaint and take appropriate action. If you have been harassed by an online loan app, you can also file a complaint with the police.
          </div>
        </div>
        <div className="justify-self-end self-center">
          <picture>
            <img
              src="/loan13.avif"
              alt=""
              className="md:h-[400px] w-[400px]   rounded-3xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Scammed;
