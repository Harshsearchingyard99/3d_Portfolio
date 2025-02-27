import About from "@/components/About";
import { StarsCanvas } from "@/components/canvas";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Works from "@/components/Works";

export default function Home() {
  return (
  <div className="relative z-0  bg-primary">
   <div className="bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center">
  <Navbar/>
  <Hero/>
   </div>

   <About/>
   <Experience/>

   <Works/>
  
<div className="relative z-0">
  <Contact/>
  <StarsCanvas/>
</div>
  </div>
  );
}
