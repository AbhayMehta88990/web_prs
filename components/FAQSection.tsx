"use client";

import { Accordion05 } from "./ui/accordion-05";

export default function FAQSection() {
  return (
    <section id="faq" className="py-[120px] bg-[#000000]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-[16px] text-white text-center">
          Related Questions
        </h2>
        <p className="text-[#b3b3b3] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] mb-[60px] text-center">
          Everything you need to know about the system
        </p>

        <Accordion05 />
      </div>
    </section>
  );
}
