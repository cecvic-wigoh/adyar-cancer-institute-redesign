/**
 * DepartmentClinical.tsx
 * Template for clinical department pages (e.g. Medical Oncology, Surgical Oncology).
 * Server component — no 'use client'.
 */

import Link from 'next/link';
import Image from 'next/image';
import type { Department } from '@/data/departments';
import {
  DeptBreadcrumb,
  DeptHodMessage,
  DeptSection,
  DeptLegacy,
  DeptAchievements,
  DeptExperts,
  DeptCtaStrip,
} from '@/components/DepartmentShared';
import StickyDoctorBar from '@/components/StickyDoctorBar';
import styles from '@/app/departments/[slug]/department-clinical.module.css';

/* ── Inline SVG icons (matching mockup exactly) ── */

function WarningTriangleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F97316"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function AlertCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F97316"
      strokeWidth="2"
      className={styles.warningIcon}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

/* ── Helper: build sticky nav sections dynamically ── */

function buildSectionItems(department: Department) {
  const items: { id: string; label: string }[] = [];

  items.push({ id: 'overview', label: 'Overview' });

  if (department.whenToVisit && department.whenToVisit.length > 0) {
    items.push({ id: 'when-to-visit', label: 'When to Visit' });
  }
  if (department.conditionsTreated && department.conditionsTreated.length > 0) {
    items.push({ id: 'conditions', label: 'Conditions' });
  }
  if (department.treatmentOptions && department.treatmentOptions.length > 0) {
    items.push({ id: 'treatments', label: 'Treatments' });
  }
  if (
    department.preventiveMeasures &&
    department.preventiveMeasures.length > 0
  ) {
    items.push({ id: 'prevention', label: 'Prevention' });
  }
  if (department.experts.length > 0) {
    items.push({ id: 'experts', label: 'Our Experts' });
  }
  if (department.facilities && department.facilities.length > 0) {
    items.push({ id: 'facilities', label: 'Facilities' });
  }
  if (department.legacy.length > 0) {
    items.push({ id: 'legacy', label: 'Legacy' });
  }
  if (department.achievements.length > 0) {
    items.push({ id: 'achievements', label: 'Achievements' });
  }
  items.push({ id: 'support-groups', label: 'Support Groups' });

  return items;
}

/* ── Helper: split preventive measures into title/description cards ── */

function parsePreventionCard(text: string) {
  const colonIdx = text.indexOf(':');
  if (colonIdx > -1) {
    return {
      title: text.slice(0, colonIdx).trim(),
      description: text.slice(colonIdx + 1).trim(),
    };
  }
  return { title: text, description: '' };
}

/* ── Main component ── */

