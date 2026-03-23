import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cancerTypes, getCancerBySlug } from '@/data/cancer-types';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return cancerTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cancer = getCancerBySlug(slug);
  if (!cancer) return {};
  return { title: `${cancer.title} | Cancer Institute (WIA)`, description: cancer.metaDescription };
}

export default async function CancerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cancer = getCancerBySlug(slug);
  if (!cancer) notFound();

  return (
    <main id="main">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">&rsaquo;</span>
            <Link href="/#cancer-types">Cancer Types</Link>
            <span className="separator">&rsaquo;</span>
            <span>{cancer.title}</span>
          </nav>
        </div>
      </div>
      <section className="inner-hero" style={{ paddingTop: '16px' }}>
        <div className="container">
          <span className="section-label">+ {cancer.title}</span>
          <h1>{cancer.title}</h1>
          <p>{cancer.heroDesc}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>Understanding {cancer.title}</h2></div>
          <div className="content-prose">
            {cancer.understanding.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="content-section bg-off-white">
        <div className="container">
          <div className="info-grid">
            <div className="info-block">
              <h3>Common Symptoms</h3>
              <ul>{cancer.symptoms.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="info-block">
              <h3>Risk Factors</h3>
              <ul>{cancer.riskFactors.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Treatment Approach</h2>
            <p>Multidisciplinary, evidence-based treatment tailored to each patient.</p>
          </div>
          <div className="treatment-list">
            {cancer.treatments.map((t, i) => (
              <div className="treatment-item" key={i}>
                <div className="treatment-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="treatment-item-content">
                  <h4>{t.title}</h4>
                  <p>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section bg-off-white">
        <div className="container">
          <div className="section-header"><h2>Related Departments</h2></div>
          <div className="related-grid">
            {cancer.relatedDepartments.map((dept) => (
              <Link href={`/departments/${dept.slug}`} className="related-card" key={dept.slug}>
                <div className="related-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="related-card-content">
                  <h4>{dept.title}</h4>
                  <p>{dept.description}</p>
                </div>
                <svg className="related-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>Our {cancer.title} Specialists</h2></div>
          <div className="specialists-grid">
            {cancer.specialists.map((doc) => (
              <Link href={`/doctors/${doc.slug}`} className="specialist-card" key={doc.slug}>
                <div className="specialist-photo">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
                </div>
                <div className="specialist-info">
                  <span className="specialist-specialty">{doc.specialties.join(', ')}</span>
                  <h4>{doc.name}</h4>
                  <p className="specialist-desig">{doc.designation}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container">
          <h2>{cancer.ctaTitle}</h2>
          <p>Our specialists are here for you. Book an appointment today.</p>
          <div className="cta-btns">
            <Link href="/#appointment" className="btn btn-white">Book an Appointment</Link>
            <a href="tel:+914424910754" className="btn btn-outline-white">Call: 044-2491 0754</a>
          </div>
        </div>
      </section>
    </main>
  );
}
