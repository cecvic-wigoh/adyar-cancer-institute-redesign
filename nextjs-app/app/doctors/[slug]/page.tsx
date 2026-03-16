import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { doctors, getDoctorBySlug, getDoctorsByDepartment } from '@/data/doctors';
import styles from './doctor.module.css';

export async function generateStaticParams() {
  return doctors.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} | ${doctor.department.title} | Cancer Institute (WIA)`,
    description: doctor.metaDescription,
  };
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const relatedDoctors = getDoctorsByDepartment(doctor.department.slug).filter(
    (d) => d.slug !== doctor.slug
  );

  return (
    <main id="main" className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{doctor.name}</h1>
          <p className={styles.heroDesignation}>{doctor.designation}</p>
          <p className={styles.heroSpecialty}>{doctor.specialty}</p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              {doctor.department.title}
            </span>
            {doctor.qualifications.length > 0 && (
              <span className={styles.heroBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
                {doctor.qualifications[0]}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href={`/departments/${doctor.department.slug}`}>{doctor.department.title}</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>{doctor.name}</span>
        </nav>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className={styles.contentWrap}>

        {/* ── MAIN CONTENT ── */}
        <div className={styles.main}>

          {/* About */}
          {doctor.about.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                About
                <span className={styles.sectionLine} />
              </h2>
              <div className={styles.aboutBody}>
                {doctor.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {/* Qualifications */}
          {doctor.qualifications.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Qualifications
                <span className={styles.sectionLine} />
              </h2>
              <ul className={styles.qualList}>
                {doctor.qualifications.map((qual, i) => (
                  <li key={i} className={styles.qualItem}>
                    <span className={styles.qualCheck}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#23CDC0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {qual}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education Timeline */}
          {doctor.education.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Education
                <span className={styles.sectionLine} />
              </h2>
              <div className={styles.timeline}>
                {doctor.education.map((edu, i) => (
                  <div key={i} className={styles.tlItem}>
                    <div className={styles.tlDot} />
                    <div className={styles.tlDegree}>{edu.degree}</div>
                    <div className={styles.tlInstitution}>{edu.institution}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Career Experience */}
          {doctor.experience.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Career Experience
                <span className={styles.sectionLine} />
              </h2>
              <ul className={styles.expList}>
                {doctor.experience.map((exp, i) => (
                  <li key={i} className={styles.expItem}>
                    <span className={styles.expBullet}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#23CDC0" strokeWidth="2.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                    </span>
                    <span className={styles.expText}>{exp}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Areas of Expertise */}
          {doctor.areasOfExpertise.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Areas of Expertise
                <span className={styles.sectionLine} />
              </h2>
              <div className={styles.expertiseChips}>
                {doctor.areasOfExpertise.map((area, i) => (
                  <span key={i} className={styles.expertiseChip}>{area}</span>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <aside className={styles.sidebar}>

          {/* Department Link Card */}
          <div className={styles.sideCard}>
            <div className={styles.sideCardTitle}>Department</div>
            <Link href={`/departments/${doctor.department.slug}`} className={styles.deptLink}>
              <div className={styles.deptIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <div className={styles.deptLinkTitle}>{doctor.department.title}</div>
                <div className={styles.deptLinkSub}>View department page</div>
              </div>
            </Link>
          </div>

          {/* Book Appointment Card */}
          <div className={styles.appointCard}>
            <div className={styles.appointTitle}>Book an Appointment</div>
            <p className={styles.appointDesc}>
              Schedule a consultation with {doctor.name} at Cancer Institute (WIA).
            </p>
            <a href="/#appointment" className={styles.appointBtn}>
              Request Appointment
            </a>
          </div>

          {/* LinkedIn */}
          {doctor.linkedin && (
            <div className={styles.sideCard}>
              <div className={styles.sideCardTitle}>Connect</div>
              <a
                href={doctor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                <span className={styles.linkedinIcon}>
                  <svg viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <span className={styles.linkedinText}>View LinkedIn Profile</span>
              </a>
            </div>
          )}

          {/* Related Doctors */}
          {relatedDoctors.length > 0 && (
            <div className={styles.sideCard}>
              <div className={styles.sideCardTitle}>
                Other {doctor.department.title} Doctors
              </div>
              {relatedDoctors.map((rd) => (
                <Link
                  key={rd.slug}
                  href={`/doctors/${rd.slug}`}
                  className={styles.relatedDoc}
                >
                  <div className={styles.relatedInitial}>
                    {getInitials(rd.name)}
                  </div>
                  <div>
                    <div className={styles.relatedName}>{rd.name}</div>
                    <div className={styles.relatedDesig}>{rd.designation}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </aside>
      </div>

      {/* ── CTA BAR ── */}
      <div className={styles.ctaBar}>
        <div className={styles.ctaInner}>
          <div>
            <div className={styles.ctaText}>Ready to Schedule a Visit?</div>
            <div className={styles.ctaSub}>Book an appointment with our specialists at Cancer Institute (WIA), Chennai.</div>
          </div>
          <a href="/#appointment" className={styles.ctaBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book Appointment
          </a>
        </div>
      </div>

    </main>
  );
}
