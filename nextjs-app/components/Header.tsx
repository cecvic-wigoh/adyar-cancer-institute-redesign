'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">
          <Link href="/" className="site-logo" aria-label="Cancer Institute (WIA) — Home">
            <Image src="/logo/Blue Horizontal_Logo-001.png" alt="Cancer Institute (WIA)™ — With Humanity and In Wisdom" width={400} height={65} priority />
          </Link>

          <nav className="primary-nav" aria-label="Primary navigation">
            <ul>
              <li className="has-dropdown">
                <Link href="/coming-soon">
                  About
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon">Vision &amp; Mission</Link></li>
                  <li><Link href="/coming-soon">Legacy (reverse chronology)</Link></li>
                  <li><Link href="/coming-soon">Future Vision (Laya)</Link></li>
                  <li><Link href="/coming-soon">Leadership</Link></li>
                  <li><Link href="/coming-soon">Achievements</Link></li>
                  <li><Link href="/coming-soon">Annual Reports</Link></li>
                  <li><Link href="/coming-soon">Collaborations</Link></li>
                </ul>
              </li>
              <li><Link href="/blood-bank">Blood Center</Link></li>
              <li><Link href="/coming-soon">DIRECTORY OF SERVICES</Link></li>
              <li className="has-dropdown">
                <Link href="/coming-soon">
                  News &amp; Events
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon">Upcoming Events</Link></li>
                  <li><Link href="/coming-soon">Conferences</Link></li>
                  <li><Link href="/coming-soon">Awareness Campaigns</Link></li>
                  <li><Link href="/coming-soon">Institutional News</Link></li>
                </ul>
              </li>
              <li><Link href="/coming-soon">Careers</Link></li>
              <li><Link href="/coming-soon">VOLUNTEERS</Link></li>
              <li><Link href="/coming-soon">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="Open search" onClick={() => setSearchOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            </button>
            <Link href="/#appointment" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Book Appointment</Link>
            <div className="header-accreditations">
              <Image src="/logo/nabh-seeklogo.png" alt="NABH Accredited" width={48} height={48} />
              <Image src="/logo/NABL_Official_LOGO_Registered.png" alt="NABL Accredited" width={48} height={48} />
            </div>
            <button
              className="hamburger"
              aria-label="Open navigation menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(true)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
