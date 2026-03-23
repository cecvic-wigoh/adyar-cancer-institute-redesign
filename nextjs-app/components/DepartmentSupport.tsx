/**
 * DepartmentSupport.tsx
 * Template for support department pages (e.g. Quality Control, Anaesthesia).
 * Server component — no 'use client'.
 *
 * Most modular template: many sections show/hide based on data availability.
 */

import type { Department } from '@/data/departments';
import {
  DeptBreadcrumb,
  DeptHodMessage,
  DeptSection,
  DeptLegacy,
  DeptAchievements,
  DeptExperts,
} from '@/components/DepartmentShared';
import StickyDoctorBar from '@/components/StickyDoctorBar';
import styles from '@/app/departments/[slug]/department-support.module.css';

/* ── Inline SVG icons for mission cards ── */

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b3a8a"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b3a8a"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ShieldAccredIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b3a8a"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* Rotate through accreditation icons */
const accredIcons = [AwardIcon, CheckCircleIcon, ShieldAccredIcon];

/* Rotate through mission icons */
const missionIcons = [ShieldIcon, ActivityIcon, UsersIcon];

/* ── Helper: parse mission card from string ── */

function parseMissionCard(text: string) {
  const colonIdx = text.indexOf(':');
  if (colonIdx > -1) {
    return {
      title: text.slice(0, colonIdx).trim(),
      description: text.slice(colonIdx + 1).trim(),
    };
  }
  return { title: text, description: '' };
}

/* ── Helper: build sticky nav sections dynamically ── */

function buildSectionItems(department: Department) {
  const items: { id: string; label: string }[] = [];

  items.push({ id: 'overview', label: 'Overview' });

  if (department.missionPhilosophy && department.missionPhilosophy.length > 0) {
    items.push({ id: 'mission', label: 'Mission' });
  }
  if (
    department.qualityDimensions &&
    department.qualityDimensions.length > 0
  ) {
    items.push({ id: 'quality-dimensions', label: 'Quality Dimensions' });
  }
  if (department.accreditations && department.accreditations.length > 0) {
    items.push({ id: 'accreditations', label: 'Accreditations' });
  }
  if (department.services && department.services.length > 0) {
    items.push({ id: 'services', label: 'Services' });
  }
  if (department.mahaveerAshray && department.mahaveerAshray.length > 0) {
    items.push({ id: 'mahaveer-ashray', label: 'Mahaveer Ashray' });
  }
  if (department.supportGroups && department.supportGroups.length > 0) {
    items.push({ id: 'support-groups', label: 'Support Groups' });
  }
  if (department.facilities && department.facilities.length > 0) {
    items.push({ id: 'facilities', label: 'Facilities' });
  }
  if (department.experts.length > 0) {
    items.push({ id: 'team', label: 'Our Team' });
  }
  if (department.legacy.length > 0) {
    items.push({ id: 'legacy', label: 'Legacy' });
  }
  if (department.achievements.length > 0) {
    items.push({ id: 'achievements', label: 'Achievements' });
  }

  items.push({ id: 'contact', label: 'Contact' });

  return items;
}

/* ── Main component ── */

