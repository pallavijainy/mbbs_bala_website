import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import CircularMotion from "./CircularMotion";



const NewCollege = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 bg-white">
      <h1 className="text-4xl md:text-7xl font-bold text-gray-900 max-w-5xl">
        Let’s talk about new <span className="text-red-600">Knowledge</span> and <span className="text-red-600">Colleges</span>.
      </h1>
      <p className="mt-7 text-gray-600 max-w-2xl text-lg">
        Innovative Learning: In-house LMS, smart classrooms, activity-oriented sessions, audio-video tools, PDFs, worksheets, blogs, and more
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-red-700">Get Started</button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-100">
          <span><FaPlayCircle color="red" size={32} className="opacity-35"/></span>
          Watch Video
        </button>
      </div>
      <CircularMotion/>
      {/* <div className="mt-12 flex flex-wrap justify-center gap-6">
        <img src={doctor_1} alt="Doctor 1" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover" />
        <img src={doctor_2} alt="Doctor 2" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover"/>
        <img src={doctor_3} alt="Doctor 3" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover" />
        <img src={doctor_4} alt="Doctor 4" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover" />
        <img src={doctor_5} alt="Doctor 4" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover" />
        <img src={doctor_6} alt="Doctor 4" className="w-32 h-32 md:w-60 md:h-90 rounded-full shadow-lg object-cover" />
      </div> */}
    </div>
  );
};

export default NewCollege;
