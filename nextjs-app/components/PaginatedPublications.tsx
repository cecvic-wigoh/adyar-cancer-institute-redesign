'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './PaginatedPublications.module.css';

const PER_PAGE = 10;

interface Props {
  publications: string[];
}

export default function PaginatedPublications({ publications }: Props) {
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(publications.length / PER_PAGE);

  const goToPage = useCallback((p: number) => {
    setPage(p);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const start = page * PER_PAGE;
  const end = Math.min(start + PER_PAGE, publications.length);
  const visible = publications.slice(start, end);

  // Build page number list with ellipsis
  const getPageNumbers = (): (number | '...')[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
    const pages: (number | '...')[] = [0];
    const left = Math.max(1, page - 1);
    const right = Math.min(totalPages - 2, page + 1);
    if (left > 1) pages.push('...');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 2) pages.push('...');
    pages.push(totalPages - 1);
    return pages;
  };

  return (
    <div ref={sectionRef} className={styles.wrap}>
      <div className={styles.summary}>
        {publications.length} Publications
      </div>

      <div className={styles.list}>
        {visible.map((citation, i) => (
          <div key={start + i} className={styles.item}>
            <div className={styles.number}>{start + i + 1}</div>
            <div className={styles.citation}>{citation}</div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.paginationWrap}>
          <div className={styles.showing}>
            Showing {start + 1}–{end} of {publications.length}
          </div>
          <div className={styles.pagination}>
            <button
              className={`${styles.pageBtn} ${styles.navBtn}`}
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
            {getPageNumbers().map((p, i) =>
              p === '...' ? (
                <span key={`e${i}`} className={styles.ellipsis}>...</span>
              ) : (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${p === page ? styles.active : ''}`}
                  onClick={() => goToPage(p)}
                >
                  {p + 1}
                </button>
              )
            )}
            <button
              className={`${styles.pageBtn} ${styles.navBtn}`}
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
