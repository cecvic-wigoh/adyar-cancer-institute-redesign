# Doctor Profile Page Redesign — Design Spec

## Overview

Redesign the doctor profile page (`/doctors/[slug]`) to follow a clean, full-width, MSK-inspired layout. The page will be a faithful adaptation of the Memorial Sloan Kettering doctor profile structure — vertically stacked full-width sections, generous whitespace, clean horizontal rules, minimal sticky nav, and inline CTAs. No sidebar.

The data model will be updated to reflect the actual fields collected via Google Forms from 48 doctors.

## Reference

- **Visual reference:** MSK doctor profile page (screenshot provided by user)
- **Approved mockup:** `.superpowers/brainstorm/30717-1773874731/design-mockup.html`

## Data Model Changes

### Current Doctor Interface (to be replaced)

```typescript
interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  designation: string;
  department: { slug: string; title: string };
  qualifications: string[];
  areasOfExpertise: string[];
  about: string[];
  education: DoctorEducation[];
  experience: string[];
  linkedin: string;
  metaDescription: string;
  publications?: Publication[];
  publicationMetrics?: PublicationMetrics;
  publicationsList?: string[];
  image?: string;
}
```

### New Doctor Interface

```typescript
interface Doctor {
  slug: string;
  name: string;
  department: { slug: string; title: string };
  designation: string;                        // e.g., "Professor & Head, Department of Medical Oncology"
  specialties: string[];                      // renamed from specialty (single string) to specialties (array)
  primaryDegree: DoctorDegree;                // MBBS etc. with university and year
  postgraduateQualification?: DoctorDegree;   // MD/MS with specialization, university, year
  superSpeciality?: DoctorDegree;             // DM/MCh with specialization, university, year
  fellowships?: string[];                     // free-text fellowship descriptions
  about: string[];                            // biography paragraphs
  areasOfExpertise: string[];                 // bulleted list of clinical expertise areas
  experience: string[];                       // career positions, free-text
  publicationsUrl?: string;                   // Google Drive link to publications
  publications?: Publication[];               // structured publications (if available)
  publicationMetrics?: PublicationMetrics;     // optional metrics (if available)
  linkedin?: string;                          // LinkedIn profile URL
  image?: string;                             // profile photo path
  metaDescription: string;
}

interface DoctorDegree {
  degree: string;           // e.g., "MBBS", "MD (Pediatrics)", "DM (Medical Oncology)"
  institution: string;      // e.g., "PGIMER, Chandigarh"
  year?: string;            // e.g., "2003" or "2009-2012"
}
```

### Key Data Model Changes

1. **`specialty` (string) → `specialties` (string[])**: Doctors often have multiple specialties (e.g., "Medical Oncology" and "Pediatric Oncology").
2. **`education` (DoctorEducation[]) → 3-tier structure**: The form collects education in 3 distinct tiers (primary, PG, super-specialty) with separate university/year fields. This replaces the flat `education` array.
3. **`fellowships` added**: Collected separately in the form (60% completeness). Optional field.
4. **`publicationsUrl` added**: Most doctors provided Google Drive links rather than structured publication data. The existing `publications` and `publicationMetrics` fields are retained for doctors who have structured data.
5. **`qualifications` removed**: Redundant — qualifications are derivable from the 3-tier education fields.
6. **`linkedin` made optional**: 83% completeness; some doctors didn't provide it.

### Migration Notes

- Existing doctor data in `data/doctors.ts` must be migrated to the new interface.
- The 48 form responses in `form_responses/doctor-profile-responses.xlsx` should be used to populate new doctor entries.
- Department name normalization is needed (e.g., 6 variants of "Anesthesiology" → single canonical name matching `data/departments.ts`).

## Page Layout

### Section Order (top to bottom)

All sections are full-width (max-width: 1100px centered) with no sidebar. Sections that lack data are not rendered.

