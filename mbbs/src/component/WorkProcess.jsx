import React from "react";
import WorkProcessLeftSide from "./WorkProcessLeftSide";
import AdmissionAssistance from "./AdmissionAssistance";

const WorkProcess = () => {
  return (
    <div className="flex md:max-w-[80%] sm:max-w-[90%] lg:max-w-[90%] px-10 m-auto mb-10 gap-10 mt-20">
      <div className="lg:w-2/3 lg:block hidden sticky top-0 h-fit">
        <WorkProcessLeftSide />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-7xl">
            Our Work <span className="text-red-600">Process</span>
          </h1>
          <p className="text-2xl">Streamlining Operations for Efficiency</p>
        </div>

        <div className="w-full py-10">
          <AdmissionAssistance />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
