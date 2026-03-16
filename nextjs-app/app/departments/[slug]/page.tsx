import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllDepartmentSlugs, getDepartmentBySlug } from '@/data/departments';
import type { Metadata } from 'next';
import DepartmentFAQ from '@/components/DepartmentFAQ';
import DepartmentSidebar from '@/components/DepartmentSidebar';
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

function hexToRGB(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function getInitials(name: string): string {
  return name.split(' ').filter(w => /^[A-Z]/.test(w)).map(w => w[0]).slice(0, 2).join('');
}

const BANNER_CLASSES = [styles.eb1, styles.eb2, styles.eb3, styles.eb4, styles.eb5, styles.eb6];

const GALLERY_GRADIENTS = [
  'linear-gradient(135deg,#BFDBFE,#93C5FD)',
  'linear-gradient(135deg,#A7F3D0,#6EE7B7)',
  'linear-gradient(135deg,#DDD6FE,#C4B5FD)',
  'linear-gradient(135deg,#FDE68A,#FCD34D)',
  'linear-gradient(135deg,#FBCFE8,#F9A8D4)',
  'linear-gradient(135deg,#FED7AA,#FDBA74)',
];

const GALLERY_TAGS = ['Technology Milestone', 'Clinical Milestone', 'Conference & CME', 'Outreach Event', 'Community Outreach', 'Department Day'];

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  const sidebarSections = [
    { id: 'hero', label: 'Overview' },
    { id: 'about', label: 'About' },
    ...(dept.team.length > 0 ? [{ id: 'team', label: 'Our Team' }] : []),
    ...(dept.conditions.length > 0 ? [{ id: 'conditions', label: 'Conditions' }] : []),
    ...(dept.facilities.length > 0 ? [{ id: 'facilities', label: 'Facilities' }] : []),
    ...((dept.timeline.length > 0 || dept.achievements.length > 0) ? [{ id: 'legacy', label: 'Legacy' }] : []),
    ...(dept.hod.message ? [{ id: 'hod-message', label: 'HOD Message' }] : []),
    ...(dept.gallery.length > 0 ? [{ id: 'gallery', label: 'Gallery' }] : []),
    ...(dept.faq.length > 0 ? [{ id: 'faq', label: 'FAQ' }] : []),
    { id: 'contact', label: 'Contact Us' },
  ];

  const accentRGB = hexToRGB(dept.accentColor);

  const heroChips = dept.conditions.length > 0
    ? dept.conditions.flatMap(g => g.items).slice(0, 6)
    : [];

  return (
    <main
      id="main"
      className={styles.page}
      style={{
        '--dept-accent': dept.accentColor,
        '--dept-accent-dark': dept.accentDark,
        '--dept-accent-light': dept.accentLight,
        '--dept-accent-pale': dept.accentPale,
        '--dept-accent-rgb': accentRGB,
      } as React.CSSProperties}
    >
      <DepartmentSidebar sections={sidebarSections} />

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/#departments">Departments</Link>
          <span>&rsaquo;</span>
          <span className={styles.breadcrumbCur}>{dept.title}</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section id="hero" className={styles.hero}>
        <div className={`${styles.heroBg} ${styles.heroBg1}`} />
        <div className={`${styles.heroBg} ${styles.heroBg2}`} />
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeDot} />
              {dept.heroTagline}
            </div>
            <h1 className={styles.heroTitle}>{dept.title}</h1>
            <p className={styles.heroTagline}>{dept.heroDesc}</p>
            <div className={styles.heroBtns}>
              <a href="#contact" className={styles.btnPrimary}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book a Consultation
              </a>
              <a href="#about" className={styles.btnGhost}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></svg>
                Learn More
              </a>
            </div>
            {heroChips.length > 0 && (
              <div className={styles.heroChips}>
                {heroChips.map((chip, i) => (
                  <span key={i} className={styles.heroChip}>{chip}</span>
                ))}
              </div>
            )}
          </div>

          {/* Hero Panel */}
          <div className={styles.heroPanel}>
            <div className={styles.hpHod}>
              <div className={styles.hpAv}>{dept.hod.initial}</div>
              <div>
                <div className={styles.hpName}>{dept.hod.name}</div>
                <div className={styles.hpRole}>{dept.hod.designation}</div>
              </div>
            </div>
            {dept.stats.length > 0 && (
              <div className={styles.hpStats}>
                {dept.stats.map((s, i) => (
                  <div key={i} className={styles.hpStat}>
                    <div className={styles.hpStatNum}>{s.value}</div>
                    <div className={styles.hpStatLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.hpEmail}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href={`mailto:${dept.contactEmail}`}>{dept.contactEmail}</a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className={styles.wave}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" height="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C360,2 1080,48 1440,20 L1440,48 L0,48 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionWrap}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutBody}>
              <div className={`${styles.sectionLabel} ${styles.lblAccent}`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                About the Department
              </div>
              <h2 className={styles.sectionTitle}>What Does This Department Do?</h2>
              {dept.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={styles.aboutFacts}>
              <div className={styles.factCard}>
                <div className={styles.factIcon}>🏥</div>
                <div className={styles.factText}>
                  <strong>India&apos;s Leading Cancer Institute Since 1954</strong>
                  <span>Cancer Institute (WIA), Adyar, Chennai is a nationally recognised Comprehensive Cancer Centre — combining cutting-edge treatment, pioneering research, and deeply compassionate patient care under one roof for over seven decades.</span>
                </div>
              </div>
              <div className={styles.factCard}>
                <div className={styles.factIcon}>🤝</div>
                <div className={styles.factText}>
                  <strong>Multidisciplinary, Patient-Centred Care</strong>
                  <span>Our specialists collaborate across departments through structured tumour boards and shared care pathways — so every decision is made together, with you at the centre of every conversation.</span>
                </div>
              </div>
              <div className={styles.factCard}>
                <div className={styles.factIcon}>🎓</div>
                <div className={styles.factText}>
                  <strong>Teaching, Research &amp; Clinical Innovation</strong>
                  <span>A nationally recognised academic medical centre with active postgraduate training programmes, clinical trial participation, and a long record of contributions to Indian and global oncology literature.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      {dept.team.length > 0 && (
        <section id="team" className={styles.team}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblAccent}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Our Specialists
            </div>
            <h2 className={styles.sectionTitle}>Meet Your Care Team</h2>
            <p className={styles.sectionSub}>Our team brings together advanced training, deep clinical expertise, and genuine compassion — because great cancer care is always personal.</p>
            <div className={styles.teamGrid}>
              {dept.team.map((member, i) => (
                <div key={i} className={styles.expertCard}>
                  <div className={`${styles.expertBanner} ${BANNER_CLASSES[i % BANNER_CLASSES.length]}`}>
                    <div className={styles.expertAv} style={{ background: dept.accentColor }}>
                      {getInitials(member.name)}
                    </div>
                  </div>
                  <div className={styles.expertBody}>
                    <div className={styles.expertName}>{member.name}</div>
                    <div className={styles.expertRole}>{member.designation}</div>
                    <div className={styles.expertCreds}>{member.credentials}</div>
                  </div>
                  <a href="#contact" className={styles.expertBtn}>Book Appointment</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONDITIONS ── */}
      {dept.conditions.length > 0 && (
        <section id="conditions" className={styles.conditions}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblGold}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Conditions &amp; Scope
            </div>
            <h2 className={styles.sectionTitle}>Conditions We Treat &amp; Our Scope of Care</h2>
            <p className={styles.condIntro}>The following conditions and cancer types are managed by this department.</p>
            <div className={styles.condGroups}>
              {dept.conditions.map((group, i) => (
                <div key={i}>
                  <div className={styles.condGroupLabel}>{group.category}</div>
                  <div className={styles.condChips}>
                    {group.items.map((item, j) => (
                      <span key={j} className={styles.condChip}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FACILITIES ── */}
      {dept.facilities.length > 0 && (
        <section id="facilities" className={styles.facilities}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblNavy}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Infrastructure
            </div>
            <h2 className={styles.sectionTitle}>Facilities &amp; Infrastructure</h2>
            <p className={styles.sectionSub}>Every piece of equipment, every room, every system — purpose-designed to deliver safe, precise, and effective specialised cancer care.</p>
            <div className={styles.facGrid}>
              {dept.facilities.map((fac, i) => (
                <div key={i} className={styles.facCard}>
                  <div className={styles.facIconWrap}>🔬</div>
                  <div>
                    <div className={styles.facTitle}>{fac.title}</div>
                    <div className={styles.facDesc}>{fac.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── LEGACY (timeline + achievements) ── */}
      {(dept.timeline.length > 0 || dept.achievements.length > 0) && (
        <section id="legacy" className={styles.legacy}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblGold}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Our Heritage
            </div>
            <h2 className={styles.sectionTitle}>Our Legacy &amp; Key Achievements</h2>
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
                        <div>
                          <h5 className={styles.achieveText}>{a.text}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── HOD MESSAGE ── */}
      {dept.hod.message && (
        <section id="hod-message" className={styles.hodMessage}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblWhite}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Message from the Head of Department
            </div>
            <div className={styles.hodInner}>
              <div className={styles.hodPortrait}>
                <div className={styles.hodPortraitCircle}>{dept.hod.initial}</div>
                <div className={styles.hodNm}>{dept.hod.name}</div>
                <div className={styles.hodTtl}>{dept.hod.designation}</div>
              </div>
              <div>
                <h2 className={styles.hodContentTitle}>A Message from Our Head of Department</h2>
                <blockquote className={styles.hodBlockquote}>
                  &ldquo;{dept.hod.message.quote}&rdquo;
                </blockquote>
                {dept.hod.message.body.map((p, i) => (
                  <p key={i} className={styles.hodBody}>{p}</p>
                ))}
                <a href={`mailto:${dept.contactEmail}`} className={styles.hodEmailLink}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {dept.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      {dept.gallery.length > 0 && (
        <section id="gallery" className={styles.gallery}>
          <div className={styles.sectionWrap}>
            <div className={styles.galleryHeader}>
              <div>
                <div className={`${styles.sectionLabel} ${styles.lblAccent}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Photo Gallery
                </div>
                <h2 className={styles.sectionTitle}>Department Gallery</h2>
                <p className={styles.sectionSub}>A glimpse into our department&apos;s life beyond the clinic — conferences, community outreach, landmark milestones, and the moments that define who we are as a team.</p>
              </div>
            </div>
            <div className={styles.galleryGrid}>
              {dept.gallery.map((item, i) => (
                <div key={i} className={styles.galleryCard}>
                  <div className={styles.galleryImg} style={{ background: GALLERY_GRADIENTS[i % GALLERY_GRADIENTS.length] }}>
                    <div className={styles.galleryOverlay}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.8" strokeLinecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    </div>
                    <div className={styles.galleryTag}>{GALLERY_TAGS[i % GALLERY_TAGS.length]}</div>
                  </div>
                  <div className={styles.galleryCaption}>{item.alt}</div>
                </div>
              ))}
            </div>
            <div className={styles.galleryNote}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>
              <span>Photos are representative placeholders. Actual event photography will be updated by the department team.</span>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {dept.faq.length > 0 && (
        <section id="faq" className={styles.faq}>
          <div className={styles.sectionWrap}>
            <div className={`${styles.sectionLabel} ${styles.lblAccent}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
              Patient Questions
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSub}>Real questions, answered clearly and honestly by our clinical team — because you deserve straightforward answers before you walk through our doors.</p>
            <div className={styles.faqContainer}>
              <DepartmentFAQ items={dept.faq} />
            </div>
            <div className={styles.faqNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent-dark)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>
              <span>These answers are for general information only. Always consult your treating physician for advice specific to your medical situation.</span>
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.lblAccent}`}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book &amp; Contact
          </div>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactInfoTitle}>Department Information</h3>
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Department</div>
                  <div className={styles.cValue}>{dept.title}</div>
                </div>
              </div>
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Email</div>
                  <div className={styles.cValue}><a href={`mailto:${dept.contactEmail}`}>{dept.contactEmail}</a></div>
                </div>
              </div>
              {dept.contactPhone && (
                <div className={styles.cRow}>
                  <div className={styles.cRowIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className={styles.cLabel}>Phone</div>
                    <div className={styles.cValue}><a href={`tel:${dept.contactPhone}`}>{dept.contactPhone}</a></div>
                  </div>
                </div>
              )}
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Location</div>
                  <div className={styles.cValue}>Cancer Institute (WIA), Adyar, Chennai — 600 020</div>
                </div>
              </div>
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>OPD Hours</div>
                  <div className={styles.cValue}>Monday – Saturday · 9:00 am – 4:00 pm</div>
                </div>
              </div>
              <div className={styles.cRow}>
                <div className={styles.cRowIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--dept-accent)" strokeWidth="2.2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className={styles.cLabel}>SPOC</div>
                  <div className={styles.cValue}>{dept.hod.name}</div>
                </div>
              </div>
            </div>
            <div className={styles.bookCard}>
              <h3 className={styles.bookCardTitle}>Book an Appointment</h3>
              <p className={styles.bookCardDesc}>Taking the next step can feel daunting — we make it easy. Our care coordinators will match you with the right specialist and secure the earliest available slot.</p>
              <div className={styles.bookBtns}>
                <a href="/#appointment" className={styles.bkBtnW}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book In-Person Appointment
                </a>
                <a href={`tel:+914424910754`} className={styles.bkBtnO}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3"/></svg>
                  Request Teleconsultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
