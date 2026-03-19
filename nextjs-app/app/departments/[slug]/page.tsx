import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllDepartmentSlugs, getDepartmentBySlug } from '@/data/departments';
import { getDoctorsByDepartment, getDoctorQualifications } from '@/data/doctors';
import type { Metadata } from 'next';
import DepartmentFAQ from '@/components/DepartmentFAQ';
import styles from './department.module.css';

export async function generateStaticParams() {
  return getAllDepartmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};
  return {
    title: `${dept.title} | Cancer Institute (WIA)`,
    description: dept.metaDescription,
  };
}

function getInitials(name: string): string {
  return name.split(' ').filter(w => /^[A-Z]/.test(w)).map(w => w[0]).slice(0, 2).join('');
}

const GALLERY_IMAGES = [
  '/images/departments/gallery-1.jpg',
  '/images/departments/gallery-2.jpg',
  '/images/departments/gallery-3.jpg',
  '/images/departments/gallery-4.jpg',
  '/images/departments/gallery-5.jpg',
  '/images/departments/gallery-6.jpg',
];

const GALLERY_TAGS = ['Technology Milestone', 'Clinical Milestone', 'Conference & CME', 'Outreach Event', 'Community Outreach', 'Department Day'];

const DOCTOR_PHOTOS = [
  '/images/departments/doctor-1.jpg',
  '/images/departments/doctor-2.jpg',
  '/images/departments/doctor-3.jpg',
  '/images/departments/doctor-4.jpg',
];

