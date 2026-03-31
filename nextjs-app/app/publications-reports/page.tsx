import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Newsletters & Annual Reports | Cancer Institute (WIA)',
  description:
    'Download the latest newsletters and annual reports from Cancer Institute (WIA), Adyar, Chennai — stay updated with our research, achievements, and institutional milestones.',
};

/* ── Data ─────────────────────────────────────────────────────────── */

interface Document {
  title: string;
  period: string;
  category: 'newsletter' | 'annual-report';
  href: string;
  size?: string;
  highlight?: boolean;
}

const newsletters: Document[] = [
  {
    title: 'Newsletter — September 2025',
    period: 'Sep 2025',
    category: 'newsletter',
    href: '/documents/News Letter/Sep25_News-Letter_Cancer-InstituteWIA.pdf',
    size: '3.6 MB',
    highlight: true,
  },
  {
    title: 'Newsletter — April 2025',
    period: 'Apr 2025',
    category: 'newsletter',
    href: '/documents/News Letter/April-2025-Newsletter.pdf',
    size: '13.6 MB',
  },
  {
    title: 'Newsletter — October 2024',
    period: 'Oct 2024',
    category: 'newsletter',
    href: '/documents/News Letter/October-Newsletter-2024.pdf',
    size: '10.9 MB',
  },
  {
    title: 'Newsletter — July 2024',
    period: 'Jul 2024',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-July-2024.pdf',
    size: '12.2 MB',
  },
  {
    title: 'Newsletter — April 2024',
    period: 'Apr 2024',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-April-2024.pdf',
    size: '10.5 MB',
  },
  {
    title: 'Newsletter — January 2025',
    period: 'Jan 2025',
    category: 'newsletter',
    href: '/documents/News Letter/January-Newsletter-2025.pdf',
    size: '9.3 MB',
  },
  {
    title: 'Newsletter — January 2024',
    period: 'Jan 2024',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-January-2024.pdf',
    size: '18.9 MB',
  },
  {
    title: 'Newsletter — October 2023',
    period: 'Oct 2023',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-October-2023.pdf',
    size: '12.3 MB',
  },
  {
    title: 'Newsletter — July 2023',
    period: 'Jul 2023',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-July-2023.pdf',
    size: '8.1 MB',
  },
  {
    title: 'Newsletter — October 2022',
    period: 'Oct 2022',
    category: 'newsletter',
    href: '/documents/News Letter/Newsletter-Oct2022.pdf',
    size: '8.2 MB',
  },
  {
    title: 'Newsletter — July 2022',
    period: 'Jul 2022',
    category: 'newsletter',
    href: '/documents/News Letter/CIWIA-Newsletter-July-22.pdf',
    size: '5.8 MB',
  },
];

const annualReports: Document[] = [
  {
    title: 'Annual Report 2023–2024',
    period: '2023 – 2024',
    category: 'annual-report',
    href: '/documents/Annual Report/ANNUAL-REPORT-2023-2024.pdf',
    size: '6.1 MB',
    highlight: true,
  },
  {
    title: 'Annual Report 2022–2023',
    period: '2022 – 2023',
    category: 'annual-report',
    href: '/documents/Annual Report/Annual-Report-2022-2023-Final-Draft-for-Print-proofread_organized-for-website.pdf',
    size: '2.4 MB',
  },
  {
    title: 'Annual Report 2021–2022',
    period: '2021 – 2022',
    category: 'annual-report',
    href: '/documents/Annual Report/AR-2021-2022_Ver1.1.pdf',
    size: '31.4 MB',
  },
];

/* ── SVG Icons ─────────────────────────────────────────────────────── */

function PdfIcon() {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      aria-hidden="true"
      className={styles.docIcon}
    >
      <rect width="40" height="48" rx="6" fill="#E8F0FD" />
      <rect x="6" y="6" width="18" height="2.5" rx="1.25" fill="#134795" opacity="0.35" />
      <rect x="6" y="11" width="22" height="2.5" rx="1.25" fill="#134795" opacity="0.25" />
      <rect x="6" y="16" width="14" height="2.5" rx="1.25" fill="#134795" opacity="0.2" />
      <rect y="28" width="40" height="20" rx="6" fill="#134795" />
      <text
        x="20"
        y="43"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        PDF
      </text>
    </svg>
  );
}

function NewsletterBadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#23CDC0" strokeWidth="1.5" />
      <path d="M2 7l8 5 8-5" stroke="#23CDC0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReportBadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke="#134795" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="#134795" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
      <path d="M10 3v9m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="12" height="12">
      <path d="M8 1l1.76 3.57L14 5.27l-3 2.93.71 4.14L8 10.19l-3.71 2.15L5 8.2 2 5.27l4.24-.7L8 1z" />
    </svg>
  );
}

/* ── Document Card ─────────────────────────────────────────────────── */

function DocCard({ doc }: { doc: Document }) {
  const isNewsletter = doc.category === 'newsletter';
  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${doc.highlight ? styles.cardHighlight : ''}`}
      aria-label={`Download ${doc.title} (PDF${doc.size ? ', ' + doc.size : ''})`}
    >
      {doc.highlight && (
        <span className={styles.latestBadge}>
          <StarIcon />
          Latest
        </span>
      )}
      <div className={styles.cardIconWrap}>
        <PdfIcon />
      </div>
      <div className={styles.cardBody}>
        <span className={`${styles.categoryPill} ${isNewsletter ? styles.pillNewsletter : styles.pillReport}`}>
          {isNewsletter ? <NewsletterBadgeIcon /> : <ReportBadgeIcon />}
          {isNewsletter ? 'Newsletter' : 'Annual Report'}
        </span>
        <h3 className={styles.cardTitle}>{doc.title}</h3>
        <p className={styles.cardPeriod}>{doc.period}</p>
      </div>
      <div className={styles.cardFooter}>
        {doc.size && <span className={styles.fileSize}>{doc.size}</span>}
        <span className={styles.downloadCta}>
          <DownloadIcon />
          Download PDF
        </span>
      </div>
    </a>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function PublicationsReportsPage() {
  return (
    <main id="main" className={styles.page}>

      {/* ── HERO BANNER ── */}
      <section className={styles.hero} aria-labelledby="pub-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgGradient} />
          <div className={styles.heroBgDots} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Cancer Institute (WIA) · Publications</span>
          <h1 id="pub-heading" className={styles.heroTitle}>
            Newsletters &amp;
            <span className={styles.heroTitleAccent}> Annual Reports</span>
          </h1>
          <p className={styles.heroLead}>
            Stay connected with our progress, milestones, and research through our
            institutional newsletters and comprehensive annual reports — freely available for download.
          </p>
          <div className={styles.heroCounts}>
            <div className={styles.heroCount}>
              <span className={styles.heroCountNum}>{newsletters.length}</span>
              <span className={styles.heroCountLabel}>Newsletters</span>
            </div>
            <div className={styles.heroCountDivider} />
            <div className={styles.heroCount}>
              <span className={styles.heroCountNum}>{annualReports.length}</span>
              <span className={styles.heroCountLabel}>Annual Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANNUAL REPORTS ── */}
      <section className={styles.section} aria-labelledby="annual-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">
              <ReportBadgeIcon />
              Annual Reports
            </span>
            <h2 id="annual-heading">Institutional Annual Reports</h2>
            <p>
              Our annual reports document the institute&apos;s clinical achievements, research output,
              financial stewardship, and future directions.
            </p>
          </div>
          <div className={styles.grid}>
            {annualReports.map((doc) => (
              <DocCard key={doc.href} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className={styles.sectionDivider} aria-hidden="true" />

      {/* ── NEWSLETTERS ── */}
      <section className={styles.section} aria-labelledby="newsletter-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">
              <NewsletterBadgeIcon />
              Newsletters
            </span>
            <h2 id="newsletter-heading">Quarterly Newsletters</h2>
            <p>
              Published quarterly, our newsletters feature clinical highlights, patient stories,
              upcoming events, and insights from our specialists.
            </p>
          </div>
          <div className={styles.grid}>
            {newsletters.map((doc) => (
              <DocCard key={doc.href} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className={styles.ctaStrip} aria-label="Subscribe prompt">
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Want to stay in the loop?</h2>
              <p>
                Contact us to receive future newsletters and publications directly in your inbox.
              </p>
            </div>
            <a href="/#appointment" className={`btn btn-white ${styles.ctaBtn}`}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
