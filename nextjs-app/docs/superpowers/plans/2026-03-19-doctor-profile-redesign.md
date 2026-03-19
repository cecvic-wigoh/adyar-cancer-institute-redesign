# Doctor Profile Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the doctor profile page to a clean, full-width, MSK-inspired layout with updated data model matching the Google Form responses.

**Architecture:** Update the `Doctor` interface in `data/doctors.ts` to a 3-tier education structure with optional fellowships and publications URL. Rewrite `app/doctors/[slug]/page.tsx` as a vertically stacked, full-width layout (no sidebar). Restyle `StickyDoctorBar` to a minimal text-only nav. Update `DoctorsDirectory` and department page to work with the new interface. Complete CSS rewrite of `doctor.module.css`.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, CSS Modules, CSS Custom Properties

**Spec:** `docs/superpowers/specs/2026-03-19-doctor-profile-redesign-design.md`
**Approved Mockup:** `.superpowers/brainstorm/30717-1773874731/design-mockup.html`

---

### Task 1: Update Doctor Data Model

**Files:**
- Modify: `data/doctors.ts` — Update interfaces and migrate all existing doctor entries

**Context:** The current `Doctor` interface uses a flat `education: DoctorEducation[]` array, singular `specialty: string`, required `linkedin: string`, and `qualifications: string[]`. The new interface uses 3-tier education (`primaryDegree`, `postgraduateQualification?`, `superSpeciality?`), `specialties: string[]`, optional `linkedin?`, optional `publicationsUrl?`, optional `fellowships?: string[]`, and drops `qualifications`. A computed getter `qualifications` must be added for backward compatibility with `DoctorsDirectory` and the department page, which both reference `doctor.qualifications`.

- [ ] **Step 1: Add the new interfaces above the existing ones**

In `data/doctors.ts`, add the `DoctorDegree` interface right after the existing `DoctorEducation` interface:

```typescript
export interface DoctorDegree {
  degree: string;
  institution: string;
  year?: string;
}
```

- [ ] **Step 2: Update the `Doctor` interface**

Replace the existing `Doctor` interface with:

```typescript
export interface Doctor {
  slug: string;
  name: string;
  department: { slug: string; title: string };
  designation: string;
  specialties: string[];
  primaryDegree: DoctorDegree;
  postgraduateQualification?: DoctorDegree;
  superSpeciality?: DoctorDegree;
  fellowships?: string[];
  about: string[];
  areasOfExpertise: string[];
  experience: string[];
  publicationsUrl?: string;
  publications?: Publication[];
  publicationMetrics?: PublicationMetrics;
  publicationsList?: string[];
  linkedin?: string;
  image?: string;
  metaDescription: string;
}
```

