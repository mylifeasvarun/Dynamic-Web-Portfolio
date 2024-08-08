import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-2xl text-white font-semibold">Hi, I am</h1>
      <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
        Sai Varun Reddy Gangasani
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-semibold">
        I build things for the web.
      </h1>
      <p className="text-tertiary">
        I am Fullstack Web Developer. currently pursing my master's degree in
        CISE at UF
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
