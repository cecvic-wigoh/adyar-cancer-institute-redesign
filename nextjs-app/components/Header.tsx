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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.has-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">
          <Link href="/" className="site-logo" aria-label="Cancer Institute (WIA) — Home">
            <Image src="/logo/Blue Horizontal_Logo-001.png" alt="Cancer Institute (WIA)™ — With Humanity and In Wisdom" width={400} height={65} priority />
          </Link>

          <nav className="primary-nav" aria-label="Primary navigation">
            <ul>
              <li className={`has-dropdown${activeDropdown === 'about' ? ' is-open' : ''}`}>
                <button 
                  className="nav-toggle"
                  onClick={(e) => toggleDropdown('about', e)}
                  aria-expanded={activeDropdown === 'about'}
                >
                  ABOUT
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Legacy</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Vision &amp; Mission</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Leadership Team</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Milestones</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Annual Reports</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Collaborations</Link></li>
                </ul>
              </li>
              <li className={`has-dropdown${activeDropdown === 'dos' ? ' is-open' : ''}`}>
                <button
                  className="nav-toggle"
                  onClick={(e) => toggleDropdown('dos', e)}
                  aria-expanded={activeDropdown === 'dos'}
                >
                  DIRECTORY OF SERVICES
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/directory-of-services" onClick={() => setActiveDropdown(null)}>Test Catalog</Link></li>
                  <li><Link href="/directory-of-services-v2" onClick={() => setActiveDropdown(null)}>DOS Table View</Link></li>
                </ul>
              </li>
              <li className={`has-dropdown${activeDropdown === 'news' ? ' is-open' : ''}`}>
                <button 
                  className="nav-toggle"
                  onClick={(e) => toggleDropdown('news', e)}
                  aria-expanded={activeDropdown === 'news'}
                >
                  NEWS &amp; EVENTS
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Upcoming Events</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Conferences</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Awareness Campaigns</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Institutional News</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Gallery</Link></li>
                </ul>
              </li>
              <li><Link href="/coming-soon">CAREERS</Link></li>
              <li className={`has-dropdown${activeDropdown === 'resources' ? ' is-open' : ''}`}>
                <button 
                  className="nav-toggle"
                  onClick={(e) => toggleDropdown('resources', e)}
                  aria-expanded={activeDropdown === 'resources'}
                >
                  RESOURCES
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Ways to Give</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Schemes</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Accommodation</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Forms</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Rehabilitation</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Hospice</Link></li>
                </ul>
              </li>
              <li className={`has-dropdown${activeDropdown === 'support' ? ' is-open' : ''}`}>
                <button 
                  className="nav-toggle"
                  onClick={(e) => toggleDropdown('support', e)}
                  aria-expanded={activeDropdown === 'support'}
                >
                  SUPPORT GROUPS
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <ul className="dropdown-menu">
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Breast Cancer Support</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Pediatric Oncology Support</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Caregiver Support</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Survivorship Program</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Grief &amp; Bereavement</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Patient Navigation</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Mahaveer Ashray (Hospice)</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Nutritional Counseling</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Psychological Support</Link></li>
                  <li><Link href="/coming-soon" onClick={() => setActiveDropdown(null)}>Financial Assistance</Link></li>
                </ul>
              </li>
              <li><Link href="/coming-soon">VOLUNTEERS</Link></li>
              <li><Link href="/coming-soon">CONTACT</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="Open search" onClick={() => setSearchOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            </button>
            <Link href="/#appointment" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Book Appointment</Link>
            <div className="header-accreditations">
              <Image src="/logo/nabh-seeklogo.png" alt="NABH Accredited" width={40} height={40} />
              <Image src="/logo/NABL_Official_LOGO_Registered.png" alt="NABL Accredited" width={40} height={40} />
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

      <MobileNav 
        isOpen={navOpen} 
        onClose={() => setNavOpen(false)} 
        onOpenSearch={() => { setNavOpen(false); setSearchOpen(true); }} 
      />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
