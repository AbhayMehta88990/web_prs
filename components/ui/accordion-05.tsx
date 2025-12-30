"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "1",
    title: "How is this different from normal project documentation or README files?",
    content:
      "Documentation is static — our system is dynamic. It analyzes the real codebase, understands structure and dependencies, and generates context that stay aligned with evolving code instead of becoming outdated.",
  },
  {
    id: "2",
    title: "Why do we even need onboarding automation? Teams already do knowledge transfer.",
    content:
      "Manual onboarding depends on senior developers, doesn't scale, and loses context over time. Our system captures project knowledge, makes it searchable, repeatable, and always available, reducing time for every new developer.",
  },
  {
    id: "3",
    title: "Isn't this just AI explaining code like Copilot?",
    content:
      "No — Copilot explains lines of code. Our tool explains the project, including: architecture relationships, module roles, execution flow, and safe learning path for newcomers.",
  },
  {
    id: "4",
    title: "How does your system actually understand the project?",
    content:
      "We perform structured code analysis: file parsing, dependency mapping, and metadata extraction. Then build an AI context layer so explanations are accurate and grounded in the real codebase — not generic AI guesses.",
  },
  {
    id: "5",
    title: "What problem does this solve in real engineering teams?",
    content:
      "It reduces: onboarding time, dependency on seniors, and beginner mistakes in unfamiliar code. New developers become productive faster and safer, which directly improves team efficiency.",
  },
  {
    id: "6",
    title: "What is the most valuable feature in your MVP right now?",
    content:
      "The interactive onboarding tour — it walks a new developer through key files, modules, and workflows step-by-step, acting like a guided learning companion for the project.",
  },
  {
    id: "7",
    title: "How does this help open-source or large collaborative projects?",
    content:
      "Contributors often struggle to understand big repos. Our assistant provides: guided entry points, safe starter tasks, and architecture awareness. It lowers the barrier to contribution and improves project onboarding quality.",
  },
  {
    id: "8",
    title: "What makes your solution innovative compared to existing tools?",
    content:
      "Existing tools show code — we explain how to understand and navigate it. We combine: code analysis, AI-guided learning, starter task suggestions, and persistent onboarding sessions. It transforms onboarding from documentation reading → interactive learning.",
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="5" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-[#333333]">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-[#666666] duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs text-[#888888]">{item.id}</p>
                <h3
                  className="uppercase relative text-left text-xl md:text-3xl font-bold"
                >
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-[#b3b3b3] pb-6 pl-6 md:px-20 text-base leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