export default function DepartmentClinical({
  department,
}: {
  department: Department;
}) {
  const sectionItems = buildSectionItems(department);

  return (
    <div className={styles.page}>
      {/* 1. Breadcrumb */}
      <DeptBreadcrumb deptTitle={department.title} deptSlug={department.slug} />

      {/* 2. Sticky section nav */}
      <StickyDoctorBar sections={sectionItems} />

      {/* 3. Hero */}
      <section className={styles.hero}>
        {department.heroImage && (
          <div className={styles.heroBg}>
            <Image
              src={department.heroImage}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className={styles.heroOverlay} aria-hidden="true" />
          </div>
        )}
        <div className={styles.heroInner}>
          <div className={styles.heroLabel}>Department</div>
          <h1 className={styles.heroTitle}>{department.title}</h1>
          <p className={styles.heroTagline}>{department.tagline}</p>
          <div className={styles.heroCtas}>
            <Link href="/appointments" className="btn btn-white">
              Book Appointment
            </Link>
            <Link href="tel:+914424910754" className={styles.heroPhone}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              044-2491 0754
            </Link>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <div className={styles.heroStrip}>
          <div className={styles.heroStripInner}>
            <p>
              <strong>Comprehensive Cancer Care.</strong> Providing ethical and accessible treatment since 1954.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOD Message */}
      <DeptHodMessage hod={department.hod} />

      {/* 5. Overview */}
      <DeptSection
        label="About the Department"
        title="Department Overview"
        id="overview"
      >
        <div className={styles.overviewBody}>
          {department.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </DeptSection>

      {/* 6. Warning Signs / When to Visit */}
      {department.whenToVisit && department.whenToVisit.length > 0 && (
        <div className={styles.warningSection} id="when-to-visit">
          <div className={styles.warningInner}>
            <h2 className={styles.warningTitle}>
              <WarningTriangleIcon />
              When Should You Visit This Department?
            </h2>
            <p className={styles.warningSub}>
              If you or a loved one experiences any of these symptoms, consult
              our specialists:
            </p>
            <div className={styles.warningGrid}>
              {department.whenToVisit.map((item, i) => (
                <div key={i} className={styles.warningItem}>
                  <AlertCircleIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. Conditions Treated */}
      {department.conditionsTreated &&
        department.conditionsTreated.length > 0 && (
          <DeptSection
            label="What We Treat"
            title="Conditions Treated"
            id="conditions"
          >
            <div className={styles.conditionsGrid}>
              {department.conditionsTreated.map((condition, i) => (
                <div key={i} className={styles.conditionCard}>
                  {condition}
                </div>
              ))}
            </div>
          </DeptSection>
        )}

      {/* 8. Treatment Options */}
      {department.treatmentOptions &&
        department.treatmentOptions.length > 0 && (
          <DeptSection
            label="How We Treat"
            title="Treatment Options"
            id="treatments"
          >
            <ul className={styles.treatmentList}>
              {department.treatmentOptions.map((treatment, i) => (
                <li key={i} className={styles.treatmentItem}>
                  <span className={styles.treatmentBullet} aria-hidden="true" />
                  {treatment}
                </li>
              ))}
            </ul>
          </DeptSection>
        )}

      {/* 9. Prevention & Screening */}
      {department.preventiveMeasures &&
        department.preventiveMeasures.length > 0 && (
          <DeptSection
            label="Stay Ahead"
            title="Prevention &amp; Screening"
            id="prevention"
          >
            <div className={styles.preventionCards}>
              {department.preventiveMeasures.map((measure, i) => {
                const { title, description } = parsePreventionCard(measure);
                return (
                  <div key={i} className={styles.preventionCard}>
                    <h4 className={styles.preventionCardTitle}>{title}</h4>
                    {description && (
                      <p className={styles.preventionCardText}>
                        {description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </DeptSection>
        )}

      {/* 10. CTA — Request an Appointment */}
      <DeptCtaStrip
        title="Request an Appointment"
        subtitle="Schedule a consultation with our specialists"
        buttonText="Book Appointment"
        buttonHref="/appointments"
      />

      {/* 11. Our Experts */}
      {department.experts.length > 0 && (
        <DeptSection label="Meet the Team" title="Our Experts" id="experts">
          <DeptExperts experts={department.experts} />
        </DeptSection>
      )}

      {/* 12. Facilities */}
      {department.facilities && department.facilities.length > 0 && (
        <DeptSection
          label="Infrastructure"
          title="Facilities &amp; Equipment"
          id="facilities"
        >
          <ul className={styles.facilitiesList}>
            {department.facilities.map((facility, i) => (
              <li key={i} className={styles.facilityItem}>
                <span className={styles.facilityCheck} aria-hidden="true">
                  &#x2713;
                </span>
                {facility}
              </li>
            ))}
          </ul>
        </DeptSection>
      )}

      {/* 13. Legacy & History */}
      {department.legacy.length > 0 && (
        <DeptSection label="Our Heritage" title="Legacy &amp; History" id="legacy">
          <DeptLegacy legacy={department.legacy} />
        </DeptSection>
      )}

      {/* 14. Key Achievements */}
      {department.achievements.length > 0 && (
        <DeptSection
          label="Milestones"
          title="Key Achievements"
          id="achievements"
        >
          <DeptAchievements achievements={department.achievements} />
        </DeptSection>
      )}

      {/* 14b. Support Groups */}
      <DeptSection label="Community" title="Support Groups" id="support-groups">
        {department.supportGroups && department.supportGroups.length > 0 ? (
          <div className={styles.conditionsGrid}>
            {department.supportGroups.map((group, i) => (
              <div key={i} className={styles.conditionCard}>
                {group}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#4c5d74', fontStyle: 'italic', textAlign: 'center', padding: '24px', background: '#f8fafc', borderRadius: '8px' }}>
            Content is yet to be provided
          </p>
        )}
      </DeptSection>

      {/* 15. Bottom CTA — Contact */}
      <DeptCtaStrip
        title="Contact the Department"
        subtitle={department.contactEmail}
        buttonText="Book Appointment"
        buttonHref="/appointments"
      />
    </div>
  );
}
