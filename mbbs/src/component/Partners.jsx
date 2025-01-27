import React from "react";
import sree from "../assets/sree.png";
import mmc from "../assets/mmc.png";
import sgms from "../assets/sgms.png";
import pimr from "../assets/pimr.png";
import aims_delhi from "../assets/aims_delhi.png";
import background_image from "../assets/background_image.jpg";

const Partners = () => {
  const partners = [
    { image: aims_delhi, title: "All India Institute of Medical Sciences Delhi" },
    { image: pimr, title: "Post Graduate Institute of Medical Education and Research" },
    { image: sgms, title: "Sanjay Gandhi Postgraduate Institute of Medical Sciences" },
    { image: mmc, title: "Madras Medical College and Government General Hospital" },
    { image: sree, title: "Sree Chitra Tirunal Institute for Medical Sciences and Technology" },
  ];
  return (
    <>
      <div className="bg-[#F5F5F5] py-10 p-5 mt-8 rounded-3xl">
        <h1 className="text-3xl mb-7 px-2">
          Meet our <span className="text-red-500 font-bold">partners</span>
        </h1>
        <div className="flex flex-wrap gap-5">
          {partners?.map((el) => (
            <div className="bg-white flex gap-2 p-2 rounded-2xl m-auto">
              <img src={el.image} alt="" />
              <p className="flex items-center">{el.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-8 rounded-3xl h-[20vh] lg:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full p-5 bg-black/50 flex items-center justify-center rounded-3xl">
          <h1 className="text-xl sm:text-3xl md:text-6xl lg:text-9xl text-center text-white font-bold">MBBS WALA ?</h1>
        </div>
      </div>
    </>
  );
};

export default Partners;
