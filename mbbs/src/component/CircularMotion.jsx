import React from "react";
import { motion } from "framer-motion";
import doctor_1 from "../assets/doctor_1.jpg";
import doctor_2 from "../assets/doctor_2.jpg";
import doctor_3 from "../assets/doctor_3.jpg";
import doctor_4 from "../assets/doctor_4.jpg";
import doctor_5 from "../assets/doctor_5.jpg";
import doctor_6 from "../assets/doctor_6.jpg";

const images = [
  { src: doctor_1, alt: "Doctor 1" },
  { src: doctor_2, alt: "Doctor 2" },
  { src: doctor_3, alt: "Doctor 3" },
  { src: doctor_4, alt: "Doctor 4" },
  { src: doctor_5, alt: "Doctor 5" },
  { src: doctor_6, alt: "Doctor 6" },
];

const CircularMotion = () => {
  return (
    <div className="relative w-full h-52 lg:h-96 flex justify-center items-center overflow-hidden">
      <motion.div
        className="absolute flex space-x-10" // Spacing between images
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-100%", "0%"] }} // Slide left and loop back
        transition={{
          repeat: Infinity,
          duration: 10, // Total cycle duration
          ease: "linear",
        }}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-32 h-44 md:w-40 md:h-60 rounded-full shadow-lg object-cover"
            />
          </div>
        ))}

        {/* Duplicate Images for Seamless Loop */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <img
              src={image.src}
              alt={`${image.alt}-duplicate`}
              className="w-32 h-44 md:w-40 md:h-60 rounded-full shadow-lg object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CircularMotion;
