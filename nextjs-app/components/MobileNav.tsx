'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>('a,button,[tabindex="0"]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-nav" style={{ display: 'block' }} role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="mobile-nav-overlay" onClick={onClose}></div>
      <div className="mobile-nav-drawer" ref={drawerRef}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button 
            className="mobile-search-trigger" 
            onClick={onOpenSearch}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-tertiary)', border: 'none', padding: '8px 16px', borderRadius: '100px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            Search
          </button>
          <button className="mobile-nav-close" aria-label="Close navigation menu" onClick={onClose} style={{ fontSize: '28px', border: 'none', background: 'none', cursor: 'pointer', padding: '0 8px' }}>&times;</button>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/coming-soon" onClick={onClose}>About</Link>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', borderLeft: '2px solid var(--color-tertiary)' }}>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Vision &amp; Mission</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Legacy (reverse chronology)</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Future Vision (Laya)</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Leadership</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Achievements</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Annual Reports</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Collaborations</Link></li>
              </ul>
            </li>
            <li><Link href="/coming-soon" onClick={onClose}>Resources</Link></li>
            <li><Link href="/blood-bank" onClick={onClose}>Blood Bank</Link></li>
            <li>
              <Link href="/coming-soon" onClick={onClose}>News &amp; Events</Link>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', borderLeft: '2px solid var(--color-tertiary)' }}>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Upcoming Events</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Conferences</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Awareness Campaigns</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Institutional News</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/coming-soon" onClick={onClose}>Support Groups</Link>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', borderLeft: '2px solid var(--color-tertiary)' }}>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Breast Cancer Support</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Pediatric Oncology Support</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Caregiver Support</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Survivorship Program</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Grief &amp; Bereavement</Link></li>
                <li><Link href="/coming-soon" style={{ fontSize: '15px', padding: '10px 0' }} onClick={onClose}>Patient Navigation</Link></li>
              </ul>
            </li>
            <li><Link href="/coming-soon" onClick={onClose}>Careers</Link></li>
            <li><Link href="/#contact" onClick={onClose}>Contact</Link></li>
          </ul>
        </nav>
        <Link href="/#appointment" className="btn btn-primary" onClick={onClose}>Book Appointment</Link>
        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #F7F7F9' }}>
          <a href="tel:+914424910754" style={{ fontFamily: "'PT Sans Narrow',sans-serif", fontWeight: 700, fontSize: '15px', color: '#134795', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            044-2491 0754
          </a>
          <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: '#0A8C82' }} aria-label="Follow us on Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="#" style={{ color: '#0A8C82' }} aria-label="Follow us on X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" style={{ color: '#0A8C82' }} aria-label="Subscribe on YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
