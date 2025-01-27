import React from "react";
import heroImage from "../assets/heroImage.jpg";
import Navbar from "../layout/Navbar";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import down_arrow from "../assets/down_arrow.svg";
import up_arrow from "../assets/up_arrow.svg";

const HeroSection = () => {
  return (
    <div
      className="h-full rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "top" }}
    >
      <div className="w-full h-full  backdrop-blur-[3px] p-5">
        <Navbar />
        <div className="flex flex-col justify-center items-center space-y-3 lg:mt-10">
          <img src={down_arrow} alt="" className="h-16 lg:h-full"/>
          <h1 className="text-2xl font-bold">WELCOME TO</h1>
          <div className="flex items-center space-x-2">
            <h1 className="lg:text-9xl text-5xl font-bold">MBBS</h1>
            <h1 className="lg:text-9xl text-5xl font-bold text-[#0082FA]">WALA</h1>
          </div>

          <h1 className="lg:text-8xl text-2xl font-bold">Admission and Counselling</h1>
          <h1 className="lg:text-4xl text-xl font-semibold">Since 2005</h1>
          <img src={up_arrow} alt="" className="h-20 lg:h-full"/>
          <h1 className="italic text-center text-lg lg:text-3xl kalamFont font-bold">
            "Your Trusted Partner on the Path to Becoming a Doctor"
          </h1>
          <p className="KiteOneFont max-w-6xl text-center text-md lg:text-lg">
            Pursuing a career in medicine is a dream for many, but the journey to becoming a doctor is filled with
            challenges and critical decisions. At MBBS Wala, we specialize in providing expert admission and counseling
            support, empowering you to make informed choices at every step. Let us guide you toward achieving your
            medical aspirations with confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
