'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './HomeQuickLinks.module.css';

const quickLinks = [
  {
    label: 'Book Appointment',
    href: '#appointment',
    icon: <CalendarIcon />,
  },
  {
    label: 'Find a Doctor',
    href: '#doctors',
    icon: <DoctorIcon />,
  },
  {
    label: 'Blood Centre',
    href: '/blood-bank',
    icon: <BloodDropIcon />,
  },
  {
    label: 'Research',
    href: 'https://ci-wia-research-pages.vercel.app/research',
    icon: <ResearchIcon />,
    external: true,
  },
];

export default function HomeQuickLinks() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={styles.root} aria-label="Quick links">
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="home-quick-links-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.toggleCopy}>
          <span className={styles.toggleEyebrow}>Need help?</span>
          <span className={styles.toggleLabel}>Quick Links</span>
        </span>
        <svg
          className={`${styles.chevron}${open ? ` ${styles.chevronOpen}` : ''}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div
        id="home-quick-links-panel"
        className={`${styles.panel}${open ? ` ${styles.panelOpen}` : ` ${styles.panelClosed}`}`}
      >
        <div className={styles.header}>Quick Links</div>
        <div className={styles.list}>
          {quickLinks.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} className={styles.linkCard}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={styles.linkCard}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            ),
          )}
        </div>
      </div>
    </aside>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 3.5v4M16.5 3.5v4M3.5 9.5h17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 13.5h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19c1.8-4 4.1-5.7 6.5-5.7S16.7 15 18.5 19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.5 11.5h3M20 10v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BloodDropIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3 4.1 5.5 7.2 5.5 10.2A5.5 5.5 0 116.5 13.2C6.5 10.2 9 7.1 12 3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 13h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 10.5v5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6M10.5 3v7.2L7 17.8a1.8 1.8 0 001.6 2.7h6.8a1.8 1.8 0 001.6-2.7l-3.5-7.6V3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 13.5h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
