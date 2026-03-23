import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const quickAccessCards = [
  {
    title: 'Find a Doctor',
    subtitle: 'Meet oncology and transfusion specialists',
    href: '/#doctors',
    icon: <DoctorIcon />,
  },
  {
    title: 'Cancer Specialities',
    subtitle: 'Multidisciplinary support for active treatment',
    href: '/#cancer-types',
    icon: <CancerRibbonIcon />,
  },
  {
    title: 'Diagnostics',
    subtitle: 'Crossmatching, screening, and testing',
    href: '/#research',
    icon: <DiagnosticsIcon />,
  },
  {
    title: 'Blood Centre & Services',
    subtitle: '24 / 7 transfusion medicine support',
    href: '/blood-bank',
    icon: <BloodBankIcon />,
    active: true,
  },
];

const serviceHighlights = [
  'Blood component preparation',
  'Crossmatching and compatibility testing',
  'Platelet donation',
  'Emergency blood supply',
];

const oncologyPrograms = [
  'Medical Oncology',
  'Surgical Oncology',
  'Radiation Oncology',
  'Gynaec Oncology',
];

const newsItems = [
  {
    title: 'Blood Donation Camp This Weekend',
    detail: 'Join our donor drive supporting chemotherapy and emergency transfusions.',
    href: '/#events',
    icon: <CalendarIcon />,
  },
  {
    title: 'New Breakthrough in Cancer Research',
    detail: 'Transfusion medicine teams continue to support advanced oncology protocols.',
    href: '/#research',
    icon: <ResearchIcon />,
  },
  {
    title: 'View All News',
    detail: 'Updates from departments, camps, support services, and patient care.',
    href: '/#events',
    icon: <NewsIcon />,
  },
];

const linkColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Departments', href: '/#cancer-types' },
      { label: 'Doctors', href: '/#doctors' },
      { label: 'Blood Centre', href: '/blood-bank' },
    ],
  },
  {
    title: 'Important Links',
    links: [
      { label: 'Appointment Booking', href: '/#appointment' },
      { label: 'Health Packages', href: '/#research' },
      { label: 'Patient Portal', href: '/#contact' },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Blood Centre & Transfusion Medicine | Cancer Institute (WIA)',
  description:
    '24 / 7 Blood Centre and transfusion medicine support for oncology, surgery, chemotherapy, and emergency care at Cancer Institute (WIA).',
};

export default function BloodBankPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={`container ${styles.shell}`}>
        <section className={styles.heroSection} aria-labelledby="blood-bank-heading">
          <div className={styles.heroBanner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Cancer Institute (WIA)</p>
              <h1 id="blood-bank-heading">
                Advanced Cancer Care
                <span>with 24/7 Blood Centre Support</span>
              </h1>
              <p className={styles.heroLead}>
                Supporting surgery, chemotherapy, bone marrow transplant, and emergency
                transfusion needs with round-the-clock donor services and blood component
                therapy.
              </p>
              <div className={styles.heroActions}>
                <Link href="/#appointment" className={`${styles.actionButton} ${styles.primaryAction}`}>
                  Book Appointment
                </Link>
                <Link href="#donate-blood" className={`${styles.actionButton} ${styles.dangerAction}`}>
                  Donate Blood
                </Link>
                <Link href="#services" className={`${styles.actionButton} ${styles.secondaryAction}`}>
                  Blood Centre Services
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <Image
                src="/blood-bank-herp.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 42vw"
                className={styles.heroImage}
              />
            </div>
          </div>

          <div className={styles.quickAccessGrid}>
            {quickAccessCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`${styles.quickAccessCard}${card.active ? ` ${styles.quickAccessCardActive}` : ''}`}
              >
                <span className={styles.quickAccessIcon}>{card.icon}</span>
                <span className={styles.quickAccessTitle}>{card.title}</span>
                <span className={styles.quickAccessSubtitle}>{card.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.featureSection} id="services" aria-labelledby="services-heading">
          <div className={styles.featureCard}>
            <div className={styles.featureCopy}>
              <h2 id="services-heading">Blood Centre &amp; Transfusion Medicine</h2>
              <p className={styles.featureLead}>
                Our Blood Centre provides safe, reliable blood and blood component therapy 24
                hours a day, supporting oncology treatments and emergency care.
              </p>
              <ul className={styles.featureList}>
                {serviceHighlights.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.featureActions}>
                <Link href="#donate-blood" className={`${styles.actionButton} ${styles.dangerAction}`}>
                  Donate Blood
                </Link>
                <Link href="#blood-availability" className={`${styles.actionButton} ${styles.secondaryAction}`}>
                  Check Blood Availability
                </Link>
                <Link href="#eligibility" className={`${styles.actionButton} ${styles.ghostAction}`}>
                  Donor Eligibility
                </Link>
              </div>
            </div>
            <div className={styles.featureVisual} aria-hidden="true">
              <FeatureArtwork />
            </div>
          </div>
        </section>

        <section className={styles.programSection} aria-labelledby="programs-heading">
          <div className={styles.sectionHeadingWrap}>
            <h2 id="programs-heading">Blood Centre &amp; Transfusion Medicine</h2>
          </div>
          <div className={styles.programTabs}>
            {oncologyPrograms.map((program) => (
              <button key={program} type="button" className={styles.programTab}>
                {program}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.donorSection} id="donate-blood" aria-labelledby="donor-heading">
          <div className={styles.donorBanner}>
            <div className={styles.donorVisual} aria-hidden="true">
              <DonateArtwork />
            </div>
            <div className={styles.donorCopy}>
              <h2 id="donor-heading">Save Lives - Donate Blood Today</h2>
              <p>
                Blood donations support cancer patients receiving chemotherapy, major
                oncological surgeries, and bone marrow transplant patients every day.
              </p>
              <Link href="/#donate" className={`${styles.actionButton} ${styles.bannerAction}`}>
                Register as a Blood Donor
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.newsSection} aria-labelledby="news-heading">
          <div className={styles.sectionHeadingWrap}>
            <h2 id="news-heading">Latest News &amp; Updates</h2>
          </div>
          <div className={styles.newsGrid}>
            {newsItems.map((item) => (
              <Link key={item.title} href={item.href} className={styles.newsCard}>
                <span className={styles.newsIcon}>{item.icon}</span>
                <span className={styles.newsText}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.infoSection} aria-label="Blood Centre contact and quick links">
          <div className={styles.infoGrid}>
            {linkColumns.map((column) => (
              <div key={column.title} className={styles.infoColumn}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        <ShieldIcon />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.infoColumn}>
              <h3>Contact Us</h3>
              <ul className={styles.contactList}>
                <li>
                  <MapPinIcon />
                  <span>East Canal Bank Road, Adyar, Chennai - 600 020</span>
                </li>
                <li>
                  <PhoneIcon />
                  <a href="tel:+914424910754">044-2491 0754</a>
                </li>
                <li>
                  <MailIcon />
                  <a href="mailto:info@cancerinstitutewia.org">info@cancerinstitutewia.org</a>
                </li>
              </ul>
              <div className={styles.socialRow} aria-label="Social links">
                <a href="#" aria-label="Facebook">
                  <SocialIcon label="f" />
                </a>
                <a href="#" aria-label="Telegram">
                  <SocialIcon label="t" />
                </a>
                <a href="#" aria-label="YouTube">
                  <SocialIcon label="yt" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <SocialIcon label="in" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeatureArtwork() {
  return (
    <svg viewBox="0 0 520 320" className={styles.featureSvg}>
      <defs>
        <linearGradient id="feature-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eff5fb" />
          <stop offset="100%" stopColor="#c8ddf8" />
        </linearGradient>
      </defs>
      <rect width="520" height="320" rx="22" fill="url(#feature-bg)" />
      <rect x="20" y="20" width="180" height="118" rx="18" fill="rgba(255,255,255,0.66)" />
      <rect x="324" y="30" width="170" height="92" rx="18" fill="rgba(255,255,255,0.74)" />
      <rect x="322" y="198" width="174" height="92" rx="18" fill="rgba(255,255,255,0.74)" />

      <rect x="54" y="58" width="26" height="50" rx="8" fill="#d84a53" />
      <rect x="87" y="46" width="18" height="62" rx="7" fill="#7bc3ff" />
      <rect x="112" y="70" width="22" height="38" rx="8" fill="#1b5ea7" />
      <rect x="143" y="54" width="16" height="54" rx="8" fill="#7bc3ff" />
      <rect x="45" y="111" width="122" height="8" rx="4" fill="#bbd0eb" />

      <circle cx="251" cy="135" r="38" fill="#f2c5ad" />
      <path d="M213 126c7-32 57-40 76-10 7 10 8 24 3 39-9-5-25-9-39-9-13 0-24 2-37 7-2-10-4-19-3-27z" fill="#6f4635" />
      <path d="M221 168c18 12 45 12 61 0l20 112h-28l-9-53-15 48-14-48-7 53h-29z" fill="#ffffff" />
      <rect x="242" y="163" width="22" height="36" rx="10" fill="#ef5d67" />
      <rect x="246" y="168" width="14" height="26" rx="4" fill="#fff3f5" />
      <path d="M254 175v12" stroke="#ef5d67" strokeWidth="3" strokeLinecap="round" />
      <path d="M248 181h12" stroke="#ef5d67" strokeWidth="3" strokeLinecap="round" />

      <rect x="348" y="48" width="28" height="50" rx="8" fill="#cf4c57" />
      <rect x="384" y="42" width="16" height="58" rx="8" fill="#7bc3ff" />
      <rect x="408" y="60" width="22" height="40" rx="8" fill="#d7e9fb" />
      <rect x="438" y="52" width="24" height="48" rx="8" fill="#7bc3ff" />
      <rect x="342" y="104" width="126" height="8" rx="4" fill="#bed4ef" />

      <circle cx="414" cy="236" r="22" fill="#d8e8f7" />
      <rect x="371" y="252" width="88" height="18" rx="9" fill="#d8e8f7" />
      <path d="M394 218c10 8 15 22 15 34h-12c0-8-2-18-10-22z" fill="#96b7d7" />
      <path d="M432 217c-10 8-15 22-15 34h12c0-8 2-18 10-22z" fill="#96b7d7" />
    </svg>
  );
}

function DonateArtwork() {
  return (
    <svg viewBox="0 0 360 180" className={styles.donateSvg}>
      <defs>
        <radialGradient id="blood-cell" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff9097" />
          <stop offset="100%" stopColor="#b90718" />
        </radialGradient>
      </defs>
      <ellipse cx="56" cy="82" rx="34" ry="22" fill="url(#blood-cell)" opacity="0.95" />
      <ellipse cx="122" cy="48" rx="28" ry="18" fill="url(#blood-cell)" opacity="0.88" />
      <ellipse cx="274" cy="44" rx="30" ry="20" fill="url(#blood-cell)" opacity="0.92" />
      <ellipse cx="306" cy="122" rx="34" ry="22" fill="url(#blood-cell)" opacity="0.88" />
      <ellipse cx="218" cy="128" rx="24" ry="16" fill="url(#blood-cell)" opacity="0.82" />

      <rect x="82" y="38" width="56" height="78" rx="18" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
      <rect x="94" y="22" width="32" height="18" rx="8" fill="rgba(255,255,255,0.5)" />
      <path d="M110 116v24" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M110 140c22 0 22 20 44 20" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <rect x="96" y="52" width="28" height="42" rx="10" fill="#fff0f2" opacity="0.68" />

      <path d="M250 52c14 22 28 35 28 52 0 21-17 38-38 38s-38-17-38-38c0-17 14-30 28-52l10-18z" fill="#ffffff" opacity="0.95" />
      <path d="M221 112c8 8 18 12 29 12 8 0 16-2 23-7-3 13-16 23-31 23-13 0-24-8-29-20 3-4 5-6 8-8z" fill="#d51626" />
      <path d="M232 113c4 5 9 8 16 8 6 0 11-3 15-8" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="16" r="9" fill="#8bc3ff" />
      <path d="M10 40c2-10 9-15 14-15s12 5 14 15" fill="#1f5ca8" />
      <path d="M20 24h8v8h-8z" fill="#ffffff" />
    </svg>
  );
}

function CancerRibbonIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M25 7c8 4 10 11 7 18-1 2-3 5-8 10-7-5-10-8-12-11-3-6-1-13 6-17l6 8z" fill="#3aa4df" />
      <path d="M18 25l-6 15h9l4-7m9-8l6 15h-9l-4-7" fill="none" stroke="#ef515b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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

function BloodBankIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M11 12h26l-3 24H14z" fill="#d91d2e" />
      <path d="M16 8h16v8H16z" fill="#ff707d" />
      <path d="M24 18v10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <path d="M19 23h10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10.5l3.3 3.2L16 5.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" fill="#eaf2fc" stroke="#2d65ae" strokeWidth="1.5" />
      <path d="M7 3v4M17 3v4M3 10h18" stroke="#2d65ae" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 14h4" stroke="#ef4652" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3h8M10 3v8l-4 7a2 2 0 001.8 3h8.4A2 2 0 0018 18l-4-7V3" fill="#eef4fb" stroke="#2d65ae" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 13h6" stroke="#ef4652" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#eef4fb" stroke="#2d65ae" strokeWidth="1.5" />
      <path d="M8 9h8M8 13h8M8 17h5" stroke="#2d65ae" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 2l6 2.4v4.7c0 4.1-2.4 6.8-6 8.9-3.6-2.1-6-4.8-6-8.9V4.4z" fill="#eff5fb" stroke="#2d65ae" strokeWidth="1.4" />
      <path d="M7 9.9l2 2 4-4.3" fill="none" stroke="#2d65ae" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 18s5-4.4 5-9a5 5 0 10-10 0c0 4.6 5 9 5 9z" fill="#eff5fb" stroke="#2d65ae" strokeWidth="1.5" />
      <circle cx="10" cy="9" r="1.8" fill="#ef4652" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M15.8 13.9v2.5a1.3 1.3 0 01-1.4 1.3 13.1 13.1 0 01-5.7-2A12.9 12.9 0 013 6.8 13.1 13.1 0 011 1.1 1.3 1.3 0 012.3 0h2.5a1.3 1.3 0 011.2.9l.5 2a1.3 1.3 0 01-.3 1.2L5.1 5.3a10.3 10.3 0 004.6 4.6l1.2-1.1a1.3 1.3 0 011.2-.3l2 .5a1.3 1.3 0 01.9 1.2z" fill="#eff5fb" stroke="#2d65ae" strokeWidth="1" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="2.3" fill="#eff5fb" stroke="#2d65ae" strokeWidth="1.4" />
      <path d="M3.5 6l6.5 5 6.5-5" fill="none" stroke="#ef4652" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span className={styles.socialIconText} aria-hidden="true">
      {label}
    </span>
  );
}
