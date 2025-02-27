import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "@/styles/styles";
import { ComputersCanvas } from "./canvas/index";
const Hero = () => {
  return (
    <section className="w-full relative  h-screen mx-auto">
      <div
        className={` sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto  flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40  violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white  sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi , I am <span className="text-[#915eff]">Harsh</span>
          </h1>

          <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            A Front-End Developer who turns ideas <br className="hidden sm:block"/> into interactive,
            user-friendly experiences. 
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
