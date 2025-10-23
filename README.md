# Membook Landing Page

A beautiful, responsive landing page for the Membook app built with React and Tailwind CSS.

## Features

- **Smooth scroll animations** using Framer Motion
- **Responsive design** that works on all devices
- **iPhone mockup animations** showing the app workflow
- **Video sections** for knowledge graph and voice assistant
- **Clean, minimal design** matching the app's color palette

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm build
```

## Structure

- `src/App.js` - Main app component
- `src/components/` - Individual section components
  - `Navigation.js` - Sticky navigation bar
  - `HeroSection.js` - Hero section with logo and heading
  - `PhoneMockupSection.js` - Animated iPhone mockups
  - `KnowledgeGraphSection.js` - Interactive knowledge graph section
  - `InteractiveKnowledgeGraph.js` - Playable network visualization
  - `OrbSection.js` - Voice assistant orb with forward/backward loop
  - `CTASection.js` - Call-to-action section
  - `Footer.js` - Footer component

## Assets

All assets are in `public/assets/`:
- `logo.png` - Membook logo
- `twitter-open.png` - Twitter mockup
- `twitter-screenshot-capture.png` - Screenshot capture mockup
- `twitter-screenshot-share.png` - Share with app mockup
- `knowledge-graph.mp4` - Knowledge graph video (not used, replaced with interactive graph)
- `orb.mp4` - Voice assistant orb video

## Color Palette

The landing page uses the Membook color scheme:
- Off Black: `#091f17`
- True Turquoise: `#20808D`
- Membook Green: `#B8E986`
- Peacock: `#2f5f5A`

