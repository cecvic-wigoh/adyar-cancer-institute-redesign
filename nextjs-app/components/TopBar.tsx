export default function TopBar() {
  return (
    <div className="top-bar" role="complementary" aria-label="Site information">
      <div className="container">
        <div className="top-bar-left">
          <a href="tel:+914424910754">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            044-2491 0754
          </a>
          <a href="mailto:info@cancerinstitutewia.org">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
            info@cancerinstitutewia.org
          </a>
        </div>
        <div className="top-bar-right">
          <button className="lang-btn active" data-lang="en" aria-label="Switch to English">English</button>
          <button className="lang-btn" data-lang="ta" aria-label="Switch to Tamil">தமிழ்</button>
        </div>
      </div>
    </div>
  );
}
