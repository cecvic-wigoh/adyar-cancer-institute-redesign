/**
 * DepartmentDiagnostic.tsx
 * Template for diagnostic department pages (e.g. Radiology, Nuclear Medicine).
 * Green-accented layout with patient guide, diagnostic services,
 * equipment showcase, and referral CTA.
 */

import Image from 'next/image';
import type { Department } from '@/data/departments';
import StickyDoctorBar from '@/components/StickyDoctorBar';
import {
  DeptBreadcrumb,
  DeptHodMessage,
  DeptSection,
  DeptLegacy,
  DeptAchievements,
  DeptExperts,
} from '@/components/DepartmentShared';
import styles from '@/app/departments/[slug]/department-diagnostic.module.css';

interface DepartmentDiagnosticProps {
  department: Department;
}

export default function DepartmentDiagnostic({ department }: DepartmentDiagnosticProps) {
  const dept = department;

  /* ── Build section nav items ── */
  const sectionItems: { id: string; label: string }[] = [
    { id: 'overview', label: 'Overview' },
  ];

  if (dept.diagnosticServices && dept.diagnosticServices.length > 0) {
    sectionItems.push({ id: 'patient-guide', label: 'Patient Guide' });
    sectionItems.push({ id: 'diagnostic-services', label: 'Services' });
  }

  if (dept.therapeuticServices && dept.therapeuticServices.length > 0) {
    sectionItems.push({ id: 'therapeutic-services', label: 'Therapies' });
  }

  if (dept.equipment && dept.equipment.length > 0) {
    sectionItems.push({ id: 'equipment', label: 'Equipment' });
  }

  if (dept.experts.length > 0) {
    sectionItems.push({ id: 'experts', label: 'Our Experts' });
  }

  if (dept.legacy.length > 0) {
    sectionItems.push({ id: 'legacy', label: 'Legacy' });
  }

  if (dept.achievements.length > 0) {
    sectionItems.push({ id: 'achievements', label: 'Achievements' });
  }

  sectionItems.push({ id: 'referral', label: 'Referral' });

  return (
    <main className={styles.page}>
      {/* 1. Breadcrumb */}
      <DeptBreadcrumb deptTitle={dept.title} deptSlug={dept.slug} />

      {/* 2. Sticky Nav */}
      <StickyDoctorBar sections={sectionItems} />

      {/* 3. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLabel}>Department</div>
          <h1 className={styles.heroTitle}>{dept.title}</h1>
          <p className={styles.heroTagline}>{dept.tagline}</p>
        </div>
      </section>

      {/* 4. HOD Message */}
      <DeptHodMessage hod={dept.hod} />

      {/* 5. Department Overview */}
      <DeptSection label="About the Department" title="Department Overview" id="overview">
        <div className={styles.overviewBody}>
          {dept.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </DeptSection>

      {/* 6. Patient Guide (What to Expect) */}
      {dept.diagnosticServices && dept.diagnosticServices.length > 0 && (
        <div className={styles.guideSection} id="patient-guide">
          <div className={styles.guideInner}>
            <h2 className={styles.guideTitle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a6b5a" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              What to Expect During Your Visit
            </h2>
            <p className={styles.guideSub}>
              Understanding your imaging procedure — a simple guide for patients and families
            </p>
            <div className={styles.guideSteps}>
              <div className={styles.guideStep}>
                <div className={styles.guideStepNum}>1</div>
                <h4>Before Your Scan</h4>
                <p>
                  Your referring doctor will explain which imaging test is needed. Some scans
                  require fasting or specific preparation — our team will provide clear
                  instructions when you schedule.
                </p>
              </div>
              <div className={styles.guideStep}>
                <div className={styles.guideStepNum}>2</div>
                <h4>During the Procedure</h4>
                <p>
                  Most imaging tests are painless and non-invasive. You may need to lie still
                  for a few minutes while the scanner captures images. Our technologists ensure
                  your comfort throughout.
                </p>
              </div>
              <div className={styles.guideStep}>
                <div className={styles.guideStepNum}>3</div>
                <h4>After Your Scan</h4>
                <p>
                  Our radiologists analyze your images and prepare a detailed report for your
                  treating doctor. Results are typically available within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Diagnostic Services */}
      {dept.diagnosticServices && dept.diagnosticServices.length > 0 && (
        <div className={styles.servicesSection} id="diagnostic-services">
          <div className={styles.servicesInner}>
            <div style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '1.5px',
              color: 'var(--color-teal-accessible)',
              marginBottom: '8px',
            }}>
              For Clinicians
            </div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '28px',
              fontWeight: 600,
              color: '#1a6b5a',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Diagnostic Services &amp; Techniques
            </h2>

            {dept.diagnosticServices.map((cat, i) => (
              <div key={i} className={styles.servicesCategory}>
                <div className={styles.servicesCatTitle}>{cat.category}</div>
                <ul className={styles.servicesList}>
                  {cat.services.map((service, j) => (
                    <li key={j}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. Therapeutic Services */}
      {dept.therapeuticServices && dept.therapeuticServices.length > 0 && (
        <DeptSection label="Treatment Capabilities" title="Therapeutic Services" id="therapeutic-services">
          <div className={styles.therapyGrid}>
            {dept.therapeuticServices.map((service, i) => (
              <div key={i} className={styles.therapyCard}>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </DeptSection>
      )}

      {/* 9. Equipment & Technology */}
      {dept.equipment && dept.equipment.length > 0 && (
        <DeptSection label="Our Technology" title="Equipment & Technology" id="equipment">
          <div className={styles.equipmentGrid}>
            {dept.equipment.map((item, i) => (
              <div key={i} className={styles.equipmentCard}>
                <div className={styles.equipmentImg}>
                  <div className={styles.equipmentIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                </div>
                <div className={styles.equipmentBody}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  {item.badge && (
                    <span className={styles.equipmentBadge}>{item.badge}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DeptSection>
      )}

      {/* 10. Our Experts */}
      {dept.experts.length > 0 && (
        <DeptSection label="Meet the Team" title="Our Experts" id="experts">
          <DeptExperts experts={dept.experts} />
        </DeptSection>
      )}

      {/* 11. Legacy & History */}
      {dept.legacy.length > 0 && (
        <DeptSection label="Our Heritage" title="Legacy & History" id="legacy">
          <DeptLegacy legacy={dept.legacy} />
        </DeptSection>
      )}

      {/* 12. Key Achievements */}
      {dept.achievements.length > 0 && (
        <DeptSection label="Milestones" title="Key Achievements" id="achievements">
          <DeptAchievements achievements={dept.achievements} />
        </DeptSection>
      )}

      {/* 13. Referral & Contact */}
      <div className={styles.referralSection} id="referral">
        <div className={styles.referralInner}>
          <h3>Refer a Patient</h3>
          <p>Our imaging services are available upon referral from treating physicians</p>
          <p className={styles.referralEmail}>{dept.contactEmail}</p>
          <div className={styles.referralNote}>
            <strong>For referring physicians:</strong> When ordering imaging, please include
            clinical history, suspected diagnosis, and specific imaging requirements to help
            our radiologists provide the most accurate interpretation.
          </div>
        </div>
      </div>
    </main>
  );
}
