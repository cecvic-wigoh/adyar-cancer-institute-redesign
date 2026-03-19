/**
 * DepartmentShared.tsx
 * Shared sub-components used by all 3 department templates
 * (clinical / diagnostic / support).
 */

import Link from 'next/link';
import type { Department, DepartmentExpert } from '@/data/departments';
import styles from './DepartmentShared.module.css';

/* ── helpers ── */

/** Extract initials from a name, e.g. "Dr. Venkatraman Radhakrishnan" → "VR" */
function getInitials(name: string): string {
  return name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 1. DeptBreadcrumb                                                        */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptBreadcrumbProps {
  deptTitle: string;
  deptSlug: string;
}

export function DeptBreadcrumb({ deptTitle }: DeptBreadcrumbProps) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.breadcrumbInner}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSep}>&rsaquo;</span>
        <Link href="/departments" className={styles.breadcrumbLink}>
          Departments
        </Link>
        <span className={styles.breadcrumbSep}>&rsaquo;</span>
        {deptTitle}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 2. DeptHodMessage                                                        */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptHodMessageProps {
  hod: Department['hod'];
}

export function DeptHodMessage({ hod }: DeptHodMessageProps) {
  const initials = getInitials(hod.name);

  return (
    <div className={styles.hod}>
      <div className={styles.hodPhoto}>
        {hod.image ? (
          <img
            src={hod.image}
            alt={hod.name}
            className={styles.hodPhotoImg}
          />
        ) : (
          initials
        )}
      </div>
      <div>
        <div className={styles.hodLabel}>
          Message from the Head of Department
        </div>
        <h3 className={styles.hodName}>{hod.name}</h3>
        <div className={styles.hodTitle}>
          {hod.credentials} &bull; {hod.designation}
        </div>
        <div className={styles.hodMessage}>
          <span className={styles.hodQuote}>{'\u201C'}</span>
          {hod.message}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 3. DeptLegacy                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptLegacyProps {
  legacy: string[];
}

export function DeptLegacy({ legacy }: DeptLegacyProps) {
  return (
    <div className={styles.legacyTimeline}>
      {legacy.map((entry, i) => {
        const colonIdx = entry.indexOf(':');
        const hasYear = colonIdx > -1;
        const year = hasYear ? entry.slice(0, colonIdx).trim() : undefined;
        const text = hasYear ? entry.slice(colonIdx + 1).trim() : entry;

        return (
          <div key={i} className={styles.tlItem}>
            {year && <div className={styles.tlYear}>{year}</div>}
            <div className={styles.tlText}>{text}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 4. DeptAchievements                                                      */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptAchievementsProps {
  achievements: string[];
}

export function DeptAchievements({ achievements }: DeptAchievementsProps) {
  return (
    <ul className={styles.achievementsList}>
      {achievements.map((item, i) => (
        <li key={i} className={styles.achievementItem}>
          <span className={styles.achievementEmoji} aria-hidden="true">
            🏆
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 5. DeptExperts                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptExpertsProps {
  experts: DepartmentExpert[];
}

function ExpertCardContent({ expert }: { expert: DepartmentExpert }) {
  const initials = getInitials(expert.name);
  return (
    <>
      <div className={styles.expertAvatar}>{initials}</div>
      <h4 className={styles.expertName}>{expert.name}</h4>
      <p className={styles.expertDesignation}>{expert.designation}</p>
    </>
  );
}

export function DeptExperts({ experts }: DeptExpertsProps) {
  return (
    <div className={styles.expertsGrid}>
      {experts.map((expert, i) =>
        expert.slug ? (
          <Link
            key={i}
            href={`/doctors/${expert.slug}`}
            className={styles.expertCard}
          >
            <ExpertCardContent expert={expert} />
          </Link>
        ) : (
          <div key={i} className={styles.expertCard}>
            <ExpertCardContent expert={expert} />
          </div>
        ),
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 6. DeptCtaStrip                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptCtaStripProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  bgColor?: string;
}

export function DeptCtaStrip({
  title,
  subtitle,
  buttonText,
  buttonHref,
  bgColor,
}: DeptCtaStripProps) {
  return (
    <div
      className={styles.cta}
      style={{ background: bgColor ?? 'var(--color-primary)' }}
    >
      <div className={styles.ctaInner}>
        <div>
          <h3 className={styles.ctaTitle}>{title}</h3>
          <p className={styles.ctaSubtitle}>{subtitle}</p>
        </div>
        <Link href={buttonHref} className={styles.ctaBtn}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* 7. DeptSection (wrapper)                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

export interface DeptSectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function DeptSection({ label, title, children, id }: DeptSectionProps) {
  return (
    <div className={styles.section} id={id}>
      <div className={styles.sectionLabel}>{label}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}
