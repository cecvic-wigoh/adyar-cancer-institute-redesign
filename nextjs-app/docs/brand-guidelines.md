# Cancer Institute (WIA) — Brand Guidelines for Website Redesign

> **Document Purpose:** This is the definitive reference for anyone designing or developing the new Cancer Institute (WIA) Adyar website. Every design decision, component, and page must comply with the rules documented here.
>
> **Source:** Derived from the official CI(WIA) Brand Guidelines PDF, logo asset analysis, current website audit, and healthcare web design best practices.

---

## Table of Contents

1. [Brand Identity Overview](#1-brand-identity-overview)
2. [Logo Usage Rules](#2-logo-usage-rules)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Layout & Spacing](#5-layout--spacing)
6. [Logo Placement on Web Pages](#6-logo-placement-on-web-pages)
7. [Co-Branding & Partner Logos](#7-co-branding--partner-logos)
8. [Photography & Imagery](#8-photography--imagery)
9. [Accessibility Requirements](#9-accessibility-requirements)
10. [Mobile & Responsive Design](#10-mobile--responsive-design)
11. [Navigation & Information Architecture](#11-navigation--information-architecture)
12. [Trust Signals & Credibility](#12-trust-signals--credibility)
13. [Patient-Centric Design Principles](#13-patient-centric-design-principles)
14. [Tone & Voice](#14-tone--voice)
15. [Do's and Don'ts Summary](#15-dos-and-donts-summary)
16. [Asset Inventory](#16-asset-inventory)

---

## 1. Brand Identity Overview

### Institution
- **Full Name:** Cancer Institute (WIA)
- **Abbreviation:** CI(WIA) or CI
- **Tagline/Motto:** "With Humanity and In Wisdom" (embedded in the logo emblem)
- **Trademark:** The logo carries a TM (™) symbol. This must always be visible.

### Brand Pillars
The brand communicates four core values:
1. **Trust & Authority** — One of India's pioneering cancer treatment and research institutions
2. **Compassion** — Patient-first care philosophy ("With Humanity")
3. **Knowledge & Research** — Academic and scientific excellence ("In Wisdom")
4. **Comprehensive Care** — Prevention to palliative care under one roof

### Key Messaging (use across the site)
- "Pioneers in prevention to palliative care in cancer"
- "Early cancer is curable"
- "Cancer is preventable"
- "Today's research is tomorrow's treatment"
- "We have the technology, expertise and attitude you can trust, leading to hope and cure"

---

## 2. Logo Usage Rules

### 2.1 Logo Variants

There are **four approved logo files**. No other variations may be created.

| # | File Name | Format | Usage |
|---|-----------|--------|-------|
| 001 | Blue Horizontal Logo | PNG | Secondary logo — for headers, navigation bars, and horizontal layouts on light backgrounds |
| 002 | Blue Stacked Logo | PNG | **Primary logo** — emblem above text, for prominent placements on light backgrounds |
| 003 | White Stacked Logo | PNG | For use on dark/blue backgrounds (stacked format) |
| 004 | White Horizontal Logo | PNG | For use on dark/blue backgrounds (horizontal format) |

### 2.2 Primary vs Secondary Logo

- **Primary Logo (Stacked):** The circular emblem sits above the text "CANCER INSTITUTE (WIA)". Use this as the default logo wherever space permits.
- **Secondary Logo (Horizontal):** The circular emblem sits to the left of the text "CANCER INSTITUTE (WIA)™". Use this in space-constrained contexts such as the website header/navigation bar.

### 2.3 Logo Emblem Details

The emblem depicts Lord Ganesha reading a book, seated on a mat beside a traditional lamp (vilakku), enclosed in a circle. The curved text "WITH HUMANITY AND IN WISDOM" appears along the bottom of the circle. Rays of light emanate from above the figure.

**Rules:**
- Never alter, crop, or reinterpret the emblem artwork
- Never separate the emblem from the wordmark
- Never remove or obscure the ™ symbol
- Never add effects (shadows, glows, 3D, gradients) to the logo
- Never rotate, skew, or distort the logo
- Never change the logo's colors beyond the two approved variants (blue and white)
- Never place the logo on a busy or visually competing background

### 2.4 Logo Scaling — Minimum Sizes

#### Stacked Logo (Primary)
| Context | Minimum Width |
|---------|--------------|
| Large/hero placement | 500px |
| Standard placement | 300px |
| Smallest allowed | 150px |

#### Horizontal Logo (Secondary)
| Context | Minimum Width |
|---------|--------------|
| Large placement | 800px |
| Standard (e.g., site header) | 500px |
| Smallest allowed | 300px |

**Rule:** Below these minimum sizes, the emblem detail becomes illegible. Never scale the logo below the minimum dimensions.

### 2.5 Color Variants

| Background | Logo Version |
|------------|-------------|
| White or light backgrounds | Blue logo (files 001, 002) |
| Brand blue (#134795) or dark backgrounds | White logo (files 003, 004) |

**Rule:** Never place a blue logo on a dark background or a white logo on a light background.

### 2.6 Clear Space

Maintain clear space around the logo equal to at least the height of the letter "C" in "CANCER INSTITUTE" on all sides. No text, imagery, or other graphic elements should intrude into this zone.

---

## 3. Color System

### 3.1 Brand Colors

| Role | Color Name | Hex | RGB | CMYK | Usage |
|------|-----------|-----|-----|------|-------|
| **Primary** | Deep Sapphire Blue | `#134795` | 19, 71, 149 | C:100 M:84 Y:8 K:1 | Logo, headings, primary buttons, navigation, footer background |
| **Secondary/Accent** | Bright Teal | `#23CDC0` | 35, 205, 192 | C:66 M:0 Y:33 K:0 | Accent elements, icons, highlights, decorative borders, secondary buttons, data visualizations |
| **Tertiary** | Pale Mint | `#EBF9F9` | 235, 249, 249 | C:6 M:0 Y:2 K:0 | Light section backgrounds, card fills, alternating row shading |

### 3.2 Extended Web Palette

These supplementary colors complete the palette for web use:

| Role | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Primary content background, text on blue |
| Off-White / Light Gray | `#F7F7F9` | Alternate section backgrounds |
| Pale Blue Tint | `#E8F0FE` | Info boxes, subtle highlights |
| Body Text (Charcoal) | `#2D3748` | Primary body text on light backgrounds |
| Secondary Text | `#4B5563` | Captions, supporting text, meta information |
| Dark Teal (Accessible) | `#0A8C82` | When teal-colored text is needed on white (passes WCAG AA) |
| Error Red | `#DC2626` | Form validation errors, critical alerts |
| Success Green | `#16A34A` | Success states, confirmations |

### 3.3 Color Accessibility Rules

| Combination | Contrast Ratio | WCAG Status |
|-------------|---------------|-------------|
| White text on `#134795` | ~8.9:1 | **Passes AA and AAA** — use freely |
| `#2D3748` text on `#FFFFFF` | ~12.6:1 | **Passes AA and AAA** — primary body text |
| `#23CDC0` text on `#FFFFFF` | ~2.1:1 | **FAILS AA** — never use as text on white |
| `#23CDC0` on `#134795` | ~4.3:1 | **Passes AA for large text only** (18px+ or 14px+ bold) |
| `#0A8C82` text on `#FFFFFF` | ~4.6:1 | **Passes AA** — use this instead of `#23CDC0` for teal text |
| Black text on `#134795` | ~2.4:1 | **FAILS AA** — never use |

**Critical Rules:**
- **NEVER** use `#23CDC0` (bright teal) as body text on white — it fails contrast requirements
- **NEVER** use black text on the brand blue background
- Use `#23CDC0` only as a **decorative/accent color**: borders, icons, button backgrounds, dividers, chart highlights
- If teal-colored text is required, use `#0A8C82` (dark teal) on white backgrounds
- All text must meet a **minimum 4.5:1 contrast ratio** against its background (WCAG AA)
- Large text (18px+ or 14px+ bold) must meet a **minimum 3:1 contrast ratio**
- Never use color alone to convey information — always pair with text labels, icons, or patterns

### 3.4 CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --color-primary: #134795;        /* Deep Sapphire Blue */
  --color-secondary: #23CDC0;      /* Bright Teal (accent only) */
  --color-tertiary: #EBF9F9;       /* Pale Mint */

  /* Extended Palette */
  --color-white: #FFFFFF;
  --color-off-white: #F7F7F9;
  --color-pale-blue: #E8F0FE;
  --color-text-primary: #2D3748;   /* Charcoal — body text */
  --color-text-secondary: #4B5563; /* Supporting text */
  --color-teal-accessible: #0A8C82;/* Text-safe teal */
  --color-error: #DC2626;
  --color-success: #16A34A;
}
```

---

## 4. Typography

### 4.1 Primary Typeface: PT Sans Narrow

**PT Sans Narrow** is the brand typeface specified in the official guidelines.

- **Available weights:** 400 (Regular), 700 (Bold) — no italics exist
- **Source:** Google Fonts — freely available for web use
- **License:** Open Font License (OFL)

#### Loading (Google Fonts)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet">
```

#### Fallback Stack
```css
font-family: "PT Sans Narrow", "Arial Narrow", Arial, Helvetica, sans-serif;
```

### 4.2 Recommended Font Pairing

PT Sans Narrow works best as a **heading/display** font. For body text, pair it with a more readable companion:

| Role | Font | Weight(s) | Rationale |
|------|------|-----------|-----------|
| Headings (H1–H3) | PT Sans Narrow | 700 (Bold) | Brand typeface — compact, authoritative |
| Subheadings (H4–H6) | PT Sans Narrow | 400 (Regular) | Lighter weight for hierarchy |
| Body Text | PT Serif *or* Source Serif 4 | 400, 700, 400 Italic | Readable at small sizes, warm, credible |
| UI / Navigation / Buttons | PT Sans Narrow | 700 | Compact — works well in navigation and CTAs |
| Captions / Meta | PT Sans Narrow | 400 | Small informational text |

**Alternative (all sans-serif):** If a serif body font is not desired, use **PT Sans** (non-Narrow) for body text. It is from the same type family and pairs naturally.

```html
<!-- Full recommended font load -->
<link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

### 4.3 Type Scale & Sizing

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---------|---------------|---------------|--------|-------------|----------------|
| H1 (Page Title) | 48–64px | 32–40px | 700 | 1.15–1.2 | -0.02em |
| H2 (Section Title) | 36–42px | 28–32px | 700 | 1.2 | -0.01em |
| H3 (Subsection) | 28–32px | 22–26px | 700 | 1.25 | -0.01em |
| H4 (Card Title) | 22–24px | 18–20px | 700 | 1.3 | 0 |
| H5 | 18–20px | 16–18px | 400 | 1.35 | 0 |
| Body Text | 17–18px | 16–17px | 400 | 1.55–1.6 | 0 |
| Small / Caption | 14px | 13–14px | 400 | 1.4 | 0.01em |
| Button Text | 15–16px | 14–15px | 700 | 1.0 | 0.02em |
| Navigation | 15–16px | 14px | 700 | 1.0 | 0.01em |

### 4.4 Typography Rules

1. **Minimum body text size:** 16px. Never go below this for any readable content.
2. **Headings:** Always use PT Sans Narrow Bold (700). Headings must be in the brand blue `#134795` or white (on dark backgrounds).
3. **Body text color:** `#2D3748` (charcoal) on light backgrounds; `#FFFFFF` on dark backgrounds.
4. **Line length:** Aim for 55–75 characters per line for body text. PT Sans Narrow is condensed, so monitor line length — it may fit more characters per line than expected.
5. **Alignment:** Body text must be left-aligned. Never use justified text. Centered text is acceptable only for short headings or callout statements.
6. **ALL CAPS:** Use sparingly — only for short labels, buttons, or navigation items. Always add extra letter-spacing (+0.08em to +0.12em) when using all caps.
7. **No faux italics:** PT Sans Narrow has no italic variant. If italic text is needed, use the companion body font (PT Serif or PT Sans) which do include italic styles.
8. **Heading hierarchy:** Never skip heading levels (e.g., don't jump from H1 to H3). Maintain a logical document outline for accessibility.

### 4.5 CSS Baseline

```css
body {
  font-family: "PT Serif", "Georgia", serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.55;
  color: #2D3748;
  letter-spacing: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "PT Sans Narrow", "Arial Narrow", Arial, sans-serif;
  font-weight: 700;
  color: #134795;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.nav-link, .btn {
  font-family: "PT Sans Narrow", "Arial Narrow", Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## 5. Layout & Spacing

### 5.1 Grid System

- Use a **12-column grid** with a maximum content width of **1280px** (centered)
- Gutters: 24px (mobile), 32px (desktop)
- Outer margins: 16px (mobile), 40–80px (desktop)
- Content should never touch the screen edges

### 5.2 Spacing Scale

Use a consistent spacing scale based on an **8px base unit**:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight internal padding |
| `--space-2` | 8px | Compact spacing |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Standard internal padding |
| `--space-5` | 24px | Card padding, form field gaps |
| `--space-6` | 32px | Section internal padding |
| `--space-7` | 48px | Between content blocks |
| `--space-8` | 64px | Between major sections |
| `--space-9` | 96px | Hero / major vertical rhythm |
| `--space-10` | 128px | Page-level vertical breathing room |

### 5.3 White Space

- Use generous white space throughout. White space signals cleanliness, organization, and clinical professionalism.
- Sections should have clear visual separation (via background color changes or vertical spacing of at least 64px).
- Cards and content blocks should "breathe" — never pack content tightly.

### 5.4 Section Backgrounds

Alternate between these backgrounds to create visual rhythm:

1. **White** (`#FFFFFF`) — default content sections
2. **Off-White** (`#F7F7F9`) — alternate sections, testimonials, statistics
3. **Pale Mint** (`#EBF9F9`) — highlight sections, callout areas
4. **Brand Blue** (`#134795`) — feature sections, CTAs (use white text and white logo)
5. **Teal** (`#23CDC0`) — accent banners, tagline sections (use white text with caution — verify contrast)

---

## 6. Logo Placement on Web Pages

### 6.1 Position Rules

**From the official brand guidelines:**

- The logo must be positioned on the **left or right side** of the layout — **never centered, never randomly placed**.
- Allowed positions: **top-left corner** or **bottom-right corner** (or mirrored: top-right / bottom-left).
- For the website header: the logo goes in the **top-left** (standard web convention, aligns with brand rule).

### 6.2 Single Use Per Page

- The logo must appear **only once per visible page/screen**.
- Do NOT repeat the logo in both the header and the footer of the same page. Choose one prominent placement.
- Exception for web: The logo may appear in the sticky header (always visible) as the primary instance. A simplified footer treatment (text-only "Cancer Institute (WIA)" or a very small emblem) is acceptable if the header logo is the clear primary.

### 6.3 Website Header Specification

- Use the **horizontal logo (secondary)** in the header navigation bar.
- Place it on the **left side** of the header.
- Minimum width: 300px. Recommended: 400–500px for desktop.
- On mobile, use a compact version — the emblem alone may be used as a "favicon-style" representation at very small sizes, but the full logo should appear when the mobile menu is opened.

### 6.4 Favicon

- Use the circular emblem (without the wordmark) as the favicon/app icon.
- Provide at minimum: 16x16, 32x32, 180x180 (Apple touch), and 192x192 (Android) sizes.
- Use the blue-on-white variant for the favicon.

---

## 7. Co-Branding & Partner Logos

### 7.1 Hierarchy

- The CI(WIA) logo must **always be visually dominant** — larger or in a more prominent position than any partner, sponsor, or affiliated institution logo.
- CI logo placement: **left or top** position.
- Partner logos: **right or bottom**, smaller in size.
- Maintain adequate clear space between logos to prevent overlap.

### 7.2 Prohibited Associations

- The CI(WIA) logo must **NEVER** be placed alongside or visually associated with any **tobacco or alcohol** product branding.
- Ensure strict separation to avoid any unintended endorsement or co-promotion.

### 7.3 Web Implementation

- On partner/sponsor pages, use a consistent grid layout for partner logos.
- CI(WIA) logo should be at least **1.25x the size** of any partner logo.
- All partner logos should be displayed in grayscale or muted tones if they visually compete with the CI brand colors.

---

## 8. Photography & Imagery

### 8.1 Authenticity

- **Use real photography** of the CI(WIA) campus, staff, and facilities wherever possible.
- Avoid generic stock photography — it undermines credibility for a healthcare institution.
- Staff photos should be professional headshots of actual physicians, nurses, and care teams.
- Patient imagery (with consent) humanizes the institution and builds trust.

### 8.2 Image Style

- Warm, natural lighting preferred — avoid cold, clinical aesthetics.
- Human subjects should appear approachable, compassionate, and engaged.
- Images of facilities should be clean, modern, and well-lit.
- Use a slight warm color grade to align with the brand's "humanity" value.

### 8.3 Technical Requirements

- All images must have meaningful `alt` text for accessibility.
- Use responsive images with `srcset` for different screen sizes.
- Optimize all images: WebP format preferred, with JPEG fallback.
- Lazy-load images below the fold.
- Hero/banner images: minimum 1920px wide for desktop, with a 16:9 or 3:1 aspect ratio.
- Ensure no text is embedded in images (except the logo) — all text must be live HTML.

### 8.4 Icons

- Use a consistent icon set throughout the site (e.g., Lucide, Heroicons, or a custom set).
- Icons should be rendered as SVGs for scalability and performance.
- Icon color should match the brand palette — primarily `#134795` or `#23CDC0`.
- Minimum touch/click target for interactive icons: 44x44px.

---

## 9. Accessibility Requirements

### 9.1 Standard

The website **must comply with WCAG 2.1 Level AA** at minimum. This is both a best practice and an emerging regulatory requirement globally (the U.S. HHS mandates this for healthcare organizations by May 2026).

### 9.2 Core Requirements

| Category | Requirement |
|----------|-------------|
| **Color Contrast** | 4.5:1 minimum for normal text; 3:1 for large text (18px+ or 14px+ bold); 3:1 for UI elements (buttons, form borders, icons) |
| **Keyboard Navigation** | All functionality must be operable via keyboard alone |
| **Focus Indicators** | Visible focus ring on all interactive elements |
| **Semantic HTML** | Use proper heading hierarchy (H1–H6), landmarks (`<nav>`, `<main>`, `<footer>`), and list structures |
| **Alt Text** | All images must have descriptive alt text; decorative images use `alt=""` |
| **Form Labels** | Every form input must have a visible, associated `<label>` |
| **Error Messages** | Form errors must be conveyed via text (not color alone) and associated with the relevant field |
| **Text Resizing** | Content must remain usable when text is resized up to 200% |
| **Reflow** | Content must be viewable at 320px width without horizontal scrolling |
| **Text Spacing** | Content must not break when users override line-height (1.5x), paragraph spacing (2x), letter-spacing (0.12x), or word-spacing (0.16x) |
| **Link Purpose** | Every link's purpose must be clear from the link text alone (no "click here") |
| **Language** | Page language must be declared (`lang="en"`) |
| **Video Captions** | All video content must have captions |
| **Motion** | Respect `prefers-reduced-motion` — disable animations for users who prefer it |
| **Touch Targets** | Minimum 44x44px for all interactive elements |

### 9.3 ARIA & Screen Readers

- Use ARIA labels only when semantic HTML is insufficient.
- Status messages (e.g., form submission success) must be announced to screen readers (`role="status"` or `aria-live="polite"`).
- Modal dialogs must trap focus and return focus on close.
- Skip navigation link must be the first focusable element on every page.

---

## 10. Mobile & Responsive Design

### 10.1 Approach

- **Mobile-first** responsive design — design for small screens first, then enhance for larger viewports.
- Test on real iOS and Android devices — emulators alone are insufficient.

### 10.2 Breakpoints

| Name | Min Width | Description |
|------|-----------|-------------|
| Mobile | 0px | Default / base styles |
| Tablet | 768px | Tablet portrait and up |
| Desktop | 1024px | Standard desktop |
| Wide | 1280px | Max content width |

### 10.3 Mobile-Specific Rules

| Element | Mobile Requirement |
|---------|--------------------|
| **Navigation** | Hamburger/drawer pattern; slide-out menu |
| **Touch targets** | Minimum 44x44px for all tappable elements |
| **Phone numbers** | Must be clickable (`tel:` links) |
| **Forms** | Use appropriate `input type` attributes (`tel`, `email`, `date`) for mobile keyboards |
| **Images** | Responsive with `srcset`; lazy-loaded below fold |
| **Typography** | Body text minimum 16px; headings scale down proportionally |
| **Orientation** | Support both portrait and landscape |
| **Sticky header** | Remains visible on scroll with appointment CTA accessible |
| **Bottom-accessible CTAs** | Critical actions (appointment, call) should be reachable by thumb |

### 10.4 Performance

- Target **Largest Contentful Paint (LCP)** under 2.5 seconds on mobile.
- Optimize fonts: load only the two PT Sans Narrow weights used (400, 700), use `font-display: swap`.
- Compress all images to WebP; use responsive `srcset`.
- Minimize JavaScript — avoid heavy animation libraries.
- Use `<link rel="preconnect">` for external font and API origins.

---

## 11. Navigation & Information Architecture

### 11.1 Primary Navigation Structure

Organize navigation around **how patients think**, not how the institution is internally structured:

**Recommended top-level items (5–7 maximum):**

1. **About Us** — History, mission, governance, milestones
2. **For Patients** — Appointments, services, departments, insurance, what to expect
3. **Find a Doctor** — Searchable physician directory by specialty
4. **Research & Education** — Clinical trials, academic programs, publications
5. **Donate / Support Us** — Donation, volunteer, corporate giving
6. **Contact** — Locations, phone, directions, appointment request

### 11.2 Navigation Rules

- **Mega-menus:** Use click-to-open menus (not hover) with categorized links.
- **Maximum depth:** 2 levels of nesting. The current site has 3 levels which creates usability issues — flatten it.
- **Sticky header:** Navigation must persist on scroll with the appointment CTA always visible.
- **Breadcrumbs:** Display breadcrumb trails on all inner pages for orientation.
- **Search:** Provide a prominent site-wide search bar.
- **Labels:** Use plain language tested with real users. Avoid medical jargon in navigation labels.

### 11.3 Key Patient Entry Points

These should be accessible from any page within 1–2 clicks:

- "Request an Appointment"
- "Find a Doctor / Specialist"
- "I've been diagnosed with [cancer type]" (condition-based entry)
- "Clinical Trials"
- "Emergency / Contact Now"
- "Support Services"

### 11.4 Footer

- Quick links to major sections
- Contact information: phone number, email, physical address
- Operating hours
- Social media links
- Legal links: Privacy Policy, Disclaimer, Terms
- Copyright: "© [Year] Cancer Institute (WIA). All Rights Reserved."
- Embedded or linked Google Maps for location

---

## 12. Trust Signals & Credibility

### 12.1 Required Elements

These elements must be present on the website to establish institutional credibility:

| Signal | Implementation |
|--------|---------------|
| **Institutional history** | Prominently mention founding year and heritage |
| **Accreditation badges** | Display NABL, NABH, or other relevant accreditation logos |
| **Affiliations** | University and academic partnerships |
| **Rankings/Awards** | Any recognitions, displayed prominently on homepage |
| **Physician profiles** | Real photos, names, qualifications, specializations |
| **Patient testimonials** | Named, real patient stories (with consent) |
| **Research credentials** | Active research programs, publication counts, clinical trials |
| **HTTPS/SSL** | Mandatory — the current site has SSL certificate issues that must be fixed |
| **Contact visibility** | Phone number visible in the header on every page |
| **Insurance accepted** | Clear list of accepted insurance plans |

### 12.2 Content Credibility

- Medical content must be reviewed and attributed to named physicians or a medical review board.
- Articles and treatment pages must display a "last updated" date.
- Use plain language, not medical jargon — write for educated laypersons, not clinicians.
- Remove any references to third-party demo sites or template defaults from the current site.

---

## 13. Patient-Centric Design Principles

### 13.1 Core Principles

1. **Reduce patient burden** — Show only essential information at each stage. Auto-populate forms where possible.
2. **Set clear expectations** — Communicate what just happened, what is happening now, and what comes next (especially in appointment booking flows).
3. **Design for anxiety** — Cancer patients are often anxious. Use calm visual environments, digestible content segments, and immediate access to support resources.
4. **Provide pathways, not walls** — Multiple entry points to the same content. A patient looking for "lung cancer treatment" and one looking for "thoracic oncology" should both find what they need.
5. **Appointment in 3 clicks** — A patient should be able to initiate an appointment request from any page within 3 clicks or fewer.
6. **Human connection** — Show real staff, real facilities, real patient stories. Avoid sterile, impersonal imagery.
7. **Multilingual support** — Consider Tamil and English at minimum given the institution's location in Chennai.

### 13.2 Emotional Design Considerations

- Balance clinical professionalism with warmth and compassion.
- Use the teal accent color to add life and vitality — avoid an all-blue, cold aesthetic.
- Include elements of hope: recovery stories, research breakthroughs, support community links.
- Place crisis/support contacts (counseling, helplines) where they are easy to find, not buried in menus.

---

## 14. Tone & Voice

### 14.1 Writing Style

| Attribute | Guideline |
|-----------|-----------|
| **Tone** | Warm, reassuring, authoritative — not clinical or cold |
| **Voice** | First-person plural ("We provide...") for institutional statements; second-person ("You can expect...") for patient-facing content |
| **Complexity** | Write at an 8th-grade reading level for patient-facing pages |
| **Jargon** | Define medical terms on first use; use plain alternatives where possible |
| **Sentence length** | Short, clear sentences. Break up dense medical information into bullet points and small paragraphs |
| **Active voice** | Prefer "Our team treats..." over "Treatment is provided by..." |

### 14.2 Content Rules

- Every page must have a clear purpose and a single primary call-to-action.
- Treatment and service pages should follow a consistent template: What it is, Who it's for, What to expect, Our specialists, How to book.
- Never use "click here" as link text — describe the destination instead.
- Keep paragraphs to 3–4 sentences maximum.

---

## 15. Do's and Don'ts Summary

### DO:
- Use only the four approved logo files
- Place the logo on the left or right — never centered
- Maintain the logo clear space zone
- Use `#134795` as the primary brand color
- Use `#23CDC0` as a decorative accent only (not as text on white)
- Use PT Sans Narrow for headings, paired with a readable serif for body text
- Maintain minimum 4.5:1 contrast ratio for all text
- Design mobile-first
- Use real photography of CI(WIA) staff, campus, and patients
- Include the ™ symbol with every logo usage
- Make appointments bookable within 3 clicks from any page
- Test with keyboard-only navigation and screen readers
- Display phone numbers as clickable `tel:` links
- Use semantic HTML with proper heading hierarchy

### DON'T:
- Alter, crop, rotate, or add effects to the logo
- Place the logo on busy or competing backgrounds
- Use the blue logo on dark backgrounds (or white logo on light backgrounds)
- Repeat the logo more than once per page/screen
- Use `#23CDC0` teal as body text on white backgrounds
- Use justified text alignment
- Go below 16px for any readable body text
- Use more than 2 levels of navigation nesting
- Use generic stock photography
- Skip heading levels in the HTML document structure
- Use "click here" or other vague link text
- Place the CI logo alongside tobacco or alcohol branding
- Embed text in images (except for the logo itself)
- Use hover-triggered dropdown menus
- Serve the logo as JPEG — always use PNG or SVG

---

## 16. Asset Inventory

### Logo Files

| File | Dimensions | Format | Purpose |
|------|-----------|--------|---------|
| `Blue Horizontal_Logo-001.png` | 4160 x 685px | PNG | Header/nav on light backgrounds |
| `Blue Stacked Logo_002.png` | 6168 x 5847px | PNG | Primary placement on light backgrounds |
| `White Stacked logo - 003.png` | 6168 x 5847px | PNG | Placement on dark/blue backgrounds |
| `White-Horizontal Logo-004.png` | 4160 x 685px | PNG | Header/nav on dark/blue backgrounds |

### Fonts

| Font | Source | Weights | License |
|------|--------|---------|---------|
| PT Sans Narrow | [Google Fonts](https://fonts.google.com/specimen/PT+Sans+Narrow) | 400, 700 | OFL |
| PT Serif (recommended body) | [Google Fonts](https://fonts.google.com/specimen/PT+Serif) | 400, 400i, 700, 700i | OFL |

### Colors (Quick Reference)

```
Primary Blue:    #134795
Bright Teal:     #23CDC0 (accent only — not for text on white)
Pale Mint:       #EBF9F9
Dark Teal:       #0A8C82 (accessible teal for text)
Body Text:       #2D3748
Secondary Text:  #4B5563
Off-White:       #F7F7F9
White:           #FFFFFF
```

### Source Document

| Document | File |
|----------|------|
| Official Brand Guidelines PDF | `CI(WIA)_BrandGuidelines_1.pdf` (11 pages) |

---

> **Last Updated:** March 2026
>
> **Prepared for:** Cancer Institute (WIA) Website Redesign Project
>
> **Note:** This document consolidates the official CI(WIA) Brand Guidelines with healthcare web design best practices and accessibility standards. When in doubt, defer to the official brand guidelines PDF for logo and color specifications, and to WCAG 2.1 AA for accessibility requirements.
