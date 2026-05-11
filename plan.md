# Six Devs Web — Implementation Plan

## Stack
- Vite + React 19
- React Router v7 (library/declarative mode)
- Tailwind CSS v4 (CSS-native, no `tailwind.config.ts`)
- shadcn/ui (base-nova, cssVariables, neutral base)
- TypeScript strict
- Bun as package manager

## Figma Files
**Original file key:** `7C044fUZEFtzZAkRIuGqMk`
**Inner pages sourced from:** `ch5HYb9bWY1ucFe6FeAbqf` (tmp file, designs copied over)

### Page 1 — Homepage (`0:1`)
| Frame | Node ID | Breakpoint |
|-------|---------|------------|
| Nav Bar | `354:17` | Desktop |
| Header Section | `354:26` | Desktop |
| Cards section | `354:29` | Desktop |
| Technical Domains | `354:34` | Desktop |
| Intelligent Systems | `354:38` | Desktop |
| Decentralized Products | `354:41` | Desktop |
| Newsletter section | `354:45` | Desktop |
| Footer | `452:333` | Desktop |
| Nav Bar (mobile) | `354:126` | Mobile (390px) |
| Header Section (mobile) | `358:131` | Mobile |
| Cards section (mobile) | `358:128` | Mobile |
| Technical Domains (mobile) | `358:139` | Mobile |
| Intelligent Systems (mobile) | `358:135` | Mobile |
| Decentralized Products (mobile) | `358:141` | Mobile |
| Newsletter section (mobile) | `358:144` | Mobile |
| Footer (mobile) | `358:149` | Mobile |

### Page 2 — Inner Pages (from `ch5HYb9bWY1ucFe6FeAbqf`)
| Frame | Node ID | Notes |
|-------|---------|-------|
| Projects | `1:443` | ✅ implemented |
| Expertise | `1:1051` | ✅ implemented |
| Approach | `1:1894` | ✅ implemented |
| Insights | `1:1571` | ✅ implemented |
| Contact Us | `1:1785` | ✅ implemented |

## Implementation Order
1. **Design tokens** — extract colors, typography, spacing from Figma → map to `index.css` CSS vars ✅
2. **Shared components** — NavBar, Footer, PageLayout, Button variants ✅
3. **Homepage** — section by section (desktop first, then mobile via responsive classes) ✅ (structure complete, assets local)
4. **Inner pages** — Projects → Expertise → Approach → Insights → Contact Us ✅

## Component Architecture
```
src/
  pages/
    home.tsx                  ← Homepage ✅
    projects.tsx              ← ✅
    expertise.tsx             ← ✅
    approach.tsx              ← ✅
    insights.tsx              ← ✅
    contact.tsx               ← ✅
  components/
    layout/
      navbar.tsx              ← active link state via useLocation ✅
      footer.tsx
      page-layout.tsx         ← shared wrapper for inner pages ✅
    sections/                 ← Homepage sections
      hero-section.tsx
      cards-section.tsx
      technical-domains.tsx
      intelligent-systems.tsx
      decentralized-protocols.tsx
      newsletter-section.tsx
    ui/                       ← shadcn components (auto-managed)
  lib/
    utils.ts
  App.tsx                     ← BrowserRouter + Routes
public/
  assets/                     ← Downloaded Figma assets (SVG/PNG)
```

## shadcn Components Needed
- `button` ✅
- `input` ✅ (newsletter form)
- `card` ✅ (cards section)
- `navigation-menu` ✅ (navbar)
- `sheet` ✅ (mobile nav drawer)
- `form` + `label` ✅ (contact page)
- `badge` ✅ (tags/labels where applicable)

## Asset Strategy
All Figma assets downloaded as SVG/PNG to `public/assets/` and referenced via `/assets/...` paths.
Never use Figma MCP asset URLs directly in production code.

## Design Decisions (resolved)
- [x] Theme: dark-only (no toggle)
- [x] Fonts: Noto Serif (headings) + Poppins (body) — loaded via Google Fonts
- [x] Nav: links route to inner pages
- [ ] Newsletter form: static UI only or wire up a service?
- [ ] Contact form: static UI only or wire up?
- [ ] Animation: match Figma's decorative motion elements, or skip for now?
- [ ] Mobile layouts for inner pages (currently desktop-first with basic responsive, no mobile-specific Figma frames referenced)
