
import React from "react";

const Works = () => {
  const projects = [
    {
      image: "/project1.png",
      name: "3D Solar System Planets to Explore",
      content:
        "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      technologies: [
        "/reactjs.png",
        "tailwind.png",
        "typescript.png",
        "Next.js.png",
      ],
    },
    {
      image: "/project1.png",
      name: "3D Solar System Planets to Explore",
      content:
        "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      technologies: [
        "/reactjs.png",
        "tailwind.png",
        "typescript.png",
        "Next.js.png",
      ],
    },


  ];
  return (
    <section className="w-full mx-auto py-16">
      <div className="sm:px-16 px-6  max-w-7xl mx-auto flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-center">
          A small selection of{" "}
          <span className="text-[#915eff]">recent projects</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((value, index) => (
            <div key={index} className="rounded-2xl h-fit  bg-[#0B0D22] px-5 pb-5">
              <div className="h-[60%] overflow-hidden flex justify-center rounded-t-2xl bg-[url('/lightball.png')] bg-cover bg-bottom  relative">
              
                  <img
                  src={value.image}
                  alt=""
                  className=" w-[80%] rotate-[3deg] "
                />
              </div>
              <div className="h-[40%] flex flex-col gap-5 pt-3">
                <h1 className="text-2xl font-semibold">{value.name }</h1>
                <p>{value.content}</p>
                <div className="flex justify-between flex-wrap gap-4">
                  <div className="flex gap-3">
                    {value.technologies.map((value,index)=>(
                      <img key={index}
                           src={value} className="w-8 h-8"
                      />
                    ))}
                  </div>
                  <button className="text-[#915eff]">
                    Check Live Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
