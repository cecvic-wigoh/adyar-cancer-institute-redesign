'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Founder {
  slug: string;
  name: string;
  years: string;
  role: string;
  portrait: string;
  heroQuote: string;
  heroSnippet: string;
}

interface FounderLegacyWidgetProps {
  founders: Founder[];
  activeFounderIndex: number;
  onNavigate: (index: number) => void;
}

export default function FounderLegacyWidget({ 
  founders 
}: { 
  founders: Founder[] 
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % founders.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [founders.length]);

  return (
    <div className="founder-legacy-widget" aria-label="Our Founders Legacy">
      <div className="testimonial-widget-header">
        <span className="testimonial-widget-label">Our Legacy</span>
      </div>

      <div className="testimonial-widget-content">
        <div className="founder-legacy-slides">
          {founders.map((f, i) => (
            <div 
              key={f.slug} 
              className={`testimonial-widget-slide ${i === activeIndex ? 'active' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div className="founder-legacy-portrait-container">
                <Image 
                  src={f.portrait} 
                  alt={f.name} 
                  width={180} 
                  height={180} 
                  className="founder-legacy-portrait"
                />
              </div>
              <p className="testimonial-widget-text">&ldquo;{f.heroQuote.replace(/[“”]/g, '')}&rdquo;</p>
              <div className="testimonial-widget-author">
                <span className="author-name">{f.name}</span>
                <span className="author-info">{f.years} &bull; {f.role}</span>
              </div>
              <Link href={`/founders/${f.slug}`} className="founder-legacy-link">
                Read Full Legacy 
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-widget-dots">
        {founders.map((_, i) => (
          <button 
            key={i} 
            className={i === activeIndex ? 'active' : ''} 
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to founder ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

