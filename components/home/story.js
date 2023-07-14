import React from "react";

const Story = () => {
  return (
    <div className="md:py-10   py-6 ">
      <p className="text-blue-500 text-center pb-10 font-semibold text-3xl md:text-4xl">
        Real-life stories of the effects of online loan apps in India
      </p>
      <div className="grid grid-cols-1 md:gap-y-0 gap-y-10  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="self-center flex flex-col px-4 md:px-0">
          <ul className="list-disc text-white">
            <li>
              <div className="text-gray-400  font-semibold pb-5">
                A 24-year-old woman in Pune took out a loan of Rs 47,000 using
                an app called Fortune Now. She was unable to repay the loan, and
                the app began harassing her and her family. The harassment
                eventually became so severe that she attempted suicide.
              </div>
            </li>
            <li>
              <div className="text-gray-400  font-semibold pb-5">
                A 38-year-old man in Malad, Mumbai, died by suicide after he was
                unable to repay loans he had taken from online loan apps. His
                family said that he had been receiving threatening messages from
                the apps, and that he had been feeling overwhelmed by his debt.
              </div>
            </li>
            <li>
              <div className="text-gray-400  font-semibold pb-5">
                A 28-year-old woman in Delhi was arrested on charges of
                murdering her husband after she was unable to repay loans she
                had taken from online loan apps. She said that her husband had
                been pressuring her to repay the loans, and that she had killed
                him in a fit of rage.
              </div>
            </li>
          </ul>

          <div className="text-gray-200 font-semibold  text-start">
          These are just a few examples of the negative effects that online loan apps can have in India. These apps often target people who are already struggling financially, and they can trap people in a cycle of debt that is difficult to escape. In some cases, the harassment and threats from these apps can even lead to violence or suicide.


          </div>
        </div>
        <div className="justify-self-end self-center">
          <picture>
            <img
              src="/loan9.webp"
              alt=""
              className="md:h-[400px] w-[400px]   rounded-3xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Story;
