import Link from 'next/link';
import StatCounter from '@/components/StatCounter';
import DoctorScroll from '@/components/DoctorScroll';
import TestimonialTabs from '@/components/TestimonialTabs';
import FaqSection from '@/components/FaqSection';

const ArrowIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const cancerCards = [
  { slug: 'breast-cancer', title: 'Breast Cancer', desc: 'Comprehensive diagnosis, surgery, targeted therapy & reconstruction', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
  { slug: 'cervical-cancer', title: 'Cervical Cancer', desc: 'HPV screening, colposcopy, surgery & radiation therapy', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { slug: 'lung-cancer', title: 'Lung Cancer', desc: 'Expert thoracic oncology, targeted therapy & immunotherapy', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a9 9 0 00-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11A9 9 0 0012 2z"/><path d="M12 8v4M12 16h.01"/></svg> },
  { slug: 'colorectal-cancer', title: 'Colorectal Cancer', desc: 'Minimally invasive surgery, chemotherapy & bowel conservation', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg> },
  { slug: 'blood-cancer', title: 'Blood Cancer', desc: 'Haematology, bone marrow transplant & immunotherapy', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { slug: 'head-neck-cancer', title: 'Head & Neck Cancer', desc: 'Organ-preservation surgery, radiation & speech rehabilitation', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg> },
  { slug: 'prostate-cancer', title: 'Prostate Cancer', desc: 'Precision biopsy, robotic surgery & brachytherapy options', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
  { slug: 'thyroid-cancer', title: 'Thyroid Cancer', desc: 'Minimally invasive surgery & radioiodine ablation therapy', icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0c-2 0-4 .5-4 3s2 3 4 3 4-.5 4-3-2-3-4-3zm0 6v8m-4 0h8"/></svg> },
];

export default function Home() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="section-label">+ India&apos;s Pioneer Cancer Institute</span>
              <h1 id="hero-heading">Compassionate Cancer Care,<br />Close to Home</h1>
              <p className="hero-lead">
                At Cancer Institute (WIA), we combine world-class expertise with the warmth of humanity — serving patients from prevention to palliative care since 1954. Because early cancer is curable.
              </p>
              <div className="hero-ctas">
                <Link href="#appointment" className="btn btn-primary">Book an Appointment</Link>
                <Link href="#cancer-types" className="text-link">
                  Find Your Cancer Type
                  <ArrowIcon size={16} />
                </Link>
              </div>
              <div className="hero-proof">
                <div className="proof-item"><strong>70+</strong> Years</div>
                <div className="proof-divider"></div>
                <div className="proof-item"><strong>200+</strong> Specialists</div>
                <div className="proof-divider"></div>
                <div className="proof-item"><strong>50,000+</strong> Patients/Year</div>
              </div>
            </div>

            <div className="hero-image-wrap" aria-hidden="true">
              <div className="hero-img-block">
                <div className="hero-img-placeholder">
                  <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="30" fill="#134795" opacity="0.15"/>
                    <circle cx="120" cy="60" r="30" fill="#134795" opacity="0.15"/>
                    <circle cx="90" cy="110" r="30" fill="#134795" opacity="0.15"/>
                    <circle cx="60" cy="60" r="20" fill="#134795" opacity="0.25"/>
                    <circle cx="120" cy="60" r="20" fill="#134795" opacity="0.25"/>
                    <circle cx="90" cy="110" r="20" fill="#134795" opacity="0.25"/>
                    <text x="90" y="168" textAnchor="middle" fontFamily="PT Sans Narrow, Arial" fontSize="11" fill="#134795" opacity="0.5">Medical Team Photo</text>
                  </svg>
                </div>
                <div className="hero-badge-accred">&#x2713; NABL &middot; NABH Accredited</div>
                <div className="hero-badge-rating">
                  <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p>4.8 / 5 Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="feature-cards" aria-label="Key features">
        <div className="container">
          <div className="feature-cards-grid">
            <div className="feature-card">
              <div className="feature-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h3>Personalised Care</h3>
              <p>Every patient&apos;s journey is unique. Our multidisciplinary teams design treatment plans tailored to you — with follow-up support at every step.</p>
              <Link href="#about" className="text-link">Learn more <ArrowIcon size={14} /></Link>
            </div>
            <div className="feature-card accent">
              <div className="feature-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              </div>
              <h3>Cancer Types We Treat</h3>
              <div className="feature-tags" aria-label="Cancer types">
                <span className="tag">Breast</span>
                <span className="tag">Lung</span>
                <span className="tag">Cervical</span>
                <span className="tag">Blood</span>
                <span className="tag">Colorectal</span>
                <span className="tag">Head &amp; Neck</span>
              </div>
              <Link href="#cancer-types" className="text-link">View all conditions <ArrowIcon size={14} /></Link>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              </div>
              <h3>Research &amp; Innovation</h3>
              <p>Today&apos;s research is tomorrow&apos;s treatment. We run active clinical trials and publish findings that shape cancer care across India.</p>
              <Link href="#research" className="text-link">Explore research <ArrowIcon size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section className="cancer-types section" id="cancer-types" aria-labelledby="cancer-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Conditions We Treat</span>
            <h2 id="cancer-heading">Find Care for Your Condition</h2>
            <p>We provide expert, compassionate care for all types of cancer — with specialists dedicated to every diagnosis.</p>
          </div>
          <div className="cancer-grid">
            {cancerCards.map((card) => (
              <Link href={`/cancer/${card.slug}`} className="cancer-card" key={card.slug} aria-label={`Learn about ${card.title} treatment`}>
                <div className="cancer-icon" aria-hidden="true">{card.icon}</div>
                <div className="cancer-info">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
                <svg className="cancer-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
          <div className="cancer-types-cta">
            <Link href="/cancer/breast-cancer" className="btn btn-secondary">View All Cancer Conditions</Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip" aria-label="Key statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <StatCounter target={70} suffix="+" />
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <StatCounter target={50000} suffix="+" />
              <span className="stat-label">Patients Annually</span>
            </div>
            <div className="stat-item">
              <StatCounter target={200} suffix="+" />
              <span className="stat-label">Expert Specialists</span>
            </div>
            <div className="stat-item">
              <StatCounter target={20} suffix="+" />
              <span className="stat-label">Cancer Types Treated</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us section" id="about" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ About CI(WIA)</span>
            <h2 id="why-heading">Why Patients Choose Us</h2>
            <p>For over seven decades, Cancer Institute (WIA) has been the trusted home for cancer care — where expertise meets empathy.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Pioneer Institution</h3>
              <p>Established in 1954, CI(WIA) is one of India&apos;s oldest and most respected cancer treatment and research centres. Our heritage speaks for itself.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h3>Multidisciplinary Teams</h3>
              <p>Oncosurgeons, medical oncologists, radiation specialists, pathologists, and support staff collaborate for every patient — your best outcome is our shared goal.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              </div>
              <h3>Affordable &amp; Accessible</h3>
              <p>We accept government insurance schemes (CMCHIS, Ayushman Bharat) and offer financial support to ensure no patient is denied care due to cost.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              </div>
              <h3>Research-Led Medicine</h3>
              <p>Active clinical trials, international collaborations, and peer-reviewed research ensure our patients benefit from the very latest advances in oncology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="doctors section" id="doctors" aria-labelledby="doctors-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Our Specialists</span>
            <h2 id="doctors-heading">Meet Our Cancer Specialists</h2>
            <p>Highly trained oncologists dedicated to your care — each an expert in their field.</p>
          </div>
          <DoctorScroll />
          <div className="doctors-cta">
            <Link href="/doctors/dr-krishnamurthy" className="btn btn-secondary">View All Specialists</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Patient Stories</span>
            <h2 id="testimonials-heading">Stories of Hope</h2>
            <p>Real words from patients whose lives we&apos;ve had the privilege of touching.</p>
          </div>
          <TestimonialTabs />
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="success-stories section" id="stories" aria-labelledby="stories-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Recovery</span>
            <h2 id="stories-heading">Recovery. Renewed. Resilient.</h2>
            <p>These are more than medical cases — they are stories of courage, hope, and life reclaimed.</p>
          </div>
          <div className="stories-grid">
            {[
              { badge: '5 Years Cancer-Free', type: 'Breast Cancer', title: "Priya's Journey Back to Life", desc: 'Diagnosed at 34 with stage 3 breast cancer, Priya underwent surgery, chemotherapy and reconstruction at CI(WIA). Today she runs a support group for other survivors.' },
              { badge: 'In Remission', type: 'Blood Cancer', title: "Karthik's Second Chance", desc: 'At 12, Karthik was diagnosed with leukaemia. After a bone marrow transplant and 18 months of treatment at CI(WIA), he is now completing his 10th standard exams.' },
              { badge: '3 Years Cancer-Free', type: 'Cervical Cancer', title: 'Anitha Speaks Out', desc: "A routine screening camp at CI(WIA) detected Anitha's cervical cancer at stage 1. Early detection meant a cure. Now she volunteers at our cancer awareness drives." },
            ].map((story, i) => (
              <article className="story-card" key={i}>
                <div className="story-img" aria-hidden="true">
                  <div className="story-img-inner">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
                  </div>
                  <span className="story-badge">{story.badge}</span>
                </div>
                <div className="story-content">
                  <span className="story-type">{story.type}</span>
                  <h4>{story.title}</h4>
                  <p>{story.desc}</p>
                  <Link href="#" className="text-link">Read Full Story <ArrowIcon size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="stories-cta">
            <Link href="#" className="btn btn-secondary">Share Your Story</Link>
          </div>
        </div>
      </section>

      {/* PATIENT EDUCATION */}
      <section className="education section" id="education" aria-labelledby="edu-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Know More</span>
            <h2 id="edu-heading">Your Cancer Care Guide</h2>
            <p>Knowledge is your strongest ally. Explore our educational resources written by our specialists.</p>
          </div>
          <div className="education-grid">
            {[
              { emoji: '📋', tag: 'Awareness', title: "Understanding Cancer Staging: A Patient's Guide", desc: 'What does "Stage 1" or "Stage 3" mean? Our oncologists explain cancer staging in plain, simple language to help you understand your diagnosis.' },
              { emoji: '💊', tag: 'Treatment', title: 'What to Expect During Chemotherapy', desc: 'From your first session to managing side effects at home — a practical, compassionate overview of the chemotherapy experience at CI(WIA).' },
              { emoji: '🥦', tag: 'Nutrition', title: 'Eating Well During Cancer Treatment', desc: 'Our registered dieticians share practical guidance on what to eat — and avoid — during chemotherapy and radiation to maintain strength and wellbeing.' },
            ].map((edu, i) => (
              <article className="edu-card" key={i}>
                <div className="edu-thumb" aria-hidden="true">{edu.emoji}</div>
                <div className="edu-content">
                  <span className="edu-tag">{edu.tag}</span>
                  <h4>{edu.title}</h4>
                  <p>{edu.desc}</p>
                  <Link href="#" className="text-link">Read More <ArrowIcon size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="edu-cta">
            <Link href="#" className="btn btn-secondary">Browse All Resources</Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events section" id="events" aria-labelledby="events-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Upcoming</span>
            <h2 id="events-heading">Events &amp; Screening Camps</h2>
            <p>Join us for free screenings, awareness talks, and community support programmes.</p>
          </div>
          <div className="events-list">
            {[
              { month: 'Apr', day: '12', title: 'Free Cervical Cancer Screening Camp', location: 'CI(WIA) Campus, Adyar', desc: 'Free Pap smear and HPV screening for women aged 21–65. No appointment needed.' },
              { month: 'Apr', day: '24', title: 'World Cancer Day Public Talk', location: 'Seminar Hall, CI(WIA) & Online', desc: '"Cancer is Preventable" — a public lecture by our senior oncologists on early detection and lifestyle changes.' },
              { month: 'May', day: '03', title: 'Caregiver Support Workshop', location: 'Palliative Care Unit, CI(WIA)', desc: 'A half-day workshop for family members of cancer patients — mental health, practical caregiving, and support resources.' },
            ].map((event, i) => (
              <div className="event-card" key={i}>
                <div className="event-date" aria-hidden="true">
                  <span className="month">{event.month}</span>
                  <span className="day">{event.day}</span>
                </div>
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {event.location}
                  </div>
                  <p>{event.desc}</p>
                  <Link href="#" className="text-link" style={{ fontSize: '14px' }}>Register Now <ArrowIcon size={13} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="events-cta">
            <Link href="#" className="btn btn-secondary">View All Events</Link>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="why-us section" id="research" aria-labelledby="research-heading" style={{ background: '#F7F7F9' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Advancing Oncology</span>
            <h2 id="research-heading">Research &amp; Innovation at CI(WIA)</h2>
            <p>Today&apos;s research is tomorrow&apos;s treatment. Our scientists and clinicians are at the forefront of cancer science.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>, num: '25+', label: 'Active Clinical Trials' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, num: '500+', label: 'Peer-Reviewed Publications' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, num: '10+', label: 'International Collaborations' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, num: '70+', label: 'Years of Registered Epidemiology Data' },
            ].map((item, i) => (
              <div className="why-card" style={{ textAlign: 'center', padding: '40px 24px' }} key={i}>
                <div className="why-icon" style={{ margin: '0 auto 16px' }} aria-hidden="true">{item.icon}</div>
                <h3 style={{ fontSize: '40px', color: '#23CDC0' }}>{item.num}</h3>
                <p style={{ fontSize: '15px', color: '#4B5563', maxWidth: 'none' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">+ Get Answers</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <p>Find answers to the questions our patients ask most. If you don&apos;t see your question, call us directly.</p>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="appt-cta" id="appointment" aria-labelledby="appt-heading">
        <div className="container">
          <h2 id="appt-heading">Begin Your Journey to Recovery</h2>
          <p>Our specialists are here for you — every step of the way. Reach out today.</p>
          <div className="appt-cta-btns">
            <Link href="#" className="btn btn-white">Book an Appointment</Link>
            <a href="tel:+914424910754" className="btn btn-outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call: 044-2491 0754
            </a>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="accreditations" aria-label="Accreditations and affiliations">
        <div className="container">
          <p className="accred-label">Recognised &amp; Accredited By</p>
          <div className="accred-list">
            {[
              { name: 'NABL', sub: 'Accredited Lab' },
              { name: 'NABH', sub: 'Accredited Hospital' },
              { name: 'UoM', sub: 'Affiliated — Univ. of Madras' },
              { name: 'GoTN', sub: 'Govt. of Tamil Nadu' },
              { name: 'ICMR', sub: 'Research Partner' },
            ].map((badge) => (
              <div className="accred-badge" key={badge.name}>
                <span className="badge-name">{badge.name}</span>
                <span className="badge-sub">{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
