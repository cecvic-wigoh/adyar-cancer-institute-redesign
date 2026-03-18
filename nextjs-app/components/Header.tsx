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
            <Image src="/logo/Blue Horizontal_Logo-001.png" alt="Cancer Institute (WIA)™ — With Humanity and In Wisdom" width={300} height={49} priority />
          </Link>

          <nav className="primary-nav" aria-label="Primary navigation">
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#academics">Academics</Link></li>
              <li><Link href="/blood-bank">Blood Bank</Link></li>
              <li><Link href="/#news">News &amp; Updates</Link></li>
              <li><Link href="/#careers">Careers</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="Open search" onClick={() => setSearchOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
            <Link href="/#appointment" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Book Appointment</Link>
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
