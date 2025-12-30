"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from "@/components/ui/LightRays";

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["System", "Assistant", "Navigator", "Analyzer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#000000] overflow-hidden pb-0">
      <div className="absolute inset-0 opacity-40">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={2}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      
      <div className="w-full relative z-10">
        <div className="container mx-auto px-[5%]">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div>
              <Button variant="secondary" size="sm" className="gap-4 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] border-0">
                Hackathon Project <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
                <span className="text-white">Repository Memory</span>
                <br />
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-bold text-white"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#b3b3b3] max-w-2xl text-center">
                Stop reading outdated docs, replay how the code actually evolved. We turn messy codebases into guided, evolution-aware onboarding experiences.
              </p>
            </div>

            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4 bg-white text-black hover:bg-gray-200">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 bg-transparent text-white hover:bg-[#1a1a1a] border border-white" variant="outline">
                View Demo <GitBranch className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
