import React from "react";
import ExpertImage from "../assets/ExpertImage.png"
import expert_2 from "../assets/expert_2.png"


const ExpertConsultation = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-8 items-center ">
      <div className="space-y-14">
        <h1 className="text-3xl md:text-6xl font-semibold">
          Let’s Talk With <span className="text-red-600 font-bold">Expert!</span>
        </h1>
        <div className="mt-6">
          <img
            src={ExpertImage} 
            alt="Business Expert"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your mail"
            className="p-3 border rounded-md w-full"
          />
          <button className="p-3 bg-red-600 text-white rounded-full">
            ➤
          </button>
        </div>
        <p className="text-xl mt-2 text-[#808080]">
          We care about your data in our <span className="text-red-600">privacy policy</span>.
        </p>
      </div>
      <div className="h-full">
        <img src={expert_2} alt="" className="w-full"/>
      </div>
      <div className="space-y-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow space-y-5">
          <h3 className="font-semibold text-xl">📌 Expertise and Experience</h3>
          <p className="text-[#808080] text-lg">15+ years of excellence and unmatched expertise in medical admissions.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow space-y-5">
          <h3 className="font-semibold text-xl">📌 Comprehensive Support</h3>
          <p className="text-[#808080] text-lg">Complete support with personalized guidance for every step of admissions.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow space-y-5">
          <h3 className="font-semibold text-xl">📌 Proven Success</h3>
          <p className="text-[#808080] text-lg">Proven success with top admissions and glowing student testimonials.</p>
        </div>
        <button className="w-full bg-red-600 text-white p-4 rounded-lg font-semibold">
          Book a Free Call
        </button>
      </div>
    </div>
  );
};

export default ExpertConsultation;