1. **Breadcrumb Bar**
2. **Sticky Section Nav**
3. **Hero Section**
4. **Appointment CTA Strip**
5. **About / Biography**
6. **Areas of Expertise**
7. **Education & Training**
8. **Experience**
9. **Second Appointment CTA Strip**
10. **Publications**
11. **Bottom CTA**

### 1. Breadcrumb Bar

- Light gray background (`--color-off-white`), 1px bottom border
- Path: Home > Doctors > {Department} > {Doctor Name}
- Font: DM Sans, 13px
- Links are `--color-primary` blue

### 2. Sticky Section Nav

- Sticks to top of viewport on scroll
- White background with subtle bottom border
- Adds box-shadow when scrolled (`0 2px 12px rgba(0,0,0,0.06)`)
- Text-only links: About, Expertise, Education & Training, Experience, Publications
- Active link has `--color-primary` text color + 2px bottom border
- Uses existing `StickyDoctorBar` component (restyled) with IntersectionObserver scroll spy
- Horizontally scrollable on mobile

### 3. Hero Section

- **Layout:** 2-column CSS grid — info on left, photo on right (320px)
- **Left column:**
  - Department label: DM Sans, 13px, uppercase, letter-spacing 1.5px, `--color-teal-accessible`
  - Doctor name: Playfair Display, 42px, 700 weight, `--color-primary`
  - Designation: DM Sans, 18px, `--color-text-secondary`
  - Qualifications block: grouped by tier (Qualifications, Specialties), DM Sans 14px
  - LinkedIn link: icon + text, `--color-primary`
- **Right column:**
  - Rectangular photo (320x400px, border-radius 8px)
  - Fallback: gradient background with initials (Playfair Display, 72px, low opacity)
- **Mobile:** Single column, photo moves above name (order: -1)

### 4. Appointment CTA Strip

- Full-width `--color-primary` blue background
- Left: heading "Request an Appointment" + subtitle
- Right: teal button "Book Appointment"
- Font: DM Sans
- Mobile: stacks vertically, centered

### 5. About / Biography

- Section label: "Get to Know" — DM Sans, 12px, uppercase, `--color-teal-accessible`
- Section title: "About Dr. {LastName}" — Playfair Display, 28px, `--color-primary`
- Body: PT Serif, 16.5px, line-height 1.75
- Multiple paragraphs supported (from `about` array)
- Bottom border: 1px solid `--color-border`
- **Conditional:** Only renders if `about` array is non-empty

### 6. Areas of Expertise

- Section label: "Clinical Focus"
- Section title: "Areas of Expertise"
- Two-column CSS grid list
- Each item: DM Sans, 15px, with teal dot bullet, subtle bottom border
- **Conditional:** Only renders if `areasOfExpertise` array is non-empty

### 7. Education & Training

- Section label: "Credentials"
- Section title: "Education & Training"
- Two-column grid: "Degrees" on left, "Fellowships" on right
- Each column has a subsection header (DM Sans, 14px, uppercase, with 2px teal bottom border)
- Degree items: degree name (DM Sans 16px, 600 weight) + institution/year below (14px, secondary color)
- Degrees listed in order: Primary → PG → Super-specialty (only non-null tiers rendered)
- **Conditional:** Fellowships column only renders if `fellowships` array is non-empty and non-NA. If no fellowships, degrees column spans full width.

### 8. Experience

- Section label: "Career"
- Section title: "Experience"
- Simple list, each entry: DM Sans, 15.5px, with subtle bottom borders
- **Conditional:** Only renders if `experience` array is non-empty

### 9. Second Appointment CTA Strip

- Same component as #4, different copy: "Need a Consultation?"
- Provides a mid-page call to action

### 10. Publications

- Section label: "Research"
- Section title: "Publications"
- **If `publicationsUrl` exists:** descriptive paragraph + outlined link button "View All Publications" (opens in new tab)
- **If `publications` array exists (structured data):** render the existing paginated publications component with metrics
- **If both exist:** show both (structured list above, drive link below)
- **Conditional:** Only renders if either `publicationsUrl` or `publications` exists

