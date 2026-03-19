# Department Page Templates Redesign — Design Spec

## Overview

Create three distinct department page templates — Clinical, Diagnostic, and Support — each optimized for its department category's content and audience. All templates follow the MSK-inspired premium aesthetic established in the doctor profile redesign (clean typography, full-width sections, generous whitespace). The existing single department template will be replaced.

Additionally, update the SubNav component to link all 9 departments to their correct `/departments/[slug]` routes.

## Reference

- **Approved mockups:**
  - Clinical: `.superpowers/brainstorm/43863-1773882354/clinical-template-mockup.html`
  - Diagnostic: `.superpowers/brainstorm/43863-1773882354/diagnostic-template-mockup.html`
  - Support: `.superpowers/brainstorm/43863-1773882354/support-template-mockup.html`
- **Department data source:** `form_responses/Department.xlsx` (9 departments)

## Department Categories & Assignments

| Category | Template | Departments | Accent Color |
|----------|----------|-------------|-------------|
| Clinical | `clinical` | Medical Oncology, Surgical Oncology, Gynaecological Oncology, Palliative Medicine, Radiation Oncology* | Blue (`#134795`) |
| Diagnostic | `diagnostic` | Radiology, Nuclear Medicine, Microbiology | Green (`#1a6b5a`) |
| Support | `support` | Anaesthesia & Pain Management, Quality Control | Purple (`#5b3a8a`) |

\* Radiation Oncology already has data in `departments.ts` (old interface shape) but no form response. It should be migrated to the new interface and assigned the clinical template.

## Data Model Changes

### Current Department Interface

The existing `Department` interface in `data/departments.ts` is designed for a single template. It needs to be extended to support the three template types and the new form data fields.

### New Department Interface

```typescript
export type DepartmentCategory = 'clinical' | 'diagnostic' | 'support';

export interface Department {
  slug: string;
  title: string;
  category: DepartmentCategory;
  metaDescription: string;
  tagline: string;
  overview: string[];                          // paragraphs
  hod: {
    name: string;
    credentials: string;
    designation: string;
    message: string;
    image?: string;
  };
  contactEmail: string;
  spoc?: string;                               // single point of contact name
  departmentPhoto?: string;                    // Drive link or local path
  experts: DepartmentExpert[];
  achievements: string[];
  legacy: string[];                            // paragraphs or timeline entries

  // Clinical-specific fields
  conditionsTreated?: string[];                // "What conditions does your department treat?"
  treatmentOptions?: string[];                 // therapies offered
  preventiveMeasures?: string[];               // prevention & screening
  whenToVisit?: string[];                      // warning signs / when to visit

  // Diagnostic-specific fields
  diagnosticServices?: DiagnosticServiceCategory[];  // categorized service list
  therapeuticServices?: TherapeuticService[];         // treatment capabilities
  equipment?: EquipmentItem[];                       // technology showcase

  // Support-specific fields
  missionPhilosophy?: string[];               // mission and values narrative
  accreditations?: Accreditation[];           // NABH, NABL, etc.
  qualityDimensions?: QualityDimension[];     // framework items (e.g., 6 dimensions)
  services?: string[];                        // scope of services (modular)
  facilities?: string[];                      // equipment list (modular)
}

export interface DepartmentExpert {
  name: string;
  credentials: string;
  designation: string;
  slug?: string;                               // links to doctor profile if available
}

export interface DiagnosticServiceCategory {
  category: string;                            // e.g., "Cross-Sectional Imaging"
  services: string[];
}

export interface TherapeuticService {
  name: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  description: string;
  badge?: string;                              // manufacturer or spec label
}

export interface Accreditation {
  name: string;                                // e.g., "NABH"
  description: string;
  status: string;                              // e.g., "Accredited", "Implemented"
}

export interface QualityDimension {
  name: string;
  description: string;
}
```

### Migration Notes

- The existing `departments.ts` data file has entries for Surgical Oncology, Medical Oncology, Radiation Oncology, Haematology, and others with the old interface shape. These must be migrated to the new interface.
- The 9 form responses from `form_responses/Department.xlsx` should be used to populate/update department entries.
- Each department entry must include a `category` field to determine which template renders.

## Page Layout — Clinical Template

### Section Order (15 sections)

