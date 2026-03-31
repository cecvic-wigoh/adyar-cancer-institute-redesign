import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { doctors, getDoctorBySlug, getDoctorQualifications } from '@/data/doctors';
import DoctorAvatar from '@/components/DoctorAvatar';
import StickyDoctorBar from '@/components/StickyDoctorBar';
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

  const qualifications = getDoctorQualifications(doctor);
  const lastName = doctor.name.split(' ').pop() ?? doctor.name;

  const sectionItems: { id: string; label: string }[] = [];
  if (doctor.about.length > 0) sectionItems.push({ id: 'sec-about', label: 'About' });
  if (doctor.areasOfExpertise.length > 0) sectionItems.push({ id: 'sec-expertise', label: 'Expertise' });
  sectionItems.push({ id: 'sec-education', label: 'Education' });
  if (doctor.experience.length > 0) sectionItems.push({ id: 'sec-experience', label: 'Experience' });
  if (doctor.publicationsUrl || doctor.publications?.length || doctor.publicationsList?.length) {
    sectionItems.push({ id: 'sec-publications', label: 'Publications' });
  }

  const hasFellowships = doctor.fellowships && doctor.fellowships.length > 0;
  const hasPublications = doctor.publicationsUrl || (doctor.publications && doctor.publications.length > 0) || (doctor.publicationsList && doctor.publicationsList.length > 0);

  return (
    <main id="main" className={styles.page}>

      {/* ── STICKY BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/doctors">Doctors</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href={`/departments/${doctor.department.slug}`}>{doctor.department.title}</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCur}>{doctor.name}</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero} id="doctor-hero">
        <div className={styles.heroGrain} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/doctors">Doctors</Link>
              <span>/</span>
              <Link href={`/departments/${doctor.department.slug}`}>{doctor.department.title}</Link>
            </nav>

            <div className={styles.heroDeptBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              {doctor.department.title}
            </div>

            <h1 className={styles.heroName}>{doctor.name}</h1>
            <p className={styles.heroDesignation}>{doctor.designation}</p>

            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Qualifications</span>
                <span className={styles.heroMetaValue}>{qualifications.join(' \u2022 ')}</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Specialties</span>
                <span className={styles.heroMetaValue}>{doctor.specialties.join(' \u2022 ')}</span>
              </div>
            </div>

            {doctor.linkedin && (
              <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer" className={styles.heroLinkedin}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
                LinkedIn Profile
              </a>
            )}
          </div>

          <div className={styles.heroPortrait}>
            <div className={styles.heroPortraitFrame}>
              {doctor.image ? (
                <img src={doctor.image} alt={`Photo of ${doctor.name}`} className={styles.heroPhotoImg} />
              ) : (
                <DoctorAvatar name={doctor.name} size="lg" />
              )}
            </div>
            <div className={styles.heroPortraitAccent} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <StickyDoctorBar sections={sectionItems} />

      {/* ── ABOUT ── */}
      {doctor.about.length > 0 && (
        <section id="sec-about" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Get to Know</span>
              <h2 className={styles.sectionTitle}>About Dr. {lastName}</h2>
            </div>
            <div className={styles.aboutBody}>
              {doctor.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AREAS OF EXPERTISE ── */}
      {doctor.areasOfExpertise.length > 0 && (
        <section id="sec-expertise" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Clinical Focus</span>
              <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
            </div>
            <div className={styles.expertiseGrid}>
              {doctor.areasOfExpertise.map((area, i) => (
                <div key={i} className={styles.expertiseCard}>
                  <div className={styles.expertiseIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EDUCATION & TRAINING ── */}
      <section id="sec-education" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Credentials</span>
            <h2 className={styles.sectionTitle}>Education &amp; Training</h2>
          </div>
          <div className={`${styles.eduGrid} ${!hasFellowships ? styles.eduGridFull : ''}`}>
            <div className={styles.eduGroup}>
              <h4 className={styles.eduGroupTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>
                Degrees
              </h4>
              <div className={styles.eduItem}>
                <div className={styles.eduDot} aria-hidden="true" />
                <div>
                  <div className={styles.eduDegree}>{doctor.primaryDegree.degree}</div>
                  <div className={styles.eduInstitution}>
                    {doctor.primaryDegree.institution}{doctor.primaryDegree.year ? ` \u2022 ${doctor.primaryDegree.year}` : ''}
                  </div>
                </div>
              </div>
              {doctor.postgraduateQualification && (
                <div className={styles.eduItem}>
                  <div className={styles.eduDot} aria-hidden="true" />
                  <div>
                    <div className={styles.eduDegree}>{doctor.postgraduateQualification.degree}</div>
                    <div className={styles.eduInstitution}>
                      {doctor.postgraduateQualification.institution}{doctor.postgraduateQualification.year ? ` \u2022 ${doctor.postgraduateQualification.year}` : ''}
                    </div>
                  </div>
                </div>
              )}
              {doctor.superSpeciality && (
                <div className={styles.eduItem}>
                  <div className={styles.eduDot} aria-hidden="true" />
                  <div>
                    <div className={styles.eduDegree}>{doctor.superSpeciality.degree}</div>
                    <div className={styles.eduInstitution}>
                      {doctor.superSpeciality.institution}{doctor.superSpeciality.year ? ` \u2022 ${doctor.superSpeciality.year}` : ''}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {hasFellowships && (
              <div className={styles.eduGroup}>
                <h4 className={styles.eduGroupTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                  Fellowships
                </h4>
                {doctor.fellowships!.map((f, i) => (
                  <div key={i} className={styles.eduItem}>
                    <div className={styles.eduDot} aria-hidden="true" />
                    <div>
                      <div className={styles.eduDegree}>{f}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      {doctor.experience.length > 0 && (
        <section id="sec-experience" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Career</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            <div className={styles.expTimeline}>
              {doctor.experience.map((exp, i) => (
                <div key={i} className={styles.expItem}>
                  <div className={styles.expDot} aria-hidden="true">
                    <div className={styles.expDotInner} />
                  </div>
                  <div className={styles.expContent}>{exp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PUBLICATIONS ── */}
      {hasPublications && (
        <section id="sec-publications" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Research</span>
              <h2 className={styles.sectionTitle}>Publications</h2>
            </div>

            {doctor.publications && doctor.publications.length > 0 && doctor.publicationMetrics && (
              <div className={styles.pubMetrics}>
                {[
                  { label: 'Publications', value: doctor.publicationMetrics.total, icon: 'M4 19.5A2.5 2.5 0 016.5 17H20' },
                  { label: 'Citations', value: doctor.publicationMetrics.citations, icon: 'M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21' },
                  { label: 'h-index', value: doctor.publicationMetrics.hIndex, icon: 'M12 20V10M18 20V4M6 20v-4' },
                  { label: 'i10-index', value: doctor.publicationMetrics.i10Index, icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' },
                ].map((m) => (
                  <div key={m.label} className={styles.pubMetric}>
                    <svg className={styles.pubMetricIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={m.icon}/></svg>
                    <span className={styles.pubMetricValue}>{m.value}</span>
                    <span className={styles.pubMetricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {doctor.publicationsList && doctor.publicationsList.length > 0 && (
              <PaginatedPublications publications={doctor.publicationsList} />
            )}

            {doctor.publicationsUrl && (
              <div className={styles.pubUrlWrap}>
                <p className={styles.pubNote}>View the complete list of research publications and citations.</p>
                <a href={doctor.publicationsUrl} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  View All Publications
                </a>
              </div>
            )}
          </div>
        </section>
      )}

    </main>
  );
}
