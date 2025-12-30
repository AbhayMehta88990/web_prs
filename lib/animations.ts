import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Set up GSAP animation library
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
export const animationConfig = {
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.08,
};

// Animate hero section entrance
export const animateHero = () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroTagline = document.querySelector(".hero-tagline");
  const heroDescription = document.querySelector(".hero-description");

  if (!heroTitle || !heroTagline || !heroDescription) {
    return;
  }

  const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

  timeline
    .fromTo(
      heroTitle,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.4, delay: 0.2 }
    )
    .fromTo(
      heroTagline,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=0.8"
    )
    .fromTo(
      heroDescription,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );
};

// Animate section titles as you scroll
export const animateSectionTitles = () => {
  const titles = gsap.utils.toArray<HTMLElement>(".animate-title");
  
  if (titles.length === 0) return;
  
  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  });
};

// Animate problem/solution comparison items
export const animateComparisonItems = () => {
  const items = gsap.utils.toArray<HTMLElement>(".comparison-item");
  
  if (items.length === 0) return;
  
  items.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 50%",
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  });
};

// Feature cards animation
export const animateFeatureCards = () => {
  const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
  
  if (cards.length > 0) {
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 45%",
            scrub: 0.5,
          },
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );
    });
  }

  const largeCard = document.querySelector(".feature-large");
  if (largeCard) {
    gsap.fromTo(
      largeCard,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: largeCard,
          start: "top 80%",
          end: "top 45%",
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  }
};

// Flow diagram animations
export const animateFlowDiagram = () => {
  const nodes = gsap.utils.toArray<HTMLElement>(".flow-node");
  const connectors = gsap.utils.toArray<HTMLElement>(".flow-connector");
  
  if (nodes.length > 0) {
    nodes.forEach((node) => {
      gsap.fromTo(
        node,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            end: "top 50%",
            scrub: 0.5,
          },
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        }
      );
    });
  }

  if (connectors.length > 0) {
    connectors.forEach((connector) => {
      gsap.fromTo(
        connector,
        { scaleY: 0, transformOrigin: "top" },
        {
          scrollTrigger: {
            trigger: connector,
            start: "top 85%",
            end: "top 55%",
            scrub: 0.5,
          },
          scaleY: 1,
          ease: "power2.out",
        }
      );
    });
  }
};

// FAQ items animation
export const animateFAQItems = () => {
  const items = gsap.utils.toArray<HTMLElement>(".faq-item");
  
  if (items.length === 0) return;
  
  items.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 55%",
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  });
};

// Future cards animation
export const animateFutureCards = () => {
  const cards = gsap.utils.toArray<HTMLElement>(".future-card");
  
  if (cards.length === 0) return;
  
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  });
};

// Animate all page sections as you scroll
export const animateSections = () => {
  const sections = gsap.utils.toArray<HTMLElement>("section");
  
  sections.forEach((section) => {
    const title = section.querySelector("h2, h1");
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );
    }

    const pills = section.querySelectorAll("[class*='pill'], [class*='badge'], [class*='px-[20px]']");
    pills.forEach((pill, index) => {
      gsap.fromTo(
        pill,
        { opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: pill,
            start: "top 85%",
            end: "top 65%",
            scrub: 1,
          },
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)",
          delay: index * 0.1,
        }
      );
    });

    const cards = section.querySelectorAll("[class*='card'], [class*='box'], [class*='bg-[#1a1a1a]'], [class*='bg-white']");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          ease: "power2.out",
          delay: index * 0.05,
        }
      );
    });

    const gridItems = section.querySelectorAll("[class*='grid'] > *");
    if (gridItems.length > 0) {
      gsap.fromTo(
        gridItems,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: gridItems[0],
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  });
};

// Animate file tree
export const animateFileTree = () => {
  const tree = document.querySelector(".file-tree, [class*='Tree']");
  if (!tree) return;

  gsap.fromTo(
    tree,
    { opacity: 0, x: 50 },
    {
      scrollTrigger: {
        trigger: tree,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 1,
      x: 0,
      ease: "power2.out",
    }
  );
};

// Animate navigation
export const animateNavigation = () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  gsap.fromTo(
    nav,
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
    }
  );
};

// Start all page animations
export const initAnimations = () => {
  if (typeof window === "undefined") return;

  setTimeout(() => {
    animateHero();
    animateNavigation();
    animateSections();
    animateSectionTitles();
    animateComparisonItems();
    animateFeatureCards();
    animateFlowDiagram();
    animateFAQItems();
    animateFutureCards();
    animateFileTree();
  }, 100);
};

// Update animations after content changes
export const refreshScrollTrigger = () => {
  if (typeof window !== "undefined" && ScrollTrigger) {
    ScrollTrigger.refresh();
  }
};
