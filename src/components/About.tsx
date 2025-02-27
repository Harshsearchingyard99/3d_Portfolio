import React from "react";
import { GlobeDemo } from "./GridGlobe";
// import {technologies }from "../constants/index"

import Tech from "@/components/Tech"

import { IoIosSend } from "react-icons/io";


const About: React.FC = () => {
  const scrollToSection = (id :string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  // console.log(technologies)
  return (
    <section id="about" className="w-full mx-auto py-16 ">
          <div className=" sm:px-16 px-6  max-w-7xl mx-auto flex flex-col gap-4 ">
         <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4">
                   <div className="col-span-2 lg:row-span-2 relative rounded-2xl border-2 border-gray-600">
                       <img src="/laptopimage.png" alt="" className="w-full h-full rounded-2xl object-cover overflow-hidden" />
                       <div className="absolute bottom-0 left-0 w-full h-1/3 rounded-2xl bg-gradient-to-t from-black/70 to-transparent"></div>

                         <p className="absolute bottom-10 left-4 text-lg sm:text-[25px] leading-10 font-semibold">
                         I prioritize client 
                          collaboration, fostering <br/>
                           open communication
                         </p>
                   </div>

                   <div className=" p-4 col-span-2 relative overflow-hidden rounded-2xl border-2 border-gray-600">
                       <GlobeDemo/>
                       <p className=" text-[25px] left-10 font-semibold">I’m very flexible with time zone communications</p>
                   </div>
                   <div className="  col-span-2 space-y-3 rounded-2xl border-2 border-gray-600 p-4">
           
                    <p className="text-[25px] font-semibold">My Tech Stack </p>
                     <Tech/>
                   </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4">
              <div className="rounded-2xl border-2 border-gray-600 bg-[url('/bgcard3.png')] bg-cover bg-center p-6 flex flex-col gap-5">
                  <p className="text-[25px] font-semibold ">
                  Tech enthusiast with a passion for development
                  </p>
                  <img src="/s1.png" alt="" className="w-[60%] relative -bottom-6 left-[40%]"/>
              </div> 
              <div className="lg:col-span-2 p-5 flex-col md:flex-row flex items-center gap-3 row-span-2 bg-[url('/bgcard3.png')] bg-cover bg-right border-2 border-gray-600 rounded-2xl">
                  <div className="w-full lg:w-[50%]">
                        <p className="text-sm text-gray-500">The Inside Scoop</p>
                        <p className="font-semibold text-[25px]">Currently building a <br className="hidden sm:block"/>
                          Asset Tracking Software
                        </p>
                  </div>
                  <div className="w-full lg:w-[60%]">
                       <img src="/latestproject.png" alt="" className="w-full h-full object-cover " />
                  </div>
              </div>
              <div className="rounded-2xl flex flex-col gap-5 p-5  justify-center items-center bg-[url('/lightball.png')] bg-start bg-cover border-2 border-gray-600 overflow-hidden">
               <p className="text-[25px] font-semibold text-center ">  Do you want to connect ? </p>

                <button onClick={() => {  scrollToSection('contact'); }} className="border-2 border-white px-5 flex gap-1 items-center py-1 rounded-lg">
                  Send A Message <IoIosSend />
                </button>
              </div>
         </div>
          </div>
    </section>
  );
};

export default About;
