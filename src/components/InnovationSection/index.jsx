"use client"
import React, { useState } from "react";

const InnovationSection = () => {
     const [activeTab, setActiveTab] = useState("AI");
  const items = [
    "AI",
    "Mobile App",
    "WebApp",
    "UI/UX",
    "IOT",
    "DevOps",
    "QA Testing",
    "IT Counselling",
  ];
  return (
    <div className="pt-5 lg:pt-10 flex flex-col justify-center items-center">
      <h2 className="text-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold">
        Unlock Growth with{" "}
        <span className="text-gradient-primary">AI-Powered</span> Innovation
      </h2>
      <p className=" pt-2 md:pt-3 max-w-2xl text-center text-md md:text-lg tracking-wider">
        Transform the way you work with intelligent, scalable solutions.
      </p>

      <div className="mt-5">
        <div className="flex lg:border lg:border-disabled-text rounded-full flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {items.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 md:px-4 md:py-3 rounded-full text-sm  font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "button-background-gradient text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