Keep `DoctorEducation`, `Publication`, and `PublicationMetrics` interfaces as-is (they're still used).

- [ ] **Step 3: Add a helper function for backward-compatible qualifications**

Add this function after the interface definitions, before the `doctors` array:

```typescript
/** Derive a flat qualifications list from the 3-tier education + fellowships fields.
 *  Used by DoctorsDirectory search and department page doctor cards. */
export function getDoctorQualifications(doctor: Doctor): string[] {
  const quals: string[] = [doctor.primaryDegree.degree];
  if (doctor.postgraduateQualification) quals.push(doctor.postgraduateQualification.degree);
  if (doctor.superSpeciality) quals.push(doctor.superSpeciality.degree);
  if (doctor.fellowships) quals.push(...doctor.fellowships);
  return quals;
}
```

- [ ] **Step 4: Migrate the first doctor entry (Dr. Venkatraman Radhakrishnan)**

Transform the first entry from old to new shape. This is the reference pattern for all other migrations.

Old:
```typescript
{
  slug: 'dr-venkatraman-radhakrishnan',
  name: 'Dr. Venkatraman Radhakrishnan',
  specialty: 'Medical Oncology and Pediatric Oncology',
  designation: 'Professor & Head of Department',
  department: { slug: 'medical-oncology', title: 'Medical Oncology' },
  qualifications: ['MBBS', 'MD Pediatrics', 'DM Medical Oncology', 'MSc Global Child Health...'],
  // ...education, experience, etc.
}
```

New:
```typescript
{
  slug: 'dr-venkatraman-radhakrishnan',
  name: 'Dr. Venkatraman Radhakrishnan',
  department: { slug: 'medical-oncology', title: 'Medical Oncology' },
  designation: 'Professor & Head of Department',
  specialties: ['Medical Oncology', 'Pediatric Oncology'],
  primaryDegree: { degree: 'MBBS', institution: 'MGR Medical University', year: '1998' },
  postgraduateQualification: { degree: 'MD (Pediatrics)', institution: 'PGIMER, Chandigarh', year: '2003' },
  superSpeciality: { degree: 'DM (Medical Oncology)', institution: 'AIIMS, New Delhi', year: '2011' },
  fellowships: ['MSc Global Child Health, St Jude Children\'s Research Hospital, Memphis, USA'],
  about: [/* keep existing paragraphs */],
  areasOfExpertise: ['Medical and Pediatric Oncology'],
  experience: ['Professor and Head Department of Medical Oncology'],
  publicationsUrl: undefined,  // this doctor has publicationsList instead
  publicationsList: venkatramanPublications,
  linkedin: 'https://www.linkedin.com/in/dr-venkatraman-radhakrishnan-14472a1a/',
  image: '/doctor profile images/Dr Venkatraman Radhakrishnan.jpeg',
  metaDescription: 'Dr. Venkatraman Radhakrishnan — Professor & Head of Department, Medical Oncology at Cancer Institute (WIA), Chennai.',
}
```

- [ ] **Step 5: Migrate all remaining doctor entries**

Apply the same transformation to every doctor in the array. Migration rules:
- `specialty` (string) → `specialties` (array) — split on commas or "and" where applicable
- `qualifications[0]` → `primaryDegree` (usually MBBS)
- `qualifications[1]` → `postgraduateQualification` (usually MD/MS)
- `qualifications[2]` → `superSpeciality` (usually DM/MCh, if present)
- Remaining `qualifications` entries → `fellowships`
- `education` array → use to populate institution/year for each tier (match by degree name)
- Remove `qualifications` and `education` fields from each entry
- Keep all other fields as-is

- [ ] **Step 6: Remove the old `DoctorEducation` interface**

Delete the `DoctorEducation` interface since it's no longer used by any doctor entries. Keep `Publication` and `PublicationMetrics`.

- [ ] **Step 7: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors. If there are errors, they will be in files that reference the old interface fields — fix those in subsequent tasks.

- [ ] **Step 8: Commit**

```bash
git add data/doctors.ts
git commit -m "refactor: update Doctor interface to 3-tier education model

Replace flat qualifications/education arrays with structured primaryDegree,
postgraduateQualification, superSpeciality, and fellowships fields.
Add getDoctorQualifications() helper for backward compatibility."
```

---

### Task 2: Update All Files Referencing `doc.specialty`

**Files:**
- Modify: `app/doctors/DoctorsDirectory.tsx` — Update `doc.specialty` → `doc.specialties` in search filter
- Modify: `components/DoctorScroll.tsx` — Update `doc.specialty` → `doc.specialties.join(', ')`
- Modify: `app/cancer/[slug]/page.tsx` — Update `doc.specialty` → `doc.specialties.join(', ')`

**Context:** Multiple files reference the old singular `specialty` field. All must be updated to use the new `specialties` array.

- [ ] **Step 1: Update DoctorsDirectory search filter**

In `app/doctors/DoctorsDirectory.tsx`, find the line:
```typescript
|| doc.specialty.toLowerCase().includes(q)
```

Replace with:
```typescript
|| doc.specialties.some(s => s.toLowerCase().includes(q))
```

- [ ] **Step 2: Update DoctorScroll component**

In `components/DoctorScroll.tsx`, find all references to `doc.specialty` or similar and replace with `doc.specialties.join(', ')`.

- [ ] **Step 3: Update cancer type page**

In `app/cancer/[slug]/page.tsx`, find all references to `doc.specialty` and replace with `doc.specialties.join(', ')`.

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors related to DoctorsDirectory.

- [ ] **Step 3: Commit**

```bash
git add app/doctors/DoctorsDirectory.tsx components/DoctorScroll.tsx app/cancer/[slug]/page.tsx
git commit -m "fix: update all specialty references to use specialties array"
```

---

### Task 3: Update Department Page for New Interface

**Files:**
- Modify: `app/departments/[slug]/page.tsx` — Update `doctor.qualifications` reference

**Context:** The department page at line 145 uses `doctor.qualifications.slice(0, 3).join(', ')` to display credentials on doctor cards. Since `qualifications` is removed from the interface, use the `getDoctorQualifications()` helper.

- [ ] **Step 1: Import the helper and update the reference**

Add the import at the top of `app/departments/[slug]/page.tsx`:
```typescript
import { getDoctorsByDepartment, getDoctorQualifications } from '@/data/doctors';
```

Then replace:
```typescript
<div className={styles.doctorCreds}>{doctor.qualifications.slice(0, 3).join(', ')}</div>
```

With:
```typescript
<div className={styles.doctorCreds}>{getDoctorQualifications(doctor).slice(0, 3).join(', ')}</div>
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/departments/[slug]/page.tsx
git commit -m "fix: use getDoctorQualifications helper on department page"
```

---

### Task 4: Restyle StickyDoctorBar Component

**Files:**
- Modify: `components/StickyDoctorBar.tsx` — Simplify to minimal text-only nav, remove doctor name and CTA button
- Modify: `components/StickyDoctorBar.module.css` — Complete rewrite to minimal style

**Context:** The current `StickyDoctorBar` has a doctor name, pill-style nav items, and a CTA button. The new design calls for a simple sticky nav with text-only links and an underline indicator on the active item. The IntersectionObserver scroll spy logic stays the same. The bar should always be visible (not hidden/shown based on hero visibility) — it's a persistent section nav, not a scroll-triggered bar.

- [ ] **Step 1: Update StickyDoctorBar.tsx**

Rewrite the component to remove the doctor name and CTA button. The bar is always visible (remove the hero-visibility IntersectionObserver). Keep the section scroll spy observer.

```typescript
'use client';

import { useEffect, useState } from 'react';
import styles from './StickyDoctorBar.module.css';

interface Section {
  id: string;
  label: string;
}

interface StickyDoctorBarProps {
  sections: Section[];
}

export default function StickyDoctorBar({ sections }: StickyDoctorBarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via scroll spy
  useEffect(() => {
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`${styles.bar} ${scrolled ? styles.barScrolled : ''}`}
      role="navigation"
      aria-label="Doctor profile sections"
    >
      <div className={styles.barInner}>
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`${styles.navItem} ${activeSection === s.id ? styles.navActive : ''}`}
            onClick={() => handleClick(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Rewrite StickyDoctorBar.module.css**

Replace the entire file with the minimal style:

```css
/* ── Minimal Sticky Section Nav ── */
.bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-white);
  border-bottom: 1px solid #E5E7EB;
  transition: box-shadow 0.2s ease;
}