### 11. Bottom CTA

- Off-white background section
- Centered: Playfair Display heading, DM Sans subtitle, primary-colored button
- Appointment booking prompt

## Styling

### Design System

Uses existing CSS custom properties from `globals.css`. No new design tokens needed.

### Approach

- CSS Modules (`doctor.module.css`) — complete rewrite of the existing 1070-line file
- No Tailwind, no styled-components — consistent with project conventions
- Responsive via CSS Grid + `clamp()` for fluid typography
- Mobile breakpoint at 768px

### Key Visual Properties

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Doctor name | Playfair Display | 42px (clamp to 32px mobile) | 700 | `--color-primary` |
| Section titles | Playfair Display | 28px | 600 | `--color-primary` |
| Section labels | DM Sans | 12px uppercase | 600 | `--color-teal-accessible` |
| Body text | PT Serif | 16.5px | 400 | `--color-text-primary` |
| UI text (lists, nav) | DM Sans | 13-16px | 400-600 | varies |
| Max content width | — | 1100px | — | — |

### Spacing

- Sections: 48px vertical padding, separated by 1px border
- Hero: 48px top, 40px bottom
- CTA strips: 28px vertical padding
- Mobile: reduced to ~32px sections, 20px horizontal padding

## Components

### Files to Modify

1. **`app/doctors/[slug]/page.tsx`** — Complete rewrite of the page component to new section layout
2. **`app/doctors/[slug]/doctor.module.css`** — Complete rewrite of styles
3. **`components/StickyDoctorBar.tsx`** — Restyle to minimal text-only nav (keep IntersectionObserver logic)
4. **`data/doctors.ts`** — Update interface, migrate existing doctor data to new structure

### Files to Keep As-Is

- `components/DoctorAvatar.tsx` — Still used for initials fallback in hero (adapted usage)
- `components/PaginatedPublications.tsx` — Still used when structured publication data exists
- `app/doctors/page.tsx` / `DoctorsDirectory.tsx` — Doctor listing page unaffected

### Removed Features (vs current design)

- **Sidebar** (appointment card, department link, LinkedIn) — replaced by inline CTAs and hero-level LinkedIn
- **Highlights strip** (department, qualifications count, publications count) — info moved to hero qualifications block
- **Noise texture background** — replaced by clean white
- **Circular avatar** — replaced by rectangular photo
- **Related doctors carousel** — removed (simplifies page; can be re-added later if needed)
- **Publication metrics cards** — retained only when structured data available

## Conditional Rendering Strategy

Since data completeness varies (60-100% across fields), every section must handle missing data gracefully:

```
if about.length > 0       → render About section
if expertise.length > 0   → render Expertise section
if primaryDegree exists   → render Education section (always true since MBBS is 100%)
if fellowships.length > 0 → render Fellowships column in Education
if experience.length > 0  → render Experience section
if publicationsUrl || publications → render Publications section
if linkedin                → render LinkedIn link in hero
if image                   → render photo; else render initials fallback
```

## Responsive Behavior

| Breakpoint | Layout Changes |
|------------|---------------|
| > 768px | 2-column hero, 2-column expertise grid, 2-column education grid |
| <= 768px | Single column throughout, photo above name, sticky nav scrollable, CTA strips stack vertically |

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<h1>`-`<h3>` hierarchy
- Skip-to-content link
- ARIA labels on navigation
- Focus-visible states on all interactive elements
- Sufficient color contrast (teal-accessible meets WCAG AA)
- `alt` text on doctor photos

## Out of Scope

- Importing all 48 doctors from the spreadsheet (separate task — requires data parsing + department normalization)
- Doctor profile photo collection/upload workflow
- Department page changes
- Doctor listing page changes
- Clinical trials section
- Insurance information section
- Contact/location with map embed
