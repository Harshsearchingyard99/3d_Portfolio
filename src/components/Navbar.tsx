import Link from "next/link";
import React, { useState } from "react";
import { styles } from "@/styles/styles"; 

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // 📌 Scroll to Section Function
  const scrollToSection = (id :string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.paddingX} bg-primary w-full flex items-center py-5 fixed top-0 z-20 text-lg`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2" onClick={() => setActive("")}>
          <img src="/logo2.png" alt="Logo" className="w-12 h-12 object-contain" />
          <p>Harsh <span> | Jangid</span></p>
        </Link>

        {/* 🖥 Desktop Navbar */}
        <ul className="hidden sm:flex gap-10 list-none">
          {navLinks.map((value) => (
            <li key={value.id}
              className={`${active === value.title ? "text-white" : "text-secondary"} hover:text-white font-medium`}
            >
              <button onClick={() => { setActive(value.title); scrollToSection(value.id); }}>
                {value.title}
              </button>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu */}
        <div className="sm:hidden">
          <img src={toggle ? 'close.svg' : 'menu.svg'} alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="flex gap-4 flex-col">
              {navLinks.map((value) => (
                <li key={value.id}
                  className={`${active === value.title ? "text-white" : "text-secondary"} hover:text-white font-medium`}
                >
                  <button onClick={() => { 
                    setToggle(false); 
                    setActive(value.title); 
                    scrollToSection(value.id); 
                  }}>
                    {value.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
