'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './SideQuickMenu.module.css';

interface QuickMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  variant: string;
  action?: 'search' | 'emergency';
}

const menuItems: QuickMenuItem[] = [
  {
    label: 'Emergency',
    href: '#',
    variant: 'itemEmergency',
    action: 'emergency',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        <path d="M32 12 L32 52 M12 32 L52 32" stroke="#E74C3C" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Book Appointment',
    href: '/appointment',
    variant: 'itemBlue',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        <circle cx="32" cy="16" r="11" fill="#2980B9" />
        <circle cx="32" cy="15" r="8" fill="#FFDBB4" />
        <rect x="26" y="7" width="12" height="5" rx="2" fill="#fff" />
        <circle cx="32" cy="7" r="3.5" fill="#E74C3C" />
        <ellipse cx="29" cy="16" rx="1.5" ry="1.2" fill="#2C3E50" />
        <ellipse cx="35" cy="16" rx="1.5" ry="1.2" fill="#2C3E50" />
        <path d="M30 20 Q32 22.5 34 20" stroke="#C0392B" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <rect x="22" y="26" width="20" height="22" rx="5" fill="#3498DB" />
        <rect x="29" y="28" width="6" height="6" rx="1.5" fill="#fff" />
        <circle cx="49" cy="18" r="5" fill="#FFDBB4" />
        <rect x="43" y="24" width="5" height="10" rx="2.5" fill="#FFDBB4" transform="rotate(-20 45 28)" />
        <rect x="46" y="12" width="2.5" height="6" rx="1.2" fill="#FFDBB4" transform="rotate(-5 47 15)" />
        <rect x="49" y="12" width="2.5" height="7" rx="1.2" fill="#FFDBB4" transform="rotate(5 50 15)" />
        <rect x="52" y="13" width="2.5" height="5.5" rx="1.2" fill="#FFDBB4" transform="rotate(10 53 16)" />
      </svg>
    ),
  },
  {
    label: 'Blood Centre',
    href: '/blood-bank',
    variant: 'itemRed',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        {/* Blood drop */}
        <path d="M32 8 C32 8 14 30 14 40 C14 50.5 22 58 32 58 C42 58 50 50.5 50 40 C50 30 32 8 32 8Z" fill="#E74C3C" />
        <path d="M32 12 C32 12 18 31 18 40 C18 48.3 24.3 55 32 55 C32 55 22 48 22 40 C22 32 32 12 32 12Z" fill="#C0392B" opacity="0.5" />
        <ellipse cx="38" cy="36" rx="4" ry="5" fill="#fff" opacity="0.3" />
        {/* Plus sign */}
        <rect x="28" y="38" width="8" height="14" rx="2" fill="#fff" />
        <rect x="25" y="42" width="14" height="6" rx="2" fill="#fff" />
      </svg>
    ),
  },
  {
    label: 'Health Services',
    href: '/departments/medical-oncology',
    variant: 'itemGreen',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        <path d="M32 4 L54 14 V32 C54 46 32 60 32 60 C32 60 10 46 10 32 V14 Z" fill="#C8E6C9" stroke="#2E7D32" strokeWidth="2" />
        <path d="M32 10 L50 18 V31 C50 43 32 55 32 55 C32 55 14 43 14 31 V18 Z" fill="#fff" />
        <rect x="28" y="20" width="8" height="22" rx="3" fill="#2E7D32" />
        <rect x="21" y="27" width="22" height="8" rx="3" fill="#2E7D32" />
      </svg>
    ),
  },
  {
    label: 'Find a Doctor',
    href: '/doctors',
    variant: 'itemPurple',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        <path d="M18 14 C18 14 14 30 14 38 C14 46 20 50 28 50" stroke="#6C3483" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M38 14 C38 14 42 30 42 38 C42 46 36 50 28 50" stroke="#6C3483" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="12" r="4" fill="#8E44AD" />
        <circle cx="18" cy="12" r="2" fill="#D2B4DE" />
        <circle cx="38" cy="12" r="4" fill="#8E44AD" />
        <circle cx="38" cy="12" r="2" fill="#D2B4DE" />
        <circle cx="28" cy="54" r="6" fill="#8E44AD" stroke="#6C3483" strokeWidth="2" />
        <circle cx="28" cy="54" r="2.5" fill="#F3E5F5" />
      </svg>
    ),
  },
  {
    label: 'Search',
    href: '#',
    variant: 'itemOrange',
    action: 'search',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.iconSvg}>
        <circle cx="27" cy="27" r="15" fill="none" stroke="#fff" strokeWidth="5" />
        <line x1="38" y1="38" x2="52" y2="52" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const variantMap: Record<string, string> = {
  itemEmergency: styles.itemEmergency,
  itemBlue: styles.itemBlue,
  itemRed: styles.itemRed,
  itemTeal: styles.itemTeal,
  itemGreen: styles.itemGreen,
  itemPurple: styles.itemPurple,
  itemOrange: styles.itemOrange,
};

