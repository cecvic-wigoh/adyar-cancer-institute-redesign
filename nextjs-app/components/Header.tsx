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
              <li><Link href="/#about">About Us</Link></li>
              <li className="nav-dropdown-parent">
                <Link href="/#cancer-types" className="nav-dropdown-trigger">
                  For Patients
                  <svg className="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </Link>
                <div className="mega-dropdown" aria-label="For Patients submenu">
                  <div className="mega-dropdown-inner">
                    <div className="mega-col">
                      <h6 className="mega-col-heading">Cancer Types</h6>
                      <ul>
                        <li><Link href="/cancer/breast-cancer">Breast Cancer</Link></li>
                        <li><Link href="/cancer/cervical-cancer">Cervical Cancer</Link></li>
                        <li><Link href="/cancer/lung-cancer">Lung Cancer</Link></li>
                        <li><Link href="/cancer/colorectal-cancer">Colorectal Cancer</Link></li>
                        <li><Link href="/cancer/blood-cancer">Blood Cancer</Link></li>
                        <li><Link href="/cancer/head-neck-cancer">Head &amp; Neck Cancer</Link></li>
                        <li><Link href="/cancer/prostate-cancer">Prostate Cancer</Link></li>
                        <li><Link href="/cancer/thyroid-cancer">Thyroid Cancer</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h6 className="mega-col-heading">Departments</h6>
                      <ul>
                        <li><Link href="/departments/surgical-oncology">Surgical Oncology</Link></li>
                        <li><Link href="/departments/medical-oncology">Medical Oncology</Link></li>
                        <li><Link href="/departments/radiation-oncology">Radiation Oncology</Link></li>
                        <li><Link href="/departments/paediatric-oncology">Paediatric Oncology</Link></li>
                        <li><Link href="/departments/haematology">Haematology</Link></li>
                        <li><Link href="/departments/gynaecological-oncology">Gynaecological Oncology</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h6 className="mega-col-heading">Quick Links</h6>
                      <ul>
                        <li><Link href="/#doctors">Find a Doctor</Link></li>
                        <li><Link href="/#appointment">Book Appointment</Link></li>
                        <li><Link href="/#education">Patient Education</Link></li>
                        <li><Link href="/#faq">FAQs</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li><Link href="/#doctors">Find a Doctor</Link></li>
              <li><Link href="/#research">Research</Link></li>
              <li><Link href="/#donate">Donate</Link></li>
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
