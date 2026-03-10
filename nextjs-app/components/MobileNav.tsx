'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [patientsOpen, setPatientsOpen] = useState(false);
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
        <button className="mobile-nav-close" aria-label="Close navigation menu" onClick={onClose}>&times;</button>
        <nav>
          <ul>
            <li><Link href="/#about" onClick={onClose}>About Us</Link></li>
            <li className="mobile-accordion">
              <button
                className="mobile-accordion-toggle"
                aria-expanded={patientsOpen}
                onClick={() => setPatientsOpen(!patientsOpen)}
              >
                For Patients
                <svg className="mobile-accordion-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: patientsOpen ? 'rotate(180deg)' : 'none' }}><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="mobile-accordion-panel" style={{ maxHeight: patientsOpen ? '600px' : '0' }}>
                <p className="mobile-sub-heading">Cancer Types</p>
                <ul className="mobile-sub-list">
                  <li><Link href="/cancer/breast-cancer" onClick={onClose}>Breast Cancer</Link></li>
                  <li><Link href="/cancer/cervical-cancer" onClick={onClose}>Cervical Cancer</Link></li>
                  <li><Link href="/cancer/lung-cancer" onClick={onClose}>Lung Cancer</Link></li>
                  <li><Link href="/cancer/colorectal-cancer" onClick={onClose}>Colorectal Cancer</Link></li>
                  <li><Link href="/cancer/blood-cancer" onClick={onClose}>Blood Cancer</Link></li>
                  <li><Link href="/cancer/head-neck-cancer" onClick={onClose}>Head &amp; Neck Cancer</Link></li>
                  <li><Link href="/cancer/prostate-cancer" onClick={onClose}>Prostate Cancer</Link></li>
                  <li><Link href="/cancer/thyroid-cancer" onClick={onClose}>Thyroid Cancer</Link></li>
                </ul>
                <p className="mobile-sub-heading">Departments</p>
                <ul className="mobile-sub-list">
                  <li><Link href="/departments/surgical-oncology" onClick={onClose}>Surgical Oncology</Link></li>
                  <li><Link href="/departments/medical-oncology" onClick={onClose}>Medical Oncology</Link></li>
                  <li><Link href="/departments/radiation-oncology" onClick={onClose}>Radiation Oncology</Link></li>
                  <li><Link href="/departments/paediatric-oncology" onClick={onClose}>Paediatric Oncology</Link></li>
                  <li><Link href="/departments/haematology" onClick={onClose}>Haematology</Link></li>
                  <li><Link href="/departments/gynaecological-oncology" onClick={onClose}>Gynaecological Oncology</Link></li>
                </ul>
              </div>
            </li>
            <li><Link href="/#doctors" onClick={onClose}>Find a Doctor</Link></li>
            <li><Link href="/#research" onClick={onClose}>Research &amp; Education</Link></li>
            <li><Link href="/#events" onClick={onClose}>Events</Link></li>
            <li><Link href="/#donate" onClick={onClose}>Donate</Link></li>
            <li><Link href="/#contact" onClick={onClose}>Contact</Link></li>
          </ul>
        </nav>
        <Link href="/#appointment" className="btn btn-primary" onClick={onClose}>Book Appointment</Link>
        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #F7F7F9' }}>
          <a href="tel:+914424910754" style={{ fontFamily: "'PT Sans Narrow',sans-serif", fontWeight: 700, fontSize: '15px', color: '#134795', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            044-2491 0754
          </a>
        </div>
      </div>
    </div>
  );
}
