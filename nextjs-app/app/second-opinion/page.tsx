import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Second Opinion | Cancer Institute (WIA)',
  description:
    'Request a second opinion from the multi-disciplinary expert oncology panels at Cancer Institute (WIA).',
};

// We reuse some icon SVGs from the blood bank layout for quick visual parity
function DoctorIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="16" r="9" fill="#8bc3ff" />
      <path d="M10 40c2-10 9-15 14-15s12 5 14 15" fill="#1f5ca8" />
      <path d="M20 24h8v8h-8z" fill="#ffffff" />
    </svg>
  );
}

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10.5l3.3 3.2L16 5.8" fill="none" stroke="#1a6b5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SecondOpinionPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={`container ${styles.shell}`}>
        <section className={styles.heroSection} aria-labelledby="second-opinion-heading">
          <div className={styles.heroBanner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Cancer Institute (WIA)</p>
              <h1 id="second-opinion-heading">
                Specialist Second Opinion
                <span>Confidence in Your Care Plan</span>
              </h1>
              <p className={styles.heroLead}>
                Our multidisciplinary tumor boards offer a comprehensive review of your diagnosis. We bring together medical, surgical, and radiation oncologists to ensure nothing is missed.
              </p>
              <div className={styles.heroActions}>
                <Link href="/#appointment" className={`${styles.actionButton} ${styles.primaryAction}`}>
                  Request Opinion
                </Link>
                <Link href="#diagnostics" className={`${styles.actionButton} ${styles.secondaryAction}`}>
                  Diagnostics Guidelines
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.quickAccessGrid}>
            <Link href="/#doctors" className={styles.quickAccessCard}>
              <span className={styles.quickAccessIcon}><DoctorIcon /></span>
              <span className={styles.quickAccessTitle}>Expert Panels</span>
              <span className={styles.quickAccessSubtitle}>Reviewed by a minimum of 3 senior oncology specialists</span>
            </Link>
            <Link href="#diagnostics" className={`${styles.quickAccessCard} ${styles.quickAccessCardActive}`}>
              <span className={styles.quickAccessIcon}><DiagnosticsIcon /></span>
              <span className={styles.quickAccessTitle}>Diagnostics Review</span>
              <span className={styles.quickAccessSubtitle}>In-house pathology and radiology reassessment</span>
            </Link>
          </div>
        </section>

        <section className={styles.featureSection} id="diagnostics" aria-labelledby="diagnostics-heading">
          <div className={styles.featureCard} style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
            <div className={styles.featureCopy}>
              <h2 id="diagnostics-heading" style={{ color: '#1a6b5a' }}>Diagnostics: What to Bring / What to Do</h2>
              <p className={styles.featureLead}>
                A complete cancer diagnosis relies on accurate pathology and imaging. Before arriving for your second opinion, please review these lab test &amp; diagnostic FAQs.
              </p>
              
              <div style={{ marginTop: '24px', display: 'grid', gap: '20px' }}>
                
                <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #1a6b5a' }}>
                  <h4 style={{ color: '#1a6b5a', fontSize: '1.1rem', marginBottom: '8px' }}>What original materials should I bring?</h4>
                  <ul className={styles.featureList}>
                    <li><CheckIcon /> <span><strong>Pathology Slides & Blocks:</strong> The actual glass biopsy slides and paraffin tissue blocks from your initial diagnosis.</span></li>
                    <li><CheckIcon /> <span><strong>Imaging CDs:</strong> Dicom format CDs/DVDs of your MRI, CT, or PET scans (not just the printed films or paper reports).</span></li>
                    <li><CheckIcon /> <span><strong>Blood Work:</strong> Any recent comprehensive metabolic panels or complete blood counts done in the last 30 days.</span></li>
                  </ul>
                </div>

                <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #1a6b5a' }}>
                  <h4 style={{ color: '#1a6b5a', fontSize: '1.1rem', marginBottom: '8px' }}>Will I need to repeat my lab tests?</h4>
                  <p style={{ color: '#4c5d74', lineHeight: 1.5 }}>
                    Often, our Oncopathology and Radiology teams will review your existing slides and CDs directly to confirm the staging and grading without needing a repeated biopsy. However, if the tissue sample is insufficient or the imaging is not clear, we may request fresh tests to ensure treatment precision.
                  </p>
                </div>

                <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #1a6b5a' }}>
                  <h4 style={{ color: '#1a6b5a', fontSize: '1.1rem', marginBottom: '8px' }}>Can I send my diagnostic reports digitally?</h4>
                  <p style={{ color: '#4c5d74', lineHeight: 1.5 }}>
                    Yes. Written reports (PDFs) can be securely emailed ahead of your appointment. However, high-resolution imaging and physical tissue blocks must be hand-carried to our Diagnostic Centre upon your arrival for primary molecular testing and biomarker reviews.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
