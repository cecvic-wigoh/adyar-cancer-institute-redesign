'use client';

import { useRef } from 'react';
import Link from 'next/link';

const doctors = [
  { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
  { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialty: 'Medical Oncology', designation: 'Senior Oncologist' },
  { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Head, Radiation Oncology' },
  { slug: 'dr-shanta', name: 'Dr. V. Shanta', specialty: 'Paediatric Oncology', designation: 'Chairperson & Senior Consultant' },
  { slug: 'dr-balasubramanian', name: 'Dr. M. Balasubramanian', specialty: 'Haematology', designation: 'Consultant Haematologist' },
  { slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialty: 'Gynaec Oncology', designation: 'Consultant Gynaec Oncologist' },
];

export default function DoctorScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('.doctor-card');
    const w = (card?.clientWidth || 220) + 20;
    scrollRef.current.scrollBy({ left: dir * w, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div className="doctors-scroll-controls">
        <button className="scroll-arrow prev" aria-label="Scroll doctors left" onClick={() => scroll(-1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button className="scroll-arrow next" aria-label="Scroll doctors right" onClick={() => scroll(1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="doctors-scroll" role="list" ref={scrollRef}>
        {doctors.map((doc) => (
          <div className="doctor-card" role="listitem" key={doc.slug}>
            <div className="doctor-photo" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#134795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
            </div>
            <span className="doctor-specialty">{doc.specialty}</span>
            <h4>{doc.name}</h4>
            <p className="doctor-desig">{doc.designation}</p>
            <Link href={`/doctors/${doc.slug}`} className="text-link" style={{ fontSize: '13px', justifyContent: 'center' }}>
              View Profile <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
