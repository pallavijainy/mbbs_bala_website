import React, { useState } from "react";

const Navbar = () => {
  const navOptions = ["Home", "Courses", "Placements", "Institution", "Institute Life", "Blog"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center gap-5">
        {navOptions?.map((el, index) => (
          <h1
            key={index}
            className="text-black hover:text-white hover:bg-[#EEA81F] font-semibold text-lg cursor-pointer p-3 rounded-3xl transition-all jostFont"
          >
            {el}
          </h1>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4">
        <h1 className="text-lg font-bold">Navbar</h1>
        <button
          className="text-black hover:text-[#EEA81F] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-3 bg-white shadow-md p-4 rounded-lg">
          {navOptions?.map((el, index) => (
            <h1
              key={index}
              className="text-black hover:text-white hover:bg-[#EEA81F] font-semibold text-lg cursor-pointer p-2 rounded transition-all jostFont"
            >
              {el}
            </h1>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
