# Department Templates Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the single department page template with three distinct templates (Clinical, Diagnostic, Support), each optimized for its category's content and audience.

**Architecture:** Update the `Department` interface in `data/departments.ts` to include a `category` field and category-specific data fields. Create three template components (`DepartmentClinical.tsx`, `DepartmentDiagnostic.tsx`, `DepartmentSupport.tsx`) with separate CSS Modules. The route handler (`app/departments/[slug]/page.tsx`) switches on `department.category` to render the correct template. Shared sections (breadcrumb, HOD message, legacy timeline, achievements, expert cards) are extracted into reusable sub-components. Update SubNav with correct department links.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, CSS Modules, CSS Custom Properties

**Spec:** `docs/superpowers/specs/2026-03-19-department-templates-design.md`
**Approved Mockups:**
- Clinical: `.superpowers/brainstorm/43863-1773882354/clinical-template-mockup.html`
- Diagnostic: `.superpowers/brainstorm/43863-1773882354/diagnostic-template-mockup.html`
- Support: `.superpowers/brainstorm/43863-1773882354/support-template-mockup.html`

---

## File Map

| File | Action | Task |
|------|--------|------|
| `data/departments.ts` | Modify: new interfaces + migrate/add department data | Task 1 |
| `components/DepartmentShared.tsx` | Create: shared sub-components (breadcrumb, HOD, legacy, achievements, experts) | Task 2 |
| `components/DepartmentShared.module.css` | Create: shared styles | Task 2 |
| `components/DepartmentClinical.tsx` | Create: clinical template component | Task 3 |
| `app/departments/[slug]/department-clinical.module.css` | Create: clinical-specific styles | Task 3 |
| `components/DepartmentDiagnostic.tsx` | Create: diagnostic template component | Task 4 |
| `app/departments/[slug]/department-diagnostic.module.css` | Create: diagnostic-specific styles | Task 4 |
| `components/DepartmentSupport.tsx` | Create: support template component | Task 5 |
| `app/departments/[slug]/department-support.module.css` | Create: support-specific styles | Task 5 |
| `app/departments/[slug]/page.tsx` | Modify: routing logic to switch on category | Task 6 |
| `app/departments/[slug]/department.module.css` | Delete: old single-template styles | Task 6 |
| `components/SubNav.tsx` | Modify: update department href values | Task 7 |
| `components/DepartmentFAQ.tsx` | Delete: no longer used | Task 6 |
| `components/DepartmentSidebar.tsx` | Delete: no longer used | Task 6 |

---

### Task 1: Update Department Data Model and Migrate Data

**Files:**
- Modify: `data/departments.ts` — Replace interfaces, migrate existing entries, add new entries from form data

**Context:** The current file has ~1360 lines with an old `Department` interface and 9 department entries. The new interface adds a `category` field, restructures `hod` (flat `message: string` instead of `message: { quote, body }`), and adds category-specific optional fields. Existing entries must be migrated, and data from `form_responses/Department.xlsx` should be incorporated where it enriches existing entries.

- [ ] **Step 1: Replace all interfaces at the top of the file**

Remove the old interfaces (`DepartmentHOD`, `DepartmentStat`, `TeamMember`, `Condition`, `Facility`, `TimelineItem`, `Achievement`, `GalleryItem`, `FAQItem`, `Department`) and replace with the new interfaces from the spec:

