'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Doctor } from '@/data/doctors';
import styles from './doctors.module.css';

function getInitials(name: string): string {
  return name.split(' ').filter(w => /^[A-Z]/.test(w)).map(w => w[0]).slice(0, 2).join('');
}

interface Props {
  doctors: Doctor[];
  departments: { slug: string; title: string }[];
}

export default function DoctorsDirectory({ doctors, departments }: Props) {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');
  const [letterFilter, setLetterFilter] = useState('all');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filtered = useMemo(() => {
    return doctors.filter(doc => {
      const matchesDept = deptFilter === 'all' || doc.department.slug === deptFilter;
      const nameWithoutTitle = doc.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s+/i, '');
      const matchesLetter = letterFilter === 'all' 
        || (letterFilter === '#' && !/^[A-Z]/i.test(nameWithoutTitle))
        || nameWithoutTitle.toUpperCase().startsWith(letterFilter.toUpperCase());
      const q = search.toLowerCase();
      const matchesSearch = !q
        || doc.name.toLowerCase().includes(q)
        || doc.specialties.some(s => s.toLowerCase().includes(q))
        || doc.designation.toLowerCase().includes(q)
        || doc.department.title.toLowerCase().includes(q)
        || doc.areasOfExpertise.some(e => e.toLowerCase().includes(q));
      return matchesDept && matchesLetter && matchesSearch;
    });
  }, [doctors, search, deptFilter, letterFilter]);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Find a Doctor</h1>
        <p className={styles.heroSub}>
          Browse our team of {doctors.length} specialist oncologists, surgeons, and healthcare professionals.
        </p>
      </section>
 
       {/* Alphabetical Filter */}
       <div className="container">
         <div className={styles.alphabetFilter}>
           <span className={styles.alphabetLabel}>Find doctors by first letter</span>
           <div className={styles.alphabetGrid}>
             <button
               className={`${styles.allBtn} ${letterFilter === 'all' ? styles.allBtnActive : ''}`}
               onClick={() => setLetterFilter('all')}
             >
               ALL
             </button>
             {alphabet.map(letter => (
               <button
                 key={letter}
                 className={`${styles.letterCircle} ${letterFilter === letter ? styles.letterCircleActive : ''}`}
                 onClick={() => setLetterFilter(letter)}
               >
                 {letter}
               </button>
             ))}
             <button
               className={`${styles.letterCircle} ${letterFilter === '#' ? styles.letterCircleActive : ''}`}
               onClick={() => setLetterFilter('#')}
             >
               #
             </button>
           </div>
         </div>
       </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search by name, specialty, or expertise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className={styles.clearBtn} onClick={() => setSearch('')} type="button" aria-label="Clear search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
          <select
            className={styles.deptSelect}
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map(d => (
              <option key={d.slug} value={d.slug}>{d.title}</option>
            ))}
          </select>
        </div>
        <div className={styles.resultCount}>
          {filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Doctor Grid */}
      <section className={styles.grid}>
        {filtered.map((doc) => (
          <Link key={doc.slug} href={`/doctors/${doc.slug}`} className={styles.card}>
            <div className={styles.avatar}>
              <span className={styles.initials}>{getInitials(doc.name)}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardName}>{doc.name}</div>
              <div className={styles.cardDesignation}>{doc.designation}</div>
              <div className={styles.cardDept}>{doc.department.title}</div>
              <div className={styles.cardExpertise}>
                {doc.areasOfExpertise.slice(0, 2).map((e, i) => (
                  <span key={i} className={styles.expertChip}>{e}</span>
                ))}
              </div>
            </div>
            <span className={styles.viewLink}>View Profile →</span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <p>No doctors found matching your search.</p>
            <button className={styles.resetBtn} onClick={() => { setSearch(''); setDeptFilter('all'); }} type="button">
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
