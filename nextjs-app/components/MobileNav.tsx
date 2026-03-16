'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
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
            <li><Link href="/#about" onClick={onClose}>About</Link></li>
            <li><Link href="/#academics" onClick={onClose}>Academics</Link></li>
            <li><Link href="/blood-bank" onClick={onClose}>Blood Bank</Link></li>
            <li><Link href="/#news" onClick={onClose}>News &amp; Updates</Link></li>
            <li><Link href="/#careers" onClick={onClose}>Careers</Link></li>
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
