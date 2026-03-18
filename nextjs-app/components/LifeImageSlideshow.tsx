'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../app/founders/[slug]/founder.module.css';

interface LifeImage {
  src: string;
  caption: string;
}

export default function LifeImageSlideshow({ images }: { images: LifeImage[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active, images.length]);

  return (
    <div
      className={styles.lifeSlideshow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.lifeSlideshowFrame}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.lifeSlideshowSlide} ${i === active ? styles.lifeSlideshowSlideActive : ''}`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>
      <p className={styles.lifeSlideshowCaption}>{images[active].caption}</p>
      <div className={styles.lifeSlideshowDots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.lifeSlideshowDot} ${i === active ? styles.lifeSlideshowDotActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
