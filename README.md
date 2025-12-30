# Repository Memory System

**Stop reading outdated docs, replay how the code actually evolved**

A Next.js application showcasing a living codebase memory system with advanced UI components and animations.

## 🎯 Project Status

✅ **Migration Complete!** Your static HTML site has been migrated to Next.js + React + TypeScript + Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📋 Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### Animation Libraries
- **Framer Motion** - Declarative animations
- **GSAP** - High-performance animations
- **@gsap/react** - GSAP React integration

### UI Components
- **shadcn/ui** - Component architecture pattern
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Utilities
- **clsx + tailwind-merge** - Smart className handling
- **class-variance-authority** - Variant management
- **next-themes** - Dark mode support
- **mathjs** - Mathematical operations

## 📁 Project Structure

```
repository-memory-system/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   └── ui/                # Reusable UI components
│       ├── switch.tsx
│       ├── label.tsx
│       └── [add more components here]
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── asset/                 # Static assets (fonts, images)
│   ├── Fonts/
│   ├── layout/
│   ├── text shaders/      # Component templates to integrate
│   └── theme/
├── public/                # Public static files
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
├── next.config.mjs        # Next.js config
└── components.json        # shadcn/ui config
```

## 🎨 Available Text Shader Components

Your `asset/text shaders/` folder contains 12 ready-to-use React components:

1. **Animated Menu** - Text roll animation on hover
2. **Bento Features** - Spiral SVG feature grid
3. **Card Stack** - Morphing card layouts (stack/grid/list)
4. **Curved Loop** - SVG curved marquee text
5. **Glow Menu** - 3D flip menu with glow effects
6. **Gradual Blur** - Progressive blur overlay
7. **Inverted Cursor** - Custom circular cursor with blend mode
8. **Noise** - Canvas grain texture overlay
9. **Scroll Float** - Character-by-character scroll reveal
10. **Target Cursor** - Animated target reticle cursor
11. **Text Pressure** - Variable font mouse proximity effect
12. **Text Shuffle** - Letter shuffle animation ⚠️ (requires GSAP SplitText - paid)

See `MIGRATION_GUIDE.md` for integration instructions.

## ⚠️ Important Notes

### GSAP SplitText Plugin
The **Text Shuffle** component requires the paid **GSAP SplitText** plugin (Club GSAP membership). If you don't have a license:
- Skip this component, or
- Replace with a free text-splitting solution

### Font Files
Custom fonts are loaded from `asset/Fonts/`:
- **Inter** (Headings) - `Inter.ttc`
- **Geist** (Body) - `Geist-*.otf` variants

Make sure these files exist in your asset folder.

## 📚 Documentation

- **INSTALL_INSTRUCTIONS.md** - Quick installation guide
- **MIGRATION_GUIDE.md** - Detailed migration steps and next phases
- **DEPLOYMENT.md** - Your existing deployment guide

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Components

1. Create component in `components/ui/[name].tsx`
2. Export from the component file
3. Import and use in pages/layouts

Example:
```tsx
import { MyComponent } from "@/components/ui/my-component";

export default function Page() {
  return <MyComponent />;
}
```

### Using the cn() Utility

Merge Tailwind classes safely:
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", conditional && "conditional-class")} />
```

## 🎯 Next Steps

### Phase 1: Set Up Environment ✅
- ✅ Install dependencies: `npm install`
- ✅ Start dev server: `npm run dev`

### Phase 2: Migrate Content (To Do)
- [ ] Create navigation component
- [ ] Migrate hero section
- [ ] Migrate problem/solution section
- [ ] Migrate features section
- [ ] Migrate flow section
- [ ] Migrate FAQ section
- [ ] Add footer

### Phase 3: Add Shader Components (To Do)
- [ ] Copy components from `asset/text shaders/` to `components/ui/`
- [ ] Create demo pages for each component
- [ ] Integrate into main layout

### Phase 4: Polish & Deploy (To Do)
- [ ] Add animations
- [ ] Optimize performance
- [ ] Test responsiveness
- [ ] Deploy to Vercel/Netlify

## 🌐 Deployment

This is a Next.js app and can be deployed to:
- **Vercel** (recommended, made by Next.js creators)
- **Netlify**
- **Any Node.js hosting**

See your existing `DEPLOYMENT.md` for more details.

## 📄 License

[Your License Here]

## 🤝 Contributing

[Your Contributing Guidelines Here]

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
