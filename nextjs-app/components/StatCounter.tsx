'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ target, suffix = '', duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            if (prefersReducedMotion) {
              setCount(target);
              return;
            }
            const start = performance.now();
            function update(now: number) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCount(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
