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
                <div className="testimonial-quote-circle">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M10 21L10 18C10 16.8954 9.10457 16 8 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
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

