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
