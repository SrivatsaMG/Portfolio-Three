# Moncy Portfolio - Developer Portfolio Website

## Overview

This is a creative developer portfolio website built with React, TypeScript, and Three.js. The project showcases a personal portfolio with advanced 3D animations, smooth scrolling, and interactive visual effects. It features a 3D character model, GSAP-powered animations, and a modern single-page application design.

The portfolio includes sections for landing/hero, about, career experience, work/projects, tech stack visualization (with physics-based 3D spheres), and contact information. The site is designed to be visually impressive with custom cursor effects, smooth scroll animations, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Single-page application with section-based navigation (no router library)

### 3D Graphics Stack
- **Core**: Three.js for 3D rendering
- **React Integration**: @react-three/fiber as the React renderer for Three.js
- **Helpers**: @react-three/drei for common Three.js utilities and abstractions
- **Physics**: @react-three/rapier for physics simulation in the tech stack section
- **Post-processing**: @react-three/postprocessing for visual effects

### Animation System
- **GSAP**: Primary animation library for scroll-triggered animations and timeline-based effects
- **ScrollTrigger**: GSAP plugin for scroll-based animation triggers
- **Lenis**: Smooth scroll library for buttery-smooth page scrolling
- **Custom TextSplitter**: Replacement for GSAP SplitText (since club plugins require license)

### State Management
- **React Context**: LoadingProvider manages global loading state
- **Local State**: Component-level useState for UI interactions

### Configuration
- **Centralized Config**: `src/config.ts` contains all customizable content (developer info, social links, experiences, projects)
- **CSS Variables**: Global theming through CSS custom properties in index.css

### Key Design Patterns
1. **Lazy Loading**: Components like CharacterModel and TechStack are lazy-loaded for performance
2. **Suspense Boundaries**: React Suspense for loading states during code splitting
3. **Ref-based DOM Access**: Direct DOM manipulation for performance-critical animations
4. **Encrypted Assets**: 3D models are encrypted and decrypted at runtime for asset protection

### Component Structure
```
src/
├── components/
│   ├── Character/          # 3D character model and related utilities
│   │   ├── utils/          # Animation, lighting, mouse handling
│   │   └── Scene.tsx       # Main Three.js scene setup
│   ├── styles/             # Component-specific CSS files
│   ├── utils/              # Animation and text utilities
│   └── [Section].tsx       # Page sections (Landing, About, Career, etc.)
├── context/                # React context providers
├── data/                   # Static data (bone names for animations)
└── utils/                  # Shared utilities
```

## External Dependencies

### Core Libraries
- **React 18.3.1**: UI framework
- **Three.js 0.168.0**: 3D graphics library
- **GSAP 3.12.7**: Animation platform (note: club plugins replaced with trial versions for open source)
- **Lenis 1.3.15**: Smooth scroll implementation

### Three.js Ecosystem
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers and abstractions
- **@react-three/rapier**: Physics engine integration
- **@react-three/postprocessing**: Post-processing effects
- **three-stdlib**: Standard library utilities for Three.js

### UI Libraries
- **react-fast-marquee**: Marquee/ticker component
- **react-icons**: Icon library

### Analytics
- **@vercel/analytics**: Vercel analytics integration

### Development Tools
- **TypeScript 5.5.3**: Type safety
- **Vite 5.4.1**: Build tool and dev server
- **ESLint 9.9.0**: Code linting with React hooks plugin

### Asset Loading
- **Draco Decoder**: GLTF/GLB compression support (located in public/draco/)
- **RGBE Loader**: HDR environment map loading
- **Custom Decryption**: AES-CBC decryption for protected 3D models

### Server Configuration
- Development server runs on port 5000 with host 0.0.0.0 for network access