import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Diagnostics Hub | Cancer Institute (WIA)',
  description:
    'Comprehensive diagnostic services including Radiology, Oncopathology, Microbiology, and Clinical Biochemistry at Cancer Institute (WIA).',
};

// Reusing SVG icons for consistency
function DiagnosticsIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="24" width="10" height="12" rx="3" fill="#4bb3f1" />
      <rect x="20" y="18" width="10" height="18" rx="3" fill="#f05b66" />
      <rect x="32" y="14" width="8" height="22" rx="3" fill="#9acaf2" />
      <path d="M6 38h36" stroke="#1f5ca8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

export default function DiagnosticsHubPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={`container ${styles.shell}`}>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection} aria-labelledby="diagnostics-heading">
          <div className={styles.heroBanner} style={{ minHeight: '380px', gridTemplateColumns: 'minmax(0, 1fr)' }}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Cancer Institute (WIA)</p>
              <h1 id="diagnostics-heading">
                Diagnostics Hub
                <span>Precision in Every Test</span>
              </h1>
              <p className={styles.heroLead}>
                Our state-of-the-art diagnostic facilities form the backbone of evidence-based oncology. From advanced molecular profiling to high-resolution imaging, we ensure accurate, rapid, and compassionate care.
              </p>
              <div className={styles.heroActions}>
                <Link href="/directory-of-services" className={`${styles.actionButton} ${styles.primaryAction}`}>
                  Search Directory of Services
                </Link>
                <Link href="/#appointment" className={`${styles.actionButton} ${styles.ghostAction}`}>
                  Patient Instructions
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.quickAccessGrid}>
            <Link href="/directory-of-services" className={`${styles.quickAccessCard} ${styles.quickAccessCardActive}`}>
              <span className={styles.quickAccessIcon} style={{ background: '#f0f5fc', borderRadius: '50%', padding: '12px' }}>
                <SearchIcon />
              </span>
              <span className={styles.quickAccessTitle}>Directory of Services (DOS)</span>
              <span className={styles.quickAccessSubtitle}>Search our comprehensive A-Z test catalog and requirements</span>
            </Link>
            <Link href="/departments/radiodiagnosis" className={styles.quickAccessCard}>
              <span className={styles.quickAccessIcon}><DiagnosticsIcon /></span>
              <span className={styles.quickAccessTitle}>Radio Diagnosis</span>
              <span className={styles.quickAccessSubtitle}>Advanced imaging, MRI, CT, and Ultrasound</span>
            </Link>
            <Link href="/departments/oncopathology" className={styles.quickAccessCard}>
              <span className={styles.quickAccessIcon}><DiagnosticsIcon /></span>
              <span className={styles.quickAccessTitle}>Oncopathology</span>
              <span className={styles.quickAccessSubtitle}>Histopathology, Cytology, and Molecular pathways</span>
            </Link>
            <Link href="/departments/nuclear-medicine-and-theranostics" className={styles.quickAccessCard}>
              <span className={styles.quickAccessIcon}><DiagnosticsIcon /></span>
              <span className={styles.quickAccessTitle}>Nuclear Medicine</span>
              <span className={styles.quickAccessSubtitle}>PET-CT and targeted radionuclide therapy</span>
            </Link>
            <Link href="/departments/microbiology" className={styles.quickAccessCard}>
              <span className={styles.quickAccessIcon}><DiagnosticsIcon /></span>
              <span className={styles.quickAccessTitle}>Microbiology</span>
              <span className={styles.quickAccessSubtitle}>Infection control and specialized cultures</span>
            </Link>
          </div>
        </section>

        {/* DOS CALLOUT */}
        <section className={styles.featureSection} style={{ marginTop: '24px' }}>
          <div className={styles.featureCard} style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
            <div className={styles.featureCopy}>
              <h2 style={{ color: '#143768' }}>Directory of Services (DOS)</h2>
              <p className={styles.featureLead}>
                For the convenience of our patients and referring physicians, we maintain a fully digital <strong>Directory of Services</strong>. Here you can find detailed information on turnaround times, specimen requirements, methodologies, and accreditation status for every test performed in our in-house laboratories.
              </p>
              <div className={styles.featureActions} style={{ marginTop: '16px' }}>
                <Link href="/directory-of-services" className={`${styles.actionButton} ${styles.secondaryAction}`}>
                  Access the DOS Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