1. **Breadcrumb Bar** — Home > Departments > {Department Name}
2. **Sticky Section Nav** — same component as doctor profiles
3. **Hero** — Blue gradient background, department name (Playfair Display 48px white), tagline, department photo
4. **HOD Message** — 2-column: photo left (200x250px), name/credentials/quote right. Quote in italic PT Serif with large opening quotation mark.
5. **Department Overview** — PT Serif body text
6. **Warning Signs / When to Visit** — Amber/orange callout section (`background: #FFF7ED`, `border-left: 4px solid #F97316`). Title with warning triangle icon. 2-column grid of symptom cards on white background. **Conditional:** only renders if `whenToVisit` array is non-empty.
7. **Conditions Treated** — 3-column card grid, each card with teal left border. **Conditional:** only renders if `conditionsTreated` is non-empty.
8. **Treatment Options** — 2-column bulleted list. **Conditional.**
9. **Prevention & Screening** — 2x2 info cards with blue-tinted backgrounds. **Conditional.**
10. **Appointment CTA Strip** — full-width blue bar (same as doctor profiles)
11. **Our Experts** — 4-column doctor card grid linking to `/doctors/[slug]`
12. **Facilities & Equipment** — 2-column checklist with checkmarks. **Conditional.**
13. **Legacy & Heritage** — Vertical timeline with year markers and teal dots
14. **Key Achievements** — Trophy-prefixed list
15. **Contact CTA** — bottom blue bar with department email + appointment button

### Unique Visual Elements

- Warning Signs section: amber background, orange border, warning triangle icon
- Conditions grid: cards with teal left-border accent
- Prevention cards: blue-tinted background panels

## Page Layout — Diagnostic Template

### Section Order (13 sections)

1. **Breadcrumb Bar**
2. **Sticky Section Nav**
3. **Hero** — Green gradient background (`#0f4a3a` → `#22876f`)
4. **HOD Message** — same structure as clinical
5. **Department Overview** — includes accreditation mentions (e.g., NABL for Microbiology)
6. **What to Expect — Patient Guide** — Green-tinted section (`background: #f0fdf4`, `border-top: 3px solid #1a6b5a`). 3-column step cards (Before / During / After). **Conditional:** renders if `diagnosticServices` is non-empty (all diagnostic departments have patient-facing procedures).
7. **Diagnostic Services & Techniques** — Off-white background section. Organized by category with sub-headers (2px teal bottom border). 2-column service lists. Aimed at referring clinicians. **Conditional.**
8. **Therapeutic Services** — 2-column cards with green left border and descriptions. For departments that also provide treatment (Nuclear Medicine, Interventional Radiology). **Conditional.**
9. **Technology & Equipment Showcase** — 3-column visual cards with icon, name, description, and manufacturer badge. **Conditional.**
10. **Our Experts** — same as clinical
11. **Legacy & Heritage** — same timeline component
12. **Key Achievements** — same list component
13. **Referral & Contact** — Off-white centered section. "Refer a Patient" heading, department email, referral note box for physicians. No appointment CTA.

### Unique Visual Elements

- Patient Guide: green-tinted step cards with numbered circles
- Equipment Showcase: cards with icon placeholders, hover shadow, manufacturer badges
- Referral CTA instead of appointment CTA

## Page Layout — Support Template

### Section Order (14 sections, modular)

1. **Breadcrumb Bar**
2. **Sticky Section Nav**
3. **Hero** — Purple gradient background (`#3d2566` → `#7248a8`)
4. **HOD Message** — same structure
5. **Department Overview**
6. **Mission & Philosophy** — Purple-tinted section (`background: #f5f0ff`, `border-top: 3px solid #5b3a8a`). Narrative text + 3-column mission cards with purple icon circles. **Conditional.**
7. **Quality Dimensions / Framework** — 3x2 grid of dimension cards with purple bottom border. Specific to departments with quality frameworks. **Conditional.**
8. **Accreditations & Standards** — 3-column badge cards with certification icons, names, descriptions, and status badges. **Conditional.**
9. **Services & Scope** — 2-column list (shows for Anaesthesia with perioperative services, hidden for Quality Control). **Conditional.**
10. **Facilities & Equipment** — Same as clinical checklist (shows for Anaesthesia, hidden for Quality Control). **Conditional.**
11. **Our Team** — Doctor cards for clinical-adjacent departments, simple staff listing for administrative departments. **Conditional.**
12. **Legacy & Heritage** — same timeline component
13. **Key Achievements** — same list component
14. **Contact** — Off-white centered section. Department email + SPOC name. No appointment CTA.

### Unique Visual Elements

- Mission cards: purple icon circles, white card backgrounds
- Quality Dimensions: cards with purple bottom border accent
- Accreditation badges: circular icon containers with certification details
- All clinical sections (Services, Facilities) are modular — show/hide based on data

## Styling

### Shared Design System

All three templates share the same base CSS custom properties from `globals.css`. Each template adds its own accent color variables.

### Accent Colors Per Category

| Category | `--accent` | `--accent-light` | `--accent-dark` | Hero Gradient |
|----------|-----------|-----------------|----------------|---------------|
| Clinical | `#134795` | `#EBF0FA` | `#0d2d60` | `#0d2d60` → `#1a5cc7` |
| Diagnostic | `#1a6b5a` | `#ecfdf5` | `#134e3f` | `#0f4a3a` → `#22876f` |
| Support | `#5b3a8a` | `#f5f0ff` | `#44296b` | `#3d2566` → `#7248a8` |

