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

  // Build section nav based on available data
  const sectionItems: { id: string; label: string }[] = [];
  if (doctor.about.length > 0) sectionItems.push({ id: 'sec-about', label: 'About' });
  if (doctor.areasOfExpertise.length > 0) sectionItems.push({ id: 'sec-expertise', label: 'Expertise' });
  sectionItems.push({ id: 'sec-education', label: 'Education & Training' });
  if (doctor.experience.length > 0) sectionItems.push({ id: 'sec-experience', label: 'Experience' });
  if (doctor.publicationsUrl || doctor.publications?.length || doctor.publicationsList?.length) {
    sectionItems.push({ id: 'sec-publications', label: 'Publications' });
  }

  const hasFellowships = doctor.fellowships && doctor.fellowships.length > 0;
  const hasPublications = doctor.publicationsUrl || (doctor.publications && doctor.publications.length > 0) || (doctor.publicationsList && doctor.publicationsList.length > 0);

  return (
    <main id="main" className={styles.page}>

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href="/doctors">Doctors</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href={`/departments/${doctor.department.slug}`}>{doctor.department.title}</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>{doctor.name}</span>
        </nav>
      </div>

      {/* ── STICKY NAV ── */}
      <StickyDoctorBar sections={sectionItems} />

      {/* ── HERO ── */}
      <section className={styles.hero} id="doctor-hero">
        <div className={styles.heroInfo}>
          <div className={styles.heroDept}>{doctor.department.title}</div>
          <h1 className={styles.heroName}>{doctor.name}</h1>
          <p className={styles.heroDesignation}>{doctor.designation}</p>

          {doctor.linkedin && (
            <div className={styles.heroLinkedin}>
              <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
                View LinkedIn Profile
              </a>
            </div>
          )}
        </div>

        <div className={styles.heroPhoto}>
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={`Photo of ${doctor.name}`}
              className={styles.heroPhotoImg}
            />
          ) : (
            <DoctorAvatar name={doctor.name} size="lg" />
          )}
        </div>
      </section>



      {/* ── ABOUT ── */}
      {doctor.about.length > 0 && (
        <section id="sec-about" className={styles.section}>
          <div className={styles.sectionLabel}>Get to Know</div>
          <h2 className={styles.sectionTitle}>About Dr. {lastName}</h2>
          <div className={styles.sectionBody}>
            {doctor.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* ── AREAS OF EXPERTISE ── */}
      {doctor.areasOfExpertise.length > 0 && (
        <section id="sec-expertise" className={styles.section}>
          <div className={styles.sectionLabel}>Clinical Focus</div>
          <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          <ul className={styles.expertiseList}>
            {doctor.areasOfExpertise.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ── EDUCATION & TRAINING ── */}
      <section id="sec-education" className={styles.section}>
        <div className={styles.sectionLabel}>Credentials</div>
        <h2 className={styles.sectionTitle}>Education &amp; Training</h2>
        <div className={`${styles.eduGrid} ${!hasFellowships ? styles.eduGridFull : ''}`}>
          <div className={styles.eduGroup}>
            <h4 className={styles.eduGroupTitle}>Degrees</h4>
            <div className={styles.eduItem}>
              <div className={styles.eduDegree}>{doctor.primaryDegree.degree}</div>
              <div className={styles.eduInstitution}>
                {doctor.primaryDegree.institution}{doctor.primaryDegree.year ? `, ${doctor.primaryDegree.year}` : ''}
              </div>
            </div>
            {doctor.postgraduateQualification && (
              <div className={styles.eduItem}>
                <div className={styles.eduDegree}>{doctor.postgraduateQualification.degree}</div>
                <div className={styles.eduInstitution}>
                  {doctor.postgraduateQualification.institution}{doctor.postgraduateQualification.year ? `, ${doctor.postgraduateQualification.year}` : ''}
                </div>
              </div>
            )}
            {doctor.superSpeciality && (
              <div className={styles.eduItem}>
                <div className={styles.eduDegree}>{doctor.superSpeciality.degree}</div>
                <div className={styles.eduInstitution}>
                  {doctor.superSpeciality.institution}{doctor.superSpeciality.year ? `, ${doctor.superSpeciality.year}` : ''}
                </div>
              </div>
            )}
          </div>
          {hasFellowships && (
            <div className={styles.eduGroup}>
              <h4 className={styles.eduGroupTitle}>Fellowships</h4>
              {doctor.fellowships!.map((f, i) => (
                <div key={i} className={styles.eduItem}>
                  <div className={styles.eduDegree}>{f}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      {doctor.experience.length > 0 && (
        <section id="sec-experience" className={styles.section}>
          <div className={styles.sectionLabel}>Career</div>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ul className={styles.expList}>
            {doctor.experience.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </section>
      )}



      {/* ── PUBLICATIONS ── */}
      {hasPublications && (
        <section id="sec-publications" className={styles.section}>
          <div className={styles.sectionLabel}>Research</div>
          <h2 className={styles.sectionTitle}>Publications</h2>

          {/* Structured publications with metrics */}
          {doctor.publications && doctor.publications.length > 0 && doctor.publicationMetrics && (
            <div className={styles.pubMetrics}>
              {[
                { label: 'Publications', value: doctor.publicationMetrics.total },
                { label: 'Citations', value: doctor.publicationMetrics.citations },
                { label: 'h-index', value: doctor.publicationMetrics.hIndex },
                { label: 'i10-index', value: doctor.publicationMetrics.i10Index },
              ].map((m) => (
                <div key={m.label} className={styles.pubMetric}>
                  <span className={styles.pubMetricValue}>{m.value}</span>
                  <span className={styles.pubMetricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Paginated publication list */}
          {doctor.publicationsList && doctor.publicationsList.length > 0 && (
            <PaginatedPublications publications={doctor.publicationsList} />
          )}

          {/* Publications URL link */}
          {doctor.publicationsUrl && (
            <div className={styles.pubUrlWrap}>
              <p className={styles.pubNote}>
                View the complete list of research publications and citations.
              </p>
              <a
                href={doctor.publicationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubLink}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View All Publications
              </a>
            </div>
          )}
        </section>
      )}



    </main>
  );
}
