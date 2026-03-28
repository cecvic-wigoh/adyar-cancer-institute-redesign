'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
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
      <Image 
        src="/sidebar-icons/siren.png" 
        alt="" 
        width={32} 
        height={32} 
        className={styles.sidebarIconImg}
      />
    ),
  },
  {
    label: 'Book Appointment',
    href: '/appointment',
    variant: 'itemBlue',
    icon: (
      <Image 
        src="/sidebar-icons/agenda.png" 
        alt="" 
        width={32} 
        height={32} 
        className={styles.sidebarIconImg}
      />
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
    label: 'Directory of Services',
    href: '/directory-of-services',
    variant: 'itemGreen',
    icon: (
      <Image 
        src="/sidebar-icons/directoty-pf-services.png" 
        alt="" 
        width={32} 
        height={32} 
        className={styles.sidebarIconImg}
      />
    ),
  },
  {
    label: 'Find a Doctor',
    href: '/doctors',
    variant: 'itemPurple',
    icon: (
      <Image 
        src="/sidebar-icons/medical-team.png" 
        alt="" 
        width={32} 
        height={32} 
        className={styles.sidebarIconImg}
      />
    ),
  },
  {
    label: 'Search',
    href: '#',
    variant: 'itemOrange',
    action: 'search',
    icon: (
      <Image 
        src="/sidebar-icons/magnifying-glass.png" 
        alt="" 
        width={32} 
        height={32} 
        className={styles.sidebarIconImg}
      />
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
            <div className={styles.emergencyHeader}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.emergencyHeaderIcon}>
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#134795" />
                <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <h2 className={styles.emergencyHeaderTitle}>Emergency Helpline</h2>
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
                  <div className={styles.emergencyCardIcon}>
                    <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                      <circle cx="20" cy="12" r="6" fill="#23CDC0" />
                      <circle cx="13" cy="10" r="3.5" fill="#23CDC0" opacity="0.6" />
                      <circle cx="27" cy="10" r="3.5" fill="#23CDC0" opacity="0.6" />
                      <path d="M10 30c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#134795" />
                      <path d="M6 32c0-3.9 3.1-7 7-7" stroke="#134795" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M34 32c0-3.9-3.1-7-7-7" stroke="#134795" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <div className={styles.emergencyCardContent}>
                    <h3>Pediatric Emergency</h3>
                    <p className={styles.emergencyPhone}>98765 43210</p>
                    <span className={styles.emergencySubtext}>24/7 Children&apos;s Cancer Care</span>
                  </div>
                  <a href="tel:9876543210" className={styles.callBtn}>Call Now</a>
                </div>
                <div className={styles.emergencyCard}>
                  <div className={styles.emergencyCardIcon}>
                    <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                      <circle cx="20" cy="13" r="7" fill="#23CDC0" />
                      <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#134795" />
                      <rect x="16" y="20" width="8" height="3" rx="1.5" fill="#fff" />
                      <rect x="18.5" y="18" width="3" height="8" rx="1.5" fill="#fff" />
                    </svg>
                  </div>
                  <div className={styles.emergencyCardContent}>
                    <h3>Adult Emergency</h3>
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