const FACILITY_IMAGES = [
  '/images/departments/facility-1.jpg',
  '/images/departments/facility-2.jpg',
  '/images/departments/facility-3.jpg',
  '/images/departments/facility-4.jpg',
];

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  return (
    <main id="main" className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image
          src="/images/departments/hero-bg.jpg"
          alt=""
          fill
          className={styles.heroOverlay}
          priority
        />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{dept.title}</h1>
            <p className={styles.heroSub}>{dept.heroDesc}</p>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTitle}>Request an Appointment</div>
            <div className={styles.heroCardField}>
              <label className={styles.heroCardLabel}>Full Name</label>
              <input className={styles.heroCardInput} type="text" placeholder="Your full name" readOnly />
            </div>
            <div className={styles.heroCardField}>
              <label className={styles.heroCardLabel}>Phone Number</label>
              <input className={styles.heroCardInput} type="tel" placeholder="+91 " readOnly />
            </div>
            <div className={styles.heroCardField}>
              <label className={styles.heroCardLabel}>Department</label>
              <input className={styles.heroCardInput} type="text" value={dept.title} readOnly />
            </div>
            <button className={styles.heroCardBtn} type="button">Book Appointment</button>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <Link href="/#departments">Departments</Link>
          <span className={styles.breadcrumbSep}>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>{dept.title}</span>
        </nav>
      </div>

      {/* ── ABOUT ── */}
      <div className={styles.section}>
        <div className={styles.aboutGrid}>
          <div>
            <h2 className={styles.sectionTitleSerif}>{dept.title}</h2>
            <div className={styles.aboutBody}>
              {dept.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className={styles.aboutIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="white"/></svg>
          </div>
        </div>
      </div>

      {/* ── DOCTORS ── */}
      {(() => {
        const deptDoctors = getDoctorsByDepartment(slug);
        return deptDoctors.length > 0 ? (
          <div className={styles.sectionAlt}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitleSerif}>Our Doctors</h2>
              <div className={styles.sectionLine} />
              <div className={styles.doctorsGrid}>
                {deptDoctors.map((doctor, i) => (
                  <Link key={doctor.slug} href={`/doctors/${doctor.slug}`} className={styles.doctorCardLink}>
                    <div className={styles.doctorCard}>
                      <div className={styles.doctorPhoto}>
                        <Image
                          src={doctor.image || DOCTOR_PHOTOS[i % DOCTOR_PHOTOS.length]}
                          alt={doctor.name}
                          width={160}
                          height={160}
                          className={styles.doctorImg}
                        />
                      </div>
                      <div className={styles.doctorName}>{doctor.name}</div>
                      <div className={styles.doctorRole}>{doctor.designation}</div>
                      <div className={styles.doctorCreds}>{getDoctorQualifications(doctor).slice(0, 3).join(', ')}</div>
                      <span className={styles.doctorViewProfile}>View Profile →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null;
      })()}

      {/* ── FACILITIES ── */}
      {dept.facilities.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitleSerif}>Advanced Technology &amp; Facilities</h2>
          <p className={styles.sectionSub}>Every piece of equipment, every system — purpose-designed to deliver safe, precise, and effective cancer care.</p>
          <div className={styles.facilitiesContent}>
            <div className={styles.facilitiesList}>
              {dept.facilities.map((fac, i) => (
                <div key={i} className={styles.facilityItem}>
                  <div className={styles.facilityBullet} />
                  <div>
                    <strong>{fac.title}</strong>
                    {fac.description && <> — {fac.description}</>}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.facilitiesImages}>
              <div className={styles.facilityImgWrap}>
                <Image src={FACILITY_IMAGES[0]} alt="Medical facility" width={280} height={200} className={styles.facilityImg} />
              </div>
              <div className={styles.facilityImgWrap}>
                <Image src={FACILITY_IMAGES[1]} alt="Medical equipment" width={280} height={200} className={styles.facilityImg} />
              </div>
              <div className={styles.facilityImgWrap}>
                <Image src={FACILITY_IMAGES[2]} alt="Operating theatre" width={280} height={200} className={styles.facilityImg} />
              </div>
              <div className={styles.facilityImgWrap}>
                <Image src={FACILITY_IMAGES[3]} alt="Hospital corridor" width={280} height={200} className={styles.facilityImg} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CONDITIONS ── */}
      {dept.conditions.length > 0 && (
        <div className={styles.sectionAlt}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Conditions We Treat
              <span className={styles.sectionLine} />
            </h2>
            <div className={styles.condChips}>
              {dept.conditions.flatMap(g => g.items).map((item, i) => (
                <span key={i} className={styles.condChip}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── LEGACY ── */}
      {(dept.timeline.length > 0 || dept.achievements.length > 0) && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Our Legacy &amp; Achievements
            <span className={styles.sectionLine} />
          </h2>
          <div className={styles.legacyGrid}>
            {dept.timeline.length > 0 && (
              <div>
                <h3 className={styles.legacyHeading}>Department History</h3>
                <div className={styles.timeline}>
                  {dept.timeline.map((item, i) => (
                    <div key={i} className={styles.tlItem}>
                      <div className={styles.tlDot} />
                      <div className={styles.tlYear}>{item.year}</div>
                      <div className={styles.tlText}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {dept.achievements.length > 0 && (
              <div>
                <h3 className={styles.legacyHeading}>Key Achievements</h3>
                <div className={styles.achieveList}>
                  {dept.achievements.map((a, i) => (
                    <div key={i} className={styles.achieveItem}>
                      <div className={styles.achieveStar}>⭐</div>
                      <div className={styles.achieveText}>{a.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── HOD MESSAGE ── */}
      {dept.hod.message && (
        <section className={styles.hodSection}>
          <div className={styles.hodInner}>
            <div className={styles.hodPortrait}>
              <div className={styles.hodCircle}>{dept.hod.initial}</div>
              <div className={styles.hodName}>{dept.hod.name}</div>
              <div className={styles.hodRole}>{dept.hod.designation}</div>
            </div>
            <div className={styles.hodContent}>
              <h2>Message from HOD</h2>
              <blockquote className={styles.hodBlockquote}>
                &ldquo;{dept.hod.message.quote}&rdquo;
              </blockquote>
              {dept.hod.message.body.map((p, i) => (
                <p key={i} className={styles.hodBody}>{p}</p>
              ))}
              <a href={`mailto:${dept.contactEmail}`} className={styles.hodEmail}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {dept.contactEmail}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── GALLERY / BLOGS ── */}
      {dept.gallery.length > 0 && (
        <div className={styles.sectionAlt}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitleSerif}>Blogs</h2>
            <p className={styles.sectionSub}>A glimpse into our department&apos;s conferences, outreach, milestones, and the moments that define our team.</p>
            <div className={styles.galleryGrid}>
              {dept.gallery.map((item, i) => (
                <div key={i} className={styles.galleryCard}>
                  <div className={styles.galleryImg}>
                    <Image
                      src={GALLERY_IMAGES[i % GALLERY_IMAGES.length]}
                      alt={item.alt}
                      fill
                      className={styles.galleryPhoto}
                    />
                    <div className={styles.galleryOverlay} />
                    <div className={styles.galleryTag}>{GALLERY_TAGS[i % GALLERY_TAGS.length]}</div>
                  </div>
                  <div className={styles.galleryCaption}>{item.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── FAQ ── */}
      {dept.faq.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions
            <span className={styles.sectionLine} />
          </h2>
          <div className={styles.faqContainer}>
            <DepartmentFAQ items={dept.faq} />
          </div>
        </div>
      )}

      {/* ── CTA BAR (Book Appointment + FAQ) ── */}
      <div className={styles.ctaBar}>
        <div className={styles.ctaInner}>
          <a href="/#appointment" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div className={styles.ctaCardTitle}>Book Appointment</div>
              <div className={styles.ctaCardDesc}>Schedule a consultation with our specialists</div>
            </div>
          </a>
          <a href="#faq" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="white"/></svg>
            </div>
            <div>
              <div className={styles.ctaCardTitle}>Frequently Asked Questions</div>
              <div className={styles.ctaCardDesc}>Get answers to common patient questions</div>
            </div>
          </a>
        </div>
      </div>

      {/* ── CONTACT INFO ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Contact Information
          <span className={styles.sectionLine} />
        </h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Department Details</h3>
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>Department</div>
                <div className={styles.cValue}>{dept.title}</div>
              </div>
            </div>
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>Email</div>
                <div className={styles.cValue}><a href={`mailto:${dept.contactEmail}`}>{dept.contactEmail}</a></div>
              </div>
            </div>
            {dept.contactPhone && (
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Phone</div>
                  <div className={styles.cValue}><a href={`tel:${dept.contactPhone}`}>{dept.contactPhone}</a></div>
                </div>
              </div>
            )}
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>Location</div>
                <div className={styles.cValue}>Cancer Institute (WIA), Adyar, Chennai — 600 020</div>
              </div>
            </div>
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>OPD Hours</div>
                <div className={styles.cValue}>Monday – Saturday · 9:00 am – 4:00 pm</div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Head of Department</h3>
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>Name</div>
                <div className={styles.cValue}>{dept.hod.name}</div>
              </div>
            </div>
            <div className={styles.cRow}>
              <div className={styles.cRowIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <div className={styles.cLabel}>Designation</div>
                <div className={styles.cValue}>{dept.hod.designation}</div>
              </div>
            </div>
            {dept.hod.credentials && (
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="2.2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Credentials</div>
                  <div className={styles.cValue}>{dept.hod.credentials}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
