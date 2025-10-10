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
    const box = document.querySelector(".img-container");
    const targetScale =
      Math.max(
        window.innerWidth / box.offsetWidth,
        window.innerHeight / box.offsetHeight
      ) + 1;
    gsap.to(".img-container", {
      borderRadius: "0%",
      ease: "power2.inOut",
      width: "100vw",
      height: "100vh",
      bottom: "0",
      scale: 1.5,
    
      objectFit: "contain",
      scrollTrigger: {
        trigger: ".img-container",
        scrub: true,
        start: "top center",
        end: "bottom top",
      pin:"true",
      },
    });
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden ">
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

      <div className="justify-center items-center object-center flex">
        <div className="img-container absolute bottom-[-82vmin]  w-[70vmin] h-[140vmin] rounded-t-[50%] overflow-x-hidden border border-transparent scale-70">
          <Image
            src="/visualsofdana-T5pL6ciEn-I-unsplash.jpg"
            alt="Auvoria Hotel"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

    
    </main>
  );
}
