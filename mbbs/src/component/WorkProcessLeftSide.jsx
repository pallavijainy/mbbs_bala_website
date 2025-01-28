import React from "react";
import doctor_1 from "../assets/doctor_1.jpg";
import doctor_2 from "../assets/doctor_2.jpg";
import doctor_3 from "../assets/doctor_3.jpg";
import doctor_4 from "../assets/doctor_4.jpg";

const WorkProcessLeftSide = () => {
  return (
    <div className="flex flex-col gap-10 ">
<div className="flex justify-start items-center text-3xl gap-6">
      <div
        className="flex justify-center items-center w-20 h-32 md:w-20 md:h-30 rounded-full shadow-lg object-cover"
        style={{ backgroundImage: `url(${doctor_1})`, backgroundSize: "cover", backgroundPosition: "top" }}
      >
        <h1 className="text-center font-bold text-7xl">M</h1>
      </div>
      <h1 className="text-3xl lg:text-7xl font-bold">Pathway</h1>
    </div>
    <div className="flex justify-start items-center text-3xl gap-6">
      <div
        className="flex justify-center items-center w-20 h-32 md:w-20 md:h-30 rounded-full shadow-lg object-cover"
        style={{ backgroundImage: `url(${doctor_2})`, backgroundSize: "cover", backgroundPosition: "top" }}
      >
        <h1 className="text-center font-bold text-7xl">B</h1>
      </div>
      <h1 className="text-3xl lg:text-7xl font-bold">Seamless</h1>
    </div>
    <div className="flex justify-start items-center text-3xl gap-6">
      <div
        className="flex justify-center items-center w-20 h-32 md:w-20 md:h-30 rounded-full shadow-lg object-cover"
        style={{ backgroundImage: `url(${doctor_3})`, backgroundSize: "cover", backgroundPosition: "top" }}
      >
        <h1 className="text-center font-bold text-7xl">B</h1>
      </div>
      <h1 className="text-3xl lg:text-7xl font-bold">Admission</h1>
    </div>
    <div className="flex justify-start items-center text-3xl gap-6">
      <div
        className="flex justify-center items-center w-20 h-32 md:w-20 md:h-30 rounded-full shadow-lg object-cover"
        style={{ backgroundImage: `url(${doctor_4})`, backgroundSize: "cover", backgroundPosition: "top" }}
      >
        <h1 className="text-center font-bold text-7xl">S</h1>
      </div>
      <h1 className="text-3xl lg:text-7xl font-bold">Assistance</h1>
    </div>
    </div>
    
  );
};

export default WorkProcessLeftSide;
