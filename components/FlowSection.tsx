"use client";

import InteractiveFlowDiagram from "./InteractiveFlowDiagram";

export default function FlowSection() {
  return (
    <section id="flow" className="py-[60px] md:py-[120px] bg-[#f6f6f6]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] mb-[16px] md:mb-[24px] text-[#1a1a1a] text-center">
          Data Flow Diagram
        </h2>
        <div className="flex justify-center mb-[60px] md:mb-[120px]">
          <div className="px-[16px] md:px-[20px] py-[8px] md:py-[10px] bg-[#1a1a1a] rounded-[8px] text-[10px] md:text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff] text-center">
            How the system processes and analyzes your repository
          </div>
        </div>

        <InteractiveFlowDiagram />
      </div>
    </section>
  );
}
