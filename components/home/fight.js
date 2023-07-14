import React from "react";

const Fight = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 text-center pb-5 font-semibold text-3xl"></p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10 px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="self-center flex flex-col">
          <p className="font-semibold text-4xl md:text-[40px] text-gray-100 ">
            What is a Loan App
          </p>
          <p className="text-gray-400 font-medium text-base pt-5">
            Loan apps are popular financial tools that allow users to borrow
            money quickly and easily. They are available on smartphones and
            other mobile devices, making them accessible to anyone with an
            internet connection. While loan apps may seem convenient, they come
            with several disadvantages that make them a risky choice for
            borrowing money.
          </p>
          <p className="text-gray-400 font-medium text-base pt-5">
            The risk of scams is prevalent in the online lending space. Some
            illegitimate loan apps may operate with the intention of collecting
            personal information or deceiving borrowers into paying fees without
            providing any actual loans. It's crucial to verify the legitimacy of
            the loan app, read user reviews, and exercise caution when sharing
            personal information or making payments.
          </p>
          <p className="text-gray-400 font-medium text-base pt-5">
          Privacy and data security are also significant concerns when using online loan apps. To apply for a loan, users are required to provide personal and financial information, which makes them vulnerable to data breaches and identity theft. It's essential to choose reputable loan apps that prioritize privacy and have robust security measures in place to protect user information.
          </p>
        </div>
        <div className="justify-self-end ">
          <picture>
            <img src="/loan3.jpg" alt="" className="md:h-[500px] rounded-3xl" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Fight;
