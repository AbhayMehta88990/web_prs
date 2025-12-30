"use client";

import { Users, RefreshCw, Target, TrendingUp } from "lucide-react";
import MagicBento from "@/components/ui/magic-bento";

const improvements = [
  {
    number: "01",
    title: "Role-Based & Context-Aware Onboarding Paths",
    description: "Instead of one generic onboarding flow, the system adapts based on developer type:",
    details: [
      "Frontend developer → UI components, React routes, state flow",
      "Backend developer → APIs, services, DB layer",
      "DevOps engineer → build scripts, pipelines, deployment logic"
    ],
    icon: <Users className="w-[24px] h-[24px]" />,
  },
  {
    number: "02",
    title: "Auto-Update Onboarding When Code Changes",
    description: "Instead of static onboarding tours:",
    details: [
      "Detect repo changes",
      "Re-analyze affected modules",
      "Update tour intelligently"
    ],
    icon: <RefreshCw className="w-[24px] h-[24px]" />,
  },
  {
    number: "03",
    title: "Starter Task Smart Ranking System",
    description: "Upgrade good-first-issue suggestions with attributes:",
    details: [
      "Difficulty level (Easy / Medium / Hard)",
      "Estimated learning value",
      "Risk level",
      "Area of code affected"
    ],
    icon: <Target className="w-[24px] h-[24px]" />,
  },
  {
    number: "04",
    title: "Basic Performance Insights",
    description: "Not heavy analytics — just useful highlights like:",
    details: [
      "Most complex files",
      "Most coupled modules",
      "Files new devs struggle with most"
    ],
    icon: <TrendingUp className="w-[24px] h-[24px]" />,
  },
];

export default function FutureSection() {
  return (
    <section id="future" className="py-[120px] bg-[#000000]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-[24px] text-[#ffffff] text-center">
          Future Improvements
        </h2>
        
        <div className="flex justify-center mb-[60px]">
          <div className="inline-block px-[20px] py-[10px] bg-[#1a1a1a] rounded-[8px] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
            These are the some improvements which can be done in round 2
          </div>
        </div>

        <MagicBento
          cards={improvements}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 255, 255"
          enableTilt={false}
          enableMagnetism={true}
        />
      </div>
    </section>
  );
}
