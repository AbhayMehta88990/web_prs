"use client";

import InteractiveFlowDiagram from "./InteractiveFlowDiagram";

export default function FlowSection() {
  return (
    <section id="flow" className="py-[120px] bg-[#f6f6f6]">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-[24px] text-[#1a1a1a] text-center">
          Data Flow Diagram
        </h2>
        <div className="flex justify-center mb-[120px]">
          <div className="px-[20px] py-[10px] bg-[#1a1a1a] rounded-[8px] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
            How the system processes and analyzes your repository
          </div>
        </div>

        <InteractiveFlowDiagram />
      </div>
    </section>
  );
}
