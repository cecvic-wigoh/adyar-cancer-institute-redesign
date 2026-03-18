'use client';

import { useState, useEffect } from 'react';
import styles from './DepartmentSidebar.module.css';

interface SidebarSection {
  id: string;
  label: string;
}

const sectionIcons: Record<string, React.ReactNode> = {
  hero: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path className={styles.qi} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline className={styles.qi} points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <circle className={styles.qi} cx="12" cy="12" r="10"/>
      <line className={styles.qi} x1="12" y1="8" x2="12" y2="12"/>
      <circle className={styles.qi} cx="12" cy="16" r=".5" fill="currentColor"/>
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path className={styles.qi} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle className={styles.qi} cx="9" cy="7" r="4"/>
      <path className={styles.qi} d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path className={styles.qi} d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  conditions: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path className={styles.qi} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  facilities: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <rect className={styles.qi} x="2" y="7" width="20" height="14" rx="2"/>
      <path className={styles.qi} d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  legacy: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path className={styles.qi} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  'hod-message': (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path className={styles.qi} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  gallery: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <rect className={styles.qi} x="3" y="3" width="18" height="18" rx="2"/>
      <circle className={styles.qi} cx="8.5" cy="8.5" r="1.5"/>
      <polyline className={styles.qi} points="21 15 16 10 5 21"/>
    </svg>
  ),
  faq: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <circle className={styles.qi} cx="12" cy="12" r="10"/>
      <path className={styles.qi} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <circle className={styles.qi} cx="12" cy="17" r=".5" fill="currentColor"/>
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <rect className={styles.qi} x="3" y="4" width="18" height="18" rx="2"/>
      <line className={styles.qi} x1="16" y1="2" x2="16" y2="6"/>
      <line className={styles.qi} x1="8" y1="2" x2="8" y2="6"/>
      <line className={styles.qi} x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
};

const defaultIcon = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
    <circle className={styles.qi} cx="12" cy="12" r="10"/>
  </svg>
);

export default function DepartmentSidebar({ sections }: { sections: SidebarSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const sectionMap: Record<string, string> = {};
    sections.forEach(({ id }) => { sectionMap[id] = id; });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className={styles.sidebar} aria-label="Quick navigation">
      {sections.map(({ id, label }) => (
        <div key={id} className={`${styles.qlItem} ${activeId === id ? styles.active : ''}`}>
          <a href={`#${id}`} className={styles.qlLabel}>{label}</a>
          <a href={`#${id}`} className={styles.qlBtn} title={label}>
            {sectionIcons[id] || defaultIcon}
          </a>
        </div>
      ))}
      <div className={styles.qlDivider} />
      <div className={`${styles.qlItem} ${styles.qlOther}`}>
        <a href="/#departments" className={styles.qlLabel}>Other Departments</a>
        <a href="/#departments" className={styles.qlBtn} title="Other Departments">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
            <rect className={styles.qi} x="3" y="3" width="7" height="7" rx="1"/>
            <rect className={styles.qi} x="14" y="3" width="7" height="7" rx="1"/>
            <rect className={styles.qi} x="3" y="14" width="7" height="7" rx="1"/>
            <rect className={styles.qi} x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </a>
      </div>
    </aside>
  );
}
