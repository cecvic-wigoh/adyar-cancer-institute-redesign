'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CarouselFounder {
  slug: string;
  name: string;
  years: string;
  role: string;
  portrait: string;
  heroQuote: string;
}

const slides = [
  {
    bg: '/home-page-hero.png',
    heading: 'Because early\ncancer is curable',
    lead: 'Prevention saves lives. From free screening camps to advanced diagnostics, we are committed to detecting cancer early — when treatment is most effective.',
    cta: { label: 'Book a Screening', href: '#appointment' },
  },
  {
    bg: '/images/departments/facility-1.jpg',
    heading: 'Seven decades of\ncancer care excellence',
    lead: 'Since 1954, Cancer Institute (WIA) has grown from 12 beds in a small hut to one of India\'s largest and most respected oncology centres — treating over 100,000 patients every year.',
    cta: { label: 'Why Choose Us', href: '#about' },
  },
  {
    bg: '/images/departments/hero-bg.jpg',
    heading: 'World-class treatment,\naccessible to all',
    lead: 'Over 60% of our patients receive free or subsidised treatment. We accept government insurance schemes and ensure no patient is denied care due to cost.',
    cta: { label: 'Find a Specialist', href: '#doctors' },
  },
];

export default function FounderHeroCarousel({ founders }: { founders: CarouselFounder[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, reducedMotion, activeIndex]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      void progressRef.current.offsetHeight;
      progressRef.current.style.animation = '';
    }
  }, [activeIndex]);

  return (
    <>
    <section
      className="hero-carousel"
      aria-label="Homepage hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-carousel-slide${i === activeIndex ? ' active' : ''}`}
          aria-hidden={i !== activeIndex}
        >
          <div className="hero-carousel-bg">
            <Image
              src={slide.bg}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={i === 0}
              sizes="100vw"
            />
            <div className="hero-carousel-overlay" aria-hidden="true" />
          </div>
          <div className="hero-carousel-content">
            <div className="hero-carousel-text">
              <h2>
                {slide.heading.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < slide.heading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <div className="hero-carousel-divider" aria-hidden="true" />
              <p className="hero-carousel-lead">{slide.lead}</p>
              <div className="hero-carousel-ctas">
                <Link href={slide.cta.href} className="btn btn-white">
                  {slide.cta.label}
                </Link>
                <Link href="#cancer-types" className="hero-carousel-link">
                  Find Your Cancer Type
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Founder panel — right side, absolutely positioned within hero */}
      <div className="hero-founder-panel">
        <div className="hero-founder-panel-label">
          <span className="hero-founder-panel-line" />
          Our Founders
        </div>
        <p className="hero-founder-panel-sub">
          The visionaries who built India&apos;s first cancer centre from a 12-bed hut into a world-class institution.
        </p>
        <div className="hero-founder-cards">
          {founders.map((founder) => (
            <Link
              key={founder.slug}
              href={`/founders/${founder.slug}`}
              className="hero-founder-card"
            >
              <div className="hero-founder-avatar">
                <Image
                  src={founder.portrait}
                  alt={founder.name}
                  fill
                  sizes="72px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div className="hero-founder-info">
                <span className="hero-founder-name">{founder.name}</span>
                <span className="hero-founder-role">{founder.role}</span>
                <span className="hero-founder-years">{founder.years}</span>
              </div>
              <svg className="hero-founder-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="hero-carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && !reducedMotion && (
        <div className="hero-carousel-progress">
          <div className="hero-carousel-progress-bar" ref={progressRef} />
        </div>
      )}

    </section>

      {/* Contact strip — below hero */}
      <div className="hero-v2-strip">
        <div className="container hero-v2-strip-inner">
          <p>
            <strong>We&apos;re here for you.</strong> Call us at{' '}
            <a href="tel:+914424910754">044-2491 0754</a> or{' '}
            <Link href="#appointment">request an appointment online.</Link>
          </p>
        </div>
      </div>
    </>
  );
}