```typescript
export type DepartmentCategory = 'clinical' | 'diagnostic' | 'support';

export interface Department {
  slug: string;
  title: string;
  category: DepartmentCategory;
  metaDescription: string;
  tagline: string;
  overview: string[];
  hod: {
    name: string;
    credentials: string;
    designation: string;
    message: string;
    image?: string;
  };
  contactEmail: string;
  spoc?: string;
  departmentPhoto?: string;
  experts: DepartmentExpert[];
  achievements: string[];
  legacy: string[];
  // Clinical-specific
  conditionsTreated?: string[];
  treatmentOptions?: string[];
  preventiveMeasures?: string[];
  whenToVisit?: string[];
  // Diagnostic-specific
  diagnosticServices?: DiagnosticServiceCategory[];
  therapeuticServices?: TherapeuticService[];
  equipment?: EquipmentItem[];
  // Support-specific
  missionPhilosophy?: string[];
  accreditations?: Accreditation[];
  qualityDimensions?: QualityDimension[];
  services?: string[];
  facilities?: string[];
}

export interface DepartmentExpert {
  name: string;
  credentials: string;
  designation: string;
  slug?: string;
}

export interface DiagnosticServiceCategory {
  category: string;
  services: string[];
}

export interface TherapeuticService {
  name: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  description: string;
  badge?: string;
}

export interface Accreditation {
  name: string;
  description: string;
  status: string;
}

export interface QualityDimension {
  name: string;
  description: string;
}
```

Keep the helper functions `getAllDepartmentSlugs()` and `getDepartmentBySlug()` as-is.

- [ ] **Step 2: Migrate existing department entries to new shape**

For each of the 9 existing entries, transform from old to new:

Migration rules:
- Add `category`: `'clinical'` for surgical-oncology, medical-oncology, radiology → wait, radiology is diagnostic. See category assignments:
  - `'clinical'`: surgical-oncology, medical-oncology, gynaecological-oncology, palliative-medicine
  - `'diagnostic'`: radiology, nuclear-medicine, microbiology
  - `'support'`: anaesthesia-pain, quality-control
- `heroTagline` → `tagline`
- `heroDesc` → append to `overview` as first paragraph (keep existing `about` paragraphs)
- `about` → `overview` (rename)
- `hod.message.quote` + `hod.message.body` → concatenate into single `hod.message` string
- Remove `hod.initial` (not in new interface)
- `team` → `experts` (rename, map `TeamMember` → `DepartmentExpert`, drop `tags`)
- `conditions[].items` → `conditionsTreated` (flatten into single array)
- `facilities` → keep as `facilities` for support template, or populate `equipment` for diagnostic
- `timeline` → `legacy` (map `{year, text}` to string array like `"1954: Inception"`)
- `achievements` → flatten from `{text}[]` to `string[]`
- Remove: `accentColor`, `accentDark`, `accentLight`, `accentPale`, `stats`, `gallery`, `faq`, `contactPhone`, `ctaTitle` (accent colors are now determined by category, stats/gallery/faq are out of scope)
- Add `contactEmail` from form data where available
- Add `spoc` from form data where available

- [ ] **Step 3: Enrich entries with form response data**

For departments that have form responses, add the new category-specific fields:

**Clinical departments** (Medical Oncology, Surgical Oncology, Gynaecological Oncology, Palliative Medicine):
- `conditionsTreated` from column "3.a) What are the common conditions..."
- `treatmentOptions` from column "3C) Treatment Options"
- `preventiveMeasures` from column "3D) Preventive Measures"
- `whenToVisit` from column "3E) When Should Patients Visit..."
- Update `overview` with column "3. Department overview" if richer than existing
- Update `hod.message` with column "5. Message from the Head..."
- Update `contactEmail` with column "6. Department Contact Email"

**Diagnostic departments** (Radiology, Nuclear Medicine, Microbiology):
- `diagnosticServices` from column "3b) List the diagnostic techniques..." — parse into categorized groups
- `therapeuticServices` from column "3C) Treatment Options" — parse into name/description pairs
- `equipment` from column "7. Unique Facilities / Equipment" — parse into name/description/badge items

**Support departments** (Anaesthesia, Quality Control):
- `missionPhilosophy` — derive from HOD message and overview
- `services` from columns "3.a)" and "3C)" where applicable
- `facilities` from column "7. Unique Facilities / Equipment"
- `accreditations` — parse from achievements data (NABH, NABL mentions)
- `qualityDimensions` — for Quality Control only, parse the six dimensions from their form response

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: Errors in `app/departments/[slug]/page.tsx` referencing old interface fields — expected, fixed in Task 6.

- [ ] **Step 5: Commit**

