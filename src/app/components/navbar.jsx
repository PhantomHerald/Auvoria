"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
});

const Navbar = () => {
  const toggleMenu = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useGSAP(() => {
    if (open) {
      gsap.to(panelRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(".plus", {
        rotate: 405,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.fromTo(
      ".menu-link", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.2, 
        delay: 0.2,   
      }
    );
      gsap.fromTo(
      ".social-link", 
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2, 
        delay: 0.2,    
      }
    );
      
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });

      gsap.to(".plus", {
        rotate: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [open]);
  return (
    <div className="top-0 left-0 overflow-hidden overflow-x-hidden ">
      <header className="fixed top-0 left-0 w-full flex justify-between p-10 bg-transparent z-50 ">
        <h1 className={`${raleway.className} text-4xl`}>Auvoria</h1>

        <div className="menucontainer justify-between">
          <button
            className="navbutton relative inline-flex items-center cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            type="button"
            onClick={toggleMenu}
          >
            <h2 className={`${raleway.className} text-3xl`}>Menu</h2>
            <span className="plus ml-2 text-4xl justify-between" id="plus">
              +
            </span>
          </button>
        </div>
      </header>

      <aside
        ref={panelRef}
        className="menupanel fixed top-0 right-0 h-full w-[80%] bg-[#b6ab87] flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-30 backdrop-blur-[12px] rounded-l-[5%] translate-x-full"
        aria-hidden={!open}
      >
        <div className="flex-1 flex flex-col gap-5">
          <ul className="list-none m-0 p-0 flex flex-col gap-2 ">
            <li className="relative overflow-hidden leading-none ">
              <a
                href="/home"
                className="relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[2px] uppercase transition-[background,color] duration-150 ease-linear inlineblock no-underline pr-[1.4rem]"
              >
                <span  className={`menu-link ${raleway.className} inline-block [transform-origin:50%_100%] will-change-transform  hover:text-[#4B4737]`}>
                  Home{" "}
                </span>
              </a>
            </li>
            <li className="relative overflow-hidden leading-none ">
              <a
                href="/about"
                className="relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[2px] uppercase transition-[background,color] duration-150 ease-linear inlineblock no-underline pr-[1.4rem]"
              >
                <span className={`menu-link ${raleway.className} inline-block [transform-origin:50%_100%] will-change-transform  hover:text-[#4B4737]`}>
                  About
                </span>
              </a>
            </li>
            <li className="relative overflow-hidden leading-none ">
              {" "}
              <a
                className="relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[2px] uppercase transition-[background,color] duration-150 ease-linear inlineblock no-underline pr-[1.4rem]"
                href="/location"
              >
                <span className={`menu-link ${raleway.className} inline-block [transform-origin:50%_100%] will-change-transform  hover:text-[#4B4737]`}>
                  Our location
                </span>
              </a>
            </li>
            <li className="relative overflow-hidden leading-none ">
              {" "}
              <a
                className="relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[2px] uppercase transition-[background,color] duration-150 ease-linear inlineblock no-underline pr-[1.4rem]"
                href="/contact"
              >
                <span   className={`menu-link ${raleway.className} inline-block [transform-origin:50%_100%] will-change-transform  hover:text-[#4B4737]`}>
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="socialscontainer flex flex-row-reverse pr-[30%] ">
          <div className="socials">
            <h3 className={`${raleway.className} text-[3.5rem]`}>Socials</h3>
            <div>
              <ul  className={`${raleway.className} text-black text-[3rem]`}>
                <li className="social-link hover:text-[#4B4737] cursor-pointer">Twitter</li>
                <li className="social-link hover:text-[#4B4737] cursor-pointer">Instagram</li>
                <li className="social-link hover:text-[#4B4737] cursor-pointer">Whatsapp</li>
                <li className="social-link hover:text-[#4B4737] cursor-pointer" >Tiktok</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
