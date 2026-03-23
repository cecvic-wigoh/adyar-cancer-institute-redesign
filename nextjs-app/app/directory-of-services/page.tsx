"use client";

import { useState } from 'react';
import Link from 'next/link';
import { directoryOfServices } from '@/data/dos';
import styles from './page.module.css';

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

export default function DirectoryOfServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = directoryOfServices.filter(test => {
    const term = searchQuery.toLowerCase();
    return (
      test.testName.toLowerCase().includes(term) ||
      test.department.toLowerCase().includes(term) ||
      test.id.toLowerCase().includes(term)
    );
  });

  return (
    <main id="main" className={styles.page}>
      <div className={`container`}>
        
        <div className={styles.header}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/diagnostics">Diagnostics</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCur}>Directory of Services</span>
          </div>

          <h1 className={styles.title}>Directory of Services (DOS)</h1>
          <p className={styles.description}>
            Search our comprehensive catalog of diagnostic tests to view specimen requirements, 
            turnaround times, and methodologies.
          </p>

          <div className={styles.searchWrap}>
            <div className={styles.searchIcon}><SearchIcon /></div>
            <input 
              type="text" 
              className={styles.searchInput}
              placeholder="Search by test name, ID, or department..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.dosTable}>
            <thead>
              <tr>
                <th>Test Name / ID</th>
                <th>Department</th>
                <th>Requirements</th>
                <th>Methodology</th>
                <th>TAT</th>
                <th>Accreditation</th>
              </tr>
            </thead>
            <tbody>
              {filteredTests.length > 0 ? (
                filteredTests.map((test) => (
                  <tr key={test.id}>
                    <td>
                      <div className={styles.testName}>{test.testName}</div>
                      <div className={styles.testId}>{test.id}</div>
                    </td>
                    <td><span className={styles.badge}>{test.department}</span></td>
                    <td className={styles.requirements}>{test.requirements}</td>
                    <td className={styles.methodology}>{test.method}</td>
                    <td className={styles.tat}>{test.tat}</td>
                    <td className={styles.accreditation}>{test.accreditation}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className={styles.emptyState}>
                    No tests found matching "{searchQuery}". Please try another term.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
