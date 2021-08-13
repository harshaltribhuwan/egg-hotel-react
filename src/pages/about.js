import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-white h-screen font-mono ">
        <div className="center-content">
          <h2 className="text-3xl mb-8">
            We are <span className="text-yellow-500">Eggcellient</span>{" "}
          </h2>
          <p className="mb-4">We are known for special egg food.</p>
          <span className="font-extralight">
            Make sure you{" "}
            <span className="text-yellow-500 underline">visit</span> us.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
