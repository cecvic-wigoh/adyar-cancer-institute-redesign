'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StickyDoctorBar.module.css';

interface Section {
  id: string;
  label: string;
}

interface StickyDoctorBarProps {
  doctorName: string;
  sections: Section[];
}

export default function StickyDoctorBar({ doctorName, sections }: StickyDoctorBarProps) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const barRef = useRef<HTMLDivElement>(null);

  // Show/hide based on hero visibility
  useEffect(() => {
    const hero = document.getElementById('doctor-hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
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
    <div
      ref={barRef}
      className={`${styles.bar} ${visible ? styles.barVisible : ''}`}
      role="navigation"
      aria-label="Doctor profile navigation"
    >
      <div className={styles.barInner}>
        <span className={styles.barName}>{doctorName}</span>

        <nav className={styles.barNav}>
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`${styles.barNavItem} ${activeSection === s.id ? styles.barNavActive : ''}`}
              onClick={() => handleClick(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <a href="/#appointment" className={styles.barCta}>
          Book Appointment
        </a>
      </div>
    </div>
  );
}
