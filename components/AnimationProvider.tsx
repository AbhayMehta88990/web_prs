"use client";

import { useEffect } from "react";
import { initAnimations, refreshScrollTrigger } from "@/lib/animations";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Set up animations when page loads
    initAnimations();

    // Update animations when window is resized
    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{children}</>;
}
