"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function SmoothScroll() {
  useEffect(() => {
    // Set up smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    // Make smooth scroll available for pill navigation
    (window as any).lenis = lenis;

    // Keep scrolling animation running
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync smooth scroll with GSAP animations
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Clean up when component is removed
    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
