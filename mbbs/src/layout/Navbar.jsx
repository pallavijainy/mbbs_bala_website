import React from "react";

const Navbar = () => {
  const navOptions = ["Home", "Courses", "Placements", "Institution", "Institute Life", "Blog"];
  return (
    <>
      <div className="flex justify-center items-center gap-10 ">
        {navOptions?.map((el) => (
          <h1 className="text-black hover:text-white hover:bg-[#EEA81F] font-semibold text-xl cursor-pointer p-3 rounded-3xl transition-all">
            {el}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Navbar;
