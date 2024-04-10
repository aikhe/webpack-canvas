import React from "react";

import webpackLogo from "../webpack.png";
import tailwindLogo from "../tailwind.png";
import reactLogo from "../react.png";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <img className="mb-4 h-[10rem]" src={webpackLogo} alt="webpack logo" />
      <h1 className="text-3xl">Webpack boilerplate</h1>

      <div className="mt-4 flex gap-[3rem] items-center justify-center">
        <img className="h-10" src={reactLogo} alt="react logo" />
        <img className="h-8" src={tailwindLogo} alt="tailwind logo" />
      </div>

      <h3 className="mt-2 text-2xl">React + Tailwind</h3>

      <div className="flex">
        <span>with&nbsp;</span>
        <a href={`/react-router`} className="underline pointer-events-auto">
          React router.
        </a>
      </div>
    </div>
  );
};

export default Landing;