```bash
git add data/departments.ts
git commit -m "refactor: update Department interface for 3-template system

Add category field, restructure HOD, add category-specific fields.
Migrate all 9 department entries to new shape with form response data."
```

---

### Task 2: Create Shared Department Sub-Components

**Files:**
- Create: `components/DepartmentShared.tsx` — Shared sub-components
- Create: `components/DepartmentShared.module.css` — Shared styles

**Context:** The three templates share identical sections: breadcrumb, HOD message, legacy timeline, achievements list, and expert cards. Extract these into reusable components to avoid duplicating ~200 lines of JSX across three files. Each shared component receives only the data it needs via props.

- [ ] **Step 1: Create `components/DepartmentShared.tsx`**

Export the following components from a single file:

```typescript
import Link from 'next/link';
import type { Department, DepartmentExpert } from '@/data/departments';
import styles from './DepartmentShared.module.css';
```

**`DeptBreadcrumb`** — receives `deptTitle: string`, `deptSlug: string`
- Renders: Home > Departments > {deptTitle}
- Uses DM Sans 13px, off-white background, 1px bottom border

**`DeptHodMessage`** — receives `hod: Department['hod']`
- 2-column grid: photo placeholder left (200x250px with initials), message right
- Section label "Message from the Head of Department"
- Name in Playfair Display 24px, credentials, designation
- Message in italic PT Serif with large opening quotation mark

**`DeptLegacy`** — receives `legacy: string[]`, `accentColor: string`
- Vertical timeline with dot markers
- Each entry: year (bold DM Sans 13px) + text
- If entry contains ":" split on first ":" to separate year from text; otherwise render as plain text

**`DeptAchievements`** — receives `achievements: string[]`
- Simple list with trophy emoji prefix
- DM Sans 15px, bottom borders

**`DeptExperts`** — receives `experts: DepartmentExpert[]`
- 4-column grid of cards
- Each card: initials avatar, name (DM Sans 14px 600), designation
- If `expert.slug` exists, wrap in `<Link>` to `/doctors/{slug}`

**`DeptCtaStrip`** — receives `title: string`, `subtitle: string`, `buttonText: string`, `buttonHref: string`, `bgColor: string`
- Full-width colored bar with text left, button right

- [ ] **Step 2: Create `components/DepartmentShared.module.css`**

Write styles for all shared components. Reference the approved mockup CSS for exact values. Key classes:

- `.breadcrumbBar`, `.breadcrumb`, `.breadcrumbSep`, `.breadcrumbCur`
- `.hodSection` (grid 200px 1fr), `.hodPhoto`, `.hodLabel`, `.hodName`, `.hodTitle`, `.hodMessage`
- `.legacyTimeline`, `.tlItem`, `.tlYear`, `.tlText` (with `::before` dot markers)
- `.achievementsList`, `.achievementItem`
- `.expertsGrid`, `.expertCard`, `.expertAvatar`, `.expertName`, `.expertDesig`
- `.ctaStrip`, `.ctaStripInner`, `.ctaStripTitle`, `.ctaStripSub`, `.ctaBtn`
- `.section`, `.sectionLabel`, `.sectionTitle`, `.sectionBody` (shared section base)