export default function DepartmentSupport({
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
        <div className={styles.heroInner}>
          <div className={styles.heroLabel}>Department</div>
          <h1 className={styles.heroTitle}>{department.title}</h1>
          <p className={styles.heroTagline}>{department.tagline}</p>
        </div>
      </section>

      {/* 4. HOD Message */}
      <DeptHodMessage hod={department.hod} />

      {/* 5. Department Overview */}
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

      {/* 6. Mission & Philosophy */}
      {department.missionPhilosophy &&
        department.missionPhilosophy.length > 0 && (
          <div className={styles.missionSection} id="mission">
            <div className={styles.missionInner}>
              <div className={styles.missionLabel}>Our Purpose</div>
              <h2 className={styles.missionTitle}>Mission &amp; Philosophy</h2>
              {/* First item as narrative text, rest as cards */}
              <div className={styles.missionBody}>
                <p>{department.missionPhilosophy[0]}</p>
              </div>
              {department.missionPhilosophy.length > 1 && (
                <div className={styles.missionGrid}>
                  {department.missionPhilosophy.slice(1).map((item, i) => {
                    const { title, description } = parseMissionCard(item);
                    const IconComponent =
                      missionIcons[i % missionIcons.length];
                    return (
                      <div key={i} className={styles.missionCard}>
                        <div className={styles.missionIcon}>
                          <IconComponent />
                        </div>
                        <h4 className={styles.missionCardTitle}>{title}</h4>
                        {description && (
                          <p className={styles.missionCardText}>
                            {description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

      {/* 7. Quality Dimensions */}
      {department.qualityDimensions &&
        department.qualityDimensions.length > 0 && (
          <DeptSection
            label="Our Framework"
            title="Six Dimensions of Quality Healthcare"
            id="quality-dimensions"
          >
            <div className={styles.dimensionsGrid}>
              {department.qualityDimensions.map((dim, i) => (
                <div key={i} className={styles.dimensionCard}>
                  <h4 className={styles.dimensionCardName}>{dim.name}</h4>
                  <p className={styles.dimensionCardDesc}>
                    {dim.description}
                  </p>
                </div>
              ))}
            </div>
          </DeptSection>
        )}

      {/* 8. Accreditations & Standards */}
      {department.accreditations && department.accreditations.length > 0 && (
        <DeptSection
          label="Certifications"
          title="Accreditations & Standards"
          id="accreditations"
        >
          <div className={styles.accredGrid}>
            {department.accreditations.map((accred, i) => {
              const IconComponent =
                accredIcons[i % accredIcons.length];
              return (
                <div key={i} className={styles.accredCard}>
                  <div className={styles.accredBadge}>
                    <IconComponent />
                  </div>
                  <h4 className={styles.accredCardName}>{accred.name}</h4>
                  <p className={styles.accredCardDesc}>
                    {accred.description}
                  </p>
                  <span className={styles.accredYear}>{accred.status}</span>
                </div>
              );
            })}
          </div>
        </DeptSection>
      )}

      {/* 9. Services & Scope */}
      {department.services && department.services.length > 0 && (
        <DeptSection
          label="What We Offer"
          title="Services & Scope"
          id="services"
        >
          <div className={styles.servicesGrid}>
            {department.services.map((service, i) => (
              <div key={i} className={styles.serviceItem}>
                {service}
              </div>
            ))}
          </div>
        </DeptSection>
      )}

      {/* 9b. Mahaveer Ashray */}
      {department.mahaveerAshray && department.mahaveerAshray.length > 0 && (
        <DeptSection label="Hospice Care" title="Mahaveer Ashray — End of Life Care" id="mahaveer-ashray">
          <div className={styles.overviewBody}>
            {department.mahaveerAshray.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </DeptSection>
      )}

      {/* 9c. Support Groups */}
      {department.supportGroups && department.supportGroups.length > 0 && (
        <DeptSection label="Community Support" title="Support Groups" id="support-groups">
          <div className={styles.overviewBody}>
            {department.supportGroups.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </DeptSection>
      )}

      {/* 10. Facilities & Equipment */}
      {department.facilities && department.facilities.length > 0 && (
        <DeptSection
          label="Infrastructure"
          title="Facilities & Equipment"
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

      {/* 11. Our Team */}
      {department.experts.length > 0 && (
        <DeptSection label="Meet the Team" title="Our Team" id="team">
          <DeptExperts experts={department.experts} />
        </DeptSection>
      )}

      {/* 12. Legacy & History */}
      {department.legacy.length > 0 && (
        <DeptSection
          label="Our Heritage"
          title="Legacy &amp; History"
          id="legacy"
        >
          <DeptLegacy legacy={department.legacy} />
        </DeptSection>
      )}

      {/* 13. Key Achievements */}
      {department.achievements.length > 0 && (
        <DeptSection
          label="Milestones"
          title="Key Achievements"
          id="achievements"
        >
          <DeptAchievements achievements={department.achievements} />
        </DeptSection>
      )}

      {/* 14. Contact — no appointment CTA */}
      <div className={styles.contactSection} id="contact">
        <div className={styles.contactInner}>
          <h3 className={styles.contactTitle}>Contact the Department</h3>
          <p className={styles.contactSubtitle}>
            For inquiries about {department.title.toLowerCase()}
          </p>
          <div className={styles.contactEmail}>
            <MailIcon />
            {department.contactEmail}
          </div>
          {department.spoc && (
            <div className={styles.contactSpoc}>
              <strong>Department SPOC:</strong> {department.spoc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
