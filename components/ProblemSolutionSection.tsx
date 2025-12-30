"use client";

import { LinesPatternCard, LinesPatternCardBody } from "./ui/card-with-lines-pattern";
import { Clock, FileX, Users, HelpCircle, Network } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Clock,
    text: "New developers take too long to understand large codebases."
  },
  {
    icon: FileX,
    text: "Documentation becomes outdated as the code changes."
  },
  {
    icon: Users,
    text: "Teams rely too much on senior developers for onboarding."
  },
  {
    icon: HelpCircle,
    text: "Beginners don't know where to start contributing safely."
  },
  {
    icon: Network,
    text: "Understanding architecture and dependencies is difficult."
  },
];

const solutions = [
  {
    icon: Clock,
    text: "AI-guided onboarding explains the project quickly."
  },
  {
    icon: FileX,
    text: "Insights are generated directly from the live codebase."
  },
  {
    icon: Users,
    text: "Knowledge is converted into a reusable self-guided tour."
  },
  {
    icon: HelpCircle,
    text: "The system suggests beginner-friendly starter tasks."
  },
  {
    icon: Network,
    text: "The tool maps and explains key components clearly."
  },
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="pt-[80px] pb-[40px] bg-[#000000]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="flex justify-center mb-[60px]">
          <div className="px-[16px] py-[8px] bg-[#1a1a1a] rounded-full text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
            Problem vs Solution
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-[40px]">
          <LinesPatternCard 
            className="bg-[#000000] border-[#1a1a1a]"
            gradientClassName="from-[#000000]/95 via-[#000000]/70 to-[#000000]/30"
          >
            <LinesPatternCardBody className="p-10">
              <h3 className="animate-title text-[2rem] font-bold mb-[40px] text-[#ffffff]">
                The Problem
              </h3>
              <div className="space-y-[28px]">
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon;
                  return (
                    <div
                      key={index}
                      className="comparison-item flex gap-[16px] items-center"
                    >
                      <div className="flex-shrink-0 w-[40px] h-[40px] rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ffffff]">
                        <IconComponent className="w-[20px] h-[20px]" />
                      </div>
                      <p className="text-[#b3b3b3] text-[16px] leading-[1.6]">
                        {problem.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </LinesPatternCardBody>
          </LinesPatternCard>

          <LinesPatternCard 
            className="bg-[#000000] border-[#1a1a1a]"
            gradientClassName="from-[#000000]/95 via-[#000000]/70 to-[#000000]/30"
          >
            <LinesPatternCardBody className="p-10">
              <h3 className="animate-title text-[2rem] font-bold mb-[40px] text-[#ffffff]">
                The Solution
              </h3>
              <div className="space-y-[28px]">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <div
                      key={index}
                      className="comparison-item flex gap-[16px] items-center"
                    >
                      <div className="flex-shrink-0 w-[40px] h-[40px] rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#ffffff]">
                        <IconComponent className="w-[20px] h-[20px]" />
                      </div>
                      <p className="text-[#b3b3b3] text-[16px] leading-[1.6]">
                        {solution.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </LinesPatternCardBody>
          </LinesPatternCard>
        </div>
      </div>
    </section>
  );
}