.barScrolled {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.barInner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.barInner::-webkit-scrollbar {
  display: none;
}

.navItem {
  all: unset;
  cursor: pointer;
  display: block;
  padding: 14px 16px;
  font-family: var(--font-dm-sans);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-text-secondary);
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.navItem:hover {
  color: var(--color-primary);
}

.navActive {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .barInner {
    padding: 0 16px;
  }

  .navItem {
    padding: 12px 12px;
    font-size: 12.5px;
  }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors. Note that the `doctorName` prop has been removed — this will cause a compile error in `page.tsx` which is expected and fixed in Task 5.

- [ ] **Step 4: Commit**

```bash
git add components/StickyDoctorBar.tsx components/StickyDoctorBar.module.css
git commit -m "refactor: restyle StickyDoctorBar to minimal text-only nav

Remove doctor name and CTA button. Always-visible sticky nav with
text links and underline active indicator. Keep scroll spy logic."
```

---

### Task 5: Rewrite Doctor Profile Page Component

**Files:**
- Modify: `app/doctors/[slug]/page.tsx` — Complete rewrite to new MSK-inspired layout

**Context:** This is the main task. Replace the entire page component with the new full-width, vertically stacked layout. Remove sidebar, highlights strip, related doctors carousel. Add inline CTA strips. Use the new data model fields. Refer to the approved mockup at `.superpowers/brainstorm/30717-1773874731/design-mockup.html` for the exact HTML structure.

**Important:** Keep `generateStaticParams()` and `generateMetadata()` as-is. Only rewrite the default export component.

- [ ] **Step 1: Rewrite the page component**

Replace `app/doctors/[slug]/page.tsx` with the new layout. Key structural changes:
- Remove imports: `StatCounter`, `getDoctorsByDepartment` (no longer needed)
- Add import: `getDoctorQualifications` from `@/data/doctors`
- Update `StickyDoctorBar` usage: remove `doctorName` prop
- Section order: Breadcrumb → StickyNav → Hero → CTA Strip → About → Expertise → Education → Experience → CTA Strip → Publications → Bottom CTA
- No sidebar, no related doctors, no highlights strip

```typescript
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { doctors, getDoctorBySlug, getDoctorQualifications } from '@/data/doctors';
import DoctorAvatar from '@/components/DoctorAvatar';
import StickyDoctorBar from '@/components/StickyDoctorBar';
import PaginatedPublications from '@/components/PaginatedPublications';
import styles from './doctor.module.css';

export async function generateStaticParams() {
  return doctors.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} | ${doctor.department.title} | Cancer Institute (WIA)`,
    description: doctor.metaDescription,
  };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const qualifications = getDoctorQualifications(doctor);
  const lastName = doctor.name.split(' ').pop() ?? doctor.name;

  // Build section nav based on available data
  const sectionItems: { id: string; label: string }[] = [];
  if (doctor.about.length > 0) sectionItems.push({ id: 'sec-about', label: 'About' });
  if (doctor.areasOfExpertise.length > 0) sectionItems.push({ id: 'sec-expertise', label: 'Expertise' });
  sectionItems.push({ id: 'sec-education', label: 'Education & Training' }); // always present (primaryDegree is required)
  if (doctor.experience.length > 0) sectionItems.push({ id: 'sec-experience', label: 'Experience' });
  if (doctor.publicationsUrl || doctor.publications?.length || doctor.publicationsList?.length) {
    sectionItems.push({ id: 'sec-publications', label: 'Publications' });
  }

  const hasFellowships = doctor.fellowships && doctor.fellowships.length > 0;
  const hasPublications = doctor.publicationsUrl || (doctor.publications && doctor.publications.length > 0) || (doctor.publicationsList && doctor.publicationsList.length > 0);

  return (
    <main id="main" className={styles.page}>

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href="/doctors">Doctors</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href={`/departments/${doctor.department.slug}`}>{doctor.department.title}</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>{doctor.name}</span>
        </nav>
      </div>

      {/* ── STICKY NAV ── */}
      <StickyDoctorBar sections={sectionItems} />

      {/* ── HERO ── */}
      <section className={styles.hero} id="doctor-hero">
        <div className={styles.heroInfo}>
          <div className={styles.heroDept}>{doctor.department.title}</div>
          <h1 className={styles.heroName}>{doctor.name}</h1>
          <p className={styles.heroDesignation}>{doctor.designation}</p>

          <div className={styles.heroQualifications}>
            <strong>Qualifications</strong>
            <span>{qualifications.join(' \u2022 ')}</span>

            <strong>Specialties</strong>
            <span>{doctor.specialties.join(' \u2022 ')}</span>
          </div>

          {doctor.linkedin && (
            <div className={styles.heroLinkedin}>
              <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
                View LinkedIn Profile
              </a>
            </div>
          )}
        </div>

        <div className={styles.heroPhoto}>
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={`Photo of ${doctor.name}`}
              className={styles.heroPhotoImg}
            />
          ) : (
            <DoctorAvatar name={doctor.name} size="lg" />
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className={styles.ctaStrip}>
        <div className={styles.ctaStripInner}>
          <div>
            <h3 className={styles.ctaStripTitle}>Request an Appointment</h3>
            <p className={styles.ctaStripSub}>Call us or book online to schedule your consultation</p>
          </div>
          <a href="/#appointment" className={styles.ctaBtn}>Book Appointment</a>
        </div>
      </div>

      {/* ── ABOUT ── */}
      {doctor.about.length > 0 && (
        <section id="sec-about" className={styles.section}>
          <div className={styles.sectionLabel}>Get to Know</div>
          <h2 className={styles.sectionTitle}>About Dr. {lastName}</h2>
          <div className={styles.sectionBody}>
            {doctor.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* ── AREAS OF EXPERTISE ── */}
      {doctor.areasOfExpertise.length > 0 && (
        <section id="sec-expertise" className={styles.section}>
          <div className={styles.sectionLabel}>Clinical Focus</div>
          <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          <ul className={styles.expertiseList}>
            {doctor.areasOfExpertise.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ── EDUCATION & TRAINING ── */}
      <section id="sec-education" className={styles.section}>
        <div className={styles.sectionLabel}>Credentials</div>
        <h2 className={styles.sectionTitle}>Education &amp; Training</h2>
        <div className={`${styles.eduGrid} ${!hasFellowships ? styles.eduGridFull : ''}`}>
          <div className={styles.eduGroup}>
            <h4 className={styles.eduGroupTitle}>Degrees</h4>
            <div className={styles.eduItem}>
              <div className={styles.eduDegree}>{doctor.primaryDegree.degree}</div>
              <div className={styles.eduInstitution}>
                {doctor.primaryDegree.institution}{doctor.primaryDegree.year ? `, ${doctor.primaryDegree.year}` : ''}
              </div>
            </div>
            {doctor.postgraduateQualification && (
              <div className={styles.eduItem}>
                <div className={styles.eduDegree}>{doctor.postgraduateQualification.degree}</div>
                <div className={styles.eduInstitution}>
                  {doctor.postgraduateQualification.institution}{doctor.postgraduateQualification.year ? `, ${doctor.postgraduateQualification.year}` : ''}
                </div>
              </div>
            )}
            {doctor.superSpeciality && (
              <div className={styles.eduItem}>
                <div className={styles.eduDegree}>{doctor.superSpeciality.degree}</div>
                <div className={styles.eduInstitution}>
                  {doctor.superSpeciality.institution}{doctor.superSpeciality.year ? `, ${doctor.superSpeciality.year}` : ''}
                </div>
              </div>
            )}
          </div>
          {hasFellowships && (
            <div className={styles.eduGroup}>
              <h4 className={styles.eduGroupTitle}>Fellowships</h4>
              {doctor.fellowships!.map((f, i) => (
                <div key={i} className={styles.eduItem}>
                  <div className={styles.eduDegree}>{f}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      {doctor.experience.length > 0 && (
        <section id="sec-experience" className={styles.section}>
          <div className={styles.sectionLabel}>Career</div>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ul className={styles.expList}>
            {doctor.experience.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ── CTA STRIP (second) ── */}
      <div className={styles.ctaStrip}>
        <div className={styles.ctaStripInner}>
          <div>
            <h3 className={styles.ctaStripTitle}>Need a Consultation?</h3>
            <p className={styles.ctaStripSub}>Our team is here to help you schedule an appointment</p>
          </div>
          <a href="/#appointment" className={styles.ctaBtn}>Book Appointment</a>
        </div>
      </div>

      {/* ── PUBLICATIONS ── */}
      {hasPublications && (
        <section id="sec-publications" className={styles.section}>
          <div className={styles.sectionLabel}>Research</div>
          <h2 className={styles.sectionTitle}>Publications</h2>

          {/* Structured publications with metrics */}
          {doctor.publications && doctor.publications.length > 0 && doctor.publicationMetrics && (
            <div className={styles.pubMetrics}>
              {[
                { label: 'Publications', value: doctor.publicationMetrics.total },
                { label: 'Citations', value: doctor.publicationMetrics.citations },
                { label: 'h-index', value: doctor.publicationMetrics.hIndex },
                { label: 'i10-index', value: doctor.publicationMetrics.i10Index },
              ].map((m) => (
                <div key={m.label} className={styles.pubMetric}>
                  <span className={styles.pubMetricValue}>{m.value}</span>
                  <span className={styles.pubMetricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Paginated publication list */}
          {doctor.publicationsList && doctor.publicationsList.length > 0 && (
            <PaginatedPublications publications={doctor.publicationsList} />
          )}

          {/* Publications URL link */}
          {doctor.publicationsUrl && (
            <div className={styles.pubUrlWrap}>
              <p className={styles.pubNote}>
                View the complete list of research publications and citations.
              </p>
              <a
                href={doctor.publicationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubLink}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View All Publications
              </a>
            </div>
          )}
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <div className={styles.bottomCta}>
        <div className={styles.bottomCtaInner}>
          <h3 className={styles.bottomCtaTitle}>Ready to Schedule Your Visit?</h3>
          <p className={styles.bottomCtaSub}>Contact the Cancer Institute (WIA) to book an appointment with {doctor.name}</p>
          <a href="/#appointment" className={styles.bottomCtaBtn}>Request Appointment</a>
        </div>
      </div>

    </main>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/doctors/[slug]/page.tsx
git commit -m "feat: rewrite doctor profile page to MSK-inspired full-width layout

Replace sidebar layout with vertically stacked sections, inline CTAs,
and breadcrumb navigation. Remove highlights strip and related doctors."
```

---

### Task 6: Rewrite Doctor Profile CSS

**Files:**
- Modify: `app/doctors/[slug]/doctor.module.css` — Complete rewrite (~300 lines replacing ~1070 lines)

**Context:** The existing CSS file is 1070 lines with sidebar layout, noise texture hero, circular avatars, timeline dots, expertise chips, etc. Replace entirely with the clean, full-width MSK-inspired styles. Refer to the approved mockup HTML at `.superpowers/brainstorm/30717-1773874731/design-mockup.html` for the exact CSS properties.

- [ ] **Step 1: Replace the entire CSS file**

Write the new `doctor.module.css` with all styles needed for the new layout. Key class names to implement (matching the JSX in Task 5):

**Page & Breadcrumb:**
- `.page` — base page styles
- `.breadcrumbBar`, `.breadcrumb`, `.breadcrumbSep`, `.breadcrumbCur`

**Hero:**
- `.hero` — 2-column grid (1fr 320px), max-width 1100px centered
- `.heroInfo`, `.heroDept`, `.heroName`, `.heroDesignation`
- `.heroQualifications` — with `strong` labels
- `.heroLinkedin`
- `.heroPhoto`, `.heroPhotoImg`

**CTA Strip:**
- `.ctaStrip`, `.ctaStripInner`, `.ctaStripTitle`, `.ctaStripSub`
- `.ctaBtn`

**Content Sections:**
- `.section` — 48px padding, max-width 1100px, bottom border
- `.sectionLabel` — 12px uppercase teal
- `.sectionTitle` — Playfair Display 28px primary
- `.sectionBody` — PT Serif 16.5px

**Expertise:**
- `.expertiseList` — 2-column grid with teal dot bullets

**Education:**
- `.eduGrid`, `.eduGridFull` — 2-column (or full-width when no fellowships)
- `.eduGroup`, `.eduGroupTitle`, `.eduItem`, `.eduDegree`, `.eduInstitution`

**Experience:**
- `.expList` — simple list with bottom borders

**Publications:**
- `.pubMetrics`, `.pubMetric`, `.pubMetricValue`, `.pubMetricLabel`
- `.pubUrlWrap`, `.pubNote`, `.pubLink`

**Bottom CTA:**
- `.bottomCta`, `.bottomCtaInner`, `.bottomCtaTitle`, `.bottomCtaSub`, `.bottomCtaBtn`

**Responsive:** Single breakpoint at 768px — hero goes single-column (photo first), expertise/education go single-column, CTA strips stack vertically.

Use the exact CSS from the approved mockup as the reference for font sizes, colors, spacing, and responsive behavior. All colors and fonts should reference CSS custom properties from `globals.css`.

- [ ] **Step 2: Verify the dev server renders correctly**

Run: `npm run dev`
Navigate to: `http://localhost:3000/doctors/dr-venkatraman-radhakrishnan`
Expected: Page renders with the new MSK-inspired layout matching the approved mockup.

- [ ] **Step 3: Spot-check responsive behavior**

Resize browser to < 768px.
Expected: Single-column layout, photo above name, CTA strips stacked.

- [ ] **Step 4: Commit**

```bash
git add app/doctors/[slug]/doctor.module.css
git commit -m "feat: rewrite doctor profile CSS for MSK-inspired layout

Full-width sections, clean typography, inline CTAs, responsive at 768px.
Replaces 1070-line sidebar layout with ~300-line clean implementation."
```

---

### Task 7: Visual QA and Final Adjustments

**Files:**
- Possibly modify: `app/doctors/[slug]/page.tsx`, `app/doctors/[slug]/doctor.module.css`, `components/StickyDoctorBar.module.css`

**Context:** Run the dev server, visually compare the result against the approved mockup, and fix any discrepancies.

- [ ] **Step 1: Start dev server and compare**

Run: `npm run dev`
Open: `http://localhost:3000/doctors/dr-venkatraman-radhakrishnan`
Compare against the mockup at `.superpowers/brainstorm/30717-1773874731/design-mockup.html`

Check:
- [ ] Breadcrumb renders correctly with proper links
- [ ] Sticky nav shows all relevant sections and highlights active on scroll
- [ ] Hero layout: name left, photo right, qualifications and specialties displayed
- [ ] CTA strips render with correct blue background
- [ ] About section renders biography paragraphs
- [ ] Areas of Expertise renders as 2-column bulleted list
- [ ] Education shows degrees and fellowships in 2-column grid
- [ ] Experience renders as a simple list
- [ ] Publications section renders with link button
- [ ] Bottom CTA renders centered on off-white background
- [ ] Mobile responsive layout works (< 768px)

- [ ] **Step 2: Test a doctor with minimal data**

Navigate to a doctor profile that has sparse data (e.g., a doctor without fellowships, without publications, without a biography).
Expected: Missing sections are not rendered. No empty containers or broken layouts.

- [ ] **Step 3: Test a doctor with structured publications**

Navigate to Dr. Venkatraman Radhakrishnan's profile.
Expected: Paginated publications list renders correctly below the publications section.

- [ ] **Step 4: Fix any visual issues found**

Apply CSS tweaks or JSX adjustments as needed.

- [ ] **Step 5: Final TypeScript check**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual QA adjustments for doctor profile redesign"
```

---

## File Map Summary

| File | Action | Task |
|------|--------|------|
| `data/doctors.ts` | Modify: new interfaces + migrate data | Task 1 |
| `app/doctors/DoctorsDirectory.tsx` | Modify: `specialty` → `specialties` | Task 2 |
| `components/DoctorScroll.tsx` | Modify: `specialty` → `specialties` | Task 2 |
| `app/cancer/[slug]/page.tsx` | Modify: `specialty` → `specialties` | Task 2 |
| `app/departments/[slug]/page.tsx` | Modify: use `getDoctorQualifications` | Task 3 |
| `components/StickyDoctorBar.tsx` | Modify: simplify to minimal nav | Task 4 |
| `components/StickyDoctorBar.module.css` | Modify: complete restyle | Task 4 |
| `app/doctors/[slug]/page.tsx` | Modify: complete rewrite | Task 5 |
| `app/doctors/[slug]/doctor.module.css` | Modify: complete rewrite | Task 6 |