All styles use CSS custom properties from `globals.css`. Accent color passed as CSS variable `--accent` via inline style on container.

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: File compiles cleanly (it's new, nothing imports it yet).

- [ ] **Step 4: Commit**

```bash
git add components/DepartmentShared.tsx components/DepartmentShared.module.css
git commit -m "feat: create shared department sub-components

Breadcrumb, HOD message, legacy timeline, achievements list,
expert cards, and CTA strip — reusable across all 3 templates."
```

---

### Task 3: Create Clinical Department Template

**Files:**
- Create: `components/DepartmentClinical.tsx` — Clinical template component
- Create: `app/departments/[slug]/department-clinical.module.css` — Clinical-specific styles

**Context:** The clinical template is the most section-rich (15 sections). It uses the shared components from Task 2 plus unique sections: Warning Signs, Conditions Treated, Treatment Options, Prevention & Screening. Refer to the approved clinical mockup at `.superpowers/brainstorm/43863-1773882354/clinical-template-mockup.html` for exact CSS.

- [ ] **Step 1: Create `components/DepartmentClinical.tsx`**

The component receives `department: Department` as its only prop. It:
- Imports and uses shared components: `DeptBreadcrumb`, `DeptHodMessage`, `DeptLegacy`, `DeptAchievements`, `DeptExperts`, `DeptCtaStrip`
- Uses `StickyDoctorBar` for section nav (reuse existing component)
- Builds `sectionItems` array dynamically based on available data
- Renders sections conditionally using `?.length > 0` guards
- Sets `--accent: #134795` via inline style on the wrapper

Sections unique to clinical (in addition to shared ones):
- **Hero** — Blue gradient, Playfair 48px title, DM Sans tagline
- **Warning Signs** — Amber section with 2-column symptom cards
- **Conditions Treated** — 3-column card grid with teal left border
- **Treatment Options** — 2-column bulleted list
- **Prevention & Screening** — 2x2 info cards
- **Facilities & Equipment** — 2-column checklist

- [ ] **Step 2: Create `app/departments/[slug]/department-clinical.module.css`**

Write CSS for clinical-specific sections. Key classes:
- `.hero` (blue gradient background), `.heroInner`, `.heroLabel`, `.heroTitle`, `.heroTagline`
- `.warningSection` (amber bg, orange border), `.warningTitle`, `.warningGrid`, `.warningItem`
- `.conditionsGrid`, `.conditionCard` (teal left border)
- `.treatmentList` (2-column, dot bullets)
- `.preventionCards`, `.preventionCard` (blue-tinted bg)
- `.facilitiesList` (checkmark prefix)
- Responsive at 768px

Reference the exact CSS from the clinical mockup HTML file.

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**

```bash
git add components/DepartmentClinical.tsx "app/departments/[slug]/department-clinical.module.css"
git commit -m "feat: create clinical department template

Blue-accented template with warning signs, conditions treated,
treatments, prevention sections. Uses shared department components."
```

---

### Task 4: Create Diagnostic Department Template

**Files:**
- Create: `components/DepartmentDiagnostic.tsx` — Diagnostic template component
- Create: `app/departments/[slug]/department-diagnostic.module.css` — Diagnostic-specific styles

**Context:** The diagnostic template serves dual audiences (patients + clinicians). Refer to the approved diagnostic mockup at `.superpowers/brainstorm/43863-1773882354/diagnostic-template-mockup.html`.

- [ ] **Step 1: Create `components/DepartmentDiagnostic.tsx`**

Same pattern as clinical. Unique sections:
- **Hero** — Green gradient (`#0f4a3a` → `#22876f`)
- **Patient Guide (What to Expect)** — Green-tinted section, 3-column step cards (Before/During/After). Content is hardcoded since it applies to all diagnostic departments.
- **Diagnostic Services** — Off-white background, services organized by `DiagnosticServiceCategory` with sub-headers
- **Therapeutic Services** — 2-column cards with green left border
- **Equipment Showcase** — 3-column cards with icon placeholder, description, manufacturer badge
- **Referral & Contact** — Off-white centered section with "Refer a Patient" heading, email, referral note. Replaces appointment CTA.

Sets `--accent: #1a6b5a`.

- [ ] **Step 2: Create `app/departments/[slug]/department-diagnostic.module.css`**

Key classes:
- `.hero` (green gradient)
- `.guideSection`, `.guideSteps`, `.guideStep`, `.guideStepNum`
- `.servicesSection`, `.servicesCategory`, `.servicesCatTitle`, `.servicesList`
- `.therapyGrid`, `.therapyCard`
- `.equipmentGrid`, `.equipmentCard`, `.equipmentImg`, `.equipmentIcon`, `.equipmentBody`, `.equipmentBadge`
- `.referralSection`, `.referralNote`
- Responsive at 768px

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**

```bash
git add components/DepartmentDiagnostic.tsx "app/departments/[slug]/department-diagnostic.module.css"
git commit -m "feat: create diagnostic department template

Green-accented template with patient guide, diagnostic services,
equipment showcase, and referral CTA. Dual audience layout."
```

---

### Task 5: Create Support Department Template

**Files:**
- Create: `components/DepartmentSupport.tsx` — Support template component
- Create: `app/departments/[slug]/department-support.module.css` — Support-specific styles

**Context:** The support template is the most modular — sections show/hide based on data availability. Quality Control has minimal clinical data while Anaesthesia has services and equipment. Refer to the approved support mockup at `.superpowers/brainstorm/43863-1773882354/support-template-mockup.html`.

- [ ] **Step 1: Create `components/DepartmentSupport.tsx`**

Unique sections:
- **Hero** — Purple gradient (`#3d2566` → `#7248a8`)
- **Mission & Philosophy** — Purple-tinted section, narrative text + 3-column mission cards with purple icon circles. **Conditional.**
- **Quality Dimensions** — 3x2 grid of dimension cards with purple bottom border. **Conditional.**
- **Accreditations & Standards** — 3-column badge cards. **Conditional.**
- **Services & Scope** — 2-column list. **Conditional.**
- **Facilities & Equipment** — 2-column checklist. **Conditional.**
- **Contact** — Off-white centered section with email + SPOC. No appointment CTA.

Sets `--accent: #5b3a8a`.

All category-specific sections use `?.length > 0` conditional rendering.

- [ ] **Step 2: Create `app/departments/[slug]/department-support.module.css`**

Key classes:
- `.hero` (purple gradient)
- `.missionSection`, `.missionGrid`, `.missionCard`, `.missionIcon`
- `.dimensionsGrid`, `.dimensionCard`
- `.accredGrid`, `.accredCard`, `.accredBadge`, `.accredYear`
- `.servicesGrid`, `.serviceItem`
- `.contactSection`, `.contactEmail`, `.contactSpoc`
- Responsive at 768px

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**

```bash
git add components/DepartmentSupport.tsx "app/departments/[slug]/department-support.module.css"
git commit -m "feat: create support department template

Purple-accented modular template with mission, accreditations,
quality dimensions. Services/facilities show conditionally."
```

---

### Task 6: Rewrite Department Route Handler

**Files:**
- Modify: `app/departments/[slug]/page.tsx` — Replace with category-based routing
- Delete: `app/departments/[slug]/department.module.css` — Old single-template styles
- Delete: `components/DepartmentFAQ.tsx` — No longer used
- Delete: `components/DepartmentSidebar.tsx` — No longer used

**Context:** The current `page.tsx` is a 430-line single template. Replace it with a slim route handler that reads the department, checks `category`, and renders the appropriate template component. Keep `generateStaticParams()` and `generateMetadata()`.

- [ ] **Step 1: Rewrite `app/departments/[slug]/page.tsx`**

```typescript
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { departments, getDepartmentBySlug } from '@/data/departments';
import DepartmentClinical from '@/components/DepartmentClinical';
import DepartmentDiagnostic from '@/components/DepartmentDiagnostic';
import DepartmentSupport from '@/components/DepartmentSupport';

export async function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};
  return {
    title: `${dept.title} | Cancer Institute (WIA)`,
    description: dept.metaDescription,
  };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  switch (dept.category) {
    case 'clinical':
      return <DepartmentClinical department={dept} />;
    case 'diagnostic':
      return <DepartmentDiagnostic department={dept} />;
    case 'support':
      return <DepartmentSupport department={dept} />;
    default:
      return <DepartmentClinical department={dept} />;
  }
}
```

- [ ] **Step 2: Delete old files**

Delete `app/departments/[slug]/department.module.css` (752 lines — replaced by 3 category-specific CSS files).
Delete `components/DepartmentFAQ.tsx` and `components/DepartmentSidebar.tsx` (no longer imported).

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Verify dev server renders all departments**

Run: `npm run dev`
Test URLs:
- `http://localhost:3000/departments/medical-oncology` (clinical)
- `http://localhost:3000/departments/radiology` (diagnostic)
- `http://localhost:3000/departments/quality-control` (support)
- `http://localhost:3000/departments/surgical-oncology` (clinical)
- `http://localhost:3000/departments/anaesthesia-pain` (support)

Expected: Each renders with the correct template and accent color. No broken pages.

- [ ] **Step 5: Commit**

```bash
git add app/departments/[slug]/page.tsx
git rm app/departments/[slug]/department.module.css
git rm components/DepartmentFAQ.tsx components/DepartmentSidebar.tsx
git commit -m "feat: rewrite department route handler for 3-template system

Slim page.tsx switches on department.category to render clinical,
diagnostic, or support template. Remove old single-template CSS,
DepartmentFAQ, and DepartmentSidebar components."
```

---

### Task 7: Update SubNav Department Links

**Files:**
- Modify: `components/SubNav.tsx` — Update href values for 9 departments, add Quality Control entry

**Context:** The SubNav's "Departments & Services" category has three columns (Clinical, Diagnostic, Support) but most department links have empty `href: ""`. Update the 9 departments that now have pages, and add a new "Quality Control" entry to the Support Services column.

- [ ] **Step 1: Update Clinical Departments links**

In `components/SubNav.tsx`, in the "Clinical Departments" column, update:
- `Palliative Medicine`: `href: ""` → `href: "/departments/palliative-medicine"`

(Surgical Oncology, Medical Oncology, Radiation Oncology, and Gynaecological Oncology already have correct hrefs.)

- [ ] **Step 2: Update Diagnostic Services links**

- `Microbiology`: `href: ""` → `href: "/departments/microbiology"`
- `Radio Diagnosis and Imaging`: `href: ""` → `href: "/departments/radiology"`
- `Nuclear Medicine`: `href: ""` → `href: "/departments/nuclear-medicine"`

- [ ] **Step 3: Update Support Services links**

- `Anaesthesia & Pain Management`: `href: ""` → `href: "/departments/anaesthesia-pain"`
- Add new entry: `{ label: "Quality Control", href: "/departments/quality-control" }` after "Anaesthesia & Pain Management"

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add components/SubNav.tsx
git commit -m "feat: update SubNav with department page links

Link 9 departments to their /departments/[slug] routes.
Add Quality Control to Support Services column."
```

---

### Task 8: Visual QA and Final Adjustments

**Files:**
- Possibly modify: Any template component or CSS file

**Context:** Run the dev server, visually compare each template against its approved mockup, and fix any discrepancies.

- [ ] **Step 1: Start dev server and test all 9 departments**

Run: `npm run dev`

Test each department and verify correct template renders:

**Clinical (blue):**
- [ ] `/departments/medical-oncology` — Warning Signs, Conditions, Treatments, Prevention all render
- [ ] `/departments/surgical-oncology` — Same sections render with surgical data
- [ ] `/departments/gynaecological-oncology` — Same sections with gynae data
- [ ] `/departments/palliative-medicine` — Conditions/treatments may differ; verify conditional sections

**Diagnostic (green):**
- [ ] `/departments/radiology` — Patient Guide, Diagnostic Services, Equipment Showcase render
- [ ] `/departments/nuclear-medicine` — Therapeutic Services section should appear (radioiodine, PRRT)
- [ ] `/departments/microbiology` — Equipment section with MALDI-TOF, BacT Alert

**Support (purple):**
- [ ] `/departments/quality-control` — Mission, Quality Dimensions, Accreditations render. Services/Facilities/Experts should NOT render.
- [ ] `/departments/anaesthesia-pain` — Services & Facilities SHOULD render. Mission section shows.

- [ ] **Step 2: Verify SubNav links work**

Click each department link in the SubNav dropdown and confirm navigation works.

- [ ] **Step 3: Test responsive layout**

Resize to < 768px. Verify single-column layout, stacked grids, hidden hero photo.

- [ ] **Step 4: Final TypeScript check**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 5: Fix any visual issues found**

Apply CSS tweaks or JSX adjustments as needed.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual QA adjustments for department templates"
```
