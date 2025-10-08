"use client";
import Image from "next/image";
import { Raleway } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  useGSAP(() => {
    
    gsap.to(".img-container", {
      borderRadius: "0%",
      ease: "power1",
      scale: 1.5,
      width: "100%",
      height: "100%",
      bottom: "0",
      left: "0",
      transform: "none",
      scrollTrigger: {
        trigger: ".img-container",
        scrub: true,
        start: "top center",
        end: "bottom top",
       
      },
    });
  }, []);

  return (
    <main className="min-h-screen w-full ">
      
      <section className="relative h-[100svh] overflow-hidden">
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1
            className={`${raleway.className} leading-[0.95] tracking-tight text-black`}
          >
            <span className="block font-black not-italic text-[clamp(32px,7vw,110px)]">
              there is no place like
            </span>
            <span className="block italic font-light text-[clamp(72px,18vw,220px)] mt-4">
              home<span className="not-italic">.</span>
            </span>
          </h1>
        </div>

       
      </section>
      <div className="img-container absolute left-1/2 bottom-[-82vmin] -translate-x-1/2 w-[70vmin] h-[140vmin] rounded-t-[50%] overflow-hidden border border-transparent scale-70">
        <Image
          src="/visualsofdana-T5pL6ciEn-I-unsplash.jpg"
          alt="Auvoria Hotel"
          fill
          priority
          className="object-cover"
        />
      </div>

      <section className="h-600">
        
      </section>
    </main>
  );
}
