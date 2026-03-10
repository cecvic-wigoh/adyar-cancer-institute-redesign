import { notFound } from 'next/navigation';
import Link from 'next/link';
import { doctors, getDoctorBySlug } from '@/data/doctors';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return { title: `${doctor.name} | Cancer Institute (WIA)`, description: doctor.metaDescription };
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <main id="main">
      <section className="doctor-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">&rsaquo;</span>
            <Link href="/#doctors">Our Doctors</Link>
            <span className="separator">&rsaquo;</span>
            <span>{doctor.name}</span>
          </nav>
          <div className="doctor-hero-inner">
            <div className="doctor-hero-photo">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
            </div>
            <div className="doctor-hero-info">
              <span className="doctor-hero-specialty">{doctor.specialty}</span>
              <h1>{doctor.name}</h1>
              <p className="doctor-hero-designation">{doctor.designation}</p>
              <div className="doctor-hero-meta">
                <div className="doctor-hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {doctor.experience}
                </div>
                <div className="doctor-hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  {doctor.department.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="two-col">
            <div className="two-col-main">
              <div className="section-header"><h2>About {doctor.name}</h2></div>
              <div className="content-prose">
                {doctor.about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="section-header" style={{ marginTop: '48px' }}><h2>Qualifications</h2></div>
              <div className="content-prose">
                <ul>{doctor.qualifications.map((q, i) => <li key={i}>{q}</li>)}</ul>
              </div>
            </div>
            <div className="two-col-sidebar">
              <div className="sidebar-card">
                <h4>Areas of Expertise</h4>
                <ul>{doctor.areasOfExpertise.map((a, i) => <li key={i}><span>{a}</span></li>)}</ul>
              </div>
              <div className="sidebar-card">
                <h4>Department</h4>
                <p>
                  <Link href={`/departments/${doctor.department.slug}`} className="text-link" style={{ fontSize: '15px' }}>
                    {doctor.department.title}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section bg-off-white">
        <div className="container">
          <div className="section-header"><h2>Conditions Treated</h2></div>
          <div className="info-cards-grid">
            {doctor.conditionsTreated.map((condition, i) => (
              <div className="info-card" key={i}><h4>{condition}</h4></div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container">
          <h2>Book an Appointment with {doctor.name}</h2>
          <p>Our specialists are here for you. Reach out today.</p>
          <div className="cta-btns">
            <Link href="/#appointment" className="btn btn-white">Book an Appointment</Link>
            <a href="tel:+914424910754" className="btn btn-outline-white">Call: 044-2491 0754</a>
          </div>
        </div>
      </section>
    </main>
  );
}
