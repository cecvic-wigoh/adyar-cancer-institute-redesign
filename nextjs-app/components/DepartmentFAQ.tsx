'use client';

import { useState } from 'react';
import styles from './DepartmentFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export default function DepartmentFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} key={i}>
            <button
              id={btnId}
              className={styles.faqQ}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <svg className={styles.faqArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={styles.faqA}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