### Typography (consistent across all templates)

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Department name (hero) | Playfair Display | 48px (clamp to 32px mobile) | 700 | white |
| Section titles | Playfair Display | 28px | 600 | `--accent` |
| Section labels | DM Sans | 12px uppercase | 600 | `--color-teal-accessible` |
| Body text | PT Serif | 16.5px | 400 | `--color-text-primary` |
| UI text | DM Sans | 13-16px | 400-600 | varies |

### Responsive Behavior

| Breakpoint | Layout Changes |
|------------|---------------|
| > 768px | Multi-column grids, HOD photo beside text, hero with photo |
| <= 768px | Single column, hero photo hidden, grids stack, CTA strips stack |

## Component Architecture

### File Structure

```
app/departments/[slug]/
  page.tsx                          — Route handler, determines category, renders correct template
  department-clinical.module.css    — Clinical template styles
  department-diagnostic.module.css  — Diagnostic template styles
  department-support.module.css     — Support template styles

components/
  DepartmentClinical.tsx            — Clinical template component
  DepartmentDiagnostic.tsx          — Diagnostic template component
  DepartmentSupport.tsx             — Support template component

data/
  departments.ts                    — Updated interface + department data
```

### Routing Logic

The `page.tsx` route handler reads the department data, checks `department.category`, and renders the appropriate template component:

```typescript
export default async function DepartmentPage({ params }) {
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  switch (dept.category) {
    case 'clinical':
      return <DepartmentClinical department={dept} />;
    case 'diagnostic':
      return <DepartmentDiagnostic department={dept} />;
    case 'support':
      return <DepartmentSupport department={dept} />;
  }
}
```

### Shared Components

The following elements are identical across all three templates and can be shared:
- Breadcrumb bar
- Sticky section nav (existing `StickyDoctorBar` component, renamed or reused)
- HOD Message layout
- Legacy timeline
- Achievements list
- Doctor/expert card grid

These should be extracted into shared sub-components to avoid duplication.

## SubNav Updates

Update `components/SubNav.tsx` to link all 9 departments to their correct routes:

### Clinical Departments column
| Label | href |
|-------|------|
| Surgical Oncology | `/departments/surgical-oncology` |
| Medical Oncology | `/departments/medical-oncology` |
| Radiation Oncology | `/departments/radiation-oncology` |
| Gynaecological Oncology | `/departments/gynaecological-oncology` |
| Palliative Medicine | `/departments/palliative-medicine` |

### Diagnostic Services column
| Label | href |
|-------|------|
| Microbiology | `/departments/microbiology` |
| Radio Diagnosis and Imaging | `/departments/radiology` |
| Nuclear Medicine | `/departments/nuclear-medicine` |

### Support Services column
| Label | href | Action |
|-------|------|--------|
| Anaesthesia & Pain Management | `/departments/anaesthesia-pain-management` | Update existing href |
| Quality Control | `/departments/quality-control` | **Add new entry** (not currently in SubNav) |

Note: Departments without form data (e.g., Clinical Biochemistry, Cytogenetics, Molecular Oncology, etc.) should keep `href: ""` until their data is collected.

## Conditional Rendering Strategy

Every section must handle missing data gracefully. Since data completeness varies significantly between departments (Quality Control has "Not Applicable" for most clinical fields), the rendering logic is:

All optional array fields must use optional chaining since they may be `undefined`:

```
// Shared across all templates
if hod.message                        → render HOD Message
if overview.length > 0                → render Overview
if experts.length > 0                 → render Our Experts
if legacy.length > 0                  → render Legacy
if achievements.length > 0           → render Achievements

// Clinical only (all optional — use ?. operator)
if whenToVisit?.length > 0           → render Warning Signs
if conditionsTreated?.length > 0     → render Conditions
if treatmentOptions?.length > 0      → render Treatments
if preventiveMeasures?.length > 0    → render Prevention

// Diagnostic only
if diagnosticServices?.length > 0    → render Diagnostic Services
if therapeuticServices?.length > 0   → render Therapeutic Services
if equipment?.length > 0             → render Equipment Showcase

// Support only
if missionPhilosophy?.length > 0     → render Mission & Philosophy
if qualityDimensions?.length > 0     → render Quality Dimensions
if accreditations?.length > 0        → render Accreditations
if services?.length > 0              → render Services & Scope
if facilities?.length > 0            → render Facilities
```

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, heading hierarchy
- Skip-to-content link
- ARIA labels on navigation and landmark regions
- Focus-visible states on all interactive elements
- Color contrast meets WCAG AA (all accent colors verified)
- `alt` text on images
- Warning Signs section: uses semantic alert styling, not just color

## Out of Scope

- Departments without form data (Clinical Biochemistry, Cytogenetics, Molecular Oncology, Onco-Pathology, Preventive Oncology, Medical Gastroenterology, etc.)
- Department photo download/hosting from Google Drive links
- Gallery section (existed in old template, not requested for new)
- FAQ section (existed in old template, not requested for new)
- HOD photo collection
- Department listing/index page redesign
