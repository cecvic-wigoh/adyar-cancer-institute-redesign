import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo/White-Horizontal Logo-004.png" alt="Cancer Institute (WIA)™" className="footer-logo" width={240} height={39} />
            <p>With Humanity and In Wisdom — pioneering comprehensive cancer care in India since 1954.</p>
            <div className="footer-social" aria-label="Social media links">
              <a href="#" className="social-link" aria-label="Follow us on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Subscribe on YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/#about">About CI(WIA)</Link></li>
              <li><Link href="/#cancer-types">For Patients</Link></li>
              <li><Link href="/#doctors">Find a Doctor</Link></li>
              <li><Link href="/coming-soon">Research &amp; Education</Link></li>
              <li><Link href="/coming-soon">Events &amp; Camps</Link></li>
              <li><Link href="/#donate">Donate</Link></li>
              <li><Link href="/blood-bank">Blood Bank</Link></li>
              <li><Link href="/coming-soon">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Cancer Care</h5>
            <ul>
              <li><Link href="/cancer/breast-cancer">Breast Cancer</Link></li>
              <li><Link href="/cancer/cervical-cancer">Cervical Cancer</Link></li>
              <li><Link href="/cancer/lung-cancer">Lung Cancer</Link></li>
              <li><Link href="/cancer/colorectal-cancer">Colorectal Cancer</Link></li>
              <li><Link href="/cancer/blood-cancer">Blood Cancer</Link></li>
              <li><Link href="/cancer/head-neck-cancer">Head &amp; Neck</Link></li>
              <li><Link href="/cancer/prostate-cancer">Prostate Cancer</Link></li>
              <li><Link href="/cancer/thyroid-cancer">Thyroid Cancer</Link></li>
            </ul>
          </div>
          <div className="footer-col" id="contact-info">
            <h5>Contact Us</h5>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Main Campus:</strong><br/>
                East Canal Bank Road, Adyar, Chennai &ndash; 600 020<br />
                <a href="https://www.google.com/maps/search/?api=1&query=Cancer+Institute+(WIA)+Adyar+Chennai" target="_blank" rel="noopener noreferrer" className="footer-map-link">Get Directions</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Sardar Patel Road Campus:</strong><br/>
                38, Sardar Patel Rd, Nehru Nagar, Adyar, Chennai &ndash; 600 036<br />
                <a href="https://www.google.com/maps/search/?api=1&query=38,+Sardar+Patel+Rd,+Nehru+Nagar,+Adyar,+Chennai,+Tamil+Nadu+600036" target="_blank" rel="noopener noreferrer" className="footer-map-link">Get Directions</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <div>
                <a href="tel:+914424910754">044-2491 0754</a> (General)<br />
                <a href="tel:+914422209150" style={{ color: '#ff4d4d', fontWeight: '700' }}>044-2220 9150</a> (Emergency)
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              <a href="mailto:info@cancerinstitutewia.org">info@cancerinstitutewia.org</a>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>OPD: Mon&ndash;Sat, 8:00 am &ndash; 5:00 pm<br/>Emergency: 24 / 7</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">&copy; 2025 Cancer Institute (WIA). All Rights Reserved.</p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
