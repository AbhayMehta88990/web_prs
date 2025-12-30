"use client";

import { Component as MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Lock, Download, FileSearch, Brain, MapPin, MessageSquare } from "lucide-react";

const cardData = [
  {
    id: "1",
    title: "Secure GitHub Authentication & Repository Access",
    description: "User logs in using GitHub OAuth. Access permissions are validated before processing. Ensures only authorized repositories can be analyzed.",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Repository Fetching & Codebase Ingestion",
    description: "System clones / fetches the selected GitHub repository. Prepares and structures files for analysis. Removes unnecessary temporary or cache files.",
    icon: <Download className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "Code Parsing & Metadata Extraction",
    description: "Scans project files and folders. Detects key program elements: functions, classes, modules, configuration files. Identifies programming languages and file roles. Generates structured metadata representation of the codebase.",
    icon: <FileSearch className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "AI Context Builder",
    description: "Combines metadata and dependency insights. Converts raw code analysis into structured AI-ready context. Sends refined prompts to the LLM instead of raw code. Improves response accuracy and explanation quality.",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    id: "5",
    title: "AI-Powered Onboarding Tour Generation",
    description: "Generates step-by-step onboarding walkthrough. Explains key files, important modules, project workflow and logic. Acts as a guided learning path for new developers.",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: "6",
    title: "AI-Driven Q&A About Code Sections",
    description: "Developer can ask questions about specific files, modules, flows or components. System responds using project-aware AI context. Works like an interactive code explanation assistant.",
    icon: <MessageSquare className="h-5 w-5" />,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-[40px] pb-[120px] bg-black">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="flex justify-center mb-[60px]">
          <div className="px-[16px] py-[8px] bg-[#1a1a1a] rounded-full text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ffffff]">
            Key Features
          </div>
        </div>

        <div className="flex justify-center items-center min-h-[500px]">
          <MorphingCardStack cards={cardData} defaultLayout="list" initialCard={1} />
        </div>
      </div>
    </section>
  );
}