export default function SideQuickMenu() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <nav className={styles.menu} aria-label="Quick actions">
        {menuItems.map((item) => (
          <div key={item.label} className={`${styles.item} ${variantMap[item.variant] || ''}`}>
            {item.action ? (
              <button
                className={styles.iconCircle}
                onClick={() => {
                  if (item.action === 'search') setSearchOpen(true);
                  if (item.action === 'emergency') setEmergencyOpen(true);
                }}
                aria-label={`Open ${item.label}`}
                type="button"
              >
                {item.icon}
              </button>
            ) : (
              <Link href={item.href} className={styles.iconCircle}>
                {item.icon}
              </Link>
            )}
            <div className={styles.expandedPill}>
              <span className={styles.pillLabel}>{item.label}</span>
              {item.action ? (
                <button
                  className={styles.pillArrow}
                  onClick={() => {
                    if (item.action === 'search') setSearchOpen(true);
                    if (item.action === 'emergency') setEmergencyOpen(true);
                  }}
                  aria-label={item.label}
                  type="button"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" />
                  </svg>
                </button>
              ) : (
                <Link href={item.href} className={styles.pillArrow} aria-label={item.label}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </nav>

      {/* Universal Search Overlay */}
      {searchOpen && (
        <div className={styles.searchOverlay} onClick={() => setSearchOpen(false)}>
          <div className={styles.searchModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.searchHeader}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search doctors, departments, conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className={styles.searchClose} onClick={() => { setSearchOpen(false); setSearchQuery(''); }} type="button" aria-label="Close search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={styles.searchSuggestions}>
              <div className={styles.searchCategory}>Quick Links</div>
              <a href="/doctors" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>👨‍⚕️</span> Find a Doctor
              </a>
              <a href="/blood-bank" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>🩸</span> Blood Centre
              </a>
              <a href="/departments/surgical-oncology" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>🏥</span> Surgical Oncology
              </a>
              <a href="/departments/medical-oncology" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>💊</span> Medical Oncology
              </a>
              <a href="/departments/radiology" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>📡</span> Radiology
              </a>
              <div className={styles.searchCategory}>Conditions</div>
              <a href="/cancer/breast-cancer" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>🎗️</span> Breast Cancer
              </a>
              <a href="/cancer/lung-cancer" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>🫁</span> Lung Cancer
              </a>
              <a href="/cancer/blood-cancer" className={styles.searchSuggestion} onClick={() => setSearchOpen(false)}>
                <span className={styles.suggestIcon}>🔬</span> Blood Cancer
              </a>
            </div>
            <div className={styles.searchFooter}>
              Press <kbd className={styles.kbd}>Esc</kbd> to close
            </div>
          </div>
        </div>
      )}

      {/* Emergency Contact Overlay */}
      {emergencyOpen && (
        <div className={styles.searchOverlay} onClick={() => setEmergencyOpen(false)}>
          <div className={styles.searchModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.searchHeader}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" className={styles.searchIcon}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <h2 className={styles.emergencyHeaderTitle}>Oncology Emergencies</h2>
              <button className={styles.searchClose} onClick={() => setEmergencyOpen(false)} type="button" aria-label="Close emergency modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={styles.emergencyBody}>
              <div className={styles.emergencyGrid}>
                <div className={styles.emergencyCard}>
                  <div className={styles.emergencyCardIcon}>👶</div>
                  <div className={styles.emergencyCardContent}>
                    <h3>Pediatric Oncology</h3>
                    <p className={styles.emergencyPhone}>98765 43210</p>
                    <span className={styles.emergencySubtext}>24/7 Specialized Care</span>
                  </div>
                  <a href="tel:9876543210" className={styles.callBtn}>Call Now</a>
                </div>
                <div className={styles.emergencyCard}>
                  <div className={styles.emergencyCardIcon}>🧑</div>
                  <div className={styles.emergencyCardContent}>
                    <h3>Adult Oncology</h3>
                    <p className={styles.emergencyPhone}>12345 67890</p>
                    <span className={styles.emergencySubtext}>24/7 Cancer Emergency Care</span>
                  </div>
                  <a href="tel:1234567890" className={styles.callBtn}>Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
