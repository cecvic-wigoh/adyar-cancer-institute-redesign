import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { doctors, getDoctorBySlug, getDoctorsByDepartment } from '@/data/doctors';
import DoctorAvatar from '@/components/DoctorAvatar';
import StickyDoctorBar from '@/components/StickyDoctorBar';
import StatCounter from '@/components/StatCounter';
import PaginatedPublications from '@/components/PaginatedPublications';
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

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const relatedDoctors = getDoctorsByDepartment(doctor.department.slug).filter(
    (d) => d.slug !== doctor.slug
  );

  // Build section nav items based on available data
  const sectionItems: { id: string; label: string }[] = [];
  if (doctor.about.length > 0) sectionItems.push({ id: 'sec-about', label: 'About' });
  if (doctor.areasOfExpertise.length > 0) sectionItems.push({ id: 'sec-expertise', label: 'Expertise' });
  if (doctor.qualifications.length > 0) sectionItems.push({ id: 'sec-qualifications', label: 'Qualifications' });
  if (doctor.education.length > 0) sectionItems.push({ id: 'sec-education', label: 'Education' });
  if (doctor.experience.length > 0) sectionItems.push({ id: 'sec-experience', label: 'Experience' });
  if (doctor.publications && doctor.publications.length > 0) sectionItems.push({ id: 'sec-publications', label: 'Publications' });
  if (doctor.publicationsList && doctor.publicationsList.length > 0) sectionItems.push({ id: 'sec-publications-list', label: 'Publications' });

  return (
    <main id="main" className={styles.page}>

      {/* ── STICKY NAV BAR ── */}
      <StickyDoctorBar
        doctorName={doctor.name}
        sections={sectionItems}
      />

      {/* ── HERO ── */}
      <section id="doctor-hero" className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroInner}>
          <DoctorAvatar
            name={doctor.name}
            department={doctor.department.title}
            size="lg"
            imageSrc={doctor.image}
          />
          <div className={styles.heroInfo}>
            <h1 className={styles.heroTitle}>{doctor.name}</h1>
            <p className={styles.heroDesignation}>{doctor.designation}</p>
            <div className={styles.heroTags}>
              <span className={styles.heroTagSpecialty}>{doctor.specialty}</span>
              {doctor.qualifications.length > 0 && (
                <span className={styles.heroTagQual}>{doctor.qualifications[0]}</span>
              )}
            </div>
            <div className={styles.heroCtas}>
              <a href="/#appointment" className={styles.heroCtaPrimary}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Request Appointment
              </a>
              <Link href={`/departments/${doctor.department.slug}`} className={styles.heroCtaGhost}>
                View Department
              </Link>
            </div>
            {doctor.linkedin && (
              <a
                href={doctor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroLinkedin}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Profile
              </a>
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

      {/* ── HIGHLIGHTS STRIP ── */}
      <div className={styles.highlights}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div className={styles.highlightValue}>{doctor.department.title}</div>
            <div className={styles.highlightLabel}>Department</div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
            </div>
            <div className={styles.highlightValue}>
              <StatCounter target={doctor.qualifications.length} />
            </div>
            <div className={styles.highlightLabel}>Qualifications</div>
          </div>
          {(() => {
            const pubCount = doctor.publicationMetrics?.total
              ?? doctor.publicationsList?.length
              ?? doctor.publications?.length
              ?? 0;
            return pubCount > 0 ? (
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <div className={styles.highlightValue}>
                  <StatCounter target={pubCount} />
                </div>
                <div className={styles.highlightLabel}>Publications</div>
              </div>
            ) : null;
          })()}
        </div>
      </div>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className={styles.contentWrap}>

        {/* ── MAIN CONTENT ── */}
        <div className={styles.main}>

          {/* About */}
          {doctor.about.length > 0 && (
            <section id="sec-about" className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                About
                <span className={styles.sectionLine} />
              </h2>
              <div className={styles.aboutBody}>
                {doctor.about.map((p, i) => (
                  <p key={i} className={i === 0 ? styles.aboutLead : undefined}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {/* Areas of Expertise */}
          {doctor.areasOfExpertise.length > 0 && (
            <section id="sec-expertise" className={styles.sectionBlock}>
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

          {/* Qualifications */}
          {doctor.qualifications.length > 0 && (
            <section id="sec-qualifications" className={styles.sectionBlock}>
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
            <section id="sec-education" className={styles.sectionBlock}>
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
            <section id="sec-experience" className={styles.sectionBlock}>
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

          {/* Publications (structured) */}
          {doctor.publications && doctor.publications.length > 0 && (
            <section id="sec-publications" className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Research &amp; Publications
                <span className={styles.sectionLine} />
              </h2>

              {/* Metrics cards */}
              {doctor.publicationMetrics && (
                <div className={styles.pubMetrics}>
                  <div className={styles.pubMetric}>
                    <span className={styles.pubMetricValue}>
                      <StatCounter target={doctor.publicationMetrics.total} />
                    </span>
                    <span className={styles.pubMetricLabel}>Publications</span>
                  </div>
                  <div className={styles.pubMetric}>
                    <span className={styles.pubMetricValue}>
                      <StatCounter target={doctor.publicationMetrics.citations} />
                    </span>
                    <span className={styles.pubMetricLabel}>Citations</span>
                  </div>
                  <div className={styles.pubMetric}>
                    <span className={styles.pubMetricValue}>
                      <StatCounter target={doctor.publicationMetrics.hIndex} />
                    </span>
                    <span className={styles.pubMetricLabel}>h-index</span>
                  </div>
                  <div className={styles.pubMetric}>
                    <span className={styles.pubMetricValue}>
                      <StatCounter target={doctor.publicationMetrics.i10Index} />
                    </span>
                    <span className={styles.pubMetricLabel}>i10-index</span>
                  </div>
                </div>
              )}

              {/* Group by category */}
              {(['Original Article', 'Review & Meta-Analysis', 'Case Report'] as const).map((category) => {
                const pubs = doctor.publications!.filter((p) => p.category === category);
                if (pubs.length === 0) return null;
                return (
                  <div key={category} className={styles.pubCategory}>
                    <h3 className={styles.pubCategoryTitle}>
                      {category === 'Original Article' ? 'Original Articles' : category === 'Review & Meta-Analysis' ? 'Reviews & Meta-Analyses' : 'Case Reports'}
                      <span className={styles.pubCategoryCount}>{pubs.length}</span>
                    </h3>
                    <div className={styles.pubList}>
                      {pubs.map((pub, i) => (
                        <div key={i} className={styles.pubItem}>
                          <div className={styles.pubNumber}>{i + 1}</div>
                          <div className={styles.pubContent}>
                            <div className={styles.pubTitle}>{pub.title}</div>
                            <div className={styles.pubAuthors}>{pub.authors}</div>
                            <div className={styles.pubJournal}>
                              <span className={styles.pubJournalName}>{pub.journal}</span>
                              <span className={styles.pubYear}>{pub.year}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>
          )}

          {/* Publications List (paginated) */}
          {doctor.publicationsList && doctor.publicationsList.length > 0 && (
            <section id="sec-publications-list" className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                Research &amp; Publications
                <span className={styles.sectionLine} />
              </h2>
              <PaginatedPublications publications={doctor.publicationsList} />
            </section>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <aside className={styles.sidebar}>
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

          {/* Department Link Card */}
          <div className={styles.sideCard}>
            <Link href={`/departments/${doctor.department.slug}`} className={styles.deptLink}>
              <div className={styles.deptIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <div className={styles.deptLinkTitle}>{doctor.department.title}</div>
                <div className={styles.deptLinkSub}>View department page &rarr;</div>
              </div>
            </Link>
          </div>

          {/* LinkedIn */}
          {doctor.linkedin && (
            <div className={styles.sideCard}>
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
        </aside>
      </div>

      {/* ── RELATED DOCTORS ── */}
      {relatedDoctors.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedHeading}>
              Colleagues in {doctor.department.title}
            </h2>
            <div className={styles.relatedScroll}>
              {relatedDoctors.map((rd) => (
                <Link
                  key={rd.slug}
                  href={`/doctors/${rd.slug}`}
                  className={styles.relatedCard}
                >
                  <DoctorAvatar name={rd.name} size="sm" imageSrc={rd.image} />
                  <div className={styles.relatedInfo}>
                    <div className={styles.relatedName}>{rd.name}</div>
                    <div className={styles.relatedDesig}>{rd.designation}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
