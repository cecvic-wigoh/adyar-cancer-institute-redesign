'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { testimonialsEn, testimonialsTa } from '@/data/testimonials';

export default function TestimonialWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lang, setLang] = useState<'en' | 'ta'>('en');
  const testimonials = lang === 'en' ? testimonialsEn : testimonialsTa;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length, lang]);

  return (
    <div className="testimonial-widget" aria-label="Patient Testimonials">
      <div className="testimonial-widget-header">
        <span className="testimonial-widget-label">Voices of Hope</span>
        <div className="testimonial-widget-lang">
          <button 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => { setLang('en'); setActiveIndex(0); }}
          >
            EN
          </button>
          <button 
            className={lang === 'ta' ? 'active' : ''} 
            onClick={() => { setLang('ta'); setActiveIndex(0); }}
          >
            தமிழ்
          </button>
        </div>
      </div>

      <div className="testimonial-widget-content">
        <div className="testimonial-widget-slides">
          {testimonials.map((t, i) => (
            <div 
              key={t.id} 
              className={`testimonial-widget-slide ${i === activeIndex ? 'active' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div className="testimonial-portrait-container">
                <img
                  className="testimonial-widget-avatar"
                  src={t.image}
                  alt={t.author}
                />
              </div>
              <p className="testimonial-widget-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-widget-author">
                <span className="author-name">{t.author}</span>
                <span className="author-info">{t.role} &bull; {t.location}</span>
              </div>
              <Link href="#testimonials" className="founder-legacy-link">
                Read More Stories
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-widget-dots">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            className={i === activeIndex ? 'active' : ''} 
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

