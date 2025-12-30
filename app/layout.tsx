import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AnimationProvider from "@/components/AnimationProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Repository Memory System | Hackathon Project",
  description: "Stop reading outdated docs, replay how the code actually evolved",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <SmoothScroll />
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
