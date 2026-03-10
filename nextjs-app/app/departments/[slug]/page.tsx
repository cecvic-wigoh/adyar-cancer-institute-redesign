import { notFound } from 'next/navigation';
import Link from 'next/link';
import { departments, getDepartmentBySlug } from '@/data/departments';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};
  return { title: `${dept.title} | Cancer Institute (WIA)`, description: dept.metaDescription };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  return (
    <main id="main">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">&rsaquo;</span>
            <Link href="/#cancer-types">Departments</Link>
            <span className="separator">&rsaquo;</span>
            <span>{dept.title}</span>
          </nav>
          <span className="section-label">+ {dept.title}</span>
          <h1>{dept.title}</h1>
          <p>{dept.heroDesc}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>About the Department</h2></div>
          <div className="content-prose">
            {dept.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="content-section bg-off-white">
        <div className="container">
          <div className="section-header"><h2>Treatments &amp; Capabilities</h2></div>
          <div className="info-cards-grid">
            {dept.capabilities.map((cap, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <h4>{cap.title}</h4>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>Conditions We Treat</h2></div>
          <div className="related-grid">
            {dept.relatedCancers.map((cancer) => (
              <Link href={`/cancer/${cancer.slug}`} className="related-card" key={cancer.slug}>
                <div className="related-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
                <div className="related-card-content">
                  <h4>{cancer.title}</h4>
                  <p>{cancer.description}</p>
                </div>
                <svg className="related-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section bg-off-white">
        <div className="container">
          <div className="section-header"><h2>Our Specialists</h2></div>
          <div className="specialists-grid">
            {dept.specialists.map((doc) => (
              <Link href={`/doctors/${doc.slug}`} className="specialist-card" key={doc.slug}>
                <div className="specialist-photo">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
                </div>
                <div className="specialist-info">
                  <span className="specialist-specialty">{doc.specialty}</span>
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
          <h2>{dept.ctaTitle}</h2>
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
